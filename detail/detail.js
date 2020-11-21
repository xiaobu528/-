//动态创建

 var zoomWrapperDivEl = document.createElement("div"),
	 bigImagListWrapperDivEl = document.createElement("div"),
	 zoomDivEl = document.createElement("div"),
	 zoomBigDivEl = document.createElement("div"),
	 imageListWrapperDivEl = document.createElement("div"),
	 bigImageListUlEl = document.createElement("ul"),
	 imageListUlEl = document.createElement("ul"),
	 imageLiEl = document.createElement("li");
	 	 
     zoomWrapperDivEl.className = "zoom-wrapper";
	 bigImagListWrapperDivEl.className = "big-image-list-wrapper";
	 zoomDivEl.className = "zoom";
	 zoomBigDivEl.className = "zoom-big";
	 imageListWrapperDivEl.className = "image-list-wrapper";
	 bigImageListUlEl.className = "big-image-list";
	 imageListUlEl.className = "image-list";
	 
	 var boxDivEl = document.querySelector(".box");
     boxDivEl.appendChild(zoomWrapperDivEl);
	 boxDivEl.appendChild(imageListWrapperDivEl);
	 zoomWrapperDivEl.appendChild(bigImagListWrapperDivEl);
     bigImagListWrapperDivEl.appendChild(zoomDivEl);
	 bigImagListWrapperDivEl.appendChild(bigImageListUlEl);
     bigImagListWrapperDivEl.appendChild(zoomBigDivEl);

	
	 //选择几个商品展示
	 var cid = parseInt(window.location.search.slice(window.location.search.indexOf("=")+1));
	 
	 
	 //第二个商品
	 if(cid === 2){
		 imageListWrapperDivEl.appendChild(imageListUlEl);
		 	 var imags = [
		 		 "../images/detail/5.jpg",
		 		 "../images/detail/10.jpg",
		 		 "../images/detail/7.jpg",
		 		 "../images/detail/8.jpg",
		 		 "../images/detail/9.jpg",
		 		 "../images/detail/10.jpg",
		 		 "../images/detail/7.jpg",
		 		 "../images/detail/11.jpg"
		 	 ];
		 	 imags.forEach(function(item,i){
		 		 if(i === 0){
		 		 bigImageListUlEl.innerHTML += `
		 		    <li class="show">
		 			  <div class="image-wrapper">
		 			     <img src="${imags[i]}"/>
		 			  </div>
		 			</li>
		 		 `;
		 		 }else {
				bigImageListUlEl.innerHTML += `
					<li>
					  <div class="image-wrapper">
						 <img src="${imags[i]}"/>
					  </div>
					</li>
				 `;
		 			}
		 	 });
		 	 var spanEl1 = document.createElement("span");
		 	 var spanEl2 = document.createElement("span");
		 	 spanEl1.className = "prev";
		 	 spanEl2.className = "next";
		 	 imageListWrapperDivEl.appendChild(spanEl1);
		 	 imageListWrapperDivEl.appendChild(spanEl2);
		 	 var spanimgs = [
		 		 "../images/detail/02.gif",
		 		 "../images/detail/01.gif"
		 	 ];
		 		spanEl1.innerHTML = `
		 			  <img src="${spanimgs[0]}"> 
		 		 `;
		 		 
		 		spanEl2.innerHTML = `		   
		 			 	<img src="${spanimgs[1]}" />
		 			 `;
		 	 var imag2 = [
		 	 		"../images/detail/5.jpg",
		 	 		"../images/detail/10.jpg",
		 	 		"../images/detail/7.jpg",
		 	 		"../images/detail/8.jpg",
		 	 		"../images/detail/9.jpg",
		 	 		"../images/detail/10.jpg",
		 	 		"../images/detail/7.jpg",
		 	 		"../images/detail/11.jpg"
		 	 ];
		 	 imag2.forEach(function(item,i){
		 	 		 imageListUlEl.innerHTML += `
		 	 		    <li>
		 	 			  <div class="image-wrapper">
		 	 			     <img src="${imag2[i]}"/>
		 	 			  </div>
		 	 			</li>
		 	 		 `;
		 	 });
		 	 
		 //左边放大镜	 
		 var spanPrev = document.querySelector('span.prev'),
		     spanNext = document.querySelector('span.next'),
		     ulEl = document.querySelector('ul.image-list'),
		     liEls = ulEl.querySelectorAll('li'),
		     currentIndex = 0;
		 
		 spanPrev.onclick = function() {
		   if(currentIndex === 0) return;
		   currentIndex--;
		   ulEl.style.transform = `translateX(-${currentIndex * 20}%)`;
		 }
		 spanNext.onclick = function() {
		   if(currentIndex + 5 >= liEls.length) return;
		   currentIndex++;
		   ulEl.style.transform = `translateX(-${currentIndex * 20}%)`;
		 }
		 
		 liEls.forEach(function(item, index) {
		   item.index = index;
		   item.onclick = function() {
		     document.querySelector('ul.big-image-list>li.show').className = '';
		     document.querySelectorAll('ul.big-image-list>li')[this.index].className = 'show';
		   }
		 
		 });
		 document.querySelector(".big-image-list-wrapper").onmouseover = function() {
		 	var imgPath = this.querySelector("li.show img").src;
		 	var zoomEl = this.querySelector(".zoom");
		 	var zoomBigEl = this.parentNode.querySelector(".zoom-big");
		 	zoomEl.style.backgroundImage = `url(${ imgPath })`;
		 	zoomBigEl.style.backgroundImage = `url(${ imgPath })`;
		 	
		 	
		 	var width = this.getBoundingClientRect().width;//包含边框
		 	var height = this.getBoundingClientRect().height;//包含边框
		 	zoomEl.style.backgroundSize = `${ width }px ${ height }px`;
		 	var ratio = width / zoomEl.getBoundingClientRect().width;
		 	zoomBigEl.style.backgroundSize = `${ratio * width }px ${ ratio * height }px`;
		 }
		 // 移动时间
		 document.querySelector(".big-image-list-wrapper").onmousemove = function(e) {
		 		var zoomEl = this.querySelector(".zoom"),
		 		zoomBigEl = this.parentNode.querySelector(".zoom-big"),
		 			x,
		 			y,
		 			mouseX = e.clientX - this.getBoundingClientRect().left,
		 			mouseY = e.clientY - this.getBoundingClientRect().top,
		 			minX = zoomEl.getBoundingClientRect().width / 2,
		 			minY = zoomEl.getBoundingClientRect().height / 2,
		 			maxX = this.getBoundingClientRect().width - minX,
		 			maxY = this.getBoundingClientRect().height- minY;
		 			
		 		if(mouseX <= minX) x = 0;
		 		else if(mouseX >= maxX) x = maxX - minX;
		 		else x = mouseX -minX;
		 		
		 		if(mouseY <= minY) y = 0;
		 		else if(mouseY >=maxY) y = maxY - minY;
		 		else y = mouseY - minY;
		 		
		 		zoomEl.style.left = `${ x }px`;
		 		zoomEl.style.top = `${ y }px`;
		 		var ratio = this.getBoundingClientRect().width / zoomEl.getBoundingClientRect().width;
		 		zoomEl.style.backgroundPosition = `-${ x }px -${ y }px`;
		 		zoomBigEl.style.backgroundPosition = `-${ratio * x }px -${ ratio * y }px`;
		 	    
		 }
		 var formEl = document.querySelector(".form");
		 formEl.innerHTML = `
		   <h1 style="margin-top: 20px;padding-left: 30px;font-size: 16px;color: #000000;">
			NIKE&nbsp;KOBE&nbsp;1&nbsp;NCXL&nbsp;科比1&nbsp;科比4涂鸦五彩篮球鞋
			<h1>
		   <ul class="one" style="height: 40px;">
		   <li style="padding-left: 30px; display: inline-block; margin-top: 20px;color: #000000; font-size: 13px;">商品品牌：NIKE</li>
		   <li class="right" style="padding-left: 30px; display: inline-block; margin-top: 20px; color: #000000; font-size: 13px;">商品货号：CV3469-001</li>
		   </ul>
		   <ul style="height: 40px;">
		   <li style="padding-left: 30px; display: inline-block;margin-top: 10px;color: #000000;
	       font-size: 13px;">本店售价：<p style="display: inline-block;color: #e4393c;
	       font-size: 20px;">￥1549.00元</p></li>
		   <li class="right" style="padding-left: 30px;display: inline-block;margin-top: 10px;color: #000000;
	       font-size: 13px;">vip会员：<p style="display: inline-block;color: #e4393c;font-size: 20px;">￥1499.00元</p></li>
		   </ul>
		   <p style="height:20px;width:458px;margin-left:30px;margin-top: 10px;font-size:13px">促销价：
		   <span style="color: #ef2323; font-size: 20px;">￥1299元</span>
		   </p>
		   <p style="font-size: 13px;color: #000000;padding-left: 30px;margin-top: 20px;margin-bottom:10px;">所&nbsp;在&nbsp;地:&nbsp;&nbsp;浙江&nbsp;台州仓库<p>
		   <ul style="height: 40px;">
		   <li style="margin-left: 30px; display: inline-block;margin-top: 10px;color: #000000;
	       font-size: 13px;">增值保障：</li>
		   <li style="margin-left:10px;display: inline-block;color: #000000;
	       font-size: 13px;">一年内只换不修￥19</li>
		   <li style="margin-left:10px; display: inline-block;color: #000000;;
	       font-size: 13px;">一年内意外换新￥19</li>
		   <li style=" display: inline-block;margin-left:10px;color: #000000;
	       font-size: 13px;">一年内全保换新￥39</li>
		   <ul>
		   <span style="color: #000000;font-size: 13px;padding-left: 30px;float:left;margin-top:20px;">数量：</span>
		   <input style="margin-top: 10px;margin-bottom:20px;float:left;width: 43px;height: 44px;" type="text" name="number" id="number" value="1" class="count" />
		   <p style="float:left;display:inline-block;height:45;width:17px;">
		   <input style="margin-top: 10px;width: 17px;height: 24px;background-color: #f1f1f1;color:#666666;font-size: 12px;outline: none;border:0;"
		   type="button"  value="-" class="btn-decrease" />
		   <input style="width: 17px;height: 24px;background-color:  #f1f1f1;color:#666666;;font-size: 14px;outline: none;border:0;" 
		   type="button" value="+" class="btn-increase" />
		   </p>
		   <input style="margin-top: 10px;margin-left:20px;width: 120px;height: 45px;background-color: red;outline: none;border:0;" type="button" name="" id="" value="加入购物车" class="btn-buy"/>
		  
		 `;
		 
	 }
	 
	 //第一个商品
	 else if(cid === 1){
		 imageListWrapperDivEl.appendChild(imageListUlEl);
	 var imags = [
		 "../images/detail/1.jpg",
		 "../images/detail/2.jpg",
		 "../images/detail/3.jpg",
		 "../images/detail/4.jpg",
		 "../images/detail/1.jpg",
		 "../images/detail/2.jpg",
		 "../images/detail/3.jpg",
		 "../images/detail/4.jpg"
	 ];
	 imags.forEach(function(item,i){
		 if(i === 0){
		 bigImageListUlEl.innerHTML += `
		    <li class="show">
			  <div class="image-wrapper">
			     <img src="${imags[i]}"/>
			  </div>
			</li>
		 `;
		 }else {
		bigImageListUlEl.innerHTML += `
			<li>
			  <div class="image-wrapper">
				 <img src="${imags[i]}"/>
			  </div>
			</li>
		 `;
			}
		 
		 
	 });
	 var spanEl1 = document.createElement("span");
	 var spanEl2 = document.createElement("span");
	 spanEl1.className = "prev";
	 spanEl2.className = "next";
	 imageListWrapperDivEl.appendChild(spanEl1);
	 imageListWrapperDivEl.appendChild(spanEl2);
	 var spanimgs = [
		 "../images/detail/02.gif",
		 "../images/detail/01.gif"
	 ];
		spanEl1.innerHTML = `
			  <img src="${spanimgs[0]}"> 
		 `;
		 
		spanEl2.innerHTML = `		   
			 	<img src="${spanimgs[1]}" />
			 `;
	 var imag2 = [
	 		 "../images/detail/1.jpg",
	 		 "../images/detail/2.jpg",
	 		 "../images/detail/3.jpg",
	 		 "../images/detail/4.jpg",
	 		 "../images/detail/1.jpg",
	 		 "../images/detail/2.jpg",
	 		 "../images/detail/3.jpg",
	 		 "../images/detail/4.jpg"
	 ];
	 imag2.forEach(function(item,i){
	 		 imageListUlEl.innerHTML += `
	 		    <li>
	 			  <div class="image-wrapper">
	 			     <img src="${imag2[i]}"/>
	 			  </div>
	 			</li>
	 		 `;
	 });
	 
//左边放大镜	 
var spanPrev = document.querySelector('span.prev'),
    spanNext = document.querySelector('span.next'),
    ulEl = document.querySelector('ul.image-list'),
    liEls = ulEl.querySelectorAll('li'),
    currentIndex = 0;

spanPrev.onclick = function() {
    if(currentIndex === 0) return;
    currentIndex--;
    ulEl.style.transform = `translateX(-${currentIndex * 20}%)`;
}
spanNext.onclick = function() {
    if(currentIndex + 5 >= liEls.length) return;
    currentIndex++;
    ulEl.style.transform = `translateX(-${currentIndex * 20}%)`;
}

liEls.forEach(function(item, index) {
    item.index = index;
    item.onclick = function() {
    document.querySelector('ul.big-image-list>li.show').className = '';
    document.querySelectorAll('ul.big-image-list>li')[this.index].className = 'show';

  }

});
document.querySelector(".big-image-list-wrapper").onmouseover = function() {
	var imgPath = this.querySelector("li.show img").src;
	var zoomEl = this.querySelector(".zoom");
	var zoomBigEl = this.parentNode.querySelector(".zoom-big");
	zoomEl.style.backgroundImage = `url(${ imgPath })`;
	zoomBigEl.style.backgroundImage = `url(${ imgPath })`;
	
	
	var width = this.getBoundingClientRect().width;//包含边框
	var height = this.getBoundingClientRect().height;//包含边框
	zoomEl.style.backgroundSize = `${ width }px ${ height }px`;
	var ratio = width / zoomEl.getBoundingClientRect().width;
	zoomBigEl.style.backgroundSize = `${ratio * width }px ${ ratio * height }px`;
}
// 移动时间
document.querySelector(".big-image-list-wrapper").onmousemove = function(e) {
		    var zoomEl = this.querySelector(".zoom"),
		    zoomBigEl = this.parentNode.querySelector(".zoom-big"),
			x,
			y,
			mouseX = e.clientX - this.getBoundingClientRect().left,
			mouseY = e.clientY - this.getBoundingClientRect().top,
			minX = zoomEl.getBoundingClientRect().width / 2,
			minY = zoomEl.getBoundingClientRect().height / 2,
			maxX = this.getBoundingClientRect().width - minX,
			maxY = this.getBoundingClientRect().height- minY;
			
		if(mouseX <= minX) x = 0;
		else if(mouseX >= maxX) x = maxX - minX;
		else x = mouseX -minX;
		
		if(mouseY <= minY) y = 0;
		else if(mouseY >=maxY) y = maxY - minY;
		else y = mouseY - minY;
		
		zoomEl.style.left = `${ x }px`;
		zoomEl.style.top = `${ y }px`;
		var ratio = this.getBoundingClientRect().width / zoomEl.getBoundingClientRect().width;
		zoomEl.style.backgroundPosition = `-${ x }px -${ y }px`;
		zoomBigEl.style.backgroundPosition = `-${ratio * x }px -${ ratio * y }px`;
         }
		 
		var formEl = document.querySelector(".form");
		formEl.innerHTML = `
		<h1 style="margin-top: 20px;padding-left: 30px;font-size: 16px;color: #000000;">
		NIKE&nbsp;KOBE&nbsp;1&nbsp;NCXL&nbsp;科比1&nbsp;全白降噪男子实战减震篮球鞋
		<h1>
		<ul class="one" style="height: 40px;">
		<li style="padding-left: 30px; display: inline-block; margin-top: 20px;color: #000000; font-size: 13px;">商品品牌：NIKE</li>
	    <li class="right" style="padding-left: 30px; display: inline-block; margin-top: 20px; color: #000000; font-size: 13px;">商品货号：CI9911-110</li>
		</ul>
		<ul style="height: 40px;">
		<li style="padding-left: 30px; display: inline-block;margin-top: 10px;color: #000000;
		font-size: 13px;">本店售价：<p style="display: inline-block;color: #e4393c;
		font-size: 20px;">￥2999.00元</p></li>
		<li class="right" style="padding-left: 30px;display: inline-block;margin-top: 10px;color: #000000;
	    font-size: 13px;">vip会员：<p style="display: inline-block;color: #e4393c;font-size: 20px;">￥1999.00元</p></li>
		</ul>
		<p style="height:20px;width:458px;margin-left:30px;margin-top: 10px;font-size:13px">促销价：
		<span style="color: #ef2323; font-size: 20px;">￥1899元</span>
		</p>
		<p style="font-size: 13px;color: #000000;padding-left: 30px;margin-top: 20px;margin-bottom:10px;">所&nbsp;在&nbsp;地:&nbsp;&nbsp;浙江&nbsp;台州仓库<p>
		<ul style="height: 40px;">
        <li style="margin-left: 30px; display: inline-block;margin-top: 10px;color: #000000;
		font-size: 13px;">增值保障：</li>
	    <li style="margin-left:10px;display: inline-block;color: #000000;
		font-size: 13px;">一年内只换不修￥19</li>
		<li style="margin-left:10px; display: inline-block;color: #000000;;
		font-size: 13px;">一年内意外换新￥19</li>
	    <li style=" display: inline-block;margin-left:10px;color: #000000;
		font-size: 13px;">一年内全保换新￥39</li>
		<ul>
		<span style="color: #000000;font-size: 13px;padding-left: 30px;float:left;margin-top:20px;">数量：</span>
		<input style="margin-top: 10px;margin-bottom:20px;float:left;width: 43px;height: 44px;" type="text" name="number" id="number" value="1" class="count" />
		<p style="float:left;display:inline-block;height:45;width:17px;">
		<input style="margin-top: 10px;width: 17px;height: 24px;background-color: #f1f1f1;color:#666666;font-size: 12px;outline: none;border:0;"
		type="button"  value="-" class="btn-decrease" />
		<input style="width: 17px;height: 24px;background-color:  #f1f1f1;color:#666666;;font-size: 14px;outline: none;border:0;" 
		type="button" value="+" class="btn-increase" />
		</p>
		<input style="margin-top: 10px;margin-left:20px;width: 120px;height: 45px;background-color: red;outline: none;border:0;" type="button" name="" id="" value="加入购物车" class="btn-buy"/>
		  
		     `;
	 }
	 //其他商品
	 else {
		 imageListWrapperDivEl.appendChild(imageListUlEl);
		 	 var imags = [
		 		 "../images/detail/1.jpg",
		 		 "../images/detail/2.jpg",
		 		 "../images/detail/3.jpg",
		 		 "../images/detail/4.jpg",
		 		 "../images/detail/1.jpg",
		 		 "../images/detail/2.jpg",
		 		 "../images/detail/3.jpg",
		 		 "../images/detail/4.jpg"
		 	 ];
		 imags.forEach(function(item,i){
		 		if(i === 0){
		 		bigImageListUlEl.innerHTML += `
		 		    <li class="show">
		 			  <div class="image-wrapper">
		 			     <img src="${imags[i]}"/>
		 			  </div>
		 			</li>
		 		 `;
		 		}else {
				bigImageListUlEl.innerHTML += `
					<li>
					  <div class="image-wrapper">
						 <img src="${imags[i]}"/>
					  </div>
					</li>
				 `;
		 		}
 
		 	 });
		 	 var spanEl1 = document.createElement("span");
		 	 var spanEl2 = document.createElement("span");
		 	 spanEl1.className = "prev";
		 	 spanEl2.className = "next";
		 	 imageListWrapperDivEl.appendChild(spanEl1);
		 	 imageListWrapperDivEl.appendChild(spanEl2);
		 	 var spanimgs = [
		 		 "../images/detail/02.gif",
		 		 "../images/detail/01.gif"
		 	 ];
		 		spanEl1.innerHTML = `
		 			  <img src="${spanimgs[0]}"> 
		 		 `;
		 		 
		 		spanEl2.innerHTML = `		   
		 			  <img src="${spanimgs[1]}" />
		 			 `;
		 	 var imag2 = [
		 	 		 "../images/detail/1.jpg",
		 	 		 "../images/detail/2.jpg",
		 	 		 "../images/detail/3.jpg",
		 	 		 "../images/detail/4.jpg",
		 	 		 "../images/detail/1.jpg",
		 	 		 "../images/detail/2.jpg",
		 	 		 "../images/detail/3.jpg",
		 	 		 "../images/detail/4.jpg"
		 	 ];
		 	 imag2.forEach(function(item,i){
		 	 	imageListUlEl.innerHTML += `
				<li>
				  <div class="image-wrapper">
					 <img src="${imag2[i]}"/>
				  </div>
				</li>
			 `;
		 	 });
		 	 
		 //左边放大镜	 
		 var spanPrev = document.querySelector('span.prev'),
		     spanNext = document.querySelector('span.next'),
		     ulEl = document.querySelector('ul.image-list'),
		     liEls = ulEl.querySelectorAll('li'),
		     currentIndex = 0;
		 
		 spanPrev.onclick = function() {
		   if(currentIndex === 0) return;
		   currentIndex--;
		   ulEl.style.transform = `translateX(-${currentIndex * 20}%)`;
		 }
		 spanNext.onclick = function() {
		   if(currentIndex + 5 >= liEls.length) return;
		   currentIndex++;
		   ulEl.style.transform = `translateX(-${currentIndex * 20}%)`;
		 }
		 
		 liEls.forEach(function(item, index) {
		   item.index = index;
		   item.onclick = function() {
		   document.querySelector('ul.big-image-list>li.show').className = '';
		   document.querySelectorAll('ul.big-image-list>li')[this.index].className = 'show';
		 
		   }
		 
		 });
		 document.querySelector(".big-image-list-wrapper").onmouseover = function() {
		 	var imgPath = this.querySelector("li.show img").src;
		 	var zoomEl = this.querySelector(".zoom");
		 	var zoomBigEl = this.parentNode.querySelector(".zoom-big");
		 	zoomEl.style.backgroundImage = `url(${ imgPath })`;
		 	zoomBigEl.style.backgroundImage = `url(${ imgPath })`;
		 	
		 	
		 	var width = this.getBoundingClientRect().width;//包含边框
		 	var height = this.getBoundingClientRect().height;//包含边框
		 	zoomEl.style.backgroundSize = `${ width }px ${ height }px`;
		 	var ratio = width / zoomEl.getBoundingClientRect().width;
		 	zoomBigEl.style.backgroundSize = `${ratio * width }px ${ ratio * height }px`;
		 }
		 // 移动时间
		 document.querySelector(".big-image-list-wrapper").onmousemove = function(e) {
		 		var zoomEl = this.querySelector(".zoom"),
		 		zoomBigEl = this.parentNode.querySelector(".zoom-big"),
		 		x,
		 		y,
		 		mouseX = e.clientX - this.getBoundingClientRect().left,
		 		mouseY = e.clientY - this.getBoundingClientRect().top,
		 		minX = zoomEl.getBoundingClientRect().width / 2,
		 		minY = zoomEl.getBoundingClientRect().height / 2,
		 		maxX = this.getBoundingClientRect().width - minX,
		 		maxY = this.getBoundingClientRect().height- minY;
		 			
		 		if(mouseX <= minX) x = 0;
		 		else if(mouseX >= maxX) x = maxX - minX;
		 		else x = mouseX -minX;
		 		
		 		if(mouseY <= minY) y = 0;
		 		else if(mouseY >=maxY) y = maxY - minY;
		 		else y = mouseY - minY;
		 		
		 		zoomEl.style.left = `${ x }px`;
		 		zoomEl.style.top = `${ y }px`;
		 		var ratio = this.getBoundingClientRect().width / zoomEl.getBoundingClientRect().width;
		 		zoomEl.style.backgroundPosition = `-${ x }px -${ y }px`;
		 		zoomBigEl.style.backgroundPosition = `-${ratio * x }px -${ ratio * y }px`;
		 	    
		        }
				  
				var formEl = document.querySelector(".form");
				formEl.innerHTML = `
		        <h1 style="margin-top: 20px;padding-left: 30px;font-size: 16px;color: #000000;">
			    NIKE&nbsp;KOBE&nbsp;1&nbsp;NCXL&nbsp;科比1&nbsp;科比4涂鸦五彩篮球鞋
			    <h1>
			    <ul class="one" style="height: 40px;">
			    <li style="padding-left: 30px; display: inline-block; margin-top: 20px;color: #000000; font-size: 13px;">商品品牌：NIKE</li>
			    <li class="right" style="padding-left: 30px; display: inline-block; margin-top: 20px; color: #000000; font-size: 13px;">商品货号：CV3469-001</li>
			    </ul>
			    <ul style="height: 40px;">
			    <li style="padding-left: 30px; display: inline-block;margin-top: 10px;color: #000000;
		        font-size: 13px;">本店售价：<p style="display: inline-block;color: #e4393c;
		        font-size: 20px;">￥1649.00元</p></li>
		        <li class="right" style="padding-left: 30px;display: inline-block;margin-top: 10px;color: #000000;
			    font-size: 13px;">vip会员：<p style="display: inline-block;color: #e4393c;font-size: 20px;">￥1599.00元</p></li>
			    </ul>
			    <p style="height:20px;width:458px;margin-left:30px;margin-top: 10px;font-size:13px">促销价：
			    <span style="color: #ef2323; font-size: 20px;">￥1599元</span>
			    </p>
			    <p style="font-size: 13px;color: #000000;padding-left: 30px;margin-top: 20px;margin-bottom:10px;">所&nbsp;在&nbsp;地:&nbsp;&nbsp;浙江&nbsp;台州仓库<p>
			    <ul style="height: 40px;">
				<li style="margin-left: 30px; display: inline-block;margin-top: 10px;color: #000000;
		        font-size: 13px;">增值保障：</li>
			    <li style="margin-left:10px;display: inline-block;color: #000000;
		        font-size: 13px;">一年内只换不修￥19</li>
			    <li style="margin-left:10px; display: inline-block;color: #000000;;
		        font-size: 13px;">一年内意外换新￥19</li>
			    <li style=" display: inline-block;margin-left:10px;color: #000000;
		        font-size: 13px;">一年内全保换新￥39</li>
			    <ul>
			    <span style="color: #000000;font-size: 13px;padding-left: 30px;float:left;margin-top:20px;">数量：</span>
		        <input style="margin-top: 10px;margin-bottom:20px;float:left;width: 43px;height: 44px;" type="text" name="number" id="number" value="1" class="count" />
		        <p style="float:left;display:inline-block;height:45;width:17px;">
		        <input style="margin-top: 10px;width: 17px;height: 24px;background-color: #f1f1f1;color:#666666;font-size: 12px;outline: none;border:0;"
			    type="button"  value="-" class="btn-decrease" />
		        <input style="width: 17px;height: 24px;background-color:  #f1f1f1;color:#666666;;font-size: 14px;outline: none;border:0;" 
			    type="button" value="+" class="btn-increase" />
		        </p>
		        <input style="margin-top: 10px;margin-left:20px;width: 120px;height: 45px;background-color: red;outline: none;border:0;" type="button" name="" id="" value="加入购物车" class="btn-buy"/>
		   
		       `;
	     }
	 

 // 数量的加减
