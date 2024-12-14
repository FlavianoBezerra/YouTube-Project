import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    height: 55px;
    background: #fff;
    padding: 0 10px;
    box-sizing: border-box;
    display: none;
    position: fixed;
    bottom: 0;
    z-index: 1;

    @media(max-width: 768px){
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
`;

export const SubContainer = styled.div`
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 12px 0;
    cursor: pointer;
`;

export const Img = styled.img`
    height: 25px;
    width: 25px;
    border-radius: 50%;
`;

export const Label = styled.span`
    font-size: 14px;
    font-weight: 650;
`;

export const FooterLogin = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;