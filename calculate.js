const zero = document.getElementById("0"); 
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const reset = document.getElementById("reset");
const backspace = document.getElementById("delete");
const decimal = document.getElementById("decimal");
const equals = document.getElementById("equals");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const mod = document.getElementById("mod");
const buttons = document.querySelectorAll("button");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");

let operand1 = "";
let operand2 = "";
let operator = "";
let decimalPressed1 = "false";
let decimalPressed2 = "false";

function evaluate(operator,operand1,operand2){
    let result = 0;
    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);

    switch (operator) {
        case "+":
            result = num1+num2;
            break;
        case "-":
            result = num1-num2;
            break;
        case "*":
            result = num1*num2;
            break;
        case "/":
            result = num2 !== 0?num1/num2 : "Error";
            break;
        case "%":
            result = num1%num2;
            break;
        default:
            result = "0";   
    }
    return result;
}
function displayDigit(digit){
    if(operator===""){
        if(digit==="."){
            if(decimalPressed1==="true"){
                digit = "";
            }
            else{
                decimalPressed1 = "true";
            }
        }
        operand1+=digit;
        line2.textContent = operand1;
    }
    if(operator!==""){
        line1.textContent = operand1;
        line2.textContent = "";
        if(digit==="."){
            if(decimalPressed2==="true"){
                digit = "";
            }
            else{
                decimalPressed2 = "true";
            }
        }
        operand2+=digit;
        line2.textContent = operand2;
    }
}

function displayResult(){
    let ans = evaluate(operator,operand1,operand2).toString();
    operand2 = "";
    operand1 = ans;
    operator = "";
    line1.textContent = ""; 
    line2.textContent = ans;
    decimalPressed1 = "false";
    decimalPressed2 = "false";
}

// Event Listeners:
zero.addEventListener("click", function(){
    displayDigit("0");
});
one.addEventListener("click", function(){
    displayDigit("1");
});
two.addEventListener("click", function(){
    displayDigit("2");
});
three.addEventListener("click", function(){
    displayDigit("3");
});
four.addEventListener("click", function(){
    displayDigit("4");
});
five.addEventListener("click", function(){
    displayDigit("5");
});
six.addEventListener("click", function(){
    displayDigit("6");
});
seven.addEventListener("click", function(){
    displayDigit("7");
});
eight.addEventListener("click", function(){
    displayDigit("8");
});
nine.addEventListener("click", function(){
    displayDigit("9");
});
// Reset Button
reset.addEventListener("click", function(){
    operator = "";
    operand1 = "";
    operand2 = "";
    line1.textContent = "";
    line2.textContent = "";
});
backspace.addEventListener("click",function(e){
    if (operator === "") {
        if (operand1.length > 0) {
            operand1 = operand1.slice(0,-1);
            line2.textContent = operand1;
        }
    }
    else {
        if (operand2.length > 0) {
            operand2 = operand2.slice(0,-1);
            line2.textContent = operand2;
        }
    }
});
// Decimal Button
decimal.addEventListener("click", function(){
    displayDigit(".");
});

// Operator Buttons
add.addEventListener("click", function(){
    if(operator!=="" && operand2!==""){
        operand1 = evaluate(operator,operand1,operand2).toString()+"+";
        operand2 = "";
        line1.textContent = operand1;
        line2.textContent = "";

        operator = "+";
    }
    else if(operand1!=="") {
        displayDigit("+");
        operator = "+";
    }
});

subtract.addEventListener("click", function(){
    if(operator!=="" && operand2!==""){
        operand1 = evaluate(operator,operand1,operand2).toString()+"-";
        operand2 = "";
        line1.textContent = operand1;
        line2.textContent = "";

        operator = "-";
    }
    else if(operand1!==""){
        displayDigit("-");
        operator = "-";
    }
});

multiply.addEventListener("click", function(){
    if(operator!=="" && operand2!==""){
        operand1 = evaluate(operator,operand1,operand2).toString()+"x";
        operand2 = "";
        line1.textContent = operand1;
        line2.textContent = "";

        operator = "*";
    }
    else if(operand1!==""){
        displayDigit("x");
        operator = "*";
    }
});

divide.addEventListener("click", function(){
    if(operator!=="" && operand2!==""){
        operand1 = evaluate(operator,operand1,operand2).toString()+"÷";
        operand2 = "";
        line1.textContent = operand1;
        line2.textContent = "";

        operator = "/";
    }
    else if(operand1!==""){
        displayDigit("÷");
        operator = "/";
    }
});

mod.addEventListener("click", function(){
    if(operator!=="" && operand2!==""){
        operand1 = evaluate(operator,operand1,operand2).toString()+"%";
        operand2 = "";
        line1.textContent = operand1;
        line2.textContent = "";

        operator = "%";
    }
    else if(operand1!==""){
        displayDigit("%");
        operator = "%";
    }
});
equals.addEventListener("click", function(){
    displayResult();
});

// Button's functions:
buttons.forEach(button=>{
    button.addEventListener("mousedown",function(e){
        button.style.width = "55px";
        button.style.height = "55px";
        button.style.fontSize = "15px";
        button.style.margin = "5px";
    });
    button.addEventListener("mouseup",function(){
        button.style.width = "65px";
        button.style.height = "65px";
        button.style.fontSize = "20px";
        button.style.margin = "0px";
    });
    
    button.addEventListener("mouseover",function(e){
        button.style.backgroundColor = "grey";
        button.style.cursor = "pointer";
    });
    button.addEventListener("mouseout",function(e){
        button.style.backgroundColor =  "#4a4a4a";
        button.style.cursor = "cursor";
    })
});
equals.addEventListener("mousedown",function(e){
    equals.style.width = "125px";
    equals.style.margin = "7.5px";

})
equals.addEventListener("mouseup",function(e){
    equals.style.width = "140px";
    equals.style.margin = "0px";
})



