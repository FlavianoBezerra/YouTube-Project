import styled from "styled-components";

export const Container = styled.div`
  width: 100px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .icon {
    font-size: 16px;
    font-weight: 600;
    color: #0b57d0;
    cursor: pointer;
  }
  `;  
  
  
export const DropDownContainer = styled.ul<{ show: boolean }>`
  width: 240px;
  position: absolute;
  bottom: 100%;  
  right: 0;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  padding: 5px;
  list-style: none;
  border-radius: 20px;
  display: ${({ show }) => (show ? "block" : "none")};

  li {
    border-radius: 20px;
    cursor: pointer;
    margin: 10px;
    padding: 2px 15px;
    box-sizing: border-box;
    font-size:14px;
    font-weight: 650;
    
    &:hover {
        background-color: #dcdcdc;
    }
  }
  li a {
    display: flex;
    align-items: center;
    flex-direction: row;
    color: #000;
    text-decoration: none;
  }
  
  span {
    margin-left: 10px;
  }
`;
