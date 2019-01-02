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
    
    
