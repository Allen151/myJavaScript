# 基础1  
这样的命名可能不能明其意，但是根据这个顺序学习JS的基础知识就对了。  
这一节里简单地告诉你JS可以做一些什么，是很基本很普通的，因为JS能干的事情太多了。太复杂的事情现在我也还说不清楚，如果你喜欢看复杂的事情，可以直接跳到最后看JS的实例。

---
## 闲聊
<b>昨晚在简书上看到一篇关于面试的文章，一位成电大的学生毕业找工作，随便就能得到国内科技巨头的offer。也许你们<span style="color:red">不赞同</span>我说这种话，可能也许只有他有这么个能力。</b>说到很多种技术的时候，他的回答是：“我没有花很多时间去学习呀，只是上课的时候听一下老师的课！”可能这就是大学的差距，如果你们以为我这样就对自己的学校没信心，那就错了。  
这样子只会让我更加努力地自学。后面还有很多技术等着我去学习，我要加快我的学习速度。我还要搭建我自己的博客……。  
昨晚躺在床上想了很久，感触颇多，有很多话要讲，今天早上还记得一些。8点钟接到毕业的师兄的电话，让我去趟他宿舍，搜刮风扇等生活用品。一去就是半天。回来就什么都不记得了，暂时就不说了吧，反正我后面会好好学习。不能让毕业就失业。

---
## 目录  
### 操作HTML

**JS可以改变html标签里面的内容**  

---
  ```html
  <body>
	<p id="content">旧的内容</p>
<script type="text/javascript">
    document.getElementById("content").innerHTML = "新的内容";
</script>
</body>
  ```  
  `document.getElementById()`这个方法在后面会经常用到，现在还不明白无所谓，最重要的是不要让看不明白的代码打击你们的信心。这句代码的意思是说取得id="content"的元素，**所有的元素都是对象**。对象.innerHTML是对象的内容，我们把"新的内容"赋值给对象内容，对象的内容就改变了。最终浏览器显示的是新的内容。  
  
---
**JS向文档里写入HTML**
```html
<body>
	<p id="content">旧的内容</p>
<script type="text/javascript">
	document.write("<h1>我是新内容</h1>");
</script>
</body>
```  
这种做法有点特别，JS将完整的HTML语句写进文档，浏览器会自动地识别解析HTML语句。

---  
**document.write()的超能力**
```html
<body>
	<p id="content">旧的内容</p>
	<button onclick="fun()">PressMe</button>
<script type="text/javascript">
	var fun = function(){
		document.write("Hello World!!");
	}
</script>
</body>
```  
如果整个文档加载完成了，再调用`document.write();`整个 HTML 页面将被覆盖。这能力够强吧！

---


### 语句  
**JavaScript 语句**
>JavaScript 语句向浏览器发出的命令。语句的作用是告诉浏览器该做什么。
 
**分号**  
>在JS中，分号是可选的，但是推荐尽量使用分号结束语句。  

**JS代码**  
>浏览器会按照编写顺序来执行每条语句。  

**JavaScript 代码块**  
>JavaScript 语句通过代码块的形式进行组合。  
块由左花括号开始，由右花括号结束。  
块的作用是使语句序列一起执行。  
JavaScript 函数是将语句组合在块中的典型例子。  

**JavaScript 对大小写敏感。**  
>JavaScript 对大小写是敏感的。  严格区分大小写。  
当编写 JavaScript 语句时，请留意是否关闭大小写切换键。

**空格**  
>JavaScript会忽略多余的空格。您可以向脚本添加空格，来提高其可读性。

**JavaScript 是脚本语言。**  
>浏览器会在读取代码时，逐行地执行脚本代码。  
而对于传统编程来说，会在执行前对所有代码进行编译。

---

### 注释
我们通过增加注释来解释代码，或通过注释来提高代码的可读性。  
**单行注释**  
```javascript
<script type="text/javascript">
	var fun = function(){//我是一个方法
		document.write("Hello World!!");
	}
</script>
```  
**多行注释** 
```javascript
<script type="text/javascript">
/*
	这是个多行注释
	是用来作一些重要说明的
	以下这个方法，点击按钮时调用
 */
	var fun = function(){//我是一个方法
		document.write("Hello World!!");
	}
</script>
```
---

**总结：**  
- JS对象HTML的一些基本的操作  
- JS语句的一些特点，有些不同于其他的编程语言特性  
- JS的注释
