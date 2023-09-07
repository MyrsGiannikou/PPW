var menuBtn, menuItems;

function displayMenu()
{
    try
    {
        if (menuItems.style.display === 'block')
        {
            menuItems.style.display = 'none';
        }
        else
        {
            menuItems.style.display = 'block';
        }
    }
    catch(e)
    {
        alert("errore in displayMneu " + e);
    }
        
}
function gestoreLoad()
{
    try
    {
        menuBtn = document.getElementById('menuBtn');
        menuItems = document.getElementById('menuItems');
        menuBtn.onclick = displayMenu;
    }
    catch(e)
    {
        alert("errore in gestore Load" + e);
    }
}
window.onload = gestoreLoad; 
