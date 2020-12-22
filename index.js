window.addEventListener("load", () =>
{
    const sounds= document.querySelectorAll(".sound");
    const pads= document.querySelectorAll(".pads div");
    const visual=document.querySelector('.visuals');
    const colors =[
        "#ffa07a",
        "#ffb6c1",
        "#d3d3d3",
        "#90ee90",
        "#fafad2",
        "#e0ffff"
    ];

    //we get the sounds here 
    pads.forEach(
        (pad,index)=>{
            pad.addEventListener("click",function(){
                sounds[index].currentTime=0;
                sounds[index].play();
               
                createBubbles(index);
            });
        });

    //function that makes the animations of the pads 
    const createBubbles = (index) => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor =colors[index];
        bubble.style.animation = 'jump 1s ease' ;
        bubble.addEventListener('animationend',function(){
          visuals.removeChild(this);
        });
    };
});

