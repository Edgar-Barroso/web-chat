import { useRouter } from "next/router";
import { Header } from "../components/Header";
import { MessageScreen, Message, SessionContainer } from "./styled";
import { useEffect } from "react";

export default function Session() {
  const { query } = useRouter();
  useEffect(() => {
    const socket = new WebSocket('ws://localhost:3001');
  
    socket.onopen = () => {
      console.log('Conexão estabelecida com o servidor WebSocket.');
  
      // Emitting an event to the server
      const eventObject = {
        eventName: 'select_room',
        eventData: {
          userId: 'user-1',
          roomId: 'room-1',

        },
      };
      socket.send(JSON.stringify(eventObject));
      const eventObject2 = {
        eventName: 'message',
        eventData: {
          content:"hello world"

        },
      };
      socket.send(JSON.stringify(eventObject2));
    };
  
    socket.onmessage = (event) => {
      console.log('Mensagem recebida:', event.data);
    };
  
    socket.onclose = () => {
      console.log('Conexão WebSocket fechada.');
    };
  
    // Clean up WebSocket connection on component unmount
    return () => {
      socket.close();
    };
  }, []);
  
  return (
    <div style={{ display: "flex", height: "100vh", flexDirection: "column" }}>
      <Header />
      <SessionContainer>
        <div>
          <MessageScreen>
            <Message user={false}>
              <p>hello world!!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello world!</p>
              <span>Userhello world!</span>
            </Message>
            <Message user={true}>
              <span>User 1</span>
              <p>hello world!!</p>
            </Message>
            <Message user={false}>
              <p>hello world!!</p>
              <span>User 3</span>
            </Message>
            <Message user={false}>
              <p>hello world!!</p>
              <span>User 2</span>
            </Message>
            <Message user={true}>
              <span>User 1</span>
              <p>hello world!!</p>
            </Message>
            <Message user={false}>
              <p>hello world!!</p>
              <span>User 3</span>
            </Message>
            <Message user={false}>
              <p>hello world!!</p>
              <span>User 2</span>
            </Message>
            <Message user={true}>
              <span>User 1</span>
              <p>hello world!!</p>
            </Message>
            <Message user={false}>
              <p>hello world!!</p>
              <span>User 3</span>
            </Message>
            <Message user={false}>
              <p>hello world!!</p>
              <span>User 2</span>
            </Message>
            <Message user={true}>
              <span>User 1</span>
              <p>hello world!!</p>
            </Message>
            <Message user={false}>
              <p>hello world!!</p>
              <span>User 3</span>
            </Message>
          </MessageScreen>
          <input type="text" />
        </div>
      </SessionContainer>
    </div>
  );
}
