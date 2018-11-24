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

export const SecondaryText = styled.span`
  font-family: Roboto;
  font-size: 14px;
  opacity: 0.54;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.54);
`;

export const Button = ({ type = "button", ...props } = {}) => (
  <button type={type} {...props} />
);

export const PrimaryButton = styled(Button)`
  min-height: 50px;
  min-width: 150px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: #ffffff;
  border-radius: 5px;
  background-image: linear-gradient(to right, #ff7200, #ff5400);
`;
