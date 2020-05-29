
const fp = require('lodash/fp')
const cars = [
    {name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true},
    {name: "Spyker C12 zagato", horsepower: 650, dollar_value: 648000, in_stock: false},
    {name: "Jaguar XKR-S", horsepower:550, dollar_value: 132000, in_stock: false},
    {name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false},
    {name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true},
    {name: "Pagani Huayra", horsepower:700, dollar_value: 1300000, in_stock:false}
]
//第一题
let fLastInStock = fp.flowRight(fp.prop('in_stock'), fp.last)
console.log('1-1: ',fLastInStock(cars))


//第二题
const fFirstName = fp.flowRight(fp.prop('name'), fp.first)
console.log('1-2: ',fFirstName(cars))


// 第三题
let _average = function(xs) { return fp. reduce(fp.add, 0, xs) / xs.length }
// <-无须改动

let averageDollarValue =fp.flowRight(_average, fp.map(fp.prop('dollar_value')))

console.log('1-3: ',averageDollarValue(cars))

//第四题
let _underscore = fp.replace(/\W+/g, '_')
//<--无须改动，并在sanitizeNames中使用它

let sanitizeNames = fp.map(fp.flowRight(_underscore, fp.toLower, fp.prop('name')))
console.log('1-4: ',sanitizeNames(cars))
