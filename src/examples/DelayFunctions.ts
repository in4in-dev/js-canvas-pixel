import random from "../modules/random";
import Pixel from "../modules/Pixel";
import Animation from "../modules/Animation";

export default {
    random : (time : number, pixel : Pixel) => {
        return random(time * 0.1, time);
    },
    stepByStep : (time : number, pixel : Pixel, animation : Animation) => {
        return (pixel.y / animation.image.h) * time;
    }
}