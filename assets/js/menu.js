// //从sessionStorage中拿出分类数据，并动态展示
// var categoryList = JSON.parse(sessionStorage.getItem("data")).categoryList;
// categoryList.filter(function(item) {return item.fid === 0;}).forEach(function(item,i)
//  {   
// 	 // 一级菜单
// 	 var liEl = document.createElement("li");
// 	 if(i === 0){
// 		  liEl.className = "menu-list";
// 		 liEl.innerHTML = `<a href="../index/index.html"><p>${ item.name }</p></a>`;
// 	 }else if(i % 2 === 1){
// 		liEl.className = "line";
// 		 liEl.innerHTML = `${ item.name }`;
// 	 }else {
// 		 liEl.className = "menu-list";
// 		 liEl.innerHTML = `<a href="#"><p>${ item.name }</p></a>`;
// 	 }
//       // 其中三个二级
// 	 if(item.id === 5||item.id === 7||item.id === 11){
// 		 var maxDivEl = document.createElement("div"),
// 	    minDivEl = document.createElement("div"),
// 		topDivEl = document.createElement("div"),
// 		bottomUlEl = document.createElement("ul"),
// 	    firstUlEl = document.createElement("ul"),
// 		secondUlEl = document.createElement("ul"),
// 		thirdUlEl = document.createElement("ul"),
// 		fourUlEl = document.createElement("ul");
		
// 	     maxDivEl.className = "max-div";
// 		 minDivEl.className = "w min-div";
// 		 topDivEl.className = "top-div";
// 		  firstUlEl.className = "first";
// 		 secondUlEl.className = "second";
// 		 thirdUlEl.className = "third";
// 		 fourUlEl.className = "four";
// 		 bottomUlEl.className = "bottom-ul";
// 		 // 第一个ul
// 	   var cateUl1 = JSON.parse(sessionStorage.getItem("data")).cateUl1;
// 	   cateUl1.filter(function(item) {return item.fid === 5;}).forEach(function(item,i)
// 	   {
// 	   });
	   
// 	   if(cateUl1.length === 0){
// 		   minDivEl.innerHTML ="<li class='v-middle'>暂无相关信息...</li>";
// 	   }else {
// 		   cateUl1.forEach(function(item2){
// 			   firstUlEl.innerHTML += 
// 			   `<li class="v-middle">
// 			   <a href="../list/list.html?cid=${item2.id}">${item2.name}</a></li>`
// 		   });
// 	   }
	  
// 	   //第二个ul
// 	   var cateUl2 = JSON.parse(sessionStorage.getItem("data")).cateUl2;
// 	   cateUl2.filter(function(item) {return item.fid === 5;}).forEach(function(item,i)
// 	   {
// 	   });
	   
// 	   if(cateUl2.length === 0){
// 	   		   minDivEl.innerHTML ="<li class='v-middle'>暂无相关信息...</li>";
// 	   }else {
// 	   		   cateUl2.forEach(function(item2){
// 	   			   secondUlEl.innerHTML += 
// 	   			   `<li class="v-middle">
// 	   			   <a href="../list/list.html?cid=${item2.id}">${item2.name}</a></li>`
// 	   		   });
// 	   }
// 	   // 第四个
// 	   var cateUl4 = JSON.parse(sessionStorage.getItem("data")).cateUl4;
// 	   cateUl4.filter(function(item) {return item.fid === 5;}).forEach(function(item,i)
// 	   {
// 	   });
	   
// 	   if(cateUl4.length === 0){
// 	   		   minDivEl.innerHTML ="<li class='v-middle'>暂无相关信息...</li>";
// 	   }else {
// 	   		   cateUl4.forEach(function(item2){
// 	   			   fourUlEl.innerHTML += 
// 	   			   `<li>
// 	   			   <a href="../list/list.html?cid=${item2.id}">${item2.name}</a></li>`
// 	   		   });
// 	   }
// 	   // 第三个
// 	   var cateUl3 = JSON.parse(sessionStorage.getItem("data")).cateUl3;
// 	   cateUl3.filter(function(item) {return item.fid === 5;}).forEach(function(item,i)
// 	   {
// 	   });
	   
