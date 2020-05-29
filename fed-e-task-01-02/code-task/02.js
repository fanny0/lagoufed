
const fp = require('lodash/fp')
const { Maybe, Container } = require('./support')

//2-1使用fp.add(x, y)和fp.map(f, x)创建一个能让functor里的值增加的函数ex1

let maybe = Maybe.of([5, 6, 1])
let exl = maybe.map(fp.map(fp.add(1)))
console.log(exl._value)

//2-2实现一个函数ex2，能够使用fp.first获取列表的第一个元素
let xs = Container.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do']) 
let ex2 = xs.map(fp.first)
console.log(ex2._value)

//2-3 实现-一个函数ex3，使用safeProp和fp.first找到user的名字的首字母
let safeProp = fp.curry(function (x, o) {
    return Maybe.of(o[x])
})
let user = { id: 2, name: "Albert"}


let ex3 = safeProp('name', user)
            .map(fp.first)
    
console.log(ex3._value)

//使用Maybe重写ex4，不要有if语句

// let ex4 = function (n) {
//     if (n) { return parseInt(n) }
// }

let ex4 = function(n){
    return Maybe.of(n)
        .map(parseInt)
}

console.log(ex4('7')._value)