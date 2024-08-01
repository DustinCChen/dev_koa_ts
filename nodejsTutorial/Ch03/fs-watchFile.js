console.info("---- fs.watchFile ---");
console.info("\n");

import fs from "fs";
import process from "process";
import * as child_process from "child_process";
const exec = child_process.exec;
process.chdir(process.cwd() + "\\watchFile");