import{h}from"../labelcomponent.core.js";var LabelComponent=function(){function e(){}return e.prototype.render=function(){return h("p",null,"Label vale: ",this.value)},Object.defineProperty(e,"is",{get:function(){return"label-component"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{value:{type:String,attr:"value"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return""},enumerable:!0,configurable:!0}),e}();export{LabelComponent};