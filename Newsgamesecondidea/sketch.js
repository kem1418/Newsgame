peopleX=[];
peopleY=[];
score=0;
var img;

function setup() {
  img=loadImage("usa2.jpg");

  createCanvas(500,500);
   for (var i=0;i<70;i++){
      peopleX[i]=int(random(width));
      peopleY[i]=int(random(height-100));
        
   }
  stroke(255);
}

function draw() {

 background(0);
  image(img, 20,50,img.width*.4, img.height*.5);
  textSize(18);
  fill(255);
  text("In this country we accept everyone!", 100,400);
  fill(200,0,0);
  rect(0,(height-125) + score,width,125)
  fill(random(190),random(255), random(255));
  for (var i=0;i<peopleX.length;i++){
     ellipse(peopleX[i],peopleY[i],5,5);
  }

  fill(100,10,200);
ellipse(mouseX,mouseY,20,20);
  for (var j=0;j<peopleX.length;j++){
   hit = collideRectCircle(mouseX,mouseY,20,20,peopleX[j],peopleY[j],2);
   if (hit){
      peopleX[j]=-5;
      peopleY[j]=-5;
      score++;
     
   }

  }

  fill(random(255),0, random(255));
  textSize(28);
  stroke(0);
  text("Welcome to America!", 100,30);
}



