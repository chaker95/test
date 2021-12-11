var counter = document.getElementsByClassName("heart");
for (let btn of counter) {
    btn.addEventListener("click", function () {
        if (btn.style.color === "red") {
            btn.style.color = "black";
        } else {
            btn.style.color = "red";
        }
    });
}
var plus = document.querySelectorAll(".add");

var moin = document.querySelectorAll(".remove");

var digit = document.getElementsByClassName("digit");

var total = document.getElementsByClassName("total")




function Add() {
    for (var i = 0; i < plus.length; i++) {
        let button = plus[i];
        let parent = button.parentElement;
        button.addEventListener("click", function () {
            let number = parent.querySelector(".digit");
            let price = parent.querySelector("h1");
            number.innerHTML = +number.innerHTML + 1;
            total.innerHTML= +number.innerHTML * +price.innerHTML ;
              }); 
    }
}


function moins() {
    for (var i = 0; i < moin.length; i++) {
        let button = moin[i];
        let parent = button.parentElement;
        button.addEventListener("click", function () {
            let number = parent.querySelector(".digit");
            number.innerHTML = +number.innerHTML - 1;
            if (number.innerHTML= 0 ) {
                button.removeEventListener ;
         }
        });
    }
}
Add();
moins();



var close = document.getElementsByClassName("delete")
function remove (){
for (var i = 0; i < close.length; i++) {
    let button = close[i];
    button.addEventListener("click", function () {
        button.parentElement.style.display = "none" ;
    });
}
}
remove();











