(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{74:function(e,t,n){"use strict";n.d(t,"a",(function(){return H}));var r=n(0),a=n.n(r),i=n(4),c=n(6),s=n(12),u=n.n(s),l=n(16),o=n.n(l),f=n(43),m=n.n(f),h=n(110),p=n(24),d=n(75),y=n(18),v=n.n(y),w=n(5),E=n.n(w),g=n(7),b=n.n(g),x=n(8),k=n.n(x),B=n(2),C=n.n(B),P=n(36),z=n.n(P),F=n(10),R=n.n(F),S=function(){function e(t,n){var r=this;E()(this,e),this.canBeAfter=function(e){if(null==e)return r.canBeFirst();switch(r.type){case"leftBracket":case"number":switch(e.type){case"rightBracket":case"number":return!1;default:return!0}case"multiply":case"divide":case"mod":case"pow":case"rightBracket":switch(e.type){case"rightBracket":case"number":return!0;default:return!1}case"plus":case"minus":switch(e.type){case"leftBracket":case"rightBracket":case"number":return!0;default:return!1}}},this.canBeFirst=function(){switch(r.type){case"plus":case"minus":case"leftBracket":case"number":return!0;case"multiply":case"divide":case"mod":case"pow":case"rightBracket":return!1}},this.canBeLast=function(){switch(r.type){case"rightBracket":case"number":return!0;default:return!1}},this.canBeUnary=function(){switch(r.type){case"minus":case"plus":return!0;default:return!1}},this.isNumber=function(){return"number"==r.type},this.leftPriority=function(){switch(r.type){case"plus":case"minus":return 2;case"multiply":case"divide":case"mod":return 4;case"pow":return 5;default:return 0}},this.rightPriority=function(){switch(r.type){case"plus":case"minus":return 1;case"multiply":case"divide":case"mod":return 3;case"pow":return 6;default:return 0}},this.type=t,this.value=n}return R()(e,[{key:"a",get:function(){return this.value}}],[{key:"parse",value:function(e){switch(e){case"+":return new this("plus",e);case"-":return new this("minus",e);case"*":return new this("multiply",e);case"/":return new this("divide",e);case"%":return new this("mod",e);case"^":return new this("pow",e);case"(":return new this("leftBracket",e);case")":return new this("rightBracket",e);default:if(isNaN(parseFloat(e)))throw new Error("Can't parse \""+e+'" as number token');return new this("number",e)}}}]),e}();function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=C()(e);if(t){var a=C()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return k()(this,n)}}var A=function(e){b()(n,e);var t=j(n);function n(e,r){var a;return E()(this,n),(a=t.call(this)).message=e,a.position=r,a}return n}(z()(Error)),O=function(e,t,n){switch(e.type){case"plus":return t+n;case"minus":return t-n;case"multiply":return t*n;case"divide":return t/n;case"mod":return t%n;case"pow":return Math.pow(t,n);case"leftBracket":case"rightBracket":case"number":throw Error(e.type+" is not operationToken")}},T=function(e){var t,n,r,a;try{var i=[],c=function(e){for(var t,n=[],r=null,a=[],i=0,c=!1,s=function(t,n){if(r){if(!t.canBeAfter(r))throw new A("Token "+t+" can't be after "+r.type,n)}else if(!t.canBeFirst())throw new A("Token "+t+" can't be first",n);if(n==e.length-1&&!t.canBeLast())throw new A("Token "+t+" can't be last",n)},u=function(e){var t,i=a.join("");"minus"==(null==(t=r)?void 0:t.type)&&c&&(i="-"+i,n.pop(),r=null,c=!1);var u=S.parse(i);if(!u)throw new A('Failed to initialize number token from "'+i+'"',e);s(u,e),n.push(u),r=u,a=[]},l=0;l<e.length;l++){var o=e[l];if(" "!=o)if(o.match(/\d/)||"."==o)a.push(o);else{a.length>0&&u(l);var f=S.parse(o);if(!f)throw new A('Unsupported symbol "'+o+'"',l);switch(f.type){case"minus":switch(null==(t=r)?void 0:t.type){case"leftBracket":case"pow":case null:case void 0:c=!0;break;default:c=!1}break;case"leftBracket":i+=1;break;case"rightBracket":i-=1}if(i<0)throw new A("Closed brackets more than opened",l);s(f,l),n.push(f),r=f}}if(a.length>0&&u(e.length-1),i>0)throw new A("Opened brackets more than closed",e.length-1);return n}(e),s=null,u=function(){if(null!==s){var e=new S("number",s.toString());i=[e].concat(v()(i)),s=null}for(;;){if(0==c.length)return;var t=c.shift();switch(t.type){case"number":return void(s=parseFloat(t.value));default:i=[t].concat(v()(i))}}};for(u();;){var l,o,f,m,h=i[0],p=c[0],d=(null!=(l=null==(o=h)?void 0:o.leftPriority())?l:0)-(null!=(f=null==p?void 0:p.rightPriority())?f:0);if(h&&d>0){var y=i.shift(),w=i.shift();switch(w.type){case"number":var E=parseFloat(w.value),g=O(y,E,null!=(t=s)?t:0);s=g,d=(null!=(n=null==(r=h=i[0])?void 0:r.leftPriority())?n:0)-(null!=(a=null==p?void 0:p.rightPriority())?a:0);break;default:throw new Error("Left operand "+w.type+" is not number")}}if(p&&"number"!==(null==p?void 0:p.type)&&d<0&&u(),"leftBracket"==(null==(m=h)?void 0:m.type)&&"rightBracket"==(null==p?void 0:p.type)&&(i.shift(),c.shift()),0==i.length&&0==c.length)break}return s}catch(b){return console.log(b),"Error"}},D=n(51),I=function(e){var t=e.text,n=e.icon,r=e.style,i=void 0===r?"number":r,c=e.columns,s=void 0===c?1:c,u=e.onPress,l=void 0===u?function(){}:u,o="action"==i?L.actionButton:L.numberButton;return a.a.createElement(D.a,{onPress:l},a.a.createElement(p.a,{style:[L.button,o,{width:100*s+10*(s-1)}]},n||t))},L=i.a.create({button:{display:"flex",height:100,width:100,alignItems:"center",justifyContent:"center",borderRadius:50,fontSize:30,margin:5},actionButton:{backgroundColor:"#285FF5",color:"white"},numberButton:{backgroundColor:"#D6E2FC"}}),M=["text","style"],N=["text","style"],V=["text","style"],J=function(e){var t=e.children;return a.a.createElement(c.a,{style:G.row},t)},U=["+","-","/","*"],q=function(){var e=Object(r.useState)("0"),t=m()(e,2),n=t[0],i=t[1],s=Object(r.useState)("0"),l=m()(s,2),f=l[0],y=l[1],v=function(){var e,t=f.split("=").map((function(e){return e.trimEnd()})),n=null!=(e=t[t.length-1])?e:"0";return y(n),n},w=function(e){return function(){var t=f.includes("=")?v():f;if(U.includes(e)){var n=t.trimEnd(),r=n[n.length-1];if(r==e)return;U.includes(r)&&(t=n.substring(0,n.length-1).trimEnd())}if("0"==t&&"-"==e)return i("-"),void y("-");""==t&&(t="0"),y(t+" "+e+" "),i("0")}},E=function(e){var t=e.text,n=e.style,r=void 0===n?"action":n,i=o()(e,M);return a.a.createElement(I,u()({text:t,style:r},i))},g=function(e){var t,r=e.text,c=e.style,s=void 0===c?"number":c,l=o()(e,N);return a.a.createElement(I,u()({text:r,style:s,onPress:(t=r,function(){var e=f.includes("=")?"0":n,r=f.includes("=")?"0":f;if("0"==e){if("."!=t)return i(t),void y((function(e){return"0"==r?t:e+t}));var a=r.trimEnd();a.length>0&&U.includes(String(a[a.length-1]))&&y((function(e){return e+"0"}))}e.includes(".")&&"."==t||(i((function(e){return e+t})),y((function(e){return e+t})))})},l))},b=function(e){var t=e.text,n=e.style,r=void 0===n?"action":n,i=o()(e,V);return a.a.createElement(I,u()({text:t,style:r,onPress:w(t)},i))};return a.a.createElement(c.a,null,a.a.createElement(c.a,{style:G.inputContainer},a.a.createElement(c.a,{style:G.inputView},a.a.createElement(d.a,{style:G.inputMain,value:n}),a.a.createElement(c.a,{style:G.separator}),a.a.createElement(p.a,{style:G.history},f)),a.a.createElement(E,{onPress:function(){if(f.includes("=")&&v(),n.length>1?i(n.substring(0,n.length-1)):i("0"),f.length>1){var e=f.trimEnd();y(e.substring(0,e.length-1).trimEnd())}else y("0")},icon:a.a.createElement(h.a,{name:"backspace",size:30})})),a.a.createElement(c.a,{style:G.buttonsContainer},a.a.createElement(J,null,a.a.createElement(E,{onPress:function(){i("0"),y("0")},icon:a.a.createElement(h.a,{name:"trash",size:30})}),a.a.createElement(g,{text:"(",style:"action"}),a.a.createElement(g,{text:")",style:"action"}),a.a.createElement(b,{text:"/",icon:a.a.createElement(h.a,{name:"divide",size:30})})),a.a.createElement(J,null,a.a.createElement(g,{text:"7"}),a.a.createElement(g,{text:"8"}),a.a.createElement(g,{text:"9"}),a.a.createElement(b,{text:"*",icon:a.a.createElement(h.a,{name:"times",size:30})})),a.a.createElement(J,null,a.a.createElement(g,{text:"4"}),a.a.createElement(g,{text:"5"}),a.a.createElement(g,{text:"6"}),a.a.createElement(b,{text:"-",icon:a.a.createElement(h.a,{name:"minus",size:30})})),a.a.createElement(J,null,a.a.createElement(g,{text:"1"}),a.a.createElement(g,{text:"2"}),a.a.createElement(g,{text:"3"}),a.a.createElement(b,{text:"+",icon:a.a.createElement(h.a,{name:"plus",size:30})})),a.a.createElement(J,null,a.a.createElement(g,{text:"0",columns:2}),a.a.createElement(g,{text:"."}),a.a.createElement(E,{text:"=",onPress:function(){if(!f.includes("=")){var e=f.trimEnd();e.length>0&&U.includes(e[e.length-1])&&y((function(e){return e+"0"}));var t=T(f);i(""+t),y((function(e){return e+" = "+t}))}},icon:a.a.createElement(h.a,{name:"equals",size:30})}))))},G=i.a.create({spacer:{flex:1},inputContainer:{display:"flex",flexDirection:"row",alignItems:"center",marginBottom:20,width:440},inputView:{flex:1,marginRight:20},inputMain:{fontSize:30,textAlign:"right"},history:{textAlign:"right",fontSize:20},separator:{height:1,backgroundColor:"#CCCCCC",marginVertical:5},buttonsContainer:{marginBottom:30},row:{flex:1,display:"flex",flexDirection:"row",justifyContent:"center"}});function H(){return a.a.createElement(c.a,{style:K.container},a.a.createElement(c.a,{style:K.spacer}),a.a.createElement(q,null))}var K=i.a.create({container:{flex:1,backgroundColor:"#fff",justifyContent:"center",alignItems:"center"},spacer:{flex:1}})},77:function(e,t,n){e.exports=n(105)}},[[77,1,2]]]);
//# sourceMappingURL=app.e28ab0ff.chunk.js.map