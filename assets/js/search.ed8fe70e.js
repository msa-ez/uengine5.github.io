(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{185:function(e,t,n){"use strict";var a=n(5),r=n(145);a({target:"String",proto:!0,forced:n(146)("anchor")},{anchor:function(e){return r(this,"a","name",e)}})},186:function(e,t,n){
/*!
 * Fuse.js v3.4.6 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
e.exports=function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,n){function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var o=n(2),i=n(8),s=n(0),c=function(){function e(t,n){var a=n.location,r=void 0===a?0:a,o=n.distance,s=void 0===o?100:o,c=n.threshold,h=void 0===c?.6:c,l=n.maxPatternLength,u=void 0===l?32:l,d=n.caseSensitive,p=void 0!==d&&d,f=n.tokenSeparator,v=void 0===f?/ +/g:f,g=n.findAllMatches,y=void 0!==g&&g,b=n.minMatchCharLength,m=void 0===b?1:b,k=n.id,x=void 0===k?null:k,S=n.keys,_=void 0===S?[]:S,M=n.shouldSort,w=void 0===M||M,C=n.getFn,I=void 0===C?i:C,A=n.sortFn,P=void 0===A?function(e,t){return e.score-t.score}:A,L=n.tokenize,E=void 0!==L&&L,O=n.matchAllTokens,j=void 0!==O&&O,T=n.includeMatches,R=void 0!==T&&T,z=n.includeScore,B=void 0!==z&&z,F=n.verbose,D=void 0!==F&&F;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:r,distance:s,threshold:h,maxPatternLength:u,isCaseSensitive:p,tokenSeparator:v,findAllMatches:y,minMatchCharLength:m,id:x,keys:_,includeMatches:R,includeScore:B,shouldSort:w,getFn:I,sortFn:P,verbose:D,tokenize:E,matchAllTokens:j},this.setCollection(t)}var t,n;return t=e,(n=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var n=this._prepareSearchers(e),a=n.tokenSearchers,r=n.fullSearcher,o=this._search(a,r),i=o.weights,s=o.results;return this._computeScore(i,s),this.options.shouldSort&&this._sort(s),t.limit&&"number"==typeof t.limit&&(s=s.slice(0,t.limit)),this._format(s)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var n=e.split(this.options.tokenSeparator),a=0,r=n.length;a<r;a+=1)t.push(new o(n[a],this.options));return{tokenSearchers:t,fullSearcher:new o(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=this.list,a={},r=[];if("string"==typeof n[0]){for(var o=0,i=n.length;o<i;o+=1)this._analyze({key:"",value:n[o],record:o,index:o},{resultMap:a,results:r,tokenSearchers:e,fullSearcher:t});return{weights:null,results:r}}for(var s={},c=0,h=n.length;c<h;c+=1)for(var l=n[c],u=0,d=this.options.keys.length;u<d;u+=1){var p=this.options.keys[u];if("string"!=typeof p){if(s[p.name]={weight:1-p.weight||1},p.weight<=0||p.weight>1)throw new Error("Key weight has to be > 0 and <= 1");p=p.name}else s[p]={weight:1};this._analyze({key:p,value:this.options.getFn(l,p),record:l,index:c},{resultMap:a,results:r,tokenSearchers:e,fullSearcher:t})}return{weights:s,results:r}}},{key:"_analyze",value:function(e,t){var n=e.key,a=e.arrayIndex,r=void 0===a?-1:a,o=e.value,i=e.record,c=e.index,h=t.tokenSearchers,l=void 0===h?[]:h,u=t.fullSearcher,d=void 0===u?[]:u,p=t.resultMap,f=void 0===p?{}:p,v=t.results,g=void 0===v?[]:v;if(null!=o){var y=!1,b=-1,m=0;if("string"==typeof o){this._log("\nKey: ".concat(""===n?"-":n));var k=d.search(o);if(this._log('Full text: "'.concat(o,'", score: ').concat(k.score)),this.options.tokenize){for(var x=o.split(this.options.tokenSeparator),S=[],_=0;_<l.length;_+=1){var M=l[_];this._log('\nPattern: "'.concat(M.pattern,'"'));for(var w=!1,C=0;C<x.length;C+=1){var I=x[C],A=M.search(I),P={};A.isMatch?(P[I]=A.score,y=!0,w=!0,S.push(A.score)):(P[I]=1,this.options.matchAllTokens||S.push(1)),this._log('Token: "'.concat(I,'", score: ').concat(P[I]))}w&&(m+=1)}b=S[0];for(var L=S.length,E=1;E<L;E+=1)b+=S[E];b/=L,this._log("Token score average:",b)}var O=k.score;b>-1&&(O=(O+b)/2),this._log("Score average:",O);var j=!this.options.tokenize||!this.options.matchAllTokens||m>=l.length;if(this._log("\nCheck Matches: ".concat(j)),(y||k.isMatch)&&j){var T=f[c];T?T.output.push({key:n,arrayIndex:r,value:o,score:O,matchedIndices:k.matchedIndices}):(f[c]={item:i,output:[{key:n,arrayIndex:r,value:o,score:O,matchedIndices:k.matchedIndices}]},g.push(f[c]))}}else if(s(o))for(var R=0,z=o.length;R<z;R+=1)this._analyze({key:n,arrayIndex:R,value:o[R],record:i,index:c},{resultMap:f,results:g,tokenSearchers:l,fullSearcher:d})}}},{key:"_computeScore",value:function(e,t){this._log("\n\nComputing score:\n");for(var n=0,a=t.length;n<a;n+=1){for(var r=t[n].output,o=r.length,i=1,s=1,c=0;c<o;c+=1){var h=e?e[r[c].key].weight:1,l=(1===h?r[c].score:r[c].score||.001)*h;1!==h?s=Math.min(s,l):(r[c].nScore=l,i*=l)}t[n].score=1===s?i:s,this._log(t[n])}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var n=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,(function(e,t){if("object"===a(t)&&null!==t){if(-1!==n.indexOf(t))return;n.push(t)}return t}))),n=null}var r=[];this.options.includeMatches&&r.push((function(e,t){var n=e.output;t.matches=[];for(var a=0,r=n.length;a<r;a+=1){var o=n[a];if(0!==o.matchedIndices.length){var i={indices:o.matchedIndices,value:o.value};o.key&&(i.key=o.key),o.hasOwnProperty("arrayIndex")&&o.arrayIndex>-1&&(i.arrayIndex=o.arrayIndex),t.matches.push(i)}}})),this.options.includeScore&&r.push((function(e,t){t.score=e.score}));for(var o=0,i=e.length;o<i;o+=1){var s=e[o];if(this.options.id&&(s.item=this.options.getFn(s.item,this.options.id)[0]),r.length){for(var c={item:s.item},h=0,l=r.length;h<l;h+=1)r[h](s,c);t.push(c)}else t.push(s.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&r(t.prototype,n),e}();e.exports=c},function(e,t,n){function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var r=n(3),o=n(4),i=n(7),s=function(){function e(t,n){var a=n.location,r=void 0===a?0:a,o=n.distance,s=void 0===o?100:o,c=n.threshold,h=void 0===c?.6:c,l=n.maxPatternLength,u=void 0===l?32:l,d=n.isCaseSensitive,p=void 0!==d&&d,f=n.tokenSeparator,v=void 0===f?/ +/g:f,g=n.findAllMatches,y=void 0!==g&&g,b=n.minMatchCharLength,m=void 0===b?1:b;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:r,distance:s,threshold:h,maxPatternLength:u,isCaseSensitive:p,tokenSeparator:v,findAllMatches:y,minMatchCharLength:m},this.pattern=this.options.isCaseSensitive?t:t.toLowerCase(),this.pattern.length<=u&&(this.patternAlphabet=i(this.pattern))}var t,n;return t=e,(n=[{key:"search",value:function(e){if(this.options.isCaseSensitive||(e=e.toLowerCase()),this.pattern===e)return{isMatch:!0,score:0,matchedIndices:[[0,e.length-1]]};var t=this.options,n=t.maxPatternLength,a=t.tokenSeparator;if(this.pattern.length>n)return r(e,this.pattern,a);var i=this.options,s=i.location,c=i.distance,h=i.threshold,l=i.findAllMatches,u=i.minMatchCharLength;return o(e,this.pattern,this.patternAlphabet,{location:s,distance:c,threshold:h,findAllMatches:l,minMatchCharLength:u})}}])&&a(t.prototype,n),e}();e.exports=s},function(e,t){var n=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,r=new RegExp(t.replace(n,"\\$&").replace(a,"|")),o=e.match(r),i=!!o,s=[];if(i)for(var c=0,h=o.length;c<h;c+=1){var l=o[c];s.push([e.indexOf(l),l.length-1])}return{score:i?.5:1,isMatch:i,matchedIndices:s}}},function(e,t,n){var a=n(5),r=n(6);e.exports=function(e,t,n,o){for(var i=o.location,s=void 0===i?0:i,c=o.distance,h=void 0===c?100:c,l=o.threshold,u=void 0===l?.6:l,d=o.findAllMatches,p=void 0!==d&&d,f=o.minMatchCharLength,v=void 0===f?1:f,g=s,y=e.length,b=u,m=e.indexOf(t,g),k=t.length,x=[],S=0;S<y;S+=1)x[S]=0;if(-1!==m){var _=a(t,{errors:0,currentLocation:m,expectedLocation:g,distance:h});if(b=Math.min(_,b),-1!==(m=e.lastIndexOf(t,g+k))){var M=a(t,{errors:0,currentLocation:m,expectedLocation:g,distance:h});b=Math.min(M,b)}}m=-1;for(var w=[],C=1,I=k+y,A=1<<(k<=31?k-1:30),P=0;P<k;P+=1){for(var L=0,E=I;L<E;)a(t,{errors:P,currentLocation:g+E,expectedLocation:g,distance:h})<=b?L=E:I=E,E=Math.floor((I-L)/2+L);I=E;var O=Math.max(1,g-E+1),j=p?y:Math.min(g+E,y)+k,T=Array(j+2);T[j+1]=(1<<P)-1;for(var R=j;R>=O;R-=1){var z=R-1,B=n[e.charAt(z)];if(B&&(x[z]=1),T[R]=(T[R+1]<<1|1)&B,0!==P&&(T[R]|=(w[R+1]|w[R])<<1|1|w[R+1]),T[R]&A&&(C=a(t,{errors:P,currentLocation:z,expectedLocation:g,distance:h}))<=b){if(b=C,(m=z)<=g)break;O=Math.max(1,2*g-m)}}if(a(t,{errors:P+1,currentLocation:g,expectedLocation:g,distance:h})>b)break;w=T}return{isMatch:m>=0,score:0===C?.001:C,matchedIndices:r(x,v)}}},function(e,t){e.exports=function(e,t){var n=t.errors,a=void 0===n?0:n,r=t.currentLocation,o=void 0===r?0:r,i=t.expectedLocation,s=void 0===i?0:i,c=t.distance,h=void 0===c?100:c,l=a/e.length,u=Math.abs(s-o);return h?l+u/h:u?1:l}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],a=-1,r=-1,o=0,i=e.length;o<i;o+=1){var s=e[o];s&&-1===a?a=o:s||-1===a||((r=o-1)-a+1>=t&&n.push([a,r]),a=-1)}return e[o-1]&&o-a>=t&&n.push([a,o-1]),n}},function(e,t){e.exports=function(e){for(var t={},n=e.length,a=0;a<n;a+=1)t[e.charAt(a)]=0;for(var r=0;r<n;r+=1)t[e.charAt(r)]|=1<<n-r-1;return t}},function(e,t,n){var a=n(0);e.exports=function(e,t){return function e(t,n,r){if(n){var o=n.indexOf("."),i=n,s=null;-1!==o&&(i=n.slice(0,o),s=n.slice(o+1));var c=t[i];if(null!=c)if(s||"string"!=typeof c&&"number"!=typeof c)if(a(c))for(var h=0,l=c.length;h<l;h+=1)e(c[h],s,r);else s&&e(c,s,r);else r.push(c.toString())}else r.push(t);return r}(e,t,[])}}])},194:function(e,t,n){"use strict";n.r(t);n(39),n(58),n(82),n(32),n(140),n(185),n(40);var a=n(15),r=n(186),o=n.n(r),i=n(21),s={components:{ChevronRightIcon:i.d,SearchIcon:i.j},data:function(){return{query:"",focusIndex:-1,focused:!1}},computed:{results:function(){return new o.a(this.headings,{keys:["value"],threshold:.25}).search(this.query).slice(0,15)},headings:function(){var e=[];return this.$static.allMarkdownPage.edges.map((function(e){return e.node})).forEach((function(t){t.headings.forEach((function(n){e.push(Object(a.a)({},n,{path:t.path,title:t.title}))}))})),e},showResult:function(){return this.focused&&this.query.length>0}},methods:{increment:function(){this.focusIndex<this.results.length-1&&this.focusIndex++},decrement:function(){this.focusIndex>=0&&this.focusIndex--},go:function(){var e;0!==this.results.length&&(e=-1===this.focusIndex?this.results[0]:this.results[this.focusIndex],this.$router.push(e.path+e.anchor),this.$refs.input.blur(),this.query="")}}},c=n(14),h=n(1),l=h.a.config.optionMergeStrategies.computed,u={allMarkdownPage:{edges:[{node:{id:"fe17672f7762831bec3b7dc87d8bac36",path:"/uengine/sidebar/",title:"uEngine5 API Reference",headings:[{depth:1,value:"uEngine5 API Reference",anchor:"#uengine5-api-reference"},{depth:2,value:"프로세스 폴더 관리",anchor:"#프로세스-폴더-관리"},{depth:2,value:"프로세스 정의 관리",anchor:"#프로세스-정의-관리"},{depth:2,value:"프로세스 instantiation 생성",anchor:"#프로세스-instantiation-생성"},{depth:2,value:"Hybind example",anchor:"#hybind-example"},{depth:2,value:"프로세스 버전관리",anchor:"#프로세스-버전관리"}]}},{node:{id:"64efae5177d30698ff4100e07bdc689f",path:"/uengine/message-listener/",title:"[API] Message Listener API",headings:[{depth:1,value:" Message Listener API",anchor:"#api-message-listener-api"},{depth:2,value:"Service Definition",anchor:"#service-definition"},{depth:2,value:"카카오톡 챗봇 예제",anchor:"#카카오톡-챗봇-예제"}]}},{node:{id:"1a804470b7e0710b09f756a64d5b80d2",path:"/uengine/writing-content/",title:"uEngine3.x 에서 uEngine5 로의 마이그래이션",headings:[{depth:1,value:"uEngine3.x 에서 uEngine5 로의 마이그래이션",anchor:"#uengine3x-에서-uengine5-로의-마이그래이션"}]}},{node:{id:"571d1bbe7960e85089029edaedf64294",path:"/uengine/script-task/",title:"[Modeling] ScriptTask",headings:[{depth:1,value:" ScriptTask",anchor:"#modeling-scripttask"},{depth:2,value:"설정",anchor:"#설정"},{depth:2,value:"예제 프로세스 (json)",anchor:"#예제-프로세스-json"},{depth:2,value:"프로세스 배포",anchor:"#프로세스-배포"},{depth:2,value:"프로세스 실행",anchor:"#프로세스-실행"},{depth:2,value:"실행 확인",anchor:"#실행-확인"}]}},{node:{id:"ca674611634995e702af5b8ca59d192b",path:"/uengine/activity/",title:"새로운 액티비티 타입 만들기",headings:[{depth:1,value:"새로운 액티비티 타입 만들기",anchor:"#새로운-액티비티-타입-만들기"},{depth:2,value:"Example",anchor:"#example"},{depth:2,value:"ServiceTask.vue",anchor:"#servicetaskvue"}]}},{node:{id:"857eb3d38ae67f6bc03a7ae983c1cc79",path:"/uengine/",title:"uEngine5 기반 프로젝트 만들기",headings:[{depth:1,value:"uEngine5 기반 프로젝트 만들기",anchor:"#uengine5-기반-프로젝트-만들기"},{depth:2,value:"설정 변경과 커스터마이징",anchor:"#설정-변경과-커스터마이징"}]}},{node:{id:"4a639708185cb1ba086a389862f26d48",path:"/uengine/deploying/",title:"uEngine5 트랜잭션 리스너",headings:[{depth:1,value:"uEngine5 트랜잭션 리스너",anchor:"#uengine5-트랜잭션-리스너"},{depth:2,value:"사용 확장",anchor:"#사용-확장"}]}},{node:{id:"0c84106b67a05f6d76d76b81c0d53180",path:"/uengine/facebook/",title:"Facebook group",headings:[{depth:1,value:"Facebook group",anchor:"#facebook-group"}]}},{node:{id:"a29430cf6257b19dbaaa0f68005cb440",path:"/tutorial/chapter7/",title:"7. 사람간의 프로세스 Workflow",headings:[{depth:1,value:"7. 사람간의 프로세스 Workflow",anchor:"#7-사람간의-프로세스-workflow"},{depth:2,value:"1. 조건분기 흐름제어",anchor:"#1-조건분기-흐름제어"},{depth:2,value:"2. 반복",anchor:"#2-반복"},{depth:2,value:"3. 서브프로세스",anchor:"#3-서브프로세스"}]}},{node:{id:"0f94159ad0a5ca0ae37b212e5a1667d2",path:"/tutorial/video/",title:"8. Example Video",headings:[{depth:1,value:"8. Example Video",anchor:"#8-example-video"},{depth:2,value:"실전예제 - 대고객 만족 프로세스",anchor:"#실전예제---대고객-만족-프로세스"},{depth:2,value:"실전예제 - SW 개발/관리 프로세스",anchor:"#실전예제---sw-개발관리-프로세스"},{depth:2,value:"유엔진 아키텍처",anchor:"#유엔진-아키텍처"},{depth:3,value:"유엔진 프로세스 모델 정의",anchor:"#유엔진-프로세스-모델-정의"},{depth:3,value:"유엔진 사용자 정의",anchor:"#유엔진-사용자-정의"},{depth:3,value:"엔진 내부 해부",anchor:"#엔진-내부-해부"},{depth:2,value:"유엔진 개발환경 셋팅",anchor:"#유엔진-개발환경-셋팅"},{depth:3,value:"디버깅 및 소스 분석",anchor:"#디버깅-및-소스-분석"},{depth:3,value:"이클립스 설정",anchor:"#이클립스-설정"}]}},{node:{id:"edf925da95f8f1fba51cf066cf7c1307",path:"/tutorial/chapter6/",title:"6. 모델링 툴의 사용법",headings:[{depth:1,value:"6. 모델링 툴의 사용법",anchor:"#6-모델링-툴의-사용법"},{depth:2,value:"1. 프로세스 정의 만들기",anchor:"#1-프로세스-정의-만들기"},{depth:2,value:"2. 프로세스 실행시키기",anchor:"#2-프로세스-실행시키기"},{depth:2,value:"3. 프로세스 변수 설정",anchor:"#3-프로세스-변수-설정"},{depth:2,value:"4. 기초 예제 프로세스",anchor:"#4-기초-예제-프로세스"},{depth:3,value:"4.1 목표 예제 프로세스",anchor:"#41-목표-예제-프로세스"},{depth:3,value:"4.2 프로세스 시나리오",anchor:"#42-프로세스-시나리오"},{depth:3,value:"4.3 프로세스 정의",anchor:"#43-프로세스-정의"},{depth:3,value:"4.4 프로세스 실행",anchor:"#44-프로세스-실행"}]}},{node:{id:"bd0d06fd98b54f646418d64e39232ee1",path:"/tutorial/chapter5/",title:"5. SOA (MSA) 아키텍처 예제",headings:[{depth:1,value:"5. SOA (MSA) 아키텍처 예제",anchor:"#5-soa-msa-아키텍처-예제"},{depth:2,value:"서비스 시나리오",anchor:"#서비스-시나리오"},{depth:2,value:"서비스 디컴퍼지션",anchor:"#서비스-디컴퍼지션"},{depth:2,value:"Registry & API Gateway 서비스",anchor:"#registry--api-gateway-서비스"},{depth:2,value:"설치 필요한 프로그램",anchor:"#설치-필요한-프로그램"},{depth:2,value:"테스트 과정",anchor:"#테스트-과정"}]}},{node:{id:"9c3a88686562a1f7793195efe1893990",path:"/tutorial/chapter3/",title:"3. 워크플로우 관리 시스템과 RTE BPM",headings:[{depth:1,value:"3. 워크플로우 관리 시스템과 RTE BPM",anchor:"#3-워크플로우-관리-시스템과-rte-bpm"},{depth:2,value:"1. 워크플로우 관리 시스템 (WFMS)",anchor:"#1-워크플로우-관리-시스템-wfms"},{depth:2,value:"2. RTE (Real Time Enterprise)",anchor:"#2-rte-real-time-enterprise"},{depth:2,value:"3. BPM 역할과 향후 방향",anchor:"#3-bpm-역할과-향후-방향"},{depth:2,value:"4. BPM 시스템 예",anchor:"#4-bpm-시스템-예"}]}},{node:{id:"c7ecaf0780cf4d160d144ad21f02f56b",path:"/tutorial/chapter1/",title:"1. 비즈니스 프로세스와 BPM",headings:[{depth:1,value:"1. 비즈니스 프로세스와 BPM",anchor:"#1-비즈니스-프로세스와-bpm"},{depth:2,value:"1. 기업과 비즈니스 프로세스",anchor:"#1-기업과-비즈니스-프로세스"},{depth:2,value:"2. BPR(Business Process Reengineering)",anchor:"#2-bprbusiness-process-reengineering"},{depth:2,value:"3. 비즈니스 모델링과 분석",anchor:"#3-비즈니스-모델링과-분석"},{depth:2,value:"4. BPM(S)",anchor:"#4-bpms"}]}},{node:{id:"c98aab17a2854fd95e356fce8b945155",path:"/tutorial/chapter4/",title:"4. 오픈소스 BPMS uEngine 소개",headings:[{depth:1,value:"4. 오픈소스 BPMS uEngine 소개",anchor:"#4-오픈소스-bpms-uengine-소개"}]}},{node:{id:"8e73059866e8a11e96aad0be71d1b8b1",path:"/tutorial/chapter2/",title:"2. 워크플로우",headings:[{depth:1,value:"2. 워크플로우",anchor:"#2-워크플로우"},{depth:2,value:"1. 워크플로우 개념과 유형",anchor:"#1-워크플로우-개념과-유형"},{depth:2,value:"2. 워크플로우 구성 요소",anchor:"#2-워크플로우-구성-요소"},{depth:2,value:"3. 워크플로우 참조 모델",anchor:"#3-워크플로우-참조-모델"}]}}]}},d=function(e){var t=e.options;t.__staticData?t.__staticData.data=u:(t.__staticData=h.a.observable({data:u}),t.computed=l({$static:function(){return t.__staticData.data}},t.computed))},p=Object(c.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"relative",on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.increment(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.decrement(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.go(t)}]}},[n("label",{staticClass:"relative block"},[n("span",{staticClass:"sr-only"},[e._v("Search Documentation")]),n("div",{staticClass:"absolute inset-y-0 left-0 flex items-center justify-center px-3 py-2 opacity-50"},[n("SearchIcon",{staticClass:"text-ui-typo",attrs:{size:"1.25x"}})],1),n("input",{ref:"input",staticClass:"block w-full py-2 pl-10 pr-4 border-2 rounded-lg bg-ui-sidebar border-ui-sidebar focus:bg-ui-background",class:{"rounded-b-none":e.showResult},attrs:{type:"search",placeholder:"Search Documentation..."},domProps:{value:e.query},on:{focus:function(t){e.focused=!0},blur:function(t){e.focused=!1},input:function(t){e.focusIndex=-1,e.query=t.target.value},change:function(t){e.query=t.target.value}}})]),e.showResult?n("div",{staticClass:"fixed inset-x-0 z-50 overflow-y-auto border-2 border-t-0 rounded-lg rounded-t-none shadow-lg results bg-ui-background bottom:0 sm:bottom-auto sm:absolute border-ui-sidebar",staticStyle:{"max-height":"calc(100vh - 120px)"}},[n("ul",{staticClass:"px-4 py-2 m-0"},[0===e.results.length?n("li",{staticClass:"px-2"},[e._v("\n        No results for "),n("span",{staticClass:"font-bold"},[e._v(e._s(e.query))]),e._v(".\n      ")]):e._l(e.results,(function(t,a){return n("li",{key:t.path+t.anchor,staticClass:"border-ui-sidebar",class:{"border-b":a+1!==e.results.length},on:{mouseenter:function(t){e.focusIndex=a},mousedown:e.go}},[n("g-link",{staticClass:"block p-2 -mx-2 text-base font-bold rounded-lg",class:{"bg-ui-sidebar text-ui-primary":e.focusIndex===a},attrs:{to:t.path+t.anchor}},[t.value===t.title?n("span",[e._v("\n            "+e._s(t.value)+"\n          ")]):n("span",{staticClass:"flex items-center"},[e._v("\n            "+e._s(t.title)+"\n            "),n("ChevronRightIcon",{staticClass:"mx-1",attrs:{size:"1x"}}),n("span",{staticClass:"font-normal opacity-75"},[e._v(e._s(t.value))])],1)])],1)}))],2)]):e._e()])}),[],!1,null,null,null);"function"==typeof d&&d(p);t.default=p.exports}}]);