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
javascript中的数组是第二常用的引用类型了，javascript中的数组与其他语言的数组有两个比较大的区别，一是ECAMScript里的数组每一项可以保存任何类型的数据，也就是说第一项是字符串，第二项可以是数字，第三项可以是对象，也可以是数组，以此类推。二是ECAMScript中的数组的长度可以动态调整，即可以随着数据的添加自动增长以容纳新的数据。  
创建数组的方式也是有两种。  
- 使用Array构造函数  
```javascript
<script type="text/javascript">
	var colors = new Array() ;
</script> 
```
如果预先知道数组的长度也是可以给数组设定长度，但是不会影响后面数组要动态调整。而设定的这个值会自动成为该值的`length`属性。  
```javascript
<script type="text/javascript">
	var colors = new Array(20) ;
	alert(colors.length);  //20
</script> 
```
也可以在声明数组的同时，通过构造函数给数组初始化n项值，如下所示：  
```javascript
<script type="text/javascript">
	var colors = new Array("red", "blue", "green") ;
</script> 
```
省略`new`关键字也是可以的：
```javascript
<script type="text/javascript">
	var colors = Array(20) ;
	alert(colors.length);  //20
</script> 
```
- 数组字面量表示法  
```javascript
<script type="text/javascript">
	var colors = ["red", "blue", "green"] ;
	alert(colors[1]);//blue
</script> 
```
在使用字面量表示法创建数组时，也不会调用`Array`构造函数。  
读取和设置数组的方法是使用方括号并提供从0开始的数字索引。跳的值将自动赋值为`undefined`，`lenght`属性总是返回一个0或大于0的数值。如：  
```javascript
<script type="text/javascript">
	var colors = ["red", "blue", "green"] ;//含三项值的数组
	alert(colors[1]);  //输出第2项数组  blue
	colors[2] = "black" ;//将第三项数组的数值改为“black”
	colors[5] = "brown" ;//动态添加数组项目数
	for(var i=0; i<colors.length; i++){
		document.write(colors[i]+"<br \>") ;//用循环输出各项
	}
</script> 
```
`length`属性比较有意思，影响力很大，可以通过设置其值来剪短数组的长度：  
```javascript
<script type="text/javascript">
	var colors = ["red", "blue", "green"] ;//含三项值的数组
	colors.length = 1 ;//设置colors数组的长度为1，多余的两项被剪掉了
	alert(colors[1]);  //第二项没值了，undefined
</script> 
```
如果将`length`值设置得比原来的大，则用`undefined`填满多出来的项。  
```javascript
<script type="text/javascript">
	var colors = ["red", "blue", "green"] ;//含三项值的数组
	colors.length = 5 ;//增加两项  
	for(var i=0; i<colors.length; i++){
		document.write(colors[i]+"<br />") ;
		/*
		输出结果：
			red
			blue
			green
			undefined
			undefined
		 */
	}
</script> 
```
利用`length`属性也可以向最后面添加数组的项：  
```javascript
<script type="text/javascript">
	var colors = ["red", "blue", "green"] ;//含三项值的数组
	colors[colors.length] = "black" ;  //长度是数值是新增项的下标
	colors[colors.length] = "brown" ;  
	for(var i=0; i<colors.length; i++){
		document.write(colors[i]+"<br />") ;
		/*
		输出结果：
			red
			blue
			green
			black
			brown
		 */
	}
</script>
```
---
下面细说数组的各种功能  
### 检测数组  
在变量的检测一节，我们说过检测基本类型的数据用`typeof`关键字，而检测引用类型的数据则用`instanceof`关键字，在这里我们将介绍多一种方法。  
- 老方法，如果判断正确就返回true  
```javascript
<script type="text/javascript">
	var colors = ["red", "blue", "green"] ;
	alert(colors instanceof Array);  //true
</script> 
```
但是这种老方法有一个问题，这种老方法是假定只有一个全局执行环境的，那如果网页中包含多个框架就不止一个全局执行环境了，从一个框架向另一个框架传递一个数组的话，那各自就有不同的构造函数。为了解决这个问题  
- 新方法，有些浏览器没实现这个方法，后面会学到人工实现这个方法。  
```javascript
<script type="text/javascript">
	var colors = ["red", "blue", "green"] ;
	if(Array.isArray(colors)){
		alert("colors是数组");
	}
</script> 
```
### 转换方法  
所有对象都有`toLocaleString()`，`toString()`，`valueOf()`方法，之前没提到过，那就让我们先到W3school去查找学习一下吧。  
- arrayObject.toLocaleString()  
  说明：
>首先调用每个数组元素的 toLocaleString() 方法，然后使用地区特定的分隔符把生成的字符串连接起来，形成一个字符串。

```javascript
<script type="text/javascript">
	var colors = ["red", "blue", "green"] ;
	document.write(colors.toLocaleString());//red,blue,green
</script> 
```
- toString()  
说明:
>当数组用于字符串环境时，JavaScript 会调用这一方法将数组自动转换成字符串。但是在某些情况下，需要显式地调用该方法。

