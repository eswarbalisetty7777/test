function display(symbol){
    document.calculator.answer.value+=symbol
}

function calculate(){
let expression=document.calculator.answer.value;

// [operators,numbers]=parseString(expression)
// console.log(operators)
// console.log(numbers)
document.calculator.answer.value=eval(expression)
}

function reset(){
    document.calculator.answer.value=""

}
// function parseString(s) {
//     let numbers = [];
//     let operators=[];

//     for (let i = 0, ch; ch = s.charAt(i); i++) {
//     if(ch=='+'||ch=='*'||ch=='/'||ch=='-'){
//          }    
// else{
    
// }    
// }
   
//     return {
//         operators:operators,
//         numbers:numbers
//     };
//   }
