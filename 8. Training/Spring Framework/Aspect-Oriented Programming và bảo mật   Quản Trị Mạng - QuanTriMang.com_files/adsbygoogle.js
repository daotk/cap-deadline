(function(){var n=this,aa=function(a,b){var c=a.split("."),d=n;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b},ba=function(a,b,c){return a.call.apply(a.bind,arguments)},ca=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,
arguments)}},p=function(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ba:ca;return p.apply(null,arguments)},da=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};var x=(new Date).getTime();var y=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a},z=function(a){return/^true$/.test(a)?!0:!1},ea=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,A=function(a,b){if(!a)return b;var c=a.match(ea);return c?c[0]:b};var fa=z("false"),ga=z("false"),ha=z("false"),ia=z("false");var B=function(a,b,c){c||(c=ia?"https":"http");return[c,"://",a,b].join("")};var ja=y("0.15"),ka=y("0"),la=y(""),ma=y("0.2");var na=function(){return A("","pagead2.googlesyndication.com")};var oa=document,D=window;var pa=/&/g,qa=/</g,ra=/>/g,sa=/\"/g,E={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\"},F={"'":"\\'"};na();
var G=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(null,a[c],c,a)},H=function(a){return!!a&&"function"==typeof a&&!!a.call},ta=function(a,b){if(!(2>arguments.length))for(var c=1,d=arguments.length;c<d;++c)a.push(arguments[c])},I=function(a,b){if(!(1E-4>Math.random())){var c=Math.random();if(c<b){try{var d=new Uint16Array(1);window.crypto.getRandomValues(d);c=d[0]/65536}catch(e){c=Math.random()}return a[Math.floor(c*a.length)]}}return null},ua=function(a){a.google_unique_id?++a.google_unique_id:
a.google_unique_id=1},J=function(a){try{return!!a.location.href||""===a.location.href}catch(b){return!1}},va=function(){var a=window.document;return a.documentElement.clientWidth||a.body.clientWidth};var wa={client:"google_ad_client",format:"google_ad_format",slotname:"google_ad_slot",output:"google_ad_output",ad_type:"google_ad_type",async_oa:"google_async_for_oa_experiment",zrtm:"google_ad_handling_mode",dimpr:"google_always_use_delayed_impressions_experiment",peri:"google_top_experiment"},K=function(a,b,c,d){try{c()}catch(e){c=!ha;try{var f=e.toString();e.name&&-1==f.indexOf(e.name)&&(f+=": "+e.name);e.message&&-1==f.indexOf(e.message)&&(f+=": "+e.message);if(e.stack){var g=e.stack,m=f;try{-1==
g.indexOf(m)&&(g=m+"\n"+g);for(var h;g!=h;)h=g,g=g.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");f=g.replace(/\n */g,"\n")}catch(l){f=m}}g="";e.fileName&&(g=e.fileName);h=-1;e.lineNumber&&(h=e.lineNumber);var k;t:{try{k=d?d():"";break t}catch(q){}k=""}c=b(a,f,g,h,k)}catch(v){xa({context:"protectAndRun",msg:v.toString()+"\n"+(v.stack||"")})}if(!c)throw e;}};aa("google_protectAndRun",K);
var L=function(a,b,c,d,e){a={jscb:fa?1:0,jscd:ga?1:0,context:a,msg:b.substring(0,512),eid:e&&e.substring(0,40),file:c,line:d.toString(),url:oa.URL.substring(0,512),ref:oa.referrer.substring(0,512)};ya(a);xa(a);return!ha};aa("google_handleError",L);
var xa=function(a){if(0.01>Math.random()){a="/pagead/gen_204?id=jserror"+za(a);a=B(A("","pagead2.googlesyndication.com"),a);a=a.substring(0,2E3);D.google_image_requests||(D.google_image_requests=[]);var b=D.document.createElement("img");b.src=a;D.google_image_requests.push(b)}},ya=function(a){var b=a||{};G(wa,function(a,d){b[d]=D[a]})},M=function(a,b){return da(K,a,L,b,void 0)},za=function(a){var b="";G(a,function(a,d){if(0===a||a)b+="&"+d+"="+("function"==typeof encodeURIComponent?
encodeURIComponent(a):escape(a))});return b};var N=null,Aa=function(){if(!N){for(var a=window,b=a,c=0;a!=a.parent;)if(a=a.parent,c++,J(a))b=a;else break;N=b}return N};var Ba=function(){},O=function(a,b,c){switch(typeof b){case "string":Ca(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(b instanceof Array){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),O(a,b[f],c),e=",";c.push("]");break}c.push("{");d="";for(e in b)b.hasOwnProperty(e)&&(f=b[e],"function"!=typeof f&&(c.push(d),Ca(e,c),c.push(":"),O(a,f,c),d=
","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},P={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Da=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,Ca=function(a,b){b.push('"');b.push(a.replace(Da,function(a){if(a in P)return P[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return P[a]=e+b.toString(16)}));b.push('"')};var Ea=function(a){a.google_page_url&&(a.google_page_url=String(a.google_page_url));var b=[];G(a,function(a,d){if(null!=a){var e;try{var f=[];O(new Ba,a,f);e=f.join("")}catch(g){}e&&ta(b,d,"=",e,";")}});return b.join("")};var Fa=/\.((google(|groups|mail|images|print))|gmail)\./,Ga=function(a){try{var b=Fa.test(a.location.host);return!(!a.postMessage||!a.localStorage||!a.JSON||b)}catch(c){return!1}};var Q=function(a){this.b=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{}});this.i=a.google_iframe_oncopy},Ha;var R="var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){w.location.replace(h)}}";
/[&<>\"]/.test(R)&&(-1!=R.indexOf("&")&&(R=R.replace(pa,"&amp;")),-1!=R.indexOf("<")&&(R=R.replace(qa,"&lt;")),-1!=R.indexOf(">")&&(R=R.replace(ra,"&gt;")),-1!=R.indexOf('"')&&(R=R.replace(sa,"&quot;")));Ha=R;Q.prototype.set=function(a,b){this.i.handlers[a]=b;this.b.addEventListener&&this.b.addEventListener("load",p(this.j,this,a),!1)};Q.prototype.j=function(a){a=this.b.document.getElementById(a);var b=a.contentWindow.document;if(a.onload&&b&&(!b.body||!b.body.firstChild))a.onload()};var S,T,U,Ia,Ja=function(){return n.navigator?n.navigator.userAgent:null};Ia=U=T=S=!1;var V;if(V=Ja()){var Ka=n.navigator;S=0==V.lastIndexOf("Opera",0);T=!S&&(-1!=V.indexOf("MSIE")||-1!=V.indexOf("Trident"));U=!S&&-1!=V.indexOf("WebKit");Ia=!S&&!U&&!T&&"Gecko"==Ka.product}var La=T,Ma=Ia,Na=U;var W;if(S&&n.opera){var Oa=n.opera.version;"function"==typeof Oa&&Oa()}else Ma?W=/rv\:([^\);]+)(\)|;)/:La?W=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:Na&&(W=/WebKit\/(\S+)/),W&&W.exec(Ja());var X,Y=function(a){this.c=[];this.b=a||window;this.a=0;this.d=null},Pa=function(a,b){this.k=a;this.h=b};Y.prototype.m=function(a,b){0!=this.a||0!=this.c.length||b&&b!=window?this.g(a,b):(this.a=2,this.f(new Pa(a,window)))};Y.prototype.g=function(a,b){this.c.push(new Pa(a,b||this.b));Qa(this)};Y.prototype.n=function(a){this.a=1;if(a){var b=M("sjr::timeout",p(this.e,this));this.d=this.b.setTimeout(b,a)}};
Y.prototype.e=function(){1==this.a&&(null!=this.d&&(this.b.clearTimeout(this.d),this.d=null),this.a=0);Qa(this)};Y.prototype.o=function(){return!(!window||!Array)};Y.prototype.nq=Y.prototype.m;Y.prototype.nqa=Y.prototype.g;Y.prototype.al=Y.prototype.n;Y.prototype.rl=Y.prototype.e;Y.prototype.sz=Y.prototype.o;var Qa=function(a){var b=M("sjr::tryrun",p(a.l,a));a.b.setTimeout(b,0)};
Y.prototype.l=function(){if(0==this.a&&this.c.length){var a=this.c.shift();this.a=2;var b=M("sjr::run",p(this.f,this,a));a.h.setTimeout(b,0);Qa(this)}};Y.prototype.f=function(a){this.a=0;a.k()};
var Ra=function(a){try{return a.sz()}catch(b){return!1}},Sa=function(a){return!!a&&("object"==typeof a||"function"==typeof a)&&Ra(a)&&H(a.nq)&&H(a.nqa)&&H(a.al)&&H(a.rl)},Ta=function(){if(X&&Ra(X))return X;var a=Aa(),b=a.google_jobrunner;return Sa(b)?X=b:a.google_jobrunner=X=new Y(a)},Ua=function(a,b){Ta().nq(a,b)},Va=function(a,b){Ta().nqa(a,b)};var Wa={"120x90":!0,"160x90":!0,"180x90":!0,"200x90":!0,"468x15":!0,"728x15":!0},Xa=function(){var a="script";return["<",a,' src="',B(na(),"/pagead/js/r20131105/r20130906/show_ads_impl.js",""),'"></',a,">"].join("")},Ya=function(a,b,c,d){return function(){var e=!1;d&&Ta().al(3E4);try{if(J(a.document.getElementById(b).contentWindow)){var f=a.document.getElementById(b).contentWindow,
g=f.document;g.body&&g.body.firstChild||(g.open(),f.google_async_iframe_close=!0,g.write(c))}else{var m=a.document.getElementById(b).contentWindow,h;f=c;f=String(f);if(f.quote)h=f.quote();else{for(var g=['"'],l=0;l<f.length;l++){var k=f.charAt(l),q=k.charCodeAt(0),v=g,C=l+1,u;if(!(u=E[k])){var r;if(31<q&&127>q)r=k;else{var t=k;if(t in F)r=F[t];else if(t in E)r=F[t]=E[t];else{var s=t,w=t.charCodeAt(0);if(31<w&&127>w)s=t;else{if(256>w){if(s="\\x",16>w||256<w)s+="0"}else s="\\u",4096>w&&(s+="0");s+=
w.toString(16).toUpperCase()}r=F[t]=s}}u=r}v[C]=u}g.push('"');h=g.join("")}m.location.replace("javascript:"+h)}e=!0}catch(lb){m=Aa().google_jobrunner,Sa(m)&&m.rl()}e&&(new Q(a)).set(b,Ya(a,b,c,!1))}},Za=function(a){var b=["<iframe"];G(a,function(a,d){null!=a&&b.push(" "+d+'="'+a+'"')});b.push("></iframe>");return b.join("")},$a=function(a,b,c,d){d=d?'"':"";var e=d+"0"+d;a.width=d+b+d;a.height=d+c+d;a.frameborder=e;a.marginwidth=e;a.marginheight=e;a.vspace=e;a.hspace=e;a.allowtransparency=d+"true"+
d;a.scrolling=d+"no"+d},bb=function(a,b,c){ab(a,b,c,function(a,b,f){for(var g=b.id,m=0;!g||a.document.getElementById(g);)g="aswift_"+m++;b.id=g;b.name=g;a=Number(f.google_ad_width);g=Number(f.google_ad_height);f=["<iframe"];for(var h in b)b.hasOwnProperty(h)&&ta(f,h+"="+b[h]);f.push('style="left:0;position:absolute;top:0;"');f.push("></iframe>");h="border:none;height:"+g+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+a+"px;background-color:transparent";c.innerHTML=['<ins style="display:inline-table;',
h,'"><ins id="',b.id+"_anchor",'" style="display:block;',h,'">',f.join(" "),"</ins></ins>"].join("");return b.id})},ab=function(a,b,c,d){var e="script",f=b.google_ad_width,g=b.google_ad_height,m={};$a(m,f,g,!0);m.onload='"'+Ha+'"';d=d(a,m,b);m=window.google_override_format||!Wa[window.google_ad_width+"x"+window.google_ad_height]&&"aa"==window.google_loader_used?I(["c","e"],ma):null;var h=b.google_ad_output,l=b.google_ad_format;l||"html"!=h&&null!=h||(l=b.google_ad_width+"x"+b.google_ad_height,"e"==
m&&(l+="_as"));h=!b.google_ad_slot||b.google_override_format||!Wa[b.google_ad_width+"x"+b.google_ad_height]&&"aa"==b.google_loader_used;l=l&&h?l.toLowerCase():"";b.google_ad_format=l;l=[b.google_ad_slot,b.google_ad_format,b.google_ad_type,b.google_ad_width,b.google_ad_height];if(c){if(c){for(var h=[],k=0;c&&25>k;c=c.parentNode,++k)h.push(9!=c.nodeType&&c.id||"");c=h.join()}else c="";c&&l.push(c)}c=0;if(l)if(c=l.join(":"),l=c.length,0==l)c=0;else{h=305419896;for(k=0;k<l;k++)h^=(h<<5)+(h>>2)+c.charCodeAt(k)&
4294967295;c=0<h?h:4294967296+h}b.google_ad_unit_key=c.toString();c=Ea(b);l=Ga(a);h=3==({visible:1,hidden:2,prerender:3,preview:4}[a.document.webkitVisibilityState||a.document.mozVisibilityState||a.document.visibilityState||""]||0);l&&!h&&void 0===a.google_ad_handling_mode&&(a.google_ad_handling_mode=I(["XN","AZ"],ka)||I(["EI"],la));l=a.google_ad_handling_mode?String(a.google_ad_handling_mode):null;if(Ga(a)&&1==a.google_unique_id&&"XN"!=l){h="zrt_ads_frame"+a.google_unique_id;k=b.google_page_url;
if(!k){i:{var k=a.document,q=f||a.google_ad_width,v=g||a.google_ad_height;if(a.top==a)k=!1;else{var C=k.documentElement;if(q&&v){var u=1,r=1;a.innerHeight?(u=a.innerWidth,r=a.innerHeight):C&&C.clientHeight?(u=C.clientWidth,r=C.clientHeight):k.body&&(u=k.body.clientWidth,r=k.body.clientHeight);if(r>2*v||u>2*q){k=!1;break i}}k=!0}}k=k?a.document.referrer:a.document.URL}k=encodeURIComponent(k);q=null;if("PC"==l||"EI"==l||"AZ"==l){switch(l){case "EI":q="I";break;case "AZ":q="Z";break;default:q="K"}q=
q+"-"+(k+"/"+b.google_ad_unit_key+"/"+a.google_unique_id)}b={};$a(b,f,g,!1);b.style="display:none";f=q;b.id=h;b.name=h;b.src=B(A("","googleads.g.doubleclick.net"),["/pagead/html/r20131105/r20130906/zrt_lookup.html",f?"#"+encodeURIComponent(f):""].join(""));f=Za(b)}else f=null;g=(new Date).getTime();b=a.google_top_experiment;h=a.google_async_for_oa_experiment;k=a.google_always_use_delayed_impressions_experiment;
m=["<!doctype html><html><body>",f,"<",e,">",c,"google_show_ads_impl=true;google_unique_id=",a.google_unique_id,';google_async_iframe_id="',d,'";google_start_time=',x,";",b?'google_top_experiment="'+b+'";':"",l?'google_ad_handling_mode="'+l+'";':"",h?'google_async_for_oa_experiment="'+h+'";':"",k?'google_always_use_delayed_impressions_experiment="'+k+'";':"",m?'google_append_as_for_format_override="'+m+'";':"","google_bpp=",g>x?g-x:1,";</",e,">",Xa(),"</body></html>"].join("");(a.document.getElementById(d)?
Ua:Va)(Ya(a,d,m,!0))},cb=Math.floor(1E6*Math.random()),db=function(a){for(var b=a.data.split("\n"),c={},d=0;d<b.length;d++){var e=b[d].indexOf("=");-1!=e&&(c[b[d].substr(0,e)]=b[d].substr(e+1))}b=c[3];if(c[1]==cb&&(window.google_top_js_status=4,a.source==top&&0==b.indexOf(a.origin)&&(window.google_top_values=c,window.google_top_js_status=5),window.google_top_js_callbacks)){for(a=0;a<window.google_top_js_callbacks.length;a++)window.google_top_js_callbacks[a]();window.google_top_js_callbacks.length=
0}};var Z=["google_analytics_uacct","google_analytics_domain_name"],eb=function(a){return/(^| )adsbygoogle($| )/.test(a.className)&&"done"!=a.getAttribute("data-adsbygoogle-status")},gb=function(a,b,c){a.style&&"none"==a.style.display&&(b.google_dn=1);ua(c);fb(a,b);for(var d=0;d<Z.length;d++)b[Z[d]]=b[Z[d]]||c[Z[d]];b.google_loader_used="aa";if((d=b.google_ad_output)&&"html"!=d)throw Error("No support for google_ad_output="+d);K("aa::main",L,function(){bb(c,b,a)})},fb=function(a,b){for(var c=a.attributes,
d=c.length,e=0;e<d;e++){var f=c[e];if(/data-/.test(f.nodeName)){var g=f.nodeName.replace("data","google").replace(/-/g,"_");b.hasOwnProperty(g)||(b[g]=f.nodeValue)}}c=/([0-9.]+)px/;if(!b.hasOwnProperty("google_ad_format")||"auto"!=b.google_ad_format&&-1==b.google_ad_format.indexOf("horizontal")&&-1==b.google_ad_format.indexOf("rectangle")&&-1==b.google_ad_format.indexOf("vertical"))c.test(a.style.width)&&c.test(a.style.height)||(e=window.getComputedStyle?window.getComputedStyle(a,null):a.currentStyle,
a.style.width=e.width,a.style.height=e.height);else{t:{e=1200>a.offsetWidth?Math.round(a.offsetWidth):1200;g=b.google_ad_format;delete b.google_ad_format;hb(e);for(d=$.length;d--;)if($[d].width<=e&&("auto"==g||-1!=g.indexOf($[d].format))){a.style.width=(300<e&&300<$[d].height?$[d].width:e)+"px";a.style.height=$[d].height+"px";break t}throw Error("Cannot find a responsive size for a container of width="+e+"px and data-ad-format="+g);}b.google_loader_features_used=128}d=["width","height"];for(e=0;e<
d.length;e++)g="google_ad_"+d[e],b.hasOwnProperty(g)||(f=c.exec(a.style[d[e]]))&&(b[g]=Math.round(f[1]))},hb=function(a){var b=a/va(),c=0.5<b||468<=a?"horizontal":0.25<b?"rectangle":"vertical";$.sort(function(a,b){return a.format==c&&b.format!=c?1:a.format!=c&&b.format==c?-1:a.width-b.width||a.height-b.height})},$=[{width:120,height:240,format:"vertical"},{width:120,height:600,format:"vertical"},{width:125,height:125,format:"rectangle"},{width:160,height:600,format:"vertical"},{width:180,height:150,
format:"rectangle"},{width:200,height:200,format:"rectangle"},{width:234,height:60,format:"horizontal"},{width:250,height:250,format:"rectangle"},{width:300,height:250,format:"rectangle"},{width:300,height:600,format:"vertical"},{width:320,height:50,format:"horizontal"},{width:336,height:280,format:"rectangle"},{width:468,height:60,format:"horizontal"},{width:728,height:90,format:"horizontal"},{width:970,height:90,format:"horizontal"}],ib=function(a){for(var b=document.getElementsByTagName("ins"),
c=0,d=b[c];c<b.length;d=b[++c])if(eb(d)&&(!a||d.id==a))return d;return null},jb=function(a){var b=a.element;a=a.params||{};if(b){if(!eb(b)&&(b=b.id&&ib(b.id),!b))throw Error("adsbygoogle: 'element' has already been filled.");if(!("innerHTML"in b))throw Error("adsbygoogle.push(): 'element' is not a good DOM element.");}else if(b=ib(),!b)throw Error("adsbygoogle.push(): All ins elements in the DOM with class=adsbygoogle already have ads in them.");var c=window;b.setAttribute("data-adsbygoogle-status",
"done");gb(b,a,c)},kb=function(){if(!window.google_top_experiment&&!window.google_top_js_status){var a=window;if(2!==(a.top==a?0:J(a.top)?1:2))window.google_top_js_status=0;else if(top.postMessage){var b;try{b=D.top.frames.google_top_static_frame?!0:!1}catch(c){b=!1}if(b){if(window.google_top_experiment=I(["jp_c","jp_zl","jp_wfpmr"],ja),"jp_c"!==window.google_top_experiment){a=window;a.addEventListener?a.addEventListener("message",db,!1):a.attachEvent&&a.attachEvent("onmessage",db);window.google_top_js_status=
3;a={0:"google_loc_request",1:cb};b=[];for(var d in a)b.push(d+"="+a[d]);top.postMessage(b.join("\n"),"*")}}else window.google_top_js_status=2}else window.google_top_js_status=1}if((d=window.adsbygoogle)&&d.shift)for(b=20;(a=d.shift())&&0<b--;)try{jb(a)}catch(e){throw window.setTimeout(kb,0),e;}window.adsbygoogle={push:jb}};kb();})();
