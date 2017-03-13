/*
说明：程序功能————判断几个字符串中有多少个字符串含有A或a的。
实现方法：同一个功能有不同的实现办法，这是肯定的。我写了一个方法，用来接收字符串，判断其中是否有A或a。
 */
mun = 0 ;
function checkchar(x){
	y = x.toLowerCase();
	for(i = 0; i <= y.length; i++){
		if(y[i] == 'a'){
			mun++ ;
			break ;
		}
	}
}
checkchar("America") ;
checkchar("Greece") ;
checkchar("Britain") ;
checkchar("Canada") ;
checkchar("China") ;
checkchar("Egypt") ;
document.write("共有"+mun+"字符串中含有a或A字母") ;
