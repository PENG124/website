//用原型对象定义一个drag
//function drag (obj) {
//	this.obj = obj;
//}
//drag.prototype = {
//	move:function(){
//		this.down();
//	},
//	down:function(){
//		let that = this;
//		this.obj.onmousedown = function(e){
//			let ox = e.offsetX,oy = e.offsetY;
//			document.onmousemove = function(e){
//				let cx = e.clientX,cy = e.clientY;
//				//this指向document
//				that.obj.style.left = `${cx-ox}px`;
//				that.obj.style.top = `${cy-oy}px`;
//			}
//		}
//		this.obj.onmouseup = function(){
//			document.onmousemove = null;
//		}
//	}
//}


//用类的方法写一个drag
//面向对象的方法
//属性（描述）
//方法（功能）
class drag{
	constructor(obj){
		this.obj = obj;
	}
	start(){
		this.move();
	}
	move(){
		//this ->drag
		let that = this;
		this.obj.onmousedown = function(e) {
			//相对于事件源的距离
			let ox =e.offsetX,oy =e.offsetY;
			//this->this.obj
			document.onmousemove = function(e){
				//获取相对于浏览器的距离
				let cx = e.clientX,cy = e.clientY;
				//this->document
				that.obj.style.left = `${cx-ox}px`;
				that.obj.style.top = `${cy-oy}px`;
			}
			that.obj.onmouseup = function(){
				document.onmousemove = null;
				that.obj.onmouseup = null;
			}
		}
		
	}
}
