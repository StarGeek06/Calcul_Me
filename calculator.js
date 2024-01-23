

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
    try 
    {
        let res = eval(document.getElementById('display').value);

        document.getElementById('display').value = res;
        
        
    } 
    catch (error) 
    {
        document.getElementById('display').value = 'Error';
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

