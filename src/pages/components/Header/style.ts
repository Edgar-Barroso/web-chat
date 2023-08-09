import { BsChatRightText } from "react-icons/bs";
import styled from '@emotion/styled';

export const HeaderStyledContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background: ${(props) => props.theme["blue-700"]};
  h1 {
    font-size: 2rem;
    color: ${(props) => props.theme["white"]};
    font-weight: 400;
  }
`;

export const BsChatRightTextStyled = styled(BsChatRightText)`
  font-size: 2rem;
  padding-right: 10px;
  color: ${(props) => props.theme["white"]};
`;
