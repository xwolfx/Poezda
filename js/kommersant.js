/*!
 * jQuery md5 Plugin
 */
!function(a){var b=function(a,b){return a<<b|a>>>32-b},c=function(a,b){var c,d,e,f,g;return e=2147483648&a,f=2147483648&b,c=1073741824&a,d=1073741824&b,g=(1073741823&a)+(1073741823&b),c&d?2147483648^g^e^f:c|d?1073741824&g?3221225472^g^e^f:1073741824^g^e^f:g^e^f},d=function(a,b,c){return a&b|~a&c},e=function(a,b,c){return a&c|b&~c},f=function(a,b,c){return a^b^c},g=function(a,b,c){return b^(a|~c)},h=function(a,e,f,g,h,i,j){return a=c(a,c(c(d(e,f,g),h),j)),c(b(a,i),e)},i=function(a,d,f,g,h,i,j){return a=c(a,c(c(e(d,f,g),h),j)),c(b(a,i),d)},j=function(a,d,e,g,h,i,j){return a=c(a,c(c(f(d,e,g),h),j)),c(b(a,i),d)},k=function(a,d,e,f,h,i,j){return a=c(a,c(c(g(d,e,f),h),j)),c(b(a,i),d)},l=function(a){for(var b,c=a.length,d=c+8,e=(d-d%64)/64,f=16*(e+1),g=Array(f-1),h=0,i=0;c>i;)b=(i-i%4)/4,h=8*(i%4),g[b]=g[b]|a.charCodeAt(i)<<h,i++;return b=(i-i%4)/4,h=8*(i%4),g[b]=g[b]|128<<h,g[f-2]=c<<3,g[f-1]=c>>>29,g},m=function(a){var d,e,b="",c="";for(e=0;3>=e;e++)d=255&a>>>8*e,c="0"+d.toString(16),b+=c.substr(c.length-2,2);return b},n=function(a){a=a.replace(/\x0d\x0a/g,"\n");for(var b="",c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b+=String.fromCharCode(d):d>127&&2048>d?(b+=String.fromCharCode(192|d>>6),b+=String.fromCharCode(128|63&d)):(b+=String.fromCharCode(224|d>>12),b+=String.fromCharCode(128|63&d>>6),b+=String.fromCharCode(128|63&d))}return b};a.extend({md5:function(a){var d,e,f,g,o,p,q,r,s,b=Array(),t=7,u=12,v=17,w=22,x=5,y=9,z=14,A=20,B=4,C=11,D=16,E=23,F=6,G=10,H=15,I=21;for(a=n(a),b=l(a),p=1732584193,q=4023233417,r=2562383102,s=271733878,d=0;d<b.length;d+=16)e=p,f=q,g=r,o=s,p=h(p,q,r,s,b[d+0],t,3614090360),s=h(s,p,q,r,b[d+1],u,3905402710),r=h(r,s,p,q,b[d+2],v,606105819),q=h(q,r,s,p,b[d+3],w,3250441966),p=h(p,q,r,s,b[d+4],t,4118548399),s=h(s,p,q,r,b[d+5],u,1200080426),r=h(r,s,p,q,b[d+6],v,2821735955),q=h(q,r,s,p,b[d+7],w,4249261313),p=h(p,q,r,s,b[d+8],t,1770035416),s=h(s,p,q,r,b[d+9],u,2336552879),r=h(r,s,p,q,b[d+10],v,4294925233),q=h(q,r,s,p,b[d+11],w,2304563134),p=h(p,q,r,s,b[d+12],t,1804603682),s=h(s,p,q,r,b[d+13],u,4254626195),r=h(r,s,p,q,b[d+14],v,2792965006),q=h(q,r,s,p,b[d+15],w,1236535329),p=i(p,q,r,s,b[d+1],x,4129170786),s=i(s,p,q,r,b[d+6],y,3225465664),r=i(r,s,p,q,b[d+11],z,643717713),q=i(q,r,s,p,b[d+0],A,3921069994),p=i(p,q,r,s,b[d+5],x,3593408605),s=i(s,p,q,r,b[d+10],y,38016083),r=i(r,s,p,q,b[d+15],z,3634488961),q=i(q,r,s,p,b[d+4],A,3889429448),p=i(p,q,r,s,b[d+9],x,568446438),s=i(s,p,q,r,b[d+14],y,3275163606),r=i(r,s,p,q,b[d+3],z,4107603335),q=i(q,r,s,p,b[d+8],A,1163531501),p=i(p,q,r,s,b[d+13],x,2850285829),s=i(s,p,q,r,b[d+2],y,4243563512),r=i(r,s,p,q,b[d+7],z,1735328473),q=i(q,r,s,p,b[d+12],A,2368359562),p=j(p,q,r,s,b[d+5],B,4294588738),s=j(s,p,q,r,b[d+8],C,2272392833),r=j(r,s,p,q,b[d+11],D,1839030562),q=j(q,r,s,p,b[d+14],E,4259657740),p=j(p,q,r,s,b[d+1],B,2763975236),s=j(s,p,q,r,b[d+4],C,1272893353),r=j(r,s,p,q,b[d+7],D,4139469664),q=j(q,r,s,p,b[d+10],E,3200236656),p=j(p,q,r,s,b[d+13],B,681279174),s=j(s,p,q,r,b[d+0],C,3936430074),r=j(r,s,p,q,b[d+3],D,3572445317),q=j(q,r,s,p,b[d+6],E,76029189),p=j(p,q,r,s,b[d+9],B,3654602809),s=j(s,p,q,r,b[d+12],C,3873151461),r=j(r,s,p,q,b[d+15],D,530742520),q=j(q,r,s,p,b[d+2],E,3299628645),p=k(p,q,r,s,b[d+0],F,4096336452),s=k(s,p,q,r,b[d+7],G,1126891415),r=k(r,s,p,q,b[d+14],H,2878612391),q=k(q,r,s,p,b[d+5],I,4237533241),p=k(p,q,r,s,b[d+12],F,1700485571),s=k(s,p,q,r,b[d+3],G,2399980690),r=k(r,s,p,q,b[d+10],H,4293915773),q=k(q,r,s,p,b[d+1],I,2240044497),p=k(p,q,r,s,b[d+8],F,1873313359),s=k(s,p,q,r,b[d+15],G,4264355552),r=k(r,s,p,q,b[d+6],H,2734768916),q=k(q,r,s,p,b[d+13],I,1309151649),p=k(p,q,r,s,b[d+4],F,4149444226),s=k(s,p,q,r,b[d+11],G,3174756917),r=k(r,s,p,q,b[d+2],H,718787259),q=k(q,r,s,p,b[d+9],I,3951481745),p=c(p,e),q=c(q,f),r=c(r,g),s=c(s,o);var J=m(p)+m(q)+m(r)+m(s);return J.toLowerCase()}})}(jQuery);

