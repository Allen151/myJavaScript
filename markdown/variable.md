# 变量可以包含的数值类型：基本类型和引用类型   

JavaScript的变量与其他语言的变量有很大的区别，JavaScript的变量是松散类型，意思是变量名只是在某个时间保存特定的值的一个名称而已。定义一个变量的时候不用指定它以后要用来放置什么类型的数据，随时可以改变，看似是很强大很易用，但是实际上要复杂得多，好好学习一下。    


本文档的目录
  - 基本类型和引用类型的值  
  - 动态的属性  
  - 复制变量  
  - 传递参数  
  - 检测类型  
  
## 基本类型和引用类型的值  
ECMAScript的变量存放的数据的数据类型有两种，其中一种是基本类型，另一种是引用类型。  
- 基本类型  
  Undefined、Null、Boolean、Number和String这五种是基本数据类型，将一个值赋给变量时，解析器必须确定这个值是基本类型还是引用类型，如果是基本类型就是按值访问——可以操作保存在变量中的实际的值。  
- 引用类型  
  对象数据类型是引用类型，引用类型的值是保存在对象中的。~~C及类C语言是可以直接访问内存中的位置，也就是说能操作对象的内存空间~~。但JavaScript不能这么干，它只能通过操作对象的引用访问，而不是操作实际的对象。所以，引用类型的值是按引用访问的。  

**注意**：  
很多语言中String数据类型是以对象的形式来表示的，因此被认为是引用类型。**但是在ECMAScript中，String数据类型不是引用类型。**

## 动态的属性  
定义基本类型数值和引用类型数据类似，但是操作就有很大的不同了。  
- 引用类型的值我们可以动态地添加属性与方法，例：  
```javascript
<script type="text/javascript">
	var person = new Object() ; //定义一个对象  
	person.name = "Nicholas" ;//动态地添加对象的属性  
	alert(person.name);			//Nicholas
</script>
```
上面的代码，先创建一个对象存放于`person`变量中，动态地添加`person`对象的`name`属性值为`Nicholas`，最后用`alert(person.name);`输出动态添加的值。如果对象不被销毁，这个属性将一直存在。  
- 基本类型就不能动态添加属性，虽然不会报错，但是无效，如下：  
```javascript
<script type="text/javascript">
	var name = "Nicholas" ;//基本类型值
	name.age = 20 ;  //动态添加属性
	alert(name.age);  //undefined
</script>
```
引用类型值可以动态添加属性，基本类型值不可以动态添加属性。  
## 复制变量  
从一个变量向另一个变量复制值的时候，基本类型的值和引用类型的值也不同。
- 基本类型  
  如果用一个变量向另一个变量赋值，会先将第一个变量的值复制多一份，把副本赋值给第二个变量，两个变量的值相互独立，互不影响。如：  
  ```javascript
  <script type="text/javascript">
	var num1 = 2 ;
	var num2 = num1 ; 
	num2 = 10 ;  //改变num2
	alert(num1);//num1的值不变
  </script>
  ```
  
- 引用类型  
  当一个引用类型的变量向另一个变量赋值的时候，也是复制一份值放到另一个变量，不同的是这一份值是一个指针，这两个指针指向同一个放在堆内存中的对象。即两个变量两个指针一个对象，所以改变任何一个变量的对象的值，另一个变量的值也改变。  
  ```javascript
  <script type="text/javascript">
	var person1 = new Object() ;
	var person2 = person1 ;
	person2.name = "Nicholas" ; //第二个变量增加name属性
	alert(person1.name);  //第一个变量也有name属性了
  </script>
  ```
