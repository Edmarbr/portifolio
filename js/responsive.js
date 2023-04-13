const menuBar = document.getElementById("menuBar")
const nav = document.getElementById("nav")
const imgMenu = document.getElementById("imgMenu")
const body = document.getElementById("inicio")

imgMenu.addEventListener("click", () => {
    if (nav.style.display == 'flex') {
        nav.style.display = 'none'
    } else {
        nav.style.display = 'flex'
    }
})

body.addEventListener("resize", () => {
    if (window.innerWidth <= 580) {
        menuBar.style.display = 'block'
        nav.style.display = 'none'
    } else {
        nav.style.display = 'flex'
        menuBar.style.display = 'none'
    }
})