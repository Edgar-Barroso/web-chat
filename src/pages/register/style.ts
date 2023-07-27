import { styled } from "styled-components";
import {BiUserPlus} from 'react-icons/bi'


export const RegisterContainer = styled.div`
  background: ${(props) => props.theme["blue-500"]};
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;


  form{
    width: 250px; 
    background-color: ${props=>props.theme['white']};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:20px;
    div{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      input{
        width: 200px;
        padding:15px;
        margin: 5px;
        text-align: center;
        border-bottom: 1px solid ${props=>props.theme["gray-500"]};
        font-size: 1.2rem;
        outline: none;

    }
    
    input:focus{
      border-bottom: 2px solid ${props=>props.theme["blue-500"]};
    }


    }


    button{
        border: none;
        background-color: ${props=>props.theme['gray-300']};
        border: 1px solid ${props=>props.theme['gray-300']};
        border-radius: 5px;
        width: 200px;
        padding:15px;
        margin: 5px;
        text-align: center;
        cursor:pointer;
        color: ${props=>props.theme['white']};
        font-size: 1.2rem;
      
    }
    button:hover{
      background-color:${props=>props.theme['blue-500']}; ;
    }
    button:active{
      background-color:${props=>props.theme['blue-700']}; ;

    }

    a{
      text-decoration: none;
      outline: none;
      padding: 10px;
      color:${props=>props.theme["gray-500"]};
     
    }
    a:hover{
      color:${props=>props.theme["blue-700"]};
      }
    
  }
`;

export const BiUserPlusStyled = styled(BiUserPlus)`
  color:${props=>props.theme['blue-700']};
  font-size:3rem;
  padding: 10px;

`