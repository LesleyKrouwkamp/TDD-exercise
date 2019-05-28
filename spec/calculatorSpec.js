describe("Add", function(){

    it("should add two numbers and equal zero", function(){
        let result = Add(0, 0);
        expect(result).toBe(0);
    });

    it("should add two numbers and equal -2", function(){
        let result = Add(-1, -1);
        expect(result).toBe(-2);
    });

    it("should add two numbers and equal 9", function(){
        let result = Add(4, 5);
        expect(result).toBe(9);
    });

    it("should add multiple numbers and equal 10", function(){
        let result = Add(1, 2, 3, 4);
        expect(result).toBe(10);
    });


});

describe("Multiply", function(){
   it("should multiply two numbers and return 2", function(){
       let result = Multiply(1, 2);
       expect(result).toBe(2);
   });
   
   it("should multiply multiple numbers", function(){
    let result = Multiply(1, 2, 3, 4);
    expect(result).toBe(24);

   });

});