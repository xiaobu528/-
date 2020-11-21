var userName = Cookies.get('user');
if (typeof userName === 'undefined') {
	Cookies.set('backUrl', window.location.href);
	window.location.href = '../login/login.html';
}
// 根据用户名找出用户购物车的商品信息并展示
var data = JSON.parse(sessionStorage.getItem('data'));
var addressList  = data.addressList;
//1.动态渲染信息
(function(){
	var userAddressList = addressList.filter(function(item){
		return item.name === userName;
	});
	 document.querySelector(".address-empty").classList.toggle("show",userAddressList.length === 0);
     document.querySelector(".address-list").classList.toggle("show",userAddressList.length !== 0);
      if(userAddressList.length > 0){
		  userAddressList.forEach(function(item){
			  document.querySelector("ul.address-list").innerHTML +=`
			        <li class="bottom">
					   
					  <h4>${item.receiveName}</h4>
					  <p>${item.receiveRegion} ${item.receiveAddress}</p>
					  <p>${item.receivePhone}</p>
					  <input type="button" value="修改" data-id="${item.id}" class="btn-update checked"/>
					  <input type="button" value="删除" data-id="${item.id}" class="btn-remove ">
					  <a href="javascript:void(0)" data-id="${item.id}" class="btn-default${item.isDefault ? ' default' : '' }"></a>
					</li>
			  `;
		  });
		  
	  }
})();
//绑定各种点击事件
(function(){
	   //开始新增
	   //form["address"]找表单
	   document.querySelector("input.btn-add").onclick = function(){
		   var form = document.forms["address"];
		   form.editMode.value = 1;
		   form.id.value = "";
		   regionPicker.reset();
		   form.reset();   //表单重置
		  // var edit = document.querySelector(".address-edit");
		  // if(this.classList.contains("checked")){
		  // 		   edit.style.display = "block";
		  // 		   this.classList.remove("checked");
		  // }
		  // else {
		  // 		   edit.style.display = "none";
		  // 		   this.classList.add("checked");
		  // }
	   };
		  
		  
	  document.querySelector('ul.address-list').onclick = function(e){
		  //如果点击的是设置默认地址
		  if(e.target.classList.contains("btn-default")){
			  if(e.target.classList.contains("default")) return;//如果已经是默认不响应
			  
			  addressList.forEach(function(item){
				  if(item.name === userName){
					  item.isDefault = item.id === parseInt(e.target.dataset.id);
				  }
			  });
			  sessionStorage.setItem("data",JSON.stringify(data));
			  this.querySelectorAll(".btn-default").forEach(function(item){
				  item.classList.remove("default");
			  });
			  e.target.classList.add("default");
			  Message.notice("默认地址设置成功！");
		  }
		  //如果点击的是删除按钮
		  if(e.target.classList.contains("btn-remove")){
			   var that = this;
			   Message.confirm("确定要删？",function(){
				   var id = parseInt(e.target.dataset.id);
				   var i = addressList.findIndex(function(item){
					   return item.id === id;
				   });
				   addressList.splice(i,1);
				   sessionStorage.setItem("data",JSON.stringify(data));
				   that.removeChild(e.target.parentNode);
				   if(that.querySelectorAll("li").length === 0){
					   that.classList.remove("show");
					   document.querySelector(".address-empty").classList.add("show");
					   
				   }
				   Message.notice("删除成功！");
			   });	  
		  }
		  //如果点击的是修改按钮
		  if(e.target.classList.contains("btn-update")){
			  var edit = document.querySelector(".address-edit");
			  if(this.classList.contains("checked")){
			  		   edit.style.display = "block";
			  }
				//开始修改
		  	 var id = parseInt(e.target.dataset.id);
			 var form = document.forms["address"];
			 form.editMode.value = "0";
			 form.id.value = id;
			 console.log(id);
			 var target = addressList.find(function(item){
				 return item.id === id;
				 
			 });
			 
			 form.receiveName.value = target.receiveName;
			 form.receivePhone.value = target.receivePhone;
			 regionPicker.set(target.receiveRegion);
			 form.receiveAddress.value = target.receiveAddress;
		  }
	  };
})();
//保存按钮点击事件
(function(){
	document.querySelector(".btn-save").onclick = function (){
		var form = document.forms["address"];
		var address = {
			name: userName,
			receiveName: form.receiveName.value,
			receivePhone: form.receivePhone.value,
			receiveRegion: regionPicker.get(),
			receiveAddress: form.receiveAddress.value
		};
		if(form.editMode.value === "1"){
			var id = addressList.length > 0 ? addressList[addressList.length - 1].id + 1 : 1;
			address.id = id ;
			address.isDefault = false;
			addressList.push(address);
			sessionStorage.setItem("data",JSON.stringify(data));
			Message.alert('新增成功！');
		}
		else {
			var id = parseInt(form.id.value);
			var i = addressList.findIndex(function(item){
				return item.id = id;
			});
			address.id = id;
			address.isDefault = addressList[i].isDefault;
			addressList.splice(i,1,address);
			sessionStorage.setItem("data",JSON.stringify(data));
			Message.alert('修改成功！');
			
		}
		if(Cookies.get("isFromOrderConfirm")){
			Cookies.remove("isFromOrderConfirm");
			Cookies.set("addressId",address.id);
			window.location.replace("../order/order.html");
		}else{
			window.location.href = window.location.href;
		}
		
	};
	
	
})();



 





