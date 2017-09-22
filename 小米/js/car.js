window.addEventListener('load',function () {
	let car = document.getElementsByClassName('car')[0];
	let car1 = document.getElementsByClassName('car1');
	
//	console.log(car1)
	car.onmouseenter=function(){
		car1[0].style.display = 'block';
	}
	car.onmouseleave=function(){
		car1[0].style.display = 'none';
	}
},false)
