"use client"

import styled from "styled-components";

export const Date = () => {
    return (
      <>
        <DateWrapper>
          <PrevDate>2015</PrevDate>
          <LatestDate>2022</LatestDate>
        </DateWrapper>
      </>
    );
}




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
  font-weight: 700;
  line-height: 160px;
  letter-spacing: -4px;
`;



const PrevDate = styled.span`
  color: #5d5fef;
`;

const LatestDate = styled.span`
  color: #EF5DA8;
`;

