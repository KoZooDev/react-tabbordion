!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types")):"function"==typeof define&&define.amd?define(["react","prop-types"],t):"object"==typeof exports?exports.ReactTabbordion=t(require("react"),require("prop-types")):e.ReactTabbordion=t(e.React,e.PropTypes)}("undefined"!=typeof self?self:this,function(e,t){return function(e){function t(o){if(n[o])return n[o].exports
var i=n[o]={i:o,l:!1,exports:{}}
return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={}
return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e}
return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/build/",t(t.s=5)}([function(e,t,n){"use strict"
function o(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"--",i=e&&e[t]||null
if(null==i)return null
"string"!=typeof i&&(i=String(i))
var r="",a=i.indexOf(" ")
a>=0&&(r=i.slice(a),i=i.slice(0,a))
var l=" "+i+o
if(r&&o){var s=" "+o
for(a=r.indexOf(s);a>=0;a=r.indexOf(s,a+i.length))r=r.replace(s,l)}return Array.isArray(n)?n.reduce(function(e,t){return null!=t?e+l+t:e},i)+r:i+r}Object.defineProperty(t,"__esModule",{value:!0}),t.bemClassName=o},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict"
function o(e){return function(t){e.includes(t)||e.push(t)}}function i(e){return function(t){var n=e.indexOf(t)
~n&&e.splice(n,1)}}Object.defineProperty(t,"__esModule",{value:!0}),t.addSubscriber=o,t.removeSubscriber=i},function(e,t,n){"use strict"
function o(e){return Array.isArray(e)&&e.length>0?e:d}function i(e){return e.checked}function r(e){return e.disabled}function a(e){return e.index}function l(e,t){if(e===t)return!1
if(null==e||null==t)return null!=e||null!=t
if("object"!==(void 0===e?"undefined":c(e))||"object"!==(void 0===t?"undefined":c(t)))return!0
var n=Object.keys(e||{}).sort(),o=Object.keys(t||{}).sort()
return n.length!==o.length||n.some(function(n,i){return n!==o[i]||(Array.isArray(e[n])?s(e[n],t[n]):e[n]!==t[n])})}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
return e.length!==t.length||e.some(function(e,n){return l(e,t[n])})}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
Object.defineProperty(t,"__esModule",{value:!0})
var c="function"==typeof Symbol&&"symbol"===u(Symbol.iterator)?function(e){return void 0===e?"undefined":u(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":u(e)}
t.getArray=o,t.getChecked=i,t.getDisabled=r,t.getIndex=a,t.isShallowlyDifferent=l,t.isShallowlyDifferentArray=s
var d=[]},function(e,t,n){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.TabContent=t.TabLabel=t.TabPanel=t.Tabbordion=t.bemClassName=void 0
var i=n(0)
Object.defineProperty(t,"bemClassName",{enumerable:!0,get:function(){return i.bemClassName}})
var r=n(6),a=o(r),l=n(7),s=o(l),u=n(8),c=o(u),d=n(9),f=o(d)
t.Tabbordion=a.default,t.TabPanel=s.default,t.TabLabel=c.default,t.TabContent=f.default},function(e,t,n){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n={}
for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])
return n}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==(void 0===t?"undefined":c(t))&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":c(t)))
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){return{bemModifiers:e.bemModifiers,bemSeparator:e.bemSeparator,blockElements:e.blockElements}}function u(e,t,n){var o=(0,v.getArray)(n.stateful?n.panels:t.panels)
return{animateContent:t.animateContent,checkedPanels:o.filter(v.getChecked).map(v.getIndex),disabledPanels:o.filter(v.getDisabled).map(v.getIndex),firstVisiblePanel:e.firstVisibleIndex,lastVisiblePanel:e.lastVisibleIndex,panelName:t.name||e.uniqId,panelType:"multiple"===t.mode?"checkbox":"radio",tabbordionId:t.id||e.uniqId}}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
Object.defineProperty(t,"__esModule",{value:!0})
var d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),b=n(1),p=o(b),h=n(2),m=o(h),y=n(3),v=n(4),g=0,P=0,x=function(e){function t(e){r(this,t)
var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
return g++,n.uniqId="tabbordion-"+P,P++,n.getNextState=n.getNextState.bind(n),n.onChange=n.onChange.bind(n),n.firstVisibleIndex=null,n.lastVisibleIndex=null,n.state=n.getNextState(e,{stateful:!1},Array.isArray(e.panels)?e.panels:e.initialPanels),n.subscribers={bem:[],tabbordion:[]},n.childContext={bem:{getState:function(){return n.bemState},subscribe:(0,y.addSubscriber)(n.subscribers.bem),unsubscribe:(0,y.removeSubscriber)(n.subscribers.bem)},tabbordion:{getState:function(){return n.tabbordionState},onChangePanel:n.onChange,subscribe:(0,y.addSubscriber)(n.subscribers.tabbordion),unsubscribe:(0,y.removeSubscriber)(n.subscribers.tabbordion)}},n.bemState=s(e),n.tabbordionState=u(n,e,n.state),n}return l(t,e),f(t,[{key:"componentWillReceiveProps",value:function(e){var t=this.getNextState(e,this.state)
t!==this.state&&this.setState(t)
var n=s(e);(0,v.isShallowlyDifferent)(n,this.bemState)&&(this.subscribers.bem.forEach(function(e){return e.forceUpdate()}),this.bemState=n)
var o=u(this,e,t);(0,v.isShallowlyDifferent)(o,this.tabbordionState)&&(this.subscribers.tabbordion.forEach(function(e){return e.forceUpdate()}),this.tabbordionState=o)}},{key:"componentWillUnmount",value:function(){0===--g&&(P=0)}},{key:"getChildContext",value:function(){return this.childContext}},{key:"getNextState",value:function(e,t,n){var o=(0,v.getArray)(t.stateful?t.panels:n||e.panels),i=[],r=[],a=[],l="multiple"===e.mode
b.Children.forEach(e.children,function(e){if(e&&e.type&&e.type.contextTypes&&e.type.contextTypes.tabbordion){var t=e.props||e._store&&e._store.props||{},n=null!=t.index&&t.index,o=!1===n||r.includes(n)
o?a.push(i.length):r.push(n),i.push({checked:t.checked,disabled:t.disabled,index:!o&&n,visible:t.visible})}})
for(var s=0;a.length>0;){for(;r.includes(s);)s++
i[a.shift()].index=s,s++}var u=0,c=null,d=null,f=i.map(function(e,t){var n=o.find(function(t){return t.index===e.index})||{checked:i,disabled:r,visible:a},i=(null!=e.checked?e.checked:!!n.checked)&&(l||0===u),r=null!=e.disabled?e.disabled:!!n.disabled,a=null!=e.visible?e.visible:!1!==n.visible
return a&&(d=t,null==c&&(c=d)),i&&a&&u++,{checked:i,disabled:r,index:e.index,visible:a}})
null!=c&&(0===u&&"multiple"!==e.mode&&"toggle"!==e.mode&&(f[c].checked=!0),c=f[c].index,d=f[d].index),this.firstVisibleIndex=c,this.lastVisibleIndex=d
var p=!e.onChange||!e.onPanels||!Array.isArray(e.panels)
if(p){if(!t.stateful||(0,v.isShallowlyDifferentArray)(t.panels,f))return e.onPanels&&e.onPanels(f),{panels:f,stateful:p}}else if((0,v.isShallowlyDifferentArray)(o,f)&&e.onPanels(f),t.stateful)return{panels:null,stateful:p}
return t}},{key:"onChange",value:function(e){var t=this.props.mode
if(!this.state.stateful)return void this.props.onChange({index:e,mode:t})
var n=this.state.panels.find(function(t){return t.index===e})
if(null==n)throw new Error("Unexpected invalid panel index: "+e)
var o=!1
switch(t){case"toggle":this.state.panels.forEach(function(e){e!==n&&e.checked&&(e.checked=!1)}),n.checked=!n.checked,o=!0
break
case"multiple":n.checked=!n.checked,o=!0
break
default:this.state.panels.forEach(function(e){e!==n&&e.checked&&(e.checked=!1,o=!0)}),n.checked||(n.checked=!0,o=!0)}o&&this.setState({panels:this.state.panels.slice(0)})}},{key:"render",value:function(){var e=this.props,t=(e.animateContent,e.children),n=e.component,o=(e.bemModifiers,e.bemSeparator,e.blockElements,e.component,e.initialPanels,e.mode,e.name,e.onChange,e.onPanels,e.panels),r=i(e,["animateContent","children","component","bemModifiers","bemSeparator","blockElements","component","initialPanels","mode","name","onChange","onPanels","panels"]),a=0,l=this.state.stateful?this.state.panels:o
return p.default.createElement(n,d({},r,{role:"tablist"}),b.Children.map(t,function(e){if(e&&e.type&&e.type.contextTypes&&e.type.contextTypes.tabbordion){var t=p.default.cloneElement(e,l[a])
return a++,t}return e}))}}]),t}(b.PureComponent)
x.childContextTypes={bem:m.default.object,tabbordion:m.default.object},x.defaultProps={animateContent:!1,bemModifiers:{animated:"animated",between:"between",checked:"checked",content:"content",disabled:"disabled",enabled:"enabled",first:"first",hidden:"hidden",last:"last",noContent:"no-content",unchecked:"unchecked"},bemSeparator:"--",blockElements:{animator:"panel__animator",content:"panel__content",label:"panel__label",panel:"panel"},component:"ul",mode:"single"}
var k=m.default.arrayOf(m.default.shape({checked:m.default.bool,disabled:m.default.bool,index:m.default.number,visible:m.default.bool}))
x.propTypes={animateContent:m.default.oneOf([!1,"height","marginTop"]),bemModifiers:m.default.shape({between:m.default.string,checked:m.default.string,content:m.default.string,disabled:m.default.string,enabled:m.default.string,first:m.default.string,hidden:m.default.string,last:m.default.string,noContent:m.default.string,unchecked:m.default.string}),bemSeparator:m.default.string,blockElements:m.default.shape({content:m.default.string,label:m.default.string,panel:m.default.string}),children:m.default.node,className:m.default.string,component:m.default.oneOfType([m.default.func,m.default.object,m.default.string]),id:m.default.string,initialPanels:k,mode:m.default.oneOf(["single","toggle","multiple"]),name:m.default.string,onChange:m.default.func,onPanels:m.default.func,panels:k},t.default=x},function(e,t,n){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==(void 0===t?"undefined":c(t))&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":c(t)))
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t]
return n}return Array.from(e)}function s(e,t){var n={}
for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])
return n}function u(e,t,n){var o=t.bem,i=t.tabbordion,r=e.checked,a=e.disabled,u=e.id,c=e.index,d=e.modifiers,p=e.name,h=e.type,m=e.value,y=e.visible,v=s(e,["checked","disabled","id","index","modifiers","name","type","value","visible"]),P=i.getState(),x=P.animateContent,k=P.checkedPanels,S=P.disabledPanels,C=P.firstVisiblePanel,O=P.lastVisiblePanel,_=P.panelName,j=P.panelType,w=P.tabbordionId,T=(0,g.getArray)(k),E=(0,g.getArray)(S),R=(null!=p?p:_)||w||"tabbordion-panel-"+n,I=u||(w||R)+"-"+c,N=null!=r?r:T.includes(c),M=null!=a?a:E.includes(c),A=!1===y?"hidden":C===c&&"first"||O===c&&"last"||"between",z=null,D=null
b.Children.forEach(v.children,function(e){!z&&e&&e.type&&e.type.hasContent&&(D=!0,z=(e.props||e._store&&e._store.props||{}).id||null)}),z||(z=I+"-content")
var L=o.getState(),q=L.bemModifiers,V=L.bemSeparator,U=L.blockElements
return f({},v,{animateContent:x,bemModifiers:q,bemSeparator:V,blockElements:U,checked:N,disabled:M,contentId:z,hasContent:D,id:I,index:c,name:R,type:null!=h?h:j,value:null!=m?m:String(c),visible:A,checkedPanels:T,disabledPanels:E,modifiers:q?(0,g.getArray)(d).concat([q[N?"checked":"unchecked"],q[D?"content":"noContent"],q[M?"disabled":"enabled"],q[A]].concat(l(C===O&&c===C?[q.last]:[]))).concat(x?[q.animated,x]:[]):(0,g.getArray)(d),onChangePanel:i.onChangePanel})}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
Object.defineProperty(t,"__esModule",{value:!0})
var d=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},b=n(1),p=o(b),h=n(2),m=o(h),y=n(3),v=n(0),g=n(4),P="undefined"!=typeof window&&"requestAnimationFrame"in window?window.requestAnimationFrame:setTimeout,x=0,k=0,S=function(e){function t(e,n){i(this,t)
var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n))
return x++,o.uniqId=""+k,k++,o.cachedProps=u(e,n,o.uniqId),o.getInputRef=o.getInputRef.bind(o),o.onChange=o.onChange.bind(o),o.onClickLabel=o.onClickLabel.bind(o),o.subscribers=[],o.childContext={tabbordionPanel:{getState:function(){return{animateContent:o.cachedProps.animateContent,checked:o.cachedProps.checked,contentId:o.cachedProps.contentId,disabled:o.cachedProps.disabled,inputId:o.cachedProps.id,index:o.cachedProps.index,modifiers:o.cachedProps.modifiers,visible:o.cachedProps.visible}},onClickLabel:o.onClickLabel,subscribe:(0,y.addSubscriber)(o.subscribers),unsubscribe:(0,y.removeSubscriber)(o.subscribers)}},o.panelState=o.childContext.tabbordionPanel.getState(),o}return a(t,e),d(t,[{key:"componentDidMount",value:function(){this.context.bem.subscribe(this),this.context.tabbordion.subscribe(this)}},{key:"componentWillReceiveProps",value:function(e,t){this.cachedProps=u(e,t,this.uniqId)
var n=this.childContext.tabbordionPanel.getState();(0,g.isShallowlyDifferent)(n,this.panelState)&&(this.subscribers.forEach(function(e){return e.forceUpdate()}),this.panelState=n)}},{key:"componentWillUnmount",value:function(){this.context.bem.unsubscribe(this),this.context.tabbordion.unsubscribe(this),delete this.cachedProps,0===--x&&(k=0)}},{key:"getChildContext",value:function(){return this.childContext}},{key:"getInputRef",value:function(e){this.input=e}},{key:"onChange",value:function(e){if(!e.defaultPrevented){var t=this.cachedProps,n=t.index,o=t.onChangePanel
o&&o(n)}}},{key:"onClickLabel",value:function(){var e=this,t=this.cachedProps,n=t.index,o=t.onChangePanel,i=t.type
o&&o(n),P(function(){e.input&&(e.input.checked||"checkbox"===i)&&document.activeElement!==e.input&&e.input.focus()})}},{key:"render",value:function(){var e=this.cachedProps,t=(e.animateContent,e.bemModifiers,e.bemSeparator),n=e.blockElements,o=e.checked,i=(e.checkedPanels,e.children),r=e.className,a=e.component,l=e.contentId,u=e.disabled,c=(e.disabledPanels,e.hasContent),d=e.id,b=(e.index,e.modifiers),h=(e.onChangePanel,e.name),m=e.style,y=e.type,g=e.value,P=e.visible,x=s(e,["animateContent","bemModifiers","bemSeparator","blockElements","checked","checkedPanels","children","className","component","contentId","disabled","disabledPanels","hasContent","id","index","modifiers","onChangePanel","name","style","type","value","visible"]),k=(0,v.bemClassName)(n,"panel",b,t),S=o?"true":"false"
return p.default.createElement(a,f({},x,{"aria-expanded":c&&S,"aria-selected":S,className:k?r?k+" "+r:k:r,role:"tab",style:f({},m,{display:"hidden"===P?"none":null})}),p.default.createElement("input",{"aria-controls":l,checked:o,"data-state":"tabbordion",disabled:u||"hidden"===P,id:d,name:h,onChange:this.onChange,ref:this.getInputRef,type:y,value:g}),i)}}]),t}(b.PureComponent)
S.childContextTypes={tabbordionPanel:m.default.object},S.contextTypes={bem:m.default.object,tabbordion:m.default.object},S.defaultProps={component:"li"},S.propTypes={checked:m.default.bool,className:m.default.string,disabled:m.default.bool,id:m.default.string,index:m.default.number,name:m.default.string,type:m.default.oneOf(["checkbox","radio"]),value:m.default.string,visible:m.default.bool,children:m.default.node,component:m.default.oneOfType([m.default.func,m.default.object,m.default.string]),modifiers:m.default.array},t.default=S},function(e,t,n){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n={}
for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])
return n}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==(void 0===t?"undefined":s(t))&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":s(t)))
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
Object.defineProperty(t,"__esModule",{value:!0})
var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),d=n(1),f=o(d),b=n(2),p=o(b),h=n(0),m=function(e){function t(e,n){r(this,t)
var o=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n))
return o.onClick=o.onClick.bind(o),o}return l(t,e),c(t,[{key:"componentDidMount",value:function(){this.context.bem.subscribe(this),this.context.tabbordionPanel.subscribe(this)}},{key:"componentWillUnmount",value:function(){this.context.bem.unsubscribe(this),this.context.tabbordionPanel.unsubscribe(this)}},{key:"onClick",value:function(e){if(!e.defaultPrevented){var t=this.context.tabbordionPanel.onClickLabel
t&&(e.preventDefault(),t())}}},{key:"render",value:function(){var e=this.context.bem.getState(),t=e.bemSeparator,n=e.blockElements,o=this.context.tabbordionPanel.getState(),r=o.inputId,a=o.modifiers,l=this.props,s=l.className,c=l.component,d=i(l,["className","component"]),b=(0,h.bemClassName)(n,"label",a,t)
return f.default.createElement(c,u({className:b?s?b+" "+s:b:s,htmlFor:r,onClick:this.onClick},d))}}]),t}(d.PureComponent)
m.contextTypes={bem:p.default.object,tabbordionPanel:p.default.object},m.defaultProps={component:"label"},m.propTypes={className:p.default.string,component:p.default.oneOfType([p.default.func,p.default.object,p.default.string])},t.default=m},function(e,t,n){"use strict"
function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n={}
for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])
return n}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==(void 0===t?"undefined":s(t))&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":s(t)))
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
Object.defineProperty(t,"__esModule",{value:!0})
var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n]
o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),d=n(1),f=o(d),b=n(2),p=o(b),h=n(0),m=n(10),y=function(e){function t(e,n){r(this,t)
var o=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n))
return o.state={fastTransition:!1,height:null},o.getRef=o.getRef.bind(o),o.onResize=o.onResize.bind(o),o.update=o.update.bind(o),o}return l(t,e),c(t,[{key:"componentDidMount",value:function(){this.context.bem.subscribe(this),this.context.tabbordionPanel.subscribe(this),this.onResize.getState=this.context.tabbordionPanel.getState,(0,m.addResizeListener)(this.onResize)}},{key:"componentDidUpdate",value:function(){this.update()}},{key:"componentWillReceiveProps",value:function(e,t){t.tabbordionPanel!==this.context.tabbordionPanel&&(this.onResize.getState=t.tabbordionPanel.getState)}},{key:"componentWillUnmount",value:function(){(0,m.removeResizeListener)(this.onResize),this.context.bem.unsubscribe(this),this.context.tabbordionPanel.unsubscribe(this)}},{key:"getRef",value:function(e){this.child=e}},{key:"onResize",value:function(){this.update("resize")}},{key:"update",value:function(e){var t=this
if(this.child){var n=this.child.getBoundingClientRect(),o=n.bottom,i=n.top,r=Math.ceil(o-i),a=this.state.fastTransition
this.state.height!==r&&("resize"===e&&(a=!0),this.setState({fastTransition:a,height:r})),"resize"===e&&a&&(clearTimeout(this._dtt),this._dtt=setTimeout(function(){delete t._dtt,t.setState({fastTransition:!1})},500))}}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,o=e.component,r=e.style,a=i(e,["children","className","component","style"]),l=this.context.bem.getState(),s=l.bemSeparator,c=l.blockElements,d=this.context.tabbordionPanel.getState(),b=d.animateContent,p=d.checked,m=d.contentId,y=d.inputId,v=d.modifiers,g=(0,h.bemClassName)(c,"content",v,s),P=(0,h.bemClassName)(c,"animator",v,s),x="height"===b?p?this.state.height&&this.state.height+"px"||"auto":"0px":null,k="marginTop"===b?p?"0px":this.state.height&&-this.state.height+"px"||"-65535px":null,S=this.state.fastTransition?{webkitTransition:"all 32ms",transition:"all 32ms"}:null
return b?f.default.createElement(o,u({id:m},a,{"aria-labelledby":y,className:P?n?P+" "+n:P:n,role:"tabpanel",style:u({},r,{height:x,overflow:p&&"marginTop"===b?"visible":"hidden"},S)}),f.default.createElement("div",{ref:this.getRef,className:g,style:k&&u({marginTop:k},S)},t)):f.default.createElement(o,u({id:m},a,{"aria-labelledby":y,className:g?n?g+" "+n:g:n,ref:this.getRef,role:"tabpanel",style:r}),t)}}]),t}(d.PureComponent)
y.hasContent=!0,y.contextTypes={bem:p.default.object,tabbordionPanel:p.default.object},y.defaultProps={component:"div"},y.propTypes={children:p.default.node,className:p.default.string,component:p.default.oneOfType([p.default.func,p.default.object,p.default.string]),style:p.default.object},t.default=y},function(e,t,n){"use strict"
function o(e){var t=e.getState(),n=t.animateContent,o=t.checked;("height"===n&&o||"marginTop"===n&&!o)&&e()}function i(e){0===a.length&&window.addEventListener("resize",l,!1),a.includes(e)||a.push(e)}function r(e){var t=a.indexOf(e)
~t&&a.splice(t,1),0===a.length&&window.removeEventListener("resize",l,!1)}Object.defineProperty(t,"__esModule",{value:!0}),t.addResizeListener=i,t.removeResizeListener=r
var a=[],l=function(e,t){function n(){l=!1===o.leading?0:Date.now(),s=null,a=e.apply(i,r),s||(i=r=null)}var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=void 0,r=void 0,a=void 0,l=void 0,s=void 0
return function(){var u=Date.now()
l||!1!==o.leading||(l=u)
var c=t-(u-l)
return i=this,r=arguments,c<=0||c>t?(s&&(clearTimeout(s),s=null),l=u,a=e.apply(i,r),s||(i=r=null)):s||!1===o.trailing||(s=setTimeout(n,c)),a}}(function(){a.forEach(o)},200,{leading:!1})}])})

//# sourceMappingURL=react-tabbordion.js.map