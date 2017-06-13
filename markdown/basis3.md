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



## 函数  


- 理解参数  


- 没有重载  


## 总结