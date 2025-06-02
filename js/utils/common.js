Array.prototype.parse2D = function () {
  const rows = [];
  for (let i = 0; i < this.length; i += 18) {
    rows.push(this.slice(i, i + 18));
  }
  return rows;
};

Array.prototype.createObjects = function () {
  const objects = [];
  this.forEach((row, y1) => {
    row.forEach((block, x1) => {
      if (block == 7) {
        objects.push({
          ...mainPageCollisionBlock,
          position: { x: x1 * 64, y: y1 * 64 },
        });
      } else if (block == 4) {
        objects.push({
          ...mainPageCollisionBlock,
          position: { x: x1 * 64, y: y1 * 64 },
          height: 16,
        });
      }
    });
  });
 
  return objects;
};

// I tried to make the auto input img to my arr. but it got glitched so I added imgs manually.
function createImgArr(type, imgCount) {
  const arr = [];
  for (let i = 1; i <= imgCount; i++) {
    arr.push(`../../img/${type}/${i}.png`);
  }
  return arr;
}


function setHeightPercent(check) {
  const height = canvasH - (canvasH * (check / 100));
  return height;
}

function setWidthPercent(check) {
  const width = canvasW - (canvasW * (check / 100));
  return width;
}
