

window.onload = function(){

    
var PIECES = $$("div#puzzlearea div");
var l = 0;
var s = 0;
var t = 0;
var f = 0;


    //this loop iterates through the puzzles pieces and lay them out on a 4X4 grid. 
   for(var i =0; i<PIECES.length; i++)
    {
        PIECES[i].addClassName("puzzlepiece");
        if(i>=0 && i<4)
        {
            PIECES[i].style.top = 0+"px";
            PIECES[i].style.left = l +"px";
            l+=100;
        }
        if(i>3 && i<8)
        {
            PIECES[i].style.top = 100 + "px";
            PIECES[i].style.left = (s)+ "px";
            s+=100;
        }
        if(i>7 && i<12)
        {
            PIECES[i].style.top = 200 +"px";
            PIECES[i].style.left = t + "px";
            t+=100;
        }
        if(i>11 && i<15)
        {
            PIECES[i].style.top = 300 + "px";
            PIECES[i].style.left = f + "px";
            f+=100;
        }
    }

    //assigns each puzzle piece ro a section of the background picture
        PIECES[0].style.backgroundPosition = "0px 0px";
        PIECES[1].style.backgroundPosition = "-100px 0px";
        PIECES[2].style.backgroundPosition = "-200px 0px";
        PIECES[3].style.backgroundPosition = "-300px 0px";
        PIECES[4].style.backgroundPosition = "0px -100px";
        PIECES[5].style.backgroundPosition = "-100px -100px";
        PIECES[6].style.backgroundPosition = "-200px -100px";
        PIECES[7].style.backgroundPosition = "-300px -100px";
        PIECES[8].style.backgroundPosition = "0px -200px";
        PIECES[9].style.backgroundPosition = "-100px -200px";
        PIECES[10].style.backgroundPosition = "-200px -200px";
        PIECES[11].style.backgroundPosition = "-300px -200px";
        PIECES[12].style.backgroundPosition = "0px -300px";
        PIECES[13].style.backgroundPosition = "-100px -300px";
        PIECES[14].style.backgroundPosition = "-200px -300px";
 


var blankt = 300;
var blankl = 300;
     //    
    for(var e=0; e<PIECES.length; e++)
    {
               (
               
               function()
               {
                   var index = e;
                   PIECES[e].addEventListener("click", function(){moveit(PIECES[index]);},false);
               }());
           } 
    //moves the selected piece to the blank space
    function moveit(p)
    {
         
        var etop = parseInt(p.style.top);
        var eleft = parseInt(p.style.left);
        var tt= 0;
        var tl= 0;
        if(p.classList.contains("movablepiece"))
                    {
                        tt= etop;
                        tl = eleft;
                        p.style.top = blankt +"px";
                        p.style.left = blankl +"px";
                        blankt = tt;
                        blankl = tl;
                    }
                    
                    
            
    }
    
    function remov(p)
    {
        p.removeClassName("movablepiece");
    }
    
    for(var c=0; c<PIECES.length;c++)
    {
        (function()
        {
             var ind = c;
             PIECES[ind].addEventListener("mouseover", function(){canmove(PIECES[ind])},false);
             PIECES[ind].addEventListener("mouseleave", function(){remov(PIECES[ind])},false);
             PIECES[ind].addEventListener("click", function(){moveit(ind)},false);
             
        }());
    }
   //checks if the pieces are movable then hghlights it
    function canmove(piece)
    {
    var move = false;
    var etop = parseInt(piece.style.top.substring(0,3));
    var eleft = parseInt(piece.style.left.substring(0,3));
    var spacet =Math.abs(blankt-etop);
    var spacel =Math.abs(blankl-eleft);
    if((blankt==etop) || (blankl==eleft))
    {
        if(spacel==100 || spacet==100)
            {
                piece.addClassName("movablepiece");
                move = true;
            }
        
    }
    return move;

}
   //randomly moves pieces to movable positions 
    function shuffle()
    {
        var m=0;
    
     while(m<100000)
     {
        var it = Math.floor(Math.random()*15)+0;
        if(canmove(PIECES[it]))
             {
                 moveit(PIECES[it]);
             }
        m++;
        
        
        
        
        
        
        
        
        
        
        
        
        
        
     }
    }
  //shuffles the board when the "shufflebutton" is clicked
    document.getElementById("shufflebutton").addEventListener("click", shuffle);
  // Below a button is created that when clicked, calls the change it function. 
  var changepic = document.createElement("BUTTON");
  var cha = document.createTextNode("Click here to change the pic"); 
  changepic.appendChild(cha);
  document.body.appendChild(changepic); 
  changepic.setAttribute("id", "changepicb");
  
  
  
    //this function changes the background image of the puzzle pieces.
    function changeit()
    {
       var choice = Math.floor(Math.random() * 4) + 1;
       
    
       for(var cp=0; cp<PIECES.length; cp++)
       {
           if(choice==1)
           {
            PIECES[cp].style.backgroundImage = "url(bonnie.jpg)";
            
           }
           if(choice==2)
           {
            PIECES[cp].style.backgroundImage = "url(background.jpg)";
        
           }
           if(choice==3)
           {
            PIECES[cp].style.backgroundImage = "url(rufus.jpg)";
           }
           if(choice==4)
           {
            PIECES[cp].style.backgroundImage = "url(shego.jpg)";   
           }
       }
    }
    
    changepic.addEventListener("click",changeit);
  
};

   
     
           
            
         

        
         


