




var colorList=randomColor(6);

var msg=document.getElementById("message");	
var jackson="jack"
var goal=goalFun(6);
var displayColor=document.getElementById("rgb");
displayColor.textContent=goal;
var flag=true;
var h1=document.querySelectorAll("h1")[0];
var boxs=document.querySelectorAll(".box")
var button=document.querySelectorAll("button")[0];
var easyButton=document.querySelectorAll("button")[1];
var hardButton=document.querySelectorAll("button")[2];
var easy=0;
var hard=0;
var flag1=0;

easyButton.addEventListener("click",function(){

		easy=3;
		hard=0;
	this.classList.add("mode");
	hardButton.classList.remove("mode");
	
	//adding 3 box
	colorList=randomColor(easy);
	goal=goalFun(easy);
	displayColor.textContent=goal;
	button.textContent="New Color";
	 for(var i=0;i<colorList.length;i++)
{
	//removig last 3 block 
boxs[i].style.backgroundColor=colorList[i];}
//h1.style.backgroundColor="#232323";

for(var i=3;i<6;i++){
boxs[i].style.backgroundColor="#232323"
msg.textContent="";

}

	
})
hardButton.addEventListener("click",function(){
	hard=6;
	easy=0;
	this.classList.add("mode");
	easyButton.classList.remove("mode");

	colorList=randomColor(hard);
	goal=goalFun(hard);
	displayColor.textContent=goal;
	button.textContent="New Color";
	 for(var i=0;i<colorList.length;i++)
{
	//adding color
boxs[i].style.backgroundColor=colorList[i];}
//h1.style.backgroundColor="#232323";
msg.textContent="";
	
})

button.addEventListener("click",function(){
	if(hard===3)
	{
		flag1=3

	}
	else
		flag1=6;

	colorList=randomColor(flag1);
	goal=goalFun(flag1);
	displayColor.textContent=goal;
	button.textContent="New Color";
	 for(var i=0;i<colorList.length;i++)
{
	//adding color
boxs[i].style.backgroundColor=colorList[i];}
h1.style.backgroundColor="steelblue";
msg.textContent="";

})





for(var i=0;i<colorList.length;i++)
{
	//adding color
boxs[i].style.backgroundColor=colorList[i];
//adding clickevent

boxs[i].addEventListener("click",function(){

if(goal===this.style.backgroundColor)
	{//alert("correct")
msg.textContent="correct";
button.textContent="Play again??";
	
	h1.style.backgroundColor=goal;
//alert(this.style.backgroundColor)
colorAll(goal);}
else
	{//alert("Incorrect")
	this.style.backgroundColor= "#232323";
	msg.textContent="try again";
	//alert(this.style.backgroundColor)
	}

})
}




function colorAll(color)
{
for(var i=0;i<boxs.length;i++)
{
	boxs[i].style.backgroundColor=color;
}

}



function goalFun(numb)
{
	var x=Math.floor(Math.random() *numb+1);
	return colorList[x];
}

function randomColor(num)
{ var ar=[];
	for(var i=0;i<num;i++)
	{
		ar.push(randomRGB());
	}

	return ar;
}

function randomRGB()
{
	//r
	var r=Math.floor(Math.random() *256);
	//g
	var g=Math.floor(Math.random() *256);
	//b
	var b=Math.floor(Math.random() *256);
	return "rgb("+r+", "+g+ ", "+b+")";
}
