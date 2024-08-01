console.info("---- process.nextTick ---");
console.info("\n");

/*
setTimeout()方法、setImmediate()方法、process.nextTick()方法比较

*/
console.time("startTaskA");
console.log("start -setTimeout");
setTimeout(() => {
    console.log("callbackA -setTimeout");
}, 0);

console.log("schedule -setTimeout");
console.timeEnd("startTaskA");

/*
使用setImmediate()方法执行异步操作，但是不会阻塞其他任务的执行，也不会阻塞其他任务的执行
*/

console.time("startTaskB");
console.log("start -setImmediate");
setImmediate(() => {
    console.log("callbackB -setImmediate");
});

console.log("schedule -setImmediate");
console.timeEnd("startTaskB");

/*
使用process.nextTick()方法执行异步操作，但是不会阻塞其他任务的执行，也不会阻塞其他任务的执行
*/

console.time("startTaskC");
console.log("start -process.nextTick");
process.nextTick(() => {
    console.log("CallbackC -process.nextTick");
});

console.log("schedule -process.nextTick");
console.timeEnd("startTaskC");

console.info("---- process.nextTick ---");
console.info("\n");

/*
输出结果
 node process-nextTick.js 
---- process.nextTick ---


start -setTimeout
schedule -setTimeout
startTaskA: 0.827ms
start -setImmediate
schedule -setImmediate
startTaskB: 0.441ms
start -process.nextTick
schedule -process.nextTick
startTaskC: 0.443ms
---- process.nextTick ---


CallbackC -process.nextTick
callbackB -setImmediate
callbackA -setTimeout

*/