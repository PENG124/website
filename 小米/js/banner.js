/////////
window.onload = function () {
	let aside = document.getElementsByClassName('aside1');
	let special = document.getElementsByClassName('special');
	let banner = document.getElementsByClassName('banner')[0];
	let banner1 = document.getElementsByClassName('banner1')[0];
	let ground = banner1.getElementsByTagName('li');
	let dian = document.getElementsByClassName('dian')[0];
	let circle = dian.getElementsByClassName('diandianli');
	let on = document.getElementsByClassName('banner-right')[0];
	let onleft = on.getElementsByClassName('huan-left');
	let onright = on.getElementsByClassName('huan-right');
	
	let num = 0;
	let numx = 0;
	let t;
	let t1;
	let flag = true;
	


//侧导航
	for (let i=0;i<aside.length;i++) {
		aside[i].onmouseenter = function () {
			let asides = this.getElementsByClassName('special')[0]
			asides.style.display = 'block';
		}
		aside[i].onmouseleave = function () {
			let asides = this.getElementsByClassName('special')[0]
			asides.style.display = 'none';
		}
	}
//圆点点击轮播
	for (let i=0;i<circle.length;i++) {
		circle[i].onclick = function(){
			ground[num].style.display = 'none';
			ground[i].style.display = 'block';
			circle[i].style.background = '#333';
			circle[num].style.background = '#fff';
			num = i;
		}
	}
//自动轮播
	t = setInterval(fn,1000);
	
//按键右边
	onright[0].onclick = fn;
	onleft[0].onclick = fn1;

	function fn(){
		num++;
		if (num==ground.length) {
			num=0;
		}
		for (let i = 0; i < ground.length; i++) {
			ground[i].style.display = 'none';
			circle[i].style.background = '#fff';
		}
		ground[num].style.display = 'block';
		circle[num].style.background = '#333';
	}
	function fn1(){
		num--;
		if (num== -1) {
			num=ground.length-1;
		}
		for (let i = 0; i<ground.length ; i++) {
			ground[i].style.display = 'none';
			circle[i].style.background = '#fff';
		}
		ground[num].style.display = 'block';
		circle[num].style.background = '#333';
	}
//当鼠标移到banner图上，清除自动轮播，鼠标离开，继续动起来
	banner.onmouseenter = function(){
		clearInterval(t);
	}
	banner.onmouseleave = function(){
		t = setInterval(fn,3000);
	}
//小米明星单品
	let lbtns =document.getElementsByClassName('icon')[0];
	let aa = lbtns.getElementsByClassName('iconfont')[1];
	let bb = lbtns.getElementsByClassName('iconfont')[0];
	let danpin = document.getElementsByClassName('danpin')[0];

	
	//左平移	往左走《
	aa.onclick = function(){
		this.disabled = true;//点击一次之后不让点击了
		danpin.style.marginLeft='-1240px';//向左移动
	}
	//右平移	往右走》
	bb.onclick = function(){
		this.disabled = true;//点击一次之后不让点击了
		danpin.style.marginLeft=0;//向右移动
	}
	
	t1 =setInterval(mm,1000);
	
	function mm () {
		if(flag){
			if (numx==3) {
				flag = false;
				return;
			} 
			numx++;
		}else{
			if(numx==0){
				flag = true;
				return;
			}
			numx--;
		}
		
		danpin.style.transform=`tranlateX${-1240*numx}px`;
//		danpin.style.transform=`tranlateX${-1240*num}px`;
	}
}
