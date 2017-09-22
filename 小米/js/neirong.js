window.addEventListener('load',function(){

	let dian = document.getElementsByClassName('neirong-dian')[0];
	let circle = dian.getElementsByTagName('div');
	let ground = document.getElementsByClassName('neirongx');
	let onleft = document.getElementsByClassName('cczuo');
	let onright = document.getElementsByClassName('ccyou');
	let num=0;
	
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
		circle[num].style.background = '#ff6700';
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
		circle[num].style.background = '#ff6700';
	}
	//圆点点击轮播
	for (let i=0;i<circle.length;i++) {
		circle[i].onclick = function(){
			ground[num].style.display = 'none';
			ground[i].style.display = 'block';
			circle[i].style.background = '#ff6700';
			circle[num].style.background = '#fff';
			num = i;
		}
	}

},false)