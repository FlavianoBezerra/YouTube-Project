import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

export const SubContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 90%;
  margin: 10px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  
  img {
    width: 200px;
    height: 40px;
    margin-right: 10px;
  }
`;


export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  
  label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }
    
    input {
      width: 400px;
      padding: 10px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 10px;
      outline: none;
    }
    `;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 20px 0;
    
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
    
  button {
    height: 48px;
    padding: 0 16px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    background: #0b57d0;
    border-radius: 50px;
    border: none;
    cursor: pointer;
  }
`;

export const Footer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin: 0 auto;
  font-size: 14px;
  font-weight: 600;

  select {
    width: auto;
    height: 30px;
    padding: 5px;
    font-size: 14px;
    font-weight: 600;
    border-radius: 5px;
    border: 1px solid #ccc;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #000;
  }
`;