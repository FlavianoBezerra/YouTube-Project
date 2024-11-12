import styled from "styled-components";

export const StudioContainer = styled.div`
    width: 100%;
`;

export const SubContainer = styled.div`
    width: 100%;
    display: flex;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 1600px;
    padding: 55px 25px 10px 25px;
    box-sizing: border-box;
`;

export const ContainerVideos = styled.div<{ menuSize: boolean }>`
    display: grid;
    grid-template-columns: ${({ menuSize }) => menuSize? 'repeat(3, 1fr)' : 'repeat(4, 1fr)'};
    column-gap: 20px;
    row-gap: 50px;
`;

export const UserName = styled.h1`
  margin: 0;
`;

export const AddVideoButton = styled.button`
  width: 130px;
  height: 45px;
  border: none;
  background-color: #1a75ff;
  border-radius: 5px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: .5s;
  margin-top: 10px;

  &:hover {
    background-color: #005ce6;
  }
`;

export const Modal = styled.div<{ hideModal: boolean }>`
  visibility: ${({hideModal}) => hideModal? 'hidden' : 'visible'};
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ModalContent = styled.div`
  width: 50vw;
  height: 80vh;
  background-color: white;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding: 20px 45px;
  box-sizing: border-box;
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
    width: 100%;
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
  margin-bottom: 20px;

  div {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .enter {
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

export const ModalTitle = styled.h1`
  margin: 0;
  text-align: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 7vh;
  right: 24vw;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #000;
  color: #fff;
  font-weight: 700;

  &:hover {
    background-color: red;
  }
`;