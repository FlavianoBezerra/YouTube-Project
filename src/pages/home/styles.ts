import styled from "styled-components";

export const HomeContainer = styled.div`
    max-width: 1600px;
    width: 100%;
`;

export const SubContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const Container = styled.div`
    width: 90%;
    padding: 55px 25px 10px 25px;
    box-sizing: border-box;
`;

export const ContainerVideos = styled.div<{ menuSize: boolean }>`
    display: grid;
    grid-template-columns: ${({ menuSize }) => menuSize? 'repeat(3, 1fr)' : 'repeat(4, 1fr)'};
    column-gap: 20px;
    row-gap: 50px;

    @media(max-width: 1280px){
        grid-template-columns: ${({ menuSize }) => menuSize ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'};
    }

    @media(max-width: 768px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 480px){
        grid-template-columns: repeat(1, 1fr);
        
    }    
`;

export const ShortsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: auto;
    width: 100%;
    margin-top: 10px;
`;

export const Description = styled.div`
    height: 5%;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 6px 20px;
    box-sizing: border-box;
`;

export const ShortsVideos = styled.div`
    height: 90%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    column-gap: 20px;
    row-gap: 20px;
    padding: 10px;
    box-sizing: border-box;

    @media(max-width: 1280px){
        grid-template-columns: repeat(3, 1fr);
    }

    @media(max-width: 768px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 480px){
        grid-template-columns: repeat(1, 1fr);        
    }    
`;