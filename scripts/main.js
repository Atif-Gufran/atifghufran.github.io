//var myHeading=document.querySelector('h1');
//myHeading.textContent="hello world";
var myImage=document.querySelector('img');
myImage.onClick=function(){
	var mySrc=myImage.getAttribute('src');
	if(mySrc==='images/firefox-image-3.jpeg'){
		myImage.setAttribute('src', 'images/firefox-image-4.jpeg');
	}else{
		myImage.setAttribute('src', 'images/firefox-image-3.jpeg');
	}
}
//	chanege usr name
var myButton=document.querySelector('button');
var myHeading=document.querySelector('h1');

function setUserName(){
	var myName=prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent='Mozilla is cool ,'+myName;
}

if(!localStorage.getItem('name')){
	setUserName();
}else{
	var storedName=localStorage.getItem('name');
	myHeading.textContent='Mozilla is cool ,'+storedName;
}

myButton.onClick(){
	setUserName();
}