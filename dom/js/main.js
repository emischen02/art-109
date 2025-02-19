/*
console.log("hello hello");
let pageTitle = document.querySelector("#page-title");

// Javascript Timemout changes h1 after 3 seconds
setTimeout(function(){
    pageTitle.style.color = "green";
    console.log("timeout worked")
}     ,3000)

// Click event header changes background color
document.querySelector("header").onclick = function() {
    console.log("clicked header");
    document.querySelector("body").style.backgroundColor = "black";
}
*/

document.querySelector("#moon-phases").addEventListener("click", function(){
    document.querySelector("#shooting-star").style.visibility = "visible";
    
})

document.querySelector("#shooting-star").addEventListener("click", function(){
    document.querySelector("#solar-system").style.visibility = "visible";
})

document.querySelector("#solar-system").addEventListener("click", function(){
    document.querySelector("#spaceship").style.visibility = "visible";

})

document.querySelector("#spaceship").addEventListener("click", function(){
    //document.querySelector("#star-on-night-sky").style.visibility = "visible";
})