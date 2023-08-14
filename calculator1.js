const resultElement = document.getElementById('result');
const clearbtn= document.getElementById('clear-button');
const deletebtn = document.getElementById('delete-button');
const dividebtn = document.getElementById('divide-button');
const multiplybtn = document.getElementById('multiply-button');
const subtractbtn = document.getElementById('subtract-button');
const addbtn = document.getElementById("add-button");
const equalbtn = document.getElementById('equal-button');
const decimalbtn = document.getElementById('decimal-button');
const numberbtn = document.querySelectorAll('.number');
let result=' ';
let operation;
let previousoperand = 0;
const appendNumber (number) =>{
  if(number != '.' && result.includes("."))
    return;
  result += number;
  resultElement.innerText = result;
}
numberbtn.forEach(button =>{
  button.addEventListener('click', ()=>{
    appendNumber(button.innerText)
  })
})
decimalbtn.addEventListener("click", () => appendNumber("."))