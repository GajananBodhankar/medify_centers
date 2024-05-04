import xray from '../assets/xray (1).png'
import dentistry from '../assets/Denistry.png';
import primarycare from '../assets/primaryCare.png'
import cardio from '../assets/cardio.png'
import mri from '../assets/MRI.png'
import pisco from '../assets/pisco.png'
import Laboratory from '../assets/laboratory.png'
import blood from '../assets/blood.png'

function handleIconClick() {
  let icons = document.querySelector(".stateCitySearchIconsWrapper");

  icons?.addEventListener("click", (e) => {
    icons.childNodes.forEach((i) => {
      if (i.classList[0].includes(e.target.classList[0])) {
        i.setAttribute(
          "style",
          "background-color:#def1ff;border:1px solid var(--mainbgcolor);color:#2AA7FF;opacity:100%;font-weight:Bold"
        );
      } else {
        i.setAttribute("style", "");
      }
    });
  });
}

export let dataArrSpecialization = [dentistry, primarycare, cardio, mri, blood, pisco, Laboratory, xray]

export {
  handleIconClick
};