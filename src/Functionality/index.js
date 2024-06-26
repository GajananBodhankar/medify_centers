import xray from '../assets/xray (1).png'
import dentistry from '../assets/Denistry.png';
import primarycare from '../assets/primaryCare.png'
import cardio from '../assets/cardio.png'
import mri from '../assets/MRI.png'
import pisco from '../assets/pisco.png'
import Laboratory from '../assets/laboratory.png'
import blood from '../assets/blood.png'
import plus from '../assets/plus.png'
import {
  ENDPOINT
} from '../../config';
import React from 'react';

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

function handleMenuClick() {
  let l = document.getElementById("smallUlList");
  if (l?.classList.contains("smallUlListHide")) {
    l.classList.add("smallUlListShow");
    l.classList.remove("smallUlListHide");
  } else {
    l?.classList.remove("smallUlListShow");
    l?.classList.add("smallUlListHide");
  }

}

async function ApiCall(setStates) {
  try {
    let result = await fetch(`${ENDPOINT}/states`)
    let data = await result.json()
    setStates(data)
  } catch (error) {

    console.log(error)
  }
}
async function getCitiesApiCall(state, setCities) {
  try {
    let result = await fetch(`${ENDPOINT}/cities/${state}`)
    let data = await result.json()
    setCities(data)
  } catch (error) {
    console.log(error)
  }
}

function changeIcon() {
  let svg = document.querySelectorAll('.MuiAccordionSummary-expandIconWrapper')
  svg.forEach(i => {
    let icon = document.createElement('img')
    icon.src = plus
    icon.setAttribute('style', 'width:100%')
    i.innerHTML = ''
    i.appendChild(icon)
  })
  console.log(svg)
}

function buttonHover() {
  let btn = document.querySelector(".appInputContainer>button");
  btn.addEventListener('mouseover', (e) => {

    btn.classList.add('smsBtnHover')
  })
  btn.addEventListener('mouseout', e => {
    btn.classList.remove('smsBtnHover')
  })
  console.log(btn);
}
export {
  handleIconClick,
  handleMenuClick,
  ApiCall,
  getCitiesApiCall,
  changeIcon,
  buttonHover
};