import styled from "styled-components";

export const Container = styled.div`
  max-width: 1600px;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SubContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  margin: 10px auto;
  padding: 20px 40px;
  background-color: #f9f9f9;
  border-radius: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  box-sizing: border-box;

  @media(max-width: 480px){
    align-items: center;
    flex-direction: column;
    padding: 5px 0;
  }  
`;

export const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const LeftImg = styled.img`
  width: 200px;
  height: 40px;
  margin-right: 10px;
`;


export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 10px;
  outline: none;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 5px 0;
`;

export const Button = styled.button`
  height: 48px;
  padding: 0 16px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background: #0b57d0;
  border-radius: 50px;
  border: none;
  cursor: pointer;

  @media(max-width: 768px){
    height: 30px;
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

  a {
    text-decoration: none;
    color: #000;
  }
`;

export const Select = styled.select`
  width: auto;
  height: 30px;
  padding: 5px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 5px;
  border: 1px solid #ccc;
  cursor: pointer;
`;