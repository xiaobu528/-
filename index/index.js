// 轮播图
  var bannerEl = document.querySelector("div.banner");
  var sliderUlEl = document.createElement("ul");
  var indicatorUlEl = document.createElement("ul");
  sliderUlEl.className = "banner-slider";
  indicatorUlEl.className = "banner-indicator";
  bannerEl.appendChild(sliderUlEl);
  bannerEl.appendChild(indicatorUlEl);
  var bannerImgs = [
   		"../images/banner/27.jpg",
   		"../images/banner/21.jpg",
   		"../images/banner/22.jpg",
   		"../images/banner/23.jpg",
  		"../images/banner/24.jpg",
 		"../images/banner/25.jpg",
 		"../images/banner/26.jpg",
 		"../images/banner/27.jpg",
 		"../images/banner/21.jpg"
   	];
  	bannerImgs.forEach(function(item,i){
		$(`
  	      <li>
 		  <a>
  		   <img src="${bannerImgs[i]}">
 		   </a>
  		  </li>
         `).appendTo(sliderUlEl);
 		});
 		var indicatorImgs = [
 			    "../images/banner-lider/21.jpg",
 		 		"../images/banner-lider/22.jpg",
 		 		"../images/banner-lider/23.jpg",
 		 		"../images/banner-lider/24.jpg",
 		 		"../images/banner-lider/25.jpg",
 				"../images/banner-lider/26.jpg",
 				"../images/banner-lider/27.jpg"
 		 	];
 			indicatorImgs.forEach(function(item,i){
				$(`
 			      <li>
 				   <img src="${indicatorImgs[i]}">
 				  </li>
 		       `).appendTo(indicatorUlEl);
 			   indicatorImgs[0].className = "active";
              });
  // 全局变量，记录当前哪一张是激活的
  var index = 0;
  var interval = 5000;//轮播图轮播的间隔时间
  var timer = null;//保存计时器对象
  var count = 7;//总共实际要轮播的图片数量
  var lock = false;//标识是否在执行动画，false是关键字
  // 自动播放的时候
  // 点击轮播图指示器的时候
  // 点击上一张下一张按钮的时候
  function slide(nextIndex) {
  	if(lock) return;//如果当前正在执行轮播动画则直接返回
  	lock = true;
  	var slider = document.querySelector("ul.banner-slider");
  	slider.style.transitionDuration = "1s";
  	slider.style.marginLeft = -1 * nextIndex + "00%";
  	// 指示器切换
  	var indicators = document.querySelectorAll("ul.banner-indicator>li");
  	indicators[index].className = '';
  		// 更新index
  	if(nextIndex === count) index = 0;
  	else if(nextIndex === -1) index = count - 1;
  	else index = nextIndex;
  	indicators[index].className = 'active';//让指定激活
  	
  	// 重置实现无缝效果
  	setTimeout(function() {
  		slider.style.transitionDuration = "0s";
  		if(nextIndex === count) {slider.style.marginLeft = "0%";}
  		if(nextIndex === -1) {slider.style.marginLeft = -1 * (count - 1) + "00%";}
  		lock = false;//动画结束后，开锁
  	},1020);
  }
  // 自动播放
  function play() {
  	timer = setInterval(function() {slide(index + 1);},interval);//函数名不要加括号
  }
  // 鼠标滑入banner区域，停止自动播放
  $(".banner").onmouseover = function() {clearInterval(timer);};
  // 鼠标滑出banner区域，恢复自动播放
  $(".banner").onmouseout = function() {play();};
  // 指示器点击切换轮播图
  var indicators = $("ul.banner-indicator>li");
  var imgs = $("ul.banner-indicator>li>img");
  for(var i = 0; i < indicators.length; i++) {
  	indicators[i].i = i;
  	indicators[i].onclick = function() {
 		if(this.className === "active")return;
 		slide(this.i);
 	
  	};
 	
  }
  play();
 
 // 切换图片

  $(".tab").each(function(i,tab){
  			$("ul.tab-title>li").click(function(){
  				if($(this).hasClass("active"))return;
  				$(this).add(`ul.tab-content>li:eq(${$(this).index()})`).
  				addClass("active").siblings(".active").removeClass("active");
  			});
  			});
 
 
