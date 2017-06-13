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


- for-in语句  


- label语句  


- break和continue语句  


- with语句  



## 函数  


- 理解参数  


- 没有重载  


## 总结