import mobileScreen from "../assets/MobileImage.png";
import mobileImage from "../assets/MobileInnerImage.png";
function MedifyApp() {
  return (
    <div className="appMainContainer">
      <div className="appImages">
        <img
          src={mobileScreen}
          alt=""
          style={{
            top: "17%",
            position: "relative",
            left: "15%",
            width: "50%",
            zIndex: "1",
          }}
        />
        <img
          src={mobileImage}
          style={{
            position: "absolute",
            left: "16.5%",
            top: "24%",
            zIndex: "10",
            width: "47.5%",
            borderTopRightRadius: "20px",
            borderTopLeftRadius: "20px",
          }}
          alt=""
        />
        <img
          src={mobileScreen}
          alt=""
          style={{
            width: "50%",
          }}
        />
        <img
          src={mobileImage}
          style={{
            position: "absolute",
            left: "51.5%",
            top: "7%",
            borderTopRightRadius: "20px",
            borderTopLeftRadius: "20px",
            width: "47.5%",
            height: "90%",
          }}
          alt=""
        />
      </div>
      <div className="appContent">
        <p>Download the</p>
        <p>
          <span>Medify</span> App
        </p>
        <p>Get the link to download the app</p>
        <div className="appInputContainer">
          <div style={{ display: "flex" }}>
            <div className="appCountryCode">+91</div>
            <input type="tel" placeholder="Enter phone number" required />
          </div>
          <button>Send SMS</button>
        </div>
      </div>
    </div>
  );
}

export default MedifyApp;
