
 var activeHoleNumber = 1;
 var activeHoleImage = "img/hole.png";
 var moelInTheHole = "img/mole.png";
 var speed = 2000;
 var total = 0
 var increaseScore = "img/mole.png";
 var incorrect = 0;
 var stageResult = "Failed"
 var activebomb = "img/bomb.png";
 var bomb ="img/bomg.png";
 
 function PopUp(){
    document.getElementById('popup').style.display="none";
     
}
function startTheGame(){
    
    setInterval(function(){
        
        
        var newRandomNumber = Math.floor(Math.random()*9)+1;
        var holeobject = document.getElementById("hole-"+activeHoleNumber).src = activeHoleImage;
        activeHoleNumber = newRandomNumber;
        var moleobject = document.getElementById("hole-"+activeHoleNumber).src = moelInTheHole;

        
        
    },speed);
    
 }

 function game(){
    
    setInterval(function(){
        
        
        var newRandomNumber = Math.floor(Math.random()*7)+1;
        var holeobject = document.getElementById("hole-"+activeHoleNumber).src = activeHoleImage;
        activeHoleNumber = newRandomNumber;
        var bombobject = document.getElementById("hole-"+activeHoleNumber).src = activebomb;
        
        
    },5000);
    
 }
 
 

 function CheckAction(clickedHole){

    checkIfWonOrLost();

    
    if(total>5){
        stage = stage+1
    
    }


    if(clickedHole == activeHoleNumber){
        total = total+1;
        document.getElementById("total").innerHTML = "Total = "+total; 
        
        
    }   
    
    else{
    
        total = total-1
        incorrect = incorrect+1;
        document.getElementById("total").innerHTML = "Total = "+total; 
    }
  
    function checkIfWonOrLost(){
        if(total > 5){
            
           
            location.reload();
            window.location.href="win.html";
            
            document.getElementById("total").innerHTML = "Total - "+total
            
        }else if(incorrect > 5){
            
            alert("You Lose The Game")
            location.reload();
            window.location.href="end.html";
            document.getElementById("total").innerHTML  = "Total - "+total
            
        } 
    
    } 
        

 }
 

 
 



 function EndTheGame(){

    window.location.href="end.html";
    
 }

 function startNewGame(){

    window.location.href="game.html";
    
 }



