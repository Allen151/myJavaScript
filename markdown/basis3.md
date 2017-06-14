# 语句/函数
**后面知识的介绍**  
这基础部分学习起来可能会比较无聊，学习编程就是开头难，很多人就是停留在基础部分就学习不下去了，我们要坚持下去。  
这一节我们就会介绍完比较基础的内容了，后面我会学习到引用类型，作用域/内存，和JS的面向对象的程序设计，再后来会学习BOM/DOM，最后来会增加一些实例。  
简单学习一下JQ，认真学习HTML5/CSS3，应该就能进入Node.js的学习了。  
突然发现，用基础几的方式命名很不好。然后更改了。  


目录
  - 语句  

  - 函数

---
## 语句  
**语句定义了ECMAScript中的主要语法，语句通常使用一或多个关键字来完成给定任务。**  
- if语句  
最常用的一种语句，格式为  
```javascript
<script type="text/javascript">
	if(判断语句){
		语句块1 ;
	}else{
		语句块2 ;
	}
	</script>
```
判断条件，如果是true就执行语句块1，如果是false就执行语句块2。结果不一定是Boolean值，ECMAScript会自动调用Boolean()转换函数将这个表达转换成Boolean值。  
- do-while语句  
do-while语句是一种后测循环语句，即只有在循环体中的代码执行之后，才会测试出口条件。也就是说循环体内的代码至少会执行一次。  
```javascript
<script type="text/javascript">
	do{
		执行代码块
	}while(条件);
</script>
```
注意，while后面是要有分号的。  
- while语句  
while语句属于前测试循环语句，也就是说，在循环体内的代码被执行之前，就会对入口条件求值。因此，循环体有可能一次也不执行。  
以下是while语句的语法  
```javascript
<script type="text/javascript">
	while(判断条件){
		代码块 ;
	}
</script>
```
条件不满足，永远不执行代码块。满足条件后执行代码块，执行完后再回来执行判断条件。  
- for语句  
for语句也是一种前测试循环语句，但它具有在执行循环之前初始化变量和定义循环后要执行的代码的能力。以下for语句的语法：  
```javascript
<script type="text/javascript">
	for(初始化条件;循环条件;循环后代码){
		满足条件执行代码块 ;
	}	
</script>
```
for能做的事while也能做，while能做的事for也能做。  
ECMAScript中不存在块级作用域，因为在循环体内的变量也可以在外部访问到。  
for语句存在极大的灵活性，所以经常用到。  
- for-in语句  
for-in语句是一种精准的迭代语句，可以用来枚举对象的属性。以下是for-in语句的语法：  
```javascript
<script type="text/javascript">
	for(var propName in window){
		document.write(propName);
	}	
</script>
```  
这个例子会将window对象里的所有属性枚举一遍，将属性名赋值给propName变量。属性没有顺序，输出的顺序不可预测。  
- label语句  
使用label语句可以在代码中添加标签，以便将来使用。以下是label语句的语法：  
```javascript
<script type="text/javascript">
	label:statement
</script>
```
例子：
```javascript
<script type="text/javascript">
	start:for(var i=0; i<count; i++){
		alert(i);
	}
</script>
```
这个例子定义了start标签可以在将来由break或continue语句引用。加标签的语句一般要与for语句等循环语句配合使用。  
- break和continue语句  
  - break语句  
    执行break语句会立即退出循环，强制继续执行循环后面的语句。  
  ```javascript
  <script type="text/javascript">
	var num = 0 ;
	for(var i=1; i<10; i++){
		if(i % 5 == 0){
			break ;
		}
		num++ ;
	}
	alert(num);//4
  </script>
  ```
  以上是一个循环，循环一次num递增一次。第5次的时候执行break语句，后面的代码不执行了，直接跳出循环，执行`alert(num);`，所以最后显示的4是循环的次数。   
  - continue语句  
  continue语句虽然也是立即退出循环，但是退出循环后会从循环的顶部继续执行。将上面的代码`break;`替换成`continue;`  
  ```javascript
  <script type="text/javascript">
	var num = 0 ;
	for(var i=1; i<10; i++){
		if(i % 5 == 0){
			continue ;
		}
		num++ ;
	}
	alert(num);//8
  </script>
  ```  
  第5次与第10次的时候执行continue语句，跳出循环不执行`num++;`了，但是是从循环的开始处重新执行循环，所以最后num是8。  
- with语句   
with语句的作用是将代码的作用域设置到一个特定的对象中。  
with的作用是简化多次编写一个对象，例如：  
```javascript
<script type="text/javascript">
	var qs = location.search.substring(1);  
	var hostName = location.hostname ;
	var url = location.href ;
</script>
```
上面的代码都有location对象，我们使用with语句要以改写成如下：  
```javascript
<script type="text/javascript">
	with(location){
		var qs = search.substring(1);  
		var hostName = hostname ;
		var url = href ;
	}
</script>
```
上面的例子中使用with语句关联了location对象。意味着with里面的变量首先被认为是一个局部变量，如果在局部环境中找不至该变量的定义，就会查询with中指定的location对象中是否有同名属性，如果发现了同名属性，就以location的对象属性作为变量的值。  
**严格模式下不允许使用with语句，否则视为语法错误。开发大型程序时不使用with语句。**
- switch语句  
很多种类C语言都有switch语句，JS的switch语句有些特点，我们重点说一下它的不同点。  
switch语句与if语句关系最密切。  
```javascript
<script type="text/javascript">
	var i = 10 ;
	switch(i){
		case 1:
			alert("i的值是1");
			break ;
		case 5:
			alert("i的值是5");
			break ;
		case 10:
			alert("i的值是10");
			break ;
		case 20:
			alert("i的值是20");
			break ;
		default:
			alert("不知道");
	}
</script>
```
JS的switch语句有以下特点：
  - case的值可以是其他数据类型，甚至可以是表达式。
  - case判断的是全等表达式，不进行类型转换。


