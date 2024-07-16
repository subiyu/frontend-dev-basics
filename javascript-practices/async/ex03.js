/**
 *  promise 지원 비동기 함수 사용법 II: async ~ await
 */

const {asyncFn02} = require('./async-fns');

// test: success
//const result = await asyncFn02("params~~")  //await 쓰면 비동기(console.log()가 먼저 실행이 됨)인데 바로 값 세팅 가능
const fn = async (param) => {
    try {
        const result = await asyncFn02(param);
        console.log(result);
    } catch(err) {
        console.error(err);
    }
}

// test: fail
// asyncFn02(null)
//     .then((result) => console.log(result))
//     .catch((error) => console.error(error));

fn('params~');
fn(null);

console.log('wait......');