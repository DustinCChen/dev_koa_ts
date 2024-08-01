console.info("---- util.format ---");
console.info()

import * as util from "util";
console.info(util.format("%s %s", "hello", "world"));
console.info(util.format("%s:%s", "foo"));
console.info(util.format("%s:%s", "foo","bar"));
console.info(util.format("%s:%s", "foo","bar","baz"));
console.info(util.format(1,2,3));
