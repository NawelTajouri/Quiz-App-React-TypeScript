import styled from "styled-components";



export const WrapperCard = styled.div`
    
        width: 90%;
        max-width: 400px;
        padding: 2rem 1rem;
        border-radius: 1rem;
        border: 2px solid transparent;
        backdrop-filter: blur(1rem);
        background-color: rgba(0,100,0, 0.1);
        border-top-color: rgba(255, 255, 255, 0.5);
        border-left-color: rgba(255, 255, 255, 0.5);
        border-bottom-color: rgba(255, 255, 255, 0.5);
        border-right-color: rgba(255, 255, 255, 0.5);

   
`
export const SpanNumber = styled.span`
    color: rgba(255,255,255,0.1);
    font-size: 8rem;
    z-index: -1;
    position: absolute;
    top: -2rem;
    right: 2.5rem;
`

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}
export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;

    :hover {
        opacity: 0.8;
    }
    span{
        color: rgb(0,0,0);
    }
    button {
        cursor: pointer;
        user-select: none;
        font-size: 0.8rem;
        width: 100%;
        height: 40px;
        margin: 5px 0;
        background: ${({correct, userClicked}) => 
            correct ? 'linear-gradient(90deg, #56ffa4, #59bc86)'
            : !correct && userClicked ?
            'linear-gradient(90deg, #ff5656, #c16868)'
            : 'linear-gradient(90deg,  #a8d769, #fff789)'
            
    };
    border: 2px solid #fff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
`
