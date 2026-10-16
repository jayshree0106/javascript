class InvalidSalaryError extends Error{
    constructor(message){
    super(message);
    this.name="invalid salary";
}}

function Empsal(sal){
    try{
        if(sal<=0){
            throw new Error("salary is invalid")
        }
        else{
            console.log("valid");
        }
    }
    catch(err){
        console.log(err.name+""+err.message);
    }
}
Empsal(2000);
Empsal(0);