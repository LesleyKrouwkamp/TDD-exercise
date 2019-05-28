function Add(num1, num2){
   let sum = 0; 

   for(let i = 0; i < arguments.length; i++){
       sum += parseFloat(arguments[i]);

   }
   return sum;
}
console.log(Add(0, 0));
console.log(Add(-1, -1));
console.log(Add(4, 5));
console.log(Add(1, 2, 3, 4));


function Multiply(){
    let sum = 1;

    for(let i = 0; i < arguments.length; i++){
        sum *= parseFloat(arguments[i]);
    }
    return sum;
}
console.log(Add(1, 2));
console.log(Add(1, 2, 3, 4));
