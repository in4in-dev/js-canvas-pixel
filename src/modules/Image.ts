import Canvas from "./Canvas";
import Pixel from "./Pixel";

export default class Image{

    public pixels : Pixel[];
    public w : number;
    public h : number;

    public constructor(
        img : HTMLImageElement,
        pixels : Pixel[]
    ){
        this.pixels = pixels;
        this.w = img.width;
        this.h = img.height;
    }

    public static read(img : HTMLImageElement) : Image
    {

        let result = [];

        let canvas = new Canvas(document.createElement('canvas'));
        canvas.setWidth(img.width);
        canvas.setHeight(img.height);
        canvas.ctx.drawImage(img, 0, 0);

        let pixs = canvas.ctx.getImageData(0, 0, canvas.w, canvas.h).data;

        for (let i = 0; i < pixs.length; i += 4) {

            let r = pixs[i],
                g = pixs[i + 1],
                b = pixs[i + 2],
                a = pixs[i + 3];

            if (a > 0) {
                let x = (i % (4 * canvas.w)) / 4;
                let y = Math.floor(i / (4 * canvas.w));

                result.push( new Pixel(r, g, b, a / 255, x, y) )

            }
        }

        return new Image(img, result);

    }

}
