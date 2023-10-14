import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import PropTypes from "prop-types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = ({ name }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={20} // Adjust the space between slides as needed
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      style={{
        width: "100%",
        maxWidth: "600px",
        padding: "10px 0",
        textAlign: "center",
      }}
    >
      <SwiperSlide>
        I cannot express enough gratitude for the support{" "}
        <strong>{name}</strong> has provided in managing my personal finances.
        Their attention to detail and deep understanding of financial markets
        has ensured that my investments are in safe hands. I highly recommend
        their services to anyone seeking financial guidance.
      </SwiperSlide>
      <SwiperSlide>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
        exercitationem eum totam? Ea voluptatum a quas ipsa voluptates,
        aspernatur modi reprehenderit asperiores veniam sit, iste necessitatibus
        laboriosam doloremque. Minus, dolores?
      </SwiperSlide>
      <SwiperSlide>
        I cannot express enough gratitude for the support{" "}
        <strong>{name}</strong> has provided in managing my personal finances.
        Their attention to detail and deep understanding of financial markets
        has ensured that my investments are in safe hands. I highly recommend
        their services to anyone seeking financial guidance.
      </SwiperSlide>
    </Swiper>
  );
};

Slider.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Slider;
