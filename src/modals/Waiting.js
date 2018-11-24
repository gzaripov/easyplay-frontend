import React from "react";
import styled from "styled-components";
import { Spinner } from "../Components";
import Modal from "./Modal";

const Heading = styled.h2`
  margin-top: 10px;
`;

export default ({ title }) => (
  <Modal>
    <Spinner color="#ff591c" />
    <Heading>{title}</Heading>
  </Modal>
);
