import { MenuOutlined } from "@mui/icons-material";
import { handleMenuClick } from "../Functionality";
import { useNavigate } from "react-router-dom";

function CustomList({ match, isDoctor = false }: any) {
  const navigate = useNavigate();

  return (
    <div style={{ overflow: "hidden" }}>
      {match && !isDoctor && (
        <ul className="homeNavSecondList">
          <li className="underlineHover" onClick={() => navigate("/doctors")}>
            Find Doctors
          </li>
          <li className="underlineHover">Hospitals</li>
          <li className="underlineHover">Medicines</li>
          <li className="underlineHover">Surgeries</li>
          <li className="underlineHover">Software for Provider</li>
          <li className="underlineHover">Facilities</li>
          <button>My Bookings</button>
        </ul>
      )}
      {match && isDoctor && (
        <ul
          className="homeNavSecondList doctorNavSecondList"
          onClick={(e: any) => {
            let s = document.querySelectorAll(".doctorUnderlineHover");
            s.forEach((i: any) => {
              if (i.innerText == e.target.innerText) {
                if (i.classList.contains("doctorUnderline")) {
                  i.classList.remove("doctorUnderline");
                } else {
                  i.classList.add("doctorUnderline");
                }
              } else {
                i.classList.remove("doctorUnderline");
              }
            });
          }}
        >
          <li className="doctorUnderlineHover">Find Doctors</li>
          <li className="doctorUnderlineHover">Hospitals</li>
          <li className="doctorUnderlineHover">Medicines</li>
          <li className="doctorUnderlineHover">Surgeries</li>
          <li className="doctorUnderlineHover">Software for Provider</li>
          <li className="doctorUnderlineHover">Facilities</li>
          <button>My Bookings</button>
        </ul>
      )}
      <div>
        {!match && <MenuOutlined onClick={() => handleMenuClick()} />}
        <div id="smallUlList" className="smallUlListHide">
          <ul className="homeNavSecondListSmall">
            <li onClick={() => navigate("/doctors")}>Find Doctors</li>
            <li>Hospitals</li>
            <li>Medicines</li>
            <li>Surgeries</li>
            <li>Software for Provider</li>
            <li>Facilities</li>
            <button>My Bookings</button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CustomList;
