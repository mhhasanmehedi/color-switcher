document
  .querySelector(".theme-buttons-container i")
  .addEventListener("click", () => {
    document.querySelector("input").click();
  });

let colorValue = document.querySelector("input");
colorValue.addEventListener(
  "change",
  () => {
    let getColorValue = colorValue.value;
    let dataColor = document
      .querySelector(".colorValue")
      .setAttribute("data-color", getColorValue);
    document.querySelector(".colorValue").click();
    console.log(dataColor);
    console.log(getColorValue);
  },
  false
);

document.querySelector(".switcher-btn").onclick = () => {
  document.querySelector(".color-switcher").classList.toggle("active");
};

let themeButtons = document.querySelectorAll(".theme-buttons");

themeButtons.forEach((color) => {
  color.addEventListener("click", () => {
    let dataColor = color.getAttribute("data-color");
    document
      .querySelector(":root")
      .style.setProperty("--main-color", dataColor);
  });
});

let themeFontsButton = document.querySelectorAll(".theme-fonts-button");

themeFontsButton.forEach((font) => {
  font.addEventListener("click", () => {
    let dataFont = font.getAttribute("data-font");
    document.querySelector(":root").style.setProperty("--main-font", dataFont);
  });
});
