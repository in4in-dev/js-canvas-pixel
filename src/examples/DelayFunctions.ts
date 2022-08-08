import random from "../modules/random";
import Pixel from "../modules/Pixel";
import Animation from "../modules/Animation";

export default {
    random : (time : number, pixel : Pixel) => {
        return random(time * 0.1, time);
    },
    fromTop : (time : number, pixel : Pixel, animation : Animation) => {
        return (pixel.y / animation.image.h) * time;
    },
    fromCenterX : (time : number, pixel : Pixel, animation : Animation) => {

        let w = animation.image.w / 2;

        if(pixel.x > w){
            return (pixel.x - w) / w;
        }else{
            return (w - pixel.x) / w;
        }

    }
}