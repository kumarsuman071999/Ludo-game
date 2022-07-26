var num=(Math.random() *6) +1;
var ran=Math.floor(num);
var randomimg="dice"+ran+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimg);

var random2= Math.floor((Math.random.apply()*6) +1);
var randomimg1="dice"+random2+".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",randomimg1);

if(randomimg > randomimg1){
    document.querySelector("h1").innerHTML="Player 1 Win";

}
else if(randomimg === randomimg1){
    document.querySelector("h1").innerHTML="Match Draw";
}
else{
    document.querySelector("h1").innerHTML="Player 2 Win";
}