/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function(a){if(typeof define==='function'&&define.amd){define(['jquery'],a)}else if(typeof exports==='object'){a(require('jquery'))}else{a(jQuery)}}(function($){var k=/\+/g;function encode(s){return m.raw?s:encodeURIComponent(s)}function decode(s){return m.raw?s:decodeURIComponent(s)}function stringifyCookieValue(a){return encode(m.json?JSON.stringify(a):String(a))}function parseCookieValue(s){if(s.indexOf('"')===0){s=s.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,'\\')}try{s=decodeURIComponent(s.replace(k,' '));return m.json?JSON.parse(s):s}catch(e){}}function read(s,a){var b=m.raw?s:parseCookieValue(s);return $.isFunction(a)?a(b):b}var m=$.cookie=function(a,b,c){if(arguments.length>1&&!$.isFunction(b)){c=$.extend({},m.defaults,c);if(typeof c.expires==='number'){var d=c.expires,t=c.expires=new Date();t.setTime(+t+d*864e+5)}return(document.cookie=[encode(a),'=',stringifyCookieValue(b),c.expires?'; expires='+c.expires.toUTCString():'',c.path?'; path='+c.path:'',c.domain?'; domain='+c.domain:'',c.secure?'; secure':''].join(''))}var e=a?undefined:{};var f=document.cookie?document.cookie.split('; '):[];for(var i=0,l=f.length;i<l;i++){var g=f[i].split('=');var h=decode(g.shift());var j=g.join('=');if(a&&a===h){e=read(j,b);break}if(!a&&(j=read(j))!==undefined){e[h]=j}}return e};m.defaults={};$.removeCookie=function(a,b){if($.cookie(a)===undefined){return false}$.cookie(a,'',$.extend({},b,{expires:-1}));return!$.cookie(a)}}));

/*!
 * FitVids 1.1
 *
 * Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
 * Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 *
 */
