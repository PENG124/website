window.addEventListener('load',function () {
	//为你推荐
//	let lbtn1 =document.getElementsByClassName('icon')[1];
//	let tj1= lbtn1.getElementsByClassName('iconfont')[1];
//	let tj2= lbtn1.getElementsByClassName('iconfont')[0];
//	let danpin1 = document.getElementsByClassName('danpin')[1];
//	
//	console.log(lbtn1)
//	//左平移	往左走《
//	tj1.onclick = function(){
//		this.disabled = true;//点击一次之后不让点击了
//		danpin1.style.marginLeft='-1240px';//向左移动
//	}
//	//右平移	往右走》
//	tj2.onclick = function(){
//		this.disabled = true;//点击一次之后不让点击了
//		danpin1.style.marginLeft=0;//向右移动
//	}
	let lbtn1 =document.getElementsByClassName('icon')[1];
	let lbtn= lbtn1.getElementsByClassName('iconfont')[1];
	let rbtn= lbtn1.getElementsByClassName('iconfont')[0];
	let box = document.getElementsByClassName('danpinx')[0];
	let num = 0;
	
//	console.log(box)
	//左平移	往左走《
	lbtn.onclick=function(){
		if(num==3){
			this.disabled = true;//点击一次之后不让点击了
			
			
			return;
		}
		num++;
		box.style.marginLeft=`${-1240*num}px`;//向左移动
	}
	//右平移	往右走》
	rbtn.onclick=function(flag){
		if(num==0){
			return;
		}
		num--; 
//		this.disabled = true;//点击一次之后不让点击了
		box.style.marginLeft=`${-1240*num}px`;//向右移动
	}
	

},false)