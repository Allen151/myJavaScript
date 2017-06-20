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