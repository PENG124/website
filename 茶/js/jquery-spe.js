$(function(){
	//banner图轮播
	let t;
	let num = 0;
	t=setInterval(function(){ban();},3000);
	$(".banner").mouseenter(function(){
		clearInterval(t);
	}).mouseleave(function(){
		t = setInterval(function(){ban();},3000)
	})
	function ban(){
		num++;
		if (num == $(".big-lb li").length){
			num = 0;
		}
		$(".shao").css({
			opacity:0.1,
			bottom:"-200px",
			right:0

		})
		$(".big-lb li").css("display","none");
		$(".big-lb li").eq(num).css("display","block");
		$(".shao").eq(num).animate({
			opacity:0.5,
			bottom:"200px",
			right:"200px"
		},1000)
	}
	//左右按键
	$(".botton-right").click(function(){
		ban();
	})
	$(".botton-left").click(function(){
		num--;
		if (num==-1) {
			num = $(".big-lb li").length-1;
		}
		$(".shao").css({
			opacity:0.1,
			bottom:"-200px",
			right:0

		})
		$(".big-lb li").css("display","none");
		$(".big-lb li").eq(num).css("display","block");
		$(".shao").eq(num).animate({
			opacity:0.5,
			bottom:"200px",
			right:"200px"
		},1000)
	})

	//茶道
	$(".tea-c-left").hover(function(){
		$(".tea-c-special").animate({"height":496});
	},function(){
		$(".tea-c-special").animate({"height":0});
	})
})