var headOne = document.getElementById("one")
var headTwo = document.getElementById("two")
var headThree = document.getElementById("three")

headOne.addEventListener('mouseover', function(){
    headOne.textContent = "Mouse Currently over!";
    headOne.setAttribute("style", "color:red;");
})

headOne.addEventListener('mouseout', function(){
    headOne.textContent = "Hover over me!";
    headOne.style.color = 'black';
})

headTwo.addEventListener("click", function(){
    headTwo.textContent = "Click kr diya:)";
    headTwo.style.color = "yellow";
})

headThree.addEventListener("dblclick", function(){
    headThree.textContent = "Ha double click bhi kiya!";
    headThree.style.color = "green";
})