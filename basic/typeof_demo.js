/**####################################################
*	 通过调用Object.prototype.toString方法，判断这个值的类型
* #####################################################
*/

/*获取类型*/
var type = function(o){
	var s = Object.prototype.toString.call(o);
	var result = s.match(/\[object (.*?)\]/);
	console.log(result);
	return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};

type({}); // "object"
type([]); // "array"
type(5); // "number"
type(null); // "null"
type(); // "undefined"
type(/abcd/); // "regex"
type(new Date()); // "date"

/*判断类型*/
['Null',
 'Undefined',
 'Object',
 'Array',
 'String',
 'Number',
 'Boolean',
 'Function',
 'RegExp',
 'NaN',
 'Infinite'
].forEach(function (t) {
	/*type作为函数对象，添加属性*/
    type['is'+t] = function (o) {
        return type(o) === t.toLowerCase();
    };
});

type.isObject({});
