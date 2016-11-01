/**####################################################
*	 No.1 for...in获取对象属性及属性值
* #####################################################
*/
var o = {a: 1, b: 2, c: 3};

/*遍历对象的属性*/
for(var key in o){
	console.log(key);
}

/*遍历属性对应的值*/
for (var i in o) {
  console.log(o[i]);
}

/**####################################################
*	 No.2 Object对象的创建
* #####################################################
*/

/*创建一个新的对象，与字面量的写法等价：o = {}*/
var o = new Object();

var o1 = {a:1};

var o2 = new Object(o1);
if(o1 === o2){
	console.log("o1和o2是同一个对象");
}

if(new Object(123) instanceof Number){
	console.log("Object作为构造函数使用时，可以接收一个参数。如果这个参数是一个对象，则直接返回这个对象；如果是一个原始类型的值，则返回该值对应包装对象");
}

Object() // 返回一个空对象
Object() instanceof Object // true

Object(undefined) // 返回一个空对象
Object(undefined) instanceof Object // true

Object(null) // 返回一个空对象
Object(null) instanceof Object // true

Object(1) // 等同于 new Number(1)
Object(1) instanceof Object // true
Object(1) instanceof Number // true

Object('foo') // 等同于 new String('foo')
Object('foo') instanceof Object // true
Object('foo') instanceof String // true

Object(true) // 等同于 new Boolean(true)
Object(true) instanceof Object // true
Object(true) instanceof Boolean // true

/**####################################################
*	 No.3 Object对象上面部署方法
*######################################################
*/
/*直接在Object对象上面定义一个print方法*/
Object.print = function(o){
	console.log(o);
}

var o = new Object();
o.name = "luffy";
Object.print(o);

/*部署在Object.prototype对象：所有构造函数都有一个prototype属性，指向一个原型对象。
Note：所有定义在Object.prototype对象上面的属性和方法，将被所有实例对象共享*/
Object.prototype.print = function(){
	console.log(this);
	console.log(arguments);
}

var o = new Object();
o.name = "zoro";
/*Note:JS覆盖原则，当出现多个同名函数时，以最后一个定义的为准，无论在哪调用该函数（即使在最后一个定义之前调用），也是调用最后一个定义的函数*/
o.print('prototype','demo');

/**####################################################################
*	 No.4 Object对象的静态方法：“静态方法”指部署在Object对象自身的方法
*	 Object.keys()：返回可枚举的属性
*	 Object.getOwnPropertyNames()：返回不可枚举的属性
*	 Object.getOwnPropertyDescriptor(obj, prop)：获取某个属性的attributes对象 
*	 Object.defineProperty()：通过attributes对象，定义某个属性
*	 Object.defineProperties()：通过attributes对象，定义多个属性
*	 Object.getOwnPropertyNames()：返回直接定义在某个对象上面的全部属性的名称
*	 Object.preventExtensions()：防止对象扩展 
*	 Object.isExtensible()：判断对象是否可扩展
*	 Object.seal()：禁止对象配置
*	 Object.isSealed()：判断一个对象是否可配置
*	 Object.freeze()：冻结一个对象
*	 Object.isFrozen()：判断一个对象是否被冻结
*	 Object.create()：生成一个新对象，并添加该对象的原型
*	 Object.getPrototypeOf()：获取对象的Prototype对象
*######################################################################
*/


/**####################################################
*	 No.5 Object.prototype对象上面部署的方法
*	 valueOf()：返回当前对象对应的值。
*	 toString()：返回当前对象对应的字符串形式。
*	 toLocaleString()：返回当前对象对应的本地字符串形式。
*	 hasOwnProperty()：判断某个属性是否为当前对象自身的属性，还是继承自原型对象的属性。
*	 isPrototypeOf()：判断当前对象是否为另一个对象的原型。
*	 propertyIsEnumerable()：判断某个属性是否可枚举。
*######################################################
*/
