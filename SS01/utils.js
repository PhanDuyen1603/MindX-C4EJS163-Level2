function productInfo(name, price) {
    return `San pham: ${name}, Gia: ${price}`;
}

function greet(name){
    return `Hello ${name}`;
}

function toSum(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
}

function sum2(...n){
    let sum = 0;
    for(let i of n){
        sum += i;
    }
    return sum;
}

function getUserInfo(user){
    return `Name: ${user.name}, Age: ${user.age}`;
}
export { productInfo, greet, toSum, sum2, getUserInfo };
