import React from "react";
import styled, { keyframes } from "styled-components";

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

export const Divider = styled.hr`
  margin: 0;
  border: none;
  background-color: rgba(0, 0, 0, 0.13);
`;

const SpinnerKyframes = keyframes` 
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerPart = styled.div`
  position: absolute;
  margin: 6px;
  border-radius: 50%;
  animation: ${SpinnerKyframes} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;

  &:nth-child(1) {
    animation-delay: -0.45s;
  }

  &:nth-child(2) {
    animation-delay: -0.3s;
  }

  &:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

const SpinnerStyled = styled.div`
  display: inline-block;
  position: relative;
  width: ${p => `${p.side}px`};
  height: ${p => `${p.side}px`};

  ${SpinnerPart} {
    width: ${p => `${p.side - 10}px`};
    height: ${p => `${p.side - 10}px`};
    border: ${p => `${p.thickness}px solid transparent`};
    border-top-color: ${p => `${p.color}`};
  }
`;

export const Spinner = ({ side = 48, thickness = 4, color = "black" }) => (
  <SpinnerStyled side={side} thickness={thickness} color={color}>
    <SpinnerPart />
    <SpinnerPart />
    <SpinnerPart />
  </SpinnerStyled>
);
