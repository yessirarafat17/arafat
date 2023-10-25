var x =document.querySelector(".close");
var main =document.querySelector(".main");
var login =document.querySelector("#lg");
var login2=document.querySelector("#log2")
login.addEventListener("click",function(){
    main.classList.add("nono")
    login.style.opacity=0;
})
x.addEventListener("click",function(){
    main.classList.remove("nono")
    login.style.opacity=1;

})
login2.addEventListener("click",function(){
    main.classList.add("nono")
    login.style.opacity=1;})

