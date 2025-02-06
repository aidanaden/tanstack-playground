import{RouterProvider as He,isPlainObject as z,useRouter as he,useRouterState as L,warning as Se,pick as ze,TSR_DEFERRED_PROMISE as Ae,isPlainArray as Pe,defer as Oe,createMemoryHistory as Fe,createControlledPromise as $e,createRootRoute as Be,Outlet as Le,createFileRoute as qe,lazyRouteComponent as We,createRouter as Je}from"@tanstack/react-router";import{jsx as d,Fragment as oe,jsxs as N}from"react/jsx-runtime";import*as R from"react";import{createElement as ye}from"react";import{faker as $}from"@faker-js/faker";import*as h from"@radix-ui/react-dropdown-menu";import{ChevronRight as Ue,Check as Ve,Circle as Ke,MoreHorizontal as Ge}from"lucide-react";import{clsx as Ze}from"clsx";import{twMerge as Qe}from"tailwind-merge";import{eventHandler as Xe,toWebRequest as Ye,getResponseHeaders as et}from"h3";import"node:async_hooks";import{Readable as de,PassThrough as tt}from"node:stream";import Z from"react-dom/server";import{ReadableStream as rt}from"node:stream/web";function ue(e){return d(He,{router:e.router})}function ge({tag:e,attrs:t,children:r}){switch(e){case"title":return d("title",{...t,suppressHydrationWarning:!0,children:r});case"meta":return d("meta",{...t,suppressHydrationWarning:!0});case"link":return d("link",{...t,suppressHydrationWarning:!0});case"style":return d("style",{...t,dangerouslySetInnerHTML:{__html:r}});case"script":return t&&t.src?d("script",{...t,suppressHydrationWarning:!0}):typeof r=="string"?d("script",{...t,dangerouslySetInnerHTML:{__html:r},suppressHydrationWarning:!0}):null;default:return null}}function nt(e){return e instanceof Headers?new Headers(e):Array.isArray(e)?new Headers(e):typeof e=="object"?new Headers(e):new Headers}function fe(...e){return e.reduce((t,r)=>{const n=nt(r);for(const[s,o]of n.entries())t.set(s,o);return t},new Headers)}const B={stringify:e=>JSON.stringify(e,function(r,n){const s=this[r],o=X.find(c=>c.stringifyCondition(s));return o?o.stringify(s):n}),parse:e=>JSON.parse(e,function(r,n){const s=this[r];if(z(s)){const o=X.find(c=>c.parseCondition(s));if(o)return o.parse(s)}return n}),encode:e=>{if(Array.isArray(e))return e.map(r=>B.encode(r));if(z(e))return Object.fromEntries(Object.entries(e).map(([r,n])=>[r,B.encode(n)]));const t=X.find(r=>r.stringifyCondition(e));return t?t.stringify(e):e},decode:e=>{if(z(e)){const t=X.find(r=>r.parseCondition(e));if(t)return t.parse(e)}return Array.isArray(e)?e.map(t=>B.decode(t)):z(e)?Object.fromEntries(Object.entries(e).map(([t,r])=>[t,B.decode(r)])):e}},Q=(e,t,r,n)=>({key:e,stringifyCondition:t,stringify:s=>({[`$${e}`]:r(s)}),parseCondition:s=>Object.hasOwn(s,`$${e}`),parse:s=>n(s[`$${e}`])}),X=[Q("undefined",e=>e===void 0,()=>0,()=>{}),Q("date",e=>e instanceof Date,e=>e.toISOString(),e=>new Date(e)),Q("error",e=>e instanceof Error,e=>({...e,message:e.message,stack:void 0,cause:e.cause}),e=>Object.assign(new Error(e.message),e)),Q("formData",e=>e instanceof FormData,e=>{const t={};return e.forEach((r,n)=>{const s=t[n];s!==void 0?Array.isArray(s)?s.push(r):t[n]=[s,r]:t[n]=r}),t},e=>{const t=new FormData;return Object.entries(e).forEach(([r,n])=>{Array.isArray(n)?n.forEach(s=>t.append(r,s)):t.append(r,n)}),t})],st=()=>{const e=he(),t=L({select:o=>o.matches.map(c=>c.meta).filter(Boolean)}),r=R.useMemo(()=>{const o=[],c={};let u;return[...t].reverse().forEach(l=>{[...l].reverse().forEach(f=>{if(f)if(f.title)u||(u={tag:"title",children:f.title});else{const m=f.name??f.property;if(m){if(c[m])return;c[m]=!0}o.push({tag:"meta",attrs:{...f}})}})}),u&&o.push(u),o.reverse(),o},[t]),n=L({select:o=>o.matches.map(c=>c.links).filter(Boolean).flat(1).map(c=>({tag:"link",attrs:{...c}})),structuralSharing:!0}),s=L({select:o=>{const c=[];return o.matches.map(u=>e.looseRoutesById[u.routeId]).forEach(u=>{var l,f,m,w;return(w=(m=(f=(l=e.ssr)==null?void 0:l.manifest)==null?void 0:f.routes[u.id])==null?void 0:m.preloads)==null?void 0:w.filter(Boolean).forEach(v=>{c.push({tag:"link",attrs:{rel:"modulepreload",href:v}})})}),c},structuralSharing:!0});return it([...r,...s,...n],o=>JSON.stringify(o))},at=()=>{const e=st();return d(oe,{children:e.map(t=>ye(ge,{...t,key:`tsr-meta-${JSON.stringify(t)}`}))})},ot=()=>d(oe,{children:at()});function it(e,t){const r=new Set;return e.filter(n=>{const s=t(n);return r.has(s)?!1:(r.add(s),!0)})}const ct=()=>{const e=he(),t=L({select:s=>{var o;const c=[],u=(o=e.ssr)==null?void 0:o.manifest;return u?(s.matches.map(l=>e.looseRoutesById[l.routeId]).forEach(l=>{var f,m;return(m=(f=u.routes[l.id])==null?void 0:f.assets)==null?void 0:m.filter(w=>w.tag==="script").forEach(w=>{c.push({tag:"script",attrs:w.attrs,children:w.children})})}),c):(Se(!1,"<Scripts /> found no manifest"),[])},structuralSharing:!0}),{scripts:r}=L({select:s=>({scripts:s.matches.map(o=>o.scripts).flat(1).filter(Boolean).map(({children:o,...c})=>({tag:"script",attrs:{...c,suppressHydrationWarning:!0},children:o}))})}),n=[...r,...t];return d(oe,{children:n.map((s,o)=>ye(ge,{...s,key:`tsr-scripts-${s.tag}-${o}`}))})};function lt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ne,me;function dt(){if(me)return ne;me=1;const e={},t=e.hasOwnProperty,r=(a,i)=>{for(const _ in a)t.call(a,_)&&i(_,a[_])},n=(a,i)=>(i&&r(i,(_,C)=>{a[_]=C}),a),s=(a,i)=>{const _=a.length;let C=-1;for(;++C<_;)i(a[C])},o=a=>"\\u"+("0000"+a).slice(-4),c=(a,i)=>{let _=a.toString(16);return i?_:_.toUpperCase()},u=e.toString,l=Array.isArray,f=a=>typeof Buffer=="function"&&Buffer.isBuffer(a),m=a=>u.call(a)=="[object Object]",w=a=>typeof a=="string"||u.call(a)=="[object String]",v=a=>typeof a=="number"||u.call(a)=="[object Number]",j=a=>typeof a=="bigint",ee=a=>typeof a=="function",q=a=>u.call(a)=="[object Map]",p=a=>u.call(a)=="[object Set]",T={"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"},g=/[\\\b\f\n\r\t]/,P=/[0-9]/,W=/[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,O=/([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^]/g,k=/([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^ !#-&\(-\[\]-_a-~]/g,S=(a,i)=>{const _=()=>{te=U,++i.indentLevel,U=i.indent.repeat(i.indentLevel)},C={escapeEverything:!1,minimal:!1,isScriptContext:!1,quotes:"single",wrap:!1,es6:!1,json:!1,compact:!0,lowercaseHex:!1,numbers:"decimal",indent:"	",indentLevel:0,__inline1__:!1,__inline2__:!1},E=i&&i.json;E&&(C.quotes="double",C.wrap=!0),i=n(C,i),i.quotes!="single"&&i.quotes!="double"&&i.quotes!="backtick"&&(i.quotes="single");const J=i.quotes=="double"?'"':i.quotes=="backtick"?"`":"'",I=i.compact,M=i.lowercaseHex;let U=i.indent.repeat(i.indentLevel),te="";const je=i.__inline1__,V=i.__inline2__,H=I?"":`
`;let b,K=!0;const Ce=i.numbers=="binary",Ee=i.numbers=="octal",Ne=i.numbers=="decimal",De=i.numbers=="hexadecimal";if(E&&a&&ee(a.toJSON)&&(a=a.toJSON()),!w(a)){if(q(a))return a.size==0?"new Map()":(I||(i.__inline1__=!0,i.__inline2__=!1),"new Map("+S(Array.from(a),i)+")");if(p(a))return a.size==0?"new Set()":"new Set("+S(Array.from(a),i)+")";if(f(a))return a.length==0?"Buffer.from([])":"Buffer.from("+S(Array.from(a),i)+")";if(l(a))return b=[],i.wrap=!0,je&&(i.__inline1__=!1,i.__inline2__=!0),V||_(),s(a,y=>{K=!1,V&&(i.__inline2__=!1),b.push((I||V?"":U)+S(y,i))}),K?"[]":V?"["+b.join(", ")+"]":"["+H+b.join(","+H)+H+(I?"":te)+"]";if(v(a)||j(a)){if(E)return JSON.stringify(Number(a));let y;if(Ne)y=String(a);else if(De){let x=a.toString(16);M||(x=x.toUpperCase()),y="0x"+x}else Ce?y="0b"+a.toString(2):Ee&&(y="0o"+a.toString(8));return j(a)?y+"n":y}else return j(a)?E?JSON.stringify(Number(a)):a+"n":m(a)?(b=[],i.wrap=!0,_(),r(a,(y,x)=>{K=!1,b.push((I?"":U)+S(y,i)+":"+(I?"":" ")+S(x,i))}),K?"{}":"{"+H+b.join(","+H)+H+(I?"":te)+"}"):E?JSON.stringify(a)||"null":String(a)}const Ie=i.escapeEverything?O:k;return b=a.replace(Ie,(y,x,ie,G,Te,ke)=>{if(x){if(i.minimal)return x;const ce=x.charCodeAt(0),le=x.charCodeAt(1);if(i.es6){const Me=(ce-55296)*1024+le-56320+65536;return"\\u{"+c(Me,M)+"}"}return o(c(ce,M))+o(c(le,M))}if(ie)return o(c(ie.charCodeAt(0),M));if(y=="\0"&&!E&&!P.test(ke.charAt(Te+1)))return"\\0";if(G)return G==J||i.escapeEverything?"\\"+G:G;if(g.test(y))return T[y];if(i.minimal&&!W.test(y))return y;const re=c(y.charCodeAt(0),M);return E||re.length>2?o(re):"\\x"+("00"+re).slice(-2)}),J=="`"&&(b=b.replace(/\$\{/g,"\\${")),i.isScriptContext&&(b=b.replace(/<\/(script|style)/gi,"<\\/$1").replace(/<!--/g,E?"\\u003C!--":"\\x3C!--")),i.wrap&&(b=J+b+J),b};return S.version="3.0.2",ne=S,ne}var ut=dt();const A=lt(ut),ft=`const __TSR_SSR__={matches:[],streamedValues:{},initMatch:o=>(__TSR_SSR__.matches.push(o),o.extracted?.forEach(l=>{if(l.type==="stream"){let r;l.value=new ReadableStream({start(e){r={enqueue:t=>{try{e.enqueue(t)}catch{}},close:()=>{try{e.close()}catch{}}}}}),l.value.controller=r}else{let r,e;l.value=new Promise((t,a)=>{e=a,r=t}),l.value.reject=e,l.value.resolve=r}}),!0),resolvePromise:({matchId:o,id:l,promiseState:r})=>{const e=__TSR_SSR__.matches.find(t=>t.id===o);if(e){const t=e.extracted?.[l];if(t&&t.type==="promise"&&t.value&&r.status==="success")return t.value.resolve(r.data),!0}return!1},injectChunk:({matchId:o,id:l,chunk:r})=>{const e=__TSR_SSR__.matches.find(t=>t.id===o);if(e){const t=e.extracted?.[l];if(t&&t.type==="stream"&&t.value?.controller)return t.value.controller.enqueue(new TextEncoder().encode(r.toString())),!0}return!1},closeStream:({matchId:o,id:l})=>{const r=__TSR_SSR__.matches.find(e=>e.id===o);if(r){const e=r.extracted?.[l];if(e&&e.type==="stream"&&e.value?.controller)return e.value.controller.close(),!0}return!1},cleanScripts:()=>{document.querySelectorAll(".tsr-once").forEach(o=>{o.remove()})}};window.__TSR_SSR__=__TSR_SSR__;
`;function mt(e,t){e.ssr={manifest:t,serializer:B},e.serverSsr={injectedHtml:[],streamedKeys:new Set,injectHtml:r=>{const n=Promise.resolve().then(r);return e.serverSsr.injectedHtml.push(n),e.emit({type:"onInjectedHtml",promise:n}),n.then(()=>{})},injectScript:(r,n)=>e.serverSsr.injectHtml(async()=>`<script class='tsr-once'>${await r()}; if (typeof __TSR_SSR__ !== 'undefined') __TSR_SSR__.cleanScripts()<\/script>`),streamValue:(r,n)=>{Se(!e.serverSsr.streamedKeys.has(r),"Key has already been streamed: "+r),e.serverSsr.streamedKeys.add(r),e.serverSsr.injectScript(()=>`__TSR_SSR__.streamedValues['${r}'] = { value: ${A(e.ssr.serializer.stringify(n),{isScriptContext:!0,wrap:!0,json:!0})}}`)},onMatchSettled:St},e.serverSsr.injectScript(()=>ft,{logScript:!1})}function pt(e){var t,r;const n={manifest:e.ssr.manifest,dehydratedData:(r=(t=e.options).dehydrate)==null?void 0:r.call(t)};e.serverSsr.injectScript(()=>`__TSR_SSR__.dehydrated = ${A(e.ssr.serializer.stringify(n),{isScriptContext:!0,wrap:!0,json:!0})}`)}function ht(e,t){const r=[];return{replaced:ae(e,(s,o)=>{if(s instanceof ReadableStream){const[c,u]=s.tee(),l={type:"stream",path:o,id:r.length,matchIndex:t.match.index,stream:u};return r.push(l),c}else if(s instanceof Promise){const c=Oe(s),u={type:"promise",path:o,id:r.length,matchIndex:t.match.index,promise:c};r.push(u)}return s}),extracted:r}}function St(e){const{router:t,match:r}=e;let n,s;if(r.loaderData!==void 0){const l=ht(r.loaderData,{match:r});r.loaderData=l.replaced,n=l.extracted,s=n.reduce((f,m)=>se(f,["temp",...m.path],void 0),{temp:l.replaced}).temp}const o=`__TSR_SSR__.initMatch(${A({id:r.id,__beforeLoadContext:t.ssr.serializer.stringify(r.__beforeLoadContext),loaderData:t.ssr.serializer.stringify(s),error:t.ssr.serializer.stringify(r.error),extracted:n?.map(l=>ze(l,["type","path"])),updatedAt:r.updatedAt,status:r.status},{isScriptContext:!0,wrap:!0,json:!0})})`;t.serverSsr.injectScript(()=>o),n&&n.forEach(l=>l.type==="promise"?c(l):u(l));function c(l){t.serverSsr.injectScript(async()=>(await l.promise,`__TSR_SSR__.resolvePromise(${A({matchId:r.id,id:l.id,promiseState:l.promise[Ae]},{isScriptContext:!0,wrap:!0,json:!0})})`))}function u(l){t.serverSsr.injectHtml(async()=>{try{const f=l.stream.getReader();let m=null;for(;!(m=await f.read()).done;)if(m.value){const w=`__TSR_SSR__.injectChunk(${A({matchId:r.id,id:l.id,chunk:m.value},{isScriptContext:!0,wrap:!0,json:!0})})`;t.serverSsr.injectScript(()=>w)}t.serverSsr.injectScript(()=>`__TSR_SSR__.closeStream(${A({matchId:r.id,id:l.id},{isScriptContext:!0,wrap:!0,json:!0})})`)}catch(f){console.error("stream read error",f)}return""})}}function se(e,t,r){if(t.length===0)return r;const[n,...s]=t;return Array.isArray(e)?e.map((o,c)=>c===Number(n)?se(o,s,r):o):z(e)?{...e,[n]:se(e[n],s,r)}:e}function ae(e,t,r=[]){if(Pe(e))return e.map((s,o)=>ae(s,t,[...r,`${o}`]));if(z(e)){const s={};for(const o in e)s[o]=ae(e[o],t,[...r,o]);return s}const n=t(e,r);return n!==e?n:e}function yt({createRouter:e,getRouterManifest:t}){return r=>Xe(async n=>{const s=Ye(n),o=new URL(s.url),c=o.href.replace(o.origin,""),u=Fe({initialEntries:[c]}),l=e();mt(l,t?.()),l.update({history:u}),await l.load(),pt(l);const f=gt({event:n,router:l});return await r({request:s,router:l,responseHeaders:f})})}function gt(e){e.event.__tsrHeadersSent=!0;let t=fe(et(e.event),{"Content-Type":"text/html; charset=UTF-8"},...e.router.state.matches.map(n=>n.headers));const{redirect:r}=e.router.state;return r&&(t=fe(t,r.headers,{Location:r.href})),t}var _t=" daum[ /]| deusu/| yadirectfetcher|(?:^|[^g])news(?!sapphire)|(?<! (?:channel/|google/))google(?!(app|/google| pixel))|(?<! cu)bots?(?:\\b|_)|(?<!(?:lib))http|(?<![hg]m)score|@[a-z][\\w-]+\\.|\\(\\)|\\.com\\b|\\btime/|^<|^[\\w \\.\\-\\(?:\\):%]+(?:/v?\\d+(?:\\.\\d+)?(?:\\.\\d{1,10})*?)?(?:,|$)|^[^ ]{50,}$|^\\d+\\b|^\\w*search\\b|^\\w+/[\\w\\(\\)]*$|^active|^ad muncher|^amaya|^avsdevicesdk/|^biglotron|^bot|^bw/|^clamav[ /]|^client/|^cobweb/|^custom|^ddg[_-]android|^discourse|^dispatch/\\d|^downcast/|^duckduckgo|^email|^facebook|^getright/|^gozilla/|^hobbit|^hotzonu|^hwcdn/|^igetter/|^jeode/|^jetty/|^jigsaw|^microsoft bits|^movabletype|^mozilla/5\\.0\\s[a-z\\.-]+$|^mozilla/\\d\\.\\d \\(compatible;?\\)$|^mozilla/\\d\\.\\d \\w*$|^navermailapp|^netsurf|^offline|^openai/|^owler|^php|^postman|^python|^rank|^read|^reed|^rest|^rss|^snapchat|^space bison|^svn|^swcd |^taringa|^thumbor/|^track|^w3c|^webbandit/|^webcopier|^wget|^whatsapp|^wordpress|^xenu link sleuth|^yahoo|^yandex|^zdm/\\d|^zoom marketplace/|^{{.*}}$|adscanner/|analyzer|archive|ask jeeves/teoma|audit|bit\\.ly/|bluecoat drtr|browsex|burpcollaborator|capture|catch|check\\b|checker|chrome-lighthouse|chromeframe|classifier|cloudflare|convertify|cookiehubscan|crawl|cypress/|dareboost|datanyze|dejaclick|detect|dmbrowser|download|evc-batch/|exaleadcloudview|feed|firephp|functionize|gomezagent|headless|httrack|hubspot marketing grader|hydra|ibisbrowser|images|infrawatch|insight|inspect|iplabel|ips-agent|java(?!;)|jsjcw_scanner|library|linkcheck|mail\\.ru/|manager|measure|neustar wpm|node|nutch|offbyone|optimize|pageburst|pagespeed|parser|perl|phantomjs|pingdom|powermarks|preview|proxy|ptst[ /]\\d|reputation|resolver|retriever|rexx;|rigor|rss\\b|scanner\\.|scrape|server|sogou|sparkler/|speedcurve|spider|splash|statuscake|supercleaner|synapse|synthetic|tools|torrent|trace|transcoder|url|validator|virtuoso|wappalyzer|webglance|webkit2png|whatcms/|zgrab",bt=/bot|crawl|http|lighthouse|scan|search|spider/i,F;function wt(){if(F instanceof RegExp)return F;try{F=new RegExp(_t,"i")}catch{F=bt}return F}function pe(e){return!!e&&wt().test(e)}function xt(e,t){return _e(e,t)}function Rt(e,t){return de.fromWeb(_e(e,de.toWeb(t)))}const vt=/(<body)/,jt=/(<\/body>)/,Ct=/(<\/html>)/,Et=/(<head.*?>)/,Nt=/(<\/[a-zA-Z][\w:.-]*?>)/g,Dt=new TextDecoder;function It(){let e;const t=new TextEncoder,n={stream:new rt({start(s){e=s}}),write:s=>{e.enqueue(t.encode(s))},end:s=>{s&&e.enqueue(t.encode(s)),e.close(),n.destroyed=!0},destroy:s=>{e.error(s)},destroyed:!1};return n}async function Tt(e,t){var r,n,s;try{const o=e.getReader();let c;for(;!(c=await o.read()).done;)(r=t.onData)==null||r.call(t,c);(n=t.onEnd)==null||n.call(t)}catch(o){(s=t.onError)==null||s.call(t,o)}}function _e(e,t){const r=It();let n=!0,s="",o="",c=!1,u=!1,l="",f="";function m(){const p=s;return s="",p}function w(p){return p instanceof Uint8Array?Dt.decode(p):String(p)}const v=$e();let j=0;e.serverSsr.injectedHtml.forEach(p=>{q(p)});const ee=e.subscribe("onInjectedHtml",p=>{q(p.promise)});function q(p){j++,p.then(T=>{c?r.write(T):s+=T}).catch(v.reject).finally(()=>{j--,!n&&j===0&&(ee(),v.resolve())})}return v.then(()=>{const p=f+m()+o;r.end(p)}).catch(p=>{console.error("Error reading routerStream:",p),r.destroy(p)}),Tt(t,{onData:p=>{const T=w(p.value);let g=l+T;const P=g.match(jt),W=g.match(Ct);if(c||g.match(vt)&&(c=!0),!u){const S=g.match(Et);if(S){u=!0;const a=S.index,i=S[0],_=g.slice(a+i.length);r.write(g.slice(0,a)+i+m()),g=_}}if(!c){r.write(g),l="";return}if(P&&W&&P.index<W.index){const S=P.index;o=g.slice(S),r.write(g.slice(0,S)+m()),l="";return}let O,k=0;for(;(O=Nt.exec(g))!==null;)k=O.index+O[0].length;if(k>0){const S=g.slice(0,k)+m()+f;r.write(S),l=g.slice(k)}else l=g,f+=m()},onEnd:()=>{n=!1,j===0&&v.resolve()},onError:p=>{console.error("Error reading appStream:",p),r.destroy(p)}}),r.stream}const kt=async({request:e,router:t,responseHeaders:r})=>{if(typeof Z.renderToReadableStream=="function"){const n=await Z.renderToReadableStream(d(ue,{router:t}),{signal:e.signal});pe(e.headers.get("User-Agent"))&&await n.allReady;const s=xt(t,n);return new Response(s,{status:t.state.statusCode,headers:r})}if(typeof Z.renderToPipeableStream=="function"){const n=new tt;try{const o=Z.renderToPipeableStream(d(ue,{router:t}),{...pe(e.headers.get("User-Agent"))?{onAllReady(){o.pipe(n)}}:{onShellReady(){o.pipe(n)}},onError:(c,u)=>{console.error("Error in renderToPipeableStream:",c,u)}})}catch(o){console.error("Error in renderToPipeableStream:",o)}const s=Rt(t,n);return new Response(s,{status:t.state.statusCode,headers:r})}throw new Error("No renderToReadableStream or renderToPipeableStream found in react-dom/server. Ensure you are using a version of react-dom that supports streaming.")},Mt=()=>({routes:{__root__:{filePath:"__root.tsx",children:["/"],preloads:["/_build/assets/client-Ds2MOZ_X.js","/_build/assets/client-KF6AG94S.js"]},"/":{filePath:"index.tsx"}}});function Ht(e){return globalThis.MANIFEST[e]}function zt(){const e=Mt(),t=e.routes.__root__=e.routes.__root__||{};t.assets=t.assets||[];const r=Ht("client");return t.assets.push({tag:"script",attrs:{src:r.inputs[r.handler]?.output.path,type:"module",suppressHydrationWarning:!0,async:!0}}),e}function At(){const e=zt();return{...e,routes:Object.fromEntries(Object.entries(e.routes).map(([t,r])=>{const{preloads:n,assets:s}=r;return[t,{preloads:n,assets:s}]}))}}const Pt="/_build/assets/app-B6OQpGkS.css",be=Be({head:()=>({meta:[{charSet:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{title:"TanStack Start Starter"}],links:[{rel:"stylesheet",href:Pt}]}),component:Ot});function Ot(){return d(Ft,{children:d(Le,{})})}function Ft({children:e}){return N("html",{children:[d("head",{children:d(ot,{})}),N("body",{children:[e,d(ct,{})]})]})}function D(...e){return Qe(Ze(e))}const $t=h.Root,Bt=h.Trigger,Lt=R.forwardRef(({className:e,inset:t,children:r,...n},s)=>N(h.SubTrigger,{ref:s,className:D("flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none","focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",t&&"pl-8",e),...n,children:[r,d(Ue,{className:"ml-auto"})]}));Lt.displayName=h.SubTrigger.displayName;const qt=R.forwardRef(({className:e,...t},r)=>d(h.SubContent,{ref:r,className:D("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95","data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...t}));qt.displayName=h.SubContent.displayName;const we=R.forwardRef(({className:e,sideOffset:t=4,...r},n)=>d(h.Portal,{children:d(h.Content,{ref:n,sideOffset:t,className:D("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...r})}));we.displayName=h.Content.displayName;const Y=R.forwardRef(({className:e,inset:t,...r},n)=>d(h.Item,{ref:n,className:D("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",t&&"pl-8",e),...r}));Y.displayName=h.Item.displayName;const Wt=R.forwardRef(({className:e,children:t,checked:r,...n},s)=>N(h.CheckboxItem,{ref:s,className:D("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),checked:r,...n,children:[d("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:d(h.ItemIndicator,{children:d(Ve,{className:"h-4 w-4"})})}),t]}));Wt.displayName=h.CheckboxItem.displayName;const Jt=R.forwardRef(({className:e,children:t,...r},n)=>N(h.RadioItem,{ref:n,className:D("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...r,children:[d("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:d(h.ItemIndicator,{children:d(Ke,{className:"h-2 w-2 fill-current"})})}),t]}));Jt.displayName=h.RadioItem.displayName;const xe=R.forwardRef(({className:e,inset:t,...r},n)=>d(h.Label,{ref:n,className:D("px-2 py-1.5 text-sm font-semibold",t&&"pl-8",e),...r}));xe.displayName=h.Label.displayName;const Re=R.forwardRef(({className:e,...t},r)=>d(h.Separator,{ref:r,className:D("-mx-1 my-1 h-px bg-muted",e),...t}));Re.displayName=h.Separator.displayName;const Ut=()=>import("./index-J6tiH7jR.js"),ve=qe("/")({component:We(Ut,"component",()=>ve.ssr)}),Vt={PENDING:"pending",PROCESSING:"processing",SUCCESS:"success",FAILED:"failed"};function Kt(){return{id:$.string.uuid(),amount:$.number.float(),email:$.internet.email(),status:$.helpers.enumValue(Vt)}}const fr=$.helpers.multiple(Kt,{count:1e4}),mr=[{accessorKey:"id",header:"ID",cell:({row:e})=>d("div",{className:"text-right font-medium truncate max-w-[100px] text-ellipsis",children:e.getValue("id")})},{accessorKey:"status",header:"Status"},{accessorKey:"email",header:({column:e})=>d("button",{onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),children:"Email"}),cell:({row:e})=>d("div",{className:"text-right font-medium truncate max-w-[100px] text-ellipsis",children:e.getValue("email")})},{accessorKey:"amount",header:()=>d("div",{className:"text-right",children:"Amount"}),cell:({row:e})=>{const t=parseFloat(e.getValue("amount")),r=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t);return d("div",{className:"text-right font-medium",children:r})}},{id:"actions",size:5,cell:({row:e})=>{const t=e.original;return N($t,{children:[d(Bt,{asChild:!0,children:N("button",{className:"h-8 w-8 p-0 flex items-center justify-center",children:[d("span",{className:"sr-only",children:"Open menu"}),d(Ge,{className:"h-4 w-4"})]})}),N(we,{align:"end",children:[d(xe,{children:"Actions"}),d(Y,{onClick:()=>navigator.clipboard.writeText(t.id),children:"Copy payment ID"}),d(Re,{}),d(Y,{children:"View customer"}),d(Y,{children:"View payment details"})]})]})}}],Gt=ve.update({id:"/",path:"/",getParentRoute:()=>be}),Zt={IndexRoute:Gt},Qt=be._addFileChildren(Zt)._addFileTypes();function Xt(){return Je({routeTree:Qt,scrollRestoration:!0})}const pr=yt({createRouter:Xt,getRouterManifest:At})(kt);export{mr as a,D as c,pr as h,fr as p};
