import { gsap } from "gsap";

gsap.set("#moonbody",{transformOrigin:"center"});

export let moonTL = gsap.timeline();
moonTL.fromTo("#moonbody",{alpha:0, scale:0.25},{alpha:1, duration:5, scale:8, y:"+=1200", x:"+=300",ease:"none"})