import {
  Navigation,
  Pagination,
  A11y,
  Scrollbar,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import doctor1 from "../assets/doctor1.png";
import doctor2 from "../assets/doctor2.png";
import doctor3 from "../assets/doctor3.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { useMediaQuery } from "@mui/material";
function SwiperDoctor() {
  const match = useMediaQuery("(max-width: 992px) and (min-width: 600px)");
  const match2 = useMediaQuery("(min-width: 0px) and (max-width: 600px)");
  function slides() {
    if (match) {
      return 3;
    } else if (match2) {
      return 2;
    }
    return 4;
  }
  return (
    <Swiper
      style={{ padding: "20px" }}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={40}
      speed={1000}
      autoplay={{
        delay: 2000,
      }}
      slidesPerView={slides()}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img
          src={doctor1}
          alt=""
          style={{ marginTop: "30px", width: "100%" }}
        />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <img
          src={doctor2}
          alt=""
          style={{ marginTop: "30px", width: "100%" }}
        />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <img
          src={doctor3}
          alt=""
          style={{ marginTop: "30px", width: "100%" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={doctor1}
          alt=""
          style={{ marginTop: "30px", width: "100%" }}
        />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <img
          src={doctor2}
          alt=""
          style={{ marginTop: "30px", width: "100%" }}
        />
      </SwiperSlide>{" "}
      <SwiperSlide>
        <img
          src={doctor3}
          alt=""
          style={{ marginTop: "30px", width: "100%" }}
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperDoctor;
