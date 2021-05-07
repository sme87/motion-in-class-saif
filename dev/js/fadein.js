import { gsap } from "gsap";

export let fadeInTL = gsap.timeline();
fadeInTL.from("#atmo-day",{scale:25, duration:2, alpha:0})
.from("#clouds",{alpha:0, stagger:.25, duration:.5},"-=2");