(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3678)}])},3678:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var o=n(5893),r=n(7294),i=n(2212);function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){l(e,t,n[t])}))}return e}function d(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?a(e):t}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},m="\nuniform float time;\n\n".concat(i.WdD.common,"\n").concat(i.WdD.fog_pars_vertex,"\n\nvoid main() {\n    ").concat(i.WdD.begin_vertex,"\n    ").concat(i.WdD.project_vertex,"\n\n    float xPos = position.x;\n    float zPos = position.z;\n    float yPos = (sin((xPos + time) * 0.3) * 50.0) + (sin((zPos + time) * 0.5) * 50.0);\n   \n    vec4 modelViewPosition = modelViewMatrix * vec4(xPos, yPos, zPos, 1.0);\n    gl_Position = projectionMatrix * modelViewPosition;  \n    float size = (sin((xPos + time) * 0.3) + 1.0) * 2.0 + (sin((zPos + time) * 0.5) + 1.0) * 2.0;\n    gl_PointSize = size * (500.0 / length(modelViewPosition.xyz)); \n   \n    ").concat(i.WdD.fog_vertex,"\n}\n"),v="\nuniform vec3 color;\nuniform float time;\nuniform float elapsedTime;\n\n".concat(i.WdD.common,"\n").concat(i.WdD.fog_pars_fragment,"\n\nvec3 rainbow() {\n    vec4 outCol = mod(vec4(1, 2, 3, 0) - 3.0 * (elapsedTime / 5.0), 3.0);\n    outCol = min(outCol, 2.0 - outCol);\n    \n    return outCol.xyz;\n}\n\nvoid main() {\n    vec2 xy = gl_PointCoord.xy - vec2(0.5);\n    float radius = length(xy);\n    \n    //vec3 mixedColor = vec3(1, cos(elapsedTime), sin(elapsedTime));\n    vec3 mixedColor = rainbow();\n    gl_FragColor = vec4(mixedColor, step(radius, 0.5));\n    //gl_FragColor = vec4(color, step(radius, 0.5));\n    \n    ").concat(i.WdD.fog_fragment,"\n}\n");var w=function(e){function t(){var e;return c(this,t),l(a(e=d(this,u(t).apply(this,arguments))),"state",{scene:null,camera:null,renderer:null,count:0}),l(a(e),"calcCanvasSize",(function(){return{width:.95*window.innerWidth,height:.92*window.innerHeight}})),l(a(e),"calcAspectRatio",(function(){var t=e.calcCanvasSize();return t.width/t.height})),l(a(e),"windowResizedEvent",(function(){var t=e.state,n=t.camera,o=t.renderer,r=e.calcCanvasSize();n&&(n.aspect=r.width/r.height,n.updateProjectionMatrix()),o&&o.setSize(r.width,r.height)})),e}var n,r,p;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",this.windowResizedEvent);var t=this.calcAspectRatio();this.setState({scene:new i.xsS,camera:new i.cPb(120,t,1,1e4),renderer:new i.CP7({antialias:!0,alpha:!0,depth:!0,precision:"highp",failIfMajorPerformanceCaveat:!0})},(function(){var t=e,n=e.calcCanvasSize(),o=e.state,r=o.scene,a=o.camera,c=o.renderer,s=function(){for(var e=100,t=new i.jyz({transparent:!0,depthWrite:!1,lights:!0,fog:!0,uniforms:f({},i.rDY.merge([i.rBU.lights,i.rBU.fog]),{color:{value:new i.Ilk(86096)},time:{value:1},elapsedTime:{value:1}}),vertexShader:m,fragmentShader:v}),n=[],o=0;o<100;o++)for(var r=0;r<100;r++){var a=o*e-5e3,c=r*e-5e3;n.push(a,0,c)}var s=new i.u9r;return s.setAttribute("position",new i.a$l(n,3)),{points:new i.woe(s,t),shader:t}}(),l=s.points,u=s.shader;r.fog=new i.ybr(2369583,1,5e3),c.setSize(n.width,n.height),e.threeMount.appendChild(c.domElement),a.position.set(366,300,0),a.rotation.set(-1.57,1.08,1.57),a.lookAt(r.position),l.rotateY(.5),r.add(l);var d=new i.SUY,h=function(){requestAnimationFrame(h);var e=t.state.count;u.uniforms.time.value=e,u.uniforms.elapsedTime.value=d.getElapsedTime(),c.render(r,a),t.setState({count:e+.06})};h()}))}},{key:"render",value:function(){var e=this;return(0,o.jsxs)("div",{className:"w-full h-screen flex flex-col justify-center items-center",children:[(0,o.jsxs)("div",{className:"bg-transparent flex flex-col justify-center items-center relative z-10",style:{width:"95vw",height:"92vh"},children:[(0,o.jsx)("img",{src:"/images/logo.png",width:128,height:128}),(0,o.jsx)("h1",{className:"text-5xl text-gray-200",children:"Particle Studios"}),(0,o.jsx)("p",{className:"text-xl text-gray-500 text-center",children:"Our website is currently under construction!"}),(0,o.jsx)("p",{className:"text-gray-500 text-center",children:"Who are we? Simple, we're a development studio that does anything we want."})]}),(0,o.jsx)("div",{className:"bg-gray-1100 rounded-2xl absolute z-0 overflow-hidden",style:{width:"95vw",height:"92vh"},ref:function(t){return e.threeMount=t}})]})}}])&&s(n.prototype,r),p&&s(n,p),t}(r.Component)}},function(e){e.O(0,[737,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);