import React from "react";
import styled from "styled-components";
import DestinationList from "./DestinationList";


const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;
`;

const Content = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  max-height: 80vh;
  overflow-y: auto;
  padding: 1rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 80%;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  position: absolute;
  right: 1rem;
  top: 1rem;
`;

function Modal({ destinations, isOpen, onClose, onSelect }) {
    if (!isOpen) return null;

    return (
        <Background>
            <Content>
                <CloseButton onClick={onClose}>X</CloseButton>
                <DestinationList destinations={destinations} onSelect={onSelect} />
            </Content>
        </Background>
    );
}

export default Modal;