// 	   if(cateUl3.length === 0){
// 	   		   minDivEl.innerHTML ="<li class='v-middle'>暂无相关信息...</li>";
// 	   }else {
// 	   		   cateUl3.forEach(function(item2){
// 	   			   thirdUlEl.innerHTML += 
// 	   			   `<li class="v-middle">
// 	   			   <a href="../list/list.html?cid=${item2.id}">${item2.name}</a></li>`
// 	   		   });
// 	   }
	   
//     var menuImgs = [
//      		"../images/menu-list/55.jpg",
//      		"../images/menu-list/60.jpg",
//      		"../images/menu-list/58.jpg",
//      		"../images/menu-list/56.jpg",
// 			"../images/menu-list/59.jpg"
//      	];
// 		menuImgs.forEach(function(item,i){
// 			bottomUlEl.innerHTML += `
// 		      <li>
// 			   <img src="${menuImgs[i]}">
// 			  </li>
// 		`;
// 		});
		
// 		         liEl.appendChild(maxDivEl);
// 				 maxDivEl.appendChild(minDivEl);
// 				 minDivEl.appendChild(topDivEl);
// 				 topDivEl.appendChild(firstUlEl);
// 				 topDivEl.appendChild(secondUlEl);
// 				 topDivEl.appendChild(thirdUlEl);
// 				 topDivEl.appendChild(fourUlEl);
// 				 minDivEl.appendChild(bottomUlEl);
// 	 }
// 	 // 潮流鞋
// 	if(item.id === 9){
// 			var maxDivEl1 = document.createElement("div"),
// 			    minDivEl1 = document.createElement("div"),
// 				topDivEl1 = document.createElement("div"),
// 				bottomUlEl1 = document.createElement("ul"),
// 			    firstUlEl1 = document.createElement("ul"),
// 				secondUlEl1 = document.createElement("ul"),
// 				thirdUlEl1 = document.createElement("ul"),
// 				fourUlEl1 = document.createElement("ul");
				
// 			     maxDivEl1.className = "max-div1";
// 				 minDivEl1.className = "w min-div1";
// 				 topDivEl1.className = "top-div1";
// 				  firstUlEl1.className = "first1";
// 				 secondUlEl1.className = "second1";
// 				 thirdUlEl1.className = "third1";
// 				 fourUlEl1.className = "four1";
// 				 bottomUlEl1.className = "bottom-ul1";
// 				 // 第一个ul
// 			   var cateUl5 = JSON.parse(sessionStorage.getItem("data")).cateUl5;
// 			   cateUl5.filter(function(item) {return item.fid === 5;}).forEach(function(item,i)
// 			   {
// 			   });
			   
// 			   if(cateUl5.length === 0){
// 				   minDivEl1.innerHTML ="<li class='v-middle'>暂无相关信息...</li>";
// 			   }else {
// 				   cateUl5.forEach(function(item2){
// 					   firstUlEl1.innerHTML += 
// 					   `<li class="v-middle">
// 					   <a href="../list/list.html?cid=${item2.id}">${item2.name}</a></li>`
// 				   });
// 			   }
			  
// 			   //第二个ul
// 			   var cateUl6 = JSON.parse(sessionStorage.getItem("data")).cateUl6;
// 			   cateUl6.filter(function(item) {return item.fid === 5;}).forEach(function(item,i)
// 			   {
// 			   });
			   
// 			   if(cateUl6.length === 0){
// 			   		   minDivEl1.innerHTML ="<li class='v-middle'>暂无相关信息...</li>";
// 			   }else {
// 			   		   cateUl6.forEach(function(item2){
// 			   			   secondUlEl1.innerHTML += 
// 			   			   `<li class="v-middle">
// 			   			   <a href="../list/list.html?cid=${item2.id}">${item2.name}</a></li>`
// 			   		   });
// 			   }
// 			   // 第三个
// 			   var cateUl7 = JSON.parse(sessionStorage.getItem("data")).cateUl7;
// 			   cateUl7.filter(function(item) {return item.fid === 5;}).forEach(function(item,i)
// 			   {
// 			   });
			   
