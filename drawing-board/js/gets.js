window.onload = function(){
	//画板
	let canvas = document.querySelector('canvas');
	// let bottom = document.querySelector('.bottom');
	//要添加的类
	let active = document.querySelector('.active');
	//全部获取的类
	let gets = document.querySelectorAll('.gets');
	//直线
	let line = document.querySelector('.line');
	//画笔
	let brush = document.querySelector('.brush');
	//橡皮
	let eraser = document.querySelector('.eraser');
	//虚线
	let dashed = document.querySelector('.dashed');
	//清除
	let clear = document.querySelector('.clear');
	//返回
	let back = document.querySelector('.back');
	//圆形
	let circle = document.querySelector('.circle');
	//多边形
	let poly = document.querySelector('.poly');
	let polys = document.querySelector('.polys');
	let pos = document.querySelectorAll('.pos');
	//矩形
	let ract = document.querySelector('.ract');	
	//五角星
	let star = document.querySelector('.star');
	//多角形
	let polygon = document.querySelector('.polygon');
	let jiaos = document.querySelector('.jiaos');
	let jis= document.querySelectorAll('.jis');
	
	//填充 描边
	let style = document.querySelectorAll('.style');
	//颜色版
	let inputs = document.querySelectorAll('input');
	//文字
	let font = document.querySelector('.font');
	//保存
	let save = document.querySelector('.icon-baocun');
	//反向
	let reverse = document.querySelector('.reverse');
	//裁切
	let crop = document.querySelector('.crop');
	let clip = document.querySelector('.clip');

	let palette = new Palette(canvas);
	
	//所有的类点击变颜色
//	function co(){
//		for (let i=0;i<gets.length;i++) {	
//			gets[i].classList.remove('active');
//		}
//	}
	
	//点击变颜色
	gets.forEach(element=>{
		element.onclick=function(){
			this.setAttribute('active',true)
			let active = document.querySelector('li[active=true]');
			active.setAttribute('active',false);
			if (this.id == brush) {
				palette.brush();
//				this.classList.add('active');
//				co();
			}else if(this.class == eraser) {
				palette.eraser();
//				this.classList.add('active');
//				co();
			}else if(this.id == clear) {
				palette.clear();
//				this.classList.add('active');
//				co();
			}else if(this.class == back) {
				palette.back();
//				this.classList.add('active');
//				co();
			}else{
				palette.draw(this.id);
//				this.classList.add('active');
//				co();
			}
		}
	})
	
	//填充
	style.forEach(element=>{
		element.onclick=function(){
			for(let i=0;i<style.length;i++){
				style[i].setAttribute('active',false);	
			}
			this.setAttribute('active',true);
			palette.style = this.id;
//			this.classList.add('active');
//			co();
		}
	})
	
	//yanseban
	inputs.forEach((element,index)=>{
		element.onchange=function(){
			if(index==0){
				palette.fillStyle = this.value;
			}else if (index==1){
				palette.strokeStyle = this.value;
			}
		}
	})
	
	document.onkeydown = function(e){
		if (e.ctrlKey&&e.keyCode==90) {
			palette.back();
		}
	}

	//文字
	font.onclick=function(){
		palette.font();
	}
	//多边形
	poly.onclick=function(){
		jiaos.style.display='none';
		polys.style.display='block';
		pos[0].onclick=function(){
			palette.poly(3);
		}
		pos[1].onclick=function(){
			palette.poly(4);
		}
		pos[2].onclick=function(){
			palette.poly(5);
		}
		pos[3].onclick=function(){
			palette.poly(6);
		}
		pos[4].onclick=function(){
			palette.poly(7);
		}
	}
	//保存成一张图片
	save.onclick = function(){
		save.href=canvas.toDataURL('image/png');
		save.download='a.png';
	}
	reverse.onclick=function(){
		palette.reverse();
	}
	//多角形
	polygon.onclick = function(){
		polys.style.display='none';
		jiaos.style.display='block';
		
		jis[0].onclick=function(){
			palette.polygon(3);
		}
		jis[1].onclick=function(){
			palette.polygon(4);
		}
		jis[2].onclick=function(){
			palette.polygon(5);
		}
		jis[3].onclick=function(){
			palette.polygon(6);
		}
		jis[4].onclick=function(){
			palette.polygon(7);
		}
	}
	//裁切
	crop.onclick=function(){
		palette.crop(clip);
	}
}	
//	//直线
//	line.onclick = function(){
//		co();
//		this.classList.add('active');
//		palette.line();
//	}
//	//多边形
//	poly.onclick = function(){
//		jiaos.style.display='none';
//		polys.style.display='block';
//		
//		co();
//		this.classList.add('active');
//		pos[0].onclick=function(){
//			palette.poly(3);
//		}
//		pos[1].onclick=function(){
//			palette.poly(4);
//		}
//		pos[2].onclick=function(){
//			palette.poly(5);
//		}
//		pos[3].onclick=function(){
//			palette.poly(6);
//		}
//		pos[4].onclick=function(){
//			palette.poly(7);
//		}
//	}
//	//矩形
//	ract.onclick = function(){
//		co();
//		this.classList.add('active');
//			palette.ract();
//	}
//	//画笔
//	brush.onclick = function(){
//		co();
//		this.classList.add('active');
//		palette.brush();
//	}
//	//虚线
//	dashed.onclick = function(){
//		co();
//		this.classList.add('active');
//		palette.dashed();
//	}
//	//圆
//	circle.onclick = function(){
//		co();
//		this.classList.add('active');
//		palette.circle();
//	}
//	//清空
//	clear.onclick=function(){
//		co();
//		this.classList.add('active');
//		palette.clear();
//	}
//	//橡皮
//	erasers.onclick = function(){
//		co();
//		this.classList.add('active');
//		palette.eraser();
//	}
//	//返回
//	document.onkeydown = function(e){
//		if (e.ctrlKey&&e.keyCode==90) {
//			palette.back();
//		}
//	}
//	back.onclick=function(){
//		co();
//		this.classList.add('active');
//		palette.back();
//	}
//	//五角星
//	star.onclick=function(){
//		co();
//		this.classList.add('active');
//		palette.star();
//	}
//	//多角形
//	polygon.onclick = function(){
//		polys.style.display='none';
//		jiaos.style.display='block';
//		co();
//		this.classList.add('active');
//		
//		jis[0].onclick=function(){
//			palette.polygon(3);
//		}
//		jis[1].onclick=function(){
//			palette.polygon(4);
//		}
//		jis[2].onclick=function(){
//			palette.polygon(5);
//		}
//		jis[3].onclick=function(){
//			palette.polygon(6);
//		}
//		jis[4].onclick=function(){
//			palette.polygon(7);
//		}
//	}

