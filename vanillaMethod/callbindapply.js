function checkThis(){
    console.log(this);
}
console.log(checkThis.name);
checkThis();
checkThis.call();
checkThis.call({a:1});   
checkThis.apply();
checkThis.bind();