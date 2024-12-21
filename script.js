const bill = document.getElementById("bill-amount")
const cash = document.getElementById("cash-given")
const check = document.getElementById("check")
const error = document.getElementById("error");
const number_2000 = document.getElementById("number_of_2000");
const number_500 = document.getElementById("number_of_500");
const number_100 = document.getElementById("number_of_100");
const number_50 = document.getElementById("number_of_50");
const number_20 = document.getElementById("number_of_20");
const number_10 = document.getElementById("number_of_10");
const number_5 = document.getElementById("number_of_5");
const number_1 = document.getElementById("number_of_1");
const total_amount_returned = document.getElementById("total_amount_returned")
check.addEventListener("click",noteChecker);
function noteChecker()
{
  let billValue = parseInt(bill.value.trim());
  let cashValue = parseInt(cash.value.trim());
  let number_of_2000 = 0;
  let number_of_500 = 0;
  let number_of_100 = 0;
  let number_of_50 = 0;
  let number_of_20 = 0;
  let number_of_10 = 0;
  let number_of_5 = 0;
  let number_of_1 = 0;
  if(billValue!=="" &&  cashValue!=="" )
  {
    if(cashValue<billValue)
    {
      error.textContent = "Insufficient Amount";
    }
    else if(cashValue>billValue)
    {
      let remaining_amount = cashValue-billValue;
      total_amount_returned.textContent = `${remaining_amount}rs`;
      number_of_2000 = Math.floor(remaining_amount/2000);
      remaining_amount = remaining_amount%2000;
      number_of_500 = Math.floor(remaining_amount/500);
      remaining_amount = remaining_amount%500;
      number_of_100 = Math.floor(remaining_amount/100);
      remaining_amount = remaining_amount%100;
      number_of_50 = Math.floor(remaining_amount/50);
      remaining_amount = remaining_amount%50;
      number_of_20 = Math.floor(remaining_amount/20);
      remaining_amount = remaining_amount%20;
     number_of_10 = Math.floor(remaining_amount/10);
     remaining_amount = remaining_amount%10;
     number_of_5 = Math.floor(remaining_amount/5);
     remaining_amount = remaining_amount % 5;
     number_of_1 = Math.floor(remaining_amount/1);
     
     number_2000.textContent = number_of_2000;
     number_500.textContent = number_of_500;
     number_100.textContent = number_of_100;
     number_50.textContent = number_of_50;
     number_20.textContent = number_of_20;
     number_10.textContent = number_of_10;
     number_5.textContent = number_of_5;
     number_1.textContent = number_of_1;
     error.textContent = "";
    }
   else if(cashValue === billValue)
    {
      error.textContent = "No change Required"
    }
    else{
      error.textContent = "Enter only in numbers";
    }
  }
  
  else{
    error.textContent = "Input should not be empty"
  }
}
