/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";define(["ojs/ojcore","ojs/ojcontext","ojs/ojcomponentcore","ojs/ojlabel","ojs/ojlogger"],function(e,t,n,o,a){var i={properties:{direction:{type:"string",enumValues:["column","row"],value:"column"},labelEdge:{type:"string",enumValues:["start","top"],value:"top"},labelWidth:{type:"string",value:"33%"},labelWrapping:{type:"string",enumValues:["truncate","wrap"],value:"wrap"},maxColumns:{type:"number",value:1}},methods:{setProperty:{},getProperty:{},setProperties:{},refresh:{},getNodeBySubId:{},getSubIdByNode:{}},extension:{}};Object.freeze(i);var l=0;function r(e){var n,o,i,r,s,d,u=this,c=e.element,f="-labelled-by",m="data-oj-formlayout-bonus-dom",h="["+m+"]",v=!0,b=!1;function p(){o&&(o(),o=null)}function y(){n&&(n(),n=null)}function g(e){var n=null;return e instanceof Element&&"labelHint"in e&&(M(e),n=function(e){var t=e.tagName.toLowerCase(),n=document.createElement("oj-label");n.setAttribute(m,""),n.setAttribute("data-oj-internal",""),n.setAttribute("data-oj-binding-provider","none"),n.setAttribute("data-oj-context",""),"start"!==c.labelEdge||"oj-checkboxset"!==t&&"oj-radioset"!==t||n.classList.add(t+"-label");var o=document.createElement("span");return o.id=e.id+"|hint",o.textContent=e.labelHint,n.appendChild(o),function(e,t){var n=e,o=t;"labelledBy"in o?(n.id=o.id+f,o.labelledBy=n.id):n.setAttribute("for",o.id)}(n,e),n}(e),e.parentElement.insertBefore(n,e),function(e,n){var o=n;t.getContext(o).getBusyContext().whenReady().then(function(){var t=e.helpHints;t&&(t.definition||t.source)&&(o.help=t),o.showRequired=e.required})}(e,n),function(e){e.addEventListener("labelHintChanged",j),e.addEventListener("helpHintsChanged",x),e.addEventListener("requiredChanged",C)}(e)),n}function j(e){var t=e.target,n=document.getElementById(t.id+"|hint");n&&(n.innerText=e.detail.value)}function x(e){var t=L(e.target);t&&(t.help=e.detail.value)}function C(e){var t=L(e.target);t&&(t.showRequired=e.detail.value)}function L(e){return"labelledBy"in e?document.getElementById(e.labelledBy):c.querySelector('oj-label[for="'+e.id+'"]')}function E(e,t){var n=1;return"column"===c.direction?"100%":(e&&"colspan"in e&&e.colspan&&(n=Math.min(Math.floor(e.colspan),t)),Math.floor(1e5/c.maxColumns)/1e3*n+"%")}function w(e,t){var n=N("oj-flex-item");return n.style.webkitFlex="0 1 "+t,n.style.flex="0 1 "+t,n.style.maxWidth=t,n.style.width=t,e.appendChild(n),n}function B(e,t,n,o){var a,i;a=n?N("oj-flex"):e.previousElementSibling;var l=t?function(){if(!d&&(d=s,"start"===c.labelEdge&&"row"===c.direction)){var e=c.labelWidth.match(/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/);switch(e[2]){case"vw":case"vmin":case"vmax":case"%":d=e[1]/c.maxColumns+e[2]}}return d}():E(e,o);t||(i=w(a,"0px"));var r=N("oj-flex-item");if(a.appendChild(r),e.parentElement.insertBefore(a,e),r.appendChild(e),r.style.flex="0 0 "+l,r.style.maxWidth=l,r.style.width=l,t){var u=N("oj-flex-item");a.appendChild(u),"row"===c.direction&&"top"===c.labelEdge&&(u.appendChild(e),r.style.webkitFlex="0 1 0px",r.style.flex="0 1 0px",r.style.maxWidth="0px",r.style.width="0px",r.classList.add("oj-formlayout-label-comp-flex-item"),u.classList.add("oj-formlayout-label-comp-flex-item")),u.appendChild(t),u.style.webkitFlex="1 1 0",u.style.flex="1 1 0"}else i.classList.add("oj-formlayout-no-label-flex-item"),r.classList.add("oj-formlayout-no-label-flex-item"),"OJ-LABEL-VALUE"===e.tagName&&(e.setAttribute("data-oj-colspan",o),e.refresh());return a}function N(e){var t=document.createElement("div");return t.setAttribute(m,""),t.setAttribute("data-oj-internal",""),t.classList.add(e),t}function A(e){for(var t=e,n=!0;t!==c;){if("OJ-FORM-LAYOUT"===t.tagName){n=!1;break}if(null==(t=t.parentElement)){n=!1;break}}return n}function O(e){for(;e.firstElementChild;)e.parentNode.insertBefore(e.firstElementChild,e);e.parentNode.removeChild(e)}function M(e){var t=e;t.id||(t.id="oflId_"+l,l+=1)}u._rootElementMutationObserver=new MutationObserver(function(e){document.body.contains(c)?(!function(e){for(var t=e.length,n=0;n<t;n++){var o=e[n];if("childList"===o.type)for(var a=o.addedNodes.length,l=0;l<a;l++){var r=o.addedNodes[l];r.parentNode===c&&i.appendChild(r)}}}(e),function(e){for(var t=!0,n=e.length,o=0;o<n;o++){var a=e[o];if("childList"===a.type&&((i=a.target)===c||i&&"DIV"===i.tagName&&i.hasAttribute(m))&&A(a.target)){t=!1;break}if("attributes"===a.type&&"colspan"===a.attributeName){t=!1;break}}var i;return t}(e)||(!function(e){for(var t=e.length,n=0;n<t;n++){var o=e[n];if("childList"===o.type)for(var a=o.removedNodes.length,i=0;i<a;i++){var l=o.removedNodes[i];1===l.nodeType&&(l.removeEventListener("labelHintChanged",j),l.removeEventListener("helpHintsChanged",x),l.removeEventListener("requiredChanged",C))}}}(e),c.refresh())):this.disconnect()}),this.createDOM=function(){for(c.classList.add("oj-form-layout"),(i=document.createElement("div")).classList.add("oj-form"),i.setAttribute("data-oj-context",""),i.setAttribute("data-oj-internal",""),i.setAttribute(m,"");c.firstChild;)i.appendChild(c.firstChild);c.appendChild(i)},this.updateDOM=function(){function e(){!function(){if(!o){var e=t.getContext(c).getBusyContext(),n={description:"The oj-form-layout component with id = '"+c.id+"' is being rendered."};o=e.addBusyState(n)}}(),r=[],d=null,s="start"===c.labelEdge?c.labelWidth:"100%",t.getContext(i).getBusyContext().whenReady().then(function(){!function(){if(!n){var e=t.getContext(i).getBusyContext(),o={description:"The oj-form div for oj-form-layout component with id = '"+c.id+"' is being rendered."};n=e.addBusyState(o)}}(),u._rootElementMutationObserver.disconnect(),function(){var e=c.maxColumns;if("start"===c.labelEdge){var t=parseInt(c.labelWidth,10);(isNaN(t)||t>0)&&i.classList.add("oj-form-cols-labels-inline"),i.classList.add("oj-formlayout-labels-inline"),i.classList.remove("oj-form-cols")}else i.classList.add("oj-form-cols"),i.classList.remove("oj-form-cols-labels-inline"),i.classList.remove("oj-formlayout-labels-inline");"truncate"===c.labelWrapping?i.classList.add("oj-formlayout-labels-nowrap"):i.classList.remove("oj-formlayout-labels-nowrap");"row"===c.direction?(e=1,i.classList.add("oj-formlayout-form-across")):(e=c.maxColumns,i.classList.remove("oj-formlayout-form-across"));i.style.columnCount=e,i.style.webkitColumnCount=e,i.style.MozColumnCount=e}(),v||function(){for(var e=i.querySelectorAll(h),t=e.length,n=0;n<t;++n){var o=e[n];A(o)&&("OJ-LABEL"===o.tagName?o.parentElement.removeChild(o):O(o))}}(),function(){var e=i.firstElementChild,t=0,n="column"===c.direction;for(;e;){var o=e.tagName.toLowerCase();if(-1!==o.indexOf("-"))if("oj-label"===o){var a=e;if(!(e=e.nextElementSibling))throw M(c),M(a),y(),p(),new Error("oj-form-layout component with id='"+c.id+"' has an oj-label child element with id='"+a.id+"' but has no next sibling element that it is associated with.")}else"oj-label-value"===o?v||e.refresh():e.classList.contains("oj-complete")?g(e):((n||t%c.maxColumns==0)&&e.setAttribute("data-oj-needs-oj-flex-div",""),r.push(e));t+=1,e=e.nextElementSibling}}(),function(){var e,t=[],n=i.children.length,o="column"===c.direction,l=0,s=0;!function(e,t){for(var n=t,o=e.length-1;o>=0;o--)n[o]=e[o]}(i.children,t);var d,u=c.maxColumns,f=0,m=!1,h=!1;for(;l<n;){var v=t[l];if(d=1,-1===r.indexOf(v)){var b=v.tagName.toLowerCase();if("oj-label"===b){var p=t[l+=1];e=B(v,p,o||s%u==0)}else"colspan"in v&&v.colspan&&(o?m||(a.error('Colspan attribute is ignored unless direction is set to "row"'),m=!0):(d=Math.min(Math.floor(v.colspan),u-f),!h&&u>1&&(h=!0))),e=B(v,null,o||s%u==0,d)}f=(s+=d)%u,l+=1}h&&!o?i.classList.add("oj-form-control-full-width"):i.classList.remove("oj-form-control-full-width");!function(e,t){var n=c.maxColumns,o=t%n,a=E();if("column"!==c.direction&&e&&o>0)for(var i=o;i<n;i++)w(e,a)}(e,s)}(),u._rootElementMutationObserver.observe(c,{childList:!0,subtree:!0,attributes:!0}),y(),p(),v&&(v=!1)})}var l;b||(!(v||!c.hasAttribute("data-oj-context"))&&!(l=t.getContext(c).getBusyContext()).isReady()?(b=!0,l.whenReady().then(function(){b=!1,e()})):e())}}i.extension._CONSTRUCTOR=r,e.CustomElementBridge.register("oj-form-layout",{metadata:i})});