## 传递参数  
ECMAScript中所有函数的参数都是按值传递的。基本类型的参数传递比较好理解，跟两个变量赋值一样，把值复制出来一个副本传递给函数。而引用类型参数的传递跟引用类型的变量的复制一样，但是不好理解。访问变量有按值访问和按引用访问两种，而参数只能按值传递。  
- 基本类型的参数传递  
把全局变量`count`的值复制一个副本`20`赋给`num`，之后`num`的值跟`count`的值互不影响。`count`与`num`仅仅是有相同的值`20`，相互之间再也没有什么多余的关系了。假如是按引用传递，那`num`的值加`10`的时候`count`的值也应该加`10`。  
```javascript
<script type="text/javascript">
	function addTen(num){
		num += 10 ;
		return num ;
	}
	var count = 20 ;
	var result = addTen(count) ;
	alert(count);  //20
	alert(result);  //30
</script>
```
- 引用类型的参数传递  
引用类型的参数传递时，是把`person`的指针复制一个副本，把副本的值传递给函数的参数`obj`，这就叫**按值传递**。在函数内部增加`obj`对象的`name`属性时，是通过这个指针的值来**按引用访问**的，两个不同的指针指向同一个对象，按引用访问对象最终只能`person.name = "Nicholas"`。  
```javascript
<script type="text/javascript">
	function setName(obj){
		obj.name = "Nicholas" ;//增加局部对象的name属性
	}

	var person = new Object();//全局对象
	setName(person);//传递引用类型参数
	alert(person.name);//全局的对象也改变
</script>
```
然后就造成这样一种现象，在函数内部修改`obj.name = "Nicholas" ;`，函数外部`person.name`也有所反映，~~这是按引用传递的效果~~。原因是`person`与`obj`指向的堆内存中的对象只有唯一的一个，而且是全局对象。然后有很多开发人员错误地认为：**~~在局部作用域修改的对象在全局作用域中反映出来，这就说明参数是按引用传递的。~~**我们再看一个例子：
```javascript
<script type="text/javascript">
	function setName(obj){
		obj.name = "Nicholas" ;//增加局部对象的name属性
		obj = new Object() ;  //重新定义一个对象
		obj.name = "Tony" ;		//为对象添加属性
	}

	var person = new Object();//全局对象
	setName(person);//传递引用类型参数
	alert(person.name);//Nicholas
	//找不到obj对象，局部对象在函数执行完就被销毁
	alert(obj.name);
</script>
```
`obj.name = "Nicholas" ;`对旧对象添加属性，`obj = new Object() ;`定义新的对象，`obj.name = "Tony" ;`新的对象的属性。`alert(person.name);`最后输出查看`person`对象是新属性还是旧的属性。**~~如果是按引用传递参数~~**:`obj`定义新对象的时候，`person`也应该改变为指向新对象，因为引用传递参数意思是局部变量总能反映到全局变量中。而最后`alert(person.name);`是`Nicholas`说明函数内部修改了参数的值，但原始的引用没有改变，这是按值传递参数。实际上重新定义`obj`对象那一刻起，`obj`对象就是局部对象了，局部对象在函数执行完后立即被销毁，后面再输出就找不到对象了。  
## 检测类型  
数据类型有两种，基本类型和引用类型，那么我们检测的时个也是用两种方法的。  
- 基本类型  
`typeof`操作符是确定一个基本类型变量的最好工具。用来判断对象就不好用了。
```javascript
<script type="text/javascript">
	var s = "Nicholas" ;
	var b = true ;
	var i = 22 ;
	var u ;
	var n = null ;
	var o = new Object();

	alert(typeof s); //String 
	alert(typeof b); //boolean
	alert(typeof i); //number
	alert(typeof u); //undefined
	alert(typeof n); //object
	alert(typeof o); //object
</script>
```  
- 引用类型  
ECMAScript提供的`instanceof`操作符能判断给定的对象与判断的对象类型是否一至。如果一至返回`true`。使用方法如下：
```javascript
<script type="text/javascript">
	alert(person instanceof Object);
	alert(colors instanceof Array);
	alert(pattern instanceof RegExp);
</script>
``` 
所有的引用类型都是`Object`的实例，所以如果用`instanceof`检测一个引用类型和`Object`构造函数时，始终返回`true`。如果用来`instanceof`检测基本类型，始终返回`false`，因为基本类型不是对象。 

## 总结  
1. ECMAScript有两种类型的值。
2. 引用类型能够动态添加属性。  
3. 两种类型复制变量的方式不同。  
4. 参数只能是按值传递，访问可以是按值访问和按引用访问。  
5. 确定一个值是哪种基本类型可以使用typeof操作符，而确定一个值是哪种引用类型可以用instanceof操作符。  
6. 基本类型的数值在内存中占有固定大小的空间，因此被保存在栈内存中。  
7. 从一个变量向另一个变量复制基本类型的值，会创建这个值的副本。  
8. 引用类型的值是对象，保存在堆内存中。  
9. 包含引用类型的变量实际上包含的并不是对象本身，而是指向对象的指针。  
10. 从一个变量向另一个变量复制引用类型的值，复制的其实是指针，因此两个变量指向同一个对象。  
