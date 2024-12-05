const certificates = [
  "../../img/Certificate_images/Screenshot 2024-10-30 183430.png",
  "../../img/Certificate_images/Screenshot 2024-10-30 183802.png",
  "../../img/Certificate_images/Screenshot 2024-10-29 180738.png",
  "../../img/Certificate_images/CamScanner 11-13-2024 13.30_1.jpg",
  "../../img/Certificate_images/CamScanner 11-13-2024 13.30_2.jpg",
];

const certificateBox = document.querySelectorAll(".inner-box");
const cope = Array.from(document.querySelectorAll(".cope"));
const detail = document.querySelector(".detail");
const disBg = document.querySelector(".disable-background");
const cancel = document.querySelector(".cancel");

certificateBox.forEach((c, index) => {
  c.style.backgroundImage = `url("${certificates[index]}")`;
  c.addEventListener("mouseenter", () => {
    cope[index].style.opacity = 1;
    cope[index].style.top = 0;
  });

  c.addEventListener("mouseleave", () => {
    cope[index].style.opacity = 0;
    cope[index].style.top = "100%";
  });

  c.addEventListener("click", () => {
    detail.style.backgroundImage = `url("${certificates[index]}")`;
    detail.style.display = "block";
    disBg.style.display = "flex";
  });
});

cancel.addEventListener("click", () => {
  detail.style.display = "none";
  disBg.style.display = "none";
  document.querySelector("body").style.overflow = "auto";
});
