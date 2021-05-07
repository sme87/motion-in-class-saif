import { gsap } from "gsap";
export let rocketTL = gsap.timeline();


gsap.set("#rwing",{transformOrigin: "center top"});
gsap.set("#lwing",{transformOrigin: "center top"});
gsap.set("#lwing",{rotation:45});
gsap.set("#rwing",{rotation:-45});
gsap.set("#base",{y:-15});
gsap.set("#fireb",{display:"none"});



rocketTL.from("#rocket",{y:"+=1500", duration:2.5})
.to("#lwing",{rotation:0, duration:1},"wings")
.to("#rwing",{rotation:0, duration:1},"wings")
.to("#base",{y:0, duration:1},"wings")
.to("#rocket",{y:"+=225", duration:1.75, ease: "bounce.out"});