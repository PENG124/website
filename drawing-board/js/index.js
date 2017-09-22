//属性
//线宽,粗细,端点,颜色,边数,角数,橡皮大小,宽高,历史记录,ctx,canvas
//方法
//划线,画虚线,铅笔,多边形,圆,矩形,多角形
//橡皮,裁切,文字,新建,保存

//历史记录和画布尺寸
function Palette(canvas){
	this.canvas = canvas;
	this.ctx = this.canvas.getContext('2d');
	//history
	this.history = [];
	//宽高
	this.cw = this.canvas.width;
	this.ch = this.canvas.height;
	//style
	this.lineWidth = 3;
	this.lineCap = 'butt';
	this.fillStyle = '#0078E6';
	this.strokeStyle = '#0078E6';
	
	//描边 ，填充
	this.style = 'fill';
}
Palette.prototype = {
//初始样式
	init:function(){
		this.ctx.lineWidth = this.lineWidth;
		this.ctx.lineCap = this.lineCap;
		this.ctx.fillStyle = this.fillStyle;
		this.ctx.strokeStyle = this.strokeStyle;
	},
//直线
	line:function(){
		let that=this;
		this.canvas.onmousedown=function(e){
			//起点
			let ox = e.offsetX,oy = e.offsetY;
			that.canvas.onmousemove = function(e){
				//移动的位置
				let cx = e.offsetX,cy = e.offsetY;
				that.ctx.clearRect(0,0,that.cw,that.ch);
				if (that.history.length>0) {
					that.ctx.putImageData(that.history[that.history.length-1],0,0)
				}
				that.init();
				that.ctx.beginPath();
				that.ctx.moveTo(ox,oy);
				that.ctx.lineTo(cx,cy);
				that.ctx.setLineDash([0]);
				that.ctx.closePath();
				that.ctx.stroke();
			}
		}
		this.canvas.onmouseup = function(){
			that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch))
			that.canvas.onmousemove = null;
		}
	},
//虚线
	dashed:function(){
		let that=this;
		this.canvas.onmousedown=function(e){
			//起点
			let ox = e.offsetX,oy = e.offsetY;
			that.canvas.onmousemove = function(e){
				//移动的位置
				let cx = e.offsetX,cy = e.offsetY;
				that.ctx.clearRect(0,0,that.cw,that.ch);
				if (that.history.length>0) {
					that.ctx.putImageData(that.history[that.history.length-1],0,0)
				}
				that.init();
				that.ctx.beginPath();
				that.ctx.setLineDash([10,50]);
				that.ctx.moveTo(ox,oy);
				that.ctx.lineTo(cx,cy);
				that.ctx.closePath()
				that.ctx.stroke();
				
			}
			that.canvas.onmouseup = function(){
				that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch))
				that.canvas.onmousemove = null;
				that.canvas.onmouseup = null;
			}
		}
	},
//画笔
	brush:function(){
		let that = this;
		this.canvas.onmousedown=function(e){
			//起点
			let ox = e.offsetX,oy = e.offsetY;
			if (that.history.length>0) {
				that.ctx.putImageData(that.history[that.history.length-1],0,0)
			}
			that.init();
			that.ctx.beginPath();
			that.ctx.moveTo(ox,oy);
			that.canvas.onmousemove = function(e){
				//移动的位置
				let cx = e.offsetX,cy = e.offsetY;
				that.ctx.lineTo(cx,cy);
				that.ctx.setLineDash([0]);
				that.ctx.stroke();
			
			}
			that.canvas.onmouseup = function(){
				that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch))
				that.canvas.onmousemove = null;
				that.canvas.onmouseup = null;
			}
		}
	},
//多边形
	poly:function(n){
		let that=this;
		this.canvas.onmousedown=function(e){
			let ox = e.offsetX,oy = e.offsetY;
			that.canvas.onmousemove = function(e){
				let cx = e.offsetX,cy = e.offsetY;
				let r =Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));
				
				poly(ox,oy,n,r)
			}
			that.canvas.onmouseup = function(){
				that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch))
				that.canvas.onmousemove = null;
				that.canvas.onmouseup = null;
			}
		}
		function poly(x,y,n,r){
			let ang = 360 /n/ 180*Math.PI;
			that.ctx.clearRect(0,0,that.cw,that.ch);
			if (that.history.length>0) {
				that.ctx.putImageData(that.history[that.history.length-1],0,0)
			}
			that.init();
			that.ctx.beginPath();
			that.ctx.moveTo(x+r,y);
			that.ctx.setLineDash([0]);
			for (let i =1;i<n;i++) {
				that.ctx.lineTo(x+r*Math.cos(ang*i),y+r*Math.sin(ang*i));
			}
			that.ctx.fill();
			that.ctx.fillStyle = '#0078E6';
		}
	},
//圆（描边）
	circle:function(){
		let that = this;
		this.canvas.onmousedown = function(e){
			let ox=e.offsetX,oy=e.offsetY;
			that.canvas.onmousemove=function(e){
				let cx = e.offsetX,cy = e.offsetY;
				let r =Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));
				that.ctx.clearRect(0,0,that.cw,that.ch);
				if (that.history.length>0) {
					that.ctx.putImageData(that.history[that.history.length-1],0,0)
				}
				that.init();
				that.ctx.beginPath();
//				that.ctx.moveTo(ox,oy)
				that.ctx.arc(ox,oy,r,0,2*Math.PI,false);
				that.ctx.closePath();
				that.ctx.stroke();
			}
			that.canvas.onmouseup = function(){
				that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch))
				that.canvas.onmousemove = null;
				that.canvas.onmouseup = null;
			}
		}
	},