// 			   if(cateUl7.length === 0){
// 			   		   minDivEl1.innerHTML ="<li class='v-middle'>暂无相关信息...</li>";
// 			   }else {
// 			   		   cateUl7.forEach(function(item2){
// 			   			   fourUlEl1.innerHTML += 
// 			   			   `<li>
// 			   			   <a href="../list/list.html?cid=${item2.id}">${item2.name}</a></li>`
// 			   		   });
// 			   }
// 			   // 第四个
// 			   var cateUl8 = JSON.parse(sessionStorage.getItem("data")).cateUl8;
// 			   cateUl8.filter(function(item) {return item.fid === 5;}).forEach(function(item,i)
// 			   {
// 			   });
			   
// 			   if(cateUl8.length === 0){
// 			   		   minDivEl1.innerHTML ="<li class='v-middle'>暂无相关信息...</li>";
// 			   }else {
// 			   		   cateUl8.forEach(function(item2){
// 			   			   thirdUlEl1.innerHTML += 
// 			   			   `<li class="v-middle">
// 			   			   <a href="../list/list.html?cid=${item2.id}">${item2.name}</a></li>`
// 			   		   });
// 			   }
			   
// 			var menuImgs1 = [
// 			 		"../images/menu-list/55.jpg",
// 			 		"../images/menu-list/57.jpg",
// 			 		"../images/menu-list/58.jpg",
// 			 		"../images/menu-list/56.jpg",
// 					"../images/menu-list/59.jpg"
// 			 	];
// 				menuImgs1.forEach(function(item,i){
// 					bottomUlEl1.innerHTML += `
// 				      <li>
// 					   <img src="${menuImgs1[i]}">
// 					  </li>
// 				`;
// 				});
				
// 				         liEl.appendChild(maxDivEl1);
// 						 maxDivEl1.appendChild(minDivEl1);
// 						 minDivEl1.appendChild(topDivEl1);
// 						 topDivEl1.appendChild(firstUlEl1);
// 						 topDivEl1.appendChild(secondUlEl1);
// 						 topDivEl1.appendChild(thirdUlEl1);
// 						 topDivEl1.appendChild(fourUlEl1);
// 						 minDivEl1.appendChild(bottomUlEl1);
// 	}

	
		
		  
// 	 document.querySelector("ul.menu").appendChild(liEl);
//  });	 



