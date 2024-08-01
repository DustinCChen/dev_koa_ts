console.info("---- child_process spawn usage ---");
console.info("\n");

import * as child_process from "child_process";
/*
 *  
 * 
 *

*/
const spawn = child_process.spawn;
// const exec = child_process.exec;
// const execFile = child_process.execFile;
// const fork = child_process.fork;
// const spawnSync = child_process.spawnSync;
// const execSync = child_process.execSync;
// const execFileSync = child_process.execFileSync;
// const forkSync = child_process.forkSync;

const ls_var = spawn('ls', ['-lh', '/d/Workdir/dev_frontend/dev_koa_ts/nodejsTut/Ch05']);
/*
捕获标准输出和标准错误输出
*/
ls_var.stdout.on('data', function (data) {
    console.info('stdout: ' + data);
});
ls_var.stderr.on('data', function (data) {
    console.info('stderr: ' + data);
});
ls_var.on('close', function (code) {
    console.info('child process exited with code ' + code);
});


console.info("---- child_process spawn usage ---");
console.info("\n");