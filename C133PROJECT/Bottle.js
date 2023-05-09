Status = "";
Bottle_image = "";
objects = [];

function preload(){
    Bottle_image = loadImage("Bottle.jpg")
}

function setup(){
    canvas = createCanvas(640,350);
    canvas.center();
    object_detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}


function modelLoaded() {
    console.log("Model Loaded!")
    Status = true;
    objectDetector.detect(Bottle_image, gotResult);
}
function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}
function draw() {
    image(Bottle_image, 0, 0, 640, 350);
    if(Status != "")
    {
        for (i = 0; i < objects.length; i++); {
            document.getElementById("status").innerHTML = "Status : Object Detected";

            fill("#fc0303");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#fc0303");
            rect(objects[i].x - 450, objects[i].y - 400, objects[i].width - 370, objects[i].height - 360);
        }
    }
} 