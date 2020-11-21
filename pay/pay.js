
var account1 = Cookies.get("account");
document.querySelector("span.account").innerText = `
     ${account1}
`;
Cookies.remove("account");
var oid = parseInt(window.location.search.slice(window.location.search.indexOf("=")+1));
console.log(oid);
var data = JSON.parse(sessionStorage.getItem("data"));
var orderListChild = data.orderList.find(item => item.id === oid);
console.log(orderListChild);
$(".pay-money").click(function(){
	Message.notice("支付成功！！");
	 orderListChild.isPay = true;
	 sessionStorage.setItem("data",JSON.stringify(data));
	 window.location.replace("../order_list/order_list.html");
});



