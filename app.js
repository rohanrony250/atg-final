const dot1=document.getElementById('Dots');
const dot2=document.getElementById('Dots1');
const dot3=document.getElementById('Dots2');
const dot4=document.getElementById('Dots3');
const dot5=document.getElementById('Dots4');
const dot6=document.getElementById('Dots5');
const dot7=document.getElementById('Dots6');

const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const page4 = document.getElementById('page4');
const page5 = document.getElementById('page5');
const page6 = document.getElementById('page6');
const page7 = document.getElementById('page7');

const svg=document.getElementById('svg-circle');

const dotarray  = [dot1,dot2,dot3,dot4,dot5,dot6,dot7];


dot1.addEventListener("click", ()=>
{   
    svg.style.backgroundColor='#3d5af1';

    page1.style.display='block';
    page2.style.display='none';
    page3.style.display='none';
    page4.style.display='none';
    page5.style.display='none';
    page6.style.display='none';
    page7.style.display='none';
    
    
    for (var j= 6; j>0; j--)
    {
        dotarray[j].firstElementChild.firstElementChild.style.fill='rgb(255,255,255)';
        
    }
    
})

dot2.addEventListener("click", ()=>
{   
  svg.style.backgroundColor='#153e90';

  page1.style.display='none';
  page2.style.display='block';
  page3.style.display='none';
  page4.style.display='none';
  page5.style.display='none';
  page6.style.display='none';
  page7.style.display='none';
    
    for (var i= 0; i<=1; i++)
    {
        dotarray[i].firstElementChild.firstElementChild.style.fill='rgb(0, 146, 255)';
        
    }
    for (var j= 6; j>1; j--)
    {
        dotarray[j].firstElementChild.firstElementChild.style.fill='rgb(255,255,255)';
        
    }

    
    
})
dot3.addEventListener("click", ()=>
{   
    svg.style.backgroundColor = "#3e044d";
  page1.style.display='none';
  page2.style.display='none';
  page3.style.display='block';
  page4.style.display='none';
  page5.style.display='none';
  page6.style.display='none';
  page7.style.display='none';
    
    for (var i= 0; i<=2; i++)
    {
        
        dotarray[i].firstElementChild.firstElementChild.style.fill='rgb(0, 146, 255)';
      
    }
    for (var j= 6; j>2; j--)
    {
        dotarray[j].firstElementChild.firstElementChild.style.fill='rgb(255,255,255)';
        
    }
   
})
dot4.addEventListener("click", ()=>
{   
    svg.style.backgroundColor='#2e7447';

    svg.style.backgroundColor=
    page1.style.display='none';
    page2.style.display='none';
    page3.style.display='none';
    page4.style.display='block';
    page5.style.display='none';
    page6.style.display='none';
    page7.style.display='none';
 
    for (var i= 0; i<=3; i++)
    {
        
        dotarray[i].firstElementChild.firstElementChild.style.fill='rgb(0, 146, 255)';
    }
    for (var j= 6; j>3; j--)
    {
        dotarray[j].firstElementChild.firstElementChild.style.fill='rgb(255,255,255)';
        
    }
   
})
dot5.addEventListener("click", ()=>
{   

    svg.style.backgroundColor='#1f45fc';
    
    page1.style.display='none';
    page2.style.display='none';
    page3.style.display='none';
    page4.style.display='none';
    page5.style.display='block';
    page6.style.display='none';
    page7.style.display='none';
  
    for (var i= 0; i<=4; i++)
    {
        
        dotarray[i].firstElementChild.firstElementChild.style.fill='rgb(0, 146, 255)';
    }
    for (var j= 6; j>4; j--)
    {
        dotarray[j].firstElementChild.firstElementChild.style.fill='rgb(255,255,255)';
        
    }
    
})
dot6.addEventListener("click", ()=>
{   
    svg.style.backgroundColor = "#1a2639";
    page1.style.display='none';
  page2.style.display='none';
  page3.style.display='none';
  page4.style.display='none';
  page5.style.display='none';
  page6.style.display='block';
  page7.style.display='none';
    for (var i= 0; i<=5; i++)
    {
        
        dotarray[i].firstElementChild.firstElementChild.style.fill='rgb(0, 146, 255)';
    }
    for (var j= 6; j>5; j--)
    {
        dotarray[j].firstElementChild.firstElementChild.style.fill='rgb(255,255,255)';
        
    }
    
})
dot7.addEventListener("click", ()=>
{   
    svg.style.backgroundColor="#00003f"
    page1.style.display='none';
    page2.style.display='none';
    page3.style.display='none';
    page4.style.display='none';
    page5.style.display='none';
    page6.style.display='none';
    page7.style.display='block';

    for (var i= 0; i<=6; i++)
    {
        
        dotarray[i].firstElementChild.firstElementChild.style.fill='rgb(0, 146, 255)';
    }
    for (var j= 6; j>6; j--)
    {
        dotarray[j].firstElementChild.firstElementChild.style.fill='rgb(255,255,255)';
        
    }
})


