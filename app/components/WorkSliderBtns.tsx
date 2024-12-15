"use client";

import { useSwiper } from "swiper/react";

import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
type WorkSliderBtnsProps = {
  conatinerStyle: string;
  btnStyles: string;
  iconsStyle: string;
};

const WorkSliderBtns = ({
  conatinerStyle,
  btnStyles,
  iconsStyle,
}: WorkSliderBtnsProps) => {
  const swiper = useSwiper();

  return (
    <div className={conatinerStyle}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconsStyle} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconsStyle} />
      </button>
    </div>
  );
};
export default WorkSliderBtns;
