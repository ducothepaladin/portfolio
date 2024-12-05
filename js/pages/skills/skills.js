const wheel = document.querySelector(".wheel");
const link = document.querySelector(".link");
const clones = document.querySelectorAll(".clones");
const skillTags = document.querySelectorAll(".wheel>div");
const skillDetail = document.querySelector(".skill-detail");
let stopScroll = false,
  scrollHeight = 0,
  scrollPosition = 0,
  clonesHeight = 0;

const details = [
  {
    title: "HTML",
    exp: "6 months",
    icon: "fa-brands fa-html5",
    story:
      "HTML was my first step into web development. I learned it from a FreeCodeCamp YouTube video, and I felt really satisfied seeing whatever I wrote appear on the webpage. It marked the beginning of my journey into this field.",
    progress: "90%",
  },
  {
    title: "CSS",
    exp: "6 months",
    icon: "fa-brands fa-css3-alt",
    story:
      "Like HTML, CSS was also one of my first steps into web development. I still remember how much I loved seeing the color of my content change with just a single line of code. Those were exciting moments!",
    progress: "90%",
  },
  {
    title: "JavaScript",
    exp: "5 months",
    icon: "fa-brands fa-js",
    story:
      "Ok, let me tell you a brief story of a nightmare: JavaScript. When I first started with it, JavaScript felt like a supervillain, my very first programming language and a tough one to crack. So, I took a class from Fairway Technology and learned the basics of programming with Java, which made JavaScript much easier to tackle.And I also took a class from freecodecamp website, it give a lot help to me. Now, JavaScript has become my favorite language. I love seeing the progress!",
    progress: "80%",
  },
  {
    title: "Bootstrap",
    exp: "3 months",
    icon: "fa-brands fa-bootstrap",
    story:
      "Bootstrap was my very first framework. There’s not much of a story there, I learned it, got the hang of it, and started using it. It felt pretty easy to work with!",
    progress: "80%",
  },
  {
    title: "React",
    exp: "3 months",
    icon: "fa-brands fa-react",
    story:
      "Learning React makes me angry sometimes. It makes handling things so much easier compared to vanilla JS, which is great, but there's still a lot for me to learn. I love using it, and I’m excited about the progress and eager to build more projects with it!",
    progress: "70%",
  },
  {
    title: "PHP",
    exp: "2 months",
    icon: "fa-brands fa-php",
    story:
      "I chose PHP as my server-side language, and I’m making good progress with it. I’ve already completed one project, and it’s not bad at all! I can handle it, even though there’s still a lot left to learn.",
    progress: "60%",
  },
  {
    title: "Laravel",
    exp: "1 months",
    icon: "fa-brands fa-laravel",
    story:
      "Laravel is still a work in progress for me, but I’ve got a good grasp of the concept, and I believe it won’t take long to get comfortable with it. I’m actively working with it now, and loving the progress!",
    progress: "50%",
  },
  {
    title: "MySQL",
    exp: "2 months",
    icon: "fa-solid fa-database",
    story:
      "When it comes to databases, I’m really comfortable with MySQL. Not much to say about it.For now, it’s the only one I’m working with at the moment.",
    progress: "60%",
  },
  {
    title: "HTML",
    exp: "6 months",
    icon: "fa-brands fa-html5",
    story:
      "HTML was my first step into web development. I learned it from a FreeCodeCamp YouTube video, and I felt really satisfied seeing whatever I wrote appear on the webpage. It marked the beginning of my journey into this field.",
    progress: "90%",
  },
  {
    title: "CSS",
    exp: "6 months",
    icon: "fa-brands fa-css3-alt",
    story:
      "Like HTML, CSS was also one of my first steps into web development. I still remember how much I loved seeing the color of my content change with just a single line of code. Those were exciting moments!",
    progress: "90%",
  },
  {
    title: "JavaScript",
    exp: "5 months",
    icon: "fa-brands fa-js",
    story:
      "Ok, let me tell you a brief story of a nightmare: JavaScript. When I first started with it, JavaScript felt like a supervillain, my very first programming language and a tough one to crack. So, I took a class from Fairway Technology and learned the basics of programming with Java, which made JavaScript much easier to tackle.And I also took a class from freecodecamp website, it give a lot help to me. Now, JavaScript has become my favorite language. I love seeing the progress!",
    progress: "80%",
  },
  {
    title: "Bootstrap",
    exp: "3 months",
    icon: "fa-brands fa-bootstrap",
    story:
      "Bootstrap was my very first framework. There’s not much of a story there, I learned it, got the hang of it, and started using it. It felt pretty easy to work with!",
    progress: "80%",
  },
  {
    title: "React",
    exp: "3 months",
    icon: "fa-brands fa-react",
    story:
      "Learning React makes me angry sometimes. It makes handling things so much easier compared to vanilla JS, which is great, but there's still a lot for me to learn. I love using it, and I’m excited about the progress and eager to build more projects with it!",
    progress: "70%",
  },
];

