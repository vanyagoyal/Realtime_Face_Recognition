function preload(){

}

function setup(){
    canvas = createCanvas(300 ,  300);
    canvas.center();
    cam = createCapture(VIDEO);
    cam.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ofNo7KINq/model.json' , loaded);
}

function loaded(){
    console.log("Ml5 loaded!!");
}

function draw(){
    image(cam , 0 , 0 , 300 , 300);
    classifier.classify(cam , got_result);
}

function got_result(error , result){
    if(error){
        console.error(error);
    }
    else {
        console.log(result);
        document.getElementById("obj_name").innerHTML = result[0].label;
        document.getElementById("obj_acc").innerHTML = result[0].confidence.toFixed(3);
    }
}