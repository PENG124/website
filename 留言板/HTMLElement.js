//insertAfter()
//某一个元素后面
//元素的下一个元素节点的前面
//用insertBefore模拟

HTMLElement.prototype.insertAfter=function (insert){
	let next = this.nextElementSibling;
	let parent = this.parentNode;
	if (next) {
		parent.insertBefore(insert,next);
	} else{
		parent.appendChild(insert);
	}
}

//在父元素后面插入对象
HTMLElement.prototype.prependChild=function (insert){
	let first = this.firstElementChild;
	if (first) {
		this.insertBefore(insert,first);
	} else{
		this.appendChild(insert);
	}
}

//插入对象到父元素前面
HTMLElement.prototype.prependTo=function (parent){
	parent.prependChild(this);
}
HTMLElement.prototype.appendTo=function (parent){
	parent.appendChild(this)
}
//清空父元素里面的内容
HTMLElement.prototype.empty=function (parent){
	let child = this.childNodes;
//	child.forEach((element)=>{
//		this.removeChild(element);
//	})
	this.innerHTML = '';
}
//移除，自己调用删除自己
HTMLElement.prototype.remove=function (parent){
	let parent = this.childNodes;
	parent.appendChild(this)
}

//next获取下一个元素节点				previous获取上一个元素节点
//nextAll获取后面所有的				previousAll获取上面所有的节点
//nextUntil获取后面的某一个范围		previousUntil获取上面的某一个范围
//closet离我最近的父元素
//parent父元素		parents所有的父元素

//某一个元素和它相邻的元素节点	next
HTMLElement.prototype.nextAll=function (){
	let nexte = this.next();
	let newarr = [];
	if (nexte) {
		newarr.push(nexte);
	} else{
		return false;
	}
	while(nexte){
		nexte = nexte.next();
		newarr.push(nexte);
	}
	newarr.pop();
	return newarr;
}