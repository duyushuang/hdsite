function mouseOver()
{
    var div = document.getElementById('b1');
    div.className = "Menu Menu--open Navbar-menu";
}

function mouseOut ()
{
    var div = document.getElementById('b1');
    div.className = "Menu Navbar-menu";
}

var scrollFunc=function(e){ 
    e=e || window.event; 
    var t1; 
    var t2; 
    if(e.wheelDelta){//IE/Opera/Chrome 
        t1=e.wheelDelta; 
    }else if(e.detail){//Firefox 
        t2=e.detail; 
    } 
    console.log(getScrollTop());
    if(getScrollTop() > 0 && e.wheelDelta > 0){
         var div = document.getElementById('Navbar');
         div.className = "Navbar ScrollBackFixed ScrollBackFixed-active ScrollBackFixed-animation";        
    }
    else{
         var div = document.getElementById('Navbar');
         div.className = "Navbar";   
    }
} 
/*注册事件*/ 
if(document.addEventListener){ 
    document.addEventListener('DOMMouseScroll',scrollFunc,false); 
}//W3C 
window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome 

function getScrollTop(){   
    var scrollTop=0;   
    if(document.documentElement&&document.documentElement.scrollTop){   
        scrollTop=document.documentElement.scrollTop;   
    }else if(document.body){   
        scrollTop=document.body.scrollTop;   
    }   
    return scrollTop;   
}  