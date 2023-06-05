function toggleMode(){
    const html = document.documentElement
/*
    if(html.classList.contains('light')){
        html.classList.remove('light')
    }else {
        html.classList.add('light')
    }
*/
html.classList.toggle("light")

// PEGAR A img tag
const img = document.querySelector("#profile img")

// SUBSTITUIR A IMAGEM

if(html.classList.contains("light")){
    img.setAttribute("scr", "/assets/6073873.png")
}else{
    img.setAttribute("src", "/assets/Profile-Avatar-PNG.png")
}
}