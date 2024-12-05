const buttons = Array.from(document.querySelectorAll(".project-button>div"));
const projectDisplay = document.querySelector(".project-display");

let clickCheck = false;

const projectArr = [
  {
    title: "Simple Ecomernce Project",
    languages: `<i style="color: red" class="fa-brands fa-html5"></i
              > <i style="color: blue" class="fa-brands fa-css3-alt"></i
              > <i style="color: yellow" class="fa-brands fa-js"></i
              > <i style="color: #563d7c" class="fa-brands fa-bootstrap"></i
              > <i style="color: lightblue" class="fa-brands fa-react"></i
              >`,
    story:
      "I was actually kind of angry building this one, React made things so much easier compared to the struggles I had with vanilla JavaScript! But I’m glad I finished it with all the features I wanted.",
    videoSrc:
      "../../../video/projects/duco_online_shop.mp4",
  },
  {
    title: "Order Menu Project",
    languages: `<i style="color: red" class="fa-brands fa-html5"></i
              > <i style="color: blue" class="fa-brands fa-css3-alt"></i
              > <i style="color: yellow" class="fa-brands fa-js"></i
              >`,
    story:
      "This project is my very first JavaScript project and my first completed website. Those five days were both incredibly frustrating and some of the best this year. When I started, I barely knew JavaScript and only had a basic understanding of Java. My learning style is very challenge-based, taking on projects and learning through curiosity, so this was definitely a challenge for me. That’s why, after struggling with vanilla JavaScript, I felt a bit annoyed when I tried React and saw how much it simplifies things!",
    videoSrc:
      "../../../video/projects/mini_restaurant.mp4",
  },
  {
    title: "Turn Based Pokemon Game Project",
    languages: `<i style="color: red" class="fa-brands fa-html5"></i
              > <i style="color: blue" class="fa-brands fa-css3-alt"></i
              > <i style="color: yellow" class="fa-brands fa-js"></i
              > <i style="color: #563d7c" class="fa-brands fa-bootstrap"></i
              > <i style="color: lightblue" class="fa-brands fa-react"></i
              >`,
    story:
      "I'm a big fan of the main Pokémon games. Even though I’m usually not into turn-based games, Pokémon really keeps me entertained. I wanted to create a battle mechanic inspired by the games, so I decided to give it a try. I enjoyed every part of the process while building it. This was my second project in my journey of learning React!",
    videoSrc:
      "../../../video/projects/turn_based_pokemon_game.mp4",
  },
  {
    title: "Task Management Project",
    languages: `<i style="color: red" class="fa-brands fa-html5"></i
              > <i style="color: blue" class="fa-brands fa-css3-alt"></i
              > <i style="color: yellow" class="fa-brands fa-js"></i
              > <i style="color: #563d7c" class="fa-brands fa-bootstrap"></i
              > <i style="color: #777bb3" class="fa-brands fa-php"></i
              > <i style="color: #f29111" class="fa-solid fa-database"></i
              >`,
    story:
      "This was my first PHP project, and working on it made me realize just how comfortable I’d become with JavaScript. I also found that I really enjoy using PHP. Even though this was my first experience with it, I quickly got the hang of PHP. I took on this project to learn PHP and to work with Bootstrap, so I barely used any custom CSS.",
    videoSrc:
      "../../../video/projects/taskmanager.mp4",
  },
  {
    title: "25 + 5 Clock",
    languages: `<i style="color: red" class="fa-brands fa-html5"></i
              > <i style="color: blue" class="fa-brands fa-css3-alt"></i
              > <i style="color: yellow" class="fa-brands fa-js"></i
              > <i style="color: #563d7c" class="fa-brands fa-bootstrap"></i
              > <i style="color: lightblue" class="fa-brands fa-react"></i
              >`,
    story:
      "This project is part of the FreeCodeCamp Frontend Libraries course certification. I wanted to showcase it because I love how challenging it was. I remember that even when all the functions seemed to work like the example website, the tests still wouldn’t pass. It was incredibly frustrating, but I’m really glad I pushed through and completed it!",
    videoSrc:
      "../../../video/projects/25 + 5Clock.mp4",
  },
];

function projectContentDisplay(index) {
  projectDisplay.innerHTML = `  <div class="vid-display">
            <span class="frame"></span><span class="frame"></span
              ><span class="frame"></span><span class="frame"></span>
              <video
              src="${projectArr[index].videoSrc}"
              loop
              autoplay
              muted
            >
            
            </video>
            <div class="load">
            <div class="loader"></div>
            </div>
          </div>
          <div class="detail-display">
            <h2>${projectArr[index].title}</h2>
            <p style="font-size: 2.5rem;">${projectArr[index].languages}</p>
            <p>
              ${projectArr[index].story}
            </p>
          </div>`;

          const vid = document.querySelector(".vid-display>video");
          vid.addEventListener('loadeddata', () => {
            document.querySelector(".load").style.display = "none";
          });
}

buttons.forEach((b, index) => {
  if (index !== 0) {
    b.classList.add("unclick");
  } else {
    b.classList.add("clicked");
  }

  if (b.classList.contains("clicked")) {
    projectContentDisplay(index);
  }

  b.addEventListener("click", () => {
    if (!clickCheck) {
      b.classList.remove("unclick");
      b.classList.add("clicked");
      clickCheck = true;
    } else {
      b.classList.remove("clicked");
      b.classList.add("unclick");
      clickCheck = false;
    }

    if (b.classList.contains("clicked")) {
        projectContentDisplay(index);
      }

    buttons.forEach((btn, i) => {
      if (i !== index) {
        btn.classList.remove("clicked");
        btn.classList.add("unclick");
      }

      btn.addEventListener("click", () => {

        if (!clickCheck) {
          btn.classList.remove("unclick");
          btn.classList.add("clicked");
        }
        clickCheck = false;

        if (btn.classList.contains("clicked")) {
            projectContentDisplay(i);
            
          }
      });
    });
  });
});
