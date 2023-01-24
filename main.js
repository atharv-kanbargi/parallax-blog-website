const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function(){
    let offset = this.window.pageYOffset;
    // console.log('offset :' + offset)
    // console.log()
    parallax.style.backgroundPositionY = offset*0.7 + "px";
})