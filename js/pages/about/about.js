const aboutButtons = document.querySelectorAll(".button-class>a");
const aboutButtonChecks = document.querySelectorAll(".button-class>a>span:nth-child(2)");
const aboutTextBox = document.querySelector(".text-box");
const aboutTextBoxHeader = document.querySelectorAll(".text-box>h2");

aboutButtonChecks[0].style.backgroundColor = "var(--sec-color)";
aboutButtonChecks[0].style.boxShadow = "0 0 30px 10px #ffed843f";

aboutButtons.forEach((button, index) => {
  const checks = Array.from(aboutButtonChecks);
  const positions = Array.from(aboutTextBoxHeader);
  const position = positions[index].offsetTop;


  function scrollBehaviour () {

    checks[index].style.backgroundColor = "var(--sec-color)";
    checks[index].style.boxShadow = "0 0 30px 10px #ffed843f";

    checks
      .filter((_, i) => i !== index)
      .forEach((e) => {
        e.style.backgroundColor = "var(--back-color)";
        e.style.boxShadow = "unset";
      });

  }

  button.addEventListener("click", () => {

    aboutTextBox.scrollTo(0, position, "smooth");
    scrollBehaviour();
    
  });

  aboutTextBox.addEventListener("scroll", () => {

    if (aboutTextBox.scrollTop + 100 >= position) {
      scrollBehaviour();
    }
  });
});
