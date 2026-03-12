const left = document.querySelector(".left-arrow");
const right = document.querySelector(".right-arrow");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".images");

let slideNumber = 1; // first image
const imageWidth = 290; // width of one image

// Right arrow
right.addEventListener("click", () => {
  if (slideNumber < images.length) {
    slider.style.transform = `translateX(-${slideNumber * imageWidth}px)`;
    slideNumber++;
  } else {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
  }
});

// Left arrow
left.addEventListener("click", () => {
  if (slideNumber > 1) {
    slideNumber--;
    slider.style.transform = `translateX(-${(slideNumber - 1) * imageWidth}px)`;
  } else {
    slideNumber = images.length;
    slider.style.transform = `translateX(-${(slideNumber - 1) * imageWidth}px)`;
  }
});
