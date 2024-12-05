const contactText = document.querySelector(".contact-display>p");
const linkDis = document.querySelector(".link-appear");

const MainText = "Reach out and let's craft something";
const textArr = MainText.split("");
const spanArr = [];
let spanTextArr = [];



const cloneT = ["a", "b", "c", "5", "4", "h", "=", "d", "e", "1"];
const colorR = ["var(--help-color)", "var(--main-color)"];

function textGlitch() {
  textArr.forEach((text) => {
    const span = document.createElement("span");
    span.innerText = text;
    contactText.appendChild(span);
    spanArr.push(span);

    let animatationFrame

    function animationGlitch () {
        if(span.textContent !== " ") {
          span.innerText = cloneT[Math.floor(Math.random() * cloneT.length)];
          span.style.color = colorR[Math.floor(Math.random() * colorR.length)];
          animatationFrame = requestAnimationFrame(animationGlitch);
        }
    }
    

    if (span.textContent !== " ") {
        animationGlitch();
    }

    function resetText () {
      cancelAnimationFrame(animatationFrame);
      span.innerText = text;
      span.style.color = "var(--sec-color)";
      span.style.textShadow = "0 0 10px var(--main-color)";

      const spanText = spanArr.map((span) => span.textContent).join("");

      if (spanText === MainText) {
        linkDis.classList.add('link-animate');
      }
    }


    span.addEventListener("mouseenter", resetText);
    contactText.addEventListener("touchstart", resetText);
    contactText.addEventListener("touchmove", resetText);

    
  });
}

textGlitch();
