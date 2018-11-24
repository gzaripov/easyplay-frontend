import React from "react";
import styled from "styled-components";

export const Heading = styled.h1`
  font-family: Helvetica;
  font-size: 26px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.87);
  text-align: left;
  opacity: 0.87;
`;

export const PrimaryText = styled.span`
  font-family: Roboto;
  font-size: 16px;
`;

export const SecondaryText = styled(PrimaryText)`
  color: rgba(0, 0, 0, 0.87);
`;

export const BoldText = styled.span`
  font-family: Roboto;
  font-size: 14px;
  opacity: 0.54;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.54);
`;

const ButtonStyled = styled.button`
  cursor: pointer;
  text-align: center;
  border: none;
  background: none;
`;

export const Button = ({ type = "button", ...props } = {}) => (
  <ButtonStyled type={type} {...props} />
);

export const PrimaryButton = styled(Button)`
  min-height: 50px;
  min-width: 150px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  border-radius: 5px;
  background-image: linear-gradient(to right, #ff7200, #ff5400);
  opacity: ${p => (p.disabled ? "0.6" : "")};
  cursor: ${p => (p.disabled ? "not-allowed" : "pointer")};
`;
