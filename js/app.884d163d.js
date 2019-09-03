(function(t){function e(e){for(var o,a,i=e[0],l=e[1],c=e[2],d=0,p=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(o=!1)}o&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={app:0},s=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("ac4d"),n("8a81"),n("ac6a"),n("a481"),n("cadf"),n("551c"),n("f751"),n("097d");var o=n("fc1e"),r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container mx-auto",attrs:{id:t.$options.name}},[n("header",{staticClass:"w-full px-4 pt-2 pb-1"},[n("h1",[n("a",{staticClass:"inline-block align-bottom opacity-50",attrs:{href:"."}},[n("img",{staticClass:"w-8 mr-2 inline-block",attrs:{src:"open-book.png"}}),n("span",{staticClass:"inline-block align-bottom font-light text-lg"},[t._v("\n          Checkpoints\n          "),n("small",{staticClass:"text-xs align-middle"},[t._v("\n            ("+t._s(t.version)+")\n          ")])])])])]),n("notes-dashboard")],1)},a=[],i=n("9224"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:t.$options.name}},[n("div",{staticClass:"flex"},[n("div",{staticClass:"w-1/4 p-1 m-1"},[n("notes-archive",{attrs:{notes:t.notes},on:{select:t.select,create:t.create}}),n("notes-info",{staticClass:"mt-4",attrs:{notes:t.notes,trash:t.trash},on:{push:t.push}})],1),n("div",{staticClass:"w-3/4 p-1 m-1"},t._l(t.selected,function(e){return n("div",{key:e.key,staticClass:"mb-4"},[e.edit?n("note-edit",{attrs:{note:e},on:{push:t.push,remove:t.remove}}):n("note-view",{attrs:{note:e},on:{edit:t.edit,close:t.close}})],1)}),0)]),n("notes-footer",{attrs:{notes:t.notes}})],1)},c=[],u=(n("28a5"),n("20d6"),n("7514"),n("55dd"),n("8e6e"),n("456d"),n("bd86"));function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(n,!0).forEach(function(e){Object(u["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var f=function(t){return p({},t,{edit:t.edit,created:t.created?new Date(t.created):new Date,updated:t.updated?new Date(t.updated):null})},h=function(t){var e=localStorage.getItem(t),n=JSON.parse(e)||[];if(e)return n.map(function(t){return f(t)})},m=function(t,e){return localStorage.setItem(t,JSON.stringify(e))},v=function(){return[f({title:" Getting Started",text:"Hello, welcome to #Checkpoints, your personal #knowledge wiki!\nEdit and list here the start content, it will be your home page.\n - Tips and treats here: #Checkpoints;\n - https://github.com/19WAS85/checkpoints"}),f({title:"Checkpoints",text:"> Client hash-link based personal wiki using markdown and local-storage.\n### Tricks\n - Create rich text, list, images, tables and others using [markdown](https://guides.github.com/features/mastering-markdown/);\n - Click or #create simple `#hash` or `[Markdown Links](#hash)` to create related content;\n - Archive is character sorted, use prefixes to group them;\n - Double click at item header is a shortcut to edit;\n - The first archive item is your default home;"})]},b={parse:f,save:m,load:h,start:v};n("6b54"),n("3b2b");function g(t){var e=t&&t.length&&t.length>0;if(!e)return null;var n="àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;",o="aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------",r=new RegExp(n.split("").join("|"),"g");return t.toString().toLowerCase().replace(/\s+/g,"-").replace(r,function(t){return o.charAt(n.indexOf(t))}).replace(/&/g,"-and-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}var x="checkpoints.ARCHIVE",y="checkpoints.TRASH",k=64,_=b.load(x)||[],w=b.load(y)||[],C=b.parse,O=function(t){return _.find(function(e){return e.key===t})},j=function(){return _},D=function(){return w},$=function(){b.save(x,_),b.save(y,w)},S=function(t){t.updated=new Date;var e=_.findIndex(function(e){return e.key===t.key});return e>-1?_[e]=t:_.push(t),_.sort(function(t,e){return t.title.toLowerCase()>e.title.toLowerCase()?1:-1}),$(),t},E=function(t){var e=t.key,n=t.title,o=t.text,r=t.created,s=g(e||n).substring(0,k);return S(C({key:s,title:n,text:o,created:r}))},N=function(t,e){var n=O(t);n&&(n.key=e)},P=function(t){var e=_.findIndex(function(e){return e.key===t});e<0||(_[e].deleted=new Date,w.push(_[e]),_.splice(e,1),$())};0===_.length&&b.start().forEach(function(t){return E(t)});var L={create:C,find:O,list:j,trash:D,push:E,changeKey:N,remove:P},I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"p-4 rounded shadow",attrs:{id:t.$options.name}},[n("header",{staticClass:"flex"},[t._m(0),n("div",{staticClass:"flex-1 text-white text-right"},[n("button",{staticClass:"py-1 px-2 rounded shadow bg-green-500 text-xs",attrs:{"data-hotkey":"n"},on:{click:function(e){t.$emit("create",t.ymdFormat(new Date))}}},[t._v("\n        Create\n      ")])])]),n("ul",{staticClass:"mt-2 list-disc list-inside text-sm"},t._l(t.notes,function(e){return n("li",{key:e.key},[n("a",{staticClass:"cursor-pointer text-blue-500",attrs:{href:"#"+e.key},on:{click:function(n){return t.$emit("select",e)}}},[t._v("\n        "+t._s(e.title)+"\n      ")])])}),0)])},T=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-1 flex-1 text-sm"},[n("h1",{staticClass:"inline-block font-bold"},[t._v("Archive")])])}],A={name:"notes-archive",props:{notes:Array}},J=A,R=n("2877"),H=Object(R["a"])(J,I,T,!1,null,null,null),M=H.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.note?n("section",{staticClass:"relative p-4 rounded shadow",attrs:{id:t.note.key}},[n("header",{on:{dblclick:function(e){return t.$emit("edit",t.note)}}},[n("h1",{staticClass:"font-bold text-xl"},[t._v(t._s(t.note.title))]),n("div",{staticClass:"text-xs text-gray-500"},[t._v("\n      "+t._s(t.note.created.toLocaleDateString())+" •\n      #"+t._s(t.note.key)+" •\n      "),n("button",{staticClass:"underline",attrs:{"data-hotkey":"e"},on:{click:function(e){return t.$emit("edit",t.note)}}},[t._v("\n        Edit\n      ")]),t._v(" •\n      "),n("button",{staticClass:"underline",on:{click:t.exportNote}},[t._v("Export")]),t.exportData?n("input",{directives:[{name:"model",rawName:"v-model",value:t.exportData,expression:"exportData"}],ref:"exportDataInput",staticClass:"ml-2 font-mono",attrs:{type:"text",onfocus:"this.select()"},domProps:{value:t.exportData},on:{input:function(e){e.target.composing||(t.exportData=e.target.value)}}}):t._e()])]),n("div",{staticClass:"note-content my-2 text-gray-800 text-sm",domProps:{innerHTML:t._s(t.md(t.note.text))}}),n("button",{staticClass:"absolute top-0 right-0 mt-4 mr-4 py-1 px-2 rounded shadow bg-gray-500 text-xs text-white",attrs:{"data-hotkey":"c"},on:{click:function(e){return t.$emit("close",t.note)}}},[t._v("\n    Close\n  ")])]):t._e()},F=[],K=n("d4cd"),U=n.n(K),V=n("cdd4"),q=n.n(V),B={html:!0,linkify:!0},G=new U.a(B).use(q.a),W=G.renderer.rules;G.renderer.rules.link_open=function(t,e,n,o,r){var s=t[e].attrIndex("target");return s<0?t[e].attrPush(["target","_blank"]):t[e].attrs[s][1]="_blank",r.renderToken(t,e,n)},W.hashtag_open=function(t,e){return'<a href="#'.concat(t[e].content.toLowerCase(),'">')},W.hashtag_text=function(t,e){return t[e].content},W.hashtag_close=function(t,e){return"</a>"};var Q=G,X={name:"note-view",props:{note:Object},methods:{md:function(t){return t?Q.render(t):null},exportNote:function(){var t=this;this.exportData=JSON.stringify(this.note),r["a"].nextTick(function(){return t.$refs.exportDataInput.focus()})}},data:function(){return{exportData:null}}},Y=X,Z=(n("ab8d"),Object(R["a"])(Y,z,F,!1,null,null,null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.note?n("section",{attrs:{id:t.$options.name+"-"+t.note.key}},[n("div",{staticClass:"text-sm p-4 rounded shadow"},[n("div",{staticClass:"flex mb-2"},[n("div",{staticClass:"w-1/2 pr-1"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.note.title,expression:"note.title"}],ref:"titleInput",staticClass:"border border-gray-200 rounded py-1 px-2 w-full",attrs:{type:"text",placeholder:"Title",onfocus:"this.select()"},domProps:{value:t.note.title},on:{blur:t.updateLink,input:function(e){e.target.composing||t.$set(t.note,"title",e.target.value)}}})]),n("div",{staticClass:"w-1/2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.link,expression:"link"}],staticClass:"border border-gray-200 text-gray-500 font-mono rounded py-1 px-2 w-full",attrs:{type:"text",onfocus:"this.select()",placeholder:"Hashtag Name (Link)"},domProps:{value:t.link},on:{blur:t.updateLink,input:function(e){e.target.composing||(t.link=e.target.value)}}})])]),n("div",{staticClass:"mb-1"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.note.text,expression:"note.text"}],staticClass:"border border-gray-200 rounded py-1 px-2 w-full",attrs:{rows:"10",placeholder:"Text"},domProps:{value:t.note.text},on:{input:function(e){e.target.composing||t.$set(t.note,"text",e.target.value)}}})]),n("div",{staticClass:"flex"},[n("div",{staticClass:"w-1/2 text-xs text-gray-500"},[t._v("\n        Created "+t._s(t.note.created.toLocaleString())+" "),n("br"),t._v("\n        Updated "+t._s(t.note.updated?t.note.updated.toLocaleString():"Never")+"\n      ")]),n("div",{staticClass:"w-1/2 text-right"},[n("button",{staticClass:"py-2 px-4 mr-2 rounded shadow bg-green-500 text-white text-xs",attrs:{"data-hotkey":"d"},on:{click:function(e){return t.$emit("push",t.note,t.link)}}},[t._v("\n          Done\n        ")]),n("button",{staticClass:"py-1 px-2 underline text-gray-500 text-xs",attrs:{"data-hotkey":"r"},on:{click:t.remove}},[t._v("\n          Remove\n        ")])])])])]):t._e()},nt=[],ot=(n("b54a"),{name:"note-edit",props:{note:Object},methods:{updateLink:function(){this.link&&this.updated||(this.link=g(this.note.title))},remove:function(){var t="Remove ".concat(this.note.title,"?");confirm(t)&&this.$emit("remove",this.note)}},data:function(){return{link:null}},mounted:function(){this.link=this.note.key,this.note.updated||this.$refs.titleInput.focus()}}),rt=ot,st=Object(R["a"])(rt,et,nt,!1,null,null,null),at=st.exports,it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"mt-2 text-gray-500 text-xs text-center",attrs:{id:t.$options.name}},[t._m(0)])},lt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n    Keyboard Shortcuts:\n    "),n("span",{staticClass:"inline-block"},[n("kbd",{staticClass:"p-1 ml-2 rounded bg-gray-100 font-bold"},[t._v("N")]),t._v(" Create\n      "),n("kbd",{staticClass:"p-1 ml-2 rounded bg-gray-100 font-bold"},[t._v("E")]),t._v(" Edit\n      "),n("kbd",{staticClass:"p-1 ml-2 rounded bg-gray-100 font-bold"},[t._v("R")]),t._v(" Remove\n      "),n("kbd",{staticClass:"p-1 ml-2 rounded bg-gray-100 font-bold"},[t._v("D")]),t._v(" Done\n      "),n("kbd",{staticClass:"p-1 ml-2 rounded bg-gray-100 font-bold"},[t._v("C")]),t._v(" Close\n    ")])])}],ct={name:"notes-footer",props:{notes:Array},data:function(){return{jsonData:null}}},ut=ct,dt=Object(R["a"])(ut,it,lt,!1,null,null,null),pt=dt.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"p-4 rounded shadow",attrs:{id:t.$options.name}},[n("section",{attrs:{id:t.$options.name+"-export"}},[t._m(0),t.notes?n("ul",{staticClass:"text-xs text-gray-500 list-disc list-inside"},[n("li",[n("button",{staticClass:"underline",on:{click:function(e){return t.show(t.notes)}}},[t._v("\n          Export Archived ("+t._s(this.notes.length)+")\n        ")])]),n("li",[n("button",{staticClass:"underline",on:{click:function(e){return t.show(t.trash)}}},[t._v("\n          Export Removed ("+t._s(this.trash.length)+")\n        ")])]),n("li",[n("button",{staticClass:"underline",on:{click:t.importNotes}},[t._v("\n          Import Notes\n        ")])])]):t._e(),t.jsonData||t.importing?n("div",{staticClass:"text-gray-500"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.jsonData,expression:"jsonData"}],staticClass:"w-full font-mono text-xs mt-2",attrs:{placeholder:"Copy Database and Press Import",id:"json-data",rows:"10",onfocus:"this.select()"},domProps:{value:t.jsonData},on:{input:function(e){e.target.composing||(t.jsonData=e.target.value)}}}),n("button",{staticClass:"underline text-xs",on:{click:function(e){t.importing=t.jsonData=null}}},[t._v("\n        Close\n      ")])]):t._e()])])},ht=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",{staticClass:"py-2 font-bold text-sm"},[t._v("Local Database")])])}],mt={name:"notes-info",props:{notes:Array,trash:Array},methods:{importNotes:function(){var t=this;if(this.importing){var e=JSON.parse(this.jsonData);e.forEach(function(e){return t.$emit("push",e)})}else this.jsonData=null;this.importing=!this.importing},show:function(t){this.jsonData=JSON.stringify(t,null,2),r["a"].nextTick(function(){return document.getElementById("json-data").focus()})}},data:function(){return{jsonData:null,importing:null}}},vt=mt,bt=Object(R["a"])(vt,ft,ht,!1,null,null,null),gt=bt.exports,xt=window,yt=xt.location,kt={name:"notes-dashboard",components:{NotesArchive:M,NoteView:tt,NoteEdit:at,NotesFooter:pt,NotesInfo:gt},methods:{edit:function(t){t.edit=!0},select:function(t){var e=this.selected.find(function(e){return e.key===t.key});e&&this.removeSelected(t.key),this.selected.unshift(t),yt.hash=t.key},removeSelected:function(t){var e=this.selected.findIndex(function(e){return e.key===t});e>-1&&this.selected.splice(e,1)},close:function(t){this.removeSelected(t.key),window.scrollTo(0,0);var e=this.selected[0];yt.hash=e?e.key:""},create:function(t){if(t){var e=g(t);this.selected.unshift(L.create({key:e,title:t,edit:!0}))}},push:function(t,e){(t.title||t.text)&&(e&&t.key&&t.key!==e&&(L.changeKey(t.key,e),t.key=e),t.edit=!1,L.push(t),yt.hash=t.key)},remove:function(t){L.remove(t.key),this.close(t)},addHashListener:function(){var t=this;window.addEventListener("hashchange",function(e){var n=e.newURL.split("#")[1],o=L.find(n);o?t.select(o):t.create(n)},!1)}},data:function(){return{selected:[],notes:null,trash:null}},mounted:function(){this.notes=L.list(),this.trash=L.trash();var t=yt.hash.substring(1),e=t?L.find(t):this.notes[0];e?this.selected.unshift(e):this.create(t),this.addHashListener()}},_t=kt,wt=Object(R["a"])(_t,l,c,!1,null,null,null),Ct=wt.exports,Ot={name:"checkpoints-main",components:{NotesDashboard:Ct},data:function(){return{version:i["a"]}}},jt=Ot,Dt=(n("beba"),Object(R["a"])(jt,s,a,!1,null,null,null)),$t=Dt.exports;r["a"].config.productionTip=!1,r["a"].mixin({methods:{ymdFormat:function(t){return t.toJSON().slice(0,19).replace("T"," ")}},mounted:function(){var t=document.querySelectorAll("[data-hotkey]"),e=!0,n=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(e=(s=a.next()).done);e=!0){var i=s.value;Object(o["b"])(i),Object(o["a"])(i)}}catch(l){n=!0,r=l}finally{try{e||null==a.return||a.return()}finally{if(n)throw r}}}}),new r["a"]({render:function(t){return t($t)}}).$mount("#checkpoints-app")},"7e0c":function(t,e,n){},"90db":function(t,e,n){},9224:function(t){t.exports=JSON.parse('{"a":"0.1.7"}')},ab8d:function(t,e,n){"use strict";var o=n("90db"),r=n.n(o);r.a},beba:function(t,e,n){"use strict";var o=n("7e0c"),r=n.n(o);r.a}});
//# sourceMappingURL=app.884d163d.js.map