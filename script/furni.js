let cards=document.querySelector(".card");
let bar=document.getElementById("bar")
cards.forEach(function(card){
    card.addEventListener("click",function(){
        window.open("")
    })
})

bar.addEventListener("click",function(){
    document.querySelector("ul").classList.toggle("showData");
})