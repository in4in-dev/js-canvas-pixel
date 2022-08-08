## Sandbox
https://codepen.io/in4in-dev/pen/LYdrmjP

## Example
```javascript
let canvas = new CanvasPixel.Canvas(
    document.getElementById('canvas')
);
canvas.setWidth(window.innerWidth);
canvas.setHeight(window.innerHeight);

let image = CanvasPixel.Image.read(
    document.querySelector('img')
);

let animation = new CanvasPixel.Animation(
    canvas, 
    image, 
    5000, 
    CanvasPixel.examples.TimeFunctions.ease, 
    CanvasPixel.examples.DrawFunctions.lines, 
    CanvasPixel.examples.DelayFunctions.random
);

animation.start();
```