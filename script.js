var color1=["#f6016a","#fa71ad","#8c2c90","#8c2c90","#0069ba","#00aee3","#01a49a","#00a900","#acce01","#ffe500","#fb5d00","#e90001"];
var color2=["#f54d95","#c54384","##a560a8","#8067ad","#418bc7","#41c1e9","#40bbb2","#42bab0","#64d066","#c2db41","#fef26e","#f99256","#e84243"];


var index=0;
var isTriangle=false;
var isCircle=false;
var isRectangle=false;
var isDiamond=false;

var cShape=document.getElementById("change-shape");
var cColor1=document.getElementById("change-color1");
var cColor2=document.getElementById("change-color2");


cShape.addEventListener("click",changeShape);
cColor1.addEventListener("click",changeColor1);
cColor2.addEventListener("click",changeColor2);


function changeColor1(){
    if(index=== color1.length){
        index=0;
    }
    document.getElementById("circle1").style.backgroundColor=color1[index];
    index++;
}
function changeColor2(){
    if(index=== color2.length){
        index=0;
    }
    document.getElementById("circle2").style.backgroundColor=color2[index];
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
    else if(!isRectangle){
        var i=document.getElementsByClassName("inner-circle")[0];
        i.className="rectangle";
        isRectangle=true;
    }
    else if(!isDiamond){
        var i=document.getElementsByClassName("rectangle")[0];
        i.className="diamond-square";
        isDiamond=true;
    }
    else{
        var i=document.getElementsByClassName("diamond-square")[0];
        i.className="inner-shape";
        isTriangle=false;
        isCircle=false;
        isRectangle=false;
        isDiamond=false;

    }
}
