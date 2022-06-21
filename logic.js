const billAmount = document.querySelector("#billAmount");
const cashGiven = document.querySelector("#cashGiven");
const checkBtn = document.querySelector(".btnCheck");
const output = document.querySelector("#output");
const message = document.querySelector("#error-message")
const notesReturned = document.querySelectorAll(".notesTobereturned");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

function ValidateBillandCashAmount() {
   HideMessage()
   if (billAmount.value > 0) {
      if (cashGiven.value >= billAmount.value) {
         const amountToBeReturned = cashGiven.value - billAmount.value;
         calculateChange(amountToBeReturned)
      } else {
         ShowMessage("The Cash given is Insuficent")
      }

   } else {
    ShowMessage("Enter a Valid bill amount")
   }
}
function calculateChange(amountToBeReturned) {
   for (let i = 0; i < availableNotes.length; i++) {
      const notesToBeRetrun = Math.trunc(amountToBeReturned / availableNotes[i]);
      amountToBeReturned = amountToBeReturned % availableNotes[i];
     
      notesReturned[i].innerText= notesToBeRetrun;
      console.log(notesToBeRetrun)
   }
}

function ShowMessage(str){
   message.style.display ="block";
      message.innerText= str;
   
}

function HideMessage(){
   message.style.display ="none";    
}

checkBtn.addEventListener("click", ValidateBillandCashAmount)