// const delay = (s) => {
//   return new Promise(resolve => setTimeout(resolve,s));
// };

// delay().then(() => {

//   console.log(1);     // 顯示 1
//   return delay(1000); // 延遲ㄧ秒

// }).then(() => {

//   console.log(2);     // 顯示 2
//   return delay(2000); // 延遲二秒

// }).then(() => {

//   console.log(3);     // 顯示 3

// });

async function A(){           // ~ 開頭表示直接執行這個 function，結尾有 ()
    const delay = (s) => {
      return new Promise(function(resolve){  // 回傳一個 promise
        setTimeout(resolve,s);               // 等待多少秒之後 resolve()
      });
    };
  
    console.log(1);      // 顯示 1
    await delay(1000);   // 延遲ㄧ秒
    console.log(2);      // 顯示 2
    await delay(200);   // 延遲二秒
    console.log(3);      // 顯示 3
}
  
A();