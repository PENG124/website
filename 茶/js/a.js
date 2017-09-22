
function $(select,ranger) {
	// body...
	if (typeof select=='string') {
		if (ranger ==undefined) {
			ranger=document;
		}
		let select1 = select.trim();//去空
		let frist = select1.charAt(0);
		if (frist=='#') {
			return document.getElementsById(select1.substring(1));
		}else if(frist=='.'){
			return ranger.getElementsByClassName(select1.substring(1));
		}else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(select1)){
			return ranger.getElementsByTagName(select1.substring(1));
		}
	}else if(typeof select=='function'){
		window.onload=function(){
			// select();
		}
	}

}



function html(element,content) {
// body...
	if (arguments.length==2) {
		element.innerHTML=content;
	} else if(arguments.length==1){
		element.innerHTML
	}
}


function text(element,content) {
// body...
	if (arguments.length==2) {
		console.log(element);
		console.log(content);
		element.innerTEXT=content;
	} else if(arguments.length==1){
		element.innerTEXT
	}
}

//css
//for  in遍历对象加[]
function css(element,attrObj){
	for (let i in attrObj) {
		console.log(i);
		console.log(attrObj);
		element.style[i] = attrObj[i];
	}
}

//添加事件on(collection,type,fn)	[type]不加括号是访问它的属性，加方括号识别变量
function on(collection,type,fn){
	for (let i = 0; i < collection.length; i++) {
		collection[i][type] = fn;
	}
}

//删除事件off(collection,type,fn)
function off(collection,type,fn){
	for (let i = 0; i < collection.length; i++) {
		collection[i][type] = null;
	}
}


//封装动画animate
// function animate(element,attr,end,speed){
// 	let t = setInterval(function(){
// 		let ss = parseInt(getComputedStyle(element,null)[attr]);
// 		if (ss>=end) {
// 			clearInterval(t);
// 		}
// 		element.style[attr]=`${ss+speed}px`;	
// 	},300)
// }

function animate(element,attrObj,speed,fn){
	
	for (let i in attrObj) {
		let ss = parseInt(getComputedStyle(element,null)[i]);
		console.log(ss);
		let t = setInterval(function(){
			if (ss>=attrObj[i]) {
				clearInterval(t);
				if (fn) {
					fn.call(element);
				}
			}
			
			element.style[i]=`${ss+=speed}px`;
		},100)
	}	
}



// function $(select,ranger){
// 	if (ranger==undefined) {
// 		ranger=document;
// 	}
// 	if (typeof select=='string') {
// 		let select = select.trim();
// 		let frist = select.charAt(0);
// 		if (frist=='#') {
// 			return document.getElementsById(select.substring(1));
// 		}else if (frist=='.') {
// 			return ranger.getElementsByClassName(select.substring(1));
// 		}else if (/^[a-Z][a-Z1-6]{0,8}$/.test(select)) {
// 			return ranger.getElementsByTagName(select.substring(1));
// 		}
// 	}else if(typeof select=='function'){
// 		window.onload = function(){
// 			select();
// 		}
// 	}
// }