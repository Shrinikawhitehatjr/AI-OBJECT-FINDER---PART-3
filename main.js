video = "";

function setup(){
    canvas = CreateCanvas(480, 380);
    canvas.center();
}
function start()
{
    objectDetector.ml5.objectDetector( modelLoaded );
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    video.loop();
    video.speed(0);
    video.volume(1)
}
function draw(){
    image(video, 0, 0, 480, 380);
    if(status != "");
    {
        objectDetector.detect(video, gotResults);
        for(i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status: Detecting Objects";
            document.getElementById("Number_of_objects").innerHTML = "Objects detected are"+objects.length;

            fill("#FF0000");
            percent = floor(objects[1].confidence * 100);
            text(objects[1].label + ""+ percent + "%", objects[i].x + 15, objects[1].y +15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }

    }
}