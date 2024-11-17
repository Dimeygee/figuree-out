import styled from "styled-components";
import { useState, useEffect } from "react";
import { historicalData } from "../lib/historicdata";

interface DateProps {
  activeIndex: number;
}

export const Date = ({ activeIndex }: DateProps) => {
  const currentData = historicalData[activeIndex - 1]; 

  const [fromYear, setFromYear] = useState<number>(currentData.fromYear);
  const [toYear, setToYear] = useState<number>(currentData.toYear);
  

  useEffect(() => {
    const animateYears = () => {
      const targetFromYear = currentData.fromYear;
      const targetToYear = currentData.toYear;


      if (fromYear !== targetFromYear) {
        const intervalFromYear = setInterval(() => {
          if (fromYear < targetFromYear) {
            setFromYear((prev) => {
              const newValue = prev + 1;
              if (newValue >= targetFromYear) {
                clearInterval(intervalFromYear);
                return targetFromYear; 
              }
              return newValue;
            });
          } else if (fromYear > targetFromYear) {
            setFromYear((prev) => {
              const newValue = prev - 1;
              if (newValue <= targetFromYear) {
                clearInterval(intervalFromYear);
                return targetFromYear; 
              }
              return newValue;
            });
          }
        }, 50); 
      }

      if (toYear !== targetToYear) {
        const intervalToYear = setInterval(() => {
          if (toYear < targetToYear) {
            setToYear((prev) => {
              const newValue = prev + 1;
              if (newValue >= targetToYear) {
                clearInterval(intervalToYear);
                return targetToYear; 
              }
              return newValue;
            });
          } else if (toYear > targetToYear) {
            setToYear((prev) => {
              const newValue = prev - 1;
              if (newValue <= targetToYear) {
                clearInterval(intervalToYear);
                return targetToYear; 
              }
              return newValue;
            });
          }
        }, 50); 
      }
    };

    animateYears(); 
  }, [activeIndex, fromYear, toYear, currentData.fromYear, currentData.toYear]);

  return (
    <DateWrapper>
      <PrevDate>{fromYear}</PrevDate>
      <LatestDate>{toYear}</LatestDate>
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
  @media screen and (max-width:540px){
    font-size: 56px;
    line-height: normal;
    letter-spacing: -1.12px;
    gap:50px;
    top:35%;
  }
`;

const PrevDate = styled.span`
  color: #5d5fef;
`;

const LatestDate = styled.span`
  color: #ef5da8;
`;
