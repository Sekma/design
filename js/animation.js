window.onscroll=function(){animation()};

function animation(){
        if(document.documentElement.scrollTop>100){
        document.getElementById("servicesTitle").classList.add("slideUp");
        setTimeout(function(){
                document.querySelector(".servicesTitle-container").style.opacity="10";
        },1000)
}   
        if(document.documentElement.scrollTop>700){
                document.getElementById("staffTitle").classList.add("slideUp"); 
                setTimeout(function(){
                        document.querySelector(".staffTitle-container").style.opacity="10";
                },1000)
        }  
}