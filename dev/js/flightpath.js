import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathPlugin, MotionPathHelper);

export let flightTL = gsap.timeline();

flightTL
.to("#rocket",{
duration:7,motionPath: {path: "#rocketpath",align:"#rocketpath",alignOrigin: [0.5, 0.5],autoRotate: 90},
ease: "none",scale:.6,});
