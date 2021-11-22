let status, logo, survivr1, menurect, battleicon, roboto,jura, menugun, backgimg, bush1, bush2, bush3, tree1, tree2, tree3, acacia, stone, barrel, table1, table2, table3, visorred, visorblue, helmet, forestcamobase, snowcamobase, urbancamobase, desertcamo, mp5loot, mp5world, m1a1loot, m1a1world, auth;
function preload() {
  logo = loadImage('surviv_logo_full.png');
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
  visorred = loadImage('https://static.wikia.nocookie.net/survivio/images/9/92/Player-visor-demo.img.png/revision/latest/scale-to-width-down/176?cb=20191201230453');
  visorblue = loadImage('https://static.wikia.nocookie.net/survivio/images/7/70/Player-visor-sniper.img.png/revision/latest/scale-to-width-down/176?cb=20191201230455');
  mp5loot = loadImage('https://static.wikia.nocookie.net/survivio/images/3/3f/Loot-weapon-mp5.png/revision/latest/scale-to-width-down/700?cb=20180128214558');
  mp5world = loadImage('https://static.wikia.nocookie.net/survivio/images/f/f1/Gun-med-01.img.png/revision/latest/scale-to-width-down/32?cb=20190830235718');
  m1a1loot = loadImage('https://static.wikia.nocookie.net/survivio/images/4/42/Loot-weapon-m1a1.png/revision/latest/scale-to-width-down/700?cb=20181110003201');
  m1a1world = loadImage('https://static.wikia.nocookie.net/survivio/images/f/f1/Gun-med-01.img.png/revision/latest/scale-to-width-down/32?cb=20190830235718');
  forestcamobase = loadImage('https://static.wikia.nocookie.net/survivio/images/2/27/Player-base-outfitMilitary.png/revision/latest/scale-to-width-down/141?cb=20200705015400');
  snowcamobase = loadImage('https://static.wikia.nocookie.net/survivio/images/1/10/Player-base-outfitSpetsnaz.png/revision/latest/scale-to-width-down/140?cb=20200705015519');
  urbancamobase = loadImage('https://static.wikia.nocookie.net/survivio/images/9/9b/Player-base-outfitUrbanCamo.png/revision/latest/scale-to-width-down/141?cb=20200705020024');
  desertcamobase = loadImage('https://static.wikia.nocookie.net/survivio/images/5/5a/Player-base-outfitWheat.png/revision/latest/scale-to-width-down/140?cb=20200705020032');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  status = 'menu1';
}
var button = function(x, y, w, h, t, s, a) {
  textAlign(CENTER);
  fill(131, 140, 80);
  rect(x, y + 3, w, h, 5);
  fill(131, 175, 80);
  if(mouseX >= x - w / 2 && mouseX <= x + w / 2 && mouseY >= y - h / 2 && mouseY <= y + h / 2) {
    if(a === false) {
      cursor('not-allowed');
    }
    if(a === true) {
      cursor('pointer');
    }
    fill(131, 140, 80);
    }
    rect(x, y, w, h, 5);
    textFont(roboto);
    textSize(width / 40);
    fill(255);
    text(t, x, y + h / 4);
    if(mouseIsPressed && mouseX >= x && mouseX <= x + w && mouseY >= y && mouseY <= y + h && a === true) {
      status = s;
    }
}
function draw() {
  background(0);
  noStroke();
  imageMode(CENTER);
  image(backgimg, width / 2, height / 2, width * 1.6, width / 1);
  cursor('default');
  if(status === 'menu1') {
    image(logo, width / 2, height / 5, width / 3, width / 7);
    image(menurect, width / 1.95, height / 1.4, width / 1.5, height / 1.5);
    image(battleicon, width / 3.2, height / 1.6, (height + width) / 20, (height + width) / 20);
    image(menugun, width / 2, height / 1.6, (height + width) / 20, (height + width) / 20);
    image(survivr1, width / 1.5, height / 1.6, (height + width) / 20, (height + width) / 20);
    textAlign(CENTER);
    textFont(roboto);
    rectMode(CENTER);
    button(width / 3.2, height / 1.32, width / 9, width / 25, "Battle", 'gameoptions', false);
    button(width / 2, height / 1.32, width / 9, width / 25, "Weapons", 'weaponmenu1', false);
    button(width / 1.5, height / 1.32, width / 9, width / 25, "Loadout", 'loadoutmenu', true);
  }
  width = windowWidth;
  height = windowHeight;
}
