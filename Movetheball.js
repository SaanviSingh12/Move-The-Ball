var ball=document.getElementById('ball');

ball.style.top=ball.offsetTop+"px";
ball.style.left=ball.offsetLeft+"px";


window.addEventListener('keypress',function(event){
    var key=event.key;
    var top=parseInt(ball.style.top);
    var left=parseInt(ball.style.left);

    if(key=='w'||key=='W'){
        if(top>5)
            ball.style.top=top-10+"px";
    }

    if(key=='a'||key=='A'){
        if(left>5)
            ball.style.left=left-10+"px";
    }

    if(key=='s'||key=='S'){
        if(window.innerHeight-top>5)
            ball.style.top=top+10+"px";
    }

    if(key=='d'||key=='D'){
        if(window.innerWidth-left>5)
            ball.style.left=left+10+"px";
    }

}
);