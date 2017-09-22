window.addEventListener('load',function () {
	let sousuo = document.getElementsByClassName('sousuo');
	let rengong = document.getElementsByClassName('rengong');
	let mix = document.getElementsByClassName('mix');
	let xiala = document.getElementsByClassName('xiala');
	let navright = document.getElementsByClassName('nav2-right');
//input
	sousuo[0].onclick = function(){
		rengong[0].style.display = 'none';
		mix[0].style.display = 'none';
		xiala[0].style.display = 'block';
		sousuo[0].style.border = '1px solid #ff6700';
		navright[0].style.border = '1px solid #ff6700';
	}
	//
	sousuo[0].onblur =function(){
		rengong[0].style.display = 'block';
		mix[0].style.display = 'block';
		xiala[0].style.display = 'none';
		sousuo[0].style.border = '1px solid #000';
		navright[0].style.border = '1px solid #000';
	}
},false)