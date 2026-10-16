function first(){
    a=10;
    b=15;
    console.log(a+b);

}
function second(){
    first()

}
function third(){
    try{
        second()
    }
    catch(err){
        console.log(err.name+""+err.message);
        
    }

}
third();