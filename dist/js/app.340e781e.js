(function(e){function t(t){for(var n,r,a=t[0],o=t[1],l=t[2],u=0,d=[];u<a.length;u++)r=a[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);p&&p(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),i()}function i(){for(var e,t=0;t<c.length;t++){for(var i=c[t],n=!0,a=1;a<i.length;a++){var o=i[a];0!==s[o]&&(n=!1)}n&&(c.splice(t--,1),e=r(r.s=i[0]))}return e}var n={},s={app:0},c=[];function r(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=n,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],o=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var p=o;c.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},5033:function(e){e.exports=JSON.parse('[{"title":"Подключение","variants":[{"title":"Стандартное подключение","description":"Техник сделает аккуратное техническое отверстие при необходимости (бесплатно)\\nБесплатная настройка оборудования (роутер, приставка)\\nДемонстрация работы ЛК пользователю, помощь при оплате банковской картой","color":"#CCCCCC","price_default":0,"options":[{"title":"Протяжка кабеля","price":400},{"title":"8 жил","price":500}],"select":[]},{"title":"LUX подключение","description":"Техник аккуратно, сохранив текущий ремонт, проложит и спрячет кабель в плинтусах, потолке и т.д.\\nПодключение розеток, разводка кабеля по квартире, предоставление необходимого количества патч кордов.","color":"#2FCB5A","price_default":500,"options":[],"select":[{"title":"Цена подключения изменяется в зависимости от количества комнат:","items":[{"title":"1 комната","price":0},{"title":"2 комнаты","price":500},{"title":"коттедж","price":5000}]}]}]},{"title":"Роутер","variants":[{"title":"Keenetic Lite III","description":"Интернет-центр для выделенной линии Ethernet с точкой доступа Wi-Fi 300 Мбит/с, управляемым коммутатором Ethernet и переключателем режимов работы","color":"#CCCCCC","price_default":2000,"options":[],"select":[]},{"title":"DLink DIR-615","description":"Используя беспроводной маршрутизатор DIR-615, Вы сможете быстро организовать беспроводную сеть дома и в офисе, предоставив доступ к сети Интернет компьютерам и мобильным устройствам практически в любой точке (в зоне действия беспроводной сети)","color":"#2FCB5A","price_default":1000,"options":[],"select":[]},{"title":"Не нужно","description":"Уже есть роутер","color":"#DF4140","price_default":0,"options":[],"select":[]}]}]')},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"wrapper"},[e._l(e.jsonData,(function(t,n){return i("app-step",{key:n,attrs:{stepIndex:n,title:t.title,variants:t.variants},on:{updateApp:e.onUpdatePrice}})})),i("app-res",{attrs:{sum:e.sum}})],2)])},c=[],r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"step"},[i("div",{staticClass:"step__title"},[e._v(e._s(e.title))]),i("div",{staticClass:"step__content"},e._l(e.variants,(function(t,n){return i("div",{key:n,staticClass:"step__variant"},[i("input",{staticClass:"item__variantRadio",attrs:{type:"radio",name:"variant"+e.stepIndex,id:"step"+e.stepIndex+"var"+n},domProps:{value:e.variants[n].options.length>0?e.sumChecked:e.variants[n].select.length>0?e.select:t.price_default}}),i("label",{staticClass:"item",attrs:{for:"step"+e.stepIndex+"var"+n},on:{click:function(i){e.clickVariant(e.variants[n].options.length>0?e.sumChecked:e.variants[n].select.length>0?e.select:t.price_default,e.stepIndex)}}},[i("div",{staticClass:"item__header"},[i("div",{staticClass:"item__title"},[e._v(e._s(t.title))]),i("div",{staticClass:"item__price"},[e._v(" "+e._s(e.variants[n].options.length>0?e.sumChecked:e.variants[n].select.length>0?e.select:t.price_default)+" ₽ ")])]),i("div",{staticClass:"item__content"},[i("section",{staticClass:"item__left"},[i("p",{staticClass:"item__desc"},[e._v(e._s(t.description))])]),i("section",{staticClass:"item__right"},[e._l(t.options,(function(t,s){return i("app-options",{key:s,attrs:{option:t,index:s,value:t.price,variantKey:n},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}})})),e._l(t.select,(function(t,n){return i("app-select",{key:n,attrs:{select:t},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}})})),i("div",{staticClass:"item__btn"},[e._v("Выбрать")])],2)])])])})),0)])},a=[],o=(i("84a4"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("p",{staticClass:"item__text"},[e._v(e._s(e.select.title))]),i("select",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],staticClass:"item__select",on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.model=t.target.multiple?i:i[0]}}},e._l(e.select.items,(function(t){return i("option",{key:t.title,attrs:{price:t.price},domProps:{value:t.price}},[e._v(e._s(t.title))])})),0)])}),l=[],p={props:["select","checked"],model:{prop:"checked",event:"change"},computed:{model:{get:function(){return this.checked},set:function(e){this.$emit("change",e)}}}},u=p,d=i("2877"),v=Object(d["a"])(u,o,l,!1,null,null,null),m=v.exports,f=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],staticClass:"item__checkbox",attrs:{type:"checkbox",name:"option"+e.index,id:"option"+e.index},domProps:{value:e.option.price,checked:Array.isArray(e.model)?e._i(e.model,e.option.price)>-1:e.model},on:{change:function(t){var i=e.model,n=t.target,s=!!n.checked;if(Array.isArray(i)){var c=e.option.price,r=e._i(i,c);n.checked?r<0&&(e.model=i.concat([c])):r>-1&&(e.model=i.slice(0,r).concat(i.slice(r+1)))}else e.model=s}}}),i("label",{staticClass:"item__checkbox-label",attrs:{for:"option"+e.index}},[i("div",{staticClass:"item__checkbox-text"},[e._v(e._s(e.option.title))])])])},h=[],_={props:["option","index","variantKey","checked"],model:{prop:"checked",event:"change"},computed:{model:{get:function(){return this.checked},set:function(e){this.$emit("change",e)}}}},C=_,k=Object(d["a"])(C,f,h,!1,null,null,null),b=k.exports,x={components:{AppOptions:b,AppSelect:m},props:["title","variants","stepIndex","price","activeStep"],data:function(){return{checked:[],select:0,sumChecked:0}},model:{prop:"activeStep",event:"changeActive"},methods:{clickVariant:function(e,t){this.$emit("updateApp",{index:t,price:e}),this.activeStep=!0}},watch:{checked:function(){this.sumChecked=0;for(var e=0;e<this.checked.length;e++)this.sumChecked+=this.checked[e];return this.sumChecked}}},g=x,y=Object(d["a"])(g,r,a,!1,null,null,null),O=y.exports,P=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"res"},[i("div",{staticClass:"res__title"},[e._v("Итого к оплате")]),i("div",{staticClass:"res__sum"},[e._v(e._s(e.sum)+" ₽")])])},j=[],w=(i("d32d"),{props:["sum"]}),S=w,A=Object(d["a"])(S,P,j,!1,null,null,null),I=A.exports,$=(i("db43"),i("5033")),E={data:function(){return{jsonData:$,masPrice:[],sum:0}},methods:{onUpdatePrice:function(e){this.masPrice[e.index]=e.price,this.onUpdateSum()},onUpdateSum:function(){this.sum=0;for(var e=0;e<this.masPrice.length;e++)this.masPrice[e]?this.sum+=this.masPrice[e]:this.sum+=0}},components:{appStep:O,appRes:I}},D=E,U=Object(d["a"])(D,s,c,!1,null,null,null),F=U.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(F)}}).$mount("#app")},"84a4":function(e,t,i){},d32d:function(e,t,i){},db43:function(e,t,i){}});
//# sourceMappingURL=app.340e781e.js.map