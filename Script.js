function imgChange() {
  const img = document.querySelector(".main-img");
  if (window.innerWidth <= 960) {
    img.src = "assets/images/illustration-sign-up-mobile.svg";
  } else {
    img.src = "assets/images/illustration-sign-up-desktop.svg";
  }
}

addEventListener("resize", imgChange);
imgChange();
