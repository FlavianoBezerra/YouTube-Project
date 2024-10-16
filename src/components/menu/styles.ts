import styled from "styled-components";

export const Container = styled.div<{ menuSize: boolean }>`
    width: ${({ menuSize }) => menuSize? '280px' : '100px'};
    height: calc(100vh - 55px);
    box-sizing: border-box;
    padding: 10px 10px 10px 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
    position: sticky;
    top: 55px;
`;

export const SubContainer = styled.div<{ menuSize: boolean }>`
    height: auto;
    width: 100%;
    border-bottom: ${({ menuSize }) => menuSize? '1px solid #bfbfbf' : 'none'};
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 12px 0;
`;

export const Description = styled.div`
    height: 32px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 6px 20px;
    box-sizing: border-box;
`;

export const MenuItem = styled.div<{ menuSize: boolean }>`
    width: 98%;
    min-height: ${({ menuSize }) => menuSize? '45px' : '70px'};
    border-radius: 10px;
    cursor: pointer;
    padding: 2px 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: ${({ menuSize }) => menuSize? 'row' : 'column'};
    align-items: center;
    justify-content: ${({ menuSize }) => menuSize? 'none' : 'center'};

    span {
        font-weight: ${({ menuSize }) => menuSize? '650' : '400'};
        margin-left: ${({ menuSize }) => menuSize? '20px' : 'none'};
        font-size: ${({ menuSize }) => menuSize? '14px' : '12px'};
    }

    &:hover {
        background-color: #dcdcdc;
    }
`;

export const ContainerLogin = styled.div`    
    height: 140px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const TextLogin = styled.span`
    display: flex;
    align-items: center;
    height: auto;
    width: 80%;
    font-size: 13px;
    font-weight: 650;
`;

export const MenuLogin = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-around;
    height: 34px;
    width: 60%;
    border-radius: 18px;
    border: 1px solid #bfbfbf;
    color: #3ea6ff;
    cursor: pointer;
    font-size: 15px;
    font-weight: 650;
    margin-top: 10px;
    &:hover { background-color: #AFEEEE; }
`;

export const MenuFooter = styled.footer`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const FooterBoxOne = styled.span`
    height: auto;
    width: 100%;
    margin-top: 15px;
    font-size: 13px;
    font-weight: 650;
    cursor: pointer;
`;

export const FooterBoxTwo = styled.span`
    height: auto;
    width: 100%;
    margin: 15px 0;
    font-size: 12px;
    cursor: pointer;
`;