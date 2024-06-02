import { useMediaQuery } from "@mui/material";
import CustomList from "./CustomList";
import Medify from "../assets/Medify.png";
import "../Styles/findDoctor.css";
function FindDoctors() {
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
      <div className="homeNavSecond doctorNavSecond">
        <img src={Medify} alt="Image not found" className="medifyImage" />
        <CustomList match={match} isDoctor={true} />
      </div>
    </div>
  );
}

export default FindDoctors;
