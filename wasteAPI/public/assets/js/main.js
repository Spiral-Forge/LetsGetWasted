var msg=document.getElementById("fake-msg")
msg.addEventListener("click",()=>{
    var fi=document.getElementById("fake-input")
    fi.value="";
    alert("Thank you for your feedback")

    
})

var res=fetch('/getss');
      let pr= res.then((res)=>{
          if(res.status!=200){
              return;
          }
          return res.text();
      })
      pr.then(function display(data){
      	var abc=JSON.parse(data)
      	console.log(abc)
        var l1=document.getElementById("org1")
        var l2=document.getElementById("item1")
        var l3=document.getElementById("desc1")
        var t1=document.createTextNode(abc[0].item)
            var t2=document.createTextNode(abc[0].qty)
            var t3=document.createTextNode(abc[0].contact)
            l1.appendChild(t1)
            l2.appendChild(t2)
            l3.appendChild(t3)
          var l4=document.getElementById("org2")
        var l5=document.getElementById("item2")
        var l6=document.getElementById("desc2")
        var t4=document.createTextNode(abc[1].item)
            var t5=document.createTextNode(abc[1].qty)
            var t6=document.createTextNode(abc[1].contact)
            l4.appendChild(t4)
            l5.appendChild(t5)
            l6.appendChild(t6)
        
    });