var count = 1;
var userName = Cookies.get("user");
if(window.location.search.length === 0)var pid = 2;
else var pid = parseInt(window.location.search.slice(window.location.search.indexOf("=")+1));

//根据id获取要展示的商品的详细信息
var product = JSON.parse(sessionStorage.getItem("data")).productList.find(item => item.id === pid
);
//数量控制
(function(){
	var btnDecrease = document.querySelector(".btn-decrease");
	var btnIncrease = document.querySelector(".btn-increase");
	var inputCount = document.querySelector("input.count");
	var maxCount = 5;
	btnDecrease.onclick = function (){
		//不管+能不能用，先让+能用
		btnIncrease.disabled = false;
		inputCount.value = --count;
		this.disabled = count === 1;
	};
	btnIncrease.onclick = function (){
		//不管-能不能用，先让-能用
		btnDecrease.disabled = false;
		inputCount.value = ++count;
		this.disabled = count === maxCount;
	};
	inputCount.onfocus = function() {
		this.oldValue = this.value;
		
	};
	inputCount.onkeyup = function(e) {
		if((e.keyCode < 48|| e.keyCode > 57 )&& e.keyCode !== 8){
			this.value = this.oldValue;
			}
			else this.oldValue = this.value;
		   
	};
	inputCount.onblur = function() {
		if(this.value.length ===0) this.value = 1;
		if(parseInt(this.value)<1) this.value = 1;
		if(parseInt(this.value)> maxCount) this.value = 5;
		count = parseInt(this.value);
		btnDecrease.disabled = count === 1;
		btnIncrease.disabled = count === 5;
		};
})();

