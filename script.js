
let valueDisplay = document.querySelector('.display');
let body = document.querySelector('body');
let border = document.querySelector('.keys');
let decimal = document.querySelector('.decimal');
let keys = document.querySelectorAll('.key');
let number_keys = document.querySelectorAll('.number');
let oprator = document.querySelectorAll('.oprator');

// themes
let theme1 = document.querySelector('.dark');
let theme2 = document.querySelector('.white');
let theme3 = document.querySelector('.theme3');



let firstNumber = 0;
let waittingForSecondNumber = false;
let setoprator = '';


const claculate = {
    '/':(firstValue,secondValue)=>firstValue/secondValue,
    'x':(firstValue,secondValue)=>firstValue*secondValue,
    '+':(firstValue,secondValue)=>firstValue+secondValue,
    '-':(firstValue,secondValue)=>firstValue-secondValue,
    '=':(firstValue,secondValue)=>secondValue,
}


theme2.addEventListener('click',()=>{
    decimal.classList.remove('them3');
    oprator.forEach(key=>key.classList.remove('them3'));
    theme1.classList.remove('dark');
    theme3.classList.remove('active');
    valueDisplay.classList.remove('disthem3');
    body.classList.remove('body3');
    number_keys.forEach(key=>key.classList.remove('them3'));
    border.classList.remove('Border_them3');

    theme2.classList.add('active');
    body.classList.add('body2');
    valueDisplay.classList.add('them2');
    border.classList.add('them2');
    number_keys.forEach(key=>key.classList.add('the2'));
   
})

theme3.addEventListener('click',()=>{
    theme1.classList.remove('dark');
    theme2.classList.remove('active');
    body.classList.remove('body2');
    border.classList.remove('them2');
    border.classList.add('Border_them3');
    theme3.classList.add('active');
    body.classList.add('body3');
    number_keys.forEach(key=>key.classList.add('them3'));
    oprator.forEach(key=>key.classList.add('them3'));
    valueDisplay.classList.add('disthem3');
    decimal.classList.add('them3');

})
theme1.addEventListener('click',()=>{
    decimal.classList.remove('them3');
    oprator.forEach(key=>key.classList.remove('them3'));
    body.classList.remove('body2');
    theme2.classList.remove('active');
    theme3.classList.remove('active');
    body.classList.remove('body3');
    valueDisplay.classList.remove('disthem3');
    number_keys.forEach(key=>key.classList.remove('them3'));
    border.classList.remove('Border_them3');
    border.classList.remove('them2');
    valueDisplay.classList.remove('them2');
    number_keys.forEach(key=>key.classList.remove('the2'));
    theme1.classList.add('dark');
   
   
})


Array.from(keys).forEach((key)=>{
    if (key.classList.contains('oprator')) {
        key.addEventListener('click',()=>setOprater(key.textContent));
    }
    if (key.classList.contains('number')) {
        key.addEventListener('click',()=>sendNumber(key.textContent));
    }
    if (key.classList.contains('decimal')) {
        key.addEventListener('click',()=>decimalPoint());
    }
    if (key.classList.contains('reset')) {
        key.addEventListener('click',()=>reset());
    }
    if (key.classList.contains('del')) {
        key.addEventListener('click',()=>del(valueDisplay));
    }
})


function setOprater(oprator){
    let currentValue = Number(valueDisplay.textContent);

    if (setoprator && waittingForSecondNumber) {
        setoprator = oprator;
        return;
    }
    if (!firstNumber) {
        firstNumber = currentValue;
    }
    else{
        console.log(firstNumber,setoprator,currentValue);
        const calculation = claculate[setoprator](firstNumber,currentValue);
        firstNumber = calculation;
        valueDisplay.textContent = calculation;
    }
    waittingForSecondNumber = true;
    setoprator = oprator;
   
}


function sendNumber(number){
    let currentvalue = valueDisplay.textContent;

    if (waittingForSecondNumber) {
       valueDisplay.textContent = number;
       waittingForSecondNumber = false;
    }else{
    if (!(currentvalue === '0'))
        valueDisplay.textContent += number;
    else
        valueDisplay.textContent = number;  
    }
}


function decimalPoint(){

    if (waittingForSecondNumber) {
        return;
    }

    if(!valueDisplay.textContent.includes('.')){
        valueDisplay.textContent = `${valueDisplay.textContent}.`;
    }
}


function reset(){
    valueDisplay.textContent='0';
    firstNumber = 0;
    waittingForSecondNumber = false;
    setoprator = '';
}


function del(value){

    let Tvalue = value.textContent.toString();
    let newValue='';
    
    for (let i = 0; i < Tvalue.length; i++) {
        if (i == (Tvalue.length-1)) {
            newValue = Tvalue.slice(0,i);
            break;
        }
    }
    console.log(newValue)
    newValue = Number(newValue);

    value.textContent = newValue;  
}
