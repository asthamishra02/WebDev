window.addEventListener("load", () => {
    const resultElement = document.getElementById('result');
    const clearbtn = document.getElementById('clear-button');
    const deletebtn = document.getElementById('delete-button');
    const dividebtn = document.getElementById('divide-button');
    const multiplybtn = document.getElementById('multiply-button');
    const subtractbtn = document.getElementById('subtract-button');
    const addbtn = document.getElementById('add-button');
    const equalbtn = document.getElementById('equal-button');
    const decimalbtn = document.getElementById('decimal-button');
    const numberbtn = document.querySelectorAll('.number');

    let result = '';
    let operation = '';
    let previousOperand = 0;

    const appendNumber = (number) => {
        if (number === '.' && result.includes('.')) {
            return;
        }
        result += number;
        resultElement.innerText = result;


    }

    const updateDisplay = () => {
        if (operation) {
            resultElement.innerText = `${previousOperand} ${operation} ${result}`;

        }
        else {
            resultElement.innerText = result;
        }
    }

    const selectOperator = (operatorValue) => {
        if (result === " ") {
            return;
        }
        if (operation !== " " && previousOperand !== " ") {
            calculateResult()
        }
        operation = operatorValue;
        previousOperand = result;
        result = " ";
        updateDisplay();


    }
    const calculateResult = () => {
        let evaluatedResult;
        const prev = parseFloat(previousOperand);
        const current = parseFloat(result);
        if (isNaN(prev) || isNaN(current)) {
            return;
        }
        switch (operation) {
            case '+':
                evaluatedResult = prev + current;
                break;
            case '-':
                evaluatedResult = prev - current;
                break;
            case '*':
                evaluatedResult = prev * current;
                break;
            case '/':
                evaluatedResult = prev / current;
                break;
            default:
                return;



        }

        result = evaluatedResult.toString();
        operation = '';
        previousOperand = '';

    }


    numberbtn.forEach(button => {
        console.log(button);
        button.addEventListener('click', () => {
            console.log("Button pressed", button.innerText)
            appendNumber(button.innerText)
        })
    })
    const clearDisplay = () =>{
        result = '';
        previousOperand = '';
        operation = '';
        updateDisplay();

    }
    const deletelastdigit = ()=>{
        if(result === '')
        {
            return ;
        }
        result = result.slice(0,-1);
        updateDisplay();
    }
    decimalbtn.addEventListener('click', () => appendNumber('.'));
    addbtn.addEventListener('click', () => selectOperator('+'));
    multiplybtn.addEventListener('click', () => selectOperator('*'));
    dividebtn.addEventListener('click', () => selectOperator('/'));
    subtractbtn.addEventListener('click', () => selectOperator('-'));
    equalbtn.addEventListener('click', () => {
        if (result === "") {
            return;
        }
        calculateResult();
        updateDisplay();
    })
    clearbtn.addEventListener('click', clearDisplay);
    deletebtn.addEventListener('click',deletelastdigit);
})
