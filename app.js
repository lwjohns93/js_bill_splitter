//Selectors 
const howMuch = document.getElementById('bill-amount');
const howMany = document.getElementById('total-people');
const btn = document.getElementById('calculate');
const owed = document.getElementById('you-owe');
const slider = document.getElementById('tip-range');
const tipValue = document.getElementById('tip-amount')

//Event Listeners
btn.addEventListener('click', calculate);

//Function
function calculate(e) {
  //Prevent defaul behaviour 
  e.preventDefault();
  
  if (howMuch.value == '') {
    owed.innerHTML = 'How much?'
    return null
  } 
  if (howMany.value == '') {
    owed.innerHTML = 'How many again?'
    return null
  } 

  const totalBill = howMuch.value;
  const totalPpl = howMany.value;
  const tip = slider.value / 100;
  const amountOWed = (totalBill / totalPpl) + ((totalBill / totalPpl) * tip);
  owed.innerHTML = '£' + amountOWed;
}

slider.oninput = function() {
  tipValue.innerHTML = `Tip: £${this.value}`; 
}