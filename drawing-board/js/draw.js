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
	this.bigbox=document.querySelector('.bottom');
	
	//描边 ，填充
	this.style = 'stroke';

	//裁切区域
	this.temp = null;
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
	line:function(ox,oy,cx,cy){
		this.ctx.beginPath();
		this.ctx.moveTo(ox,oy);
		this.ctx.lineTo(cx,cy);
		this.ctx.closePath()
		this.ctx[this.style]();
		this.ctx.setLineDash([0]);
	},
//虚线
	dashed:function(ox,oy,cx,cy){
		this.init();
		this.ctx.beginPath();
		this.ctx.moveTo(ox,oy);
		this.ctx.lineTo(cx,cy);
		this.ctx.closePath()
		this.ctx[this.style]();
		this.ctx.setLineDash([10,50]);
				
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
				that.ctx[that.style]();
			}
			that.canvas.onmouseup = function(){
				that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch))
				that.canvas.onmousemove = null;
//				that.canvas.onmouseup = null;
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
			that.ctx.closePath();
			that.ctx[that.style]();
		}
	},
//圆
	circle:function(ox,oy,cx,cy){
		let r =Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));
		this.init();
		this.ctx.beginPath();
		this.ctx.arc(ox,oy,r,0,2*Math.PI,false);
		this.ctx.closePath();
		this.ctx[this.style]();		
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
//矩形
	ract:function(ox,oy,cx,cy){
		this.init();
		this.ctx.beginPath();
		this.ctx.moveTo(ox,oy);
		this.ctx.lineTo(ox,cy);
		this.ctx.lineTo(cx,cy);
		this.ctx.lineTo(cx,oy);
		this.ctx.closePath();
		this.ctx[this.style]();
	},
//填充
//描边
//五角星
	star:function(ox,oy,cx,cy){
		let ang = 360 /10/ 180*Math.PI;
		let r =Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));
		
		let r1 = r/2;
		this.init();
		this.ctx.beginPath();
		this.ctx.moveTo(ox+r,oy);
		this.ctx.setLineDash([0]);
		for (let i =1;i<10;i++) {
			if (i%2) {
				this.ctx.lineTo(ox+r1*Math.cos(ang*i),oy+r1*Math.sin(ang*i));
			}else{
				this.ctx.lineTo(ox+r*Math.cos(ang*i),oy+r*Math.sin(ang*i));
			}
		}
		this.ctx.closePath();
		this.ctx[this.style]();
			
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
				that.ctx[that.style]();
			}
			that.canvas.onmouseup = function(){
				that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch))
				that.canvas.onmousemove = null;
				that.canvas.onmouseup = null;
			}
		}
	},

