import Canvas from "./Canvas";
import Image from "./Image";
import Pixel from "./Pixel";
import TimeFunction from "./TimeFunction";
import random from "./random";

export default class AnimationElement{

    public startX : number;
    public startY : number;

    public currentX : number;
    public currentY : number;

    public finishX : number;
    public finishY : number;

    public pixel : Pixel;
    public canvas : Canvas;
    public finished : boolean;
    public time : number;
    public startTime : number;
    public timeFunction : TimeFunction;

    public constructor(
        canvas : Canvas,
        image : Image,
        pixel : Pixel,
        time : number,
        timeFunction : TimeFunction
    ){

        let offsetX = (canvas.w - image.w) / 2;
        let offsetY = (canvas.h - image.h) / 2;

        let border = 5000;

        if(random(0, 1)){
            this.startX = random(0, 1) ? random(-border, 0) : random(canvas.w, canvas.w + border);
            this.startY = random(-border, canvas.h + border);
        }else{
            this.startY = random(0, 1) ? random(-border, 0) : random(canvas.h, canvas.h + border);
            this.startX = random(-border, canvas.w + border);
        }

        this.currentX = this.startX;
        this.currentY = this.startY;

        this.finishX = pixel.x + offsetX;
        this.finishY = pixel.y + offsetY;

        this.pixel = pixel;
        this.canvas = canvas;
        this.finished = false;

        this.time = time;
        this.startTime = Date.now();

        this.timeFunction = timeFunction;
    }



    public get percent() : number
    {
        let real = this.timeFunction(Date.now() - this.startTime, this.time);
        return Math.min(1, real);
    }

    public getXForPercent(percent : number) : number
    {
        return this.startX - (this.startX - this.finishX) * percent;
    }

    public getYForPercent(percent : number) : number
    {
        return this.startY - (this.startY - this.finishY) * percent;
    }

    public tick(){

        if(this.finished){
            return false;
        }

        let percent = this.percent;

        if(percent === 1){
            this.finished = true;
            this.currentX = this.finishX;
            this.currentY = this.finishY;
        }else{
            this.currentX = this.getXForPercent(percent);
            this.currentY = this.getYForPercent(percent);
        }

    }

}
