
// 邮箱地址不能为空，书写规范
function Isemail(str){
	var reg = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
	return reg.test(str);
}

var data = JSON.parse(sessionStorage.getItem("data"));
(function(){
	      $("input.btn-sign").click(function(){
		   var name = $("input.name").val();
	       var email = $("input.email").val();
		   var pwd = $("input.pwd").val();
		   var pwd2 = $("input.pwd2").val();
		   var userList = data.userList;
		   var signs = {
			   name: name,
			   pwd: pwd,
			   email: email
		   };
		   if(!Isemail($("input.email").val())){
		   	   Message.notice("邮箱地址输入错误！");
		   	
		       return false;
		   }else if(pwd === pwd2){
			   Message.notice("注册成功！！");
			   userList.push(signs);
			   sessionStorage.setItem("data",JSON.stringify(data));
			   window.location.replace("../login/login.html");
			   return true;
		   }else {
			   Message.notice("密码两次输入不一样！");
		   }
		  });
		   
})();