import { gsap } from "gsap";

let shapeTL = gsap.timeline();

shapeTL .from("#red-ball", { duration: 2.5, scaleX:.7,ease: "bounce.out", y: -500 })
        .to("#red-ball", { duration: 6, ease: "back.inOut(3)", x: -200 })
        .to("#red-ball", { duration: .3, scaleY:.5, x:-200, y:20})
        .to("#red-ball", { duration: .35, ease: "expo.out", scaleY:1, x:-100, y:-100})
        .to("#red-ball", { duration: .35, ease: "expo.in", x:0, y:0})
        .to("#red-ball", { duration: .3, ease: "expo.out", x:50, y:-40})
        .to("#red-ball", { duration: .3, ease: "expo.in",  x:130, y:0})
        .to("#red-ball", { duration: .2, ease: "expo.out",  x:150, y:-10})
        .to("#red-ball", { duration: .4, ease: "expo.in", x:200, y:0})
        .to("#red-ball", { duration: 3.5, ease: "slow(0.7, 0.7, false)", x: 750 })
        .to("#red-ball", { duration: .2, scaleX: .8,x: 760 })
        .to("#red-ball", { duration: .2, scaleX: .5,x: 780 })
        .to("#red-ball", { duration: 3.5, scaleX:1, ease: "elastic.out(1, 0.3)", x: -200 })
        .to("#red-ball", { duration: 2.5, ease: "slow(0.7, 0.7, false)", x: -170 })
        .to("#red-ball", { duration: .3, scaley: .2, y:30})
        .to("#red-ball", { duration: 1.8, scale:.4, ease: "expo.out", y: -500, x:300 })
        .to("#red-ball", { duration: 1.2, scaleX:1, scaleY:1 ,ease: "bounce.out",  y: 0, x:300});
        


   