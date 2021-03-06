# 基础2  

目录
  - 变量  

  - 数据类型  

  - 操作符

--- 
## 变量  
与变量相对的是常量，常量是不可改变的，例如1就是1，2就是2。变量是可以改变的，例如数学里的x、y。 
**定义一个变量**  
```javascript
<script type="text/javascript">
	var x;//定义一个变量
	var y = 10; //定义的同时声明变量 
</script>
```
上面的x、y就是变量，x还没有声明值，系统默认它的值是Null。  
JS中变量声明时并不用指定数据类型，因为JS是弱类型语言，意思是说每种数据类型间可以随意转换。在数据类型中我们再详细说明。  
那这时候问题就来了——应该怎么定义一个变量名呢？  
**变量名的规则**  
>变量必须以字母开头  
变量也能以 $ 和 _ 符号开头（不过我们不推荐这么做）  
变量名称对大小写敏感（y 和 Y 是不同的变量）    

选择变量名的时候，尽量选择能明其意的英语单词，用驼峰式命名。  
例如：myName、myPassword。之类，首单词小写，后面每个单词的首字母都是大写。

---
## 数据类型  
**JS的弱类型语言，不用指定变量的数据类型。**  
但是JS还是有几种基本的数据类型的，我们还是要好好认识一下它们。    
在java中，字符串类型的变量我们是这样定义的`String a = "myname" ;`，在JS中不用这么麻烦，我们直接定义`var a = "myname" ;`，就行了，不用指定类型。  
在java中，如果我们想改变a的值为数字类型`a = 10 ;`就会报错，在JS中完全不用担心这个问题，因为JavaScript 拥有**动态类型**  
~~下面我们开始学习各种数据类型吧~~  
~~**基本数据类型**~~
### 字符串  
```javascript
<script type="text/javascript">
	var myName = "Allen151" ;//字符串要用引号括起来
	document.write("you name:"+myName);
</script>
```  

### 数字  
```javascript
<script type="text/javascript">
	var myAge = 20 ;//数字类型不用括起来
	document.write("you age:"+myAge);
</script>
```
### 布尔值  
布尔值只有两个值，true或false。
```javascript
<script type="text/javascript">
	var no = false ;
	var yes = true ; 
</script>
```

### Null  
如果你只是声明一个对象，没有赋值，这个对象的值就是Null。
### Undefined
如果你还没声明该对象，该对象的类型就是undefined.  
**各种数据类型间可以相互转换**   
如下所示，myName声明时赋值了字符串，后来可以改成数字。 
```javascript
<script type="text/javascript">
	var myName = "Allen" ;
	myName = 10 ;
	alert(myName);
</script>
```
~~**引用数据类型**~~

### 数组  
- 实例化对象声明数组  
`new Array(2)`括号里的2是指数组的长度，但是超出数组长度也不会报错。第一个数组是从零开始数的，这一点容易忽略。  
```javascript
<script type="text/javascript">
	var a = new Array(2);//声明一个数组
	a[0] = 1 ;//分别为数组的各个元素赋值
	a[1] = 2 ;
	for(var i=0;i<a.length;i++){//循环输出各个数值
		document.write(a[i]);
	}
</script>
```  
- 声明的同时赋值  
也可以在声明的同时赋值，这时候括号里的内容跟上面说的就不同了。
```javascript
<script type="text/javascript">
	var a = new Array("1","2");
	for(var i=0;i<a.length;i++){//循环输出各个数值
		document.write(a[i]);
	}
</script>
```  
- 中括号声明法  
这种方法比较简洁，一个中括号就代组是一个数组，后面将学习到一个大括号代表一个数组。
```javascript
<script type="text/javascript">
	var a = ["1","2"] ;
	for(var i=0;i<a.length;i++){//循环输出各个数值
		document.write(a[i]);
	}
</script>
```
 
### 对象  
**用大括号声明对象**  
对象有一定的属性，属性有一定的值，语法格式看代码。以下还有两种取得属性的方法。学习对象的时候再深入学习。
```javascript
<script type="text/javascript">
	//声明一个对象，并且赋值
	var me = {myName:"Allen151",myAge:20,myNumber:"123456789"} ;
	//获取对象的属性和值，这里用到两种方法
	document.write("姓名："+me.myName+"、年龄："+me["myAge"]+"、电话："+me.myNumber);
</script>
```

---
## 操作符  
### 加减号操作符  
- 递增：  
两个加号在后面的，是执行完整个语句后num才加1.
```javascript
<script type="text/javascript">
	var num = 2;//定义一个变量
	alert(num ++ );//2
	alert(num);//3
</script>
```  
两个加号在前面的，num先加1再执行整个语句。
```javascript
<script type="text/javascript">
	var num = 2;//定义一个变量
	alert(++ num );//3
	alert(num);//3
</script>
```  
- 递减与递增同理  
参考递增  
 
