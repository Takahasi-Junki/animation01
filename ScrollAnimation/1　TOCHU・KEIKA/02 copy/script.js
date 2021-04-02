const targetElement = document.querySelectorAll(".animationTarget");

console.log("画面の高さ", window.innerHeight)

document.addEventListener("scroll",function(){
  for (let i = 0; i < targetElement.length; i++) {
    const getElementDistance = targetElement[i].
    getBoundingClientRect().top
    if(i === 1){
      console.log(getElementDistance)
    }
    
  }
})
