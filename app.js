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
const svgring = document.getElementById('Opaque_Ring') 
const svg=document.getElementById('svg-circle');

const dotarray  = [dot1,dot2,dot3,dot4,dot5,dot6,dot7];

    gsap.from("#svg-main-title", {duration: 1, y:200, ease:"elastic.out(2,0.8)"})
    gsap.from("#svg-title", {duration: 1, y:-200, ease:"elastic.out(2,0.8)"})
    gsap.from("#svg-footer-title", {duration: 1, y:-50, skewY: 10, ease:"elastic.out(2,0.8)"})
    gsap.from("#img1", {duration: 1, y:"-100%"})
    gsap.from("#img2", {duration: 1, y:"100%"})
    gsap.from("#left-content-title", {duration: 1, y:30, ease:"power3.out"})
    gsap.from("#left-content-subtitle", {duration: 1, y:-30, ease:"power3.out"})

dot1.addEventListener("click", ()=>
{   
    svg.style.backgroundColor='#3d5af1';
    svgring.style.strokeDasharray="0,1000"
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

    // gsap.from('#svg-content', {duration: 1, y: "100%"})
    gsap.from("#svg-main-title", {duration: 1, y:200, ease:"elastic.out(2,0.8)"})
    gsap.from("#svg-title", {duration: 1, y:-200, ease:"elastic.out(2,0.8)"})
    gsap.from("#svg-footer-title", {duration: 1, y:-50, skewY: 10, ease:"elastic.out(2,0.8)"})
    gsap.from("#img1", {duration: 1, y:"-100%"})
    gsap.from("#img2", {duration: 1, y:"100%"})
    gsap.from("#left-content-title", {duration: 1, y:30, ease:"power3.out"})
    gsap.from("#left-content-subtitle", {duration: 1, y:-30, ease:"power3.out"})
    
})

