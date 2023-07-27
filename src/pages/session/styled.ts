import styled from "styled-components";

export const SessionContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme["white"]};
  background-color: ${(props) => props.theme["blue-500"]};
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 10%;
    margin-right: 10%;
    height: 500px;
    border-radius: 10px;
    background-color: ${(props) => props.theme["white"]};

    input {
      height:5% ;
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
      outline: none;
      &:focus {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
      }
    }
  }
`;

interface MessageProps {
  user: boolean;
}
export const Message = styled.section<MessageProps>`
  color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin: 10px;
  text-align: center;

  justify-content: ${(props) => props.user ? "baseline" : "end"};
  span{
    padding: 5px;
  }
  p {
    max-width: 70%;
    padding: 20px;
    word-wrap: break-word;
    border-radius: 5px;
    background: ${(props) =>
      props.user ? props.theme["green-300"] : props.theme["gray-300"]};
  }
`;

export const MessageScreen = styled.section`
  display: flex;
  flex-direction: column;
  overflow: auto;
  gap: 10px;
  &::-webkit-scrollbar-thumb {
    background-color: #888; 
    border-radius: 5px;
  }
  &::-webkit-scrollbar {
    width: 12px;
  }
`;
