//your JS code here. If required.
 const nxtBtn=document.querySelector('#next');
    const prevBtn = document.querySelector('#prev')

    const circles = document.querySelectorAll('.circle');

   let circleIndex = 0;
   const updateActiveCircle=()=>{
    circles.forEach((c,index)=>{
        c.classList.toggle('active',index === circleIndex);
    })
   }
nxtBtn.addEventListener('click',()=>{
    if(circleIndex < circles.length-1){
        circleIndex++;
        updateActiveCircle();
    }
})

prevBtn.addEventListener('click',()=>{
    if(circleIndex>0){
        circleIndex--;
        updateActiveCircle();
    }
})