"use client"

import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export interface HistoricalEvent {
  year: number;
  event: string;
}

export interface HistoricalData {
  fromYear: number;
  toYear: number;
  events: HistoricalEvent[];
}

interface SliderProps {
  data: HistoricalData;
  fading: boolean;
}

export const Slider: React.FC<SliderProps> = ({ data, fading }) => {
  return (
    <SwiperSlideWrapper className={fading ? "fading" : ""}>
      <Arrow className="swiper-button-prev"></Arrow>
      <Arrow className="swiper-button-next"></Arrow>

      <Swiper
        slidesPerView={"auto"}
        spaceBetween={80}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination", 
        }}
        modules={[Navigation, Pagination]}
      >
        {data.events.map((event, index) => (
          <SwiperSlide key={index} style={{ width: "auto" }}>
            <SlideContent>
              <h3>{event.year}</h3>
              <p>{event.event}</p>
            </SlideContent>
          </SwiperSlide>
        ))}
      </Swiper>
      <PaginationWrapper className="swiper-pagination"></PaginationWrapper>
    </SwiperSlideWrapper>
  );
};

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  font-size: 16px;
  font-weight: 600;
  color: #42567a;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: white;
  color: rgba(56, 119, 238);
  filter: drop-shadow(0px 0px 15px rgba(56, 119, 238, 0.1));
  user-select: none;

  @media screen and (max-width: 540px) {
    display: none;
  }

  &.swiper-button-prev {
    left: 0;

    &:after {
      font-size: 14px;
    }
  }

  &.swiper-button-next {
    right: 0;

    &:after {
      font-size: 14px;
    }
  }
`;

const PaginationWrapper = styled.div`
  display: none;

  @media screen and (max-width: 540px) {
    display: block;
    margin-top: 10px;
    text-align: center;
  }

  .swiper-pagination-bullet {
    background-color: rgba(56, 119, 238);
    opacity: 0.4;
    transition: opacity 0.3s;

    &.swiper-pagination-bullet-active {
      opacity: 1;
    }
  }
`;

const SlideContent = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 15px;
  padding: 54px 0;

  @media screen and (max-width: 540px) {
    width: 166px;
  }

  h3 {
    margin: 0;
    font-size: 25px;
    color: #3877ee;
    text-transform: uppercase;
    line-height: 120%;

    @media screen and (max-width: 540px) {
      font-size: 16px;
    }
  }

  p {
    font-size: 20px;
    color: #42567AFF;
    line-height: 30px;

    @media screen and (max-width: 540px) {
      font-size: 14px;
    }
  }
`;

const SwiperSlideWrapper = styled.div`
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
  position: relative;
  z-index: 100;

  &.fading {
    opacity: 0;
  }

  position: relative;
`;
