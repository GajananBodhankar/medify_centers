import React, { useEffect, useState } from "react";
import "../Styles/home.css";
import Medify from "../assets/Medify.png";
import DoctorsImage from "../assets/DoctorImage.png";
import SearchIcon from "../assets/SearchIcon.png";
import SearchIconGrey from "../assets/SearchGrey.png";
import Ambulance from "../assets/Ambulance.png";
import Doctor from "../assets/Doctor.png";
import Hospitals from "../assets/Hospital.png";
import Labs from "../assets/Drugstore.png";
import MedicalStore from "../assets/Capsule.png";
import { handleIconClick } from "../Functionality/index.js";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperOne from "../assets/swiperOne.png";
import SwiperTwo from "../assets/SwiperTwo.png";
import SwiperThree from "../assets/SwiperThree.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
function Home() {
  useEffect(() => {
    handleIconClick();
  }, []);
  return (
    <div className="mainHomeContainer">
      <nav className="homeNav">
        <p>
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </p>
      </nav>
      <div className="homeNavSecondThirdWrapper">
        <div className="homeNavSecond">
          <img src={Medify} alt="Image not found" className="medifyImage" />
          <ul className="homeNavSecondList">
            <li>Find Doctors</li>
            <li>Hospitals</li>
            <li>Medicines</li>
            <li>Surgeries</li>
            <li>Software for Provider</li>
            <li>Facilities</li>
            <button>My Bookings</button>
          </ul>
        </div>
        <div className="homeNavThird">
          <div className="subHomeNavThird">
            <p>
              Skip the travel! Find Online
              <br />
              <span>
                Medical <span style={{ color: "#2aa7ff" }}>Centers</span>
              </span>
            </p>
            <p>
              Connect instantly with a 24x7 specialist or choose to video visit
              a particular doctor.
            </p>
            <button>Find Centers</button>
          </div>
          <img src={DoctorsImage} alt="" />
        </div>
        <div className="stateCitySearchDiv">
          <div className="stateCitySearchSubOne">
            <div className="stateCustomInput">
              <img src={SearchIconGrey} alt="" />
              <input type="text" placeholder="State" />
            </div>
            <div className="stateCustomInput">
              <img src={SearchIconGrey} alt="" />
              <input type="text" placeholder="City" />
            </div>
            <button>
              <img src={SearchIcon} alt="" />
              <p>Search</p>
            </button>
          </div>
          <div className="stateCitySearchSubTwo">
            <p>You may be looking for</p>
            <div className="stateCitySearchIconsWrapper">
              <div className="doctorIcon">
                <img src={Doctor} alt="" className="doctor" />
              </div>
              <div className="labIcon">
                <img src={Labs} alt="" className="lab" />
              </div>
              <div className="hospitalIcon">
                <img src={Hospitals} alt="" className="hospital" />
              </div>
              <div className="medicalIcon">
                <img src={MedicalStore} alt="" className="medical" />
              </div>
              <div className="ambulanceIcon">
                <img src={Ambulance} alt="" className="ambulance" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        style={{ padding: "50px", marginTop: "10rem" }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={SwiperOne} alt="" style={{ marginTop: "30px" }} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src={SwiperTwo} alt="" style={{ marginTop: "30px" }} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src={SwiperThree} alt="" style={{ marginTop: "30px" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SwiperOne} alt="" style={{ marginTop: "30px" }} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src={SwiperTwo} alt="" style={{ marginTop: "30px" }} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src={SwiperThree} alt="" style={{ marginTop: "30px" }} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Home;
