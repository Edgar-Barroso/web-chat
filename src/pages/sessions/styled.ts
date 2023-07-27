import { styled } from "styled-components";

export const SessionsContainer = styled.div`

    flex-grow: 1;
    display: flex;
    flex-direction: column;
    color: ${props=>props.theme['white']};
    background-color: ${props=>props.theme['blue-500']};
    align-items: center;
    justify-content: center;

    div{

        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: ${props=>props.theme['white']};
        padding:  0px 50px 50px 50px;
        margin: 50px;
        border-radius: 10px;
        color:${props=>props.theme['blue-400']};
        gap:20px;

    }
`

export const Room = styled.button`
    align-items: center;
    justify-content: center;
    padding:30px 30px 30px 30px;
    background: transparent;
    border-bottom:3px solid ${props=>props.theme['gray-300']};
    cursor: pointer;

    
    h3{
        font-style: italic;
        padding: 10px;
        font-weight: 300;
        font-size: 1.4rem;
        color:#363636;
    }
    text{
        font-size: 1rem;
        color:#4F4F4F;
    }
    &:hover{
        border-bottom:3px solid ${props=>props.theme['blue-400']};

    }

    &:active{
        border-bottom:3px solid ${props=>props.theme['blue-700']};

        
    }



`