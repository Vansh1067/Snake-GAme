var canvas =document.getElementById('canvas');
var g =document.getElementById('img');

var ctx = canvas.getContext('2d');
var Snake=[];
var grid=20;
var pos;
Snake[0]={
    x:2*grid,
    y:2*grid
}
var snakeX=Snake[0].x;
var snakeY=Snake[0].y;

var food={
    x:Math.floor(Math.random()*39+1)*grid,
    y:Math.floor(Math.random()*29+1)*grid
}
var d;
document.addEventListener('keydown',(e)=>{
    k= e.keyCode;
    if(k==37 && d!="right") d="left";
    else if(k==38 && d!="down") d="up";
    else if(k==39 && d!="left") d="right";
    else if(k==40 && d!="up") d="down";
    console.log(d);

});
function Food(){
    ctx.fillStyle="white";
    ctx.fillRect(food.x,food.y,grid,grid);
}

function collision(head,array){
    for(let i=0;i<array.length;i++){
        if(head.x==array[i].x && head.y==array[i].y){
            return true;
        }
    }
    return false;
}

function start()
{
    
    ctx.fillStyle="black";
    ctx.fillRect(0,0,800,600);
    
    for(let i=0;i<Snake.length;i++){
        ctx.fillStyle=(i==0)?"red":"green";
        ctx.fillRect(Snake[i].x,Snake[i].y,grid,grid);
        
    }
    Food();
    snakeX=Snake[0].x;
    snakeY=Snake[0].y;

    
    if(d=="right") snakeX+=grid;
    if(d=="left") snakeX-=grid;
    if(d=="up") snakeY-=grid;
    if(d=="down") snakeY+=grid;
    
    
    if(snakeX==food.x&&snakeY==food.y){
         food={
            x:Math.floor(Math.random()*39+1)*grid,
            y:Math.floor(Math.random()*29+1)*grid
        }
    }
    else{
        Snake.pop();
    }

    pos={
        x:snakeX,
        y:snakeY
    }
    if(snakeX<0||snakeX>780||snakeY<0||snakeY>580||collision(pos,Snake)){
        clearInterval(game);
        
       
       
        

        
    }
    Snake.unshift(pos);
}

var game =setInterval(start,100);





