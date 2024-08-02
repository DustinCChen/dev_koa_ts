Promise.myAll = function (proms) {
    let res, rej;
    const p = new Promise((resolve, reject) => {
      res = resolve;
      rej = reject;
    });
    let i = proms.length; // 初始化i为proms的长度
    const result = new Array(i); // 初始化结果数组，预留空间以保持顺序
    let hasRejected = false; // 添加一个标志来追踪是否有Promise被拒绝
  
    for (let index = 0; index < i; index++) {
      const prom = proms[index];
      Promise.resolve(prom).then((data) => {
        // 将完成的数据加入到最终结果
        result[index] = data;
        i--;
        // 当所有Promise都已完成或被拒绝后，结束
        if (i === 0) {
          if (!hasRejected) {
            res(result);
          } else {
            // 如果有Promise被拒绝，这里应调用reject，但需注意reject只应被调用一次
            // 这里简化处理，实际情况可能需要更复杂的逻辑来处理多个reject
            rej("At least one promise was rejected");
          }
        }
      }, (error) => {
        // 只要有Promise被拒绝，就设置标志，并结束循环
        if (!hasRejected) {
          hasRejected = true;
          rej(error);
        }
        // 注意：实际此处的i--不需要，因为我们已经确定要reject了
      });
    }
  
    // 初始时无需直接调用res([])，因为那会在循环开始前就结束Promise
    return p;
  };
  
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