let indexCheck;

function getDetail(index, color) {
  const detail = details[index];

  if (indexCheck !== index) {
    skillDetail.classList.remove("skill-detail-add");

    const observer = new MutationObserver(() => {
      skillDetail.classList.remove("skill-detail-add");
      skillDetail.classList.add("skill-detail-add");
    });

    observer.observe(skillDetail, { childList: true, subtree: true });
  }

  skillDetail.innerHTML = `
            <h2>${detail.title}<i style="margin-left: 10px; color: ${color};;" class="${detail.icon}"></i></h2>
            <p>Experience - ${detail.exp}</p>
            <h3>Story</h3>
            <p>
              ${detail.story}
            </p>
            <div class="progress"><span style="width: ${detail.progress}; background-color: ${color};"></span></div>
            <p>${detail.progress}</p>`;

  indexCheck = index;
}

function getScrollPosition() {
  return (wheel.pageYOffset || wheel.scrollTop) - (wheel.clientTop || 0);
}

function setScrollPosition(pos) {
  wheel.scrollTop = pos;
}

function getClonesHeight() {
  clonesHeight = 0;

  for (let i = 0; i < clones.length; i++) {
    clonesHeight = clonesHeight + clones[i].offsetHeight;
  }

  return clonesHeight;
}

function reCalculate() {
  scrollPosition = getScrollPosition();
  scrollHeight = wheel.scrollHeight;
  clonesHeight = getClonesHeight();

  if (scrollPosition <= 0) {
    setScrollPosition(1);
  }
}

function getLargeArea() {
  return wheel.clientHeight / 2;
}

function scrollUpdate() {
  if (!stopScroll) {
    scrollPosition = getScrollPosition();
    const largeArea = getLargeArea();

    if (clonesHeight + scrollPosition - 250 >= scrollHeight) {
      setScrollPosition(1);
      stopScroll = true;
    } else if (scrollPosition <= 0) {
      stopScroll = true;
      setScrollPosition(scrollHeight - clonesHeight + 250);
    }

    skillTags.forEach((tag, index) => {
      const tagPos = tag.offsetTop - wheel.scrollTop;

      tag.classList.add("wheel-normal");

      tag.addEventListener("click", () => {
        wheel.scrollTo(0, tag.offsetTop - (tag.offsetHeight * 2), "smooth");
      });

      if (tagPos >= largeArea - 110 && tagPos <= largeArea) {
        tag.classList.remove("wheel-normal");
        tag.classList.add("wheel-add");
        const color = getComputedStyle(
          tag.querySelector(".check-point")
        ).backgroundColor;
        link.style.backgroundColor = color;

        getDetail(index, color);
      } else {
        tag.classList.remove("wheel-add");
        tag.classList.add("wheel-normal");
      }
    });
  }

  if (stopScroll) {
    window.setTimeout(() => {
      stopScroll = false;
    }, 40);
  }
}

function initial() {
  reCalculate();

  wheel.addEventListener(
    "scroll",
    function () {
      window.requestAnimationFrame(scrollUpdate);
    },
    false
  );

  window.addEventListener(
    "resize",
    function () {
      window.requestAnimationFrame(reCalculate);
    },
    false
  );
}

if (document.readyState !== "loading") {
  initial();
} else {
  document.addEventListener("DOMContentLoaded", initial);
}
