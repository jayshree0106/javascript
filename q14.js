function ValidateAge(age){
    if(age<18){
    throw new Error("InValid age")
    }
    else{
        console.log("valid")
    }
}
function RegisterUser(){
    try{
        ValidateAge(age)
    }
    catch(err){
        console.log(err.name+""+err.message);
    }

}

ValidateAge(50);