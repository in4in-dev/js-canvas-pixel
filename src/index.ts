import DelayFunctions from "./examples/DelayFunctions";
import DrawFunctions from "./examples/DrawFunctions";
import TimeFunctions from "./examples/TimeFunctions";

import Animation from "./modules/Animation";
import Image from "./modules/Image";
import Canvas from "./modules/Canvas";

(<any>window).CanvasPixel = {
    Animation,
    Image,
    Canvas,
    examples : {
        DelayFunctions,
        DrawFunctions,
        TimeFunctions
    }
}
