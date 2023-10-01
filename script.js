var color=["red","green","cyan","black","violet","orange","yellow","lemon","lightgreen","blue","purple"];
var index=0;
var isTriangle=false;
var isCircle=false;
var cShape=document.getElementById("change-shape");
var cColor=document.getElementById("change-color");

cShape.addEventListener("click",changeShape);
cColor.addEventListener("click",changeColor);

function changeColor(){
    if(index=== color.length){
        index=0;
    }
    document.getElementById("circle").style.backgroundColor=color[index];
    index++;
}

function changeShape(){
    if(!isTriangle){
        var i=document.getElementsByClassName("inner-shape")[0];
        i.className="triangle";
        isTriangle=true;
    }
    else if(!isCircle){
        var i=document.getElementsByClassName("triangle")[0];
        i.className="inner-circle";
        isCircle=true;
    }
    else{
        var i=document.getElementsByClassName("inner-circle")[0];
        i.className="inner-shape";
        isTriangle=false;
        isCircle=false;
    }
}
