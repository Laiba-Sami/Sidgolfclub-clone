var crsr = document.querySelector("#cursor")
var blurr = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+30+"px"
    crsr.style.top = dets.y+"px"
    blurr.style.left = dets.x - 150 + "px"
    blurr.style.top = dets.y - 150 + "px"
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.backgroundColor="transparent"
        crsr.style.border = "0.5px solid white"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.backgroundColor="#a1ce26"
        crsr.style.border = "0px solid #a1ce26"
    })
})

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      // markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });

  gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      // markers: true,
      start: "top -25%",
      end: "top -70%",
      scrub: 2,
    },
  });
  
gsap.from("#about-us img,#about-us-in",{
    y:80,
    opacity:0,
    duration:4,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 50%",
        scrub:3
    }
} )
gsap.from("#colon1",{
    y:-120,
    x:-120,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
} )

gsap.from("#colon2",{
    y:-80,
    x:-80,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        start: "top 55%",
        end: "top 45%",
        scrub:4
    }
} )
gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      // markers:true,
      start: "top 75%",
      end: "top 70%",
      scrub: 3,
    },
  });
// gsap.from("#cards-container .cards",{
//     y:80,
//     opacity:0,
//     duration:1,
//     stagger:0.4,
//     scrollTrigger:{
//         trigger:".cards",
//         scroller:"body",
//         start:"top 70%",
//         end:"top 60%",
//         scrub:2
//     }
// } )