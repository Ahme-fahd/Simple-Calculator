document.getElementById("btn").addEventListener("click",function(){

let operator=document.getElementById("selectOp").value;
console.log(operator);

let FirstNumber=document.querySelector(".num1").value;
console.log(FirstNumber);

let SecondNumber=document.querySelector(".num2").value;
let result=document.querySelector(".result");


switch(operator){
case "plus":
    result.innerHTML=Number(FirstNumber) + Number(SecondNumber);

break;
case "min":
    result.innerHTML=Number(FirstNumber) - Number(SecondNumber);

break;
case "mult":
    result.innerHTML=Number (FirstNumber) * Number(SecondNumber);
    break;
    case "Div":
        result.innerHTML=Number(FirstNumber) / Number(SecondNumber);







}








});




