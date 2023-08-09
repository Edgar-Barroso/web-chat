import { setupAPIClient } from "@/lib/api";
import { Header } from "../components/Header";
import { Room, SessionsContainer } from "./styled";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Session{
  id:string;
  name:string;
}

export default function Sessions() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const router = useRouter()

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const api = setupAPIClient()
        const response = await api.get(`/rooms/${router.query.page}`,{
          withCredentials:true
        })
        const {sessions} = await response.data
        setSessions(sessions);
      } catch (error) {
        console.error("Erro ao buscar as salas:", error);
      }
    };
    fetchSessions();
  }, [router.query.page]);
  return (
    <div style={{ display: "flex", height: "100vh", flexDirection: "column" }}>
      <Header />
      <SessionsContainer>
        <div>
          {sessions.map((session) => (
              <Link key={session.id} href={`/session/${session.id}`}>
                <Room>
                  <h3>{session.name}</h3>
                </Room>
              </Link>
          ))}

        </div>
      </SessionsContainer>
    </div>
  );
}
