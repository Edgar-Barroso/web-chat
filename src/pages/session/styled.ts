import styled from '@emotion/styled';

export const SessionContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme["white"]};
  background-color: ${(props) => props.theme["blue-500"]};
  align-items: center;
  justify-content: center;

  div {
    width:80%;
    height: 500px;
    border-radius: 10px  10px  0px  0px;
    background-color: ${(props) => props.theme["white"]};
  }

  input {
      width:80%;
      height:50px;
      border-top: 1px solid #ccc;
      border-radius: 0px 0px 10px 10px;
      font-size: 1rem;
      outline: none;
      &:focus {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
      }
    }
`;

interface MessageProps {
  $user: boolean;
}
export const Message = styled.section<MessageProps>`
  color: black;
  display: flex;
  flex-direction: ${(props) => props.$user ? "row" : "row-reverse"};
  align-items: baseline;
  gap: 10px;
  justify-content: ${(props) => props.$user ? "baseline" : "end"};
  span{
    ${props=>props.$user ? "text-align:end;": "text-align:base-line;"}
    align-items: baseline;
    width: 120px;
    word-wrap: break-word;

  }
  p {
    max-width: 70%;
    padding: 10px;
    word-wrap: break-word;
    border-radius: 5px;
    background: ${(props) =>
      props.$user ? props.theme["green-300"] : props.theme["gray-300"]};
  }
`;

export const MessageScreen = styled.section`
  background-color: #e6e6e6;
  height: 100%;
  border-radius: 10px  10px  0px  0px;

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
