window.onscroll=function(){animation()};

function animation(){
        if(document.documentElement.scrollTop>150){
        document.getElementById("servicesTitle").classList.add("animation");
        setTimeout(function(){
                document.querySelector(".servicesTitle-container").style.opacity="10";
        },1000)
}   
        if(document.documentElement.scrollTop>900){
                document.getElementById("staffTitle").classList.add("animation"); 
                setTimeout(function(){
                        document.querySelector(".staffTitle-container").style.opacity="10";
                },1000)
        }  
}