// 2723 COMPLETED 🟢

var addTwoPromises = async function (promise1, promise2) {
    const pro1 = await promise1;
    const pro2 = await promise2;
    return pro1 + pro2;
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4
