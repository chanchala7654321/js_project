
let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let cheakBtn = document.getElementById("cheak");
let total = document.getElementById("total");

function calculator() {
    let num1value = number1.value;
    let num2value = number2.value;

    let sum = Number(num1value) + Number(num2value);
    total.innerHTML = `<b>Total:</b> ${sum}`;

    number1.value = "";
    number2.value = "";

}

cheakBtn.addEventListener("click", calculator);