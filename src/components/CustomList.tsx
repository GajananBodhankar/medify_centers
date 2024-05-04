import { MenuOutlined } from "@mui/icons-material";
import { handleMenuClick } from "../Functionality";

function CustomList({ match }: any) {
  return (
    <>
      {match && (
        <ul className="homeNavSecondList">
          <li>Find Doctors</li>
          <li>Hospitals</li>
          <li>Medicines</li>
          <li>Surgeries</li>
          <li>Software for Provider</li>
          <li>Facilities</li>
          <button>My Bookings</button>
        </ul>
      )}
      <div style={{ position: "relative" }}>
        {!match && <MenuOutlined onClick={() => handleMenuClick()} />}
        <div id="smallUlList" className="smallUlListHide">
          <ul className="homeNavSecondListSmall">
            <li>Find Doctors</li>
            <li>Hospitals</li>
            <li>Medicines</li>
            <li>Surgeries</li>
            <li>Software for Provider</li>
            <li>Facilities</li>
            <button>My Bookings</button>
          </ul>
        </div>
      </div>
    </>
  );
}

export default CustomList;
