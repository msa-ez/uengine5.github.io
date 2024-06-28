(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/+cc":function(e,t,n){
/*!
 * Fuse.js v3.6.1 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
e.exports=function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var o=n(1),i=n(7),c=i.get,s=(i.deepValue,i.isArray),h=function(){function e(t,n){var a=n.location,r=void 0===a?0:a,o=n.distance,i=void 0===o?100:o,s=n.threshold,h=void 0===s?.6:s,l=n.maxPatternLength,u=void 0===l?32:l,d=n.caseSensitive,p=void 0!==d&&d,v=n.tokenSeparator,f=void 0===v?/ +/g:v,g=n.findAllMatches,y=void 0!==g&&g,b=n.minMatchCharLength,m=void 0===b?1:b,k=n.id,x=void 0===k?null:k,w=n.keys,S=void 0===w?[]:w,M=n.shouldSort,_=void 0===M||M,P=n.getFn,I=void 0===P?c:P,A=n.sortFn,C=void 0===A?function(e,t){return e.score-t.score}:A,E=n.tokenize,L=void 0!==E&&E,O=n.matchAllTokens,j=void 0!==O&&O,z=n.includeMatches,R=void 0!==z&&z,T=n.includeScore,B=void 0!==T&&T,D=n.verbose,F=void 0!==D&&D;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:r,distance:i,threshold:h,maxPatternLength:u,isCaseSensitive:p,tokenSeparator:f,findAllMatches:y,minMatchCharLength:m,id:x,keys:S,includeMatches:R,includeScore:B,shouldSort:_,getFn:I,sortFn:C,verbose:F,tokenize:L,matchAllTokens:j},this.setCollection(t),this._processKeys(S)}var t,n;return t=e,(n=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"_processKeys",value:function(e){if(this._keyWeights={},this._keyNames=[],e.length&&"string"==typeof e[0])for(var t=0,n=e.length;t<n;t+=1){var a=e[t];this._keyWeights[a]=1,this._keyNames.push(a)}else{for(var r=null,o=null,i=0,c=0,s=e.length;c<s;c+=1){var h=e[c];if(!h.hasOwnProperty("name"))throw new Error('Missing "name" property in key object');var l=h.name;if(this._keyNames.push(l),!h.hasOwnProperty("weight"))throw new Error('Missing "weight" property in key object');var u=h.weight;if(u<0||u>1)throw new Error('"weight" property in key must bein the range of [0, 1)');o=null==o?u:Math.max(o,u),r=null==r?u:Math.min(r,u),this._keyWeights[l]=u,i+=u}if(i>1)throw new Error("Total of weights cannot exceed 1")}}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var n=this._prepareSearchers(e),a=n.tokenSearchers,r=n.fullSearcher,o=this._search(a,r);return this._computeScore(o),this.options.shouldSort&&this._sort(o),t.limit&&"number"==typeof t.limit&&(o=o.slice(0,t.limit)),this._format(o)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var n=e.split(this.options.tokenSeparator),a=0,r=n.length;a<r;a+=1)t.push(new o(n[a],this.options));return{tokenSearchers:t,fullSearcher:new o(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=this.list,a={},r=[];if("string"==typeof n[0]){for(var o=0,i=n.length;o<i;o+=1)this._analyze({key:"",value:n[o],record:o,index:o},{resultMap:a,results:r,tokenSearchers:e,fullSearcher:t});return r}for(var c=0,s=n.length;c<s;c+=1)for(var h=n[c],l=0,u=this._keyNames.length;l<u;l+=1){var d=this._keyNames[l];this._analyze({key:d,value:this.options.getFn(h,d),record:h,index:c},{resultMap:a,results:r,tokenSearchers:e,fullSearcher:t})}return r}},{key:"_analyze",value:function(e,t){var n=this,a=e.key,r=e.arrayIndex,o=void 0===r?-1:r,i=e.value,c=e.record,h=e.index,l=t.tokenSearchers,u=void 0===l?[]:l,d=t.fullSearcher,p=t.resultMap,v=void 0===p?{}:p,f=t.results,g=void 0===f?[]:f;!function e(t,r,o,i){if(null!=r)if("string"==typeof r){var c=!1,h=-1,l=0;n._log("\nKey: ".concat(""===a?"--":a));var p=d.search(r);if(n._log('Full text: "'.concat(r,'", score: ').concat(p.score)),n.options.tokenize){for(var f=r.split(n.options.tokenSeparator),y=f.length,b=[],m=0,k=u.length;m<k;m+=1){var x=u[m];n._log('\nPattern: "'.concat(x.pattern,'"'));for(var w=!1,S=0;S<y;S+=1){var M=f[S],_=x.search(M),P={};_.isMatch?(P[M]=_.score,c=!0,w=!0,b.push(_.score)):(P[M]=1,n.options.matchAllTokens||b.push(1)),n._log('Token: "'.concat(M,'", score: ').concat(P[M]))}w&&(l+=1)}h=b[0];for(var I=b.length,A=1;A<I;A+=1)h+=b[A];h/=I,n._log("Token score average:",h)}var C=p.score;h>-1&&(C=(C+h)/2),n._log("Score average:",C);var E=!n.options.tokenize||!n.options.matchAllTokens||l>=u.length;if(n._log("\nCheck Matches: ".concat(E)),(c||p.isMatch)&&E){var L={key:a,arrayIndex:t,value:r,score:C};n.options.includeMatches&&(L.matchedIndices=p.matchedIndices);var O=v[i];O?O.output.push(L):(v[i]={item:o,output:[L]},g.push(v[i]))}}else if(s(r))for(var j=0,z=r.length;j<z;j+=1)e(j,r[j],o,i)}(o,i,c,h)}},{key:"_computeScore",value:function(e){this._log("\n\nComputing score:\n");for(var t=this._keyWeights,n=!!Object.keys(t).length,a=0,r=e.length;a<r;a+=1){for(var o=e[a],i=o.output,c=i.length,s=1,h=0;h<c;h+=1){var l=i[h],u=l.key,d=n?t[u]:1,p=0===l.score&&t&&t[u]>0?Number.EPSILON:l.score;s*=Math.pow(p,d)}o.score=s,this._log(o)}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var n=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,(function(e,t){if("object"===a(t)&&null!==t){if(-1!==n.indexOf(t))return;n.push(t)}return t}),2)),n=null}var r=[];this.options.includeMatches&&r.push((function(e,t){var n=e.output;t.matches=[];for(var a=0,r=n.length;a<r;a+=1){var o=n[a];if(0!==o.matchedIndices.length){var i={indices:o.matchedIndices,value:o.value};o.key&&(i.key=o.key),o.hasOwnProperty("arrayIndex")&&o.arrayIndex>-1&&(i.arrayIndex=o.arrayIndex),t.matches.push(i)}}})),this.options.includeScore&&r.push((function(e,t){t.score=e.score}));for(var o=0,i=e.length;o<i;o+=1){var c=e[o];if(this.options.id&&(c.item=this.options.getFn(c.item,this.options.id)[0]),r.length){for(var s={item:c.item},h=0,l=r.length;h<l;h+=1)r[h](c,s);t.push(s)}else t.push(c.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&r(t.prototype,n),e}();e.exports=h},function(e,t,n){function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var r=n(2),o=n(3),i=n(6),c=function(){function e(t,n){var a=n.location,r=void 0===a?0:a,o=n.distance,c=void 0===o?100:o,s=n.threshold,h=void 0===s?.6:s,l=n.maxPatternLength,u=void 0===l?32:l,d=n.isCaseSensitive,p=void 0!==d&&d,v=n.tokenSeparator,f=void 0===v?/ +/g:v,g=n.findAllMatches,y=void 0!==g&&g,b=n.minMatchCharLength,m=void 0===b?1:b,k=n.includeMatches,x=void 0!==k&&k;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:r,distance:c,threshold:h,maxPatternLength:u,isCaseSensitive:p,tokenSeparator:f,findAllMatches:y,includeMatches:x,minMatchCharLength:m},this.pattern=p?t:t.toLowerCase(),this.pattern.length<=u&&(this.patternAlphabet=i(this.pattern))}var t,n;return t=e,(n=[{key:"search",value:function(e){var t=this.options,n=t.isCaseSensitive,a=t.includeMatches;if(n||(e=e.toLowerCase()),this.pattern===e){var i={isMatch:!0,score:0};return a&&(i.matchedIndices=[[0,e.length-1]]),i}var c=this.options,s=c.maxPatternLength,h=c.tokenSeparator;if(this.pattern.length>s)return r(e,this.pattern,h);var l=this.options,u=l.location,d=l.distance,p=l.threshold,v=l.findAllMatches,f=l.minMatchCharLength;return o(e,this.pattern,this.patternAlphabet,{location:u,distance:d,threshold:p,findAllMatches:v,minMatchCharLength:f,includeMatches:a})}}])&&a(t.prototype,n),e}();e.exports=c},function(e,t){var n=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,r=new RegExp(t.replace(n,"\\$&").replace(a,"|")),o=e.match(r),i=!!o,c=[];if(i)for(var s=0,h=o.length;s<h;s+=1){var l=o[s];c.push([e.indexOf(l),l.length-1])}return{score:i?.5:1,isMatch:i,matchedIndices:c}}},function(e,t,n){var a=n(4),r=n(5);e.exports=function(e,t,n,o){for(var i=o.location,c=void 0===i?0:i,s=o.distance,h=void 0===s?100:s,l=o.threshold,u=void 0===l?.6:l,d=o.findAllMatches,p=void 0!==d&&d,v=o.minMatchCharLength,f=void 0===v?1:v,g=o.includeMatches,y=void 0!==g&&g,b=c,m=e.length,k=u,x=e.indexOf(t,b),w=t.length,S=[],M=0;M<m;M+=1)S[M]=0;if(-1!==x){var _=a(t,{errors:0,currentLocation:x,expectedLocation:b,distance:h});if(k=Math.min(_,k),-1!==(x=e.lastIndexOf(t,b+w))){var P=a(t,{errors:0,currentLocation:x,expectedLocation:b,distance:h});k=Math.min(P,k)}}x=-1;for(var I=[],A=1,C=w+m,E=1<<(w<=31?w-1:30),L=0;L<w;L+=1){for(var O=0,j=C;O<j;)a(t,{errors:L,currentLocation:b+j,expectedLocation:b,distance:h})<=k?O=j:C=j,j=Math.floor((C-O)/2+O);C=j;var z=Math.max(1,b-j+1),R=p?m:Math.min(b+j,m)+w,T=Array(R+2);T[R+1]=(1<<L)-1;for(var B=R;B>=z;B-=1){var D=B-1,F=n[e.charAt(D)];if(F&&(S[D]=1),T[B]=(T[B+1]<<1|1)&F,0!==L&&(T[B]|=(I[B+1]|I[B])<<1|1|I[B+1]),T[B]&E&&(A=a(t,{errors:L,currentLocation:D,expectedLocation:b,distance:h}))<=k){if(k=A,(x=D)<=b)break;z=Math.max(1,2*b-x)}}if(a(t,{errors:L+1,currentLocation:b,expectedLocation:b,distance:h})>k)break;I=T}var N={isMatch:x>=0,score:0===A?.001:A};return y&&(N.matchedIndices=r(S,f)),N}},function(e,t){e.exports=function(e,t){var n=t.errors,a=void 0===n?0:n,r=t.currentLocation,o=void 0===r?0:r,i=t.expectedLocation,c=void 0===i?0:i,s=t.distance,h=void 0===s?100:s,l=a/e.length,u=Math.abs(c-o);return h?l+u/h:u?1:l}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],a=-1,r=-1,o=0,i=e.length;o<i;o+=1){var c=e[o];c&&-1===a?a=o:c||-1===a||((r=o-1)-a+1>=t&&n.push([a,r]),a=-1)}return e[o-1]&&o-a>=t&&n.push([a,o-1]),n}},function(e,t){e.exports=function(e){for(var t={},n=e.length,a=0;a<n;a+=1)t[e.charAt(a)]=0;for(var r=0;r<n;r+=1)t[e.charAt(r)]|=1<<n-r-1;return t}},function(e,t){var n=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)},a=function(e){return null==e?"":function(e){if("string"==typeof e)return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(e)},r=function(e){return"string"==typeof e},o=function(e){return"number"==typeof e};e.exports={get:function(e,t){var i=[];return function e(t,c){if(c){var s=c.indexOf("."),h=c,l=null;-1!==s&&(h=c.slice(0,s),l=c.slice(s+1));var u=t[h];if(null!=u)if(l||!r(u)&&!o(u))if(n(u))for(var d=0,p=u.length;d<p;d+=1)e(u[d],l);else l&&e(u,l);else i.push(a(u))}else i.push(t)}(e,t),i},isArray:n,isString:r,isNum:o,toString:a}}])},wQbG:function(e,t,n){"use strict";n.r(t);n("FNk8");var a=n("/+cc"),r=n.n(a),o=n("CjXH"),i={components:{ChevronRightIcon:o.d,SearchIcon:o.j},data:()=>({query:"",focusIndex:-1,focused:!1}),computed:{results(){return new r.a(this.headings,{keys:["value"],threshold:.25}).search(this.query).slice(0,15)},headings(){let e=[];return this.$static.allMarkdownPage.edges.map(e=>e.node).forEach(t=>{t.headings.forEach(n=>{e.push({...n,path:t.path,title:t.title})})}),e},showResult(){return this.focused&&this.query.length>0}},methods:{increment(){this.focusIndex<this.results.length-1&&this.focusIndex++},decrement(){this.focusIndex>=0&&this.focusIndex--},go(){if(0===this.results.length)return;let e;e=-1===this.focusIndex?this.results[0]:this.results[this.focusIndex],this.$router.push(e.path+e.anchor),this.$refs.input.blur(),this.query=""}}},c=n("KHd+"),s=n("Kw5r");const{computed:h}=s.a.config.optionMergeStrategies,l={allMarkdownPage:{edges:[{node:{id:"a6152efd9493440ea57fc0fc59f6d8bf",path:"/getting-started/soa-architecture/",title:"SOA (MSA) 아키텍처 예제",headings:[{depth:1,value:"SOA (MSA) 아키텍처 예제",anchor:"#soa-msa-아키텍처-예제"},{depth:2,value:"서비스 시나리오",anchor:"#서비스-시나리오"},{depth:2,value:"서비스 디컴퍼지션",anchor:"#서비스-디컴퍼지션"},{depth:2,value:"Registry & API Gateway 서비스",anchor:"#registry--api-gateway-서비스"},{depth:2,value:"설치 필요한 프로그램",anchor:"#설치-필요한-프로그램"},{depth:2,value:"테스트 과정",anchor:"#테스트-과정"}]}},{node:{id:"67f2b2a2288d50772aeae03b92283445",path:"/getting-started/process-workflow/",title:"사람간의 프로세스 Workflow",headings:[{depth:1,value:"사람간의 프로세스 Workflow",anchor:"#사람간의-프로세스-workflow"},{depth:2,value:"1. 조건분기 흐름제어",anchor:"#1-조건분기-흐름제어"},{depth:2,value:"2. 반복",anchor:"#2-반복"},{depth:2,value:"3. 서브프로세스",anchor:"#3-서브프로세스"}]}},{node:{id:"19c97746d36287379e98c940bd0b0249",path:"/getting-started/",title:"모델링 툴의 사용법",headings:[{depth:1,value:"모델링 툴의 사용법",anchor:"#모델링-툴의-사용법"},{depth:2,value:"1. 프로세스 정의 만들기",anchor:"#1-프로세스-정의-만들기"},{depth:2,value:"2. 프로세스 실행시키기",anchor:"#2-프로세스-실행시키기"},{depth:2,value:"3. 프로세스 변수 설정",anchor:"#3-프로세스-변수-설정"},{depth:2,value:"4. 기초 예제 프로세스",anchor:"#4-기초-예제-프로세스"},{depth:3,value:"4.1 목표 예제 프로세스",anchor:"#41-목표-예제-프로세스"},{depth:3,value:"4.2 프로세스 시나리오",anchor:"#42-프로세스-시나리오"},{depth:3,value:"4.3 프로세스 정의",anchor:"#43-프로세스-정의"},{depth:3,value:"4.4 프로세스 실행",anchor:"#44-프로세스-실행"}]}},{node:{id:"cf033ad26917ae9b21d767273577c2e4",path:"/api-customizing/transaction-listener/",title:"uEngine5 트랜잭션 리스너",headings:[{depth:1,value:"uEngine5 트랜잭션 리스너",anchor:"#uengine5-트랜잭션-리스너"},{depth:2,value:"사용 확장",anchor:"#사용-확장"}]}},{node:{id:"e600db47303ade4d190c6c2f4e168e35",path:"/api-customizing/script-task/",title:"[Modeling] ScriptTask",headings:[{depth:1,value:" ScriptTask",anchor:"#modeling-scripttask"},{depth:2,value:"설정",anchor:"#설정"},{depth:2,value:"예제 프로세스 (json)",anchor:"#예제-프로세스-json"},{depth:2,value:"프로세스 배포",anchor:"#프로세스-배포"},{depth:2,value:"프로세스 실행",anchor:"#프로세스-실행"},{depth:2,value:"실행 확인",anchor:"#실행-확인"}]}},{node:{id:"1d92a1a0e540fda25d74633bb9af7265",path:"/api-customizing/new-activity/",title:"새로운 액티비티 타입 만들기",headings:[{depth:1,value:"새로운 액티비티 타입 만들기",anchor:"#새로운-액티비티-타입-만들기"},{depth:2,value:"Example",anchor:"#example"},{depth:2,value:"ServiceTask.vue",anchor:"#servicetaskvue"}]}},{node:{id:"37667d7e2d69793b782edf9383d9eea9",path:"/api-customizing/message-listener/",title:"[API] Message Listener API",headings:[{depth:1,value:" Message Listener API",anchor:"#api-message-listener-api"},{depth:2,value:"Service Definition",anchor:"#service-definition"},{depth:2,value:"카카오톡 챗봇 예제",anchor:"#카카오톡-챗봇-예제"}]}},{node:{id:"f053b487b74311c01b572462ff1a4925",path:"/api-customizing/migration/",title:"uEngine3.x 에서 uEngine5 로의 마이그래이션",headings:[{depth:1,value:"uEngine3.x 에서 uEngine5 로의 마이그래이션",anchor:"#uengine3x-에서-uengine5-로의-마이그래이션"}]}},{node:{id:"2c5cb1e035e28430f49fd47eaa487692",path:"/api-customizing/api-reference/",title:"uEngine5 API Reference",headings:[{depth:1,value:"uEngine5 API Reference",anchor:"#uengine5-api-reference"},{depth:2,value:"프로세스 폴더 관리",anchor:"#프로세스-폴더-관리"},{depth:2,value:"프로세스 정의 관리",anchor:"#프로세스-정의-관리"},{depth:2,value:"프로세스 instantiation 생성",anchor:"#프로세스-instantiation-생성"},{depth:2,value:"Hybind example",anchor:"#hybind-example"},{depth:2,value:"프로세스 버전관리",anchor:"#프로세스-버전관리"}]}},{node:{id:"3030c4bb705cdaf8ef3246510d57bc6d",path:"/api-customizing/external-service/",title:"애플리케이션과 BPM 연동(비동기 방식)",headings:[{depth:1,value:"애플리케이션과 BPM 연동(비동기 방식)",anchor:"#애플리케이션과-bpm-연동비동기-방식"},{depth:2,value:"1. 동기 방식의 App 연동 시 문제점",anchor:"#1-동기-방식의-app-연동-시-문제점"},{depth:2,value:"2. 비동기 방식의 App 연동",anchor:"#2-비동기-방식의-app-연동"},{depth:3,value:"2.1 연동 원칙",anchor:"#21-연동-원칙"},{depth:3,value:"2.2 예제",anchor:"#22-예제"},{depth:3,value:"2.3 애플리케이션(Publisher)",anchor:"#23-애플리케이션publisher"},{depth:3,value:"2.4 Message Broker",anchor:"#24-message-broker"},{depth:3,value:"2.5 BPM(Subscriber)",anchor:"#25-bpmsubscriber"},{depth:4,value:"2.6 비동기 연동 테스트",anchor:"#26-비동기-연동-테스트"},{depth:2,value:"3. 프로세스 모델링",anchor:"#3-프로세스-모델링"},{depth:3,value:"3.1 프로세스 변수 설정",anchor:"#31-프로세스-변수-설정"},{depth:3,value:"3.2 사용자 업무 설정(User task)",anchor:"#32-사용자-업무-설정user-task"},{depth:4,value:'3.2.1 "장애 신고"업무 설정',anchor:"#321-장애-신고업무-설정"},{depth:4,value:'3.2.2 "장애 처리"업무 설정',anchor:"#322-장애-처리업무-설정"},{depth:3,value:"3.3 분기 설정(gateway)",anchor:"#33-분기-설정gateway"},{depth:2,value:"4. 실행",anchor:"#4-실행"},{depth:2,value:"5. 정리",anchor:"#5-정리"},{depth:2,value:"참고 영상",anchor:"#참고-영상"}]}},{node:{id:"bcbb26d193e3b72d880eb18e14dc6140",path:"/api-customizing/create-project/",title:"uEngine5 기반 프로젝트 만들기",headings:[{depth:1,value:"uEngine5 기반 프로젝트 만들기",anchor:"#uengine5-기반-프로젝트-만들기"},{depth:2,value:"설정 변경과 커스터마이징",anchor:"#설정-변경과-커스터마이징"}]}},{node:{id:"493126496a27a03b14ddfebd758b50e1",path:"/bpm-engine/resource-manager/",title:"Resource Manager",headings:[{depth:1,value:"Resource Manager",anchor:"#resource-manager"}]}},{node:{id:"b2e009ce430affa552ee6c7eb420aadd",path:"/bpm-engine/execution/",title:"실행하기",headings:[{depth:1,value:"실행하기",anchor:"#실행하기"}]}},{node:{id:"35a4ec41be933b14dfd237c5db2891a6",path:"/bpm-engine/introduction/",title:"기본 소개",headings:[{depth:1,value:"기본 소개",anchor:"#기본-소개"},{depth:2,value:"주요 특징",anchor:"#주요-특징"},{depth:2,value:"주요 구성 요소",anchor:"#주요-구성-요소"}]}},{node:{id:"e220315613a6e04f13e4c666b5ccdc1b",path:"/bpm-engine/instance/",title:"Instance",headings:[{depth:1,value:"Instance",anchor:"#instance"},{depth:2,value:"Process Instance",anchor:"#process-instance"},{depth:3,value:"1. 관계",anchor:"#1-관계"},{depth:3,value:"2. ProcessInstance",anchor:"#2-processinstance"},{depth:3,value:"3. ProcessInstanceImpl",anchor:"#3-processinstanceimpl"},{depth:4,value:"프로세스 인스턴스 시작",anchor:"#프로세스-인스턴스-시작"},{depth:3,value:"4. AbstractProcessInstance",anchor:"#4-abstractprocessinstance"},{depth:2,value:"Instance Service 상세 설명",anchor:"#instance-service-상세-설명"},{depth:3,value:"1. InstanceService",anchor:"#1-instanceservice"},{depth:4,value:"1.1 interface 목록",anchor:"#11-interface-목록"},{depth:5,value:"1.1.1 인스턴스 시작및 재시작",anchor:"#111-인스턴스-시작및-재시작"},{depth:5,value:"1.1.2 인스턴스 중지",anchor:"#112-인스턴스-중지"},{depth:5,value:"1.1.3 중지된 프로세스 인스턴스 재개",anchor:"#113-중지된-프로세스-인스턴스-재개"},{depth:5,value:"1.1.4 인스턴스의 정보 조회",anchor:"#114-인스턴스의-정보-조회"},{depth:5,value:"1.1.5 지정된 위치 이동",anchor:"#115-지정된-위치-이동"},{depth:5,value:"1.1.6 메시지 전송",anchor:"#116-메시지-전송"},{depth:5,value:"1.1.7 인스턴스의 모든 변수 조회",anchor:"#117-인스턴스의-모든-변수-조회"},{depth:5,value:"1.1.8 인스턴스의 특정 변수 값 조회",anchor:"#118-인스턴스의-특정-변수-값-조회"},{depth:5,value:"1.1.9 인스턴스의 변수 값 설정",anchor:"#119-인스턴스의-변수-값-설정"},{depth:5,value:"1.1.10 역할 매핑 정보 조회",anchor:"#1110-역할-매핑-정보-조회"},{depth:5,value:"1.1.11 역할 매핑 설정",anchor:"#1111-역할-매핑-설정"},{depth:5,value:"1.1.12 지정된 작업 항목의 정보 조회",anchor:"#1112-지정된-작업-항목의-정보-조회"},{depth:5,value:"1.1.13 지정된 작업 항목 업데이트",anchor:"#1113-지정된-작업-항목-업데이트"},{depth:3,value:"2. InstanceServiceImpl",anchor:"#2-instanceserviceimpl"},{depth:3,value:"3. ProcessExecutionCommand",anchor:"#3-processexecutioncommand"},{depth:3,value:"4. ProcessInstanceEntity",anchor:"#4-processinstanceentity"},{depth:3,value:"5. ProcessInstanceRepository",anchor:"#5-processinstancerepository"}]}},{node:{id:"d053b72f7e3b7ae92efc8051787190d4",path:"/bpm-engine/definition/",title:"Definition",headings:[{depth:1,value:"Definition",anchor:"#definition"},{depth:2,value:"Process Definition",anchor:"#process-definition"}]}},{node:{id:"355c1c72cdd0efb696bcc2e57deb7f38",path:"/bpm-engine/activity/",title:"Activity",headings:[{depth:1,value:"Activity",anchor:"#activity"},{depth:2,value:"1. Activity",anchor:"#1-activity"},{depth:2,value:"2. DefaultActivity",anchor:"#2-defaultactivity"},{depth:2,value:"3. HumanActivity",anchor:"#3-humanactivity"},{depth:2,value:"4. FlowActivity",anchor:"#4-flowactivity"},{depth:2,value:"5. Gateway",anchor:"#5-gateway"},{depth:3,value:"5-1. ParallelGateway (병렬)",anchor:"#5-1-parallelgateway-병렬"},{depth:3,value:"5-2.ExclusiveGateway (독점적)",anchor:"#5-2exclusivegateway-독점적"},{depth:3,value:"5-3. InclusiveGateway (포괄적)",anchor:"#5-3inclusivegateway-포괄적"},{depth:3,value:"5-4. ComplexGateway (복합)",anchor:"#5-4complexgateway-복합"}]}},{node:{id:"12493f69bf65e7fc9bcc5e0b8c31d16d",path:"/bpm-concept/workflow/",title:"워크플로우",headings:[{depth:1,value:"워크플로우",anchor:"#워크플로우"},{depth:2,value:"1. 워크플로우 개념과 유형",anchor:"#1-워크플로우-개념과-유형"},{depth:2,value:"2. 워크플로우 구성 요소",anchor:"#2-워크플로우-구성-요소"},{depth:2,value:"3. 워크플로우 참조 모델",anchor:"#3-워크플로우-참조-모델"}]}},{node:{id:"74a04a7011efcc5acd6229f7f7535c04",path:"/bpm-concept/open-source/",title:"오픈소스 BPMS uEngine 소개",headings:[{depth:1,value:"오픈소스 BPMS uEngine 소개",anchor:"#오픈소스-bpms-uengine-소개"}]}},{node:{id:"6adbef562f21c42b92bdbc644d323329",path:"/bpm-concept/workflow-management-system/",title:"워크플로우 관리 시스템과 RTE BPM",headings:[{depth:1,value:"워크플로우 관리 시스템과 RTE BPM",anchor:"#워크플로우-관리-시스템과-rte-bpm"},{depth:2,value:"1. 워크플로우 관리 시스템 (WFMS)",anchor:"#1-워크플로우-관리-시스템-wfms"},{depth:2,value:"2. RTE (Real Time Enterprise)",anchor:"#2-rte-real-time-enterprise"},{depth:2,value:"3. BPM 역할과 향후 방향",anchor:"#3-bpm-역할과-향후-방향"},{depth:2,value:"4. BPM 시스템 예",anchor:"#4-bpm-시스템-예"}]}},{node:{id:"c37f14d659bda968613d6c14667c05b3",path:"/bpm-concept/example-video/",title:"Example Video",headings:[{depth:1,value:"Example Video",anchor:"#example-video"},{depth:2,value:"실전예제 - 대고객 만족 프로세스",anchor:"#실전예제---대고객-만족-프로세스"},{depth:2,value:"실전예제 - SW 개발/관리 프로세스",anchor:"#실전예제---sw-개발관리-프로세스"},{depth:2,value:"유엔진 아키텍처",anchor:"#유엔진-아키텍처"},{depth:3,value:"유엔진 프로세스 모델 정의",anchor:"#유엔진-프로세스-모델-정의"},{depth:3,value:"유엔진 사용자 정의",anchor:"#유엔진-사용자-정의"},{depth:3,value:"엔진 내부 해부",anchor:"#엔진-내부-해부"},{depth:2,value:"유엔진 개발환경 셋팅",anchor:"#유엔진-개발환경-셋팅"},{depth:3,value:"디버깅 및 소스 분석",anchor:"#디버깅-및-소스-분석"},{depth:3,value:"이클립스 설정",anchor:"#이클립스-설정"}]}},{node:{id:"0605da7148a96c2096323c5d0e463830",path:"/bpm-concept/facebook/",title:"Facebook group",headings:[{depth:1,value:"Facebook group",anchor:"#facebook-group"}]}},{node:{id:"338da42353dc49417638e5a1157b0c80",path:"/bpm-concept/business-process/",title:"비즈니스 프로세스와 BPM",headings:[{depth:1,value:"비즈니스 프로세스와 BPM",anchor:"#비즈니스-프로세스와-bpm"},{depth:2,value:"1. 기업과 비즈니스 프로세스",anchor:"#1-기업과-비즈니스-프로세스"},{depth:2,value:"2. BPR(Business Process Reengineering)",anchor:"#2-bprbusiness-process-reengineering"},{depth:2,value:"3. 비즈니스 모델링과 분석",anchor:"#3-비즈니스-모델링과-분석"},{depth:2,value:"4. BPM(S)",anchor:"#4-bpms"}]}}]}};var u=({options:e})=>{e.__staticData?e.__staticData.data=l:(e.__staticData=s.a.observable({data:l}),e.computed=h({$static:()=>e.__staticData.data},e.computed))},d=Object(c.a)(i,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"relative",on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.increment.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.decrement.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.go.apply(null,arguments)}]}},[t("label",{staticClass:"relative block"},[t("span",{staticClass:"sr-only"},[e._v("Search Documentation")]),t("div",{staticClass:"absolute inset-y-0 left-0 flex items-center justify-center px-3 py-2 opacity-50"},[t("SearchIcon",{staticClass:"text-ui-typo",attrs:{size:"1.25x"}})],1),t("input",{ref:"input",staticClass:"block w-full py-2 pl-10 pr-4 border-2 rounded-lg bg-ui-sidebar border-ui-sidebar focus:bg-ui-background",class:{"rounded-b-none":e.showResult},attrs:{type:"search",placeholder:"Search Documentation..."},domProps:{value:e.query},on:{focus:function(t){e.focused=!0},blur:function(t){e.focused=!1},input:function(t){e.focusIndex=-1,e.query=t.target.value},change:function(t){e.query=t.target.value}}})]),e.showResult?t("div",{staticClass:"fixed inset-x-0 z-50 overflow-y-auto border-2 border-t-0 rounded-lg rounded-t-none shadow-lg results bg-ui-background bottom:0 sm:bottom-auto sm:absolute border-ui-sidebar",staticStyle:{"max-height":"calc(100vh - 120px)"}},[t("ul",{staticClass:"px-4 py-2 m-0"},[0===e.results.length?t("li",{staticClass:"px-2"},[e._v("\n        No results for "),t("span",{staticClass:"font-bold"},[e._v(e._s(e.query))]),e._v(".\n      ")]):e._l(e.results,(function(n,a){return t("li",{key:n.path+n.anchor,staticClass:"border-ui-sidebar",class:{"border-b":a+1!==e.results.length},on:{mouseenter:function(t){e.focusIndex=a},mousedown:e.go}},[t("g-link",{staticClass:"block p-2 -mx-2 text-base font-bold rounded-lg",class:{"bg-ui-sidebar text-ui-primary":e.focusIndex===a},attrs:{to:n.path+n.anchor}},[n.value===n.title?t("span",[e._v("\n            "+e._s(n.value)+"\n          ")]):t("span",{staticClass:"flex items-center"},[e._v("\n            "+e._s(n.title)+"\n            "),t("ChevronRightIcon",{staticClass:"mx-1",attrs:{size:"1x"}}),t("span",{staticClass:"font-normal opacity-75"},[e._v(e._s(n.value))])],1)])],1)}))],2)]):e._e()])}),[],!1,null,null,null);"function"==typeof u&&u(d);t.default=d.exports}}]);