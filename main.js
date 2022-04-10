distanec=0;
rigthwristx=0;
leftwristx=0;

function setup(){
 canvas=createCanvas(450,400)
    video = createCapture(VIDEO)
    canvas.position(700, 140)
    video.position(100, 80)
 
posenet=ml5.poseNet(video, modelloaded);
posenet.on("pose",gotpose)
 }

 function modelloaded(){
console.log("the posnet initialization")
 }

 function draw(){
    background("lightpink")
    textSize(distanec)
    
    fill("red")
    text("vishwesh",50,400)

    
}
function gotpose(result){
    if(result.length > 0){
        console.log(result)


rigthwristx=result[0].pose.rightWrist.x
leftwristx=result[0].pose.leftWrist.x
distanec=floor(leftwristx-rigthwristx)

    }
}