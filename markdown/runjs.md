# 运行JavaScript  
学习JS不用像学习C语言或java那样，另外安装些软件，例如java代码要在运行在虚拟机中。我们学习java的第一步是安装JDK。JS不用这样，因为我们的JS是在浏览器中运行的，我们电脑只要有浏览器和编辑器就行了。用记事本编辑代码也是可以的，但是因为记事本没有语法高亮，所以我用了一个比较酷的编辑器[点击下载][sublimetext]  

---
- 在HTML中使用JavaScript  
  JS的代码是嵌入到HTML中被浏览器解析的。
- Hello World!
  ```html
  <body>
  <script type="text/javascript">
    window.alert("Hello World!!");
  </script>
  </body>
  ```   
  在w3的JS手册的BOM里可以查找到alert()方法。这是JS代码嵌入到HTML中的一种方法。将JS代码放到<script>标签里面。<script>标签可以放在head或body标签里，放在body标签的最后更好些，因为html网页的加载是从上到下的，放在最后就不影响内容的显示。
- JS代码直接写在HTML代码中
  ```html
  <body>
	<button onclick="javascript:alert('Hello World!!')">按钮</button>
  </body>
  ```  
  这是直接将JS的代码写在HTML里，这是最不好的，但是临时使用也是支持的。
- JS代码单独放在一个文件夹里  
  在html中引用JS文件，js文件的相对路径是js/text.js。在<script>标签里不用再写js代码了。  
  html文件：
  ```html
  <button onclick="fun()">按钮</button>
  <script type="text/javascript" src="js/test.js">
  </script>
  ```  
  JS文件：  
  ```javascript
  window.fun = function (){//被调用的方法
	alert("Hello World!");
	}
	```
	
---

三种引入JS代码的方式已经介绍完了，这里按键调用JS代码还不是最好的方法，更好的方法是通过[动态绑定事件]。后面还会多次提到。上面用到的`window.alert();`方法是通过弹窗口的方式显示消息，我们还可以通过`document.writer();`方法将信息写在浏览器上哦！  
**总结：**  
  - 将JS代码嵌入到html代码中运行
  - 有三种嵌入方法  
    1.直接写在HTMl代码中  
    2.写在<script>标签里  
    3.写在单独的JS文件里
  


<!--超链接-->
[sublimetext]: http://www.sublimetextcn.com/?Sublime%20Text3
[动态绑定事件]: ../onload.md