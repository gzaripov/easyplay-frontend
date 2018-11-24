import React from "react";
import styled from "styled-components";
import Modal from "./Modal";

const Heading = styled.h2``;

export default ({ title }) => (
  <Modal>
    <Heading>{title}</Heading>
  </Modal>
);
