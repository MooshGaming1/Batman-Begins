const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world
var drops = []
var maxDrops= 100
var umbrella
var rand
var night
var Lightning, lightning1, lightning2, lightning3, lightning4
var lightningCreatedFrame=0

function preload(){
    night= loadImage(images/"")
    lightning1= loadImage(images/"")
    lightning2= loadImage(images/"")
    lightning3= loadImage(images/"")
    lightning4= loadImage(images/"")
}

function setup(){
   var canvas=createCanvas(500,700)

   engine = Engine.create()
   world = engine.world

   umbrella=new Umbrella(200,500)

   for(var i=0; i<maxDrops; i++){
       drops.push(new createDrops(random(0,500), random(0,500)))
   }
}

function draw(){
    Engine.update(engine)
    background(night)

    rand = Math.round(random(1,4))
    if(frameCount%80===0){
        lightningCreatedFrame=frameCount
        Thunder=createSprite(random(10,370), random(10,30), 10, 10)
        switch(rand){
            case 1: Lightning.addImage(lightning1)
            break;  
            case 2: Lightning.addImage(lightning2)
            break;  
            case 3: Lightning.addImage(lightning3)
            break;  
            case 4: Lightning.addImage(lightning4)
            break;  
            default: break
        }
        Lightning.scale=0.7
    }

    if(lightningCreatedFrame+10=== frameCount && Lightning)
    Thunder.destroy()
}   

umbrella.display() 

for(var i=0; i<maxDrops; i++){
    drops[i].display()
    drops[i].update()
}
drawSprites()
