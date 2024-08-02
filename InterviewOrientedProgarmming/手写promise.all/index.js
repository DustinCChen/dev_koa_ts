Promise.myAll = function (proms) {
  let res, rej;
  const p = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });
  let i = 0;
  const result = [];
  //不能用Push，因为要保证数组的顺序
  for (const prom of proms) {
    const index = 1;
    i++;
    // Promise.resolve(prom); //全部转换为promise
    Promise.resolve(prom).then((data) => {
      //1.将完成的数据加入到最终结果，判断是否全部完成
      //2.完成一个数据后，i--
      //3.当i=0时，将最终结果返回
      result[index] = data;
      i--;
      if (i === 0) {
        res(result);
      }
    }, rej);
  }
  if (i === 0) {
    // return Promise.resolve([]);
    res([]);
  }

  return p;
};
// Promise.myAll([]);
Promise.myAll([1, 2, 3, 4]).then(
  (res) => console.log(res),
  (rej) => console.log(rej)
);
Promise.myAll([1, 2, Promise.reject(2.5), 3]).then(
  (res) => console.log(res),
  (rej) => console.log(rej)
);

Promise.myAll([1, 2, Promise.reject(2.5), Promise.reject(4), 3]).then(
  (res) => console.log(res),
  (rej) => console.log(rej)
);

/*
传递的proms不一定是个数组，而是一个任何可以迭代对象，比如一个类似数组的对象，
数组使用.length判断，字典使用.size判断
其中一个被拒绝，整个被拒绝
拒绝多次，以第一次为准
*/
