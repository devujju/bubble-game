var timer=60;
var score=0;
var hitrn;
var finalScore=0;

function runTimer(){


    var timerInterval=setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timeLap").textContent=timer;
        }
        else{
            clearInterval(timerInterval);
          //  document.querySelector("#pbtm").innerHTML=`<h1>Your score:${finalScore}</h1>`;
            document.querySelector(".gameOver").style.display="block";
        }
    }, 1000)
}

function makeBubble(){

    var clutter="";

for(var i=1; i<=176; i++){
    var randomNumber=Math.floor(Math.random()*10);

    clutter+=`<div class="bubble">${randomNumber}</div>`;
}

document.querySelector("#pbtm").innerHTML=clutter;
}

function getNewHit(){

    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent=hitrn;
}

function setScore(){

score+=10;
finalScore=score;
document.querySelector("#newScore").textContent=score;
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
    var num=Number(dets.target.textContent);

    if(num === hitrn){
        setScore();
        makeBubble();
        getNewHit();
    }else{
        document.querySelector("#pbtm").innerHTML=`<h1>Your score:${finalScore}</h1>`;
    }
})

makeBubble();
runTimer();
getNewHit();