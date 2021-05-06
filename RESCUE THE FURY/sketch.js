

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy,Hospital,Home;
var launchingForce=100;



function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
Home=new home();
Hospital=new hospital();
car=new Car(200,200);
cat1 =new Cat1 (400,150);
cat2 =new Cat2 (200,150);
cat3 =new Cat3 (90,350);
cat4 =new Cat4 (500,350);
cat5 =new Cat5 (800,350);
cat6 =new Cat6 (1000,350);
cat7 =new Cat6 (300,350);
	Engine.run(engine);

}

function draw() {

  background("red");
 Home.display();
 Hospital.display();
 car.display();
 cat1.display();
 cat2.display();
 cat3.display();
 cat4.display();
 cat5.display();
 cat6.display();
 cat7.display();
}

