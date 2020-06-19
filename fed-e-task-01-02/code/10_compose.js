//如果一个函数要经过多个函数处理才能得到最终只，这个时候可以把中间过程的函数合并成一个函数

//函数组合展示

// const compose = (f, g) => (value) => f(g(value))

// const reverse = array => array.reverse()

// const first = arrays => array[0]

// const getFirst = compose(first, reverse)
// console.log(getFirst([1, 2, 3, 4]))

//lodash 中的函数组合
//flow  flowRight从右到左执行， 用的还多一些
const _ = require('lodash')

// const reverse = array => array.reverse()
// const first = array => array[0]
// const toUpper = s => s.toUpperCase()

// // const f = _.flowRight(toUpper, first, reverse)
// // console.log(f(['a', 'b', 'c', 'd']))

// //模拟 flowRight
// const compose = (...args) => value => args.reverse().reduce((acc, fn) => fn(acc), value)

// const f = compose(toUpper, first, reverse)
// console.log(f(['a', 'b', 'c', 'd']))

//函数的组合率

const f = _.flowRight(_.toUpper, _.first, _.reverse)
// const f = _.flowRight(_.toUpper, _.flowRight(_.first, _.reverse))
// const f = _.flowRight(_.flowRight(_.toUpper,_.first), _.reverse)
console.log(f(['a', 'b', 'c', 'd']))