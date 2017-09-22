window.addEventListener('load',function(){
	let nav = document.getElementsByTagName('nav')[0];
	let navs = document.getElementsByClassName('nn');
	let navbottom = document.getElementsByClassName('navbottom');
	let num = 0
	
	///导航栏\
	for (let j = 0; j <navs.length; j++) {
		navs[j].onmouseenter = function(){
			navbottom[j].style.display = 'block';
			navbottom[num].style.display = 'none';
		}
		navs[j].onmouseleave = function(){
			navbottom[j].style.display = 'none';
			navbottom[num].style.display = 'none';
		}
		num = j;
	}

},false)