# dev_koa_ts
* tsc -v
* ./node_modules/.bin/tsc -v
* ./node_modules/.bin/tsc --init # create tsconfwig.json
* package.json的test在win系统跟*ux系统有所差异,
- win系统:"test": "set NODE_ENV=test && set PORT=7788 && jest",
- *ux系统:"test": "NODE_ENV=test PORT=7788 jest"  

-  pnpm run  test
-  pnpm run  test:watch