import { Header } from "../components/Header";
import { Room, SessionsContainer } from "./styled";

export default function Sessions() {
  return (
    <div style={{ display: "flex",height:'100vh', flexDirection: "column" }}>
      <Header />
      <SessionsContainer>
        <div>
          <Room>
            <h3>Sala 1</h3>
            <text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              </text>
          </Room>
          <Room>
            <h3>Sala 1</h3>
            <text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              </text>
          </Room>
          <Room>
            <h3>Sala 1</h3>
            <text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              </text>
          </Room>
          <Room>
            <h3>Sala 1</h3>
            <text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              </text>
          </Room>
        </div>

      </SessionsContainer>
    </div>
  );
}
