

const display = document.querySelector('#display-text');
let buttons = document.querySelector('.buttons');
buttons.style.backgroundColor = "lightGreen";
let list = document.querySelectorAll('.button');
console.log(list);
let hasOperator = false;

let method = 'plus', num1 = "", num2 = "";
list.forEach(node => {
    let val = node.innerHTML;
    if (node.id == "") {
        val = parseInt(val);
        node.addEventListener('click', () =>{
            if(!hasOperator){
                num1  = num1 + '' + val;
            }
            else{
                num2+= '' + val;
            }
            display.innerHTML += val;
            
            
        });
    }
    else if (node.id === "equals") {
        node.addEventListener('click', () => {
            console.log('click');
            if(hasOperator){
                display.innerHTML = operate(method, num1, num2);
                
            }
        });
    }
    else if (node.id === 'clr'){
        node.addEventListener('click', () => {
            display.innerHTML = '';
            num1 = '';
            num2 = '';
            method = ''
            hasOperator = false;
        });
    }
    else {
        node.addEventListener('click', () => {
            if(!hasOperator){
            
                hasOperator = true;
                display.innerHTML += val;
                method = node.id.toString();
                
            }
    });
        
    }
});




function add(num1, num2) {
    return num1 + num2;
}


function subtract(num1, num2) {
    return num1 - num2;
}


function multiply(num1, num2) {
    return num1 * num2;
}


function divide(num1, num2) {
    return num1 / num2;
}


function operate(operator = 'plus', num1 = 0, num2 = 0) {
    if (operator === 'plus') {
        return add(num1, num2);
    }
    if (operator === 'minus'){
        return subtract(num1, num2);
    }
    if (operator === 'multiply'){
        return multiply(num1, num2);
    }
    if (operator === 'divide'){
        if(num2 == 0){
            alert('DO NOT DIVIDE BY ZERO!!!');
            return "ERR";
        }
        else{
            return divide(num1, num2);
        }
    }
}