function testCallBack(callback) {
    console.log('hello');
    callback(1.03, fun);
}
let fun = async () => {
    return 1
}
async function after(data, callback) {
    console.log(`data: ${data}`);
    let output = callback();
    console.log(output);
}

testCallBack(after);