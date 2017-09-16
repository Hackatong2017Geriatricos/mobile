document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;                                                        
var pageY = null;
var window_height = $(window).height();

function handleTouchStart(evt) 
{                                         
    xDown = evt.touches[0].clientX;                                      
    yDown = evt.touches[0].clientY;   
    pageY = evt.touches[0].pageY;                                  
};                                                

function handleTouchMove(evt) 
{
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) 
    {/*most significant*/
        var menuLeft = document.getElementById( 'cbp-spmenu-s1' )
        
        
        if ( xDiff > 3 ) {
            /* left swipe */ 
            classie.remove(menuLeft,"cbp-spmenu-open");
            
        } /*else {
            /* right swipe */
            /*classie.add(menuLeft,"cbp-spmenu-open");
        }*/                       
    } 


    /* reset values */
    xDown = null;
    yDown = null;                                             
};


