var myImage = document.querySelector('img');

myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/image-1.svg'){
		myImage.setAttribute('src','images/image-2.svg')
	} else{
		myImage.setAttribute('src','images/image-1.svg')
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Oi, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Oi, ' + storedName;
}


myButton.onclick = function() {
  setUserName();
}