```javascript
<script type="text/javascript">
	var colors = ["red", "blue", "green"] ;
	document.write(colors.toString());//red,blue,green
</script> 
```
- valueOf()  
定义和用法
>valueOf() 方法返回 Array 对象的原始值。
该原始值由 Array 对象派生的所有对象继承。
valueOf() 方法通常由 JavaScript 在后台自动调用，并不显式地出现在代码中

这里说一下`toLacaleString()`方法与`toString()`方法的区别,在字符串的环境下，数组会自动调用`toString()`方法将元素转换成字符串，而如果手动地调用`toLacaleString()`方法，数组就自动地去调用每个元素的`toLacaleString()`方法。  
还有一个方法`join()`也能将数组转换成字符串，不同处在于这个方法可以接收一个符号，用来分割各个元素。如果不传递参数则默认使用逗号，如：  
```javascript
<script type="text/javascript">
	var colors = ["red", "blue", "green"] ;
	document.write(colors.join("||")+"<br />");//red||blue||green
	document.write(colors.join("XXXX")+"<br />");//redXXXXblueXXXXgreen
</script> 
```
### 栈方法   
**栈**是一种LIFO（Last-In-First-Out后进先出）的数据结构，也就是新添加的最早被移除。而栈中的推入和弹出只发生在一个位置——栈的顶部。ECAMScript为数组提供了`push()`方法和`pop()`方法，以实现类似的行为。  
- `push()`接收任意数量的参数，把它们逐个添加到数组的尾部，返回修改后数组的`length`值。   
```javascript
<script type="text/javascript">
	var colors = ["red", "blue", "green"] ;
	var count = colors.push("black", "yellow");//增加2项
	alert(count);  //5  返回新数组的长度
	count = colors.push("purple");//再增加一项
	alert(count);//6  返回新数组的长度
</script>
```
- `pop()`方法移除数组最后一项，相当于令`length`减`1`，然后返回被移除的项。  
```javascript
<script type="text/javascript">
	var colors = ["red", "blue", "green"] ;
	var item = colors.pop();//移除最后一项
	alert(item);   //green
	for(var i=0; i<colors.length; i++){
		document.write(colors[i]+"<br />");//red   blue
	}
</script>
```
这两个方法是数组默认的方法，随便用，也可以跟数组的其他方法混着用。  
### 队列方法   
队列方法与栈方法不同，队列数据结构访问的规则是FIFO（First-In-First-Out,先进先出），在队列列表的末端添加项，从列表的前端移除项。用`push()`方法可以在队列的末端添加项了，我们还需要一个方法可以从列表的前端移除项。`shift()`方法能够移除数组中的第一项并返回该项，同时将`length`的值减`1`。
```javascript
<script type="text/javascript">
	var colors = new Array() ;
	var count = colors.push("red", "green");//推入两项
	alert(count); //2  
	var item = colors.shift();//删除第一项
	alert(item);//red  输出删除的项
	for(var i=0; i<colors.length; i++){
		document.write(colors[i]);//green 还剩下一项了
	}
</script> 
```
还有一个特别的方法——`unshift()`，与`shift()`方法相反，`unshift()`方法能在数组队列的前端添加任意个项，并返回新数组的长度。因此，将`pop()`方法与`unshift()`方法结合，可以从相反方向来模拟队列，即在队列前端推入，从队列的尾部移除。
```javascript
<script type="text/javascript">
	var colors = new Array() ;
	var count = colors.unshift("red", "yellow", "purple");//推入顺序red,yellow,purple
	alert(count);//3
	count = colors.unshift("blue");
	var item = colors.pop();
	alert(item);//purple
	for(var i=0; i<colors.length; i++){
		document.write(colors[i]+"<br />");
		/*已经删除最后一项了
			blue
			red
			yellow
		 */
	}
</script> 
```
### 重排序方法   
说到重排序方法可能你会想到reverse()和sort()。  
- `arrayObject.reverse()`方法用于颠倒数组中元素的顺序。该方法会改变原来的数组，而不会创建新的数组，**返回**新数组。
```javascript
<script type="text/javascript">
	var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] ;
	document.write(num.join("、")+"<br />");
	//0、1、2、3、4、5、6、7、8、9
	document.write((num.reverse()).join("。"));
	//9。8。7。6。5。4。3。2。1。0
</script> 
```
- `arrayObject.sort(sortby)`方法用于对数组的元素进行排序。在原数组上排序，**返回**新数组。如果没有参数则按按照字符编码的顺序进行排序，参数必须是函数。
>如果想按照其他标准进行排序，就需要提供比较函数，该函数要比较两个值，然后返回一个用于说明这两个值的相对顺序的数字。比较函数应该具有两个参数 a 和 b，其返回值如下：  
若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。  
若 a 等于 b，则返回 0。  
若 a 大于 b，则返回一个大于 0 的值。  

