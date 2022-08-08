import AnimationElement from "../modules/AnimationElement";

export default {

    dots : (ctx : CanvasRenderingContext2D, element : AnimationElement) => {
        ctx.fillStyle = 'rgba(' + element.pixel.r + ',' + element.pixel.g + ',' + element.pixel.b + ',' + element.pixel.a + ')';
        ctx.fillRect(element.currentX, element.currentY, 1, 1);
    },

    lines : (ctx : CanvasRenderingContext2D, element : AnimationElement) => {

        if(!element.finished){

            let grad = ctx.createLinearGradient(50, 50, 150, 150);
            grad.addColorStop(0, "rgba(0,0,0,0)") ;
            grad.addColorStop(1, "rgba(" + element.pixel.r + "," + element.pixel.g + "," + element.pixel.b +"," + element.pixel.a + ")") ;

            ctx.strokeStyle = grad;

            ctx.beginPath();
            ctx.lineWidth = 0.3;

            let hvost = element.percent * 0.995;

            ctx.moveTo(element.currentX, element.currentY);
            ctx.lineTo(element.getXForPercent(hvost), element.getYForPercent(hvost));
            ctx.stroke();

        }else{
            ctx.fillStyle = 'rgba(' + element.pixel.r + ',' + element.pixel.g + ',' + element.pixel.b + ',' + element.pixel.a + ')';
            ctx.fillRect(element.currentX, element.currentY, 1, 1);
        }

    }
}