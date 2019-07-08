import{h}from"../devjpnobrega.core.js";function Avatar(t){var e=t.context,i=t.x,r=t.y,n=t.width,o=t.height;e.fillStyle=t.color,e.fillRect(i,r,n,o)}function Text(t){var e=t.context,i=t.x,r=t.y,n=t.color,o=t.text;e.font=t.width+" "+t.height,e.fillStyle=n,e.fillText(o,i,r)}function roundRect(t,e,i,r,n,o,a,h){if(void 0===h&&(h=!0),void 0===o&&(o=5),"number"==typeof o)o={tl:o,tr:o,br:o,bl:o};else{var s={tl:0,tr:0,br:0,bl:0};for(var c in s)o[c]=o[c]||s[c]}t.beginPath(),t.moveTo(e+o.tl,i),t.lineTo(e+r-o.tr,i),t.quadraticCurveTo(e+r,i,e+r,i+o.tr),t.lineTo(e+r,i+n-o.br),t.quadraticCurveTo(e+r,i+n,e+r-o.br,i+n),t.lineTo(e+o.bl,i+n),t.quadraticCurveTo(e,i+n,e,i+n-o.bl),t.lineTo(e,i+o.tl),t.quadraticCurveTo(e,i,e+o.tl,i),t.closePath(),a&&t.fill(),h&&t.stroke()}var calculateY=function(t,e){return 0===t?e:t-10},calculateX=function(t,e){return t-e},calculateWidth=function(t,e){return t+e};function Tubes(t){var e=t.context,i=t.x,r=t.y,n=t.width,o=t.height;e.fillStyle=t.color,e.fillRect(i,r,n,o),e.fillRect(calculateX(i,6),calculateY(r,o),calculateWidth(n,13),10),roundRect(e,calculateX(i,6),calculateY(r,o),calculateWidth(n,13),10,5,{tl:50,br:50},!0),e.strokeRect(i,r,n,o)}var TypeComponent=Object.freeze({TUBES:Tubes,AVATAR:Avatar,TEXT:Text}),ComponentCanvas=function(){function t(t){var e=t.context,i=t.width,r=t.height,n=t.color,o=t.x,a=t.y,h=t.Type,s=void 0===h?TypeComponent.TUBES:h;this.text="",this.x=0,this.y=0,this.width=0,this.height=0,this.speedX=0,this.speedY=0,this.gravity=0,this.gravitySpeed=0,this.Type=s,this.width=i,this.height=r,this.x=o,this.y=a,this.context=e,this.color=n}return t.prototype.update=function(t){void 0===t&&(t=this.color),new this.Type({context:this.context,x:this.x,y:this.y,width:this.width,height:this.height,color:t,font:this.width+" "+this.height,text:this.text})},t.prototype.updatePositionX=function(t){this.x+=t},t.prototype.updateGravity=function(t){this.gravity=t},t.prototype.hitBottom=function(){var t=this.context.canvas.height-this.height;this.y>t&&(this.y=t,this.gravitySpeed=0)},t.prototype.newPos=function(){this.gravitySpeed+=this.gravity,this.x+=this.speedX,this.y+=this.speedY+this.gravitySpeed,this.hitBottom()},t.prototype.crashWith=function(t){var e=!0;return(this.y+this.height<t.y||this.y>t.y+t.height||this.x+this.width<t.x||this.x>t.x+t.width)&&(e=!1),e},t}(),GravityGameComponent=function(){function t(){this.width=500,this.height=500,this.piece=void 0,this.frameNo=0,this.obstacles=[]}return t.prototype.updateAreaHandler=function(t){console.timeStamp(""+t),this.update()},t.prototype.componentDidLoad=function(){this.onStartGame()},t.prototype.componentWillLoad=function(){},t.prototype.onStartGame=function(){var t=this;this.canvas=this.el.shadowRoot.querySelector("canvas"),this.canvas.width=this.width,this.canvas.height=this.height,this.context=this.canvas.getContext("2d"),this.createArea.emit({context:this.context}),this.interval=setInterval(function(){return t.updateArea.emit({score:t.frameNo})},20)},t.prototype.createInitalCanvasElements=function(){var t,e,i;t=this.canvas.width,e=Math.floor(181*Math.random()+20),i=Math.floor(151*Math.random()+50),this.obstacles.push(new ComponentCanvas({context:this.context,width:50,height:e,color:"green",x:t,y:0})),this.obstacles.push(new ComponentCanvas({context:this.context,width:50,height:t-e-i,color:"green",x:t,y:e+i}))},t.prototype.checkCrashWith=function(){for(var t=0;t<this.obstacles.length;t+=1)if(this.piece.crashWith(this.obstacles[t]))return this.obstacles[t].update("red"),clearInterval(this.interval),!0;return!1},t.prototype.clear=function(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height)},t.prototype.update=function(){if(this.piece){if(this.checkCrashWith())return this.updateArea.emit({crash:!0,score:this.frameNo});this.clear(),this.frameNo+=1,(1===this.frameNo||this.everyInterval(150))&&this.createInitalCanvasElements();for(var t=0;t<this.obstacles.length;t+=1)this.obstacles[t].updatePositionX(-1),this.obstacles[t].update();this.piece.newPos(),this.piece.update()}},t.prototype.everyInterval=function(t){return this.frameNo/t%1==0},t.prototype.render=function(){return h("div",{class:"base-area-game",id:"gameArea"},h("canvas",{id:"gravityCanvas"}))},Object.defineProperty(t,"is",{get:function(){return"gravity-area"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{el:{elementRef:!0},height:{type:Number,attr:"height"},piece:{type:"Any",attr:"piece"},width:{type:Number,attr:"width"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"updateArea",method:"updateArea",bubbles:!0,cancelable:!0,composed:!0},{name:"createArea",method:"createArea",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"updateArea",method:"updateAreaHandler"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"canvas{border:1px solid #d3d3d3;background-color:transparent}.gravity-score{font-family:Arial,Helvetica,sans-serif;font-size:20px;padding:5px;width:auto;border:1px solid #639;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}"},enumerable:!0,configurable:!0}),t}(),GravityGameComponent$1=function(){function t(){this.description="",this.title="",this.score="",this.isStartGame=!1}return t.prototype.componentDidLoad=function(){},t.prototype.updateAreaHandler=function(t){this.score=t.detail.score,this.updateScore(this.score)},t.prototype.createAreaHandler=function(t){this.createPiece(t.detail.context)},t.prototype.updateScore=function(t){this.htmlScore.innerText="SCORE: "+t},t.prototype.createPiece=function(t){this.piece=new ComponentCanvas({context:t,width:30,height:30,color:"red",x:10,y:120,Type:TypeComponent.AVATAR}),this.piece.updateGravity(.05)},t.prototype.onMouseDown=function(){this.piece.updateGravity(-.2)},t.prototype.onMouseUp=function(){this.piece.updateGravity(.05)},t.prototype.renderGravityArea=function(){var t=this;return this.isStartGame?h("div",{class:"base-area-game"},h("div",{ref:function(e){return t.htmlScore=e}}),h("gravity-area",{width:480,height:270,piece:this.piece})):h("div",null,"We are going")},t.prototype.render=function(){var t=this;return h("div",{class:"gravity-base"},this.renderGravityArea(),h("p",null,h("button",{type:"button",onClick:function(){return t.isStartGame=!0}},"START GAME"),h("button",{type:"button",onMouseDown:function(){return t.onMouseDown()},onMouseUp:function(){return t.onMouseUp()}},"ACT")))},Object.defineProperty(t,"is",{get:function(){return"gravity-game-component"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{description:{type:String,attr:"description"},isStartGame:{state:!0},score:{state:!0},title:{type:String,attr:"title"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"updateArea",method:"updateAreaHandler"},{name:"createArea",method:"createAreaHandler"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"canvas{border:1px solid #d3d3d3;background-color:transparent}.gravity-score{font-family:Arial,Helvetica,sans-serif;font-size:20px;padding:5px;width:auto;border:1px solid #639;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}"},enumerable:!0,configurable:!0}),t}();export{GravityGameComponent as GravityArea,GravityGameComponent$1 as GravityGameComponent};