**函数中，如果第一个参数应该排在前面就返回负数，如果两个参数等级就返回`0`，如果第一个参数应该排在后面就返回正数。**  
例子一，按照字符排序：  
```javascript
<script type="text/javascript">
	var person = ["Tony", "Nicholas", "Allen", "Jene"] ;
	alert(person.join("、"));
	//Tony、Nicholas、Allen、Jene  
	alert((person.sort()).join("、"));
	//Allen、Jene、Nicholas、Tony
</script> 
```
例子二，按照数字顺序：  
```javascript
<script type="text/javascript">
	var person = [1, 4, 5, 32, 2, 6, 8, 6] ;
	alert(person.join("、"));
	//1、4、5、3、2、6、8、6 
	alert((person.sort()).join("、"));
	//1、2、32、4、5、6、6、8
</script> 
```
`32`并没有排在最后，因为`32`中的`3`应该是排在较前的。  
例子三，函数作为参数，按照大小排序。  
```javascript
<script type="text/javascript">
	function sortNumber(a,b){//将函数名作为参数传递给sort()即可
		if(a<b){
			return -1 ;
		}else if(a>b){
			return 1 ;
		}else{
			return 0 ;
		}
	}

	var person = [1, 4, 5, 32, 2, 6, 8, 6] ;
	alert(person.join("、"));
	//1、4、5、3、2、6、8、6 
	alert((person.sort(sortNumber)).join("、"));
	//1、2、4、5、6、6、8、32
</script> 
</body>
</html>
```
此时应该回头看前面引用的那段话。得到的值小于`0`，`a`就排在前面。  

### 操作方法   
- `arrayObject.concat(arrayX,arrayX,......,arrayX)`这个方法可以将多个数组的元素连接起来，原数组不改变，返回新的数组。如果没有参数，则仅仅是复制调用数组的副本。例如：  
```javascript
<script type="text/javascript">
	var number1 = [1, 4, 5, 32, 2, 6, 8, 6] ;
	var person = ["Nicholas", "Tony"]
	var number2 = number1.concat(person) ;
	//1,4,5,32,2,6,8,6,Nicholas,Tony
	alert(number2);
</script> 
```
- `arrayObject.slice(start,end)`从数组中截取部分元素，返回一个子数组，原数组不改变。`start`:是截取部分的始点(不包含该项)，如果是负数则从后面数起。`end`:是截取部分的终点，如果是负数同理，如果没有则截取到数组结束。
```javascript
<script type="text/javascript">
	var number = [1, 4, 5, 32, 2, 6, 8, 6] ;
	document.write(number.slice(2,5));//5, 32, 2
</script> 
```
如果想改变原数组用`splice()`方法。  
- `arrayObject.splice(index,howmany,item1,.....,itemX)`方法可以删除项、插入项、替换项。改变原来的数组，返回被删除的元素组成的数组。有三个参数。分别是起始项，删除元素数量，插入的元素。
### 位置方法     
ECMAScript5为数组实例添加了两个位置方法：`indexOf()`、`lastIndexOf()`。这两个方法都有两个参数：要查找的项和（可选）查找起点位置的索引。其中`indexOf()`从数组的0位置开始向后查找，`lastIndexOf()`则从数组的末尾开始向前查找。两种方法都返回要查找的项在数组中的位置，如果没找到就返回`-1`。在比较查找的是否符合时，用的是全等操作符，也就是说必须严格相等。 
```javascript
<script type="text/javascript">
	var number = [1, 5, 4, 32, 2, 6, 4, 6] ;
	alert(number.indexOf(4,1));//2
	alert(number.lastIndexOf(4,));//6
	alert(number.indexOf(7,0));//-1
</script> 
```
### 迭代方法   
//不学这个

### 归并方法   
//不学这个

## Date类型  
创建日期对象使用`new`关键字和`Date`构造函数即可：  
```javascript
<script type="text/javascript">
	var now = new Date() ;
	alert(now);  //Mon Jun 19 2017 12:12:17 GMT+0800 (中国标准时间)
</script> 
```
如果不传递参数，则自动获得当前日期，如果想根据特定的日期和时间创建对象，必须传入表示该日期的毫秒数。为简化这过程，ECMAScript提供两个方法：`Date.parse()`、`Date.UTC()`  
例如，要为2004年5月25日创建一个日期对象：  
```javascript
<script type="text/javascript">
	var now = new Date(Date.parse("May 25, 2004")) ;
	alert(now);  //Tue May 25 2004 00:00:00 GMT+0800 (中国标准时间)
</script>
```
如果传入`Date.parse()`方法的参数不能表示日期，那么返回值是`NaN`，实际上，如果直接把表示日期的字符串传入给我`Date()`构造方法，在后台也会自动调用`Date.parse()`方法。

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
