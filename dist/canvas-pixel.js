(()=>{"use strict";function t(t,i){return Math.floor(t+Math.random()*(i+1-t))}const i={random:function(i,e){return t(.1*i,i)},stepByStep:function(t,i,e){return i.y/e.image.h*t}},e=function(){function i(i,e,n,r,s){var h=(i.w-e.w)/2,o=(i.h-e.h)/2,a=5e3;t(0,1)?(this.startX=t(0,1)?t(-5e3,0):t(i.w,i.w+a),this.startY=t(-5e3,i.h+a)):(this.startY=t(0,1)?t(-5e3,0):t(i.h,i.h+a),this.startX=t(-5e3,i.w+a)),this.currentX=this.startX,this.currentY=this.startY,this.finishX=n.x+h,this.finishY=n.y+o,this.pixel=n,this.canvas=i,this.finished=!1,this.time=r,this.startTime=Date.now(),this.timeFunction=s}return Object.defineProperty(i.prototype,"percent",{get:function(){var t=this.timeFunction(Date.now()-this.startTime,this.time);return Math.min(1,t)},enumerable:!1,configurable:!0}),i.prototype.getXForPercent=function(t){return this.startX-(this.startX-this.finishX)*t},i.prototype.getYForPercent=function(t){return this.startY-(this.startY-this.finishY)*t},i.prototype.tick=function(){if(this.finished)return!1;var t=this.percent;1===t?(this.finished=!0,this.currentX=this.finishX,this.currentY=this.finishY):(this.currentX=this.getXForPercent(t),this.currentY=this.getYForPercent(t))},i}(),n=function(){function t(t,i,n,r,s,h){var o=this;this.image=i,this.canvas=t,this.time=n,this.elements=i.pixels.map((function(s){return new e(t,i,s,h(n,s,o),r)})),this.drawFunction=s}return t.prototype.isFinished=function(){return this.elements.every((function(t){return t.finished}))},t.prototype.start=function(){var t=this,i=function(){t.elements.forEach((function(t){return t.tick()})),t.canvas.clear(),t.canvas.drawAnimation(t),t.isFinished()||requestAnimationFrame(i)};requestAnimationFrame(i)},t}(),r=function(){function t(t){this.el=t,this.ctx=t.getContext("2d"),this.w=t.width,this.h=t.height}return t.prototype.setWidth=function(t){this.el.width=t,this.w=t},t.prototype.setHeight=function(t){this.el.height=t,this.h=t},t.prototype.clear=function(){this.ctx.clearRect(0,0,this.w,this.h)},t.prototype.drawAnimation=function(t){var i=this;t.elements.forEach((function(e){t.drawFunction(i.ctx,e)}))},t}(),s=function(t,i,e,n,r,s){this.r=t,this.g=i,this.b=e,this.a=n,this.x=r,this.y=s},h=function(){function t(t,i){this.pixels=i,this.w=t.width,this.h=t.height}return t.read=function(i){var e=[],n=new r(document.createElement("canvas"));n.setWidth(i.width),n.setHeight(i.height),n.ctx.drawImage(i,0,0);for(var h=n.ctx.getImageData(0,0,n.w,n.h).data,o=0;o<h.length;o+=4){var a=h[o],c=h[o+1],u=h[o+2],f=h[o+3];if(f>0){var l=o%(4*n.w)/4,p=Math.floor(o/(4*n.w));e.push(new s(a,c,u,f/255,l,p))}}return new t(i,e)},t}();window.CanvasPixel={Animation:n,Image:h,Canvas:r,examples:{DelayFunctions:i,DrawFunctions:{dots:function(t,i){t.fillStyle="rgba("+i.pixel.r+","+i.pixel.g+","+i.pixel.b+","+i.pixel.a+")",t.fillRect(i.currentX,i.currentY,1,1)},lines:function(t,i){if(i.finished)t.fillStyle="rgba("+i.pixel.r+","+i.pixel.g+","+i.pixel.b+","+i.pixel.a+")",t.fillRect(i.currentX,i.currentY,1,1);else{var e=t.createLinearGradient(50,50,150,150);e.addColorStop(0,"rgba(0,0,0,0)"),e.addColorStop(1,"rgba("+i.pixel.r+","+i.pixel.g+","+i.pixel.b+","+i.pixel.a+")"),t.strokeStyle=e,t.beginPath(),t.lineWidth=.3;var n=.995*i.percent;t.moveTo(i.currentX,i.currentY),t.lineTo(i.getXForPercent(n),i.getYForPercent(n)),t.stroke()}}},TimeFunctions:{ease:function(t,i){return(t/=i/2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},linear:function(t,i){return t/i}}}}})();