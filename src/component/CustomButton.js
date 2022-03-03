import React, { useState } from 'react';
import styled from "styled-components";

const CustomButton = ({btnValue, onClick}) => {

  return (
    <CalcButton onClick={onClick}>{btnValue}</CalcButton>
  )
}

const CalcButton = styled.button`
  border: none;
  background-color: rgb(63 59 88);
  font-size: 24px;
  color: rgb(255, 255, 255);
  font-weight: bold;
  cursor: pointer;
  border-radius: 15px;
  outline: none;
  &:hover{
    background-color: rgb(71 66 104);
  }
`;
export default CustomButton;