(function($){"use strict";$.fn.fitVids=function(options){var settings={customSelector:null};if(!document.getElementById('fit-vids-style')){var head=document.head||document.getElementsByTagName('head')[0];var css='.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';var div=document.createElement('div');div.innerHTML='<p>x</p><style id="fit-vids-style">'+css+'</style>';head.appendChild(div.childNodes[1])}if(options){$.extend(settings,options)}return this.each(function(){var selectors=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];if(settings.customSelector){selectors.push(settings.customSelector)}var $allVideos=$(this).find(selectors.join(','));$allVideos=$allVideos.not("object object");$allVideos.each(function(){var $this=$(this);if(this.tagName.toLowerCase()==='embed'&&$this.parent('object').length||$this.parent('.fluid-width-video-wrapper').length){return}var height=(this.tagName.toLowerCase()==='object'||($this.attr('height')&&!isNaN(parseInt($this.attr('height'),10))))?parseInt($this.attr('height'),10):$this.height(),width=!isNaN(parseInt($this.attr('width'),10))?parseInt($this.attr('width'),10):$this.width(),aspectRatio=height/width;if(!$this.attr('id')){var videoID='fitvid'+Math.floor(Math.random()*999999);$this.attr('id',videoID)}$this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top',(aspectRatio*100)+"%");$this.removeAttr('height').removeAttr('width')})})}})(window.jQuery||window.Zepto);

/*!
 * kommersant.js
 */
if(typeof AdFoxBanner!="function")var AdFoxBanner=function(){this.createBanner=function(){}};if(typeof AdFox_getCodeScript!="function")var AdFox_getCodeScript=function(){};if(typeof jQuery.browser!="object")jQuery.browser={};if(typeof sessionStorage!="object")sessionStorage={};if(typeof sessionStorage.hisrc!="string")sessionStorage.hisrc="";jQuery.extend(jQuery.expr[":"],{"really-hidden":function(element){var $element=jQuery(element);var recursiveHidden=function($element){if($element.length===0||$element.get(0)===document.body){return false}return $element.css("display")==="none"||$element.css("opacity")==0||recursiveHidden($element.parent())};return $element.css("visibility")==="hidden"||recursiveHidden(jQuery(element))}});var canonical=[];var kommersantInit=function(){};var hisrcCached=function(hisrc){return sessionStorage.hisrc.indexOf($.md5(hisrc))!=-1};var lowsrc=function(){$(".lowsrc").each(function(){var $this=$(this);var hisrc=this.src.replace(/_?(\[\d*\])?\.jpg$/i,".jpg");if(hisrcCached(hisrc)){if(hisrc!=this.src){this.src=hisrc}}else{var lowsrc=$this.data("lowsrc")||hisrc.replace(/_t(218|219|220)([_.])/,"_t221$2").replace(/_t222([_.])/,"_t223$1");if(lowsrc!=hisrc){this.src=lowsrc;$this.data("hisrc",hisrc);if(!$this.hasClass("lowsrc-deferred")){$this.addClass("hisrc")}}}$this.removeClass("lowsrc lowsrc-deferred")})};var writeIMG=function(src,lowStr,hiStr){var hisrc=src.replace(/_?(\[\d*\])?\.jpg$/i,".jpg");if(hisrcCached(hisrc)){document.write(hiStr)}else{document.write(lowStr)}};(function($){$(function(){var $window=$(window);var $html=$(document.documentElement);var $document=$(document);var $body=$(document.body);var $root=typeof window.onmousemove!="undefined"?$window:$document;var $darkbox=$();$html.removeClass("no-js");if($html.attr("class")==""){$html.removeAttr("class")}var inArray=function(needle,haystack){if(typeof haystack!=="object"||typeof haystack.length==="undefined"){return false}for(var i=0;i<haystack.length;i++){if(haystack[i]===needle){return true}}return false};(function(){var canonicalPush=function(subject){if(!inArray(subject,canonical)){canonical.push(subject)}};var part1=window.location.protocol+"//";var part2=window.location.hostname.split(".").slice(-2).join(".")+window.location.pathname+window.location.search;canonical.push(part1+part2);canonical.push(part1+"www."+part2);var $links=$("link");$links.each(function(){if(this.rel==="canonical"){if(this.href.indexOf("//www.")===-1){canonicalPush(this.href);canonicalPush(this.href.split("//").join("//www."))}else{canonicalPush(this.href.split("//www.").join("//"));canonicalPush(this.href)}}})})();var darkboxShow=function(){if($darkbox.length!=0){$darkbox.addClass("darkbox-active")}else{$darkbox=$('<div class="darkbox darkbox-active hide1 hide2"></div>');$darkbox.appendTo($body)}};var darkboxHide=function(){$darkbox.removeClass("darkbox-active")};var hisrcPush=function(hisrc){if(hisrcCached(hisrc)){return false}var s=sessionStorage.hisrc;if(typeof s!="string"){s=""}s+=(s==""?"":" ")+$.md5(hisrc);try{sessionStorage.hisrc=s}catch(err){}};var hisrcLoad=function(img,dataKey){var $img=$(img);var hisrc=$img.data(dataKey)||"";if(hisrc!=""){img.src=hisrc;hisrcPush(hisrc)}$img.removeData(dataKey);$img.removeClass("hisrc")};var hisrcLoadVisible=function(context){$(".hisrc:visible",context).add("img[data-hisrc]:visible",context).each(function(){hisrcLoad(this,"hisrc")})};lowsrc();(function(){var $hisrcImages=$(".hisrc:visible").add("img[data-hisrc]:visible");var countTotal=$hisrcImages.length;var countCached=0;var countLoaded=0;var hisrcLoaded=false;var mapResize=function(){var resizeTimer;var resizeTimeout=67;var resizeFunction=function(){hisrcLoadVisible()};$window.on("resize",function(event){window.clearTimeout(resizeTimer);resizeTimer=window.setTimeout(resizeFunction,resizeTimeout)})};$hisrcImages.each(function(){var $this=$(this);if(hisrcCached($this.data("hisrc")||"")){hisrcLoad(this,"hisrc");countCached++}else{$this.one("load",function(event){if(hisrcLoaded){return}countLoaded++;if(countCached+countLoaded>=countTotal){hisrcLoaded=true;hisrcLoadVisible();mapResize()}})}});if(countCached<countTotal){$window.one("load",function(event){if(hisrcLoaded){return}hisrcLoaded=true;hisrcLoadVisible();mapResize()})}else{hisrcLoaded=true;mapResize()}})();(function(){var resizeTimer;var resizeTimeout=67;var resizeFunction=function(){$(".resize").filter(":really-hidden").each(function(){var $this=$(this);var $places=$($this.data("resize-places")||"").filter(":not(:really-hidden)").first();$this.appendTo($places)})};$window.on("resize",function(event){window.clearTimeout(resizeTimer);resizeTimer=window.setTimeout(resizeFunction,resizeTimeout)})})();(function(){$(".copy").each(function(){var $this=$(this);var id=$this.data("copy-id");var target=$this.data("copy-target")||"";var isMove=typeof $this.data("copy-ismove")!="undefined";if(target==""){return}if(!isMove){$this=$this.clone(true,true)}if(typeof id!="undefined"){$this.prop("id",id)}$this.appendTo(target)})})();(function(){var classTemplate="lazyload";var classWrapper="lazyload-wrapper";var attrDataUrl="lazyload-url";var $lazyload=$("."+classTemplate);if($lazyload.length===0){return}var reInit=function(){kommersantInit();$(window).resize()};$lazyload.wrap('<div class="'+classWrapper+'"></div>');$window.on("resize scroll",function(event){var windowScrollTop=$window.scrollTop();var windowScrollLeft=$window.scrollLeft();var windowWidth=$window.width();var windowHeight=$window.height();$("."+classWrapper).each(function(){var $this=$(this);var offset=$this.offset();var isVisibleV=windowScrollTop>=(offset.top-windowHeight)&&windowScrollTop<=(offset.top+$this.outerHeight());var isVisibleH=windowScrollLeft>=(offset.left-windowWidth)&&windowScrollLeft<=(offset.left+$this.outerWidth());var isVisible=(isVisibleV&&isVisibleH);if(isVisible){var $template=$this.find("."+classTemplate);var isScript=($template.prop("tagName")||"").toLowerCase()==="script";var url=$template.data(attrDataUrl);if(typeof url==="string"&&url.length>0){if(isScript){$this.replaceWith("<script src=\""+url+"\"></script>");reInit()}else{$this.removeClass(classWrapper);$this.load(url,reInit)}}else{var html=$template.html();if(isScript){$this.replaceWith("<script>"+html+"</script>")}else{$this.replaceWith(html)}reInit()}}})})})();(function(){$document.on("click",".changeclass",function(event){var $this=$(this);var selector;var action;var data=$this.data("changeclass");event.stopPropagation();event.preventDefault();if(typeof data=="object"){for(selector in data){if(typeof data[selector]=="object"){for(action in data[selector]){switch(action){case"addClass":$(selector).addClass(data[selector][action]);break;case"removeClass":$(selector).removeClass(data[selector][action]);break;case"toggleClass":$(selector).toggleClass(data[selector][action]);break}}}}}})})();(function(){var classMagnify="magnify";var classMagnifyOn="magnify-on";var selectorMagnify="."+classMagnify;$document.on("click",selectorMagnify,function(event){var $this=$(this);event.stopPropagation();event.preventDefault();if(!$this.hasClass(classMagnifyOn)){$this.addClass(classMagnifyOn)}else{$this.removeClass(classMagnifyOn)}})})();(function(){var selectOnChange=function(){var $this=$(this);$this.closest(".fakeelement").find(".fakeelement-select-fake").html($(this.options[this.selectedIndex]).html())};$body.on("change",".fakeelement-select",selectOnChange);$(".fakeelement-select").each(selectOnChange)})();(function(){if($.cookie("IsNonMobileViewport")){$(".fullversion").removeClass("hide")}$(".fullversion-link-on").on("click",function(event){$.cookie("IsNonMobileViewport",1,{"expires":365,"path":"/"});if(!event.ctrlKey&&!event.altKey&&!event.shiftKey){event.stopPropagation();event.preventDefault();window.location.reload()}});$(".fullversion-link-off").on("click",function(event){$.removeCookie("IsNonMobileViewport",{"path":"/"});if(!event.ctrlKey&&!event.altKey&&!event.shiftKey){event.stopPropagation();event.preventDefault();window.location.reload()}})})();(function(){var navsectionCurrent="";var navsectionShow=function(id){var $oldTab;var $oldMenu;var $newTab;var $newMenu;if(typeof id!="string"||id==navsectionCurrent){id=""}if(navsectionCurrent.length>0){$oldTab=$("#navsection-tab-"+navsectionCurrent);$oldMenu=$("#navsection-menu-"+navsectionCurrent);$oldTab.removeClass("b-main_navsection__tab_current");$oldMenu.hide();navsectionSubShow("")}if(id.length>0){$newTab=$("#navsection-tab-"+id);$newTab.addClass("b-main_navsection__tab_current");$newMenu=$("#navsection-menu-"+id);$newMenu.show()}navsectionCurrent=id};$(".navsection-toggle").on("click",function(event){var $this=$(this);var id=$this.data("navsection")||"";event.stopPropagation();event.preventDefault();navsectionShow(id)});var navsectionSubCurrent="";var navsectionSubShow=function(id){var $oldMenu;var $newMenu;if(typeof id!="string"||id==navsectionSubCurrent){id=""}if(navsectionSubCurrent.length>0){$oldMenu=$("#navsection-sub-menu-"+navsectionSubCurrent);$oldMenu.hide()}if(id.length>0){$newMenu=$("#navsection-sub-menu-"+id);$newMenu.show()}navsectionSubCurrent=id};$(".navsection-sub-toggle").on("click",function(event){var $this=$(this);var id=$this.data("navsection")||"";event.stopPropagation();event.preventDefault();navsectionSubShow(id)});var $navmenu=$(".navmenu");var $navmenuRubrics=$("#navmenu-rubrics");var $navmenuToggle=$(".navmenu-toggle");var $navmenuTemplateLoading=$("#navmenu-template-loading").html();var navmenuHover=false;var navmenuTimer;var navmenuTimerHover;var navmenuDelayShow=300;var navmenuDelayHide=200;var navmenuDelayHover=500;var navmenuCurrent="";var navmenuKeyDown=function(event){if(event.keyCode==27){navmenuShow()}};var navmenuShow=function(id,type,url,isDarkbox){var $navmenuItem;navmenuHover=false;if(typeof id!="string"){id=""}if(id==navmenuCurrent){return}if(typeof type!="string"){type=""}if(typeof url!="string"){url=""}if(id.length>0){$navmenuItem=$("#navmenu-"+id);if($navmenuItem.length==0){if(url==""){id=""}else{$navmenuRubrics.append($navmenuTemplateLoading.replace(/{{type}}/g,type).replace(/{{id}}/g,id));$navmenuItem=$("#navmenu-"+id);$.get(url,function(data){var isActive=$navmenuItem.is(".navmenu-active");$navmenuItem.replaceWith(data);$navmenuItem=$("#navmenu-"+id);if(isActive){$navmenuItem.addClass("navmenu-active");hisrcLoadVisible($navmenuItem);try{adfox.update(adfox.screen(),null,true)}catch(err){}}})}}}if(navmenuCurrent.length>0){$("#navmenu-"+navmenuCurrent).removeClass("navmenu-active");$(".navmenu-toggle-active").removeClass("navmenu-toggle-active")}else{if(id.length>0){$root.on("mousedown",navmenuShow);$document.on("keydown",navmenuKeyDown)}}if(id.length>0){$(".navmenu-toggle-current").addClass("navmenu-toggle-active");if(isDarkbox){darkboxShow()}if($navmenuItem.length>0){$navmenuItem.addClass("navmenu-active");hisrcLoadVisible($navmenuItem);try{adfox.update(adfox.screen(),null,true)}catch(err){}}}else{$root.off("mousedown",navmenuShow);$document.off("keydown",navmenuKeyDown);darkboxHide();$(".navmenu-toggle-active").removeClass("navmenu-toggle-active")}navmenuCurrent=id};$navmenuToggle.on("mouseenter mouseleave click",function(event){var $this=$(this);var id=$this.data("navmenu-id")||"";var type=$this.data("navmenu-type")||"";var url=$this.data("navmenu-url")||"";var darkbox=$this.data("navmenu-darkbox");var isDarkbox=typeof darkbox!="undefined";window.clearTimeout(navmenuTimer);switch(event.type){case"mouseenter":if(id!=""&&id!=navmenuCurrent){var fnShow=function(){navmenuShow(id,type,url,isDarkbox);navmenuHover=true;window.clearTimeout(navmenuTimerHover);navmenuTimerHover=window.setTimeout(function(){navmenuHover=false},navmenuDelayHover)};$(".navmenu-toggle-current").removeClass("navmenu-toggle-current");$this.addClass("navmenu-toggle-current");if($(".navmenu-toggle-active").length==0){navmenuTimer=window.setTimeout(fnShow,navmenuDelayShow)}else{fnShow()}}break;case"mouseleave":navmenuTimer=window.setTimeout(function(){navmenuShow()},navmenuDelayHide);break;case"click":window.clearTimeout(navmenuTimer);var href=$this.attr("href");if(typeof href!="string"||href=="#"){event.stopPropagation();event.preventDefault();if(id!=""&&id!=navmenuCurrent||navmenuHover){$(".navmenu-toggle-current").removeClass("navmenu-toggle-current");$this.addClass("navmenu-toggle-current");navmenuShow(id,type,url,isDarkbox)}else{navmenuShow()}}break}});$navmenuToggle.on("mousedown",function(event){window.clearTimeout(navmenuTimer);event.stopPropagation()});$navmenu.on("mouseenter",".navmenu-item",function(event){window.clearTimeout(navmenuTimer)});$navmenu.on("mouseleave",".navmenu-item",function(event){window.clearTimeout(navmenuTimer);navmenuShow()});$navmenu.on("mousedown",".navmenu-item",function(event){event.stopPropagation()})})();(function(){var i;var formatInt=function(n){n=parseInt(n,10)||0;if(n>=1000000){return""+Math.floor(n/1000000)+"M"}if(n>=10000){return""+Math.floor(n/1000)+"K"}return""+n};var currentURL=function(withWWW){return"http://"+(typeof withWWW!="undefined"&&withWWW?"www.":"")+window.location.hostname.split(".").slice(-2).join(".")+window.location.pathname+window.location.search};$(".socials-link").on("click",function(event){if(!event.ctrlKey&&!event.altKey&&!event.shiftKey){event.stopPropagation();event.preventDefault();window.open(this.href,"socials","left=0, top=0, width=800, height=450, directories=no, location=no, menubar=no, personalbar=no, resizable=no, scrollbars=no, status=no, toolbar=no")}});var valueVK=0;var $valueVK=$(".socials-value-vk");if($valueVK.length>0){$valueVK.removeClass("hide");if(typeof VK!="object"){VK={}}if(typeof VK.Share!="object"){VK.Share={}}VK.Share.count=function(index,count){valueVK+=parseInt(count,10)||0;$valueVK.html(formatInt(valueVK))};for(i=0;i<canonical.length;i++){$.getJSON("https://vk.com/share.php?act=count&index=1&format=json&url="+encodeURIComponent(canonical[i])+"&callback=?")}}var valueTW=0;var $valueTW=$(".socials-value-tw");if($valueTW.length>0){$valueTW.removeClass("hide");var callbackTW=function(data){if(typeof data=="object"&&typeof data.count!="undefined"){valueTW+=parseInt(data.count,10)||0}$valueTW.html(formatInt(valueTW))};for(i=0;i<canonical.length;i++){$.getJSON("http://cdn.api.twitter.com/1/urls/count.json?url="+encodeURIComponent(canonical[i])+"&callback=?",callbackTW)}}var valueFB=0;var $valueFB=$(".socials-value-fb");if($valueFB.length>0){$valueFB.removeClass("hide");var callbackFB=function(data){if(typeof data=="object"&&typeof data[0]=="object"&&typeof data[0].share_count!="undefined"){valueFB=parseInt(data[0].share_count,10)||0}$valueFB.html(formatInt(valueFB))};$.getJSON("http://api.facebook.com/restserver.php?method=links.getStats&format=json&urls="+encodeURIComponent(canonical[0])+"&callback=?",callbackFB)}var valueOK=0;var $valueOK=$(".socials-value-ok");if($valueOK.length>0){$valueOK.removeClass("hide");if(typeof ODKL!="object"){ODKL={}}ODKL.updateCount=ODKL.updateCountOC=ODKL.updateCountForVoted=function(id,count){valueOK+=parseInt(count,10)||0;$valueOK.html(formatInt(valueOK))};for(i=0;i<canonical.length;i++){$.getJSON("http://www.odnoklassniki.ru/dk?st.cmd=extLike&uid=odklcnt0&ref="+encodeURIComponent(canonical[i])+"&callback=?")}}})();$("#navsearch-form").add("#frmSearch").on("submit",function(event){if(typeof this.search_query!=="object"||this.search_query.value===""){return false}});$(".b-main-search").each(function(){var constData="details";var selectorItem=".b-main-search-source__item";var selectorTrigger=".b-main-search-source__trigger";var selectorSeparate=".b-main-search-source__separate";var selectorInput="> label > input";var $search=$(this);var $searchItems=$search.find(selectorItem);var $searchTriggers=$search.find(selectorTrigger);var $searchSeparate=$search.find(selectorSeparate);var $searchInputs=$searchItems.find(selectorInput+"[type=checkbox]");var toggle=function($item,value){var isSlide=true;var slideDuration=250;var queue;if(typeof $item!="object"){$item=$(this);isSlide=false}var id=$item.data(constData)||"";if(id==""){return}var $id=$("#"+id);if($id.length>0){if(typeof value!="boolean"){value=$item.find(selectorInput).prop("checked")}if(isSlide){queue=$id.queue("fx");$id.queue("fx",queue.slice(0,1));if(queue.length<=2){if(value){$id.slideDown(slideDuration)}else{$id.slideUp(slideDuration)}}}else{if(value){$id.show()}else{$id.hide()}}}};$searchItems.each(toggle);$search.on("click",selectorItem+" "+selectorInput,function(event){var $item;var $trigger;var $siblings;var $input;var value;if(this.type=="radio"){$(this.form[this.name]).each(function(){toggle($(this).closest(selectorItem),this.checked)})}else{$item=$(this).closest(selectorItem);value=this.checked;toggle($item,value);$input=$item.find(selectorInput);if($input.prop("checked")){if($item.is(selectorSeparate)){$searchInputs.not($input).prop("checked",false)}else{$searchSeparate.find(selectorInput).prop("checked",false)}}if($item.is(selectorTrigger)){$item.siblings(selectorItem).each(function(){var $this=$(this);var $input=$this.find(selectorInput);$input.prop("checked",value);toggle($this,value)})}else{$trigger=$item.siblings(selectorTrigger);if($trigger.length>0){if(value){$siblings=$trigger.siblings(selectorItem);$input=$siblings.find(selectorInput+":not(:checked)");if($input.length==0){$input=$trigger.find(selectorInput);$input.prop("checked",value)}}else{$input=$trigger.find(selectorInput);$input.prop("checked",value)}}}}});$searchTriggers.each(function(){var $this=$(this);$this.find(selectorInput).prop("checked",$this.siblings(selectorItem).find(selectorInput+":not(:checked)").length==0)})});kommersantInit=function(){$(".slider-rates").not(".slider-ready").slider({"isVertical":true,"isDraggable":false,"isLooped":true,"isAutoSlide":true,"isTransform3d":false,"margin":0,"autoSlideInterval":3000,"easing":"linear"});$(".slider-announce").not(".slider-ready").each(function(){var $slider=$(this);var $sliderItem=$slider.find(".slider-item");var i;var html="";if($sliderItem.length>1){for(i=0;i<$sliderItem.length;i++){html+='<li class="b-gallery-nav_lineup_item slider-nav-item"><a class="slider-link" href="#"></a></li>'}$slider.find(".b-gallery-nav_lineup").html(html)}else{$slider.find(".b-gallery-nav_lineup").remove()}$slider.slider({"isLooped":true,"isAutoSlide":true,"margin":20,"autoSlideInterval":5000})});$(".slider-specials").not(".slider-ready").each(function(){var $slider=$(this);var $sliderItem=$slider.find(".slider-item");var i;var html="";if($sliderItem.length>1){for(i=0;i<$sliderItem.length;i++){html+='<li class="b-gallery-nav_lineup_item slider-nav-item"><a class="slider-link" href="#"></a></li>'}$slider.find(".b-gallery-nav_lineup").html(html)}else{$slider.find(".b-gallery-nav_lineup").remove()}$slider.slider({"isKeyboard":true,"isLooped":true,"margin":30})});$(".slider-custom").not(".slider-ready").each(function(){var $slider=$(this);var $sliderItem=$slider.find(".slider-item");var i;var html="";var options={"margin":30,"isKeyboard":true};if($sliderItem.length>1){for(i=0;i<$sliderItem.length;i++){html+='<li class="b-gallery-nav_lineup_item slider-nav-item"><a class="slider-link" href="#"></a></li>'}$slider.find(".b-gallery-nav_lineup").html(html)}else{$slider.find(".b-gallery-nav_lineup").remove()}if(typeof $slider.data("slider-start")!=="undefined"){options["start"]=parseInt($slider.data("slider-start"),10)||0}if(typeof $slider.data("slider-margin")!=="undefined"){options["margin"]=parseInt($slider.data("slider-margin"),10)||0}if(typeof $slider.data("slider-nokeys")!=="undefined"){options["isKeyboard"]=false}if(typeof $slider.data("slider-vertical")!=="undefined"){options["isVertical"]=true}if(typeof $slider.data("slider-loop")!=="undefined"){options["isLooped"]=true}if(typeof $slider.data("slider-auto")!=="undefined"){options["isAutoSlide"]=true}if(typeof $slider.data("slider-nodrag")!=="undefined"){options["isDraggable"]=false}if(typeof $slider.data("slider-duration")!=="undefined"){options["durationItem"]=parseInt($slider.data("slider-duration"),10)||0}$slider.slider(options)});$(".slider-doc-text").not(".slider-ready").slider({"margin":30,"align":0});$(".slider-gallery").not(".slider-ready").each(function(){var $slider=$(this);var $sliderItem=$slider.find(".slider-item");var $sliderItemImg=$sliderItem.find(".photo").find("img");var isInfo=true;var images=[];var timer;var touchesLength=0;var hash=function(index,id){var hash="#id="+id;if(window.location.hash!=hash){window.location.replace(hash)}};var preload=function(index,id){var hisrc=function(index){var img;var $img;var src;img=images[index];if(typeof img!="undefined"){hisrcLoad(img,"hisrc");hisrcLoad(img,"slider-hisrc");delete images[index]}};hisrc(index);hisrc(index+1);hisrc(index-1)};var i;var currentItem=0;var html="";if($sliderItem.length>1){for(i=0;i<$sliderItem.length;i++){html+='<li class="b-gallery-nav_lineup_item slider-nav-item"><a class="slider-link" href="#"></a></li>'}$slider.find(".b-gallery-nav_lineup").html(html)}else{$slider.find(".b-gallery-nav_lineup").remove();$slider.find(".b-gallery-nav_visual").addClass("hide3")}$window.on("touchstart touchend",function(event){touchesLength=event.originalEvent.touches.length});$sliderItem.each(function(i){$(this).find(".photo").find("img").first().each(function(){var $this=$(this);var hisrc=$this.data("hisrc")||$this.data("slider-hisrc")||"";if(hisrc!=""&&hisrcCached(hisrc)){hisrcLoad(this,"slider-hisrc")}else{images[i]=this}})});$slider.slider({"isKeyboard":true,"start":window.location.hash.slice(4)||1,"margin":30,"onReady":function(index,id){picsId=id;currentItem=index;preload(index,id);timer=window.setTimeout(function(){$slider.addClass("slider-hover")},500)},"onChange":function(index,id){picsId=id},"onComplete":function(index,id){if(index==currentItem){return}hash(index,id);preload(index,id);try{countersUpdate()}catch(err){}try{adfox.update(adfox.screen(),["adv","adv3-6_240pxx400px"])}catch(err){}currentItem=index},"onClick":function(index,id){window.clearTimeout(timer);isInfo=!isInfo;if(isInfo){$slider.addClass("slider-hover")}else{$slider.removeClass("slider-hover")}}});$sliderItem.find(".b-gallery__item-original").on("click",function(event){event.stopPropagation()})});if(typeof $.fn.fitVids=="function"){$(".b-article").add(".b-abandoned").add(".b-forums").fitVids({"customSelector":"iframe[src*='//maps.'], iframe[src*='google.com/maps/'], iframe[src*='//instagram.com']"});$(".col-small > .gbox").fitVids()}};kommersantInit();$(window).resize()})})(jQuery);jQuery.extend({"cachedScript":function(url,options){options=jQuery.extend({"dataType":"script","cache":true,"url":url},options);return jQuery.ajax(options)}});
