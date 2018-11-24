import React from "react";
import styled from "styled-components";

const ModalBackdrop = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
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

export const Header = styled.h1`
  opacity: 0.87;
  font-family: Helvetica;
  font-size: 26px;
  font-weight: bold;
  text-align: left;
  color: rgba(0, 0, 0, 0.87);
`;

export default ({ children, ...props }) => (
  <ModalBackdrop>
    <Modal {...props}>{children}</Modal>
  </ModalBackdrop>
);
