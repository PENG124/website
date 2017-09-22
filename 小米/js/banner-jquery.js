$(function(){	
	let num = 0;
	let numx = 0;
	let t;
	let t1;
	let flag = true;
	//导航栏
	for (let i= 0; i<$(".nn").length;i++) {
		$(".nn").eq(i).mouseenter(function(){
			$('.navbottom').css({"z-index":0,opacity:0});
			$('.navbottom').eq(i).css({opacity:1,"z-index":6});
		}).mouseleave(function(){
			$('.navbottom').css({"z-index":0,opacity:0});
		})
	}
	//购物车
	
	$(".car").hover(function(){
		$(".car1").css("display","block");
	}).mouseleave(function(){
		$(".car1").css("display","none");
	})

	//侧导航	
	$(".aside1 a").hover(function(){
		$(".special").css({"display":"none"});
		$(this).next(".special").css({"display":"block"});
	})
	$("aside").mouseleave(function(){
		$(".special").css({"display":"none"});
	})

	//圆点点击轮播
	for (let j=0;j<$(".diandianli").length;j++) {
		$(".diandianli").eq(j).click(function(){
			$(".banner1 li").css({opacity:0,"z-index":0})
			$(".diandianli").css("background","#fff")
			$(".banner1 li").eq(j).css({"opacity":1,"z-index":3})
			$(".diandianli").eq(j).css("background","#333")
		})
	}

	//按键右边
	$('.huan-right').click(function(){
		fn();
	});
	$('.huan-left').click(function(){
		fn1();
	});
	//自动轮播
	t = setInterval(function(){
		fn();
	},3000);

	//当鼠标移到banner图上，清除自动轮播，鼠标离开，继续动起来
	$('.banner').mouseenter(function(){
		clearInterval(t);
	})
	$('.banner').mouseleave(function(){
		t = setInterval(function(){
			fn();
		},3000);
	})
	//右
	function fn(){
		num++;
		if (num==$(".banner1 li").length) {
			num=0;
		}
		$(".banner1 li").css({opacity:0,"z-index":0})
		$(".diandianli").css("background","#fff")
		$(".banner1 li").eq(num).css({"opacity":1,"z-index":3})
		$(".diandianli").eq(num).css("background","#333")
	}
	//左
	function fn1(){
		num--;
		if (num== -1) {
			num=$(".banner1 li").length-1;
		}
		$(".banner1 li").css({opacity:0,"z-index":0})
		$(".diandianli").css("background","#fff")
		$(".banner1 li").eq(num).css({"opacity":1,"z-index":3})
		$(".diandianli").eq(num).css("background","#333")
	}
	//小米明星单品
	let danpin = $('.danpin')
	//左平移	往左走《
	$(".icons").first().click(function(){
		this.disabled = true;//点击一次之后不让点击了
		danpin.css({marginLeft:'-1240px'});//向左移动
	})
	//右平移	往右走》
	$(".icons").last().click(function(){
		this.disabled = true;//点击一次之后不让点击了
		danpin.css({marginLeft:0});//向右移动
	})

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
		danpin.css({transform:"tranlateX${-1240*numx}px"});
	}
	//input搜索
	
	$(".sousuo").focus(function(){
		$(".rengong").css("display","none");
		$(".mix").css("display","none");
		$(".xiala").css("display","block");
		$(".sousuo").css("border","1px solid #ff6700");
		$(".nav2-right").css("border","1px solid #ff6700");
	}).blur(function(){
		$(".rengong").css("display","block");
		$(".mix").css("display","block");
		$(".xiala").css("display","none");
		$(".sousuo").css("border","1px solid #000");
		$(".nav2-right").css("border","1px solid #000");
	})
	//家电轮播
	for (let i =0;i<$('.jiadian .jiadian1-right li').length;i++) {
		$('.jiadian .jiadian1-right li').eq(i).hover(function () {
			$('.jiadian .jiadian2').css("display","none");
			$('.jiadian .jiadian2').eq(i).css("display","block");
		})
	}
	//智能轮播
	for (let i =0;i<$('.zhineng .jiadian1-right li').length;i++) {
		$('.zhineng .jiadian1-right li').eq(i).hover(function () {
			$('.zhineng .jiadian2').css("display","none");
			$('.zhineng .jiadian2').eq(i).css("display","block");
		})
	}
	//搭配轮播
	for (let i =0;i<$('.dapei .jiadian1-right li').length;i++) {
		$('.dapei .jiadian1-right li').eq(i).hover(function () {
			$('.dapei .jiadian2').css("display","none");
			$('.dapei .jiadian2').eq(i).css("display","block");
		})
	}
	//配件轮播
	for (let i =0;i<$('.peijian .jiadian1-right li').length;i++) {
		$('.peijian .jiadian1-right li').eq(i).hover(function () {
			$('.peijian .jiadian2').css("display","none");
			$('.peijian .jiadian2').eq(i).css("display","block");
		})
	}
	//周边轮播
	for (let i =0;i<$('.zhoubian .jiadian1-right li').length;i++) {
		$('.zhoubian .jiadian1-right li').eq(i).hover(function () {
			$('.zhoubian .jiadian2').css("display","none");
			$('.zhoubian .jiadian2').eq(i).css("display","block");
		})
	}
	//为你推荐
	let lbtn1 =document.getElementsByClassName('icon')[1];
	let lbtn= lbtn1.getElementsByClassName('iconfont')[1];
	let rbtn= lbtn1.getElementsByClassName('iconfont')[0];
	let box = document.getElementsByClassName('danpinx')[0];
	let n = 0;
	
	//左平移	往左走《
	lbtn.onclick=function(){
		if(n==3){
			this.disabled = true;//点击一次之后不让点击了			
			return;
		}
		n++;
		box.style.marginLeft=`${-1240*n}px`;//向左移动
	}
	//右平移	往右走》
	rbtn.onclick=function(flag){
		if(n==0){
			return;
		}
		n--;
		box.style.marginLeft=`${-1240*n}px`;//向右移动
	}

	//内容
	//1
	$(".ccyou:eq(0)").click(function(){nr(0);})
	$(".cczuo:eq(0)").click(function(){nr1(0);})
	//2
	$(".ccyou:eq(1)").click(function(){nr(1);})
	$(".cczuo:eq(1)").click(function(){nr1(1);})
	//3
	$(".ccyou:eq(2)").click(function(){nr(2);})
	$(".cczuo:eq(2)").click(function(){nr1(2);})
	//4
	$(".ccyou:eq(3)").click(function(){nr(3);})
	$(".cczuo:eq(3)").click(function(){nr1(3);})
	function nr(n){
		if (n==0) {
			num++;
			if (num==$(".neirong1 .neirongx").length) {
				num=0;
			}
			$(".neirong1 .neirongx").css({display:"none"})
			$(".neirong1 .neirong-dian div").css("background","#fff")
			$(".neirong1 .neirongx").eq(num).css({"display":"block"})
			$(".neirong1 .neirong-dian div").eq(num).css("background","#ff6700")
		} else if (n==1) {
			num++;
			if (num==$(".neirong2 .neirongx").length) {
				num=0;
			}
			$(".neirong2 .neirongx").css({display:"none"})
			$(".neirong2 .neirong-dian div").css("background","#fff")
			$(".neirong2 .neirongx").eq(num).css({"display":"block"})
			$(".neirong2 .neirong-dian div").eq(num).css("background","#ff6700")
		}else if (n==2) {
			num++;
			if (num==$(".neirong3 .neirongx").length) {
				num=0;
			}
			$(".neirong3 .neirongx").css({display:"none"})
			$(".neirong3 .neirong-dian div").css("background","#fff")
			$(".neirong3 .neirongx").eq(num).css({"display":"block"})
			$(".neirong3 .neirong-dian div").eq(num).css("background","#ff6700")
		} else if (n==3) {
			num++;
			if (num==$(".neirong4 .neirongx").length) {
				num=0;
			}
			$(".neirong4 .neirongx").css({display:"none"})
			$(".neirong4 .neirong-dian div").css("background","#fff")
			$(".neirong4 .neirongx").eq(num).css({"display":"block"})
			$(".neirong4 .neirong-dian div").eq(num).css("background","#ff6700")
		}
	}
	function nr1(n){
		if (n==0) {
			num--;
			if (num== -1) {
				num=$(".neirong1 .neirongx").length-1;
			}
			$(".neirong1 .neirongx").css({display:"none"})
			$(".neirong1 .neirong-dian div").css("background","#fff")
			$(".neirong1 .neirongx").eq(num).css({"display":"block"})
			$(".neirong1 .neirong-dian div").eq(num).css("background","#ff6700")
		} else if(n==1){
			num--;
			if (num== -1) {
				num=$(".neirong2 .neirongx").length-1;
			}
			$(".neirong2 .neirongx").css({display:"none"})
			$(".neirong2 .neirong-dian div").css("background","#fff")
			$(".neirong2 .neirongx").eq(num).css({"display":"block"})
			$(".neirong2 .neirong-dian div").eq(num).css("background","#ff6700")
		}else if (n==2) {
			num--;
			if (num== -1) {
				num=$(".neirong3 .neirongx").length-1;
			}
			$(".neirong3 .neirongx").css({display:"none"})
			$(".neirong3 .neirong-dian div").css("background","#fff")
			$(".neirong3 .neirongx").eq(num).css({"display":"block"})
			$(".neirong3 .neirong-dian div").eq(num).css("background","#ff6700")
		} else if(n==3){
			num--;
			if (num== -1) {
				num=$(".neirong4 .neirongx").length-1;
			}
			$(".neirong4 .neirongx").css({display:"none"})
			$(".neirong4 .neirong-dian div").css("background","#fff")
			$(".neirong4 .neirongx").eq(num).css({"display":"block"})
			$(".neirong4 .neirong-dian div").eq(num).css("background","#ff6700")
		}
	}
	//内容圆点点击轮播
	//1
	for (let i=0;i<$(".neirong1 .neirong-dian div").length;i++) {
		$(".neirong1 .neirong-dian div").eq(i).click(function(){
			$(".neirong1 .neirongx").css({display:"none"})
			$(".neirong1 .neirong-dian div").css("background","#fff")
			$(".neirong1 .neirongx").eq(i).css({"display":"block"})
			$(".neirong1 .neirong-dian div").eq(i).css("background","#ff6700")
		})
	}
	//2
	for (let i=0;i<$(".neirong2 .neirong-dian div").length;i++) {
		$(".neirong2 .neirong-dian div").eq(i).click(function(){
			$(".neirong2 .neirongx").css({display:"none"})
			$(".neirong2 .neirong-dian div").css("background","#fff")
			$(".neirong2 .neirongx").eq(i).css({"display":"block"})
			$(".neirong2 .neirong-dian div").eq(i).css("background","#ff6700")
		})
	}
	//3
	for (let i=0;i<$(".neirong3 .neirong-dian div").length;i++) {
		$(".neirong3 .neirong-dian div").eq(i).click(function(){
			$(".neirong3 .neirongx").css({display:"none"})
			$(".neirong3 .neirong-dian div").css("background","#fff")
			$(".neirong3 .neirongx").eq(i).css({"display":"block"})
			$(".neirong3 .neirong-dian div").eq(i).css("background","#ff6700")
		})
	}
	//4
	for (let i=0;i<$(".neirong4 .neirong-dian div").length;i++) {
		$(".neirong4 .neirong-dian div").eq(i).click(function(){
			$(".neirong4 .neirongx").css({display:"none"})
			$(".neirong4 .neirong-dian div").css("background","#fff")
			$(".neirong4 .neirongx").eq(i).css({"display":"block"})
			$(".neirong4 .neirong-dian div").eq(i).css("background","#ff6700")
		})
	}
})