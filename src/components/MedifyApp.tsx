import mobileScreen from "../assets/MobileImage.png";
import mobileImage from "../assets/MobileInnerImage.png";
import MobileImageSmall from "../assets/MobileImageSmall.png";
import googlePlay from "../assets/google_play.png.png";
import appleStore from "../assets/apple_store.png.png";
function MedifyApp() {
  return (
    <div className="appMainContainer">
      <div className="appImages">
        <img
          src={MobileImageSmall}
          alt=""
          style={{
            top: "15%",
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
            top: "28%",
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
            position: "relative",
            top: "7%",
          }}
        />
        <img
          src={mobileImage}
          style={{
            position: "absolute",
            left: "51.5%",
            top: "14%",
            borderTopRightRadius: "20px",
            borderTopLeftRadius: "20px",
            width: "47.5%",
            height: "92%",
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
        <div className="playStoreIcons">
          <img src={googlePlay} alt="" />
          <img src={appleStore} alt="" />
        </div>
      </div>
    </div>
  );
}

export default MedifyApp;
