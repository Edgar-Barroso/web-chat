import styled from '@emotion/styled';
export const SessionsContainer = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    color: ${props=>props.theme['white']};
    background-color: ${props=>props.theme['blue-500']};
    align-items: center;
    justify-content: center;

    div{
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, .3);
        display: grid;
        grid-template-columns:repeat(5,1fr);
        align-items: center;
        background-color:${props=>props.theme['white']};
        padding:20px;
        border-radius: 10px;
        gap:10px;
        color:${props=>props.theme['blue-400']};

    }
`

export const Room = styled.button`
    align-items: center;
    justify-content: center;
    padding:10px;
    background:${props=>props.theme['blue-400']};
    border:3px solid ${props=>props.theme['blue-300']};
    border-radius: 10px;
    cursor: pointer;

    
    h3{
        font-style: italic;
        padding: 10px;
        font-weight: 300;
        font-size: 1.4rem;
        color:${props=>props.theme['white']};

    }
    &:hover{
        border-bottom:3px solid ${props=>props.theme['blue-400']};

    }

    &:active{
        border-bottom:3px solid ${props=>props.theme['blue-700']};

        
    }



`