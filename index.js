import Swal from './node_modules/sweetalert2/src/sweetalert2.js'

let a= document.getElementById("A");
let b= document.getElementById("B");
let c= document.getElementById("C");

a.innerHTML=0;
b.innerHTML=0;
c.innerHTML=0;
for(let i=1;i<=1000;++i)
{
    setTimeout(
    ()=>{
        a.innerHTML=parseInt(a.innerHTML)+1;
        b.innerHTML=parseInt(b.innerHTML)+14;
        c.innerHTML=parseInt(c.innerHTML)+5;
        if(i===1000)
            Swal.fire("Welcom User");
    }
        , i*2
    )
}