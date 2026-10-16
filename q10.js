function add(a,b){
    try{
        if(b<=0){
            throw new Error("b cannot be zero");
        }
    
    else{
        console.log(a+""+b);
    }
}catch(err){
    console.log(err);
    
}
}
add(4,3);
add(4,0);