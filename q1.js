class Accountant{
    accountNumber =1234;
    accountHolder ="Jayshree";
    balance =1000000;

    constructor(accountNumber,accountHolder,balance){
        this.accountNumber=accountNumber;
        this.accountHolder=accountHolder;
        this.balance=balance;
    }
    deposit(amt){
        if (amt<=0) {
            console.log("invalid");
            
        }
        console.log(this.accountNumber+""+this.accountHolder+""+this.balance);
    }
}
const a=new Accountant(1234,"tom",100000);
a.deposit(0);
console.log(a)