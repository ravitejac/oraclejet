/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojdnd","ojs/ojlistview"],function(a,g){a.Za=function(a){this.Da=a};o_("ListViewDndContext",a.Za,a);a.b.sa(a.Za,a.b,"oj.ListViewDndContext");a.Za.Zka=67;a.Za.DP=86;a.Za.FP=88;a.Za.prototype.nT=function(a){var c=this.Da.ce("dnd");return null!=c&&c[a]?c[a].items:null};a.Za.prototype.tJ=function(){return this.nT("drag")};a.Za.prototype.oT=function(){return this.nT("drop")};a.Za.prototype.Hq=function(){return"enabled"==this.nT("reorder")};a.Za.prototype.Hg=function(a){return this.Da.Hm(a)};
a.Za.prototype.ST=function(){var a,c,d,e;a=[];if(this.Da.yc())for(c=this.Da.ce("selection"),d=0;d<c.length;d++)e=this.Da.Ue(c[d]),null==e||this.Da.Dk(g(e))||a.push(e);else e=this.bT(),null!=e&&a.push(e);null!=this.Tw&&0<this.Tw.length&&-1==a.indexOf(this.Tw.get(0))&&a.push(this.Tw.get(0));return a};a.Za.prototype.bT=function(){return null==this.Da.N?null:this.Da.N.elem[0]};a.Za.prototype.Qw=function(a){var c;g(a).hasClass(this.Da.gj())||(a=a.firstElementChild);a=g(a).find(".oj-listview-drag-handle");
null!=a&&0<a.length&&(c=a.attr("aria-labelledby"),null==c?a.attr("aria-labelledby",this.Da.kv("instr")):a.attr("aria-labelledby",c+" "+this.Da.kv("instr")),this.Da.Vl()&&a.attr("draggable","true"))};a.Za.prototype.bda=function(a){var c;c=a.find(".oj-listview-drag-handle");if(null!=c&&0<c.length)return!0;a.addClass("oj-draggable");return!1};a.Za.prototype.vFa=function(a){a.removeClass("oj-draggable")};a.Za.prototype.Zca=function(a){var c,d;if(null!=this.tJ()||this.Hq()){if(a.hasClass("oj-listview-drag-handle"))c=
g(a);else{a=this.Hg(a);if(null!=a&&(d=this.bda(a)))return;d=this.bT();null!=d&&(null!=a&&a[0]==d?c=a:g(d).removeClass("oj-draggable"))}null!=c&&c.attr("draggable",!0)}};a.Za.prototype.wea=function(a){if(null!=this.tJ()||this.Hq())a=a.hasClass("oj-listview-drag-handle")?g(a):this.Hg(a),null!=a&&a.removeAttr("draggable")};a.Za.prototype.rn=function(b,c,d,e){var f;if(b="drag"===b?this.tJ():this.oT())if((c=b[c])&&"function"==typeof c)try{d.dataTransfer=d.originalEvent.dataTransfer,f=c(d,e)}catch(g){a.t.error("Error: "+
g)}else return-1;return f};a.Za.prototype.EDa=function(a,c,d){var e,f=[],g;for(e=0;e<d.length;e++)(g=this.Da.I7(d[e]))&&(g.innerHTML&&g.tagName&&"LI"==g.tagName?f.push(g.innerHTML):f.push(g));return 0<f.length?(this.DDa(a.originalEvent,c,f),this.FDa(a.originalEvent,d),{items:f}):null};a.Za.prototype.DDa=function(a,c,d){var e;a=a.dataTransfer;d=JSON.stringify(d);if("string"==typeof c)a.setData(c,d);else if(c)for(e=0;e<c.length;e++)a.setData(c[e],d);a.setData("text/ojlistview-dragsource-id",this.Da.element.get(0).id)};
a.Za.prototype.FDa=function(a,c){var d,e,f=Number.MAX_VALUE,h,k,l,m=0,r=0;d=a.target;if(1<c.length){d=g(document.createElement("ul"));d.get(0).className=this.Da.element.get(0).className;d.addClass("oj-listview-drag-image").css({width:this.Da.element.css("width"),height:this.Da.element.css("height")});for(e=0;e<c.length;e++)f=Math.min(f,c[e].offsetTop);for(e=0;e<c.length;e++)h=c[e].offsetTop-f,k=c[e].offsetWidth,l=g(c[e].cloneNode(!0)),l.removeClass("oj-selected oj-focus oj-hover").css({position:"absolute",
top:h,width:k}),d.append(l)}else g(d).hasClass("oj-listview-drag-handle")&&(m=Math.max(0,d.offsetLeft-c[0].offsetLeft)+d.offsetWidth/2,r=d.offsetTop+d.offsetHeight/2),l=g(c[0].cloneNode(!0)),l.removeClass("oj-selected oj-focus oj-hover").addClass("oj-drag"),d=g(document.createElement("ul")),d.get(0).className=this.Da.element.get(0).className,d.addClass("oj-listview-drag-image").css({width:this.Da.element.css("width"),height:2*c[0].offsetHeight}).append(l);g("body").append(d);this.BN=d;a.dataTransfer.setDragImage(d.get(0),
m,r)};a.Za.prototype.sU=function(a){var c,d,e;c=this.tJ();if(null!=c||this.Hq())if(d=null!=c?c.dataTypes:"text/ojlistview-items-data",g(a.target).hasClass("oj-listview-drag-handle")?(e=[],e.push(this.Hg(a.target)[0])):e=this.ST(),0<e.length){if(null==c&&1<e.length)return!1;this.ur=e;this.xN=g(e[0]);if(c=this.EDa(a,d,e)){if(a=this.rn("drag","dragStart",a,c),-1!==a)return a}else return!1}};a.Za.prototype.Hwa=function(a){return this.rn("drag","drag",a)};a.Za.prototype.MI=function(){null!=this.BN&&(this.BN.remove(),
this.BN=null)};a.Za.prototype.oU=function(a){var c;if(null!=this.xN&&null!=this.ur)for(this.xN.find(".oj-listview-drag-handle").removeAttr("draggable"),this.xN.removeClass("oj-drag oj-draggable").removeAttr("draggable"),c=0;c<this.ur.length;c++)g(this.ur[c]).removeClass("oj-listview-drag-item");this.DC();this.MI();this.rn("drag","dragEnd",a);this.xN=this.BN=null};a.Za.prototype.BV=function(a){var c,d;c=this.oT();if(this.Hq()&&null==c)return!0;if(c&&c.dataTypes)for(c=c.dataTypes,c="string"==typeof c?
[c]:c,a=a.originalEvent.dataTransfer.types,d=0;d<a.length;d++)if(0<=c.indexOf(a[d]))return!0;return!1};a.Za.prototype.sn=function(a,c,d){a=this.rn("drop",a,c,d);(void 0===a||-1===a)&&this.BV(c)&&c.preventDefault();return a};a.Za.prototype.M5=function(a){var c;null==this.lj&&(c=g(a.get(0).cloneNode(!1)),c.addClass("oj-drop").removeClass("oj-drag oj-draggable oj-hover oj-focus oj-selected").css({display:"block",height:a.outerHeight()}),this.lj=c);return this.lj};a.Za.prototype.k5=function(){null!=this.xi&&
-1===this.MA&&this.xi.children("."+this.Da.Sf()).removeClass("oj-drop")};a.Za.prototype.j5=function(){null!=this.xi&&this.xi.hasClass("oj-listview-no-data-message")&&(this.xi.removeClass("oj-drop"),this.xi.get(0).textContent=this.Da.O7())};a.Za.prototype.DC=function(){null!=this.lj&&(this.lj.css("height","0"),this.lj.remove(),this.lj=null);this.j5();this.k5()};a.Za.prototype.pU=function(a){var c;c=this.Hg(a.target);a=this.sn("dragEnter",a,{item:c.get(0)});if(-1!=a)return a};a.Za.prototype.DW=function(a){null!=
this.xi&&this.xi.removeClass("oj-valid-drop oj-invalid-drop");this.xi=a;this.xi.addClass("oj-valid-drop")};a.Za.prototype.Rca=function(a,c){var d;d=a.attr("aria-label");null==d&&(d=a.text());d=this.Da.V.F("accessibleReorder"+c.charAt(0).toUpperCase()+c.substr(1)+"Item",{item:d});this.Da.Qg(d)};a.Za.prototype.Kpa=function(){null==this.Cia&&this.Da.Vl()&&(this.Da.element.find("ul."+this.Da.ti()).each(function(){g(this).attr("oldMaxHeight",g(this).css("maxHeight").toString());g(this).css("maxHeight",
1E4)}),this.Cia="adjusted")};a.Za.prototype.Bca=function(){this.Da.Vl()&&this.Da.element.find("ul."+this.Da.ti()).each(function(){g(this).css("maxHeight",parseInt(g(this).attr("oldMaxHeight"),10));g(this).removeAttr("oldMaxHeight")});this.Cia=null};a.Za.prototype.rU=function(a){var c,d,e,f;if(null!=this.oT()||this.Hq()){this.Kpa();if(null!=this.ur&&"none"!=g(this.ur[0]).css("display")){c=g(this.ur[0]);d=this.M5(c);for(a=0;a<this.ur.length;a++)g(this.ur[a]).addClass("oj-listview-drag-item");d.insertBefore(c);
this.MA=d.index()}else c=this.Hg(a.target),null!=c&&0<c.length?(e=this.sn("dragOver",a,{item:c.get(0)}),-1===e&&this.Hq()||!1===e||a.isDefaultPrevented()?(c.hasClass(this.Da.gj())?(this.k5(),c.hasClass("oj-drop")||(d=this.M5(c),f=c.index(),null==this.MA||this.MA<f?(d.insertAfter(c),this.LA="after"):(d.insertBefore(c),this.LA="before"),this.Rca(c,this.LA),this.DW(c),this.MA=d.index())):(this.DC(),c.children("."+this.Da.Sf()).addClass("oj-drop"),this.DW(c),this.MA=-1,this.LA="inside",this.Rca(c,this.LA)),
a.preventDefault()):g(a.target).hasClass(this.Da.ti())||(c.addClass("oj-invalid-drop"),this.DC())):(c=this.Da.element.children(".oj-listview-no-data-message"),null!=c&&0<c.length&&(c.addClass("oj-drop"),c.get(0).textContent="",this.DW(c),a.preventDefault()));return e}};a.Za.prototype.tK=function(a,c){var d,e;d=c.getBoundingClientRect();e=a.originalEvent;return e.clientX>=d.left&&e.clientX<d.right&&e.clientY>=d.top&&e.clientY<d.bottom};a.Za.prototype.qU=function(a){var c,d;if(null!=this.xi&&(c=this.Hg(a.target),
null!=c&&0<c.length?(c.removeClass("oj-valid-drop oj-invalid-drop"),d=this.sn("dragLeave",a,{item:c.get(0)}),this.tK(a,a.currentTarget)||(this.DC(),this.Bca())):this.tK(a,a.currentTarget)||this.j5(),-1!=d))return d};a.Za.prototype.tU=function(a){var c,d;if(null!=this.xi&&(c=a.originalEvent.dataTransfer.getData("text/ojlistview-dragsource-id"),d=this.xi.hasClass("oj-listview-no-data-message")?{}:{item:this.xi.get(0),position:this.LA},this.Hq()&&c===this.Da.element.get(0).id?d.reorder=!0:d.reorder=
!1,c=this.sn("drop",a,d),d.reorder&&(d.items=this.ur,d.reference=d.item,this.Da.Ek("reorder",a,d),a.preventDefault()),null!=this.xi&&this.xi.removeClass("oj-valid-drop"),this.DC(),this.Bca(),this.MI(),this.xi=null,this.MA=-1,this.LA=null,-1!==c))return c};a.Za.prototype.ZFa=function(a){var c=this,d,e;this.Hq()&&(void 0==a&&(a=this.Da.ce("contextMenu")),null!=a&&(null==this.qm&&(this.qm=[]),a=g(a),d=a.find("[data-oj-command]"),e=[],d.each(function(){var a,b;0===g(this).children("a").length?0==g(this).attr("data-oj-command").indexOf("oj-listview-")&&
(a=g(this).attr("data-oj-command").substring(12),b=c.Kj(a),b.get(0).className=g(this).get(0).className,g(this).replaceWith(b)):(a=g(this).attr("data-oj-command"),"pasteBefore"==a?a="paste-before":"pasteAfter"==a&&(a="paste-after"));null!=a&&e.push(a)}),this.qm=e,0<e.length&&(a.data("oj-ojMenu")&&a.ojMenu("refresh"),a.on("ojbeforeopen",this.ywa.bind(this)),a.on("ojselect",this.Sk.bind(this)))))};a.Za.prototype.Kj=function(a){return"paste-before"===a?this.ag("pasteBefore"):"paste-after"===a?this.ag("pasteAfter"):
this.ag(a)};a.Za.prototype.ag=function(a){var c=g("\x3cli\x3e\x3c/li\x3e");c.attr("data-oj-command",a);c.append(this.xC(a));return c};a.Za.prototype.xC=function(a){a="label"+a.charAt(0).toUpperCase()+a.slice(1);return g('\x3ca href\x3d"#"\x3e\x3c/a\x3e').text(this.Da.V.F(a))};a.Za.prototype.yD=function(a){var c;null!=this.Nn&&g(this.Nn).removeClass("oj-listview-cut");c=this.ST();g(c).addClass("oj-listview-cut");this.Nn=c;this.Da.Ek("cut",a,{items:c})};a.Za.prototype.r9=function(a){var c;null!=this.Nn&&
g(this.Nn).removeClass("oj-listview-cut");this.Nn=c=this.ST();this.Da.Ek("copy",a,{items:c})};a.Za.prototype.AD=function(a,c,d){this.Da.Ek("paste",a,{item:c.get(0)});g(this.Nn).removeClass("oj-listview-cut");this.Da.Ek("reorder",a,{items:this.Nn,position:d,reference:c.get(0)});this.Nn=null};a.Za.prototype.Sk=function(a,c){if(null!=this.Tw)switch(c.item.attr("data-oj-command")){case "cut":this.yD(a);break;case "copy":this.r9(a);break;case "paste":var d=!0;case "pasteBefore":var e=!0;case "pasteAfter":var f=
"after";d?f="inside":e&&(f="before");this.AD(a,this.Tw,f);this.Tw=null}};a.Za.prototype.qC=function(a,c){null!=this.qm&&("paste-before"==c?c="pasteBefore":"paste-after"==c&&(c="pasteAfter"),a.find("[data-oj-command\x3d'"+c+"']").removeClass("oj-disabled"))};a.Za.prototype.ywa=function(a,c){var d,e;d=g(a.target);d.find("[data-oj-command]").addClass("oj-disabled");e=c.openOptions.launcher;null==e||null==this.qm||0==this.qm.length?d.ojMenu("refresh"):(e.children().first().hasClass(this.Da.Sf())?null!=
this.Nn&&this.qC(d,"paste"):(this.qC(d,"cut"),this.qC(d,"copy"),null!=this.Nn&&(this.qC(d,"paste-before"),this.qC(d,"paste-after"))),d.ojMenu("refresh"),this.Tw=e)};a.Za.prototype.QG=function(b){var c,d;if(!this.Hq()||null==this.qm||0==this.qm.length)return!1;if(b.ctrlKey||b.metaKey){c=b.keyCode;if(c===a.Za.FP&&-1<this.qm.indexOf("cut"))return this.yD(b),!0;if(c===a.Za.Zka&&-1<this.qm.indexOf("copy"))return this.r9(b),!0;if(c===a.Za.DP&&null!=this.Nn&&(c=g(this.bT()),c.children().first().hasClass(this.Da.Sf())?
-1<this.qm.indexOf("paste")&&(d="inside"):-1<this.qm.indexOf("paste-before")?d="before":-1<this.qm.indexOf("paste-after")&&(d="after"),null!=d))return this.AD(b,c,d),!0}return!1}});