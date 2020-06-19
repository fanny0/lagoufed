//柯里化演示

// const checkAge = min => (age => age >= min)

// const checkAge18 = checkAge(18)
// const checkAge22 = checkAge(22)

// console.log(checkAge18(20))
// console.log(checkAge22(20))

//lodash 中的 curry 基本使用
// const _ = require('lodash')


//柯里化原理
const curry = (f) => {
    return function curriedFun(...args){
        if(args.length < f.length ){
            return (...args2) => curriedFun(...[...args, ...args2])
        }
        return f(...args)
    } 
}        

const getSum = (a, b, c) => a + b + c
const curried = curry(getSum)
// const curried = _.curry(getSum)

console.log(getSum(1, 2, 3))
console.log(curried(1, 2, 3))
console.log(curried(1, 2))
console.log(curried(1, 2)(3))
console.log(curried(1)(2)(3))

// 柯里化案例



