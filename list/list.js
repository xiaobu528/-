
// //所有的网页中存在一个全局变量window
// var cid = parseInt(window.location.search.slice(window.location.search.indexOf("=")+1));

// var productList = JSON.parse(sessionStorage.getItem("data")).productList.filter(function(item){
// 	// console.log(window.location);
// 	return item.cid = cid;
// });
// //函数如果没有显示的return一值，则默认return的是underfind，而underfind转化成bool值是假


// // list的设计
// var shoeDivEl = document.createElement("div"),
//     shoeUlEl = document.createElement("ul"),
// 	shoeLiEl = document.createElement("li");
// 	shoeDivEl.className = "w shoe";
// 	document.querySelector(".content").appendChild(shoeDivEl);
// 	shoeDivEl.appendChild(shoeUlEl);
	
// 	productList.forEach(function(item,i){
// 		shoeUlEl.innerHTML += `
// 		   <li>
// 		     <a href = "../detail/detail.html?cid=${item.id}">
// 			   <img src="${item.avatar}"/>
// 			   <p>${item.name}</p>
// 			   <p>${item.brief}</p>
// 			   <ul>
// 			   <li class="left">${"销量："} ${item.sale}</li>
// 			   <li class="right">${"评论量："} ${item.rate}</li>
// 			   </ul>
// 			   <span>${"促销价：￥"} ${item.price}元</span>
// 			 </a>
// 		   </li>
// 		`;
// 	});



// // 选项卡
// var tabs = document.querySelectorAll(".tab");
// 			tabs.forEach(function(tab){
// 			var lis =  tab.querySelectorAll("ul.tab-title>li");
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

// // 商品筛选
// var orderDir = "asc";
// var orderKey = "price";
// (function(){
// 	var spans = document.querySelectorAll(".order>span");
// 	spans.forEach(function(span){
// 		  span.onclick = function(){
// 			 if(this.classList.contains("active")){
// 				 orderDir = orderDir === "asc" ? "desc":"asc";
// 				 spans.forEach(function(item){
// 					 item.classList.toggle("asc",orderDir === "asc");
// 				 }); 
// 				 }
// 				 else {
// 					 orderKey = this.dataset.key;
// 					 spans.forEach(function(item){
// 						 item.classList.remove("active");				 
// 					 });
// 					 this.classList.add("active");
// 			 }  
// 			 sortList();
// 		  };
// 	});
// })();
// //排序方案
// //1.对数据排序，然后根据排好的数据重新渲染
// //2.不管数据，直接对dom进行排序
//   // <p class="left">${"销量："} ${item.sale}</p>
//   // <p class="right">${"评论量："} ${item.rate}</p>
// function sortList(){
//      productList.sort(function(a,b){
// 		 return orderDir === "asc" ? a[orderKey] - b[orderKey] : b[orderKey] - a[orderKey];
		 
// 	 });
// 	    shoeUlEl.innerHTML = "";
// 		productList.forEach(function(item,i){
// 			shoeUlEl.innerHTML += `
// 			   <li>
// 			     <a href = "../detail/detail.html?cid=${item.id}">
// 				   <img src="${item.avatar}"/>
// 				   <p>${item.name}</p>
// 				   <p>${item.brief}</p>
				 
// 				   <ul>
// 				   <li class="left">${"销量："} ${item.sale}</li>
// 				   <li class="right">${"评论量："} ${item.rate}</li>
// 				   </ul>
// 				   <span>${"促销价：￥"} ${item.price}元</span>
// 				 </a>
// 			   </li>
// 			`;
// 		});
		
		
// 	}


//jQuery改
//所有的网页中存在一个全局变量window
var cid = parseInt(window.location.search.slice(window.location.search.indexOf("=")+1));

var productList = JSON.parse(sessionStorage.getItem("data")).productList.filter(item =>
	item.cid = cid );
//函数如果没有显示的return一值，则默认return的是underfind，而underfind转化成bool值是假


// list的设计
var shoeDivEl = document.createElement("div"),
    shoeUlEl = document.createElement("ul"),
	shoeLiEl = document.createElement("li");
	shoeDivEl.className = "w shoe";
	$(".content").append(shoeDivEl);
	shoeDivEl.append(shoeUlEl);
	
	productList.forEach(function(item,i){
		$(`
		   <li>
		     <a href = "../detail/detail.html?cid=${item.id}">
			   <img src="${item.avatar}"/>
			   <p>${item.name}</p>
			   <p>${item.brief}</p>
			   <ul>
			   <li class="left">${"销量："} ${item.sale}</li>
			   <li class="right">${"评论量："} ${item.rate}</li>
			   </ul>
			   <span>${"促销价：￥"} ${item.price}元</span>
			 </a>
		   </li>
		`).appendTo(shoeUlEl);
	});



// 选项卡
 $(".tab").each(function(i,tab){
	$("ul.tab-title>li").click(function(){
		if($(this).hasClass("active"))return;
		$(this).add(`ul.tab-content>li:eq(${$(this).index()})`).
		addClass("active").siblings(".active").removeClass("active");
	});
	});

// 商品筛选
var orderDir = "asc";
var orderKey = "price";
(function(){ 
	var $spans = $(".order>span");
	    $spans.click(function(){
			if($(this).hasClass("active")){
				 orderDir = orderDir === "asc" ? "desc":"asc";
				 $spans.toggleClass("asc",orderDir === 'asc');
				
			}
			else {
				 orderKey = $(this).attr("data-key");
			     $(this).addClass("active").siblings(".active").removeClass("active");//这里想混了，要注意！！！
			}
			     sortList();
		});
})();
//排序方案
//1.对数据排序，然后根据排好的数据重新渲染
//2.不管数据，直接对dom进行排序
  // <p class="left">${"销量："} ${item.sale}</p>
  // <p class="right">${"评论量："} ${item.rate}</p>
function sortList(){
     productList.sort(function(a,b){
		 return orderDir === "asc" ? a[orderKey] - b[orderKey] : b[orderKey] - a[orderKey];
		 
	 });
	    shoeUlEl.innerHTML = "";
		productList.forEach(function(item,i){
			$(`
			   <li>
			     <a href = "../detail/detail.html?cid=${item.id}">
				   <img src="${item.avatar}"/>
				   <p>${item.name}</p>
				   <p>${item.brief}</p>
				 
				   <ul>
				   <li class="left">${"销量："} ${item.sale}</li>
				   <li class="right">${"评论量："} ${item.rate}</li>
				   </ul>
				   <span>${"促销价：￥"} ${item.price}元</span>
				 </a>
			   </li>
			`).appendTo(shoeUlEl);
		});
		
		
	}
