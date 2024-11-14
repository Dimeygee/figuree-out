"use client"

import styled from "styled-components";
import {BarSvg} from "../icons/index"
import {Date} from "./date"


export default function Container() {
  return (
    <>
      <Wrapper>
        <Circle />
        <Date />
      </Wrapper>
      <Bar>
        <BarSvg />
        <Text>
          <span>Исторические</span>
          <span>даты</span>
        </Text>
      </Bar>
    </>
  );
}


const Wrapper = styled.div`
  max-width: 1920px;
  height: 100vh;
  display: flex;
  margin-left: 320px;
  margin-right: 160px;
  border-left: 1px solid rgba(66, 86, 122, 0.1);
  border-right: 1px solid rgba(66, 86, 122, 0.1);
  position:relative;
  font-family: 'PT Sans', sans-serif;
  &::before {
    content: "";
    width: 1px;
    position: absolute;
    height: 100vh;
    transform: translateX(-50%);
    left: 50%;
    background-color: rgba(66, 86, 122, 0.1);
  }
    &::after {
    content: "";
    width: 100%;
    position: absolute;
    height: 1px;
    transform: translateY(-50%);
    top: 50%;
    background-color: rgba(66, 86, 122, 0.1);
  }
`;

const Bar = styled.span`
    position:absolute;
    top:117px;
    left:320px;
    display:flex;
    gap:78px;
    align-items:center;

`

const Text = styled.span`
    color: #42567A;
    font-family: "PT Sans";
    font-size: 56px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    display:flex;
    flex-direction:column;
`
const Circle = styled.div`
  width: 530px;
  height: 530px;
  border-radius: 100%;
  border: 1px solid rgba(66, 86, 122, 0.2);
  position:absolute;
  top:50%;
  left:50%;
    transform:translate(-50%,-50%);
`;
