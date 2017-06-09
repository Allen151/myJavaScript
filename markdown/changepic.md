## 图片轮换  
**JavaScript的动态图片轮换是很常用的，还有一个常用的知识点是表单验证。在这里，我们来聊聊图片的轮换**  
- 手动轮换  
  - 准备图片  
  准备8张图片，命名为pic-*.jpg，相对路径是image。
  - HTML样式
	```HTML
	<img id="img" src="image/pic-1.jpg"><br />
	<button id="up">上一张</button>
	<button id="down">下一张</button>
	```
  - JS代码  
  在前一节的前提下，在这里没有太多的新知识。  
  改变图片的方法：  
	  ```javascript
	    var num = 1 ;//图片序号
		eg.chang = function(){
		var img = eg.$("img");
		img.src = "image/pic-"+num+".jpg" ;//改变属性
		}
	  ```  
	  单击事件：  
	  ```javascript
	  if(num > 1){//实现上张图片
			num -- ;
		}else{
			num = 6;//循环
		}
		eg.chang();//调用改变图片的方法
	   ```
- 自动轮换
  - [查方法网站][w3]  
    这是万维网的网站，前端学习的一个好地方。内置方法太多了，我们不可能一一记住，我们可以直接到这个网站上查找。例如我们等一下要用到的`setInterval()`，就可以在这个网站的javascript手册的BOM的window下找到。
  - 让change()方法自己改变图片的序号
  	```javascript
  	eg.chang = function(){
	if(num < 6){//调用这个方法就自动跳转到下一张图片
		num ++ ;
	}else{
		num = 1 ;
	}
	var img = eg.$("img");
	img.src = "image/pic-"+num+".jpg" ;//改变属性
	}
    ```  
    **调用一次这个方法图片轮换到就下一张**  
  - 设置3秒钟调用一次  
    ```javascript  
    //直接到万维网查找方法
    window.setInterval("eg.chang()",3000);
    ```  
  - 让两个按键继续生效
    - 下一张  
      “下一张”按键不用再改变序号了，直接调用方法就行。
    - 上一张  
      “上一张”如果按上一张，序号减1，那调用方法又把该1加回来了，所以我们设置减2。
    ```javascript
up.addEventListener("click",function(){
	if(num > 2){//实现下张图片
		num -= 2 ;
	}else{
		num = 6;
	}
	eg.chang();
},false);
down.addEventListener("click",function(){
	eg.chang();
},false);
		```
    
<!--这里链接-->
[w3]: http://www.w3school.com.cn
