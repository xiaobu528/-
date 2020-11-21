// 0、 确保用户当前是登录的， 入股登录了，准备一些全局变量
// var userName = Cookies.get('user');
// if (typeof userName === 'undefined') {
// 	Cookies.set('backUrl', window.location.href);
// 	window.location.href = '../login/login.html';
// }
// // 根据用户名找出用户购物车的商品信息并展示
// var data = JSON.parse(sessionStorage.getItem('data'));
// var productList = data.productList;
// var cartList = data.cartList;

// //公共的函数
// function updateTotalAndAccount(){
// 	var trs = document.querySelectorAll(".cart-list>tbody>tr");
// 	var total = 0, account = 0;
// 	trs.forEach(function(tr){
// 		if(tr.dataset.checked ==="1"){
// 			total += parseInt(tr.dataset.count);
// 	    account += parseInt(tr.dataset.count) * parseInt(tr.dataset.price);
// 		}
// 	});
// 	document.querySelector("span.account").innerText = account;
	
// 	document.querySelector("span.total").innerText = total;
// }
// //公共函数:更新复选框
// function updateCheckboxAll(){
// 	 var all = document.querySelector("i.checkbox.all");
// 	 //找出所有未选中的购物记录tr
// 	 var uncheckedTrs = document.querySelectorAll('tbody>tr[data-checked="0"]');
// 	  all.classList.toggle("checked",uncheckedTrs.length === 0);
// 	 // if(uncheckedTrs.length > 0){
// 		//  all.className = all.className.replace(" checked","");
// 	 // }else {
// 		//  all.className += " checked";
// 	 // }
	 
// }


// // 1、展示用户购物车中的商品信息
// (function() {
// 	var userCartList = cartList.filter(function(item) {
// 		return item.name === userName;
// 	});
// 	if (userCartList.length > 0)
// 		document.querySelector('.cart-list-wrapper').className += ' show';
// 	else
// 		document.querySelector('.cart-empty').className += ' show';
// 	// 展示userCartList

// 	userCartList.forEach(function(item) {
// 		var product = productList.find(function(item2) {
// 			return item2.id === item.pid;
// 		});
// 		document.querySelector("table.cart-list>tbody").innerHTML +=
// 			`
// 			<tr style="background-color:white;" data-id="${item.id}" data-checked="1" data-price="${product.price}" data-count="${item.count}">
// 				<td ><i class="checkbox checked"></i></td>
// 				<td >
// 					<img src="../images/${product.avatar}" />
// 				</td>
// 				<td>
// 					<span class="name">${product.name}</span>
// 				</td>
// 				<td>
// 					<span class="price">￥${product.price}元</span>
// 				</td>
// 				<td >
// 					<input type="button" value="-" class="btn-decrease" ${item.count === 1 ? "disabled" : ""} />
// 					<span class="count">${item.count}</span>
// 					<input type="button" value="+" class="btn-increase" ${item.count === 5 ? "disabled" : "" }/>
// 				</td>
// 				<td>
// 				    <i class="iconfont icon-clear-1" ></i>
				
// 				</td>
// 			</tr>
			
// 		`;
// 	});
// 	updateTotalAndAccount();
// })();
// //2.删除按钮绑定点击事件实现购物记录删除
// (function(){
// 	 var btns = document.querySelectorAll(".icon-clear-1");
// 	btns.forEach(function(btn){
// 		btn.onclick = function(){
// 			var that = this;
// 			Message.confirm("确定要删？",function(){
// 			var tr = that.parentNode.parentNode;
// 			var id = parseInt(tr.dataset.id);
// 			tr.parentNode.removeChild(tr);
// 			var i = cartList.findIndex(function(item){item.id === id});
// 			cartList.splice(i,1);
// 			sessionStorage.setItem("data",JSON.stringify(data));
// 			if(tr.dataset.checked === "1") 
// 			updateTotalAndAccount();
// 			updateCheckboxAll();//和全选之间的联动
// 			});
			
// 		};	
// 	});

// })();
// //数量的加减功能的实现
// (function(){
// 	//减
// 	var decreaseBtns = document.querySelectorAll(".btn-decrease");
// 	decreaseBtns.forEach(function(item){
// 		item.onclick = function(){
			
// 			var tr = this.parentNode.parentNode;
// 			var count = parseInt(tr.dataset.count);
// 			var id = parseInt(tr.dataset.id);
// 			count--;
// 			this.parentNode.querySelector("input.btn-increase").disabled = false;
// 			if(count === 1)this.disabled = true;
// 			this.parentNode.querySelector("span.count").innerText = count;
// 			console.log(this.parentNode.querySelector("span.count"))
// 			tr.dataset.count = count;
// 			if(tr.dataset.checked === "1") updateTotalAndAccount();
// 			//数据更新
// 			var cart = cartList.find(function(item2){
// 				return item2.id === id;
				
