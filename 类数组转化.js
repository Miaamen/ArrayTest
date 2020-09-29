// 1. 使用 Arrayfrom() 方法进行数组转换
Array.from(document.querySelectorAll('div'))

// 2. 使用 Array.prototype.slice.call() 进行数组转换
Array.prototype.slice.call(document.querySelectorAll('div'))

// 3. 使用扩展运算符也可以进行数组转换
[...document.querySelectorAll('div')]

// 4. 使用concat([], 类数组) 也可以进行数组转换
Array.prototype.concat([], document.querySelectorAll('div'));
