nose_x="";

nose_y="";

left_wirst_x="";

right_wrist_x="";

diffrence="";

function preload(){

}

function setup(){
canvas=createCanvas(500,450);
canvas.center();
video=createCapture(VIDEO);
video.size(400,400);
pose_net=ml5.poseNet(video,modelLoaded);
pose_net.on("pose",gotPoses);
}

function draw(){
background("white");
textSize(diffrence);
fill("black");
text("Arnav",nose_x,nose_y);
document.getElementById("font_size").innerHTML="Font Size of the Text is: "+diffrence+"px";
}

function modelLoaded(){
console.log("Model is Loaded");
}

function gotPoses(results){
if(results.length>0){
console.log(results);
nose_x=results[0].pose.nose.x;
nose_y=results[0].pose.nose.y;

left_wirst_x=results[0].pose.leftWrist.x;
right_wrist_x=results[0].pose.rightWrist.x;

console.log(nose_x,nose_y);
console.log(left_wirst_x,right_wrist_x);

diffrence=Math.floor(left_wirst_x-right_wrist_x);

console.log(diffrence);
}
}
