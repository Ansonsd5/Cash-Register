const billAmount = document.querySelector("#billAmount");

const cashGiven = document.querySelector("#cashGiven");

const checkBtn = document.querySelector(".btnCheck");
const output = document.querySelector("#output");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1]

function ValidateBillandCashAmount() {
   if (billAmount.value > 0) {
      if (billAmount.value < cashGiven.value) {
         console.log("logic")
      } 
      else {
         console.log("Cash given is Insufficent");
      }

 }
 else{
   console.log("Enter a valid Input")
 }
 }




checkBtn.addEventListener("click", ValidateBillandCashAmount)