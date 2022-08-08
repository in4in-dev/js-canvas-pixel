import DelayFunctions from "./examples/DelayFunctions";
import DrawFunctions from "./examples/DrawFunctions";
import TimeFunctions from "./examples/TimeFunctions";

import Animation from "./modules/Animation";
import Image from "./modules/Image";
import Canvas from "./modules/Canvas";
import AnimationElement from "./modules/AnimationElement";
import Pixel from "./modules/Pixel";

(<any>window).CanvasPixel = {
    Animation,
    AnimationElement,
    Pixel,
    Image,
    Canvas,
    examples : {
        DelayFunctions,
        DrawFunctions,
        TimeFunctions
    }
}
