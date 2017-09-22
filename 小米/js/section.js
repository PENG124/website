window.addEventListener('load',function(){
	//鼠标移入家电
	let xxx = document.getElementsByClassName('jidian1')[0];
	let jia = xxx.getElementsByClassName('jiadian1-right')[0];
	let lis = jia.getElementsByTagName('li');
	let jiadian = document.getElementsByClassName('jiadian5');
	let num = 0;
	console.log(lis)
	for (let i =0;i<lis.length;i++) {
		lis[i].onmouseenter = function () {
			jiadian[i].style.display = 'block';
//			jiadian[num].style.display = 'none';
//			console.log(num)
		}
		
//		lis[i].onmouseleave = function () {
////			jiadian[i].style.display = 'none';
////			jiadian[num].style.display = 'none';
//		}
//		num = i;
	}
	
},false)