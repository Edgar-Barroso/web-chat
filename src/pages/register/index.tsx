import Link from "next/link";
import { Header } from "../components/Header";
import { RegisterContainer, BiUserPlusStyled } from "./style";

export default function Register() {
    return (
    <div style={{display:'flex',height:'100vh',flexDirection:"column"}}>
      <Header/>
      <RegisterContainer>
        <form>
          <div>
            <BiUserPlusStyled/>
            <input required type="text" placeholder="username"/>
            <input required type="password" placeholder="password"/>
            <input required type="password" placeholder="confirm password"/>
          </div>
          
          <button>Register</button>
          <Link href="/login">already have an account?</Link>
        </form>

      </RegisterContainer>
    </div>);
  }
  