//inizializzazione vettore bolle
var allBubbles = [];

function preload() {
    // put preload code here
}

//impostazione di un array contenente i colori
var colorList = ['#005262', '#8ec7b7', '#bde5ac', '#d3d4d1', '#565656'];

//diametro delle bolle della texture
var diam = 25;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('RosyBrown');
    noStroke();
    for (var x = diam / 2; x < width; x += (diam + 2)) {
        for (var y = diam / 2; y < height; y += (diam + 2)) {
            var tempBubble = new Bubble(x, y, diam); //creazione della singola bolla
            allBubbles.push(tempBubble); //inserimento nell'array per memorizzarla
            tempBubble.display(); //visualizzzione della bolla
        }
    }
}

function draw() {
	//didascalia di spiegazione
	push();
    fill(255);
    strokeWeight(3);
    stroke(0);
    textSize(50);
    textStyle(BOLD);
    var t = 'clicca sulle bolle blu.';
	//centratura del testo
	textAlign(CENTER, CENTER);
	text(t, width / 4, height / 2, width / 2);
    pop();
}

function mouseClicked() {
    for (let i = 0; i < allBubbles.length; i++) {
		//verifica che il mouse sia dentro la bolla
		allBubbles[i].inside(mouseX, mouseY);
    }
}


function Bubble(_x, _y, _diameter) {
    //inner properties
    this.size = _diameter; //this object.customProperty
    this.x = _x;
    this.y = _y;
	//colore random scelto dalla palette definita sopra
    this.color = colorList[Math.round(random() * (colorList.length - 1))];

    this.display = function() {
        fill(this.color);
        ellipse(this.x, this.y, this.size);
    }

    this.inside = function(px, py) {
		//calcolo distanza centro della bolla - punto interessato
        let d = dist(px, py, this.x, this.y);
        if (d < this.size / 2 && this.color == colorList[0]) {
            //console.log('Barrio!');
			//sovrascrivi la bolla con il colore di sfondo
			fill('RosyBrown');
            ellipse(this.x, this.y, 25);
        }
    }
}
