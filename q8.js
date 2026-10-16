class AgeError extends Error{
    constructor(message){
        super(message)
        this.name="Age Error";
    }
}




function validateAge(age){

    try{
        if(age<18){
            throw new Error("invalid");
        }
        else{
            console.log("valid")
        }
    }
    catch(err){
        console.log(err.name+""+err.message);

    }
}
validateAge(18);
validateAge(40);
validateAge(2);
validateAge(14);