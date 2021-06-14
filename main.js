prediction1="";
prediction2="";
Webcam.set({
    height="300",
    width="350",
    image_format="png",
    png_quality="90"
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>';
    });
    
}
console.log("ml5 version-",ml5.version);
classifier=classify("",model_loaded);
function model_loaded(){
    
    console.log("model is loaded");
}