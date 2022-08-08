export default class Pixel{

    public r : number;
    public g : number;
    public b : number;

    public a : number;

    public x : number;
    public y : number;

    public constructor(
        r : number,
        g : number,
        b : number,
        a : number,
        x : number,
        y : number
    ){
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
        this.x = x;
        this.y = y;
    }

}