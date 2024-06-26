import { useEffect, useState } from "react";
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
import patientImage from "../assets/PatientImage.png";
import tick from "../assets/tick.png";
import blogsImage from "../assets/doctorBlogs.png";
import familyOne from "../assets/familyOne.png";
import familyTwo from "../assets/families.png";
import frequentlyAsked from "../assets/frequentlyAskedImage.png";

import {
  ApiCall,
  buttonHover,
  changeIcon,
  getCitiesApiCall,
  handleIconClick,
} from "../Functionality/index.js";
import SwiperCustom from "./SwiperCustom.js";
import { dataArrSpecialization } from "../Functionality/index.js";
import { useMediaQuery } from "@mui/material";
import CustomList from "./CustomList.js";
import SwiperDoctor from "./SwiperDoctors.js";
import "../Styles/patientCaring.css";
import AccordionUsage from "./Accordion.js";
import MedifyApp from "./MedifyApp.js";
import Footer from "./Footer.js";
function Home() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  useEffect(() => {
    handleIconClick();
    ApiCall(setStates);
    changeIcon();
    buttonHover();
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
              <select
                name=""
                id=""
                onChange={(e) => getCitiesApiCall(e.target.value, setCities)}
                defaultValue={"State"}
              >
                <option value="State" disabled>
                  State
                </option>
                {states.map((i, j) => (
                  <option value={i} key={`${i}${j}`}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
            <div className="stateCustomInput">
              <img src={SearchIconGrey} alt="" />
              <select name="" id="" defaultValue={"City"}>
                <option value="City" disabled>
                  City
                </option>
                {cities.map((i, j) => (
                  <option value={i} key={`${i}${j}`}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
            <button>
              <img src={SearchIcon} alt="" />
              <p>Search</p>
            </button>
          </div>
          <div className="stateCitySearchSubTwo">
            <p>You may be looking for</p>
            <div className="stateCitySearchIconsWrapper">
              <div className="doctorIcon commonForLookingIcon">
                <img src={Doctor} alt="" className="doctor" />
                <p>Doctors</p>
              </div>
              <div className="labIcon commonForLookingIcon">
                <img src={Labs} alt="" className="lab" />
                <p>Labs</p>
              </div>
              <div className="hospitalIcon commonForLookingIcon">
                <img src={Hospitals} alt="" className="hospital" />
                <p>Hospitals</p>
              </div>
              <div className="medicalIcon commonForLookingIcon">
                <img src={MedicalStore} alt="" className="medical" />
                <p>Medical Store</p>
              </div>
              <div className="ambulanceIcon commonForLookingIcon">
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
          {dataArrSpecialization.map((i, j) => (
            <div key={`${i}${j}`}>
              <img src={i} alt="" width={"100%"} />
            </div>
          ))}
        </div>
      </div>
      <SwiperDoctor />
      <div className="patientMainContainer">
        <div className="patientCaringImages">
          <img src={patientImage} alt="" />
        </div>
        <div className="patientCaringTexts">
          <p>HELPING PATIENTS FROM AROUND THE GLOBE!!</p>
          <p>
            Patient <span>Caring</span>
          </p>
          <p>
            Our goal is to deliver quality of care in a courteous, respectful,
            and compassionate manner. We hope you will allow us to care for you
            and strive to be the first and best choice for healthcare.
          </p>
          <div>
            <img src={tick} alt="" />
            <p>Stay Updated About Your Health</p>
          </div>
          <div>
            <img src={tick} alt="" />
            <p>Check Your Results Online</p>
          </div>
          <div>
            <img src={tick} alt="" />
            <p>Manage Your Appointments</p>
          </div>
        </div>
      </div>
      <div className="blogsAndNews">
        <div className="blogsAndNewsHeader">
          <p>Blogs & News</p>
          <p>Read Our Latest News</p>
        </div>
        <div className="blogsAndNewsImages">
          <img src={blogsImage} alt="" />
          <img src={blogsImage} alt="" />
          <img src={blogsImage} alt="" />
        </div>
      </div>
      <div className="familiesMainContainer">
        <img src={familyOne} alt="" />
        <img src={familyTwo} alt="" />
      </div>
      <div className="frequentlyAskedMainContainer">
        <div className="frequentlyAskedHeader">
          <p>Get Your Answer</p>
          <p>Frequently Asked Questions</p>
        </div>
        <div className="frequentlyAskedContent">
          <img src={frequentlyAsked} alt="" />
          <AccordionUsage />
        </div>
      </div>
      <MedifyApp />
      <Footer />
    </div>
  );
}

export default Home;
