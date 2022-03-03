const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine
var world

var obs1,obs2,obs3,obs4,obs5,obs6,obs7,obs8,obs8,obs9,obs10,obs11,obs12,obs13,obs14,obs15,obs16,obs17,obs18,obs19,obs20;

var ground

var base1,base2

var balls = []
var cannon,cannonBall,angle;

var wall

function setup() {
  createCanvas(1400,600);
  angleMode(DEGREES)
  angle = 0
  engine = Engine.create();
  world = engine.world;
  
 var base_options={
  isStatic: true
  
 }

 
  cannon = new Cannon(200,530,200,100,angle)
  ground = new Ground(0,580,1400, 10)
  base1 = new Ground(1200, 500, 400, 10)
  base2 = new Ground(900,200,350,10)
  wall = new Ground(2,1,10,1600)

  obs1 = new Box(1200,480,10,10)
  obs2 = new Box()
  obs3 = new Box()
  obs4 = new Box()
  obs5 = new Box()
  obs6 = new Box()
  obs7 = new Box()
  obs8 = new Box()
  obs9 = new Box()
  obs10 = new Box()
  obs11 = new Box()
  obs12 = new Box()
  obs13 = new Box()
  obs14 = new Box()
  obs15 = new Box()
  obs16 = new Box()
  obs17 = new Box()
  obs18 = new Box()
  obs19 = new Box()
  obs20 = new Box()


}


function draw() 
{
  background(27,27,27);
  Engine.update(engine) 
obs1.show()
  wall.show()
  ground.show()
  base2.show()
 base1.show()

  for(var i = 0; i<balls.length; i++)
  {
    showCannonBalls(balls[i])
  }
  
  cannon.display()
  
}

function keyPressed()
{
  if (keyCode === DOWN_ARROW) {
    cannonBall = new CannonBall(cannon.x, cannon.y);
    Matter.Body.setAngle(cannonBall.body, cannon.angle)
    balls.push(cannonBall)
   }
}

function keyReleased() {
  if (keyCode === DOWN_ARROW) 
  {

  
    balls[balls.length-1].shoot();
  }
}

function showCannonBalls(ball, i)
{
   if(ball)
   {
    ball.display()
    ball.debug = true
   }
   
   }

  