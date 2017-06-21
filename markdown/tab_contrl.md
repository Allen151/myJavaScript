# 下拉框选项卡  
鼠标指着不同的地方显示不同的下拉框，应该只用CSS也能实现  
先做好HTML部分,有三个词条，有三个选项卡，各自有不同的`id`，样式都是隐藏的。  
```javascript
<div id="parent">
		<ul id="head"><li value="1">房产</li><li value="2">家居</li><li value="3">二手房</li></ul>
		<div class="hide" id="1" style="display:none">
			<ul>
				<li>275万购昌平邻铁三居 总价20万买一居</li>  
				<li>200万内购五环三居 140万安家东三环</li>    
				<li>北京首现零首付楼盘 53万购东5环50平</li>   
				<li>京楼盘直降5000 中信府 公园楼王现房</li> 
			</ul>
		</div>

		<div class="hide" id="2" style="display:none">
			<ul>
				<li>40平出租屋大改造 美少女的混搭小窝</li>  
				<li>经典清新简欧爱家 90平老房焕发新生</li>    
				<li>新中式的酷色温情 66平撞色活泼家居</li>   
				<li>瓷砖就像选好老婆 卫生间烟道的设计</li> 
			</ul>
		</div>

		<div class="hide" id="3" style="display:none">
			<ul>
				<li>通州豪华3居260万 二环稀缺2居250w甩</li>  
				<li>西3环通透2居290万 130万2居限量抢购</li>    
				<li>黄城根小学学区仅260万 121平70万抛!</li>   
				<li>独家别墅280万 苏州桥2居优惠价248万</li> 
			</ul>
		</div>				
	</div>
```
CSS样式只是设置边框，可要可不要，这里就不写了，主要的是设置隐藏。  

JS中的两个方法，一个是显示内容，一个是显示内容。
```javascript
//显示内容
var showContent = function(id){
	var contentId = document.getElementById(id);
	contentId.setAttribute("style","display:show")
}

//隐藏内容
var hideContent = function(id){
	var contentId = document.getElementById(id);
	contentId.setAttribute("style","display:none")	
}
```
调用方法  
```javascript
window.onload = function(){
	var ulObj = document.getElementById("head");//选项列表
	var liObj = ulObj.getElementsByTagName("li");//每一项的数组
	var parentDiv = document.getElementById("parent");//总盒子
	var childDiv = parentDiv.getElementsByTagName("div");//要显示的各个盒子的数组 
	for(var i=0; i<liObj.length; i++){//循环遍历各个选择
		//鼠标移入时内容显示
		liObj[i].onmouseover = function(){
			for(var i=0; i<liObj.length; i++){
				showContent(this.value);
				break ;
			}
		};
		//鼠标移出时内容消失
		liObj[i].onmouseout = function(){
			for(var i=0; i<liObj.length; i++){
				hideContent(this.value);
				break ;
			}
		};
		
	}
}
```
