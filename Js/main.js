// Owl Carousel
if (document.getElementById("title").textContent == "Tradex-") {
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel(
            {
                loop:true,
                margin:10,
                nav:true,
                margin: 30,
                autoplay: true,
                autoplayTimeout: 4000,
                dots: false,
                navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
    
                responsive:{
                    0:{
                        items:1
                    },
                    992:{
                        items:2
                    }
                }
        });
    });
} else if (document.getElementById("title").textContent == "About") {
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel(
            {
                loop:true,
                margin:10,
                nav:true,
                margin: 30,
                autoplay: true,
                autoplayTimeout: 4000,
                dots: false,
                navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
    
                responsive:{
                    0:{
                        items:1
                    },
                    770:{
                        items:2
                    },
                    992:{
                        items:4
                    }
                }
        });
    });
}

// Button Scrool
window.addEventListener("scroll" , function() {
    if(document.documentElement.scrollTop > 300) {
        this.document.querySelector(".scroll").style.visibility = "visible";
        this.document.querySelector(".scroll").style.opacity = "1";
    } else {
        document.querySelector(".scroll").style.visibility = "hidden";
        this.document.querySelector(".scroll").style.opacity = "0";
    }
})



// counter
elements = document.querySelectorAll(".countWant");
for (i = 0; i < elements.length; i++) {
  elements[i].innerText = "0";
}

let x = false;
function interval(tag, end, increase, time){
    let N = 0;
    let set = setInterval(() => {
        if (N === end || N > end){
            clearInterval(set);
        } 
        tag.innerText = N
        N += increase;
    }, time)
    x = true;
}
window.addEventListener("scroll" , function() {
    if(document.documentElement.scrollTop > 365) {
      if (x == false){
          interval(elements[0], 8000, 50, 9);
         interval(elements[1], 810, 5, 10);
         interval(elements[2], 2000, 10 , 8);
         interval(elements[3], 20, 1, 70);
      }
    }
})


if (document.getElementById("title").textContent == "Contact") {
    // form validation
let form = document.getElementById("form");
form.addEventListener ("input", function(e) {
    switch (e.target.id) {
        case "name":
            nameValidaation(e.target)
        break;
        case "email" :
            emailValidation(e.target)
        break;
        case "password" :
            passwordValidation(e.target)
        break;
    }
})

// name Validation
function nameValidaation(input) {
    let reg = /^\d/;
    if (reg.test(input.value)) {
        handleError(input, "invalid Name")
    }
    else {
        handleError(input)
    }
};


// email Validayion
function emailValidation(input) {
    let regExp =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!regExp.test(input.value)) {
        handleError(input, "invalid Email")
    }
    else {
        handleError(input)
    }
    if (input.value == "") {
        input.nextElementSibling.innerText = ""
    }

}

// Password Validayion
function passwordValidation(input) {
    let RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    if (!RegExp.test(input.value)) {
        handleError(input, "invalid Password")
    }
    else {
        handleError(input)
    }
    if (input.value == "") {
        input.nextElementSibling.innerText = ""
    }
}

function handleError (input, massage = "") {
    input.nextElementSibling.innerText =`${massage}`;
}


let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let submitInput = document.getElementById("submit");


form.addEventListener("submit", function (e) {
    if (nameInput.value == "") {
        e.preventDefault();
        handleError(nameInput, "This field is Required")
        handleError(submitInput, "One or more fields have an error. Please check and try again")
    }
    if (emailInput.value == "") {
        e.preventDefault();
        handleError(emailInput, "This field is Required")
        handleError(submitInput, "One or more fields have an error. Please check and try again")
    }
    if (passwordInput.value == "") {
        e.preventDefault();
        handleError(passwordInput, "This field is Required")
        handleError(submitInput, "One or more fields have an error. Please check and try again")
    }
});
}