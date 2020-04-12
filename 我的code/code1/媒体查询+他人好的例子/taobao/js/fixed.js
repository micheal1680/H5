var div1=document.querySelector(".head");
      document.onscroll=function(){
          if(window.pageYOffset>=150){
              div1.style.position="fixed";
              div1.style.top="0";
              div1.style.zIndex="101";
          }else{
            div1.style.position="relative";
          }
      }