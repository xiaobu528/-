// var data = JSON.parse(sessionStorage.getItem("data"));
// var cartList = data.cartList;

// var cartIds = Cookies.get("settle");
// if(!cartIds) window.location.replace("../index/index.html");
// cartIds = cartIds.split(",").map(function(item){return parseInt(item);});
// console.log(cartIds);
// var userName = Cookies.get("user"); 

// var addressId = 0;
// if(Cookies.get("addressId")){
// 	addressId = parseInt(Cookies.get("addressId"));
// 	Cookies.remove("addressId");
// }
// //收货地址
// (function(){
// 	var userAddressList = data.addressList.filter(function(item){
// 		return item.name === userName;
// 	});
// 	userAddressList.forEach(function(item){
// 		document.querySelector("ul.address-list").innerHTML +=`
// 		   <li data-id="${item.id}"
// 			class="${(addressId !== 0&& item.id === addressId)||(addressId === 0 && item.isDefault )  ? "select" : "" }">
// 		   <i class="iconfont icon-xuanze"></i>
// 		   <h3>${item.receiveName}</h3>
// 		   ${item.isDefault ? "<span>默认地址</span>" : ""}
// 		   <p>${item.receivePhone}</p>
// 		   <p>${item.receiveRegion} ${item.receiveAddress}</p>
// 		   </li>
// 		`;
// 		if(addressId ===0 && item.isDefault) addressId = item.id;//谁是默认地址谁默认选中
		
// 	});
// 	document.querySelectorAll("ul.address-list>li").forEach(function(li){
// 		li.onclick = function(){
// 			if(this.classList.contains("select"))return;
// 			this.parentNode.querySelectorAll("li").forEach(function(item){item.classList.remove('select');});
// 			this.classList.add("select");
// 			addressId = parseInt(this.dataset.id);
// 		};
// 	});
// 	document.querySelector("a.btn-gotoAddress").onclick = function(){
// 		Cookies.set("isFromOrderConfirm"," ");
// 		window.location.href = "../address/address.html";
// 	};
// })();

// //商品清单
// var account = 0;
// var detail = [];

// (function(){
// 	cartIds.forEach(function(cartId){
// 		var cart = cartList.find(function(item){return item.id === cartId;});
// 		var product = data.productList.find(function(item){return item.id === cart.pid;});
// 		detail.push({pid: cart.pid,count:cart.count,price: product.price});
// 		account += cart.count * product.price;
// 		document.querySelector("table.product1-list>tbody").innerHTML +=`
// 		   <tr>
// 		      <td><img src="${product.avatar}"></td>
// 			  <td><span class="name">${product.name}</span></td>
// 			  <td><span class="price">￥${product.price}元</span></td>
// 			  <td><span>${cart.count}</span></td>
// 		   </tr>
// 		`;
// 	});
// 	document.querySelector("span.account").innerText = `${account}`;
// 	Cookies.set("account",account);
// 	Cookies.set("detail",detail);//存储cookies中下次渲染使用
// })();



// //生成订单
// (function(){
// 	document.querySelector("input.btn-confirm").onclick = function(){
// 		if(addressId === 0){
// 			Message.alert("朋友，告诉我送到哪啊！");
// 			return;
// 		}
		
// 		cartIds.forEach(function(cartId){
// 			var i = cartList.findIndex(function(item){return item.id === cartId});
// 			cartList.splice(i,1);
			
// 		});
// 		//构造一个新的订单push到orderlist
		
// 		var id = data.orderList.length > 0 ? data.orderList[data.orderList.length - 1].id + 1 : 1;
// 		data.orderList.push({
// 			id: id,
// 			name: userName,
// 			addressId: addressId,
// 			detail: detail,
// 			account: account,
// 			date: new Date().getTime(),
// 			isPay: false
// 		});
// 		sessionStorage.setItem("data",JSON.stringify(data));
// 		Cookies.remove("settle");
// 		window.location.replace(`../pay/pay.html?id=${id}`);
// 		};
// })();

//jQuery改
var data = JSON.parse(sessionStorage.getItem("data"));
var cartList = data.cartList;

var cartIds = Cookies.get("settle");
if(!cartIds) window.location.replace("../index/index.html");
cartIds = cartIds.split(",").map(function(item){return parseInt(item);});
console.log(cartIds);
var userName = Cookies.get("user"); 

var addressId = 0;
if(Cookies.get("addressId")){
	addressId = parseInt(Cookies.get("addressId"));
	Cookies.remove("addressId");
}
//收货地址
(function(){
	var userAddressList = data.addressList.filter(item => item.name === userName);
	userAddressList.forEach(function(item){
		$(`
		   <li data-id="${item.id}"
			class="${(addressId !== 0&& item.id === addressId)||(addressId === 0 && item.isDefault )  ? "select" : "" }">
		   <i class="iconfont icon-xuanze"></i>
		   <h3>${item.receiveName}</h3>
		   ${item.isDefault ? "<span>默认地址</span>" : ""}
		   <p>${item.receivePhone}</p>
		   <p>${item.receiveRegion} ${item.receiveAddress}</p>
		   </li>
		`).appendTo($("ul.address-list"));
		
		if(addressId ===0 && item.isDefault) addressId = item.id;//谁是默认地址谁默认选中
		
	});
	$("ul.address-list>li").click(function(){
		if($(this).hasClass("select"))return;
			$(this).siblings().removeClass("select");
			$(this).addClass("select");
			addressId = parseInt($(this).attr("data-id"));
	});
	$("a.btn-gotoAddress").click(function(){
		Cookies.set("isFromOrderConfirm"," ");
		window.location.href = "../address/address.html";
	});
})();

//商品清单
var account = 0;
var detail = [];

(function(){
	cartIds.forEach(function(cartId){
		var cart = cartList.find(item => item.id === cartId);
		var product = data.productList.find(item => item.id === cart.pid);
		detail.push({pid: cart.pid,count:cart.count,price: product.price});
		account += cart.count * product.price;
		$(`
		   <tr>
		      <td><img src="${product.avatar}"></td>
			  <td><span class="name">${product.name}</span></td>
			  <td><span class="price">￥${product.price}元</span></td>
			  <td><span>${cart.count}</span></td>
		   </tr>
		`).appendTo($("table.product1-list>tbody"));
	});
	$("span.account").text(`${account}`);
	Cookies.set("account",account);
	Cookies.set("detail",detail);//存储cookies中下次渲染使用
})();



//生成订单
(function(){
	document.querySelector("input.btn-confirm").onclick = function(){
		if(addressId === 0){
			Message.alert("朋友，告诉我送到哪啊！");
			return;
		}
		
		cartIds.forEach(function(cartId){
			var i = cartList.findIndex(function(item){return item.id === cartId});
			cartList.splice(i,1);
			
		});
		//构造一个新的订单push到orderlist
		
		var id = data.orderList.length > 0 ? data.orderList[data.orderList.length - 1].id + 1 : 1;
		data.orderList.push({
			id: id,
			name: userName,
			addressId: addressId,
			detail: detail,
			account: account,
			date: new Date().getTime(),
			isPay: false
		});
		sessionStorage.setItem("data",JSON.stringify(data));
		Cookies.remove("settle");
		window.location.replace(`../pay/pay.html?id=${id}`);
		};
})();




