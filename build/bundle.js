var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function a(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function o(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function d(){return u(" ")}function v(t,e,n,a){return t.addEventListener(e,n,a),()=>t.removeEventListener(e,n,a)}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t,e){e=""+e,t.data!==e&&(t.data=e)}function h(t,e){(null!=e||t.value)&&(t.value=e)}function _(t,e,n,a){t.style.setProperty(e,n,a?"important":"")}function m(t,e){for(let n=0;n<t.options.length;n+=1){const a=t.options[n];if(a.__value===e)return void(a.selected=!0)}}let g;function b(t){g=t}const y=[],D=[],S=[],x=[],$=Promise.resolve();let q=!1;function F(t){S.push(t)}let k=!1;const A=new Set;function C(){if(!k){k=!0;do{for(let t=0;t<y.length;t+=1){const e=y[t];b(e),E(e.$$)}for(y.length=0;D.length;)D.pop()();for(let t=0;t<S.length;t+=1){const e=S[t];A.has(e)||(A.add(e),e())}S.length=0}while(y.length);for(;x.length;)x.pop()();q=!1,k=!1,A.clear()}}function E(t){if(null!==t.fragment){t.update(),a(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(F)}}const O=new Set;function P(t,e){-1===t.$$.dirty[0]&&(y.push(t),q||(q=!0,$.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function R(s,o,l,i,u,d,v=[-1]){const f=g;b(s);const p=o.props||{},h=s.$$={fragment:null,ctx:null,props:d,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:v};let _=!1;if(h.ctx=l?l(s,p,(t,e,...n)=>{const a=n.length?n[0]:e;return h.ctx&&u(h.ctx[t],h.ctx[t]=a)&&(h.bound[t]&&h.bound[t](a),_&&P(s,t)),e}):[],h.update(),_=!0,a(h.before_update),h.fragment=!!i&&i(h.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);h.fragment&&h.fragment.l(t),t.forEach(c)}else h.fragment&&h.fragment.c();o.intro&&((m=s.$$.fragment)&&m.i&&(O.delete(m),m.i(y))),function(t,n,s){const{fragment:o,on_mount:l,on_destroy:c,after_update:i}=t.$$;o&&o.m(n,s),F(()=>{const n=l.map(e).filter(r);c?c.push(...n):a(n),t.$$.on_mount=[]}),i.forEach(F)}(s,o.target,o.anchor),C()}var m,y;b(f)}function w(e){let n,a,r;return{c(){n=i("br"),a=d(),r=i("tr"),r.textContent="loading..."},m(t,e){l(t,n,e),l(t,a,e),l(t,r,e)},p:t,d(t){t&&c(n),t&&c(a),t&&c(r)}}}function L(t){let e,n,a,r,s,v,h,_,m,g,b,y,D,S,x,$,q,F,k,A,C=T({en:"Predicted Cases:",ab:":",af:"تخمین مریزان",tr:":",dt:"Voorspelde gevallen:"},t[4])+"",E=W(t[2],t[5])+"",O=T({en:"Predicted Recoveries:",ab:"Rikuperimet e parashikuara:",af:"تخمین صحت یافته",tr:"İyileşen hasta saysı:",dt:"Hersteld (voorspelt):"},t[4])+"",P=W(t[0],t[5])+"",R=T({en:"Predicted Deaths:",ab:":",af:"تخمین مرگ ها",tr:":",dt:"Doden (voorspelt):"},t[4])+"",w=W(t[1],t[5])+"";return{c(){e=i("tr"),n=i("td"),a=u(C),r=d(),s=i("td"),v=u(E),h=d(),_=i("tr"),m=i("td"),g=u(O),b=d(),y=i("td"),D=u(P),S=d(),x=i("tr"),$=i("td"),q=u(R),F=d(),k=i("td"),A=u(w),f(n,"class","style svelte-tqvnvu"),f(s,"class","style svelte-tqvnvu"),f(e,"class","style svelte-tqvnvu"),f(m,"class","style svelte-tqvnvu"),f(y,"class","style svelte-tqvnvu"),f(_,"class","style svelte-tqvnvu"),f($,"class","style svelte-tqvnvu"),f(k,"class","style svelte-tqvnvu"),f(x,"class","style svelte-tqvnvu")},m(t,c){l(t,e,c),o(e,n),o(n,a),o(e,r),o(e,s),o(s,v),l(t,h,c),l(t,_,c),o(_,m),o(m,g),o(_,b),o(_,y),o(y,D),l(t,S,c),l(t,x,c),o(x,$),o($,q),o(x,F),o(x,k),o(k,A)},p(t,e){16&e&&C!==(C=T({en:"Predicted Cases:",ab:":",af:"تخمین مریزان",tr:":",dt:"Voorspelde gevallen:"},t[4])+"")&&p(a,C),36&e&&E!==(E=W(t[2],t[5])+"")&&p(v,E),16&e&&O!==(O=T({en:"Predicted Recoveries:",ab:"Rikuperimet e parashikuara:",af:"تخمین صحت یافته",tr:"İyileşen hasta saysı:",dt:"Hersteld (voorspelt):"},t[4])+"")&&p(g,O),33&e&&P!==(P=W(t[0],t[5])+"")&&p(D,P),16&e&&R!==(R=T({en:"Predicted Deaths:",ab:":",af:"تخمین مرگ ها",tr:":",dt:"Doden (voorspelt):"},t[4])+"")&&p(q,R),34&e&&w!==(w=W(t[1],t[5])+"")&&p(A,w)},d(t){t&&c(e),t&&c(h),t&&c(_),t&&c(S),t&&c(x)}}}function I(e){let n,r,s,g,b,y,D,S,x,$,q,k,A,C,E,O,P,R,I,W,V,G,H,B,N,j,z,K,M,U,Y,J,Q,X=T({en:"OSWALD PREDICTOR",ab:"PARASHIKUESI OSWALD",af:"OSWALD تخمین کننده",tr:"OSWALD BELİRLEYİCİSİ",dt:"OSWALD PREDICTOR"},e[4])+"",Z=T({en:"Day:",ab:"Dita:",af:"روز",tr:"Gün:",dt:"Dag:"},e[4])+"",tt=!1,et=T({en:"For more information, click",ab:"Për më shumë informacion, kliko",af:"برای معلومات بیشتر ",tr:"Daha fazla bilgi için",dt:"Voor meer informatie, klik "},e[4])+"",nt=T({en:"here",ab:"këtu",af:"اینجا کلیک کنید",tr:"buraya Tıkla",dt:"hier"},e[4])+"";function at(){tt=!0,e[8].call(k)}function rt(t,e){return!0===t[3]?L:w}let st=rt(e),ot=st(e);return{c(){n=i("table"),r=i("tr"),s=i("td"),g=i("h1"),b=u(X),y=d(),D=i("tr"),S=i("td"),x=u(Z),$=d(),q=i("td"),k=i("input"),A=d(),ot.c(),C=d(),E=i("tr"),O=i("td"),P=i("select"),R=i("option"),R.textContent="Dutch",I=i("option"),I.textContent="English",W=i("option"),W.textContent="Shqip/Albanian",V=i("option"),V.textContent="Türkçe",G=i("option"),G.textContent="فارسی",H=d(),B=i("td"),N=d(),j=i("tr"),z=i("td"),K=i("h3"),M=u(et),U=d(),Y=i("a"),J=u(nt),f(s,"colspan","2"),f(s,"class","svelte-tqvnvu"),_(r,"text-align","center"),f(S,"class","style svelte-tqvnvu"),f(k,"type","number"),f(k,"placeholder","Day"),f(k,"class","svelte-tqvnvu"),f(q,"class","style svelte-tqvnvu"),f(D,"class","style svelte-tqvnvu"),R.__value="dt",R.value=R.__value,f(R,"class","svelte-tqvnvu"),I.__value="en",I.value=I.__value,f(I,"class","svelte-tqvnvu"),W.__value="ab",W.value=W.__value,f(W,"class","svelte-tqvnvu"),V.__value="tr",V.value=V.__value,f(V,"class","svelte-tqvnvu"),G.__value="fa",G.value=G.__value,f(G,"class","svelte-tqvnvu"),_(P,"height","50px"),f(P,"class","svelte-tqvnvu"),void 0===e[4]&&F(()=>e[9].call(P)),f(O,"class","svelte-tqvnvu"),f(B,"class","svelte-tqvnvu"),f(Y,"href","https://github.com/ElhamAryanpur/oswald"),f(z,"colspan","2"),f(z,"class","svelte-tqvnvu"),_(j,"text-align","center"),f(n,"class","svelte-tqvnvu")},m(t,c,i){l(t,n,c),o(n,r),o(r,s),o(s,g),o(g,b),o(n,y),o(n,D),o(D,S),o(S,x),o(D,$),o(D,q),o(q,k),h(k,e[5]),o(n,A),ot.m(n,null),o(n,C),o(n,E),o(E,O),o(O,P),o(P,R),o(P,I),o(P,W),o(P,V),o(P,G),m(P,e[4]),o(E,H),o(E,B),o(n,N),o(n,j),o(j,z),o(z,K),o(K,M),o(K,U),o(K,Y),o(Y,J),i&&a(Q),Q=[v(k,"input",at),v(P,"change",e[9])]},p(t,[e]){16&e&&X!==(X=T({en:"OSWALD PREDICTOR",ab:"PARASHIKUESI OSWALD",af:"OSWALD تخمین کننده",tr:"OSWALD BELİRLEYİCİSİ",dt:"OSWALD PREDICTOR"},t[4])+"")&&p(b,X),16&e&&Z!==(Z=T({en:"Day:",ab:"Dita:",af:"روز",tr:"Gün:",dt:"Dag:"},t[4])+"")&&p(x,Z),!tt&&32&e&&h(k,t[5]),tt=!1,st===(st=rt(t))&&ot?ot.p(t,e):(ot.d(1),ot=st(t),ot&&(ot.c(),ot.m(n,C))),16&e&&m(P,t[4]),16&e&&et!==(et=T({en:"For more information, click",ab:"Për më shumë informacion, kliko",af:"برای معلومات بیشتر ",tr:"Daha fazla bilgi için",dt:"Voor meer informatie, klik "},t[4])+"")&&p(M,et),16&e&&nt!==(nt=T({en:"here",ab:"këtu",af:"اینجا کلیک کنید",tr:"buraya Tıkla",dt:"hier"},t[4])+"")&&p(J,nt)},i:t,o:t,d(t){t&&c(n),ot.d(),a(Q)}}}function W(t,e=0){return Math.round(t.predict(e))}function T(t={},e="en"){return"en"==e?t.en:"fa"==e?t.af:"tr"==e?t.tr:"dt"==e?t.dt:"ab"==e?t.ab:void 0}function V(t,e,n){let a,r,s,o=!1,l="en",c=0;function i(t="",e){var n=[];Papa.parse(t,{download:!0,complete:t=>{for(var a=0;a<t.data.length-1;a++)n.push(t.data[a]);u(n=function(t){const e=[];for(var n=2;n<t[0].length;n++){const r=[];for(var a=0;a<t.length;a++)try{r.push(parseInt(t[a][n]))}catch{console.log(t[a][n])}e.push(r.reduce((t,e)=>t+e,0))}return e}(n=n.splice(1,n.length)),e)}})}function u(t,e){const a=[];for(var r=0;r<t.length;r++)a.push(r+1);var s=new window.PR(a,t,1);n(5,c=t.length+1),e(s)}return i("https://data.humdata.org/hxlproxy/api/data-preview.csv?url=https%3A%2F%2Fraw.githubusercontent.com%2FCSSEGISandData%2FCOVID-19%2Fmaster%2Fcsse_covid_19_data%2Fcsse_covid_19_time_series%2Ftime_series_covid19_recovered_global.csv&filename=time_series_covid19_recovered_global.csv",t=>{n(0,a=t),i("https://data.humdata.org/hxlproxy/api/data-preview.csv?url=https%3A%2F%2Fraw.githubusercontent.com%2FCSSEGISandData%2FCOVID-19%2Fmaster%2Fcsse_covid_19_data%2Fcsse_covid_19_time_series%2Ftime_series_covid19_deaths_global.csv&filename=time_series_covid19_deaths_global.csv",t=>{n(1,r=t),i("https://data.humdata.org/hxlproxy/api/data-preview.csv?url=https%3A%2F%2Fraw.githubusercontent.com%2FCSSEGISandData%2FCOVID-19%2Fmaster%2Fcsse_covid_19_data%2Fcsse_covid_19_time_series%2Ftime_series_covid19_confirmed_global.csv&filename=time_series_covid19_confirmed_global.csv",t=>{n(2,s=t),n(3,o=!0)})})}),[a,r,s,o,l,c,i,u,function(){var t;t=this.value,c=""===t?void 0:+t,n(5,c)},function(){l=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),n(4,l)}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}{constructor(t){super(),R(this,t,V,I,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
