import Pixel from "./Pixel";
import Animation from "./Animation";

export default interface DelayFunction{
    (duration : number, pixel : Pixel, animation : Animation) : number
}