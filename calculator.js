

function appendValue(value) 
{
    var i = document.querySelectorAll(".calculface")[0];

    if(i.style.backgroundColor == "black")
    {
        clearDisplay();
    }
    else
    {
        document.getElementById('display').value += value;
    } 
    
}

//Effacer le contenu
function clearDisplay() 
{
    document.getElementById('display').value = '';
}

function calculate() 
{
    //Essayer

    var d = document.getElementById('display');
    var hist = document.getElementById('h');
    let calcul = [];

    try 
    {
        let expression = d.value;
        let res = eval(expression);

        d.value = res;
        
        hist.value += ('       ' + expression + " =" + '\n' + '      ' + res + '\n\n');

        hist.scrollTop = hist.scrollHeight;
        

    } 
    catch (error) 
    {
        console.error(error);

        d.value = 'Error';
    }
}

function off()
{
    var o = document.getElementById("off");
    var i = document.querySelectorAll(".calculface")[0];
    var t = document.getElementById('display');

    o.addEventListener('click', () => {
        
        i.style.backgroundColor = "black";
        t.style. backgroundColor = "black"
     });

     
}

function on()
{
    var o = document.getElementById("on");
    var i = document.querySelectorAll(".calculface")[0];
    var t = document.getElementById('display');

    o.addEventListener('click', () => {
        
        i.style.backgroundColor = "white";
        t.style. backgroundColor = "white"
     });

     
}

function clearOne()
{
    var t = document.getElementById('display');
    var currentvalue = t.value;

    var newvalue = currentvalue.substring(0, currentvalue.length-1);

    t.value = newvalue;


}
