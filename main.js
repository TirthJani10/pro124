function preload() {

}
function setup() {
    
canvas = createCanvas(500,500);
// canvas.center()
video = createCapture(VIDEO);
video.size(550, 550);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', getPoses);
}
function draw() {

}
function modelLoaded() {
    console.log("Model Loaded!");
}
function getPoses(error, results) {
    if(error) {
        console.error(error);
    }
    else{
        if(results.length > 0) {
        console.log(results);
        }
    }
    
   
}