dot2.addEventListener("click", ()=>
{   
  
    svg.style.backgroundColor='#153e90';
    svgring.style.strokeDasharray="130,1000"
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

        gsap.from("#svg-main-title", {duration: 1, y:-30, ease:"elastic.out(1,0.8)"})
        gsap.from("#svg-title", {duration: 1, y:30, ease:"power3.out"})
        gsap.from("#svg-footer-title", {duration: 1, y:-30, ease:"power3.out"})
        gsap.from("#right-section", {duration:0.85, y: "100%"})
        gsap.from("#left-content-title", {duration: 1, y:30, ease:"power3.out"})
        gsap.from("#left-content-subtitle", {duration: 1, y:-30, ease:"power3.out"})
    
})
dot3.addEventListener("click", ()=>
{   
    svg.style.backgroundColor = "#3e044d";
    svgring.style.strokeDasharray="280,1000"
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
        gsap.from("#page-three-firstpic", {duration: 1, y:"100%"})
        gsap.from("#page-three-secondpic", {duration: 1, y:"-100%"})
        gsap.from("#page-title", {duration: 1, y:30, ease:"power3.out"})
        gsap.from("#svg-footer-title", {duration: 1, y:-30, ease:"power3.out"})
        gsap.from("#left-content-title", {duration: 1, y:30, ease:"power3.out"})
        gsap.from("#left-content-subtitle", {duration: 1, y:-30, ease:"power3.out"})
})
dot4.addEventListener("click", ()=>
{   
    svg.style.backgroundColor='#2e7447';
    svgring.style.strokeDasharray="420,1000"
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

        gsap.from("#svg-main-title", {duration: 1, y:-30, ease:"elastic.out(1,0.8)"})
        gsap.from("#svg-title", {duration: 1, y:30, ease:"power3.out"})
        gsap.from("#svg-footer-title", {duration: 1, y:-30, ease:"power3.out"})
        gsap.from("#g-1", {
            opacity: 0, 
            y: 100, 
            duration: 1
          });
        gsap.from("#g-2", {
            opacity: 0, 
            y: 100, 
            duration: 1
          });
          gsap.from("#left-content-title", {duration: 1, y:30, ease:"power3.out"})
        gsap.from("#left-content-subtitle", {duration: 1, y:-30, ease:"power3.out"})
   
})
dot5.addEventListener("click", ()=>
{   

    svg.style.backgroundColor='#1f45fc';
    svgring.style.strokeDasharray="530,1000"
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
    
        gsap.from("#svg-main-title", {duration: 1, y:-30, ease:"elastic.out(1,0.8)"})
        gsap.from("#svg-title", {duration: 1, y:30, ease:"power3.out"})
        gsap.from("#svg-footer-title", {duration: 1, y:-30, ease:"power3.out"})
        gsap.from("#b-1", {
            opacity: 0, 
            y: 100, 
            duration: 0.25
          });
        gsap.from("#b-2", {
            opacity: 0, 
            y: 100, 
            duration: 0.25
          });
        gsap.from("#b-3", {
            opacity: 0, 
            x: 100, 
            duration: 0.25
          });
        gsap.from("#b-4", {
            opacity: 0, 
            y: 100, 
            duration: 0.25
          });
        gsap.from("#b-5", {
            opacity: 0, 
            y: 100, 
            duration: 0.25
          });
          gsap.from("#left-content-title", {duration: 1, y:30, ease:"power3.out"})
        gsap.from("#left-content-subtitle", {duration: 1, y:-30, ease:"power3.out"})

})
dot6.addEventListener("click", ()=>
{   
    svg.style.backgroundColor = "#1a2639";
    svgring.style.strokeDasharray="680,1000"
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

        gsap.from("#svg-main-title", {duration: 1, y:-30, ease:"elastic.out(1,0.8)"})
        gsap.from("#svg-title", {duration: 1, y:30, ease:"power3.out"})
        gsap.from("#svg-footer-title", {duration: 1, y:-30, ease:"power3.out"})
        gsap.from("#page-six-firstpic", {
            opacity: 0, 
            x: -100, 
            duration: 1
          });
          gsap.from("#page-six-secondpic", {
            opacity: 0, 
            y: -100, 
            duration: 1
          });
          gsap.from("#page-six-thirdpic", {
            opacity: 0, 
            y: 100, 
            duration: 1
          });
          gsap.from("#page-six-fourthpic", {
            opacity: 0, 
            y: 100,
         
            duration: 1
          });
          gsap.from("#page-six-fifthpic", {
            opacity: 0, 
            y: 100, 
            x:100,
            duration: 1
          });
          gsap.from("#left-content-title", {duration: 1, y:30, ease:"power3.out"})
        gsap.from("#left-content-subtitle", {duration: 1, y:-30, ease:"power3.out"})
        
})
dot7.addEventListener("click", ()=>
{   
    svg.style.backgroundColor="#00003f"
    svgring.style.strokeDasharray="820,1000"
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

        gsap.from("#svg-main-title", {duration: 1, y:-30, ease:"elastic.out(1,0.8)"})
        gsap.from("#svg-sub-title", {duration: 1, y:30, ease:"power3.out"})
        gsap.from("#svg-footer-title", {duration: 1, y:-30, ease:"power3.out"})
        gsap.from("#left-content-title", {duration: 1, y:30, ease:"power3.out"})
        gsap.from("#left-content-subtitle", {duration: 1, y:-30, ease:"power3.out"})
        gsap.from("#o1", {
            opacity: 0, 
            y: -100, 
            duration: 1
          });
        gsap.from("#o2", {
            opacity: 0, 
            y: 100, 
            duration: 1
          });
    
})




// scrollmagic



// var t1 = new TimelineMax();
// t1.from(
//     "section#page2",
//     1,
    
//     // {xPercent: 100},
//     {xPercent: 100, ease: Linear.easeNone,immediateRender: true}
// );

// tl.fromTo(
//     "section#page3",
//     1,
//     { yPercent: 100 },
//     { yPercent: 0, ease: Linear.easeNone },
//     "+=1",
    
//   );

//   var controller = new ScrollMagic.Controller();

//   new ScrollMagic.Scene({

//     triggerElement: "#main-section",
//     triggerHook: "onLeave",
//     duration: "100%"
// })

// .setPin("#main-section")
// .setTween(t1)
// .addIndicators({
//     colorTrigger: "green",
//     colorStart: "black",
//     colorEnd: "orange",
//     indent: 40
// })

// .addTo(controller);

document.addEventListener("DOMContentLoaded",()=>
{
    var controller = new ScrollMagic.Controller({
        globalSceneOptions:
        {
            triggerHook: "onLeave",
            duration: "100%"
        }
    });

    var sections = document.querySelectorAll("section.panel");
    for(var i=0; i<sections.length; i++)
    {
        new ScrollMagic.Scene({
            triggerElement: sections[i]
        })
        .setPin(sections[i], {pushFollowers: true})
        .addIndicators()
        .addTo(controller)
    }
});