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
  height: calc(100vh - 100px);

  li {
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

  .divider {
    width: 100%;
    border-bottom: 1px solid #bfbfbf;
    margin: 12px 0;
  }
`;