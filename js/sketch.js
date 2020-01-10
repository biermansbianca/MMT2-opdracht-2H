var Biermans = 255;

function setup() {
  // put setup code here

  createCanvas(800,800);

  background(70,90,230);



  
}

function draw() {

 


  // antenne gebouw rechts
  strokeWeight(4);
  stroke(30,30,100);
  line(600, 100, 600, 200); 

  // rondje op antenne rechts
  fill(30,30,100);
  noStroke();
  ellipse(600,100,20,20);


// grond
fill(250,250,250,5);
noStroke();
rect(0,700,800,100);


  // bol op gebouw 1 links

  fill(0,30,100);
  strokeWeight(4);
  noStroke();
  ellipse(157,300,50,50); 

// onderste blok van gebouw 1 links
  fill(0,30,100);
  noStroke();
  rect(50,500,200,600);

// tweede blok van gebouw 1 links

  fill(0,30,100);
  noStroke();
  rect(80,400,145,300);

  // derde blok van gebouw 1 links

  fill(0,30,100);
  noStroke();

  rect(110,300,90,300);

  // ramen gebouw 1 rij links (van onder naar boven)

  fill(0,100,100);
  noStroke();
  rect(80,700,30,30);

  fill(0,100,100);
  noStroke();
  rect(80,650,30,30);

  fill(0,100,100);
  noStroke();
  rect(80,600,30,30);

  fill(0,100,100);
  noStroke();
  rect(80,550,30,30);

  //  ramen gebouw 1 rij midden

  fill(0,100,100);
  noStroke();
  rect(135,700,30,30);

  rect(135,650,30,30);

  rect(135,600,30,30);

  rect(135,550,30,30);

  
  // ramen gebouw 1 rij rechts

  fill(0,100,100);
  noStroke();
  rect(190,700,30,30);

  rect(190,650,30,30);

  rect(190,600,30,30);

  rect(190,550,30,30);
  
  // deur gebouw 1


  fill(0,100,100);
  noStroke();
  rect(120,760,60,40);

  fill(0,100,100);
  strokeWeight(4);
  noStroke();
  ellipse(150,765,60,50); 

  // maan 
  
  // schaduw maan
  fill(250,250,200,1);
  strokeWeight(4);
  noStroke();
  ellipse(100,100,120,120); 

// grote maan

  fill(250,250,200);
  strokeWeight(4);
  noStroke();
  ellipse(100,100,100,100); 

  // maan krater

  fill(50,50,20,100);
  strokeWeight(4);
  noStroke();
  ellipse(100,140,30,10); 

  fill(50,50,20,100);
  strokeWeight(4);
  noStroke();
  ellipse(60,100,10,30); 

  // wolkenkrabber rechts
 
  fill(30,30,100);
  noStroke();
  rect(500,200,250,600);

  // ramen gebouw rechts onder naar boven

  fill(30,90,100);
  noStroke();
  rect(525,700,200,30);

  rect(525,650,200,30);

  rect(525,600,200,30);

  rect(525,550,200,30);

  rect(525,500,200,30);

  rect(525,450,200,30);

  rect(525,400,200,30);

  rect(525,350,200,30);

  rect(525,300,200,30);

  // deur

  fill(30,90,100);
  noStroke();
  rect(600,760,30,40);

  // tekst

  fill(255);
  textSize(32);
  textFont("Big Caslon", 40);
  text("Biermans", 270, 300);  
  text("Bianca", 300, 250);

  



  
}