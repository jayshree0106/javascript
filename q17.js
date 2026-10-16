function payment(pay){
    return new Promise((resolve,reject)=>{
        if(pay){
            resolve("payment successful");
        }
        else{
            reject("error occured ")
        }
    })
}
payment(false).then((result)=>{
    console.log(result);

})
.catch((err)=>{
    console.log(err);

})