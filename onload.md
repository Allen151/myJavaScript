## onload、eg.${}、addEventListener

- onload（动态绑定事件）  
必须要用动态绑定事件的方法来实现js代码，这样就能做到HTML网页上完全没有JS代码，将HTML(内容提供者)与JS(JS提供者)完全分开，就不会有谁先谁后的问题了。
```javascript
window.onload = function(){
  alert("加载页面时调用");
}
```  
**说明：以上JS代码在打开网页时自动调用，里面的方法直接执行。**
- eg.${}
```javascript
var eg = {}//定义一个空对象
eg.$ = function(element){//对象里的一个方法
  return document.getElementById(element);//返回根据id获取的对象元素
}
```
**说明：把自定义的方法全部放进eg的对象中，避免跟其他人的方法重名**
- addEventListener(事件监听)
```javascript
obj.addEventListener("事件类型",function(){
  alert("触发事件时执行的方法");
},false);
```  
**说明：obj是对象，例如button的对象。事件类型不用再加"on",例如单击就是"click"，function大括号里的代码是触发事件时执行的。"false"是与冒泡有关，现在我还不懂。**
