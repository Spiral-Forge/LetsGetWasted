var form=document.getElementById("form1")
var submit=document.getElementById("button-blue")

submit.addEventListener("click",()=>{

    // var reqbody={}
    // for(var i=0;i<form.elements.length;i++){
    //     reqbody[form[i].name]=form[i].value
    // }
    // console.log(reqbody)
    //var namep=formData.Name.value   
    var res=fetch('/getgc',{
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            type:form.type.value
        })
      });
      let pr= res.then((res)=>{
          if(res.status!=200){
              return;
          }
          return res.text();
      })
      pr.then(function display(abc){
        var data=JSON.parse(abc);
        console.log(data)
        var textarea=document.getElementById("comment")
        textarea.classList.add("afterdisp");
        for(var i=0;i<data.length;i++){
            var p1=document.createElement("p")
            var br=document.createElement("br")
            var p2=document.createElement("p")
            var p3=document.createElement("p")
            var p4=document.createElement("p")
            var t1=document.createTextNode(data[i].Name)
            var t2=document.createTextNode(data[i].Address)
            var t3=document.createTextNode(data[i].Contact)
            var t4=document.createTextNode(data[i].ZIP)
            p1.appendChild(t1)
            p2.appendChild(t2)
            p3.appendChild(t3)
            p4.appendChild(t4)
            textarea.append(p1)
            textarea.append(p2)
            textarea.append(p3)
            textarea.append(p4)
            textarea.append(br)
        }



    });
})