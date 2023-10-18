window.onscroll=function(){animation()};

function animation(){
        if(document.documentElement.clientWidth>991){
                if(document.documentElement.scrollTop>900){
                document.getElementById("servicesTitle").classList.add("slideUp");
                setTimeout(function(){
                        document.querySelector(".servicesTitle-container").style.opacity="10";
                },500)
                }   
                if(document.documentElement.scrollTop>1550){
                        document.getElementById("staffTitle").classList.add("slideUp"); 
                        setTimeout(function(){
                                document.querySelector(".staffTitle-container").style.opacity="10";
                        },500)
                }  
        }else{
                document.getElementById("servicesTitle").classList.add("visible"); 
                document.getElementById("staffTitle").classList.add("visible");
                
                document.querySelector(".servicesTitle-container").style.opacity="10";
                document.querySelector(".staffTitle-container").style.opacity="10";
        }
}