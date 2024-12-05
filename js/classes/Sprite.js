//Below--- Manually added images... I will figure out sometime to make it auto without getting glitches

const idle = [
  "../../img/Idle/1.png",
  "../../img/Idle/2.png",
  "../../img/Idle/3.png",
  "../../img/Idle/4.png",
];
const idleLeft = [
  "../../img/IdleLeft/1.png",
  "../../img/IdleLeft/2.png",
  "../../img/IdleLeft/3.png",
  "../../img/IdleLeft/4.png",
];
const fall = [
  "../../img/fall/1.png",
  "../../img/fall/2.png",
  "../../img/fall/3.png",
  "../../img/fall/4.png",
];
const fallLeft = [
  "../../img/fallLeft/1.png",
  "../../img/fallLeft/2.png",
  "../../img/fallLeft/3.png",
  "../../img/fallLeft/4.png",
];
const run = [
  "../../img/Run/1.png",
  "../../img/Run/2.png",
  "../../img/Run/3.png",
  "../../img/Run/4.png",
  "../../img/Run/5.png",
  "../../img/Run/6.png",
  "../../img/Run/7.png",
  "../../img/Run/8.png",
];
const run_left = [
  "../../img/Run_Left/1.png",
  "../../img/Run_Left/2.png",
  "../../img/Run_Left/3.png",
  "../../img/Run_Left/4.png",
  "../../img/Run_Left/5.png",
  "../../img/Run_Left/6.png",
  "../../img/Run_Left/7.png",
  "../../img/Run_Left/8.png",
];
const jump = [
  "../../img/jump/1.png",
  "../../img/jump/2.png",
  "../../img/jump/3.png",
  "../../img/jump/4.png",
  "../../img/jump/5.png",
  "../../img/jump/6.png",
  "../../img/jump/7.png",
  "../../img/jump/8.png",
  "../../img/jump/9.png",
  "../../img/jump/10.png",
  "../../img/jump/11.png",
];
const door = [
  "../../img/2-Opening/0.png",
  "../../img/2-Opening/1.png",
  "../../img/2-Opening/2.png",
  "../../img/2-Opening/3.png",
  "../../img/2-Opening/4.png",
];

//Above--- Manually added images... I will figure out sometime to make it auto without getting glitches

function imagePreload(imgArr) {

  const loadedArr = [];

  imgArr.forEach((img) => {
    const loadedImg = new Image();
    loadedImg.src = img;

    loadedArr.push(loadedImg);
  })

  return loadedArr;
}

const loadedIdle = imagePreload(idle);
const loadedidleLeft = imagePreload(idleLeft);
const loadedFall = imagePreload(fall);
const loadedFallLeft = imagePreload(fallLeft);
const loadedRun = imagePreload(run);
const loadedRunLeft = imagePreload(run_left);
const loadedJump = imagePreload(jump);
const loadedDoor = imagePreload(door);


const spriteBackground = {
  position: { x: 0, y: 0 },
  image: new Image(),
  draw: function () {
    ctx.drawImage(this.image, this.position.x, this.position.y);
  },
};
spriteBackground.image.src = "../../img/portfolio.jpg";

