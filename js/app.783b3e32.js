(function(t){function e(e){for(var o,s,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},r={app:0},a=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("ac4d"),n("8a81"),n("ac6a"),n("a481"),n("cadf"),n("551c"),n("f751"),n("097d");var o=n("fc1e"),r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container mx-auto",attrs:{id:t.$options.name}},[n("header",{staticClass:"w-full px-4 pt-2 pb-1"},[n("h1",[n("a",{staticClass:"inline-block align-bottom opacity-50",attrs:{href:"."}},[n("img",{staticClass:"w-8 mr-2 inline-block",attrs:{src:"open-book.png"}}),n("span",{staticClass:"inline-block align-bottom font-light text-lg"},[t._v("\n          Checkpoints\n          "),n("small",{staticClass:"text-xs align-middle"},[t._v("\n            ("+t._s(t.version)+")\n          ")])])])])]),n("notes-dashboard")],1)},s=[],i=n("9224"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:t.$options.name}},[n("div",{staticClass:"flex"},[n("div",{staticClass:"w-1/4 p-1 m-1"},[n("notes-archive",{attrs:{notes:t.notes},on:{select:t.select,create:t.create}}),n("notes-info",{staticClass:"mt-4",attrs:{notes:t.notes,trash:t.trash},on:{push:t.push,clear:t.clear}})],1),n("div",{staticClass:"w-3/4 p-1 m-1"},t._l(t.selected,function(e){return n("div",{key:e.key,staticClass:"mb-4"},[e.edit?n("note-edit",{attrs:{note:e},on:{push:t.push,remove:t.remove}}):n("note-view",{attrs:{note:e},on:{edit:t.edit,close:t.close}})],1)}),0)]),n("notes-footer",{attrs:{notes:t.notes}})],1)},l=[],u=(n("386d"),n("28a5"),n("20d6"),n("7514"),n("55dd"),n("8e6e"),n("456d"),n("bd86"));function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(n,!0).forEach(function(e){Object(u["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var f=function(t){return p({},t,{edit:t.edit,created:t.created?new Date(t.created):new Date,updated:t.updated?new Date(t.updated):null})},h=function(t){var e=localStorage.getItem(t),n=JSON.parse(e)||[];if(e)return n.map(function(t){return f(t)})},m=function(t){return new Promise(function(e){var n=new XMLHttpRequest;n.onreadystatechange=function(){4===n.readyState&&e(JSON.parse(n.response))},n.open("GET",t),n.send()})},v=function(t,e){return localStorage.setItem(t,JSON.stringify(e))},x={parse:f,save:v,load:h,source:m};n("6b54"),n("3b2b");function b(t){var e=t&&t.length&&t.length>0;if(!e)return null;var n="àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;",o="aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------",r=new RegExp(n.split("").join("|"),"g");return t.toString().toLowerCase().replace(/\s+/g,"-").replace(r,function(t){return o.charAt(n.indexOf(t))}).replace(/&/g,"-and-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}var g="checkpoints.ARCHIVE",y="checkpoints.TRASH",k=64,_=x.load(g)||[],w=x.load(y)||[],C=x.parse,O=function(t){return _.find(function(e){return e.key===t})},j=function(){return _},D=function(){return w},$=function(){x.save(g,_),x.save(y,w)},S=function(t){t.updated=new Date;var e=_.findIndex(function(e){return e.key===t.key});return e>-1?r["a"].set(_,e,t):_.push(t),_.sort(function(t,e){return t.title.toLowerCase()>e.title.toLowerCase()?1:-1}),$(),t},N=function(t){var e=t.key,n=t.title,o=t.text,r=t.created,a=b(e||n).substring(0,k);return S(C({key:a,title:n,text:o,created:r}))},E=function(t,e){var n=O(t);n&&(n.key=e)},P=function(t){var e=_.findIndex(function(e){return e.key===t});e<0||(_[e].deleted=new Date,w.push(_[e]),_.splice(e,1),$())},L=function(){return r["a"].nextTick(function(){w.splice(0,w.length),$()})},T={create:C,find:O,list:j,trash:D,push:N,changeKey:E,remove:P,clearTrash:L},I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"p-4 rounded shadow",attrs:{id:t.$options.name}},[n("header",{staticClass:"flex"},[t._m(0),n("div",{staticClass:"flex-1 text-white text-right"},[n("button",{staticClass:"py-1 px-2 rounded shadow bg-green-500 text-xs",attrs:{"data-hotkey":"n"},on:{click:function(e){t.$emit("create",t.ymdFormat(new Date))}}},[t._v("\n        Create\n      ")])])]),n("ul",{staticClass:"mt-2 ml-2 list-disc list-inside text-sm"},t._l(t.notes,function(e){return n("li",{key:e.key},[n("a",{staticClass:"cursor-pointer text-blue-500",attrs:{href:"#"+e.key},on:{click:function(n){return t.$emit("select",e)}}},[t._v("\n        "+t._s(e.title)+"\n      ")])])}),0)])},A=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-1 flex-1 text-sm"},[n("h1",{staticClass:"inline-block font-bold"},[t._v("Archive")])])}],J={name:"notes-archive",props:{notes:Array}},R=J,H=n("2877"),M=Object(H["a"])(R,I,A,!1,null,null,null),z=M.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.note?n("section",{staticClass:"relative p-4 rounded shadow",attrs:{id:t.note.key}},[n("header",{on:{dblclick:function(e){return t.$emit("edit",t.note)}}},[n("h1",{staticClass:"font-bold text-xl"},[t._v(t._s(t.note.title))]),n("div",{staticClass:"text-xs text-gray-500"},[t._v("\n      "+t._s(t.note.created.toLocaleDateString())+" •\n      #"+t._s(t.note.key)+" •\n      "),n("button",{staticClass:"underline",on:{click:t.exportNote}},[t._v("Export")]),t._v(" •\n      "),t.exportData?n("input",{directives:[{name:"model",rawName:"v-model",value:t.exportData,expression:"exportData"}],ref:"exportDataInput",staticClass:"ml-2 font-mono",attrs:{type:"text",onfocus:"this.select()"},domProps:{value:t.exportData},on:{input:function(e){e.target.composing||(t.exportData=e.target.value)}}}):t._e(),n("button",{staticClass:"underline",attrs:{"data-hotkey":"e"},on:{click:function(e){return t.$emit("edit",t.note)}}},[t._v("\n        Edit\n      ")])])]),n("div",{staticClass:"note-content my-2 text-gray-800 text-sm",domProps:{innerHTML:t._s(t.md(t.note.text))}}),n("button",{staticClass:"absolute top-0 right-0 mt-4 mr-4 py-1 px-2 rounded shadow bg-gray-500 text-xs text-white",attrs:{"data-hotkey":"c"},on:{click:function(e){return t.$emit("close",t.note)}}},[t._v("\n    Close\n  ")])]):t._e()},K=[],U=n("d4cd"),q=n.n(U),V=n("cdd4"),B=n.n(V),G={html:!0,linkify:!0},X=new q.a(G).use(B.a),Q=X.renderer.rules;Q.hashtag_open=function(t,e){return'<a href="#'.concat(t[e].content.toLowerCase(),'">')},Q.hashtag_text=function(t,e){return t[e].content},Q.hashtag_close=function(t,e){return"</a>"},Q.link_open=function(t,e,n,o,r){var a=t[e].attrIndex("href"),s=t[e].attrIndex("target"),i=0!==t[e].attrs[a][1].indexOf("#");return i&&(s<0?t[e].attrPush(["target","_blank"]):t[e].attrs[s][1]="_blank"),r.renderToken(t,e,n)};var W=X,Y={name:"note-view",props:{note:Object},methods:{md:function(t){return t?W.render(t):null},exportNote:function(){var t=this;this.exportData="[".concat(JSON.stringify(this.note),"]"),r["a"].nextTick(function(){return t.$refs.exportDataInput.focus()})}},data:function(){return{exportData:null}}},Z=Y,tt=(n("ab8d"),Object(H["a"])(Z,F,K,!1,null,null,null)),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.note?n("section",{attrs:{id:t.$options.name+"-"+t.note.key}},[n("div",{staticClass:"text-sm p-4 rounded shadow"},[n("div",{staticClass:"flex mb-2"},[n("div",{staticClass:"w-1/2 pr-1"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.note.title,expression:"note.title"}],ref:"titleInput",staticClass:"border border-gray-200 rounded py-1 px-2 w-full",attrs:{type:"text",placeholder:"Title",onfocus:"this.select()"},domProps:{value:t.note.title},on:{blur:t.updateLink,input:function(e){e.target.composing||t.$set(t.note,"title",e.target.value)}}})]),n("div",{staticClass:"w-1/2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.link,expression:"link"}],staticClass:"border border-gray-200 text-gray-500 font-mono rounded py-1 px-2 w-full",attrs:{type:"text",onfocus:"this.select()",placeholder:"Hashtag Name (Link)"},domProps:{value:t.link},on:{blur:t.updateLink,input:function(e){e.target.composing||(t.link=e.target.value)}}})])]),n("div",{staticClass:"mb-1"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.note.text,expression:"note.text"}],ref:"noteTxtArea",staticClass:"border border-gray-200 rounded py-1 px-2 w-full font-mono text-xs",attrs:{rows:"10",placeholder:"Text"},domProps:{value:t.note.text},on:{input:function(e){e.target.composing||t.$set(t.note,"text",e.target.value)}}})]),n("div",{staticClass:"flex"},[n("div",{staticClass:"w-1/2 text-xs text-gray-500"},[t._v("\n        Created "+t._s(t.note.created.toLocaleString())+" "),n("br"),t._v("\n        Updated "+t._s(t.note.updated?t.note.updated.toLocaleString():"Never")+"\n      ")]),n("div",{staticClass:"w-1/2 text-right"},[n("button",{staticClass:"py-2 px-4 mr-2 rounded shadow bg-green-500 text-white text-xs",attrs:{"data-hotkey":"d"},on:{click:function(e){return t.$emit("push",t.note,t.link)}}},[t._v("\n          Done\n        ")]),n("button",{staticClass:"py-1 px-2 underline text-gray-500 text-xs",attrs:{"data-hotkey":"r"},on:{click:t.remove}},[t._v("\n          Remove\n        ")])])])])]):t._e()},ot=[],rt=(n("b54a"),{name:"note-edit",props:{note:Object},methods:{updateLink:function(){this.link&&this.updated||(this.link=b(this.note.title))},remove:function(){var t="Remove ".concat(this.note.title,"?");confirm(t)&&this.$emit("remove",this.note)},autoHeight:function(){var t=this.$refs.noteTxtArea,e="height:".concat(t.scrollHeight,"px;overflow-y:hidden;");t.setAttribute("style",e),t.addEventListener("input",function(){t.style.height="auto",t.style.height="".concat(t.scrollHeight,"px")},!1)}},data:function(){return{link:null}},mounted:function(){this.link=this.note.key,this.note.updated||this.$refs.titleInput.focus(),this.autoHeight()}}),at=rt,st=Object(H["a"])(at,nt,ot,!1,null,null,null),it=st.exports,ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"mt-2 text-gray-500 text-xs text-center",attrs:{id:t.$options.name}})},lt=[],ut={name:"notes-footer"},dt=ut,pt=Object(H["a"])(dt,ct,lt,!1,null,null,null),ft=pt.exports,ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"p-4 rounded shadow",attrs:{id:t.$options.name}},[n("section",{attrs:{id:t.$options.name+"-data"}},[t._m(0),t.notes?n("ul",{staticClass:"ml-2 text-xs text-gray-500 list-disc list-inside"},[n("li",[n("button",{staticClass:"underline",on:{click:function(e){return t.show(t.notes)}}},[t._v("\n          Archived ("+t._s(this.notes.length)+")\n        ")])]),n("li",[n("button",{staticClass:"underline",on:{click:function(e){return t.show(t.trash)}}},[t._v("\n          Removed ("+t._s(this.trash.length)+")\n        ")])]),n("li",[n("button",{staticClass:"underline",on:{click:function(e){return t.clear()}}},[t._v("\n          Clear Trash\n        ")])]),n("li",[n("button",{staticClass:"underline",on:{click:t.importNotes}},[t._v("Import")]),t.jsonData||t.importing?n("span",[t._v(" •\n          "),n("button",{staticClass:"underline text-xs",on:{click:function(e){t.importing=t.jsonData=null}}},[t._v("\n            Close\n          ")])]):t._e()])]):t._e(),t.jsonData||t.importing?n("div",{staticClass:"mt-2 text-gray-500 text-right"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.jsonData,expression:"jsonData"}],staticClass:"p-2 w-full font-mono text-xs",attrs:{placeholder:"Paste JSON database and press Import",id:"json-data",rows:"10",onfocus:"this.select()"},domProps:{value:t.jsonData},on:{input:function(e){e.target.composing||(t.jsonData=e.target.value)}}})]):t._e()]),n("section",{attrs:{id:t.$options.name+"-keys"}},[t._m(1),t._m(2)])])},mt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",{staticClass:"py-2 font-bold text-sm"},[t._v("Local JSON Database")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",{staticClass:"py-2 font-bold text-sm"},[t._v("Keyboard Shortcuts")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"ml-2 text-xs text-gray-500 list-disc list-inside"},[n("li",[n("kbd",{staticClass:"px-1 rounded bg-gray-100 font-bold"},[t._v("N")]),t._v(" Create")]),n("li",[n("kbd",{staticClass:"px-1 rounded bg-gray-100 font-bold"},[t._v("E")]),t._v(" Edit")]),n("li",[n("kbd",{staticClass:"px-1 rounded bg-gray-100 font-bold"},[t._v("R")]),t._v(" Remove")]),n("li",[n("kbd",{staticClass:"px-1 rounded bg-gray-100 font-bold"},[t._v("D")]),t._v(" Done")]),n("li",[n("kbd",{staticClass:"px-1 rounded bg-gray-100 font-bold"},[t._v("C")]),t._v(" Close")])])}],vt={name:"notes-info",props:{notes:Array,trash:Array},methods:{importNotes:function(){var t=this;if(this.importing){var e=JSON.parse(this.jsonData);e.forEach(function(e){return t.$emit("push",e)})}else this.jsonData=null;this.importing=!this.importing},show:function(t){this.jsonData=JSON.stringify(t,null,2),r["a"].nextTick(function(){return document.getElementById("json-data").focus()})},clear:function(){confirm("Really clear ".concat(this.trash.length," trash items?"))&&this.$emit("clear")}},data:function(){return{jsonData:null,importing:null}}},xt=vt,bt=Object(H["a"])(xt,ht,mt,!1,null,null,null),gt=bt.exports,yt=window,kt=yt.location,_t={name:"notes-dashboard",components:{NotesArchive:z,NoteView:et,NoteEdit:it,NotesFooter:ft,NotesInfo:gt},methods:{edit:function(t){t.edit=!0},select:function(t){var e=this.selected.find(function(e){return e.key===t.key});e&&this.removeSelected(t.key),this.selected.unshift(t),kt.hash=t.key},removeSelected:function(t){var e=this.selected.findIndex(function(e){return e.key===t});e>-1&&this.selected.splice(e,1)},close:function(t){this.removeSelected(t.key),window.scrollTo(0,0);var e=this.selected[0];kt.hash=e?e.key:""},create:function(t){if(t){var e=b(t);this.selected.unshift(T.create({key:e,title:t,edit:!0}))}},push:function(t,e){(t.title||t.text)&&(e&&t.key&&t.key!==e&&(T.changeKey(t.key,e),t.key=e),t.edit=!1,T.push(t))},remove:function(t){T.remove(t.key),this.close(t)},clear:function(){T.clearTrash()},addHashListener:function(){var t=this;window.addEventListener("hashchange",function(e){var n=e.newURL.split("#")[1],o=T.find(n);o?t.select(o):t.create(n)},!1)},checkSource:function(){var t=this,e=new URLSearchParams(window.location.search).get("src");e&&x.source(e).then(function(e){return e.forEach(function(e){return t.push(e)})})}},data:function(){return{selected:[],notes:null,trash:null}},mounted:function(){this.notes=T.list(),this.trash=T.trash();var t=kt.hash.substring(1),e=t?T.find(t):this.notes[0];e?this.selected.unshift(e):this.create(t),this.addHashListener(),this.checkSource()}},wt=_t,Ct=Object(H["a"])(wt,c,l,!1,null,null,null),Ot=Ct.exports,jt={name:"checkpoints-main",components:{NotesDashboard:Ot},data:function(){return{version:i["a"]}},mounted:function(){var t="production";"production"!==t&&(this.version+="-".concat(t))}},Dt=jt,$t=(n("beba"),Object(H["a"])(Dt,a,s,!1,null,null,null)),St=$t.exports;r["a"].config.productionTip=!1,r["a"].mixin({methods:{ymdFormat:function(t){return t.toJSON().slice(0,19).replace("T"," ")}},mounted:function(){var t=document.querySelectorAll("[data-hotkey]"),e=!0,n=!1,r=void 0;try{for(var a,s=t[Symbol.iterator]();!(e=(a=s.next()).done);e=!0){var i=a.value;Object(o["b"])(i),Object(o["a"])(i)}}catch(c){n=!0,r=c}finally{try{e||null==s.return||s.return()}finally{if(n)throw r}}}}),new r["a"]({render:function(t){return t(St)}}).$mount("#checkpoints-app")},"7e0c":function(t,e,n){},"90db":function(t,e,n){},9224:function(t){t.exports=JSON.parse('{"a":"0.2.3"}')},ab8d:function(t,e,n){"use strict";var o=n("90db"),r=n.n(o);r.a},beba:function(t,e,n){"use strict";var o=n("7e0c"),r=n.n(o);r.a}});
//# sourceMappingURL=app.783b3e32.js.map