const billAmount = document.querySelector(".billAmount");

const cashGiven = document.querySelector(".cashGiven");

const checkBtn = document.querySelector(".btnCheck");


function BillandCashAmount(){
   console.log(billAmount.value);
   console.log(cashGiven.value)
}

checkBtn.addEventListener("click", BillandCashAmount)

