var Rec_A;
var Rec_B;





function setup() {
  createCanvas(800,400);
 Rec_A= createSprite(400, 200, 50, 50);
 Rec_B=createSprite(350,150,50,50);
 Rec_A.shapeColor="Maroon";
 Rec_B.shapeColor="Cyan";

 
}

function draw() {
  background("Black");  
  drawSprites();
  Rec_A.x=World.mouseX;
  Rec_A.y=World.mouseY; 
 if(Rec_A.x - Rec_B.x< Rec_B.width/2+Rec_A.width/2 || Rec_A.y - Rec_B.y<Rec_B.height/2+Rec_A.height/2){
   Rec_B.shapeColor="Yellow";

 }
else{
  Rec_B.shapeColor="cyan";


}
}