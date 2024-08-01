console.info("---- async-basic ---");
console.info('\n');
/*
执行优先级:

setImmediate>setTimeout with no delay>setTimeout with delay
*/
setTimeout(() => {
    console.info("setTimeout with no delay");
}, 0);

setImmediate(() => {
    console.info("setImmediate");
});

setTimeout(() => {
    console.info("setTimeout with delay");
}, 3000);

console.info('end of code');
console.info('\n');

/*
输出结果
node async-basic.js 
---- async-basic ---


end of code


setImmediate
setTimeout with no delay
setTimeout with delay
*/