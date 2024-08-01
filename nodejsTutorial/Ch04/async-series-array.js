console.info("---- async-basic ---");
console.info("\n");

import * as async from "async";
/*
async串行执行
可以在node.js环境以及浏览器环境下使用
异步流程控制模式：
串行执行，每个任务都是同步执行的
并行执行，每个任务都是异步执行的
瀑布式执行，每个任务都是异步执行的
*/

async.series([
    function(callback) {
        setTimeout(function() {
            callback(null,"first");
        }, 1000);
    },
    function(callback) {
        setTimeout(function() {
            callback(null,"second");

        }, 2000);
    },
    function(callback) {
        setTimeout(function() {
            callback(null,"third");
        }, 3000);
    }
], function(_err, results) {
    console.info(results);
});
console.info("end of code");

/*
输出结果
node async-series-array.js 
---- async-basic ---


end of code
[ 'first', 'second', 'third' ]
*/