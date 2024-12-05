const arr = document.querySelectorAll(".nav-container>li");

arr.forEach((e, index) => {
  e.addEventListener("click", () => {
    window.location.href = locationArr[index];
  });
});

const animate = () => {
  window.requestAnimationFrame(animate);
  spriteBackground.draw();
  mainPageCollisionBlockArr.forEach((block) => {
    block.draw();
  });
  rooms.draw();
  player.update();
};

window.addEventListener("load", () => {
  animate();
});
