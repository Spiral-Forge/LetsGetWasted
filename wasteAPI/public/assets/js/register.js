//var form=document.getElementById("form_id")
var formData = document.getElementById('form_id')
// console.log("HELLO")
var submit=document.getElementById("btn-submit")

submit.addEventListener("click",()=>{
  //console.log("HELLO!")
    var reqbody={}
    for(var i=0;i<formData.elements.length;i++){
        reqbody[formData[i].name]=formData[i].value
    }
    console.log(reqbody)
    var namep=formData.Name.value   
    var res=fetch('/registergc',{
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(reqbody)
      });
      let pr= res.then((res)=>{
          if(res.status!=200){
              return;
          }
          return res.text();
      })
      pr.then(function display(abc){
        alert(`Congratulations ${namep}! You have successfully registered.`)
	for(var i=0;i<formData.elements.length;i++){
        	formData[i].value="";
    	}
        console.log("HELLO....")
    });
})