//清除
	clear:function(){
		this.ctx.clearRect(0,0,this.cw,this.ch);
		this.history=[];
	},
//返回
	back:function(){
		if(this.history.length>=1){						
			let img = this.history.pop()
			this.ctx.putImageData(img,0,0);
		}else{
			this.ctx.clearRect(0,0,this.cw,this.ch)
			this.history=[];
		}
	},
//矩形(填充)
	ract:function(){
		let that=this;
		this.canvas.onmousedown=function(e){
			let ox = e.offsetX,oy = e.offsetY;
			that.canvas.onmousemove=function(e){
				let cx = e.offsetX,cy = e.offsetY;
				if (that.history.length>0) {
					that.ctx.putImageData(that.history[that.history.length-1],0,0)
				}
				that.init();
				that.ctx.beginPath();
				that.ctx.moveTo(ox,oy);
				that.ctx.lineTo(ox,cy);
				that.ctx.lineTo(cx,cy);
				that.ctx.lineTo(cx,oy);
				that.ctx.closePath();
				that.ctx.fill();
			}
			that.canvas.onmouseup = function(){
				that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch))
				that.canvas.onmousemove = null;
				that.canvas.onmouseup = null;
			}
		}
	},
//五角星(填充)
	star:function(){
		let that=this;
		let ang = 360 /10/ 180*Math.PI;
		this.canvas.onmousedown=function(e){
			let ox = e.offsetX,oy = e.offsetY;
			that.canvas.onmousemove = function(e){
				let cx = e.offsetX,cy = e.offsetY;
				let r =Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));
				
				let r1 = r/2;
				that.ctx.clearRect(0,0,that.cw,that.ch);
				if (that.history.length>0) {
					that.ctx.putImageData(that.history[that.history.length-1],0,0)
				}
				that.init();
				that.ctx.beginPath();
				that.ctx.moveTo(ox+r,oy);
				that.ctx.setLineDash([0]);
				for (let i =1;i<10;i++) {
					if (i%2) {
						that.ctx.lineTo(ox+r1*Math.cos(ang*i),oy+r1*Math.sin(ang*i));
					}else{
						that.ctx.lineTo(ox+r*Math.cos(ang*i),oy+r*Math.sin(ang*i));
					}
				}
				that.ctx.closePath();
				that.ctx.fill();
			}
			that.canvas.onmouseup = function(){
				that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch))
				that.canvas.onmousemove = null;
				that.canvas.onmouseup = null;
			}
		}
	},
//多角形（填充）
	polygon:function(n){
		let that=this;
		let ang = 360 /(n*2)/ 180*Math.PI;
		this.canvas.onmousedown=function(e){
			let ox = e.offsetX,oy = e.offsetY;
			that.canvas.onmousemove = function(e){
				let cx = e.offsetX,cy = e.offsetY;
				let r =Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));
				
				let r1 = r/2
				that.ctx.clearRect(0,0,that.cw,that.ch);
				if (that.history.length>0) {
					that.ctx.putImageData(that.history[that.history.length-1],0,0)
				}
				that.init();
				that.ctx.beginPath();
				that.ctx.moveTo(ox+r,oy);
				that.ctx.setLineDash([0]);
				for (let i =1;i<(n*2);i++) {
					if (i%2) {
						that.ctx.lineTo(ox+r1*Math.cos(ang*i),oy+r1*Math.sin(ang*i));
					}else{
						that.ctx.lineTo(ox+r*Math.cos(ang*i),oy+r*Math.sin(ang*i));
					}
				}
				that.ctx.closePath();
				that.ctx.fill();
			}
			that.canvas.onmouseup = function(){
				that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch))
				that.canvas.onmousemove = null;
				that.canvas.onmouseup = null;
			}
		}
	},

//文字
//裁切
//填充
//描边
//橡皮
	eraser:function(){
		let that = this;
		this.canvas.onmousedown = function(e){
			that.canvas.onmousemove = function(e){
				let cx = e.offsetX, cy = e.offsetY;
								
				that.ctx.clearRect(cx,cy,40,40);
			}
		}
		this.canvas.onmouseup = function(){
			that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch))
			if (that.history.length>0) {
					that.ctx.putImageData(that.history[that.history.length-1],0,0)
			}
			that.canvas.onmousemove = null;
		}
	},
//保存
//新建
//封装
	draw:function(type){
		let that=this;
		this.canvas.onmousedown=function(e){
			//起点
			let ox = e.offsetX,oy = e.offsetY;
			that.canvas.onmousemove = function(e){
				//移动的位置
				let cx = e.offsetX,cy = e.offsetY;
				if (that.history.length>0) {
					that.ctx.putImageData(that.history[that.history.length-1],0,0)
				}
				that.ctx.clearRect(0,0,that.cw,that.ch);
				that.ctx[that.style];
				that[type](ox,oy,cx,cy);
			}
		}
		that.canvas.onmouseup = function(){
			that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch))
			that.canvas.onmousemove = null;
			that.canvas.onmouseup = null;
		}
	}
}
