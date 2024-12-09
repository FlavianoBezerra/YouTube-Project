import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: none;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  padding: 5px;
  box-sizing: border-box;
  margin: 0 4px;
  cursor: pointer;
  background-color: #dcdcdc;

  @media(max-width: 768px){
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid #bfbfbf;
  margin: 12px 0;
`;

export const DropDownContainer = styled.ul<{ show: boolean }>`
  width: 210px;
  position: absolute;
  top: 100%;  
  left: 0;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  padding: 5px;
  list-style: none;
  border-radius: 10px;
  display: ${({ show }) => (show ? "block" : "none")};
  overflow-y: auto;
  height: calc(100vh - 40vh);
`;

export const LogoImg = styled.img`
  height: 45px;
  width: auto;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 0 10px;
  cursor: pointer;
  height: 45px;
  box-sizing: border-box;
  font-size:14px;
  font-weight: 650;
  
  &:hover {
    background-color: #dcdcdc;
  }
`;

export const DropInformation = styled.span`
  font-size: 11px;
`;