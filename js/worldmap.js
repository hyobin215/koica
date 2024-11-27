window.addEventListener("load",function(){
	var btns = document.querySelectorAll("#worldmap_load span");
	var box = document.querySelector("#info_box");
	var name = box.querySelector(".country_name");
	var address = box.querySelector(".address");
	var phone = box.querySelector(".phone_number");
	var fax = box.querySelector(".fax_number");
	var email = box.querySelector(".email");
	var timer;


	btns.forEach((btn)=>{
		btn.addEventListener("mouseover",function(){
			var d_data = btn.getAttribute("d").split(",",2);
			var btn_X = parseFloat(d_data[0].substring(1)).toFixed(2);
			var y_Data = d_data[1].split("c",2);
			var btn_Y = parseFloat(y_Data[0]).toFixed(2);
			box.style.display = "block";
			box.style.left = btn_X+"px";
			box.style.top = btn_Y+"px";		
			console.log(btn_X+"/"+btn_Y);        

			name.innerHTML = btn.dataset.name;
			address.innerHTML = btn.dataset.address;
			phone.innerHTML = btn.dataset.phone;
			fax.innerHTML = btn.dataset.fax;
			email.innerHTML = email.dataset.email;			

			clearTimeout(timer);
		});
		btn.addEventListener("mouseout",function(){
			timer = setTimeout(function(){
				box.style.display = "none";
			},300);
		});
	});
});