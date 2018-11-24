import styled from "styled-components";

export const AttachedToTop = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10000;
  display: flex;
  flex-direction: column;
`;

export const AttachedToBottom = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;
  display: flex;
  flex-direction: column;
`;
