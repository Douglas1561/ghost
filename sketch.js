var grupop
var sonido;
var door;
var puerta
var ghost;
var fantasma;
var torre;
var fondo;
function preload(){
  fondo=loadImage("tower.png")
  ghost=loadAnimation("ghost-standing.png","ghost-jumping.png")
  puerta=loadImage("door.png")
  sonido=loadSound("spooky.wav")
}
 

function setup(){
  
createCanvas(600,600);
// Fondo en movimiento
//sonido.play()
torre=createSprite(300,300);
torre.addImage("eselfondo",fondo);
  torre.velocityY=6;
  
  fantasma=createSprite(300,300)
  fantasma.addAnimation("moverse",ghost)
  fantasma.scale=0.5
  fantasma.debug=true
  grupop=new Group()
}

function draw() {
  background(0);
  puertas();
  if (torre.y>600)
  torre.y=0;
  
  if (keyDown("LEFT_ARROW"))
  fantasma.x=fantasma.x-6
  
   if (keyDown("RIGHT_ARROW"))
  fantasma.x=fantasma.x+6
  if (grupop.isTouching(fantasma)){
    torre.velocityY=0;
    door.velocityY=0;
  }
  drawSprites();

  
}
function puertas(){
if (frameCount%30==0)  {
  door=createSprite(random(150,450),0)
  door.addImage("eselfondo",puerta);
  door.velocityY=6;
  grupop.add(door)
}
}