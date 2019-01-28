var gbp, usd, eur;
function init()
{
    gbp = document.getElementById("GBP");
    usd = document.getElementById("USD");
    eur = document.getElementById("EUR");
    }
function usdfunc()
{
    gbp.value = parseFloat(usd.value) * 0.79;
    eur.value = parseFloat(usd.value) * 0.88;
    }
 function eurfunc()
{
    gbp.value = parseFloat(eur.value) * 0.90;
    usd.value = parseFloat(eur.value) * 1.14;
}   
function gbpfunc()
{
    usd.value = parseFloat(gbp.value) * 1.27;
    eur.value = parseFloat(gbp.value) * 1.11;
    }
init();
    
    
// mouseX and mouseY

strokeWeight(3);
stroke(57, 0, 214);
fill(0, 210, 247);

draw = function() {
    
    
    background(255, 255, 255);
    
    ellipse(mouseY, mouseX, 30, 30);
    
};
