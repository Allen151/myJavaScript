# 引用对象  
这一章我们深入学习各种引用类型对象   
引用类型的值也叫对象，是引用类型的一个实例。引用类型是一种数据结构，用于将数据和功能组织在一起。在javascript中，我们不把对象称为类，虽然javascript从技术上讲也是一门面向对象语言，但是它没有传统面向对象语言所支持的类和接口等基本结构。引用类型有时候也被称为对象定义，因为它们描述的是一类对象所具有的属性和方法。**引用类型与类并不是相同的概念**，我们在javascript中不说类。  
对象是某个引用类型的实例，用new加一个构造函数来创建，构造函数本身就是一个函数，这个函数是为了创建对象而定义的。创建对象的代码：
```javascript
var person = new Object();
```
javascript提供了很多原生引用类型，如目录所示的那些，以便开发人员用以实现常见的计算任务。
目录：
- [Object类型]  
- [Array类型]
- [Date类型]  
- [RegExp类型] 
- [Function类型]
- [基本包装类型] 
- [单体内置对象]  
---

## Object类型  
虽然Object的实例不具备很丰富的功能，但是对于在应用程序中存储和传输数据而言，这是很好用的。  
创建Object实例有两种方式。
- 使用操作符后跟Object构造函数  
```javascript
<script type="text/javascript">
	var person = new Object();
	person.name = "Nicholas" ;
	person.age = 20 ; 
	alert(person);  //[object Object]
</script> 
```
- 使用对象字面量表示法，作用：简化包含大量属性的对象创建过程。注意符号  
```javascript
<script type="text/javascript">
	var person = {
		name: "Nicholas",
		age: 20
	};
	alert(person);  //[object Object]
</script> 
```
使用字面量定义对象时，属性名也可以是字符串，如下例子：  
```javascript
<script type="text/javascript">
	var person = {
		"name": "Nicholas",
		"age": 20
	};
	alert(person);  //[object Object]
</script> 
```
使用字面量定义对象时，如果大括号里面留空，定义的对象只包含默认的属性和方法，如下所示：  
```javascript
<script type="text/javascript">
	var person = {} ;
	person.name = "Nicohlas" ;
	person.age = 20 ;
	alert(person);  //[object Object]
</script> 
```
对象的字面量语法在只考虑对象属性名的可读性时使用，实际上这种方法在使用时不会调用`Object`构造函数。  
开发人员更喜欢用字面量的方法来定义一个对象，因为这种语法的代码少，而且能给人封闭数据的感觉。**字面量语法定义对象更容易向函数传递大量可选参数。**   

如下所示，方法displayInfo()函数可以根据参数不同做出不同的显示，过程不会有任何报错。   
```javascript
<script type="text/javascript">
	function displayInfo(args){
		var output = "" ;
		if(typeof args.name == "string"){//如果args.name参数满足
			output = "Name: " + args.name + "\n" ;
		}
		if(typeof args.age == "number"){//如果args.age参数满足
			output += "Age: " + args.age + "\n" ; 
		}
		alert(output);//最后输出得到的参数
	}

	displayInfo({//传递不同的参数个数
		name: "Nicholas" ,
		age: 20 
	});

	displayInfo({
		name: "Greg"
	});
</script> 
```
由上面的例子，我们知道，对于需要接收大量参数的函数，最好的做法是：对必需值使用命名参数，用字面量来封闭多个可选参数。    
前面的例子都是用点表示法来访问对象的属性，还有一种方法是用方括号来访问，属性的名称要以字符串的形式放在方括号中。如下所示：  
```javascript
<script type="text/javascript">
	var person = {
		name: "Nicholas" ,
		age: 20 
	};
	alert(person["name"]); //Nicholas
	alert(person.name);  //Nicholas
</script> 
```
以上两种方法的功能一样，但是括号访问属性有一个好处是可以把属性名存放在一个变量中，再通过变量来访问属性，例如：  
```javascript
<script type="text/javascript">
	var person = {
		"first name": "Nicholas" ,
		age: 20 
	};
	var propertyName = "first name" ;
	alert(person[propertyName]); //Nicholas
</script>
```
这么干的好处是什么呢？属性名为`first name`，中间有个空字符，这是非法命名，用点方法来访问就会报错，但是用方括号的方法访问完全没问题。  
在对象里的属性名是以字符串的形式存在的，所以属性名是可以用关键字，保留字和非数字非字母的非法字符串来表示的，但是这种命名在用点表示法来访问就会报错，用方括号来访问就不会有问题，这是方括号存在的意义。  
**除非必须用方括号访问，否则我们都是使用点表示法访问的。这样符合大家的习惯和美观。**  
## Array类型
## Date类型  
## RegExp类型 
## Function类型
## 基本包装类型 
## 单体内置对象
## 总结









<!--超连接-->
[Object类型]: ./quote.md#Object类型  
[Array类型]: ./quote.md#Array类型
[Date类型]: ./quote.md#Date类型
[RegExp类型]: ./quote.md#RegExp类型
[Function类型]: ./quote.md#Function类型
[基本包装类型]: ./quote.md#基本包装类型
[单体内置对象]: ./quote.md#单体内置对象