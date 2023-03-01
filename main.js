const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slider = document.querySelector(".image_block");
const img = document.querySelectorAll(".image");

let counter = 0;
const stepSize = img[0].clientWidth;

slider.style.transform = "translateX(" + `${-stepSize * counter}` + "px)";
next.addEventListener("click", () => {
  if (counter >= img.length - 1) counter = -1;
  slider.classList.add("transfom-animate");
  counter++;
  slider.style.transform = "translateX(" + `${-stepSize * counter}` + "px)";
});

prev.addEventListener("click", () => {
  if (counter <= 0) counter = img.length;
  slider.classList.add("transfom-animate");
  counter--;
  slider.style.transform = "translateX(" + `${-stepSize * counter}` + "px)";
});