// 			});
// 			cart.count = count;
// 			sessionStorage.setItem("data",JSON.stringify(data));
// 		};
// 	});
// 	//加
// 	var increaseBtns = document.querySelectorAll(".btn-increase");
// 	increaseBtns.forEach(function(item){
// 		item.onclick = function(){
// 			//准备工作
// 			var tr = this.parentNode.parentNode;
// 			var count = parseInt(tr.dataset.count);
// 			var id = parseInt(tr.dataset.id);
// 			count++;
// 			//dom标签的更新
// 			this.parentNode.querySelector("input.btn-decrease").disabled = false;
// 			if(count === 5)this.disabled = true;
// 			this.parentNode.querySelector("span.count").innerText = count;
// 			tr.dataset.count = count;
// 			if(tr.dataset.checked === "1") updateTotalAndAccount();
// 			//数据更新
// 			var cart = cartList.find(function(item2){
// 				return item2.id === id;
// 			});
// 			cart.count = count;
// 			sessionStorage.setItem("data",JSON.stringify(data));
// 		};
// 	});
// })();
// //联动勾选
// (function(){
// 	//行联动全选
// 	var checks = document.querySelectorAll("tbody i.checkbox");
// 	checks.forEach(function(item){
// 		  item.onclick = function(){	 
// 			  if(this.className.indexOf("checked") === -1){ //从未选中到选中
// 				  this.className += " checked";
// 				  this.parentNode.parentNode.dataset.checked = "1";
// 			  }else {   //从选中到未选中
// 				  this.className = this.className.replace(" checked", "");
// 				  this.parentNode.parentNode.dataset.checked = "0";
// 			  }
// 			 updateTotalAndAccount();
// 			 updateCheckboxAll()
// 		  };
		  
// 		  //全选联动行
// 		  document.querySelector("i.checkbox.all").onclick = function(){
// 			  var checked = this.className.indexOf("checked")!== -1;
// 				if(checked){
// 					this.className = this.className.replace(" checked","");
// 					document.querySelectorAll("tr").forEach(function(item){
// 						item.dataset.checked = "0";
// 						var i = item.querySelector("i.checkbox");
// 						i.className = i.className.replace(" checked","");
// 					});
// 				}
// 				else {
//   					this.className += " checked";
// 					document.querySelectorAll("tbody>tr").forEach(function(item){
// 						item.dataset.checked = "1";
// 						var i = item.querySelector("i.checkbox");
// 						if(i.className.indexOf("checked") === -1 )i.className += " checked";
// 					});
// 				}
// 				updateTotalAndAccount();
				
// 		  };
// 	});
// })();

// //结算

// (function(){
// 	  document.querySelector("button.settle").onclick = function(){
// 		  var checkedTrs = document.querySelectorAll('tbody>tr[data-checked="1"]');
// 		  if(checkedTrs.length === 0){
// 			  Message.notice("傻了朋友？");return;
// 		  }
// 		  Message.confirm("商品已经加入购物车，前往结算？",function(){
// 			  var settleIds = "";
// 			  checkedTrs.forEach(function(tr){
// 				  settleIds += tr.dataset.id + ",";
				  
// 			  });
// 			  settleIds = settleIds.slice(0,-1);
// 			  Cookies.set("settle",settleIds);
// 			  window.location.href = "../order/order.html";
// 		  });
// 	  };
// })();


//jQuery改
var userName = Cookies.get('user');
if (typeof userName === 'undefined') {
	Cookies.set('backUrl', window.location.href);
	window.location.href = '../login/login.html';
}
// 根据用户名找出用户购物车的商品信息并展示
var data = JSON.parse(sessionStorage.getItem('data'));
var productList = data.productList;
var cartList = data.cartList;

//公共的函数
function updateTotalAndAccount(){
	var total = 0, account = 0;
	$(".cart-list>tbody>tr").each(function(i,tr){
		if($(tr).attr("data-checked") === "1"){
		total += parseInt($(tr).attr("data-count"));
	    account += parseInt($(tr).attr("data-count")) * parseInt($(tr).attr("data-price"));
		}
	});
	$("span.account").text(account);
	$("span.total").text(total);
}
//公共函数:更新复选框
function updateCheckboxAll(){
	 //找出所有未选中的购物记录tr
	$("i.checkbox.all").toggleClass("checked",$('tbody>tr[data-checked="0"]').length === 0);
}