//jQuery改
//从sessionStorage中拿出分类数据，并动态展示
var categoryList = JSON.parse(sessionStorage.getItem("data")).categoryList;
categoryList.filter(item => item.fid === 0).forEach(function(item,i)
 {   
	 // 一级菜单
	 var liEl = document.createElement("li");
	 if(i === 0){
		 liEl.className = "menu-list";
		 liEl.innerHTML = `<a href="../index/index.html"><p>${ item.name }</p></a>`;
	 }else if(i % 2 === 1){
		 liEl.className = "line";
		 liEl.innerHTML = `${ item.name }`;
	 }else {
		 liEl.className = "menu-list";
		 liEl.innerHTML = `<a href="#"><p>${ item.name }</p></a>`;
	 }
      // 其中三个二级
	 if(item.id === 5||item.id === 7||item.id === 11){
		 var maxDivEl = document.createElement("div"),
	    minDivEl = document.createElement("div"),
		topDivEl = document.createElement("div"),
		bottomUlEl = document.createElement("ul"),
	    firstUlEl = document.createElement("ul"),
		secondUlEl = document.createElement("ul"),
		thirdUlEl = document.createElement("ul"),
		fourUlEl = document.createElement("ul");
		
	     maxDivEl.className = "max-div";
		 minDivEl.className = "w min-div";
		 topDivEl.className = "top-div";
		  firstUlEl.className = "first";
		 secondUlEl.className = "second";
		 thirdUlEl.className = "third";
		 fourUlEl.className = "four";
		 bottomUlEl.className = "bottom-ul";
	 // 第一个ul
	   var cateUl1 = JSON.parse(sessionStorage.getItem("data")).cateUl1;
	   cateUl1.filter(item => item.fid === 5).forEach(function(item,i)
	   {
	   });
	   
	   if(cateUl1.length === 0){
		   minDivEl.innerHTML ="<li class='v-middle'>暂无相关信息...</li>";
	   }else {
		   cateUl1.forEach(function(item2){
			   firstUlEl.innerHTML += 
			   `<li class="v-middle">
			   <a href="../list/list.html?cid=${item2.id}">${item2.name}</a></li>`
		   });
	   }
	  
	   //第二个ul
	   var cateUl2 = JSON.parse(sessionStorage.getItem("data")).cateUl2;
	   cateUl2.filter(item => item.fid === 5).forEach(function(item,i)
	   {
	   });
	   
	   if(cateUl2.length === 0){
	   		   minDivEl.innerHTML ="<li class='v-middle'>暂无相关信息...</li>";
	   }else {
	   		   cateUl2.forEach(function(item2){
	   			   secondUlEl.innerHTML += 
	   			   `<li class="v-middle">
	   			   <a href="../list/list.html?cid=${item2.id}">${item2.name}</a></li>`
	   		   });
	   }
	   // 第四个
	   var cateUl4 = JSON.parse(sessionStorage.getItem("data")).cateUl4;
	   cateUl4.filter(item => item.fid === 5).forEach(function(item,i)
	   {
	   });
	   
	   if(cateUl4.length === 0){
	   		   minDivEl.innerHTML ="<li class='v-middle'>暂无相关信息...</li>";
	   }else {
	   		   cateUl4.forEach(function(item2){
	   			   fourUlEl.innerHTML += 
	   			   `<li>
	   			   <a href="../list/list.html?cid=${item2.id}">${item2.name}</a></li>`
	   		   });
	   }
	   // 第三个
	   var cateUl3 = JSON.parse(sessionStorage.getItem("data")).cateUl3;
	   cateUl3.filter(item => item.fid === 5).forEach(function(item,i)
	   {
	   });
	   
	   if(cateUl3.length === 0){
	   		   minDivEl.innerHTML ="<li class='v-middle'>暂无相关信息...</li>";
	   }else {
	   		   cateUl3.forEach(function(item2){
	   			   thirdUlEl.innerHTML += 
	   			   `<li class="v-middle">
	   			   <a href="../list/list.html?cid=${item2.id}">${item2.name}</a></li>`
	   		   });
	   }
	   
    var menuImgs = [
     		"../images/menu-list/55.jpg",
     		"../images/menu-list/60.jpg",
     		"../images/menu-list/58.jpg",
     		"../images/menu-list/56.jpg",
			"../images/menu-list/59.jpg"
     	];
		menuImgs.forEach(function(item,i){
			bottomUlEl.innerHTML += `
		      <li>
			   <img src="${menuImgs[i]}">
			  </li>
		`;
		});
		
		         liEl.appendChild(maxDivEl);
				 maxDivEl.appendChild(minDivEl);
				 minDivEl.appendChild(topDivEl);
				 topDivEl.appendChild(firstUlEl);
				 topDivEl.appendChild(secondUlEl);
				 topDivEl.appendChild(thirdUlEl);
				 topDivEl.appendChild(fourUlEl);
				 minDivEl.appendChild(bottomUlEl);
	 }
	 // 潮流鞋
	if(item.id === 9){
			var maxDivEl1 = document.createElement("div"),
			    minDivEl1 = document.createElement("div"),
				topDivEl1 = document.createElement("div"),
				bottomUlEl1 = document.createElement("ul"),
			    firstUlEl1 = document.createElement("ul"),
				secondUlEl1 = document.createElement("ul"),
				thirdUlEl1 = document.createElement("ul"),
				fourUlEl1 = document.createElement("ul");
				
			     maxDivEl1.className = "max-div1";
				 minDivEl1.className = "w min-div1";
				 topDivEl1.className = "top-div1";
				  firstUlEl1.className = "first1";
				 secondUlEl1.className = "second1";
				 thirdUlEl1.className = "third1";
				 fourUlEl1.className = "four1";
				 bottomUlEl1.className = "bottom-ul1";
				 // 第一个ul
			   var cateUl5 = JSON.parse(sessionStorage.getItem("data")).cateUl5;
			   cateUl5.filter(item => item.fid === 5).forEach(function(item,i)
			   {
			   });
			   
			   if(cateUl5.length === 0){
				   minDivEl1.innerHTML ="<li class='v-middle'>暂无相关信息...</li>";
			   }else {
				   cateUl5.forEach(function(item2){
					   firstUlEl1.innerHTML += 
					   `<li class="v-middle">
					   <a href="../list/list.html?cid=${item2.id}">${item2.name}</a></li>`
				   });
			   }
			  
			   //第二个ul
			   var cateUl6 = JSON.parse(sessionStorage.getItem("data")).cateUl6;
			   cateUl6.filter(item => item.fid === 5).forEach(function(item,i)
			   {
			   });
			   
			   if(cateUl6.length === 0){
			   		   minDivEl1.innerHTML ="<li class='v-middle'>暂无相关信息...</li>";
			   }else {
			   		   cateUl6.forEach(function(item2){
			   			   secondUlEl1.innerHTML += 
			   			   `<li class="v-middle">
			   			   <a href="../list/list.html?cid=${item2.id}">${item2.name}</a></li>`
			   		   });
			   }
			   // 第三个
			   var cateUl7 = JSON.parse(sessionStorage.getItem("data")).cateUl7;
			   cateUl7.filter(item => item.fid === 5).forEach(function(item,i)
			   {
			   });
			   
			   if(cateUl7.length === 0){
			   		   minDivEl1.innerHTML ="<li class='v-middle'>暂无相关信息...</li>";
			   }else {
			   		   cateUl7.forEach(function(item2){
			   			   fourUlEl1.innerHTML += 
			   			   `<li>
			   			   <a href="../list/list.html?cid=${item2.id}">${item2.name}</a></li>`
			   		   });
			   }
			   // 第四个
			   var cateUl8 = JSON.parse(sessionStorage.getItem("data")).cateUl8;
			   cateUl8.filter(item => item.fid === 5).forEach(function(item,i)
			   {
			   });
			   
			   if(cateUl8.length === 0){
			   		   minDivEl1.innerHTML ="<li class='v-middle'>暂无相关信息...</li>";
			   }else {
			   		   cateUl8.forEach(function(item2){
			   			   thirdUlEl1.innerHTML += 
			   			   `<li class="v-middle">
			   			   <a href="../list/list.html?cid=${item2.id}">${item2.name}</a></li>`
			   		   });
			   }
			   
			var menuImgs1 = [
			 		"../images/menu-list/55.jpg",
			 		"../images/menu-list/57.jpg",
			 		"../images/menu-list/58.jpg",
			 		"../images/menu-list/56.jpg",
					"../images/menu-list/59.jpg"
			 	];
				menuImgs1.forEach(function(item,i){
					bottomUlEl1.innerHTML += `
				      <li>
					   <img src="${menuImgs1[i]}">
					  </li>
				`;
				});
				
				         liEl.appendChild(maxDivEl1);
						 maxDivEl1.appendChild(minDivEl1);
						 minDivEl1.appendChild(topDivEl1);
						 topDivEl1.appendChild(firstUlEl1);
						 topDivEl1.appendChild(secondUlEl1);
						 topDivEl1.appendChild(thirdUlEl1);
						 topDivEl1.appendChild(fourUlEl1);
						 minDivEl1.appendChild(bottomUlEl1);
	}
  
	 document.querySelector("ul.menu").appendChild(liEl);
 });	 
