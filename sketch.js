
        

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


var particles = [];
var divisions = [];
var plinkos = [];
var s1 = [];
var s2 = [];
var s3 = [];
var s4 = [];
var divisionHeight = 300;
var p1;


//var rand = Math.round(randomNumber(1,10));


function setup() {
  createCanvas(800,700);
  
  
  engine =Engine.create();

  world = engine.world;
  ground = new Ground(width/2,height - 10,width,20)
  wall_l = new Ground(10,700,20,1400)
 wall_r = new Ground(790,700,20,1400)
  //p1 = new Plinko(100,100,20);
  for(a = 0; a <= width; a = a + 80){
    divisions.push(new Division(a,height,10,divisionHeight));
  }

  for(b = 40; b <= width; b = b + 70){
    s1.push(new Stopper(b,0 + 70,10));
  }

  for(d = 75; d <= width; d = d + 70){
    s2.push(new Stopper(d,0 + 140,10));
  }
  

  for(f = 40; f <= width; f = f + 70){
    s3.push(new Stopper(f,0 + 210,10));
  }
  

  for(h = 75; h <= width; h = h + 70){
    s4.push(new Stopper(h,0 + 280,10));
  }
  
  
 
}

function draw() {
  bgTime();
  
    
  Engine.update(engine);
 
  ground.display();
  wall_l.display();
  wall_r.display();
  //p1.display();

    
  if (frameCount%60 === 0){
    plinkos.push(new Plinko((random(100, 700)), 0, 10))
  }

  for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  
  
  for (var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }

  for (var c = 0; c < divisions.length; c++){
    s1[c].display();
  }

  for (var e = 0; e < divisions.length; e++){
    s2[e].display();
  }

  for (var g = 0; g < divisions.length; g++){
    s3[g].display();
  }

  for (var j = 0; j < divisions.length; j++){
    s4[j].display();
  }

}





  


  /*if (frameCount%10 === 0){
    plinkos.push(new Plinko(random(width/2 - 30, width/2 + 30), 10))
  }

  for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  } */
  async function bgTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/America/New_York")
    
    
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime
    var hour = datetime.slice(11,13);
    
    if (hour > 6 && hour<17){
        background(255)
        
    }
    else{
        background(0)
    }
    }
    