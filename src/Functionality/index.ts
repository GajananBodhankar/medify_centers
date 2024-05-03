function handleIconClick() {
  let icons = document.querySelector(".stateCitySearchIconsWrapper");

  icons?.addEventListener("click", (e) => {
    icons.childNodes.forEach((i) => {
      if (i.classList[0].includes(e.target.classList[0])) {
        i.setAttribute("style", "background-color:#def1ff");
      } else {
        i.setAttribute("style", "");
      }
    });
  });
}

export { handleIconClick };
