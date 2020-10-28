var car1,car2,car3,car4;
var wall;
var speed,weight;
var damage;

function setup() {
  createCanvas(1380,400);
  //createSprite(400, 200, 50, 50);

 speed1=random(55,90);
 speed2=random(55,90);
 speed3=random(55,90);
 speed4=random(55,90);
 weight=random(400,1500);
 damage=(0.5*weight*speed*speed)/22500


  car1=createSprite(100,50,50,10);
  car1.shapeColor="white"
  

  car2=createSprite(100,150,50,10);
  car2.shapeColor="white"

  car3=createSprite(100,250,50,10);
  car3.shapeColor="white"

  car4=createSprite(100,350,50,10);
  car4.shapeColor="white"

  wall=createSprite(1300,200,20,400);
  wall.shapeColor="blue"
}

function draw() {
  background(0); 
  if(keyDown("space")){
  car1.velocityX=speed1;
  car2.velocityX=speed2;
  car3.velocityX=speed3;
  car4.velocityX=speed4;
  }

  crashDetector1(car1,wall);
  crashDetector2(car2,wall);
  crashDetector3(car3,wall);
  crashDetector4(car4,wall);

 if(crashDetector1&&car1.velocityX>80){
car1.shapeColor="red"
 } 

if(crashDetector1&&car1.velocityX<80&&car1.velocityX>60){
  car1.shapeColor="yellow"
   } 

if(crashDetector1&&car1.velocityX<60&&car1.velocityX>30){
    car1.shapeColor="green"
     } 

    if(crashDetector2&&car2.velocityX>80){
      car2.shapeColor="red"
       } 
      
    if(crashDetector2&&car2.velocityX<80&&car2.velocityX>60){
        car2.shapeColor="yellow"
         } 
      
    if(crashDetector2&&car3.velocityX<60&&car3.velocityX>30){
          car2.shapeColor="green"
           } 

        if(crashDetector3&&car3.velocityX>80){
            car3.shapeColor="red"
             } 
            
        if(crashDetector3&&car3.velocityX<80&&car3.velocityX>60){
              car3.shapeColor="yellow"
               } 
            
        if(crashDetector3&&car3.velocityX<60&&car3.velocityX>30){
                car3.shapeColor="green"
                 } 

                if(crashDetector4&&car4.velocityX>80){
                  car4.shapeColor="red"
                   } 
                  
                if(crashDetector4&&car4.velocityX<80&&car4.velocityX>60){
                    car4.shapeColor="yellow"
                     } 
                  
                if(crashDetector4&&car4.velocityX<60&&car4.velocityX>30){
                      car4.shapeColor="green"
                       }      

      





  drawSprites();
}

function crashDetector1(object1,object5){
if(object5.x-object1.x<object1.width/2+object5.width/2
  )object1.velocityX=0;
}

function crashDetector2(object2,object5){
  if(object5.x-object2.x<object2.width/2+object5.width/2
    )object2.velocityX=0;
  }

  function crashDetector3(object3,object5){
    if(object5.x-object3.x<object3.width/2+object5.width/2
      )object3.velocityX=0;
    }

function crashDetector4(object4,object5){
if(object5.x-object4.x<object4.width/2+object5.width/2
   )object4.velocityX=0;
}
  

  
  










