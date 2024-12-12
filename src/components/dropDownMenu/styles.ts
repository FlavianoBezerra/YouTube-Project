import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #dcdcdc;
  }
`;

export const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid #bfbfbf;
  margin: 12px 0;
`;

export const Img = styled.img`
  width: 25px;
`;

export const DropDownImg = styled.img`
  width: 40px;
  border-radius: 50%;
`;
  
export const DropDownContainer = styled.ul<{ show: boolean }>`
  width: 260px;
  position: absolute;
  top: 100%;  
  right: 0;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  padding: 5px;
  list-style: none;
  border-radius: 10px;
  display: ${({ show }) => (show ? "block" : "none")};
  overflow-y: auto;
  height: calc(100vh - 60vh);
`;

export const UserInfo = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  padding: 12px;

  a {
    text-decoration: none;
    color: #0b57d0;
    font-weight: 600;
  }
`;

export const Text = styled.span`
  font-weight: 600;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

export const Left = styled.div`
  display: flex;
`;