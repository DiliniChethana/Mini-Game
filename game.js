function main(){
    let con=document.getElementById('mainresult').innerHTML;
    if(con=="You Lost!"){
        alert("Game Over!")
    }
    else{
    let x;
    do{

    
     x= Math.floor(Math.random() *100/7.6);
    }
    while(x==0);
    let currenttotal=parseInt(document.getElementById('result').innerHTML);
    let Total= currenttotal + x;
    document.getElementById('result').innerHTML=Total;
    if(Total < 21){
        document.getElementById('mainresult').innerHTML="Add more Card";
     }   
     else if(Total==21){
        document.getElementById('mainresult').innerHTML="You Won!";
        alert("Congratulations!")
       
     }
     else if(Total >21){
        document.getElementById('mainresult').innerHTML="You lost!";
        alert("You Lost!")
     }
    
    var img=document.createElement("img");
    img.src =  +x+ ".jpg" ;
    
    
    img.height=200;
    document.body.appendChild(img);
}
}
function restart (){
     location.reload();
}