import { gsap } from "gsap";
export let zoomTL = gsap.timeline({pause:true});

gsap.set("#mount4", {transformOrigin:"center"});
gsap.set("#mount3", {transformOrigin:"center"});
gsap.set("#mount2", {transformOrigin:"center"});
gsap.set("#mount1", {transformOrigin:"center"});
gsap.set("#river", {transformOrigin:"center"});
gsap.set("#alltrees", {transformOrigin:"center"});
gsap.set("#stars",{alpha:0});

zoomTL.from("#mount4",{scale:25, duration:5, ease:"power4.out", y:"+=3000px"},"zoom")
       .from("#mount3",{scale:25, duration:5, ease:"power4.out",y:"+=2500px"},"zoom")
       .from("#mount2",{scale:20, duration:4.5, ease:"power4.out",y:"+=6000px"},"zoom")
       .from("#mount1",{scale:20, duration:4.5,ease:"power4.out", y:"+=9000px"},"zoom")
       .from("#river",{scale:20, duration:4.5,ease:"power4.out", y:"+=9000px"},"zoom")
       .from("#alltrees",{scale:10, duration:4,ease:"power4.out", y:"+=9000px"},"zoom");