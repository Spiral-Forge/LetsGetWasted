var sub=document.getElementById("submit")
// var get=document.getElementById("update")
sub.addEventListener("click",()=>{
	// console.log("click")
	var item=document.getElementById("user").value;
	var qty=document.getElementById("qty").value;
	var contact=document.getElementById("info").value;
	var desc=document.getElementById("decr").value;
	var ID = function () {
		return '_' + Math.random().toString(36).substr(2, 9);
	};
	var id=ID();
	// console.log(id)
	let res=fetch('/dentry',{
		method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
			item: item,
			qty:qty,
			contact:contact,
			desc:desc,
			id:id
		})

	})
	let pr= res.then((res)=>{
		if(res.status!=200){
			return;
		}
		return res.text();
	})
	pr.then((d)=>{
		// console.log(d);
		// var p=document.getElementById("newid");
		// var t1=document.createTextNode("Your donation id is:" +id)
		// p.append(t1)
		console.log(id);
		document.getElementById("user").value="";
		document.getElementById("qty").value="";
		document.getElementById("info").value="";
		document.getElementById("decr").value="";
	});
	

})

var update=document.getElementById("update");

update.addEventListener("click",()=>{
	var id=document.getElementById("up").value
	// console.log(id);
	let res=fetch('/dget',{
		method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
			id:id
		})

	})
	let pr= res.then((res)=>{
		if(res.status!=200){
			return;
		}
		return res.json();
	})
	pr.then((d)=>{
		console.log(d);
		var form=document.getElementById("form1")
		form.classList.add("disp");
		var form2=document.getElementById("updates")
		form2.classList.add("no-disp");
		var item=document.getElementById("user1");
		var qty=document.getElementById("qty1");
		var contact=document.getElementById("info1");
		var desc=document.getElementById("decr1");
		item.value=d.item;
		qty.value=d.qty;
		contact.value=d.contact;
		desc.value=d.desc;
		var save=document.getElementById("submit1");
		save.addEventListener("click",()=>{
			var item=document.getElementById("user1").value;
			var qty=document.getElementById("qty1").value;
			var contact=document.getElementById("info1").value;
			var desc=document.getElementById("decr1").value;
			var id1=id
			// console.log(id)
			let res=fetch('/dupdate',{
				method:"POST",
				headers: {
					"Content-Type": "application/json"
				},
				body:JSON.stringify({
					item: item,
					qty:qty,
					contact:contact,
					desc:desc,
					id:id1
				})

			})
			let pr= res.then((res)=>{
				if(res.status!=200){
					return;
				}
				return res.text();
			})
			pr.then((d)=>{
				console.log(d);
				var forms=document.getElementById("form1");
				forms.classList.remove("disp")
				// forms.classList.add("no-disp")
				var h1=document.getElementById("succ")
				var tex=document.createTextNode("Succefully updated")
				h1.append(tex);
			});
		})
	});
})

