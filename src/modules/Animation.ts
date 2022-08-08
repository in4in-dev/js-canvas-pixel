import Canvas from "./Canvas";
import Image from "./Image";
import AnimationElement from "./AnimationElement";
import DelayFunction from "./DelayFunction";
import DrawFunction from "./DrawFunction";
import TimeFunction from "./TimeFunction";

export default class Animation{

    public image : Image;
    public canvas : Canvas;

    public time : number;
    public elements : AnimationElement[];
    public drawFunction : DrawFunction;

    public constructor(
        canvas : Canvas,
        image : Image,
        time : number,
        timeFunction : TimeFunction,
        drawFunction : DrawFunction,
        delayFunction : DelayFunction
    ){

        this.image = image;
        this.canvas = canvas;

        this.time = time;

        this.elements = image.pixels.map(pixel => {
            return new AnimationElement(
                canvas,
                image,
                pixel,
                delayFunction(time, pixel, this),
                timeFunction
            );
        });

        this.drawFunction = drawFunction;

    }

    public isFinished() : boolean
    {
        return this.elements.every(element => element.finished);
    }

    public start(){

        let animation = () => {

            this.elements.forEach(element => element.tick());

            this.canvas.clear();
            this.canvas.drawAnimation(this);

            if(!this.isFinished()){
                requestAnimationFrame(animation);
            }

        }

        requestAnimationFrame(animation);

    }

}