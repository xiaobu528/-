
(function(){
	  $("input.btn-login").click(function(){
		  var name = $("input.name").val();
		  var pwd = $("input.pwd").val();
		  var userList = JSON.parse(sessionStorage.getItem("data")).userList;
		  console.log(userList);
		  //判断是否登录成功
		    if(userList.some(item => item.name === name&&item.pwd === pwd)){
				Cookies.set('user', name);
				var backUrl = Cookies.get('backUrl');
				//replace方式的跳转是退不回来的
				window.location.replace(backUrl || '../index/index.html');
			}
			else {
				Message.notice("账号或密码登录失败！");
			}
	  });
  })();


