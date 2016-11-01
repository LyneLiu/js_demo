/**####################################################
*	 Array对象的相关函数及使用：Array是JavaScript的内置
* 对象，同时也是一个构造函数，可以用来生成新的数组。
* #####################################################
*/

/*Array作为构造函数，行为很不一致，所以不建议使用构造函数生成新数组，直接使用字面量是更好的做法*/

// bad
var arr = new Array(1,2)

// good
var arr = [1,2]

/*Array.isArray函数用来判断一个值是否是数组*/
var a = [1,2,3]

typeof a	// “object”
Array.isArray(a)	// true

/*valueOf方法返回数组本身*/
var a = [1, 2, 3];
a.valueOf() // [1, 2, 3]

/*toString方法返回数组的字符串形式*/
var a = [1, 2, 3];
a.toString() // "1,2,3"

var a = [1, 2, 3, [4, 5, 6]];
a.toString() // "1,2,3,4,5,6"

/*push()方法在数组的末端添加一个或多个元素，并返回添加新元素后的数组长度。注意：该方法会改变原数组*/
var a = [];

a.push(1) // 1
a.push('a') // 2
a.push(true, {}) // 4
a // [1, 'a', true, {}]

//假如有两个数组，如何实现数组的合并呢？apply方法可以使用参数数组的方式执行
a = [1,2,3]
b = [4,5,6]

a + b	// "1,2,34,5,6"
/*以下两者的不同是push会改变数组a，而concat不会改变数组a*/
Array.prototype.push.apply(a,b)	// [1, 2, 3, 4, 5, 6]	
a.concat(b)	// [1, 2, 3, 4, 5, 6]

/*pop()方法删除数组的最后一个元素，并返回该元素。注意：该方法会改变原数组*/
var a = ['a', 'b', 'c'];

a.pop() // 'c'
a // ['a', 'b']

[].pop() // undefined —— 说明：对空数组使用pop方法，不会报错，而是返回undefined

/*join()方法以参数作为分隔符，将所有数组成员组成一个字符串返回。如果不提供参数，默认用逗号分隔；
如果数组成员是undefined或null或空位，会被转成空字符串。
思考：字符串如何转换为数组？一种方法是charAt()*/
"hello".match(/./g)		// ["h", "e", "l", "l", "o"]

var a = [1, 2, 3, 4];

a.join(' ') // '1 2 3 4'
a.join(' | ') // "1 | 2 | 3 | 4"
a.join() // "1,2,3,4"


/* #####################################################
*	concat、shift、unshift、reverse、slice、splice、sort、
*	map、filter、forEach、some、every、reduce、reduceRight、
*	indexOf、lastIndexOf、链式使用
* #####################################################
*/

