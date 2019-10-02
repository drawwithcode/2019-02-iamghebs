function preload(){
  // put preload code here
}

//impostazione di un array contenente i colori
var colorList = ['#005262', '#8ec7b7', '#bde5ac', '#d3d4d1', '#565656'];

var diam = 25;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  colorMode(hex);
  frameRate(9);
  background('RosyBrown');

/* TEXTURE STATICA

  for (var x = diam/2; x < width; x+=(diam+2)) {
    for(var y = diam/2; y < height; y+=(diam+2)){
      fill(color(colorList[Math.round(random()*(colorList.length-1))]));
      ellipse(x,y,diam);
    }
  }

*/

  // put setup code here
}

function draw() {

  for (var x = diam/2; x < width; x+=(diam+2)) {
    for(var y = diam/2; y < height; y+=(diam+2)){
      fill(color(colorList[Math.round(random()*(colorList.length-1))]));
      ellipse(x,y,diam);
    }
  }
  // put drawing code here
}
