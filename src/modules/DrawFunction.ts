import AnimationElement from "./AnimationElement";

export default interface DrawFunction{
    (ctx : CanvasRenderingContext2D, element : AnimationElement) : void
}