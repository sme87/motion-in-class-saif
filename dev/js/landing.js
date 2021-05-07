import { gsap } from "gsap";
import {flameTL} from "./setoff"

export let landingTL = gsap.timeline();
landingTL.to("#rocket",{duration:2.5, x:"-=100", y:"+=200", rotation:"+=100", scale:.8},"keep")
            .to("#fire1",{duration:1, scaleY:0, onStart:stopFlame},"keep")
            .to("#fire2",{duration:1, scaleY:0},"keep")
            .to("#fire3",{duration:1, scaleY:0},"keep")


function stopFlame(){
    console.log("stop");
    flameTL.kill();
}