// 1、展示用户购物车中的商品信息
(function() {
	var userCartList = cartList.filter(item =>item.name === userName);
	 
	if (userCartList.length > 0)
		$('.cart-list-wrapper').addClass(' show') ;
	else
		$('.cart-empty').addClass(' show');
	// 展示userCartList

	userCartList.forEach(function(item) {
		var product = productList.find(item2 => item2.id === item.pid);
		
			$(`
			<tr style="background-color:white;" data-id="${item.id}" data-checked="1" data-price="${product.price}" data-count="${item.count}">
				<td ><i class="checkbox checked"></i></td>
				<td >
					<img src="../images/${product.avatar}" />
				</td>
				<td>
					<span class="name">${product.name}</span>
				</td>
				<td>
					<span class="price">￥${product.price}元</span>
				</td>
				<td >
					<input type="button" value="-" class="btn-decrease" ${item.count === 1 ? "disabled" : ""} />
					<span class="count">${item.count}</span>
					<input type="button" value="+" class="btn-increase" ${item.count === 5 ? "disabled" : "" }/>
				</td>
				<td>
				    <i class="iconfont icon-clear-1" ></i>
				</td>
			</tr>
			
		`).appendTo($("table.cart-list>tbody"));
	});
	updateTotalAndAccount();
})();
//2.删除按钮绑定点击事件实现购物记录删除
//问：删除为什么要刷新才实现？
(function(){
	 $(".icon-clear-1").click(function(){
			Message.confirm("确定要删？",function(){
			var $tr = $(this).closest("tr");
			var id = parseInt($tr.attr("data-id"));
			$tr.remove();
			var i = cartList.findIndex(item => item.id === id);
			cartList.splice(i,1);
			window.location.reload();//要刷新页面。
			sessionStorage.setItem("data",JSON.stringify(data));
			if($tr.attr("data-checked") === "1") 
			updateTotalAndAccount();
			updateCheckboxAll();//和全选之间的联动
			});
	 });	
})();
//数量的加减功能的实现
(function(){
	//减
	$(".btn-decrease").click(function(){
		    var $tr = $(this).closest("tr");
			var count = parseInt($tr.attr("data-count"));
			var id = parseInt($tr.attr("data-id"));
			count--;
			$(this).nextAll("input.btn-increase").attr("disabled",false);
			if(count === 1)$(this).attr("disabled",true);
			$(this).nextAll("span.count").text(count);
			console.log($(this).nextAll("span.count"))
			$tr.attr("data-count",count);
			if($tr.attr("data-checked") === "1") updateTotalAndAccount();
			//数据更新
			var cart = cartList.find(item2 => item2.id === id);
			cart.count = count;
			sessionStorage.setItem("data",JSON.stringify(data));
	});

	//加
	$(".btn-increase").click(function(){
		//准备工作
			var $tr = $(this).closest("tr");
			var count = parseInt($tr.attr("data-count"));
			var id = parseInt($tr.attr("data-id"));
			count++;
			//dom标签的更新
			$(this).prevAll("input.btn-decrease").attr("disabled",false);
			if(count === 5)$(this).attr("disabled",true);
			$(this).prevAll("span.count").text(count);
			$tr.attr("data-count",count);
			if($tr.attr("data-checked") === "1") updateTotalAndAccount();
			//数据更新
			var cart = cartList.find(item2 => item2.id === id);
			cart.count = count;
			sessionStorage.setItem("data",JSON.stringify(data));
	});
})();
//联动勾选
(function(){
	//行联动全选
		  $("tbody i.checkbox").click(function(){
			  $(this).closest("tr").attr("data-checked",$(this).hasClass("checked")? "0" : "1");//改父亲
			  $(this).toggleClass("checked");
			 updateTotalAndAccount();
			 updateCheckboxAll()
		  });
		  //全选联动行
		  $("i.checkbox.all").click(function(){
			    $(this).toggleClass("checked");
				//下面开始是想找tbody>tr
				$("tbody>tr").attr("data-checked",$(this).hasClass("checked")? "0":"1").
				find("i.checkbox").toggleClass("checked",$(this).hasClass("checked"));//从父亲改变到儿子改变
				updateTotalAndAccount();
		  });
})();

//结算

(function(){
	 $("button.settle").click(function(){
		 var checkedTrs = document.querySelectorAll('tbody>tr[data-checked="1"]');
		  if(checkedTrs.length === 0){
			  Message.notice("傻了朋友？");return;
		  }
		  Message.confirm("商品已经加入购物车，前往结算？",function(){
			  var settleIds = "";
			  checkedTrs.forEach(function(tr){
				  settleIds += tr.dataset.id + ",";
				  
			  });
			  settleIds = settleIds.slice(0,-1);
			  Cookies.set("settle",settleIds);
			  window.location.href = "../order/order.html";
		  });
	 });
})();







