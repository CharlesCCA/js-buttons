const header = 'Buttons!'

const para1 = 'Let\'s use buttons to change things!'

// Update header text
document.querySelector('.header').innerHTML = header

// Update paragraph text
document.querySelector('.para1').innerHTML = para1

document.querySelector(".deleteText").addEventListener("click", function() {                                 
  document.querySelector(".para1").innerHTML="";
})

document.querySelector(".undeleteText").addEventListener("click", function() {                                     
  document.querySelector(".para1").innerHTML = para1;
})

document.querySelector(".blueBGColor").addEventListener("click", function() {
  document.querySelector("body").style.backgroundColor = "darkblue";
})

document.querySelector(".maroonBGColor").addEventListener("click", function() {
  document.querySelector("body").style.backgroundColor = "maroon";
})

document.querySelector(".greenBGColor").addEventListener("click", function() {
  document.querySelector("body").style.backgroundColor = "darkgreen";
})

document.querySelector(".imageButton").addEventListener("click", function() {
  document.querySelector(".hiddenImage").style.display = "block";
})

// Log to console
console.log(header)
