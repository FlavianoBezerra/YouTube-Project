import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 400px;
    width: 100%;
`;

export const ImageBanner = styled.img`
    width: 100%;
    height: 85%;
    border-radius: 12px;
`;

export const TitleContainer = styled.div`
    height: 15%;
    width: 100%;
    display: flex;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.span`
    font-weight: 600;
    color: #0f0f0f;
`;

export const TextCard = styled.span`
    color: #8c8c8c;
    font-size: 14px;
`;