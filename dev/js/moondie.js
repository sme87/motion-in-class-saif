import { gsap } from "gsap";

export let moonboomTL = gsap.timeline();

moonboomTL.to(".flag",{duration:1.5,x:-60,y:30 ,scale:1.3})
          .to("#rocket",{y:"-=10", duration:1., ease: "bounce.out"})
          .to("#shade",{duration:3,alpha:0},"now")
          .to("#broke",{duration:7,rotation:"-=160", x:200,y:200},"now")
          .to("#rocket",{y:"+=1000", duration:7, rotation:"-=160"},"now")
          .to("#moonbody",{y:"+=10", duration:7, rotation:"-=10"},"now");