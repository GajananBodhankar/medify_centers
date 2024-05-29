import FooterImage from "../assets/footer.png";

function Footer() {
  return (
    <img
      src={FooterImage}
      style={{ width: "100%", position: "relative", zIndex: 10 }}
    />
  );
}

export default Footer;
