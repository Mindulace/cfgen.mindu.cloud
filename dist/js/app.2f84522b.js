(function(e){function t(t){for(var r,l,s=t[0],i=t[1],c=t[2],u=0,d=[];u<s.length;u++)l=s[u],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&d.push(o[l][0]),o[l]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var i=n[s];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},a=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var p=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"13c5":function(e,t,n){"use strict";var r=n("2f52"),o=n.n(r);o.a},"1fef":function(e,t,n){},"2f52":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r,o,a=n("2b0e"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),n("index")],1)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar navbar-dark bg-dark color-white"},[n("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[e._v(" cfgen.mindu.cloud ")])])}],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-wrapper mt-5 container"},[n("div",{staticClass:"row justify-content-between"},[n("div",{staticClass:"col-5 bg-white rounded"},[n("div",{staticClass:"page-header mt-3 position-relative"},[n("h1",{staticClass:"mb-0"},[e._v("Custom Fields")]),n("a",{staticClass:"add-button btn btn-primary position-absolute",attrs:{href:"#",role:"button"},on:{click:function(t){return e.onClick()}}},[e._v("Add")])]),n("hr"),n("creator")],1),n("div",{staticClass:"col-6 bg-white rounded"},[e._m(0),n("hr"),n("reader")],1)])])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-header mt-3"},[n("h1",{staticClass:"mb-0"},[e._v("Viewer")])])}],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"creator-wrapper"},e._l(this.$store.getters.getCustomFields,(function(e,t){return n("div",{key:t},[n("item",{staticClass:"p-3 rounded creator-item",attrs:{customField:e,index:t}})],1)})),0)},u=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"customfield-item-wrapper mb-3"},[n("div",{staticClass:"position-relative"},[n("a",{staticClass:"remove-button btn btn-danger position-absolute",attrs:{href:"#",role:"button"},on:{click:function(t){return e.onClick()}}},[e._v("Remove")]),e._l(e.configuration,(function(t,r){return n(t.type,{key:r,tag:"component",attrs:{propsData:t.propsData,customField:e.customField}})}))],2)])},f=[],m=(n("4160"),n("159b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"option-element-wrapper"},["text"==e.propsData.type?n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"text"}},[e._v(e._s(e.propsData.label))]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.customField.values[e.propsData.property],expression:"customField.values[propsData.property]"}],staticClass:"form-control",attrs:{type:"text",id:"text"+e._uid,placeholder:e.propsData.placeholder},domProps:{value:e.customField.values[e.propsData.property]},on:{input:function(t){t.target.composing||e.$set(e.customField.values,e.propsData.property,t.target.value)}}})]):e._e(),"select"==e.propsData.type?n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"select"}},[e._v(e._s(e.propsData.label))]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.customField.values[e.propsData.property],expression:"customField.values[propsData.property]"}],staticClass:"custom-select",attrs:{id:"select"+e._uid},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.customField.values,e.propsData.property,t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"",selected:"",disabled:""}},[e._v(e._s(e.propsData.placeholder))]),e._l(e.propsData.options,(function(t,r){return n("option",{key:r,domProps:{value:t.value}},[e._v(e._s(t.label))])}))],2)]):e._e()])}),v=[],h={name:"optionElement",props:["customField","propsData"]},b=h,y=n("2877"),g=Object(y["a"])(b,m,v,!1,null,null,null),C=g.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header-element-wrapper"},[n("div",{staticClass:"form-group"},[n("h3",[e._v(e._s(e.propsData.label))]),n("hr"),e._l(e.propsData.children,(function(t,r){return n(t.type,{key:r,tag:"component",staticClass:"pl-3",attrs:{propsData:t.propsData,customField:e.customField}})}))],2)])},E=[],x={name:"headerElement",components:{optionElement:C},props:["customField","propsData"]},F=x,w=Object(y["a"])(F,_,E,!1,null,null,null),D=w.exports,T={name:"item",props:["customField","index"],components:{optionElement:C,headerElement:D},methods:{onClick:function(){this.$store.commit("removeCustomField",this.customField)},getConfiguration:function(e){var t=this,n=[];return e.forEach((function(e){"optionElement"==e.type?n.push({type:e.type,propsData:{type:e.config.type,options:e.config.options,label:e.config.label,property:e.config.property,placeholder:e.config.placeholder}}):"headerElement"==e.type&&n.push({type:e.type,propsData:{label:e.label,children:t.getConfiguration(e.children)}})})),n}},computed:{configuration:function(){return this.getConfiguration(this.customField.configuration)}}},O=T,j=(n("13c5"),Object(y["a"])(O,d,f,!1,null,null,null)),$=j.exports,k={name:"customFieldCreator",components:{item:$}},S=k,P=(n("f5da"),Object(y["a"])(S,p,u,!1,null,null,null)),B=P.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"reader-wrapper",staticClass:"reader-wrapper"},[n("codeViewer",{attrs:{code:e.customFields}})],1)},A=[],L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"codeWrapper",staticClass:"code-wrapper p-1 bg-light rounded border border-dark"},[n("code",[n("pre",{staticClass:"mb-0"},[e._v(e._s(e.code))])])])},J=[],M={name:"codeViewer",props:["code"],methods:{handleScroll:function(){var e=this.$refs.codeWrapper;if(e.offsetTop-20<window.pageYOffset){var t=window.pageYOffset-e.offsetTop+20;e.style.transform="translateY(".concat(t,"px)")}else e.style.transform=""}},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},mounted:function(){this.$refs.codeWrapper.style.maxHeight="".concat(window.innerHeight/1.4,"px")}},N=M,H=(n("a5cc"),Object(y["a"])(N,L,J,!1,null,null,null)),V=H.exports,I=n("9eef"),W=n.n(I),Y={name:"reader",methods:{convertToPHP:function(e){return W.a.arrify(JSON.stringify(e),{prettify:!0}).replaceAll("array(","[").replaceAll(")","]").replaceAll("\t","    ")}},computed:{customFields:{get:function(){var e=[];return this.$store.getters.getCustomFields.forEach((function(t){t.isValid()&&e.push(t.getJson())})),this.convertToPHP(e)}}},components:{codeViewer:V}},R=Y,X=(n("6fd2"),Object(y["a"])(R,G,A,!1,null,null,null)),q=X.exports,z={name:"index",components:{creator:B,reader:q},methods:{onClick:function(){this.$store.commit("addCustomField")}},data:function(){return{customFields:[]}},mounted:function(){this.onClick()}},K=z,Q=(n("c9c1"),Object(y["a"])(K,i,c,!1,null,null,null)),U=Q.exports,Z=(n("c975"),n("a434"),n("2f62")),ee=(n("b0c0"),n("d3b7"),n("ddb0"),{name:"customField",methods:{isValid:function(){return!0},getJson:function(){return this.properties},getConfiguration:function(){return this.configuration}},data:function(){return{configuration:[{type:"headerElement",label:"CustomField",children:[{type:"optionElement",config:{type:"text",placeholder:"Enter name",property:"name",label:"Name"}},{type:"optionElement",config:{type:"select",placeholder:"Select type",property:"type",label:"Type",options:[{value:"CustomFieldTypes::BOOL",label:"Boolean"},{value:"CustomFieldTypes::DATETIME",label:"Date/Time"},{value:"CustomFieldTypes::FLOAT",label:"Float"},{value:"CustomFieldTypes::INT",label:"Integer"},{value:"CustomFieldTypes::JSON",label:"JSON"},{value:"CustomFieldTypes::TEXT",label:"Text"},{value:"CustomFieldTypes::HTML",label:"HTML"},{value:"CustomFieldTypes::SELECT",label:"Select"}]}},{type:"headerElement",label:"Label",children:[{type:"optionElement",config:{type:"text",placeholder:"Enter german label",property:"label.deDE",label:"de-DE"}},{type:"optionElement",config:{type:"text",placeholder:"Enter english label",property:"label.enGB",label:"en-GB"}}]},{type:"headerElement",label:"helpText",children:[{type:"optionElement",config:{type:"text",placeholder:"Enter german helptext",property:"helpText.deDE",label:"de-DE"}},{type:"optionElement",config:{type:"text",placeholder:"Enter english helptext",property:"helpText.enGB",label:"en-GB"}}]}]}],values:{name:"",type:"","label.deDE":"","label.enGB":"","helpText.deDE":"","helpText.enGB":""}}},computed:{properties:function(){return{name:this.values.name,type:W.a.literal(this.values.type),config:{label:{"de-DE":this.values["label.deDE"],"en-GB":this.values["label.enGB"]},helpText:{"de-DE":this.values["helpText.deDE"],"en-GB":this.values["helpText.enGB"]}}}}}}),te=ee,ne=Object(y["a"])(te,r,o,!1,null,null,null),re=ne.exports;a["a"].use(Z["a"]);var oe,ae,le=new Z["a"].Store({state:{customFields:[]},mutations:{addCustomField:function(e,t){t?e.customFields.push(t):e.customFields.push(new(a["a"].extend(re)))},removeCustomField:function(e,t){var n=e.customFields.indexOf(t);return n>-1&&(e.customFields.splice(n,1),!0)}},getters:{getCustomFields:function(e){return e.customFields}}}),se=le,ie=Object(y["a"])(se,oe,ae,!1,null,null,null),ce=ie.exports,pe={name:"App",store:ce,components:{index:U}},ue=pe,de=(n("034f"),Object(y["a"])(ue,l,s,!1,null,null,null)),fe=de.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(fe)}}).$mount("#app")},"6fd2":function(e,t,n){"use strict";var r=n("1fef"),o=n.n(r);o.a},"85ec":function(e,t,n){},9290:function(e,t,n){},"956c":function(e,t,n){},"97a0":function(e,t,n){},a5cc:function(e,t,n){"use strict";var r=n("97a0"),o=n.n(r);o.a},c9c1:function(e,t,n){"use strict";var r=n("956c"),o=n.n(r);o.a},f5da:function(e,t,n){"use strict";var r=n("9290"),o=n.n(r);o.a}});
//# sourceMappingURL=app.2f84522b.js.map