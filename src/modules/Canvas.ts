import Animation from "./Animation";

export default class Canvas{

	public el : HTMLCanvasElement;
	public ctx : CanvasRenderingContext2D;
	public w : number;
	public h : number;

	public constructor(el : HTMLCanvasElement){
		this.el = el;
		this.ctx = el.getContext('2d')!;
		this.w = el.width;
		this.h = el.height;
	}

	public setWidth(w : number){
		this.el.width = w;
		this.w = w;
	}

	public setHeight(h : number){
		this.el.height = h;
		this.h = h;
	}

	public clear(){
		this.ctx.clearRect(0, 0, this.w, this.h);
	}

	public drawAnimation(animation : Animation){

		animation.elements.forEach(element => {
			animation.drawFunction(this.ctx, element);
		});

	}

}





