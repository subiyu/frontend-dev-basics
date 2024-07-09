/**
 * Arrow Function
 */

const power = function(x) {
    return x*x;
}

const nums = [1, 2, 3, 4, 5];
nums.forEach(function(e) {
    process.stdout.write(`${e}: ${power(e)}\t`);  // 터미널 용
});

// ex1
console.log("\n=====================")
nums.forEach(function(e) {
    
    // const result = (function(x) {
    //     return x * x;
    // })(e);

    // const result = ((x) => {
    //     return x * x;
    // })(e);

    const result = (x => x * x)(e);

    process.stdout.write(`${e}: ${result}\t`);  // 터미널 용
});

// f = function(a) {
//     return a*a;
// }
// (a) => {return a*a}

// const f = function() {}
// const f = () => {}

// ex2
console.log("\n=====================")
nums.forEach(function(e) {
    process.stdout.write(`${e}: ${(x => x * x)(e)}\t`);
});

// ex3
console.log("\n=====================")
nums.forEach(e => process.stdout.write(`${e}: ${(x => x * x)(e)}\t`));

// ex4: this를 어휘상에서 바인딩 할 수 있다.
console.log("\n=====================")
const dooly = {
    name : '둘리',
    friends: ['또치', '도우너', '마이콜'],
    printFriends: function() {
        this.friends.forEach((friend) => {
            console.log(`${friend}의 친구 ${this.name}`);
        });
    }
}

dooly.printFriends();