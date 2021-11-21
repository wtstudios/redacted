let logo, survivr1, menurect, battleicon, roboto, menugun, backgimg;
function preload() {
  logo = loadImage('Survivlogo.png');
  survivr1 = loadImage('https://surviv.io/img/gui/loadout-player-icon.svg');
  menurect = loadImage('rect.png');
  battleicon = loadImage('https://surviv.io/img/gui/emote.svg');
  roboto = loadFont('RobotoCondensed-Bold.ttf');
  menugun = loadImage('project.png');
  backgimg = loadImage('https://surviv.io/img/main_splash.jpg');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  noStroke();
  background(0);
  imageMode(CENTER);
  image(backgimg, width / 2, height / 2, width * 1.6, width / 1);
  image(logo, width / 2, height / 5, width / 3, width / 12);
  image(menurect, width / 2, height / 1.4, width / 1.5, height / 1.5);
  image(battleicon, width / 3.2, height / 1.6, (height + width) / 20, (height + width) / 20);
  image(menugun, width / 2, height / 1.6, (height + width) / 20, (height + width) / 20);
  image(survivr1, width / 1.5, height / 1.6, (height + width) / 20, (height + width) / 20);
  textFont(roboto);
  textSize(height / 10);
  textAlign(CENTER);
  fill(255);
  text('5v5', width / 2, height / 2.6);
  rectMode(CENTER);
  fill(131, 150, 80);
  rect(width / 3.2, height / 1.32 + 3, width / 9, width / 25, 5);
  fill(131, 175, 80);
  rect(width / 3.2, height / 1.32, width / 9, width / 25, 5);
  fill(131, 150, 80);
  rect(width / 2, height / 1.32 + 3, width / 9, width / 25, 5);
  fill(131, 175, 80);
  rect(width / 2, height / 1.32, width / 9, width / 25, 5);
  fill(131, 150, 80);
  rect(width / 1.5, height / 1.32 + 3, width / 9, width / 25, 5);
  fill(131, 175, 80);
  rect(width / 1.5, height / 1.32, width / 9, width / 25, 5);
  textSize(width / 40);
  fill(255);
  text('Battle', width / 3.2, height / 1.3);
  text('Weapons', width / 2, height / 1.3);
  text('Loadout', width / 1.5, height / 1.3);
  width = windowWidth;
  height = windowHeight;
  cursor('default');
  if(mouseX >= width / 3.2 - (width / 8 / 2) && mouseX <= width / 3.2 + (width / 8 / 2) && mouseY >= height / 1.33 - (width / 17 / 2) && mouseY <= height / 1.33 + width / 17 / 2) {
    cursor('not-allowed');
  }
  if(mouseX >= width / 2 - (width / 6 / 2) && mouseX <= width / 2 + (width / 6 / 2) && mouseY >= height / 1.33 - (width / 17 / 2) && mouseY <= height / 1.33 + width / 17 / 2) {
    cursor('not-allowed');
  }
  if(mouseX >= width / 1.5 - (width / 7 / 2) && mouseX <= width / 1.5 + (width / 7 / 2) && mouseY >= height / 1.33 - (width / 17 / 2) && mouseY <= height / 1.33 + width / 17 / 2) {
    cursor('not-allowed');
  }
}
