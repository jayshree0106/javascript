class InvalidUserError extends Error{
    constructor(message){
        super(message);
        this.name="invalid user"
    }
}


function username(uname){
    try{
        if(uname==null){
            throw new Error("username cannot be empty")
        }
        else{
            console.log("username is valid")
        }
    }
    catch(err){
        console.log(err.name+""+err.message);

    }
}
username("ritika");
username();