//jQuery改
//加入购物车
$("input.btn-buy").click(function(){
	//判断用户有没有登录,没登录跳转登录界面
	
	if(typeof userName === "undefined"){
		Cookies.set("backUrl",window.location.href);//将当前页面路径放入cookie,以便登录成功后跳转返回
		window.location.href = "../login/login.html";//跳转登录界面
	} 
	//如果登录
	var data = JSON.parse(sessionStorage.getItem("data"));
	
	var index = data.cartList.findIndex(item => item.name === userName && item.pid === pid);
	console.log(data);
	if(index === -1){
		var obj = {
			id: data.cartList[data.cartList.length-1].id + 1,
			name: userName,
			pid: pid,
			count: count
		};
		data.cartList.push(obj);
	}
	else {
		
		if(data.cartList[index].count + count >5){
		    Message.notice("当前商品在购物车中已达到购买上限！");
			return;
		}
		data.cartList[index].count += count;
		
	}
	
	sessionStorage.setItem("data",JSON.stringify(data));
	    Message.notice("成功加入购物车！");
});


//选项卡
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
		   $(".tab").each(function(i,tab){
			$("ul.tab-title>li").click(function(){
				if($(this).hasClass("active"))return;
				$(this).add(`ul.tab-content>li:eq(${$(this).index()})`).
				addClass("active").siblings(".active").removeClass("active");
			});
			});