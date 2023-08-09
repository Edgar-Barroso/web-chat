import { useContext, useState } from "react";
import Link from "next/link";
import { Header } from "../components/Header";
import {LoginContainer } from "./style";
import Cookies from "js-cookie";
import { setupAPIClient } from "@/lib/api";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      userName,
      password,
    };
    const api = setupAPIClient();
    try {
      const response = await api.post("/authenticate", data, {
        withCredentials: true,
      });
      const tokenUser = await response.data.token;
      if (tokenUser) {
        Cookies.set("chat.token", tokenUser);
        Cookies.set("chat.userName", userName);
        router.push(`/sessions/1`);
      }
    } catch (err: any) {
      if (err.response.status === 404) {
      }
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh", flexDirection: "column" }}>
      <Header />
      <LoginContainer>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              required
              type="text"
              placeholder="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
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
