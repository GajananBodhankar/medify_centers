import { Navigation, Pagination, A11y, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperOne from "../assets/swiperOne.png";
import SwiperTwo from "../assets/SwiperTwo.png";
import SwiperThree from "../assets/SwiperThree.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useMediaQuery } from "@mui/material";
function SwiperCustom() {
  const match = useMediaQuery("(max-width: 992px) and (min-width: 600px)");
  const match2 = useMediaQuery("(min-width: 0px) and (max-width: 600px)");
  function slides() {
    if (match) {
      return 2;
    } else if (match2) {
      return 1;
    }
    return 3;
  }
  return (
    <Swiper
      style={{ padding: "50px" }}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={slides()}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img
          src={SwiperOne}
          alt=""
          style={{ marginTop: "30px", width: "100%" }}
        />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <img
          src={SwiperTwo}
          alt=""
          style={{ marginTop: "30px", width: "100%" }}
        />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <img
          src={SwiperThree}
          alt=""
          style={{ marginTop: "30px", width: "100%" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={SwiperOne}
          alt=""
          style={{ marginTop: "30px", width: "100%" }}
        />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <img
          src={SwiperTwo}
          alt=""
          style={{ marginTop: "30px", width: "100%" }}
        />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <img
          src={SwiperThree}
          alt=""
          style={{ marginTop: "30px", width: "100%" }}
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperCustom;
