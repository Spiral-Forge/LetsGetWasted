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
        var mainform=document.getElementById("form-div")
        mainform.classList.add("beforedisp")
        textarea.classList.add("afterdisp");
        console.log(textarea)
        for(var i=0;i<data.length;i++){
            var ul=document.createElement("ul")
            var li1=document.createElement("li")
            var li2=document.createElement("li")
            var li3=document.createElement("li")
            var br=document.createElement("br")
            var t1=document.createTextNode(data[i].Name)
            var t2=document.createTextNode(data[i].Address)
            var t3=document.createTextNode(data[i].Contact)
            ul.classList.add("collector");

            li1.appendChild(t1)
            li2.appendChild(t2)
            li3.appendChild(t3)

            li1.classList.add("cname")
            li2.classList.add("cadd")
            li3.classList.add("ccontact")

            ul.appendChild(li1)
            ul.appendChild(li2)
            ul.appendChild(li3)
            console.log(ul)
            textarea.appendChild(ul);
        }
    });
})