var from=document.querySelector(".from");
var x=document.querySelector(".close");
var add=document.querySelector(".add");
var login=document.querySelector(".btn");
var dis=document.querySelector("#dis")
var s=0;


login.addEventListener("click",function(){
    from.classList.add("add");
    login.style.opacity=0;
})
x.addEventListener("click",function(){
    from.classList.remove("add");
    login.style.opacity=1;
})
