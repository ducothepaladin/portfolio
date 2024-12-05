const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

canvas.width = 128 * 9;
canvas.height = 128 * 16;

const canvasW = canvas.width;
const canvasH = canvas.height;

ctx.font = "20px Nunito";

const locationArr = [
  "./about_me.html",
  "./skills.html",
  "./projects.html",
  "./certificates.html",
  "./contact.html",
];
