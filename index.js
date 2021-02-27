/**
 * Object
 */
const obj = {
    name: 'wayne',
    age: 12
}

Object.defineProperty(obj, 'sex', { value: 'male' })

for (const item in obj) {
    console.log(item)   // name, age
}

for (const item of obj) {   // error
    console.log(item)
}

/**
 * 可迭代对象
 */
Symbol.iterator in {}   // false
Symbol.iterator in []   // true


/**
 * Array
 */
Object.prototype.objCustom = function() {};
Array.prototype.arrCustom = function() {};

const arr = [1, 2]
arr.foo = 'hello';

for (const item in arr) {
    console.log(item)
}

for (const item of arr) {
    console.log(item)
}

/**
 * String
 */
const str = 'hello world'

for (const item in str) {
    console.log(item)
}

for (const item of str) {
    console.log(item)
}

/**
 * Set
 */
const set = new Set([1,2,3,4,5])

for (const item in set) {
    console.log(item)
}

for (const item of set) {
    console.log(item)
}