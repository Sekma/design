window.onscroll=function(){animation()};

function animation(){
        if(document.documentElement.clientWidth>991){
                if(document.documentElement.scrollTop>1600){
                document.getElementById("servicesTitle").classList.add("slideUp");
                setTimeout(function(){
                        document.querySelector(".servicesTitle-container").style.opacity="10";
                },1000)
                }   
                if(document.documentElement.scrollTop>2200){
                        document.getElementById("staffTitle").classList.add("slideUp"); 
                        setTimeout(function(){
                                document.querySelector(".staffTitle-container").style.opacity="10";
                        },1000)
                }  
        }else{
                document.getElementById("servicesTitle").classList.add("visible"); 
                document.getElementById("staffTitle").classList.add("visible");
                
                document.querySelector(".servicesTitle-container").style.opacity="10";
                document.querySelector(".staffTitle-container").style.opacity="10";
        }
}