//橡皮
	eraser:function(){
		let that = this;
		this.canvas.onmousedown = function(e){
			e.preventDefault();
			that.canvas.onmousemove = function(e){
				e.preventDefault();
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
//文字
	font:function(){
		let that=this;
		this.canvas.ondblclick = function(e) {
			let ox = e.offsetX,oy=e.offsetY;
			//创建div
			let divs = document.createElement('div');
			divs.style.cssText=`
				width:200px; height:50px;border:1px dashed #0078E6;
				position:absolute;left:${ox}px;top:${oy}px;
			`;
			divs.contentEditable=true;
			that.bigbox.appendChild(divs);
			// that.canvas.onmousedown=null;
			let lefts,tops;
			divs.onmousedown=function(e){
				//相对于浏览器的位置
				let ox=e.clientX,oy=e.clientY;
				let ol=divs.offsetLeft,ot=divs.offsetTop;
				that.canvas.onmousemove=function(e){
					let cx=e.clientX,cy=e.clientY;
					if (that.history.length>0) {
						that.ctx.putImageData(that.history[that.history.length-1],0,0)
					}
					//原来的距离+鼠标移动的距离（移动后相对于浏览器的距离-移动前的）
					lefts=cx-ox+ol;
					tops=cy-oy+ot;
					divs.style.left=`${lefts}px`;
					divs.style.top=`${tops}px`;
				}
				divs.onmouseup=function(){
					that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch))
					that.canvas.onmousemove=null;
					this.onmouseup=null;
				}
			}
			divs.onblur=function(){
				//获取div的值
				let Text=this.innerText;
				that.ctx.textAlign='center';
				that.ctx.textBaseline='middle';
				that.ctx.font='bold 20px sans-serif';
				//填充文字
				that.ctx.fillText(Text,lefts,tops);
				//清除div
				that.bigbox.removeChild(divs);
			}
		}

	},
//裁切
	crop:function(clip){
		let that=this;
		this.canvas.onmousedown=function(e){
			//起点
			let ox = e.offsetX,oy = e.offsetY;
			let w,h,minX,minY;
			that.canvas.onmousemove = function(e){
				//移动的位置
				let cx = e.offsetX,cy = e.offsetY;
				w=Math.abs(cx-ox);
				h=Math.abs(cy-oy);
				minX=cx > ox ? ox : cx;
				minY=cy > oy ? oy : cy;
				clip.style.cssText=`
					display:block;
					width:${w}px;height:${h}px;
					left:${minX}px;top:${minY}px;
				`;				
			}
			that.canvas.onmouseup=function(){
				that.temp=that.ctx.getImageData(minX,minY,w,h);
				that.ctx.clearRect(minX,minY,w,h);

				that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch));

				that.ctx.putImageData(that.temp,minX,minY);

				that.canvas.onmousemove=null;
				that.canvas.onmouseup=null;

				that.drag(minX,minY,w,h,clip);
			}
		}

	},
//裁切拖动
	drag:function(minX,minY,w,h,clip){
		let that =this;
		this.canvas.onmousemove = function(e){
			//移动的位置
			let ox = e.offsetX,oy = e.offsetY;
			if (ox>minX&&ox<minX+w&&oy>minY&&oy<minY+h) {
				that.canvas.style.cursor='move';
			} else {
				that.canvas.style.cursor='default';
			}	
		}
		this.canvas.onmousedown=function(e){
			let ox = e.offsetX,oy = e.offsetY;
			that.canvas.onmousemove = function(e){
				let cx = e.offsetX,cy = e.offsetY;

				let lefts=cx-ox+minX,tops=cy-oy+minY;
				clip.style.left=`${lefts}px`;
				clip.style.top=`${tops}px`;
				//设置边界
				if (lefts<=0) {
					lefts=0;
				}
				if (lefts>=that.cw+w) {
					lefts=that.cw+w;
				}
				if (tops<=0) {
					tops=0;
				}
				if (tops>=that.ch+h) {
					tops=that.ch+h;
				}
				if (that.history.length>0) {
					that.ctx.putImageData(that.history[that.history.length-1],0,0)
				}

				that.ctx.putImageData(that.temp,lefts,tops);
			}
			that.canvas.onmouseup=function(){
				clip.style.cssText=`
					display:none;`;
				that.temp=null;

				that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch));	
				that.canvas.style.cursor='default';
				that.canvas.onmousemove=null;				
				that.canvas.onmousedown=null;
				that.canvas.onmouseup=null;
			}
		}
		this.canvas.onmouseup=function(){
			this.canvas.onmousemove=null;
			this.canvas.onmouseup=null;
		}
	},
//反向
	reverse:function(){
		let imgData=this.ctx.getImageData(0,0,this.cw,this.ch);
		let data=imgData.data;
		for (let i = 0; i < data.length; i+=4) {
			data[i]=255-data[i];
			data[i+1]=255-data[i+1];
			data[i+2]=255-data[i+2];
		}
		this.ctx.putImageData(imgData,0,0)
	},

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
				that.ctx.clearRect(0,0,that.cw,that.ch);
				if (that.history.length>0) {
					that.ctx.putImageData(that.history[that.history.length-1],0,0)
				}
				that.ctx[that.style];
				that[type](ox,oy,cx,cy);
			}
		}
		that.canvas.onmouseup = function(){
			that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch))
			that.canvas.onmousemove = null;
		}
	},
}
