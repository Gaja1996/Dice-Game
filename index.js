var randNum1 = Math.floor((Math.random() * 6) + 1);
randamImage="dice"+randNum1+".png";
var imagesrc="images/"+randamImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imagesrc);

var randNum2=Math.floor((Math.random() * 6)+1);
randImage1="dice"+randNum2+".png";
var imageSrc1="images/"+randImage1;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute('src',imageSrc1);

if(randNum1>randNum2){
    document.querySelector("h1").innerHTML="Dice 1 Win"
}
else if(randNum2>randNum1){
    document.querySelector("h1").innerHTML="Dice 2 Win"
}
else{
    document.querySelector('h1').innerHTML='Draw'
};