import React from "react";
import styled from "styled-components";
import Modal, { Header } from "./Modal";
import checkmark from "./icons/checkmark.png";

const Heading = styled(Header)`
  margin-top: 10px;
`;

const Success = styled.img``;

export default () => (
  <Modal>
    <Success src={checkmark} alt="Checkmark icon" />
    <Heading>Field was found</Heading>
  </Modal>
);
