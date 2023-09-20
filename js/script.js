
//background image
var bgTab=["img/bgi1.jpg","img/bgi2.jpg","img/bgi3.jpg","img/bgi4.jpg","img/bgi5.jpg","img/bgi6.jpg"];

//numéros des image (sur les boutons)
var text=["1","2","3","4","5","6"];

//les variables
var bgSection=document.querySelector(".section1");

var compteur=document.getElementById("nbrImg");

var btnleft=document.querySelector(".btn1");
var btnmiddle=document.querySelector(".btn2");
var btnright=document.querySelector(".btn3");
var btndisplayleft=document.querySelector(".btn0");
var btndisplayright=document.querySelector(".btn4");

//la première image à afficher


//les numéros de départ
var bgNbr=1;

bgSection.style.backgroundImage="url("+bgTab[bgNbr]+")";

btnleft.innerHTML=text[bgNbr-1];
btnmiddle.innerHTML=text[bgNbr];
btnright.innerHTML=text[bgNbr+1];

//numéro de l'image affiché
compteur.innerHTML=text[bgNbr]+"/6";

function change(num){

   if (num==0){
        if(bgNbr>1){
            bgNbr--;
            bgSection.style.backgroundImage="url("+bgTab[bgNbr]+")";
            compteur.innerHTML=text[bgNbr]+"/6";
            document.querySelector(".btn0").classList.add("firsttoright");
            document.querySelector(".btn1").classList.add("toright");
            document.querySelector(".btn2").classList.add("toright");
            document.querySelector(".btn3").classList.add("cancel-last");
    
            setTimeout(function(){
                document.querySelector(".btn0").classList.remove("firsttoright");
                document.querySelector(".btn1").classList.remove("toright");
                document.querySelector(".btn2").classList.remove("toright");
                document.querySelector(".btn3").classList.remove("cancel-last");

                btnleft.innerHTML=text[bgNbr-1];
                btnmiddle.innerHTML=text[bgNbr];
                btnright.innerHTML=text[bgNbr+1];
            
            }, 1000);
           

        }
        else if(bgNbr==1){
            bgSection.style.backgroundImage="url("+bgTab[bgNbr-1]+")";
            compteur.innerHTML=text[bgNbr-1]+"/6";
        }
        

    }
    
    if(num==1){
            bgSection.style.backgroundImage="url("+bgTab[bgNbr]+")";
            compteur.innerHTML=text[bgNbr]+"/6";
            btnleft.innerHTML=text[bgNbr-1];
            btnmiddle.innerHTML=text[bgNbr];
            btnright.innerHTML=text[bgNbr+1];    
   }

   if(num==2){
        if(bgNbr<bgTab.length-2){
            bgNbr++;
            bgSection.style.backgroundImage="url("+bgTab[bgNbr]+")";
            compteur.innerHTML=text[bgNbr]+"/6";

            document.querySelector(".btn1").classList.add("cancel");
            document.querySelector(".btn2").classList.add("toleft");
            document.querySelector(".btn3").classList.add("toleft");
            document.querySelector(".btn4").classList.add("lasttoleft");
    
            setTimeout(function(){

                document.querySelector(".btn1").classList.remove("cancel");
                document.querySelector(".btn2").classList.remove("toleft");
                document.querySelector(".btn3").classList.remove("toleft");
                document.querySelector(".btn4").classList.remove("lasttoleft");

                btnleft.innerHTML=text[bgNbr-1];
                btnmiddle.innerHTML=text[bgNbr];
                btnright.innerHTML=text[bgNbr+1];
            
            }, 1000);

            
        }
        else if(bgNbr==bgTab.length-2){
            bgSection.style.backgroundImage="url("+bgTab[bgNbr+1]+")";
            compteur.innerHTML=text[bgNbr+1]+"/6";
           
        }

    }
    console.log(bgNbr); 
};