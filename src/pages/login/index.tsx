import { ReactEventHandler, useState } from "react";
import Link from "next/link";
import { Header } from "../components/Header";
import { HiChatBubbleLeftRightStyled, LoginContainer } from "./style";
import { FormEvent } from "react";

export default function Login() {
  // Estado local para armazenar os valores dos campos de entrada
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Função para manipular a submissão do formulário
  const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    // Aqui você pode realizar a lógica de login, como enviar os dados para o servidor.
  };

  return (
    <div style={{ display: "flex", height: "100vh", flexDirection: "column" }}>
      <Header />
      <LoginContainer>
        <form onSubmit={handleSubmit}>
          <div>
            <HiChatBubbleLeftRightStyled />
            <input
              required
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              required
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Login</button>
          <Link href="/register">registrar-se</Link>
        </form>
      </LoginContainer>
    </div>
  );
}