- 一元加和一元减  
  1.一元加  
    除了有数学课本上的作用外，还有：  
    ```javascript
    <script type="text/javascript">
	//定义各种变量
	var s1 = "01" ;
	var s2 = "1.1" ;
	var s3 = "z" ; 
	var b = false ;
	var f = 1.1 ;
	var o = {
		valueOf: function(){
			return -1 ;
		}
	}
	//+号对其操作后的结果
	s1 = +s1 ; //值变为1
	s2 = +s2 ; //值变为1.1
	s3 = +s3 ; //值变为NaN
	b = +b ; //值为0
	f = +f ; //值为1.1
	o = +o ; //值变为-1
	</script>
    ```  
    重点注意+号用于类型的转换  
    
    2.一元减  
      减号用于表示负数，而当应用于非数值时也有一元加类型的作用，进行类型转换，但注意，最后得到的是负数。  
    ```javascript
    <script type="text/javascript">
	//定义各种变量
	var s1 = "01" ;
	var s2 = "1.1" ;
	var s3 = "z" ; 
	var b = false ;
	var f = 1.1 ;
	var o = {
		valueOf: function(){
			return -1 ;
		}
	}
	//+号对其操作后的结果
	s1 = -s1 ; //值变为-1
	s2 = -s2 ; //值变为-1.1
	s3 = -s3 ; //值变为NaN
	b = -b ; //值为0
	f = -f ; //值为-1.1
	o = -o ; //值变为1
	</script>
    ```
- 位操作符  
本来是不想写这部分的内容，因为感觉用的比较少，表达起来也比较费劲。后来想了一下，内容还是挺有意思的嘛！！  
位操作符用于在最基本的层次上，即按内存中表示数值的位来操作数值。速度会更快。  
让我们先学习一下二进制，正数的二进制与十进制的转换比较简单：  
  - 二进制转换成十进制，从右边开始写，2的对应次方乘以对应位的数值相加。
  - 十进制转换成二进制，十进制的最小公约数。
  - 负数的二进制，数值的二进制的反码加一。反码：对二进制的1与0互换。  
  - 按位非(NOT)  
    按位非操作符由一个波浪线表示，返回的是数值的反码，参考负数的二进制比较，相当于操作数的负数减1，虽然这么干得到的结果一样，但是用按位非运行速度会更快。   
    ```javascript
    <script type="text/javascript">
	var num1 = 25 ; //二进制：11001
	var num2 = ~num1 ;//-11002
	alert(num2);//-26
	</script>
    ```  
   - 按位与跟按位或跳过不说了
- 布尔操作符  
  - 逻辑非  
    用一个感叹号表示，对操作数取相反值。  
    以下是一个示例  
    ```javascript
    <script type="text/javascript">
	alert(!false); //true
	alert(!"blue"); //false
	alert(!0);	//true
	alert(!NaN); //true
	alert(!""); //true
	alert(!123456); //false
	</script>
    ```  
  - 扯  
    写到这里，发现这么干真的很费时费力，也不知道这样子干有没有用，对我有没有用。  
  - 逻辑与(&&/&)  
  两个&&执行得比较智能，一个&就不智能，前后两个代码都执行。  
  - 逻辑或  
    与逻辑与相似  
    偷懒一下，写得简洁一点，也不知道这样好不好。  
- 乘性操作符  
  - 乘法  
    用*号表示乘法，作用跟数学里的差不多。  
  - 除法  
    用/号表示，作用跟数学里的差不多。  
  - 求模  
    求模就是求两个数相除的余数，用%号操作。  
- 加性操作符  
  1.加法  
    有数学里的功能，也有+号进行数据类型转换的功能，参照上面说的+号对数据类型的转换。  
  2.减法  
    减法就没那么复杂，有数学里的功能，如果遇到非数字类型，结果就是NaN。  
- 关系操作符  
  小于(<)、大于(>)、小于等于(<=)和大于等于(>=)这几个关系操作符，这几个操作的返回值都是布尔值。  
- 相等操作符  
  1.等于  
    一个等号是赋值，这一点容易弄错。两个等号才是比较是否相等。这里有个问题，两个等号才是比较值是否相等，会将数据类型不一样的两个比较数进行转换，然后再比较。  
  2.强制等于  
    是由三个等号表示的，两个比较数的数据类型不同的时候不再进行转换，直接返回false。所以这个比较是要数值和数据类型都相等才是相等。  
  3.不等  
    不等是用一个感叹号加一个等号组成，判断两个数值是否相等，如果相等返回false，如果不相等就返回true。  
- 条件操作符  
条件操作符也就是三目运算，格式`var a = 判断语句 ? 语句1: 语句2`如果判断语句为true，则将语句1赋值给a，如果判断语句为false，则将语句2赋值给a。  
- 赋值操作符  
  - 单个赋值符  
      赋值操作符有很多种，等号是最常见的，将右边的值赋值给左边的变量。  
  - 复合赋值符  
    复合赋值符由两个符号组成，如`var a += 1 ; `，意思是将a加1后的结果再赋值给a，其他符号也类型，不作重复介绍了。  
- 逗号操作符  
  我们可以这样声明变量`var a=10,b=20;`不常用，我也不知道应该怎么说，慢慢体会。

---
## 总结  

1. ECMAScript中的基本数据类型包括Undefined、Null、Boolean、Number、和String.   

2. 与其他语言不同，ECMAScript没有整数和浮点数值之分，用Number类型就可以表示所有数值。  

3. ECMAScript中也有一种复杂的数据类型，即Object类型，该类型是这门语言中所有对象的基础类型。  

4. 严格模式为这门语言容易出错的地方加了限制。  

5. ECMAScript提供了许多与C及其他类C语言中相同的基本操作符，包括算术操作符、布尔操作符、关系操作符、相等操作符及赋值操作符等。