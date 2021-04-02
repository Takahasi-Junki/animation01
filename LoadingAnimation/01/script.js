function loaded(){
  document.getElementById("loading").classList.remove("active")
}


/*
1000ms~3000msでfunction loaded()が実行される。
*/ 

window.addEventListener("load", function(){
  setTimeout(floaded, 1000)
})

setTimeout(loaded, 3000)