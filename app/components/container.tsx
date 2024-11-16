"use client";

import styled, { css } from "styled-components";
import { useState } from "react";
import { BarSvg, ArrowLeft, ArrowRight } from "../icons/index";
import { Date } from "./date";
import { Slider } from "./slider";
import { historicalData } from "../lib/historicdata";

interface NumberProps {
  deg: number;
  isactive?: boolean;
  onClick: () => void;
}

export default function Container() {
  const [activeIndex, setActiveIndex] = useState(6);
  const [rotation, setRotation] = useState(0);

   const currentData = historicalData[activeIndex - 1];

  const handleNumberClick = (index: number, deg: number) => {
    let diff = 300 - deg;

    if (index > 3 && index < 6) {
      const calcDeg = deg - -60;
      diff = -calcDeg;
    }

    if (activeIndex === 1) {
      const calcDeg = 60 * index;
      diff = calcDeg;
    }

    setRotation(diff);
    setActiveIndex(index);
  };

  const handleArrowClick = (direction: "left" | "right") => {
    const increment = 60;
    let newRotation = rotation;
    let newIndex = activeIndex;

    if (direction === "right") {
      newRotation += increment;
      newIndex = newIndex === 6 ? 1 : newIndex + 1;
    } else if (direction === "left") {
      newRotation -= increment;
      newIndex = newIndex === 1 ? 6 : newIndex - 1;
    }

    setRotation(newRotation);
    setActiveIndex(newIndex);
  };

  return (
    <>
      <Wrapper>
        <Circle rotation={rotation}>
          {[240, 180, 120, 60, 0, 300].map((deg, index) => (
            <Number
              key={index}
              deg={deg}
              isactive={activeIndex === index + 1}
              onClick={() => handleNumberClick(index + 1, deg)}
            >
              <div className="text-wrapper">
                <span>{index + 1}</span>
              </div>
            </Number>
          ))}
        </Circle>
        <DateSettingsWrapper>
          <DateBox>
            <span>0{activeIndex}</span>/<span>06</span>
          </DateBox>
          <ArrowBox>
            <span onClick={() => handleArrowClick("left")}>
              <ArrowLeft />
            </span>
            <span onClick={() => handleArrowClick("right")}>
              <ArrowRight />
            </span>
          </ArrowBox>
          <Slider data={currentData} activeIndex={activeIndex} />
        </DateSettingsWrapper>
        <Date
          activeIndex={activeIndex}
          fromYear={currentData.fromYear}
          toYear={currentData.toYear}
        />
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
  position: relative;
  font-family: "PT Sans", sans-serif;
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
  position: absolute;
  top: 117px;
  left: 320px;
  display: flex;
  gap: 78px;
  align-items: center;
`;

const Text = styled.span`
  color: #42567a;
  font-family: "PT Sans";
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  display: flex;
  flex-direction: column;
`;

interface CircleProps {
  rotation: number;
}

const Circle = styled.div<CircleProps>`
  width: 530px;
  height: 530px;
  border-radius: 50%;
  border: 1px solid rgba(66, 86, 122, 0.2);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(${(props) => props.rotation}deg);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 50;
`;

const Number = styled.div<NumberProps>`
  background-color: #42567a;
  width: 6px;
  height: 6px;
  border-radius: 100%;
  color: #42567a;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(${(props) => props.deg}deg)
    translate(264px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  .text-wrapper {
    transform: rotate(-${(props) => props.deg}deg);
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      visibility: ${(props) => (props.isactive ? "visible" : "hidden")};
      opacity: ${(props) => (props.isactive ? 1 : 0)};
      color: #42567a;
      transition: opacity 0.3s ease, visibility 0.3s ease;
      transition-delay: 0.3s;
    }
  }

  /* Hover styling */
  &:hover {
    width: 56px;
    height: 56px;
    border-radius: 100%;
    border: 1px solid rgba(66, 86, 122, 0.5);
    background-color: white;
    font-size: 20px;
    transition: all 0.3s ease;

    .text-wrapper span {
      visibility: visible;
      opacity: 1;
      transition-delay: 0.3s;
      color: #42567a;
    }
  }

  ${(props) =>
    props.isactive &&
    css`
      width: 56px;
      height: 56px;
      border-radius: 100%;
      border: 1px solid rgba(66, 86, 122, 0.5);
      background-color: white;
      font-size: 20px;
      color: #42567a;
    `}
`;

const DateSettingsWrapper = styled.div`
  padding: 0 80px;
  position: absolute;
  bottom: 0;
  width:100%;
  z-index:100;
`;

const DateBox = styled.div`
  display: flex;
  color: #42567a;
  font-size: 14px;
`;

const ArrowBox = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 20px;
  align-items: center;
`;
