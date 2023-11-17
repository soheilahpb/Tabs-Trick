let _li = document.querySelectorAll("ul>li")
let _p = document.querySelectorAll(".box>p")
console.log(_p);
const TabMenu = (e) => {
    // Color Reset
    _li[0].style.backgroundColor="#afc2d6"
    _li[1].style.backgroundColor="#afc2d6"
    _li[2].style.backgroundColor="#afc2d6"

    // ***************
    let temp = e.target.style.backgroundColor = "white"
    
    
    // Opacity Reset
    _p.forEach((val)=>{
        val.style.opacity="0"
    })
    
    
    // *********************
    let name = e.target.getAttribute("data-name")
    document.getElementById(name).style.opacity = '1'
}
