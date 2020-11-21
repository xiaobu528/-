var data = JSON.parse(sessionStorage.getItem("data"));
var orderList = JSON.parse(sessionStorage.getItem("data")).orderList;

(function(){
	if(orderList.length > 0){
		
		$(".order-table").addClass(" show");
	}else {
		$(".order-empty").addClass(" show");
	}
	 orderList.forEach(function(item,i){
		          //时间转换
				  var timer = new Date(item.date);     
		          
				  Date.prototype.toLocaleString = function() {
				  return this.getFullYear() + "-" + (this.getMonth() + 1) + "-" + this.getDate() + " " + this.getHours() + ":" + this.getMinutes() + ":" + this.getSeconds();
				    };
				  console.log(timer.toLocaleString());
				  random_no = item.date + item.id;
				  $(`
			      <tr data-id="${item.id}">
				  <td class="td2">${random_no}</td>
				  <td class="td3">${timer.toLocaleString()}</td>
				  <td class="details" >
				  
				  </td>
				  <td class="td4">￥${item.account}元</td>
				  <td class="td5">${item.isPay === false ? "未支付" : "已支付" }<span></span></td>
				  <td class="td6"><span class="quxiao">取消订单</span><span class="active">已取消</span></td>
				  </tr>
				  `).appendTo($("table.orders-list>tbody"));
                 
				  item.detail.forEach(function(item2){
				  var tr = document.querySelector(`[data-id='${item.id}']`);
				  
				  var product = data.productList.find(function(item){return item.id === item2.pid;});
				   // console.log(product); 
				  tr.querySelector("td.details").innerHTML += `
			      <img src="${product.avatar}"/>
				  <span class="detailPrice">￥${product.price}元</span>
				  <span class="detailCount">购买了${item2.count}双</span>
			      `;
				  }); 
				  
				 
                  });  
				  
				  var trs = document.querySelectorAll("table.orders-list>tbody>tr");
				  // console.log(trs);
				  trs.forEach(function(tr){
				  tr.querySelector("td.td6>span.quxiao").onclick = function(item){
			      tr.querySelector("td.td6>span.quxiao").style.display = "none";
				  tr.querySelector("td.td6>span.active").style.display = "block";
				  tr.querySelector("td.td6>span.active").style.color = "red";
				  tr.querySelector("td.td5>span").innerText = " , 已取消";
			      };
				  });
			     var num = 0;
				 num = trs.length;
				 document.querySelector(".order-table>span.last>span.num").innerText = `${num}`;
		       

})();




