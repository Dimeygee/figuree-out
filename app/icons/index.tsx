export const BarSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="6"
      height="120"
      viewBox="0 0 6 120"
      fill="none"
    >
      <path
        d="M3 0L2.99999 120"
        stroke="url(#paint0_linear_3410_47118)"
        strokeWidth="5"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3410_47118"
          x1="3.5"
          y1="-6"
          x2="3.49999"
          y2="102"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3877EE" />
          <stop offset="1" stopColor="#EF5DA8" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const ArrowLeft = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
    >
      <circle
        cx="25"
        cy="25"
        r="24.5"
        transform="matrix(-1 0 0 1 50 0)"
        stroke="#42567A"
        strokeOpacity="0.5"
      />
      <path
        d="M27.5 18.75L21.25 25L27.5 31.25"
        stroke="#42567A"
        strokeWidth="2"
      />
    </svg>
  );
};

export const ArrowRight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
    >
      <g>
        <circle cx="25" cy="25" r="24.5" stroke="#42567A" strokeOpacity="0.5" />
        <path
          d="M22.5 18.75L28.75 25L22.5 31.25"
          stroke="#42567A"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
};

export const SliderArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
    >
      <path d="M1 1L6 6L1 11" stroke="#3877EE" strokeWidth="2" />
    </svg>
  );
};
