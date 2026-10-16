function payment(pay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            
        if(pay){
            resolve("payment successful");
        }
        else{
            reject("error occured ")
        }
    },4000);
});}
async function test(){
    try{
        const data=await payment()
        console.log(data);

    }
    catch(err){
        console.log(err);

    }

}
test();