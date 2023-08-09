import Link from "next/link";
import { Header } from "../components/Header";
import { RegisterContainer} from "./style";
import { setupAPIClient } from "@/lib/api";
import { useRouter } from "next/router";
import { useState } from "react";
import Cookies from "js-cookie";

export default function Register() {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(password === confirmPassword){
      const data = {
        userName,
        password,
      };
      const api = setupAPIClient();
      try {
        const response = await api.post("/users", data);
        router.push(`/login`);
      } catch (err: any) {
        if (err.response.status === 409) {
        }
      }
    }

  };

  return (
    <div style={{ display: "flex", height: "100vh", flexDirection: "column" }}>
      <Header />
      
      <RegisterContainer>

        <form onSubmit={handleSubmit}>
          <div>
            <input required type="text" placeholder="username" onChange={(e) => setUserName(e.target.value)}/>
            <input required type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
            <input required type="password" placeholder="confirm password"onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
          <button type="submit">Register</button>
          <Link href="/login">already have an account?</Link>
        </form>
      </RegisterContainer>
    </div>
  );
}
