import { gsap } from "gsap";

gsap.set("#rocket",{transformOrigin:"center"});
gsap.set("#smoke",{transformOrigin:"center bottom"});



export let setoffTL = gsap.timeline();

setoffTL.to("#rocket",{duration:0.1, rotation:-5,yoyo:true, repeat:6,ease:"none"})
        .to("#rocket",{duration:0.1, rotation:5, yoyo:true, repeat:6,ease:"none"})
        .to("#rocket",{duration:0.1, rotation:0,ease:"none",onComplete:controlFlame})
        .to("#smoke",{duration:2.5, y:"-=380", scale:1, alpha:.8},"go")
        .to("#rocket",{duration:6, y:"-=220", scale:.6, ease: "power3.in"},"go")
        .to("#clouds",{duration:7.5, y:"+=800", ease: "power3.in"},"go")
        .to("#alltrees",{duration:5, y:"+=700", ease: "power3.in"},"go")
        .to("#mountains",{duration:5, y:"+=550", ease: "power3.in"},"go")
        .to("#smoke",{duration:3, y:"+=380", scale:.25, alpha:0},"-=4.75")
        .to("#smoke",{duration:4, alpha:0},"-=4.5")
        .to("#atmo-day",{duration:2.5,alpha:0, ease: "power3.in"})
        .to("#stars",{duration:3.5, alpha:0.8});


export let flameTL = gsap.timeline({paused:true});

flameTL.to("#fire1",{duration:0.5, scaleY:.5,yoyo:true, repeat:-1,alpha:1},"fx")
.to("#fire2",{duration:0.5, scaleY:.25,yoyo:true, repeat:-1,alpha:1},"fx")
.to("#fire3",{duration:0.15, scaleY:.15,yoyo:true, repeat:-1,alpha:1},"fx")

function controlFlame(){
    gsap.set("#fireb",{display:"block"});
    flameTL.play()
}
