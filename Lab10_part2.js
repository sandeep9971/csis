var topPosition = 60;
var leftPosition = 0;

function runPuppy() {
    var square = document.getElementById("puppy");

    
	square.style.position = "absolute";
	square.style.left = leftPosition + "px";
	square.style.top = topPosition + "px";
    square.style.visibility = "visible";    


    if(topPosition<(screen.availHeight-150))
    {
    

     
         topPosition+=20;
         leftPosition+=20;
    }


   
    // add if it reaches the screen end (you can check with screen.availwidth)					
}

