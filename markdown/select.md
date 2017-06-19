# 下拉框事件  
下拉框有个事件，选择其中一项触动`change`。我们创建一个下拉框。
```javascript
<form method="post">
选择你的城市：
	<select id="city">
		<option value="BJ-北京">北京</option>
		<option value="NJ-南京">南京</option>
		<option value="TJ-天津">天津</option>
		<option value="MM-茂名">茂名</option>
		<option value="GZ-广州">广州</option>
		<option value="ZZ-湛江">湛江</option>
	</select>
</form>
```

通过动态绑定事件，得到`select`下拉框对象，对对对象进行监听，如果有`change`就输出信息。
```javascript
<script type="text/javascript">
	window.onload = function(){
		var myCity = document.getElementById("city");
		myCity.addEventListener("change",function(){
			alert("你的城市："+this.value);
		},false);	
	}
</script>
```
可以在[菜鸟教程]上查询要用的方法，熟练查询方法很重要。


[菜鸟教程]: http://www.runoob.com