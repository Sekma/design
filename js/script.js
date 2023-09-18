var bgTab=["img/bgi1.jpg","img/bgi2.jpg","img/bgi3.jpg","img/bgi4.jpg","img/bgi5.jpg","img/bgi6.jpg"];
var text=["BLUE","ORANGE","GREEN","RED","PINK","YELLOW"];
var bgSection=document.querySelector(".section1");
var btnleft=document.querySelector(".btn1");
var btnmiddle=document.querySelector(".btn2");
var btnright=document.querySelector(".btn3");
var btndisplayleft=document.querySelector(".btn0");
var btndisplayright=document.querySelector(".btn4");

bgSection.style.backgroundImage="url("+bgTab[2]+")";



var colorNum=2;

btnleft.style.setProperty("--color-btn", text[colorNum-1]);
btnmiddle.style.setProperty("--color-btn", text[colorNum]);
btnright.style.setProperty("--color-btn", text[colorNum+1]);

btnleft.style.setProperty("--color-shadow",text[colorNum-1]);
btnmiddle.style.setProperty("--color-shadow","none");
btnright.style.setProperty("--color-shadow",text[colorNum+1]);

btnleft.style.setProperty("--color-btn-hover", text[colorNum-1]);
btnmiddle.style.setProperty("--color-btn-hover", text[colorNum]);
btnright.style.setProperty("--color-btn-hover", text[colorNum+1]);

btnleft.style.setProperty("--btn-cursor", "pointer");
btnmiddle.style.setProperty("--btn-cursor", "auto");
btnright.style.setProperty("--btn-cursor", "pointer");



function change(num){

   if (num==0){
        if(colorNum>1){
            colorNum--;
            bgSection.style.backgroundImage="url("+bgTab[colorNum]+")";

            

            btnleft.style.setProperty("--btn-cursor", "pointer");
            btnmiddle.style.setProperty("--btn-cursor", "auto");
            btnright.style.setProperty("--btn-cursor", "pointer");

            document.querySelector(".btn0").classList.add("firsttoright");
            document.querySelector(".btn1").classList.add("toright");
            document.querySelector(".btn2").classList.add("toright");
            document.querySelector(".btn3").classList.add("cancel-last");
    
     setTimeout(function(){
        document.querySelector(".btn0").classList.remove("firsttoright");
        document.querySelector(".btn1").classList.remove("toright");
        document.querySelector(".btn2").classList.remove("toright");
        document.querySelector(".btn3").classList.remove("cancel-last");

        btnleft.style.setProperty("--color-btn", text[colorNum-1]);
        btnmiddle.style.setProperty("--color-btn", text[colorNum]);
        btnright.style.setProperty("--color-btn", text[colorNum+1]);


    
    }, 1000);

        }
        else if(colorNum==1){
            bgSection.style.backgroundImage="url("+bgTab[colorNum-1]+")";

            

            btnleft.style.setProperty("--color-btn", text[colorNum-1]);
            btnmiddle.style.setProperty("--color-btn", text[colorNum]);
            btnright.style.setProperty("--color-btn", text[colorNum+1]);

            btnleft.style.setProperty("--btn-cursor", "auto");
            btnmiddle.style.setProperty("--btn-cursor", "pointer");
            btnright.style.setProperty("--btn-cursor", "pointer");

            
        }



    }
    
    if(num==1){
        bgSection.style.backgroundImage="url("+bgTab[colorNum]+")";


        btnleft.style.setProperty("--color-btn", text[colorNum-1]);
        btnmiddle.style.setProperty("--color-btn", text[colorNum]);
        btnright.style.setProperty("--color-btn", text[colorNum+1]);

        btnleft.style.setProperty("--btn-cursor", "pointer");
        btnmiddle.style.setProperty("--btn-cursor", "auto");
        btnright.style.setProperty("--btn-cursor", "pointer");
   }

   if(num==2){
        if(colorNum<bgTab.length-2){
            colorNum++;
            bgSection.style.backgroundImage="url("+bgTab[colorNum]+")";

            

            btnleft.style.setProperty("--btn-cursor", "pointer");
            btnmiddle.style.setProperty("--btn-cursor", "auto");
            btnright.style.setProperty("--btn-cursor", "pointer");

            document.querySelector(".btn1").classList.add("cancel");
            document.querySelector(".btn2").classList.add("toleft");
            document.querySelector(".btn3").classList.add("toleft");
            document.querySelector(".btn4").classList.add("lasttoleft");
    
     setTimeout(function(){
        document.querySelector(".btn1").classList.remove("cancel");
        document.querySelector(".btn2").classList.remove("toleft");
        document.querySelector(".btn3").classList.remove("toleft");
        document.querySelector(".btn4").classList.remove("lasttoleft");

        btnleft.style.setProperty("--color-btn", text[colorNum-1]);
        btnmiddle.style.setProperty("--color-btn", text[colorNum]);
        btnright.style.setProperty("--color-btn", text[colorNum+1]);
    
    }, 1000);
        }
        else if(colorNum==bgTab.length-2){
            bgSection.style.backgroundImage="url("+bgTab[colorNum+1]+")";

            

            btnleft.style.setProperty("--color-btn", text[colorNum-1]);
            btnmiddle.style.setProperty("--color-btn", text[colorNum]);
            btnright.style.setProperty("--color-btn", text[colorNum+1]);

            btnleft.style.setProperty("--btn-cursor", "pointer");
            btnmiddle.style.setProperty("--btn-cursor", "pointer");
            btnright.style.setProperty("--btn-cursor", "auto");
        }

    }; 













}