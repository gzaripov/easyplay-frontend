import React from "react";
import styled from "styled-components";

const ModalBackdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: black;
  opacity: 0.3;
`;

const Modal = styled.div`
  width: 386px;
  height: 386px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  border-radius: 16px;
  box-shadow: 0px 6px 38px 0 rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
`;

export default ({ children, ...props }) => (
  <ModalBackdrop>
    <Modal {...props}>{children}</Modal>
  </ModalBackdrop>
);