## 函数  
通过函数可以封装任意多条语句，而且可以在任何地方，任何时候调用执行。ECMAScript中的函数使用function关键字来声明，后跟一组参数，以及函数体。函数的格式：  
```javascript
<script type="text/javascript">
	function sayHi(name){
		alert("hello "+name);
		return "hi" ;
	}
	alert(sayHi("Allen151"));
</script>
```
函数可以有返回值，用`return`来指定返回值，执行return后，后面的代码都不再执行了。  
函数命名规则：  
>函数名不能是关键字或预留关键字  
参数名不能是关键字或预留关键字  
函数内不能出现两个重名参数名。 


- 理解参数  
ECMAScript函数的参数与多大数其他语言的参数有所不同。ECMAScript函数不介意传递进来多少个参数，也不在乎传进来参数是什么数据类型。原因是ECMAScript中的参数在内部是用一个数组来表示的。实际上在函数体内，我们可以通过arguments对象来访问这个参数数组，从而获取数组的每个参数。

  `arguments`对象只是与数组`Array`对象类似，可以用`argument[0]`来访问第一个元素，可以用`argument.length`来查询数组的长度。用这种方式来访问参数的好处是不用为参数命名，即不显式地使用命名参数。如：
  ```javascript
  <script type="text/javascript">
	function sayHi(){
		alert("hello "+arguments[0]+","+arguments[1]);
	}
	sayHi("Allen151","my name is Tony");
</script>
  ```
  上面这个例子没有再为参数命名为`name`和`message`了，也一样能达到想要的结果，由此说明参数名不是必要的。JS的一个特点：**命名的参数只是提供便利，但是不是必需的。**  
  另外，在其他语言，定义一个函数的时候要指定函数的参数数据类型，在JS中就不用，JS中的参数你随意，真的是太随意了，我也不好说。
  如下面的例子，我们可以传递随意个参数没有任何问题。  
  ```javascript
  <script type="text/javascript">
	function howManyArgs(){
		return alert(arguments.length);
	}
	howManyArgs("String",50);//2
	howManyArgs();//0
	howManyArgs(10);//1
</script>
  ```
  我们还可以根据参数不同做出不同的反应，这一点其实就是java语言里所说的**函数的重载**，虽然算不上完美，但也可以弥补ECMAScript的这一缺陷了。  
  ```javascript
  <script type="text/javascript">
	function doAdd(){
		if(arguments.length == 1){
			return alert("一个参数+10："+(arguments[0]+10));
		}if(arguments.length == 2){
			return alert("两个参数相加："+(arguments[0]+arguments[1]));
		}
	}
	doAdd(10);//一个参数+10:20
	doAdd(20,30)//两个参数相加：50
</script>
  ```
  `arguments`，也可以与命名参数一起使用的，例子够多了，就不举了。   
  
  一个关于`arguments`有意思的行为：(`arguments`的值总是与对应的参数同步)
  ```javascript
  <script type="text/javascript">
	function doAdd(num1,num2){
		arguments[1] = 10 ;//总是将第二个参数的值改为10
		alert(arguments[0]+num2);//两个数相加
	}
	doAdd(100,200);//结果是110
</script>
  ```
  **说明：**  
    每次执行`doAdd()`函数都会通过`arguments`重写`num2`的值为10，在后面调用`num2`时发现`num2`的值也改变了，这说明`arguments`的值总是与对应参数的值同步，并不是说这两个值访问的是同一个内存空间，它们的空间是独立的，但是值是同步的。**注意**如果传递一个参数进来，再设置`arguments[1]`的值就不会反应到命名参数`num2`中，但是也没有报错，可以用`arguments[2]`来调用第二个参数的值。这是因为`arguments`对象的长度是由传递进来的参数个数决定的，不是由定义命名参数的个数决定的。  
  **记住**没有传递值的命名参数的值是`undefined`值，是永远改变不了的。这就跟定义了没有初始化是同个道理。  
  **严格模式**对如何使用`arguments`对象做出了一些限制。首先像下面的例子中那样赋值是无效的，即使把`arguments[1]`的值设置为10，num2的值依然是`undefined`。
  ```javascript
  <script type="text/javascript">
	function doAdd(num1,num2){
		arguments[1] = 10 ;//总是将第二个参数的值改为10
		alert(arguments[0]+num2);//两个数相加
	}
	doAdd(100);//NaN，num2的值是undefined
</script>
  ```  
  其次，重写`arguments`的值会导致语法错误，代码无法执行。ECMAScript中所有参数传递的都是值，不可能通过引用传递参数，就是说，`doAdd(100);`就相当于把`100`复制出来一个，再给函数使用。

- 没有重载  


## 总结