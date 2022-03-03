import React, { useState } from 'react';
import styled from "styled-components";

const CalcScreen = ({value}) => {

  return (
    <CalcSpan>{value}</CalcSpan>
  )
}

const CalcSpan = styled.span`
  height: 100px;
  width: 100%;
  margin-bottom: 10px;
  padding: 0 10px;
  background-color: #0f970a94;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: white;
  font-weight: bold;
  box-sizing: border-box;
  font-size: 36px;
  letter-spacing: 4px;
`;
export default CalcScreen;