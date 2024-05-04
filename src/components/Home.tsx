import { useEffect } from "react";
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
import SwiperCustom from "./SwiperCustom.js";
import { dataArrSpecialization } from "../Functionality/index.js";
import { useMediaQuery } from "@mui/material";
import CustomList from "./CustomList.js";
function Home() {
  useEffect(() => {
    handleIconClick();
  }, []);
  const match = useMediaQuery("(min-width: 1025px)");
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
          <CustomList match={match} />
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
                <p>Doctors</p>
              </div>
              <div className="labIcon">
                <img src={Labs} alt="" className="lab" />
                <p>Labs</p>
              </div>
              <div className="hospitalIcon">
                <img src={Hospitals} alt="" className="hospital" />
                <p>Hospitals</p>
              </div>
              <div className="medicalIcon">
                <img src={MedicalStore} alt="" className="medical" />
                <p>Medical Store</p>
              </div>
              <div className="ambulanceIcon">
                <img src={Ambulance} alt="" className="ambulance" />
                <p>Ambulance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SwiperCustom />
      <div className="specialization">
        <p>Find by specialisation</p>
        <div className="SubSpecialization">
          {dataArrSpecialization.map((i) => (
            <div>
              <img src={i} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
