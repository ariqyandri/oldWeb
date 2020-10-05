let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/DP.png') {
      myImage.setAttribute('src','images/DPsmile.png');
    } else {
      myImage.setAttribute('src','images/DP.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');
function setUserName() {
    let myName = prompt('hi, what\'s your name?');
    localStorage.setItem('name', myName);
    myHeading.textContent = myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
  function setUserName() {
    let myName = prompt('hi, what\'s your name?');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = myName;
    }
  }