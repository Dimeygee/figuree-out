/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import styled from "styled-components";
import { useEffect, useState } from "react";

interface DateProps {
  fromYear: number;
  toYear: number;
  activeIndex: number;
}

export const Date = ({ fromYear, toYear, activeIndex }: DateProps) => {
  const [currentFromYear, setCurrentFromYear] = useState(fromYear);
  const [currentToYear, setCurrentToYear] = useState(toYear);

  useEffect(() => {
    const animateYears = () => {
      const startFromYear = fromYear;
      const endFromYear = fromYear + activeIndex - 1; 
      const startToYear = toYear - (6 - activeIndex); 
      let currentFrom = startFromYear;
      const intervalFromYear = setInterval(() => {
        if (currentFrom < endFromYear) {
          currentFrom++;
          setCurrentFromYear(currentFrom);
        } else {
          clearInterval(intervalFromYear);
        }
      }, 50); 
      let currentTo = startToYear;
      const intervalToYear = setInterval(() => {
        if (currentTo < toYear) {
          currentTo++;
          setCurrentToYear(currentTo);
        } else {
          clearInterval(intervalToYear);
        }
      }, 50); 
    };

    animateYears();
  }, [activeIndex, fromYear, toYear]);

  return (
    <DateWrapper>
      <PrevDate>2015</PrevDate>
      <LatestDate>2022</LatestDate>
    </DateWrapper>
  );
};

const DateWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 150px;
  font-weight: 700;
  font-family: "PT Sans";
  font-size: 200px;
  font-style: normal;
  line-height: 160px;
  letter-spacing: -4px;
`;

const PrevDate = styled.span`
  color: #5d5fef;
`;

const LatestDate = styled.span`
  color: #EF5DA8;
`;
