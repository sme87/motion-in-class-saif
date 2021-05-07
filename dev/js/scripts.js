import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
gsap.registerPlugin(GSDevTools);


import{zoomTL} from "./zoomin"
import{fadeInTL} from "./fadein"
import{rocketTL} from "./rocket"
import{setoffTL} from "./setoff"
import{flightTL} from "./flightpath"
import{moonTL} from "./moonzoom"
import { landingTL } from "./landing"
import { moonboomTL } from "./moondie";


let mainTL = gsap.timeline();
    mainTL.add(fadeInTL)
          .add(zoomTL,"-=1.5")
          .add(rocketTL)
          .add(setoffTL)
          .add(flightTL,"warp")
          .add(moonTL,"warp")
          .add(landingTL)
          .add(moonboomTL);


//GSDevTools.create();