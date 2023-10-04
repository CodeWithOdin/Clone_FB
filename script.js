const setmenujs= document.querySelector(".toggle");
// To set theme

            //Called from HTML using onClick()
function setmenu(){
    setmenujs.classList.toggle("toggleheight");    
}
            //Called from HTML using onClick()
function set_theme(){
    if(localStorage.getItem("theme")=="light"){
        localStorage.setItem("theme","dark");   
    }
    else{
        localStorage.setItem("theme","light");   
    }
    document.body.classList.toggle("dark-theme");
}

// To get theme
if(localStorage.getItem("theme")=="light"){
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme")=="dark"){
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme","light");
}
