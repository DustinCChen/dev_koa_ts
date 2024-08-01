console.info("----child_process exec usage ---");
console.info("\n");

import * as child_process from "child_process";

const exec = child_process.exec;
exec("ls -l", (error, stdout, stderr) => {
    console.info(stdout);
    console.info(stderr);
    console.info(error);
});

const child = exec("cat process-exec-usage.js | wc -l", (error, stdout, stderr) => {
    console.info(stdout);
    console.info(stderr);
    console.info(error);
});


const child2 = exec("cat process-exec-usage.js", (error, stdout, stderr) => {
    console.info("child2 process-exec-usage.js");
    console.info(stdout);
    console.info(stderr);
    console.info(error);
});





