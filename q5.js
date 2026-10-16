function add(a,b=10){
    return a+b;
}
console.log(add(2,3));
console.log(add(6));

function greet(name="guest"){
    console.log(name);

}
greet();