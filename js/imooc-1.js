//改变表格的方法
var changeColor = function(obj, color){
	obj.bgColor = color ;//不知道Color为什么要大写
}

//实现删除的方法
var deleteTr = function(obj){
	var tr=obj.parentNode.parentNode;  //obj是a的对象，tr是tr的对象
	var tbody=tr.parentNode;  			//表格对象
	tbody.removeChild(tr);  
}

//实现添加的方法,
//比较完美的方法
var addTr = function(){
	var newTr = document.getElementById("oneTr").cloneNode(true);//将最后一行复制 
	document.getElementById("mesTable").appendChild(newTr);//粘贴到表格的最后
}



/*一种方法
var addTr = function(){
	var trNode = document.createElement("tr");
	var tdNode = document.createElement("td");
	var textNode = document.createTextNode("待填");
	tdNode.appendChild(textNode);
	trNode.appendChild(tdNode);
	document.getElementById("mesTable").appendChild(trNode);
}
*/
window.onload = function(){

	//变色,获取全部标签，循环遍历各行，绑定事件
	var trChangeColor = document.getElementsByTagName("tr");
	for(var i=0; i<trChangeColor.length; i++){
		trChangeColor[i].addEventListener("mouseover", function(){
			changeColor(this, "#fff");
		}, false);

		trChangeColor[i].addEventListener("mouseout", function(){
			changeColor(this, "#ddd");
		}, false);
	}

	//删除，跟上面同理，调用删除方法
	var trDelete = document.getElementsByTagName("a");
	for(var i=0; i<trDelete.length; i++){
		trDelete[i].addEventListener("click", function(){
			deleteTr(this);
		}, false);
	}

	//添加一行表格
	var addButton = document.getElementById("addTr") ;
	addButton.addEventListener("click", function(){
		addTr();
	}, false);
}