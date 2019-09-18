class Calculator{
    
    constructor(){
       this.array = [];

    }

    add(){
        let sum = 0; 
        for(let i = 0; i < arguments.length; i++){
            sum += parseFloat(arguments[i]); 
            this.Last = sum;
    }
    return sum;
    }

    multiply(){
        let sum = 1;

        for(let i = 0; i < arguments.length; i++){
            sum *= parseFloat(arguments[i]);
            this.Last = sum;
        }
        return sum;
    } 
    last(){
        return this.Last;
    }  
    

    set_slot(number){
        
        
        this.array.push(this.Last);
        return this.array[number - 1];

    }
    get_slot(number){

        return this.array[number - 1];
    }

}
let calculator = new Calculator();
