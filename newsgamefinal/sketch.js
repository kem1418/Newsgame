score=0;
var img;
peopleX=[];
peopleY=[];


function setup() {
  img=loadImage("usa2.jpg");

  createCanvas(500,500);
   for (var i=0;i<50;i++){
      peopleX[i]=int(random(width));
      peopleY[i]=int(random(height-100));
        
   }
  stroke(255);
}

function draw() {

 background(0);
  image(img, 20,50,img.width*.4, img.height*.5);
  fill(238,255,0);
  textSize(25);
  
   if (score == 50) {
    text("YOU SAVED AMERICA!", width/4, height/2);
  }
  else {
    text(score, width/2, height/2);
  }
   
  textSize(25);
  fill(255);
  text("Welcome to America!", 125,400);
  fill(200,0,0);
  rect(0,(height-125) + score,width,125)
  fill(random(190),random(255), random(255));
  for (var i=0;i<peopleX.length;i++){
     ellipse(peopleX[i],peopleY[i],5,5);
  }

  fill(0,0,255);
ellipse(mouseX,mouseY,20,20);
  for (var a=0;a<peopleX.length;a++){
   hit = collideRectCircle(mouseX,mouseY,20,20,peopleX[a],peopleY[a],5);
   if (hit){
      peopleX[a]=-2;
      peopleY[a]=-2;
      score++;
     
   }
  }

  fill(255,0,0);
  textSize(23);
  stroke(0);
  text("The United States Accepts Everyone", 75,30);
}



