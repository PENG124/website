window.onload = function () {
	let banner = document.getElementsByClassName('banner')[0];
	let imgq = banner.getElementsByClassName('big-lb')[0];
	let imgs = imgq.getElementsByTagName('li');
	let tealeft = document.getElementsByClassName('tea-c-left');
	let special = document.getElementsByClassName('tea-c-special');
	let bleft = document.getElementsByClassName('botton-left');
	let bright = document.getElementsByClassName('botton-right');
	// console.log(special);
	//banner图轮播
	let t;
	let num = 0;
	ban();
	t=setInterval(ban,3000);
	banner.onmouseenter = function(){
		clearInterval(t);
	}
	banner.onmouseleave = function(){
		t = setInterval(ban,1000)
	}
	function ban(){
		num++;
		if (num==imgs.length) {
			num = 0;
		}
		for (var i = 0; i < imgs.length; i++) {
			imgs[i].style.display = 'none';
		}
		imgs[num].style.display = 'block';
	}
	//左右按键
	bright.onclick = function(){
		num++;
		if (num==imgs.length) {
			num = 0;
		}
		for (var i = 0; i < imgs.length; i++) {
			imgs[i].style.display = 'none';
		}
		imgs[num].style.display = 'block';
	}

	tealeft[0].onmouseover = function(){
		special[0].style.width = '451px';
	}
	tealeft[0].onmouseout = function(){
		special[0].style.width = '0';
	}
}

// $(function(){
// 	console.log(12345);
// 	let big = $('big-lb')[0];
// 	//获取li列表
// 	let lis = $('li',big);
// 	//没必要获取img，因为轮播的时候是轮播的li
// 	//let imgs = $('img',lis); 
// 	let widths = lis[0].offsetWidth;
// 	let now = 0,next = 0;
// 	let t;

// 	t = setInterval(function(){
// 		move();
// 	},2000);

// 	function move() {
// 		next++;
// 		if (next==lis.length) {
// 			next = 0;
// 		}
// 		lis[next].style.left = `${widths}px`;
// 		animate(lis[now],{left:-widths});
// 		animate(lis[next],{left:0});
// 		now = next;
// 	}
// })