const getPos = localStorage.getItem("position");
const currentPos = JSON.parse(getPos);

let valueX;
let valueY;

if(currentPos) {
   valueX = currentPos.x;
   valueY = currentPos.y;
} else {
   valueX = setWidthPercent(80);
   valueY = setHeightPercent(10);
}

const player = {
  position: { x: valueX, y: valueY },
  velocity: { x: 0, y: 0 },
  gravity: 1,
  playerW: 50,
  playerH: 90,
  frame: 1,
  display: "Idle",
  eFrame: 0,
  bFrame: 10,
  frameL: 4,
  leftCheck: false,
  doorEnterCheck: false,
  update: function () {
    this.position.x += this.velocity.x;
    this.checkLeftAndRightCollisions();
    this.applyGravity();
    this.checkVerticalCollisions();
    this.horizontalMovement();
    this.verticalMovement();
    this.doorOpenHandle();
    textBox.followText(this.position.x, this.position.y);
    this.doorInfoText();
    spritePlayer.draw(this.display, this.frame);
    window.scrollTo(this.position.x - 500, this.position.y - 500, "smooth");
  },
  checkLeftAndRightCollisions: function () {
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const block = this.collisionBlocks[i];

      if (
        this.position.x <= block.position.x + block.width &&
        this.position.x + this.playerW >= block.position.x &&
        this.position.y <= block.position.y + block.height &&
        this.position.y + this.playerH >= block.position.y
      ) {
        if (this.velocity.x < -1) {
          this.position.x = block.position.x + block.width + 0.01;
          break;
        }
        if (this.velocity.x > 1) {
          this.position.x = block.position.x - this.playerW - 0.01;
          break;
        }
      }
    }
  },
  checkVerticalCollisions: function () {
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const block = this.collisionBlocks[i];

      if (
        this.position.x <= block.position.x + block.width &&
        this.position.x + this.playerW >= block.position.x &&
        this.position.y <= block.position.y + block.height &&
        this.position.y + this.playerH >= block.position.y
      ) {
        if (this.velocity.y < 0) {
          this.velocity.y = 0;
          this.position.y = block.position.y + block.height + 0.01;
          break;
        }
        if (this.velocity.y > 0) {
          this.velocity.y = 0;
          this.position.y = block.position.y - this.playerH - 0.01;
          break;
        }
      }
    }
  },
  applyGravity: function () {
    this.velocity.y += this.gravity;
    this.position.y += this.velocity.y;
  },
  updateFrame: function (frameL) {
    this.eFrame++;

    if (this.eFrame % this.bFrame === 0) {
      this.frame++;
      if (this.frame > frameL) {
        this.frame = 1;
        this.eFrame = 0;
      }
    }
  },
  jump: function () {
    this.display = "Jump";
    this.bFrame = 4;
    this.updateFrame(spritePlayer.pJump.length);
  },
  idle: function (check) {
    this.display = check;
    this.bFrame = 10;
    this.updateFrame(spritePlayer.pIdle.length);
  },
  fall: function (check) {
    this.display = check;
    this.bFrame = 8;
    this.updateFrame(spritePlayer.pFall.length);
  },
  run: function (check) {
    this.display = check;
    this.bFrame = 6;
    this.updateFrame(spritePlayer.pRun.length);
  },
  horizontalMovement: function () {
    if (this.velocity.x < 0) {
      this.leftCheck = true;
      this.run("Run_Left");
    } else if (this.velocity.x > 0) {
      this.leftCheck = false;
      this.run("Run");
    } else {
      this.leftCheck ? this.idle("IdleLeft") : this.idle("Idle");
    }
  },
  verticalMovement: function () {
    if (this.velocity.y < 0) {
      this.jump();
    } else if (this.velocity.y > 0) {
      this.leftCheck ? this.fall("FallLeft") : this.fall("Fall");
    }
  },
  doorOpenHandle: function () {
    // console.log("p po - " + Math.floor(this.position.x) + " & " + Math.floor(this.position.y) + "\n" + "door po - " + (spriteDoorAboutMe.position.x + 250) + " & " + (spriteDoorAboutMe.position.y + 53) + "\n" + "door open" + spriteDoorAboutMe.open )

    this.doorOpenPositionCheckPoint(
      spriteDoorAboutMe.position.x + 250,
      spriteDoorAboutMe.position.y + 53,
      spriteDoorAboutMe,
      true
    );
    this.doorOpenPositionCheckPoint(
      spriteDoorSkills.position.x - 150,
      spriteDoorSkills.position.y + 52,
      spriteDoorSkills,
      false
    );
    this.doorOpenPositionCheckPoint(
      spriteDoorProjects.position.x + 200,
      spriteDoorProjects.position.y + 51,
      spriteDoorProjects,
      true
    );
    this.doorOpenPositionCheckPoint(
      spriteDoorContactMe.position.x + 240,
      spriteDoorContactMe.position.y + 49,
      spriteDoorContactMe,
      true
    );
    this.doorOpenPositionCheckPoint(
      spriteDoorCetificate.position.x - 150,
      spriteDoorCetificate.position.y + 49,
      spriteDoorCetificate,
      false
    );
  },
  doorOpenPositionCheckPoint: function (x, y, door, check) {
    if (check) {
      if (
        this.position.x < x &&
        Math.floor(this.position.y) <= y &&
        Math.floor(this.position.y + 200) > y
      ) {
        door.open = true;
      } else {
        door.open = false;
      }
    } else {
      if (
        this.position.x > x &&
        Math.floor(this.position.y) <= y &&
        Math.floor(this.position.y + 200) > y
      ) {
        door.open = true;
      } else {
        door.open = false;
      }
    }
  },
  doorInfoText: function () {
    if (
      spriteDoorAboutMe.open ||
      spriteDoorCetificate.open ||
      spriteDoorProjects.open ||
      spriteDoorSkills.open ||
      spriteDoorContactMe.open
    ) {
      textBox.textRef.style.display = "block";
    } else {
      if (textBox.initialCheck) {
        textBox.textRef.style.opacity = 1;
        textBox.textRef.style.display = "block";
      } else {
        textBox.textRef.style.opacity = 0;
        textBox.textRef.style.display = "none"; 
      }
    }

    if (spriteDoorAboutMe.open) {
      textBox.innerText =
        "Check out this awesome guy in this room go ahead, take a look!";
      textBox.keyNav =
        "Click \"<span style='color: red;font-size: 1.2rem;'>E</span>\" to Enter...";
      textBox.textx = 60;
      textBox.texty = 130;
      textBox.textRef.style.opacity = 1;
      textBox.initialCheck = false;
      window.addEventListener("keydown", (e) => {
        this.locationFunction(e.key, 0, spriteDoorAboutMe);
      });
      document.querySelector(".enter-btn").addEventListener('click', () => {
        this.locationFunction("e", 0, spriteDoorAboutMe);
      });
    }
    if (spriteDoorSkills.open) {
      textBox.innerText =
        "This guy’s a fast learner and would be a perfect fit for your team. Don’t believe me? Just take a peek in that room!";
      textBox.keyNav =
        "Click \"<span style='color: red;font-size: 1.2rem;'>E</span>\" to Enter...";
      textBox.textx = -460;
      textBox.texty = 150;
      textBox.textRef.style.opacity = 1;
      window.addEventListener("keydown", (e) => {
        this.locationFunction(e.key, 1, spriteDoorSkills);
      });
      document.querySelector(".enter-btn").addEventListener('click', () => {
        this.locationFunction("e", 1, spriteDoorSkills);
      });
    }
    if (spriteDoorProjects.open) {
      textBox.innerText =
        "He’s grown with every project, and there’s some great work to show for it. Have a look, you won’t be disappointed!";
      textBox.keyNav =
        "Click \"<span style='color: red;font-size: 1.2rem;'>E</span>\" to Enter...";
      textBox.textx = 90;
      textBox.texty = 190;
      textBox.textRef.style.opacity = 1;
      window.addEventListener("keydown", (e) => {
        this.locationFunction(e.key, 2, spriteDoorProjects);
      });
      document.querySelector(".enter-btn").addEventListener('click', () => {
        this.locationFunction("e", 2, spriteDoorProjects);
      });
    }
    if (spriteDoorContactMe.open) {
      textBox.innerText =
        "Wow, you made it all the way here! So… thinking of hiring him? Go on, give him a chance, he’s earned it!";
      textBox.keyNav =
        "Click \"<span style='color: red;font-size: 1.2rem;'>E</span>\" to Enter...";
      textBox.textx = 60;
      textBox.texty = 140;
      textBox.textRef.style.opacity = 1;
      window.addEventListener("keydown", (e) => {
        this.locationFunction(e.key, 4, spriteDoorContactMe);
      });
      document.querySelector(".enter-btn").addEventListener('click', () => {
        this.locationFunction("e", 4, spriteDoorContactMe);
      });
    }
    if (spriteDoorCetificate.open) {
      textBox.innerText =
        "Here are his certificates! Feel free to check them out if you’re interested!";
      textBox.keyNav =
        "Click \"<span style='color: red;font-size: 1.2rem;'>E</span>\" to Enter...";
      textBox.textx = -460;
      textBox.texty = 140;
      textBox.textRef.style.opacity = 1;
      window.addEventListener("keydown", (e) => {
        this.locationFunction(e.key, 3, spriteDoorCetificate);
      });
      document.querySelector(".enter-btn").addEventListener('click', () => {
        this.locationFunction("e", 3, spriteDoorCetificate);
      });
    }
  },
  locationFunction: function (e, index, door) {
    if(door.open) {
      if (e === "e") {
        this.doorEnterCheck = true;
        setTimeout(() => {
          window.location.href = locationArr[index];
        },300);
        if(door.position.x < this.position.x) {
          this.velocity.x = -7;
        } else {
          this.velocity.x = +7;
        }
        document.querySelector("canvas").style.opacity = 0;
        const currentPosition = { x: this.position.x, y: this.position.y };
        localStorage.setItem("position", JSON.stringify(currentPosition));
      }
    }
  },
};