const spritePlayer = {
  position: { x: player.position.x, y: player.position.y },
  image: null,
  imageSp: null,
  pIdle: loadedIdle,
  pIdleLeft: loadedidleLeft,
  pFall: loadedFall,
  pFallLeft: loadedFallLeft,
  pRun: loadedRun,
  pJump: loadedJump,
  pRunLeft: loadedRunLeft,
  draw: function (type, frame) {
    this.position.x = player.position.x;
    this.position.y = player.position.y;
    if (type && frame) {
      switch (type) {
        case "Idle":
          if (frame <= this.pIdle.length) {
            this.image = this.pIdle[frame - 1];
            this.imageSp = this.pIdle[0];
          }
          break;
        case "IdleLeft":
          if (frame <= this.pIdleLeft.length) {
            this.image = this.pIdleLeft[frame - 1];
            this.imageSp = this.pIdleLeft[0];
          }
          break;
        case "Fall":
          if (frame <= this.pFall.length) {
            this.image = this.pFall[frame - 1];
            this.imageSp = this.pFall[0];         
          }
          break;
        case "FallLeft":
          if (frame <= this.pFallLeft.length) {
            this.image = this.pFallLeft[frame - 1];
            this.imageSp = this.pFallLeft[0];
          }
          break;
        case "Run":
          if (frame <= this.pRun.length) {
            this.image = this.pRun[frame - 1];
            this.imageSp = this.pRun[0];
          }
          break;
        case "Run_Left":
          if (frame <= this.pRunLeft.length) {
            this.image = this.pRunLeft[frame - 1];
            this.imageSp = this.pRunLeft[0];
          }
          break;
        case "Jump":
          if (frame <= this.pJump.length) {
            this.image = this.pJump[frame - 1];
            this.imageSp = this.pJump[0];
          }
          break;
      }
    }
    if(this.image.complete) {
      ctx.drawImage(
        this.image,
        0,
        0,
        120,
        120,
        this.position.x - 76,
        this.position.y - 70,
        250,
        250
      );
    } else {
      ctx.drawImage(
        this.imageSp,
        0,
        0,
        120,
        120,
        this.position.x - 76,
        this.position.y - 70,
        250,
        250
      );
    }


  },
};

const spriteDoorAboutMe = {
  position: { x: setWidthPercent(94), y: setHeightPercent(25.7) },
  image: null,
  imageSp: null,
  doorOpening: loadedDoor,
  eFrame: 0,
  bFrame: 6,
  frame: 1,
  open: false,
  info: "About me",
  draw: function () {
    this.image = this.doorOpening[this.frame - 1];
    this.imageSp = this.doorOpening[2];
    if(this.image.complete) {
      ctx.drawImage(
        this.image,
        this.position.x,
        this.position.y,
        78 * 1.5,
        96 * 1.5
      );
    } else {
      ctx.drawImage(
        this.imageSp,
        this.position.x,
        this.position.y,
        78 * 1.5,
        96 * 1.5
      );
    }
    doorLabel.draw(this.info,this.position.x + 58,this.position.y - 30);

  },
  updateFrame: function () {
    this.eFrame++;
    if (this.eFrame % this.bFrame === 0) {
      if (this.open) {
        if (this.frame < 5) {
          this.frame++;
        }
      } else {
        if (this.frame > 1) {
          this.frame--;
        }
      }
    }
  },
};

const spriteDoorSkills = {
  ...spriteDoorAboutMe,
  info: "Skills",
  image: null,
  imageSp: null,
  doorOpening: loadedDoor,
  position: { x: setWidthPercent(26), y: setHeightPercent(38.2) },
};

const spriteDoorProjects = {
  ...spriteDoorAboutMe,
  info: "Projects",
  image: null,
  imageSp: null,
  doorOpening: loadedDoor,
  position: { x: setWidthPercent(87), y: setHeightPercent(47.5) },
};

const spriteDoorContactMe = {
  ...spriteDoorAboutMe,
  info: "Contact",
  image: null,
  imageSp: null,
  doorOpening: loadedDoor,
  position: { x: setWidthPercent(90), y: setHeightPercent(84.9) },
};

const spriteDoorCetificate = {
  ...spriteDoorAboutMe,
  info: "Certificates",
  image: null,
  imageSp: null,
  doorOpening: loadedDoor,
  position: { x: setWidthPercent(16), y: setHeightPercent(84.9) },
};

const openCheck = () => {
    spriteDoorAboutMe.updateFrame();
    spriteDoorSkills.updateFrame();
    spriteDoorProjects.updateFrame();
    spriteDoorContactMe.updateFrame();
    spriteDoorCetificate.updateFrame();
};

const drawDoors = () => {
  spriteDoorAboutMe.draw();
  spriteDoorSkills.draw();
  spriteDoorProjects.draw();
  spriteDoorContactMe.draw();
  spriteDoorCetificate.draw();
};

const rooms = {
  draw: function () {
    drawDoors();
    openCheck();
  },
};
