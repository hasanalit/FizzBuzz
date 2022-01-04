let elForm = document.querySelector(".form");
let elFormInput = document.querySelector(".form__input");
let elFormResult = document.querySelector(".form__result");

const fizzBuzz = function(inputValue) {

    if(inputValue % 3 === 0 && inputValue % 5 === 0){
        return "FizzBuzz";
    }else if(inputValue % 3 === 0){
        return "Fizz";
    }else if(inputValue % 5 === 0){
        return "Buzz";
    }else{
        return inputValue;
    }
}


elForm.addEventListener('submit', function(evt){
    evt.preventDefault();

    let inputValue = elFormInput.value;

    if(inputValue <= 0 || isNaN(inputValue)){
        elFormResult.textContent = "Iltimos musbat son kiriting!";
        elFormResult.style.color = "red";
        return
    }else {
        elFormResult.style.color = "#000"
    }

    elFormResult.textContent = fizzBuzz(inputValue);
})