function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}
function back() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}
function hell() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}

async function exec() {
  let user = await call("kim");
  console.log(user + "반가워");

  let back_result = await back();
  console.log(back_result + "을 실행했구나");

  let hell_result = await hell();
  console.log("여기는" + hell_result);
}

exec();