player.sides = { bottom: player.position.y + player.playerH };
player.collisionBlocks = mainPageCollisionBlockArr;

const playerMovement = (key) => {
  switch (key) {
    case "w":
      if (player.velocity.y == 0) {
        player.velocity.y = -18;
      }
      break;
    case "ArrowUp":
      if (player.velocity.y == 0) {
        player.velocity.y = -18;
      }
      break;
    case "a":
      player.velocity.x = -7;
      textBox.initialCheck = false;
      localStorage.setItem("position", JSON.stringify({ x: setWidthPercent(80), y: setHeightPercent(10) }));
      player.doorEnterCheck = false;
      break;
    case "ArrowLeft":
      player.velocity.x = -7;
      textBox.initialCheck = false;
      localStorage.setItem("position", JSON.stringify({ x: setWidthPercent(80), y: setHeightPercent(10) }));
      player.doorEnterCheck = false;
      break;
    case "d":
      player.velocity.x = 7;
      textBox.initialCheck = false;
      localStorage.setItem("position", JSON.stringify({ x: setWidthPercent(80), y: setHeightPercent(10) }));
      player.doorEnterCheck = false;
      break;
    case "ArrowRight":
      player.velocity.x = 7;
      textBox.initialCheck = false;
      localStorage.setItem("position", JSON.stringify({ x: setWidthPercent(80), y: setHeightPercent(10) }));
      player.doorEnterCheck = false;
      break;
  }
};
