import { useState, useEffect, KeyboardEvent, useRef, useContext } from "react";
import { useRouter } from "next/router";
import { Header } from "../components/Header";
import { MessageScreen, Message, SessionContainer } from "./styled";
import Cookies from "js-cookie";
import { setupAPIClient } from "@/lib/api";
import isPropValid from '@emotion/is-prop-valid';


interface MessageServer{
  content:string;
  userName:string;
}

export default function Session() {
  const router = useRouter();
  const [messages,setMessages] = useState<MessageServer[]>([]);
  const [message, setMessage] = useState<string>("");
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const messageScreenRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const api = setupAPIClient()
        const response = await api.get(`messages/${router.query.roomId}`,{
          withCredentials:true
        })
        const {messages} = await response.data
        setMessages(messages);
      } catch (error) {
        console.error("Erro ao buscar as salas:", error);
      }
    };
    fetchMessages();
  }, [router.query.roomId]);

  useEffect(() => {
    
    if (router.query.roomId) {
      const jwtToken = Cookies.get("chat.token");
      const socket = new WebSocket(`ws://localhost:3333?token=${jwtToken}`,);
      socket.onopen = () => {
        console.log("Conexão estabelecida com o servidor WebSocket.");
        const eventObject = {
          event: "select_room",
          payload: {
            roomId: router.query.roomId,
          },
        };
        socket.send(JSON.stringify(eventObject));
      };
      socket.onmessage = (event) => {
        const data = JSON.parse(event.data)
        if (data.event === "message") {
          const { payload } = data;
          setMessages(prevMessages => [...prevMessages, payload]);
        }
      };
      socket.onclose = () => {
        console.log("Conexão WebSocket fechada.");
      };

      setSocket(socket);
    }
  }, [router.query.roomId]);

  useEffect(() => {
    if (messageScreenRef.current) {
      messageScreenRef.current.scrollTop = messageScreenRef.current.scrollHeight;
    }
  }, [messages]);


  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && socket) {
      const eventObject = {
        event: "message",
        payload: {
          userName: router.query.userName,
          roomId: router.query.roomId,
          content: message
        },  
      };
      socket.send(JSON.stringify(eventObject));
      setMessage("");
    }
  };

  useEffect(() => {
    const handlePageUnload = () => {
      if (socket) {
        const eventObject = {
          event: "leave_room",
          payload: {
            roomId: router.query.roomId,
          },
        };
        socket.send(JSON.stringify(eventObject));
      }
    };

    window.addEventListener("beforeunload", handlePageUnload);
    return () => {
      window.removeEventListener("beforeunload", handlePageUnload);
    };
  }, [socket, router.query.roomId]);

  return (
    <div style={{ display: "flex", height: "100vh", flexDirection: "column" }}>
      <Header />
      <SessionContainer>
        <div>
          <MessageScreen ref={messageScreenRef}>
            {messages.map((message, index) => {
              return (
                <Message key={index} $user={message.userName === Cookies.get("chat.userName")}>
                  <span>{message.userName}</span>
                  <p>{message.content}</p>
                </Message>
              );
            })}
          </MessageScreen>
        </div>
        <input
          type="text"
          value={message}
          onKeyPress={handleKeyPress}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Digite sua mensagem e pressione Enter..."
        />
      </SessionContainer>
    </div>
  );
  
}
