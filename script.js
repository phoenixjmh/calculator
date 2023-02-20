const numberlist = document.querySelectorAll('.number');
const operatorList = document.querySelectorAll('.operator');
const outputContainer = document.querySelector('.display-field');
let number = '';
let previousValue = '';
let solution = 0;
let isAdd = false;
let isSubtract = false;
let isMultiply = false;
let isDivide = false;
let hasDecimal = false;
let decimalError = 'Cannot have more than one decimal point!';



numberlist.forEach(item => item.onclick = function () {




    try {
        if (item.textContent === '.') {
            if (hasDecimal) {
                throw 'CANNOT HAVE MORE THAN ONE DECIMAL POINT';

            }


            hasDecimal = true;

        }
        number += item.textContent;
        outputContainer.textContent = Math.fround(number);
        solution = preComputeSolution(number);  //Takes the current number as input, so that if user uses backspace, the resulting number will be calculated.
       

    } catch (error) {
        console.log("ERROR::CANNOT HAVE MULTIPLE DECIMALS");
        alert(error);

    }



});



operatorList.forEach(item => item.onclick = function () {
    hasDecimal = false;
    if (item.id === 'clear')
        clearValues();

    if (item.id === 'backspace')
        backSpace();

    switch (item.textContent) {


        case '+':
            evaluate();
            number = '';
            previousValue = outputContainer.textContent;
            isAdd = true;
            isSubtract = false;
            isMultiply = false;
            isDivide = false;


            break;
        case '-':
            evaluate();
            number = '';
            previousValue = outputContainer.textContent;
            isSubtract = true;
            isAdd = false;
            isMultiply = false;
            isDivide = false;


            break;
        case '*':
            evaluate();
            number = '';
            previousValue = outputContainer.textContent;
            isSubtract = false;
            isAdd = false;
            isMultiply = true;
            isDivide = false;



            break;
        case '/':
            evaluate();
            number = '';
            previousValue = outputContainer.textContent;
            isSubtract = false;
            isAdd = false;
            isMultiply = false;
            isDivide = true;



            break;
        case '=':
            evaluate();



            break;
        default:

            break;

    }
   // console.log(solution);


});
function backSpace() {
   let readText = outputContainer.textContent.slice(0, outputContainer.textContent.length - 1);
   
   let number=readText;
   outputContainer.textContent=number;
    console.log("Number : "+ number);
    
    solution = preComputeSolution(number);
   
   


}
function preComputeSolution(num)   //this function serves to keep the solution updated live as the user enters new input
{
     if (isAdd)
          solution = add(previousValue, num);
     if (isSubtract)
         solution = subtract(previousValue, num);
     if (isMultiply)
         solution = multiply(previousValue, num);
     if (isDivide)
         solution = divide(previousValue, num);

        return solution;

}
function clearValues() {
    number = '';
    previousValue = '';
    solution = 0;
    isAdd = false;
    isSubtract = false;
    isMultiply = false;
    isDivide = false;
    hasDecimal = false;
    outputContainer.textContent = '';
}

function evaluate() {
   
    if (isAdd) {
        outputContainer.textContent = solution;
        isAdd = false;
        previousValue = solution;
    }
    if (isSubtract) {
        outputContainer.textContent = solution;
        isSubtract = false;
        previousValue = solution;
    }
    if (isMultiply) {
        outputContainer.textContent = solution;
        isMultiply = false;
        previousValue = solution;
    }
    if (isDivide) {
        if(number==='0'){
        alert('Yeah dont do that. Are you trying to tear the fabric of space-time? Let\'s just try that again. I\'ll just get rid of your little whoopsie');
        
        }else{
        outputContainer.textContent = solution;
        isDivide = false;
        previousValue = solution;
        }
    }
}
// function readDecimal(num){
//     let count=0;
//     for(let i in num)
//     {
//         if(num[i]==='.')
//         count++;


//     }
//     if()
// }

function add(a, b) { return Number(a) + Number(b) }
function subtract(a, b) { return Number(a) - Number(b) }
function multiply(a, b) { return Number(a) * Number(b) }
function divide(a, b) { return Number(a) / Number(b) }


