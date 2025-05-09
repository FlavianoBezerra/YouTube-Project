import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 55px;
    background: #fff;
    padding: 0 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 1;   
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 0 10px;
`;

export const Main = styled.div`
    display: flex;
    align-items: center;

    @media(max-width: 768px){
        display: none;
    }
`;

export const Responsiveness = styled.div`
    display: flex;

    @media(width > 768px){
        display: none;
    }
`;

export const LogoImg = styled.img`
    width: 100px;
    cursor: pointer;
`;

export const ButtonContainer = styled.div<{ margin?: string }>`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin: ${({ margin }) => margin? margin : 0};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover { background-color: #dcdcdc; }
      
`;

export const ButtonIcon = styled.img`
    width: 20px;
`;

export const SearchContainer = styled.div`
    display: flex;
`;

export const SearchInputContainer = styled.div`
    width: 450px;
    height: 35px;
    border: 1px solid #bfbfbf;
    border-radius: 40px 0 0 40px;
    display: flex;
    align-items: center;
    padding: 0 16px;

    @media(max-width: 1024px){
        width: 50%;
    }
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 25px;
    outline: none;
    border: none;
`;

export const SearchButton = styled.div`
    border-radius: 0 40px 40px 0;
    height: 35px;
    width: 70px;
    background-color: #f8f8f8;
    border: 1px solid #bfbfbf;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    @media(max-width: 768px){
        width: 15%;
    }
`;

export const HeaderButton = styled.div`
    width: 180px;
    display: flex;
    align-items:center;
    justify-content: space-around;

    @media(max-width: 768px){
        width: 20%;
    }
`;

export const HeaderButtonResponsiveness = styled.div`
    display: flex;

    @media(max-width: 768px){
        display: none;
    }
`;

export const HeaderLogin = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content:space-around;
    height: 34px;
    width: 75%;
    border-radius: 18px;
    border: 1px solid #bfbfbf;
    color: #3ea6ff;
    cursor: pointer;
    font-size: 15px;
    font-weight: 650;
    &:hover { background-color: #AFEEEE; }

    @media(max-width: 768px){
        display: none;
    }
`;