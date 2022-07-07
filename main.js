Webcam.set({

    width:350,
    height:300,
    image_format:'png',
    png_quality:90

});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function takeSnapshot(){
    Webcam.snap(function(data_uri){

        document.getElementById("result_image").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';

    });
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/PEJTlOURu/model.json', modelLoaded);

function modelLoaded(){
    console.log("model loaded");
}

function speak(){
    var synth = window.speechSynthesis;
   speak_data_1 = "the prediction is:" + results[0].label;
   utterThis = new SpeechSynthesisUtterance(speak_data_1);
   synth.speak(utterThis);
}

function check(){
    img = document.getElementById("captured_image")
    classifier.classify(img, gotResult);

    
}

function gotResult( error,results){
    

    if(error){
        console.log(errror);
    }
    else{
        console.log(results);
    document.getElementById("result_text").innerHTML = results[0].label;
        document.getElementById("result_accuracy").innerHTML = results[0].confidence.toFixed(2);

    if(results[0].label == "Super"){
        
        document.getElementById("result_icon").innerHTML = "👌";
        document.getElementById("result_meaning").innerHTML = " - Super";
        

    }

    if(results[0].label == "Bad"){
        document.getElementById("result_icon").innerHTML = "👎";
        document.getElementById("result_meaning").innerHTML = " - Bad";

    }
    if(results[0].label == "Great"){
        document.getElementById('result_icon').innerHTML = "👍";
        document.getElementById("result_meaning").innerHTML = " - Great";

    }
    if(result[s0].label == "Greeting"){
        document.getElementById("result_icon").innerHTML = "🙏";
        document.getElementById("result_meaning").innerHTML = " - Greeting";

        if(results[0].label == "Up"){
            document.getElementById("result_icon").innerHMTL = "👆";
            document.getElementById("result_meaning").innerHTML = " - Up";

            speak();
        }
    }
}
    
}