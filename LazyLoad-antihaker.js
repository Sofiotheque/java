var _gaq=_gaq||[];_gaq.push([&#39;_setAccount&#39;,&#39;UA-53639582-4&#39;]);_gaq.push([&#39;_trackPageview&#39;]);setTimeout(&quot;_gaq.push([&#39;_trackEvent&#39;, &#39;30_seconds&#39;, &#39;read&#39;])&quot;,30000);(function(){var ga=document.createElement(&#39;script&#39;);ga.type=&#39;text/javascript&#39;;ga.async=true;ga.src=(&#39;https:&#39;==document.location.protocol?&#39;https://ssl&#39;:&#39;http://www&#39;)+&#39;.google-analytics.com/ga.js&#39;;var s=document.getElementsByTagName(&#39;script&#39;)[0];s.parentNode.insertBefore(ga,s);})();

var block = [&#39;hitleap.com&#39;, &#39;alexaboostup.com&#39;,&#39;addmefast.com&#39;,&#39;Anothersite.com&#39;,&#39;thegeektools.com&#39;,&#39;otohits.net&#39;,&#39;thegeektools.com&#39;,&#39;bighits4u.com&#39;,&#39;rankboostup.com&#39;,&#39;ebesucher.fr&#39;,&#39;alexasurfing.com&#39;,&#39;thegeektools.com&#39;,&#39;easyhits4u.com&#39;,&#39;twistrix.com&#39;,&#39;websyndic.com&#39;,&#39;livesurf.ru&#39;,&#39;10khits.com&#39;,&#39;yibbida.com&#39;,&#39;manyhit.com&#39;,&#39;netvisiteurs.com&#39;,&#39;le1er.net&#39;,&#39;pagefox.net&#39;,&#39;autosurf.fr&#39;,&#39;lautosurf.com&#39;,&#39;autosurf.me&#39;,&#39;autosurfpro.com&#39;];
for (var b = block.length; b--;) {
if (document.referrer.match(block[b]))
window.location = &quot;https://www.google.com/&quot;;}

(function(a){a.fn.lazyload=function(b){var c={threshold:0,failurelimit:0,event:"scroll",effect:"show",container:window;};if(b){a.extend(c,b);}var d=this;if("scroll"==c.event){a(c.container).bind("scroll",function(b){var e=0;d.each(function(){if(a.abovethetop(this,c)||a.leftofbegin(this,c)){}else if(!a.belowthefold(this,c)&&!a.rightoffold(this,c)){a(this).trigger("appear");}else{if(e++>c.failurelimit){return false;}}});var f=a.grep(d,function(a){return!a.loaded;});d=a(f);})}this.each(function(){var b=this;if(undefined==a(b).attr("original")){a(b).attr("original",a(b).attr("src"));}if("scroll"!=c.event||undefined==a(b).attr("src")||c.placeholder==a(b).attr("src")||a.abovethetop(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.rightoffold(b,c)){if(c.placeholder){a(b).attr("src",c.placeholder);}else{a(b).removeAttr("src");}b.loaded=false;}else{b.loaded=true;}a(b).one("appear",function(){if(!this.loaded){a("<img />").bind("load",function(){a(b).hide().attr("src",a(b).attr("original"))[c.effect](c.effectspeed);b.loaded=true;}).attr("src",a(b).attr("original"));}});if("scroll"!=c.event){a(b).bind(c.event,function(c){if(!b.loaded){a(b).trigger("appear");}})}});a(c.container).trigger(c.event);return this;};a.belowthefold=function(b,c){if(c.container===undefined||c.container===window){var d=a(window).height()+a(window).scrollTop();}else{var d=a(c.container).offset().top+a(c.container).height();}return d<=a(b).offset().top-c.threshold;};a.rightoffold=function(b,c){if(c.container===undefined||c.container===window){var d=a(window).width()+a(window).scrollLeft();}else{var d=a(c.container).offset().left+a(c.container).width();}return d<=a(b).offset().left-c.threshold;};a.abovethetop=function(b,c){if(c.container===undefined||c.container===window){var d=a(window).scrollTop();}else{var d=a(c.container).offset().top;}return d>=a(b).offset().top+c.threshold+a(b).height();};a.leftofbegin=function(b,c){if(c.container===undefined||c.container===window){var d=a(window).scrollLeft();}else{var d=a(c.container).offset().left;}return d>=a(b).offset().left+c.threshold+a(b).width();};a.extend(a.expr[":"],{"below-the-fold":"$.belowthefold(a, {threshold : 0, container: window})","above-the-fold":"! $.belowthefold(a, {threshold : 0, container: window})","right-of-fold":"$.rightoffold (a, {threshold : 0, container: window})","left-of-fold":"!$.rightoffold(a, {threshold : 0, container: window})";})})(jQuery);$(function(){$("img").lazyload({placeholder:"http://i22.servimg.com/u/f22/15/42/72/40/grey10.gif",effect:"fadeIn",threshold:"-50";})})