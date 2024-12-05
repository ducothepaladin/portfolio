window.addEventListener("keydown", (event) => {
  playerMovement(event.key);

  document.addEventListener("keyup", (event) => {
    if (event.key === "a" || event.key === "ArrowLeft") {
      player.velocity.x = 0;
      player.idle("IdleLeft");
    } else if (event.key === "d" || event.key === "ArrowRight") {
      player.velocity.x = 0;
      player.idle("Idle");
    }
  });
});


const jumpBtn = document.querySelector(".jump-btn");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

jumpBtn.addEventListener('click', () => {
  playerMovement("w");
});
jumpBtn.addEventListener('touchstart', () => {
  playerMovement("w");
});

leftBtn.addEventListener('mousedown', () => {
  playerMovement("a");
});
leftBtn.addEventListener('touchstart', () => {
  playerMovement("a");
});
rightBtn.addEventListener('mousedown', () => {
  playerMovement("d");
});
rightBtn.addEventListener('touchstart', () => {
  playerMovement("d");
});



const stopLeftMovement = () => {
  player.velocity.x = 0;
  player.idle("IdleLeft");
};


leftBtn.addEventListener('mouseup', stopLeftMovement);
leftBtn.addEventListener('touchend', stopLeftMovement);
rightBtn.addEventListener('mouseup', stopLeftMovement);
rightBtn.addEventListener('touchend', stopLeftMovement);



