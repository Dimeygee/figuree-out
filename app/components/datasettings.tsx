"use client";

import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import { SliderArrow } from "../icons";
import { Slider } from "./slider";
import { historicalData } from "../lib/historicdata";
import { Date } from "./date";

export const DateSettings = ({
  activeIndex,
  setActiveIndex,
  rotation,
  setRotation,
}: {
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  rotation: number;
  setRotation: Dispatch<SetStateAction<number>>;
}) => {
  const currentData = historicalData[activeIndex - 1];
  const [isFading, setIsFading] = useState(false);

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
    setIsFading(true);
    setTimeout(() => {
      setActiveIndex(newIndex);
      setIsFading(false);
    }, 300);
  };

  return (
    <>
      <CurrentDateName fading={isFading}>
        <div>
          {["Один", "Два", "Три", "Четыре", "Пять", "Шесть"][activeIndex - 1]}
        </div>
      </CurrentDateName>
      <DateSettingsWrapper>
        <DateBox>
          <span>0{activeIndex}</span>/<span>06</span>
        </DateBox>
        <ArrowBox>
          <span onClick={() => handleArrowClick("left")}>
            <Arrow className="prev-button">
              <SliderArrow />
            </Arrow>
          </span>
          <span onClick={() => handleArrowClick("right")}>
            <Arrow className="next-button">
              <SliderArrow />
            </Arrow>
          </span>
        </ArrowBox>
        <Slider data={currentData} fading={isFading} />
      </DateSettingsWrapper>
      <Date activeIndex={activeIndex} />
    </>
  );
};

const DateSettingsWrapper = styled.div`
  padding: 0 80px;
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 540px) {
    padding: 0 20px;
  }
`;

const DateBox = styled.div`
  display: flex;
  color: #42567a;
  font-size: 14px;
  @media screen and (max-width: 540px) {
    order: 1;
  }
`;

const ArrowBox = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 20px;
  align-items: center;

  margin-bottom: 0;
  @media screen and (max-width: 540px) {
    margin-top: 10px;
    margin-bottom: 15px;
    gap: 8px;
    order: 2;
  }
`;

const Arrow = styled.div`
  z-index: 10;
  font-size: 24px;
  color: #42567a;
  border: 2px solid rgba(66, 86, 122, 0.5);
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: transparent;
  filter: drop-shadow(0px 0px 15px rgba(56, 119, 238, 0.1));
  @media screen and (max-width: 540px) {
    width: 40px;
    height: 40px;
  }

  &.prev-button {
    left: 0;
    transform: rotate(180deg);
  }

  &.next-button {
    right: 0;
  }
`;

const CurrentDateName = styled.div<{ fading: boolean }>`
  color: #42567a;
  font-weight: 700;
  position: absolute;
  top: 45%;
  text-align: center;
  display:none;

  div {
    opacity: ${(props) => (props.fading ? 0 : 1)};
    transition: opacity 0.3s ease-in-out;
    position: relative;
    z-index: 100;
  }

  @media screen and (max-width: 540px) {
    display:flex;
  }


`;
