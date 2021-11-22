let status, logo, survivr1, menurect, battleicon, roboto,jura, menugun, backgimg, bush1, bush2, bush3, tree1, tree2, tree3, acacia, stone, barrel, table1, table2, table3, mp5loot, mp5world, m1a1loot, m1a1world;
function preload() {
  logo = loadImage('Survivlogo.png');
  survivr1 = loadImage('https://surviv.io/img/gui/loadout-player-icon.svg');
  menurect = loadImage('rect.png');
  battleicon = loadImage('https://surviv.io/img/gui/emote.svg');
  roboto = loadFont('RobotoCondensed-Bold.ttf');
  jura = loadFont('Jura-Bold.ttf');
  menugun = loadImage('loot-perk-firepower.png');
  backgimg = loadImage('https://surviv.io/img/main_splash.jpg');
  bush1 = loadImage('https://static.wikia.nocookie.net/survivio/images/6/69/Map-bush-01.png/revision/latest/scale-to-width-down/600?cb=20180622141749');
  bush2 = loadImage('https://static.wikia.nocookie.net/survivio/images/c/c6/Map-bush-07-0.png/revision/latest/scale-to-width-down/180?cb=20181203124424');
  bush3 = loadImage('https://static.wikia.nocookie.net/survivio/images/4/49/Map-bush-01sv.png/revision/latest/scale-to-width-down/700?cb=20190912121630');
  acacia = loadImage('https://static.wikia.nocookie.net/survivio/images/0/0e/Obstacle-tree-12.png/revision/latest/scale-to-width-down/700?cb=20190901100319');
  tree1 = loadImage('https://static.wikia.nocookie.net/survivio/images/2/25/Obstacle-tree-01.png/revision/latest/scale-to-width-down/700?cb=20191002105944');
  tree2 = loadImage('https://static.wikia.nocookie.net/survivio/images/1/18/Obstacle-tree-03sv.png/revision/latest/scale-to-width-down/699?cb=20200220085833');
  tree3 = loadImage('https://static.wikia.nocookie.net/survivio/images/1/11/Woods_Red_Tree.png/revision/latest/scale-to-width-down/700?cb=20201219170606');
  stone = loadImage('https://static.wikia.nocookie.net/survivio/images/c/c1/Map-stone-01.png/revision/latest/scale-to-width-down/700?cb=20180327172808');
  barrel = loadImage('https://static.wikia.nocookie.net/survivio/images/3/39/Map-barrel-01.png/revision/latest/scale-to-width-down/700?cb=20180327172838');
  mp5loot = loadImage('https://static.wikia.nocookie.net/survivio/images/3/3f/Loot-weapon-mp5.png/revision/latest/scale-to-width-down/700?cb=20180128214558');
  mp5world = loadImage('https://static.wikia.nocookie.net/survivio/images/f/f1/Gun-med-01.img.png/revision/latest/scale-to-width-down/32?cb=20190830235718');
  m1a1loot = loadImage('https://static.wikia.nocookie.net/survivio/images/4/42/Loot-weapon-m1a1.png/revision/latest/scale-to-width-down/700?cb=20181110003201');
  m1a1world = loadImage('https://static.wikia.nocookie.net/survivio/images/f/f1/Gun-med-01.img.png/revision/latest/scale-to-width-down/32?cb=20190830235718');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  status = 'menu1';
}

function draw() {
  cursor('default');
  noStroke();
  background(0);
  imageMode(CENTER);
  image(backgimg, width / 2, height / 2, width * 1.6, width / 1);
  image(logo, width / 2, height / 5, width / 3, width / 12);
  image(menurect, width / 1.95, height / 1.4, width / 1.5, height / 1.5);
  image(battleicon, width / 3.2, height / 1.6, (height + width) / 20, (height + width) / 20);
  image(menugun, width / 2, height / 1.6, (height + width) / 20, (height + width) / 20);
  image(survivr1, width / 1.5, height / 1.6, (height + width) / 20, (height + width) / 20);
  textSize(height / 14);
  textAlign(CENTER);
  fill(255);
  textFont(jura);
  text('5v5', width / 2, height / 3);
  textFont(roboto);
  rectMode(CENTER);
  fill(131, 150, 80);
  rect(width / 3.2, height / 1.32 + 3, width / 9, width / 25, 5);
  fill(131, 175, 80);
  if(mouseX >= width / 3.2 - width / 18 && mouseX <= width / 3.2 + width / 18 && mouseY >= height / 1.32 - width / 50 && mouseY <= height / 1.32 + width / 50) {
    cursor('not-allowed');
    fill(131, 150, 80);
  }
  rect(width / 3.2, height / 1.32, width / 9, width / 25, 5);
  fill(131, 150, 80);
  rect(width / 2, height / 1.32 + 3, width / 9, width / 25, 5);
  fill(131, 175, 80);
  if(mouseX >= width / 2 - width / 18 && mouseX <= width / 2 + width / 18 && mouseY >= height / 1.32 - width / 50 && mouseY <= height / 1.32 + width / 50) {
    cursor('not-allowed');
    fill(131, 150, 80);
  }
  rect(width / 2, height / 1.32, width / 9, width / 25, 5);
  fill(131, 150, 80);
  rect(width / 1.5, height / 1.32 + 3, width / 9, width / 25, 5);
  fill(131, 175, 80);
  if(mouseX >= width / 1.5 - width / 18 && mouseX <= width / 1.5 + width / 18 && mouseY >= height / 1.32 - width / 50 && mouseY <= height / 1.32 + width / 50) {
    cursor('not-allowed');
    fill(131, 150, 80);
  }
  rect(width / 1.5, height / 1.32, width / 9, width / 25, 5);
  textSize(width / 40);
  fill(255);
  text('Battle', width / 3.2, height / 1.3);
  text('Weapons', width / 2, height / 1.3);
  text('Loadout', width / 1.5, height / 1.3);
  width = windowWidth;
  height = windowHeight;
}