//  // 轮播图
//  var bannerEl = document.querySelector("div.banner");
//  var sliderUlEl = document.createElement("ul");
//  var indicatorUlEl = document.createElement("ul");
//  sliderUlEl.className = "banner-slider";
//  indicatorUlEl.className = "banner-indicator";
//  bannerEl.appendChild(sliderUlEl);
//  bannerEl.appendChild(indicatorUlEl);
//  var bannerImgs = [
//   		"../images/banner/27.jpg",
//   		"../images/banner/21.jpg",
//   		"../images/banner/22.jpg",
//   		"../images/banner/23.jpg",
//  		"../images/banner/24.jpg",
// 		"../images/banner/25.jpg",
// 		"../images/banner/26.jpg",
// 		"../images/banner/27.jpg",
// 		"../images/banner/21.jpg"
//   	];
//  	bannerImgs.forEach(function(item,i){
//  		sliderUlEl.innerHTML += `
//  	      <li>
// 		  <a>
//  		   <img src="${bannerImgs[i]}">
// 		   </a>
//  		  </li>
//         `;
// 		});
// 		var indicatorImgs = [
// 			    "../images/banner-lider/21.jpg",
// 		 		"../images/banner-lider/22.jpg",
// 		 		"../images/banner-lider/23.jpg",
// 		 		"../images/banner-lider/24.jpg",
// 		 		"../images/banner-lider/25.jpg",
// 				"../images/banner-lider/26.jpg",
// 				"../images/banner-lider/27.jpg"
// 		 	];
// 			indicatorImgs.forEach(function(item,i){
// 				indicatorUlEl.innerHTML += `
// 			      <li>
// 				   <img src="${indicatorImgs[i]}">
// 				  </li>
// 		       `;
// 			   indicatorImgs[0].className = "active";
//              });
//  // 全局变量，记录当前哪一张是激活的
//  var index = 0;
//  var interval = 5000;//轮播图轮播的间隔时间
//  var timer = null;//保存计时器对象
//  var count = 7;//总共实际要轮播的图片数量
//  var lock = false;//标识是否在执行动画，false是关键字
//  // 自动播放的时候
//  // 点击轮播图指示器的时候
//  // 点击上一张下一张按钮的时候
//  function slide(nextIndex) {
//  	if(lock) return;//如果当前正在执行轮播动画则直接返回
//  	lock = true;
//  	var slider = document.querySelector("ul.banner-slider");
//  	slider.style.transitionDuration = "1s";
//  	slider.style.marginLeft = -1 * nextIndex + "00%";
//  	// 指示器切换
//  	var indicators = document.querySelectorAll("ul.banner-indicator>li");
//  	indicators[index].className = '';
//  		// 更新index
//  	if(nextIndex === count) index = 0;
//  	else if(nextIndex === -1) index = count - 1;
//  	else index = nextIndex;
//  	indicators[index].className = 'active';//让指定激活
 	
//  	// 重置实现无缝效果
//  	setTimeout(function() {
//  		slider.style.transitionDuration = "0s";
//  		if(nextIndex === count) {slider.style.marginLeft = "0%";}
//  		if(nextIndex === -1) {slider.style.marginLeft = -1 * (count - 1) + "00%";}
//  		lock = false;//动画结束后，开锁
//  	},1020);
//  }
//  // 自动播放
//  function play() {
//  	timer = setInterval(function() {slide(index + 1);},interval);//函数名不要加括号
//  }
//  // 鼠标滑入banner区域，停止自动播放
//  document.querySelector(".banner").onmouseover = function() {clearInterval(timer);};
//  // 鼠标滑出banner区域，恢复自动播放
//  document.querySelector(".banner").onmouseout = function() {play();};
//  // 指示器点击切换轮播图
//  var indicators = document.querySelectorAll("ul.banner-indicator>li");
//  var imgs = document.querySelectorAll("ul.banner-indicator>li>img");
//  for(var i = 0; i < indicators.length; i++) {
//  	indicators[i].i = i;
//  	indicators[i].onclick = function() {
// 		if(this.className === "active")return;
// 		slide(this.i);
// 	// 	imgs[i].i = i;
// 	//     imgs[i].onclick() = {
// 	// 	if(imgs[i].className === "active"){
// 	// 		imgs[i].style.border = `2px solid #FF0000`
// 	// 	}
// 	// }
//  	};
	
//  }
//  play();

// // 切换图片
// var tabs = document.querySelectorAll(".tab");
// 			tabs.forEach(function(tab){
// 				var lis =  tab.querySelectorAll("ul.tab-title>li");
// 			   for(var i = 0; i< lis.length; i++){
// 				   (function(i){
// 					   lis[i].onclick = function(){
// 						   if(this.className.indexOf("active")!== -1)return;
// 						   // 让当前激活的不激活
// 						    var activeTitle = tab.querySelector("ul.tab-title>li.active");
// 							activeTitle.className = activeTitle.className.replace("active","");
// 							var activeContent = tab.querySelector("ul.tab-content>li.active");
// 							activeContent.className = activeContent.className.replace("active","");
// 					       //让该激活的激活
// 						   this.className += " active";
// 						   tab.querySelectorAll("ul.tab-content>li")[i].className +="active";
// 					   };
// 				   })(i);
// 			   }
// 			});
 
 
  
  
  
  
 
  

 