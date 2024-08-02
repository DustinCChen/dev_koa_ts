function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let completedCount = 0;
    const results = [];
    promises.forEach((p, index) => {
      // 确保p是一个Promise
      const promise = typeof p === "function" ? p() : Promise.resolve(p);
      promise
        .then((value) => {
          results[index] = value;
          completedCount++;
          if (completedCount === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}

// 使用立即解决的Promise模拟
myPromiseAll([
  () => Promise.resolve(1),
  () => Promise.resolve(2),
  () => Promise.resolve(3),
])
  .then((res) => console.log(res))
  .catch((rej) => console.log(rej));

myPromiseAll([]);
myPromiseAll([1, 2, 3]).then(
  (res) => console.log(res),
  (rej) => console.log(rej)
);
myPromiseAll([1, 2, Promise.reject(2.5), 3]).then(
  (res) => console.log(res),
  (rej) => console.log(rej)
);
