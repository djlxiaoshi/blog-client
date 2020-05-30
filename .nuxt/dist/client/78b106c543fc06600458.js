(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{617:function(e,n){},632:function(e,n,t){"use strict";t.r(n);function r(e,n){return Array(n+1).join(e)}var o=["address","article","aside","audio","blockquote","body","canvas","center","dd","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frameset","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","isindex","li","main","menu","nav","noframes","noscript","ol","output","p","pre","section","table","tbody","td","tfoot","th","thead","tr","ul"];function l(e){return-1!==o.indexOf(e.nodeName.toLowerCase())}var c=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"];function f(e){return-1!==c.indexOf(e.nodeName.toLowerCase())}var d=c.join();var h={};function m(e){for(var n in this.options=e,this._keep=[],this._remove=[],this.blankRule={replacement:e.blankReplacement},this.keepReplacement=e.keepReplacement,this.defaultRule={replacement:e.defaultReplacement},this.array=[],e.rules)this.array.push(e.rules[n])}function v(e,n,t){for(var i=0;i<e.length;i++){var r=e[i];if(y(r,n,t))return r}}function y(e,n,t){var filter=e.filter;if("string"==typeof filter){if(filter===n.nodeName.toLowerCase())return!0}else if(Array.isArray(filter)){if(filter.indexOf(n.nodeName.toLowerCase())>-1)return!0}else{if("function"!=typeof filter)throw new TypeError("`filter` needs to be a string, array, or function");if(filter.call(e,n,t))return!0}}function k(e){var n=e.nextSibling||e.parentNode;return e.parentNode.removeChild(e),n}function w(e,n,t){return e&&e.parentNode===n||t(n)?n.nextSibling||n.parentNode:n.firstChild||n.nextSibling||n.parentNode}h.paragraph={filter:"p",replacement:function(content){return"\n\n"+content+"\n\n"}},h.lineBreak={filter:"br",replacement:function(content,e,n){return n.br+"\n"}},h.heading={filter:["h1","h2","h3","h4","h5","h6"],replacement:function(content,e,n){var t=Number(e.nodeName.charAt(1));return"setext"===n.headingStyle&&t<3?"\n\n"+content+"\n"+r(1===t?"=":"-",content.length)+"\n\n":"\n\n"+r("#",t)+" "+content+"\n\n"}},h.blockquote={filter:"blockquote",replacement:function(content){return"\n\n"+(content=(content=content.replace(/^\n+|\n+$/g,"")).replace(/^/gm,"> "))+"\n\n"}},h.list={filter:["ul","ol"],replacement:function(content,e){var n=e.parentNode;return"LI"===n.nodeName&&n.lastElementChild===e?"\n"+content:"\n\n"+content+"\n\n"}},h.listItem={filter:"li",replacement:function(content,e,n){content=content.replace(/^\n+/,"").replace(/\n+$/,"\n").replace(/\n/gm,"\n    ");var t=n.bulletListMarker+"   ",r=e.parentNode;if("OL"===r.nodeName){var o=r.getAttribute("start"),l=Array.prototype.indexOf.call(r.children,e);t=(o?Number(o)+l:l+1)+".  "}return t+content+(e.nextSibling&&!/\n$/.test(content)?"\n":"")}},h.indentedCodeBlock={filter:function(e,n){return"indented"===n.codeBlockStyle&&"PRE"===e.nodeName&&e.firstChild&&"CODE"===e.firstChild.nodeName},replacement:function(content,e,n){return"\n\n    "+e.firstChild.textContent.replace(/\n/g,"\n    ")+"\n\n"}},h.fencedCodeBlock={filter:function(e,n){return"fenced"===n.codeBlockStyle&&"PRE"===e.nodeName&&e.firstChild&&"CODE"===e.firstChild.nodeName},replacement:function(content,e,n){var t=((e.firstChild.className||"").match(/language-(\S+)/)||[null,""])[1];return"\n\n"+n.fence+t+"\n"+e.firstChild.textContent+"\n"+n.fence+"\n\n"}},h.horizontalRule={filter:"hr",replacement:function(content,e,n){return"\n\n"+n.hr+"\n\n"}},h.inlineLink={filter:function(e,n){return"inlined"===n.linkStyle&&"A"===e.nodeName&&e.getAttribute("href")},replacement:function(content,e){return"["+content+"]("+e.getAttribute("href")+(e.title?' "'+e.title+'"':"")+")"}},h.referenceLink={filter:function(e,n){return"referenced"===n.linkStyle&&"A"===e.nodeName&&e.getAttribute("href")},replacement:function(content,e,n){var t,r,o=e.getAttribute("href"),title=e.title?' "'+e.title+'"':"";switch(n.linkReferenceStyle){case"collapsed":t="["+content+"][]",r="["+content+"]: "+o+title;break;case"shortcut":t="["+content+"]",r="["+content+"]: "+o+title;break;default:var l=this.references.length+1;t="["+content+"]["+l+"]",r="["+l+"]: "+o+title}return this.references.push(r),t},references:[],append:function(e){var n="";return this.references.length&&(n="\n\n"+this.references.join("\n")+"\n\n",this.references=[]),n}},h.emphasis={filter:["em","i"],replacement:function(content,e,n){return content.trim()?n.emDelimiter+content+n.emDelimiter:""}},h.strong={filter:["strong","b"],replacement:function(content,e,n){return content.trim()?n.strongDelimiter+content+n.strongDelimiter:""}},h.code={filter:function(e){var n=e.previousSibling||e.nextSibling,t="PRE"===e.parentNode.nodeName&&!n;return"CODE"===e.nodeName&&!t},replacement:function(content){if(!content.trim())return"";var e="`",n="",t="",r=content.match(/`+/gm);if(r)for(/^`/.test(content)&&(n=" "),/`$/.test(content)&&(t=" ");-1!==r.indexOf(e);)e+="`";return e+n+content+t+e}},h.image={filter:"img",replacement:function(content,e){var n=e.alt||"",t=e.getAttribute("src")||"",title=e.title||"";return t?"!["+n+"]("+t+(title?' "'+title+'"':"")+")":""}},m.prototype={add:function(e,n){this.array.unshift(n)},keep:function(filter){this._keep.unshift({filter:filter,replacement:this.keepReplacement})},remove:function(filter){this._remove.unshift({filter:filter,replacement:function(){return""}})},forNode:function(e){return e.isBlank?this.blankRule:(n=v(this.array,e,this.options))?n:(n=v(this._keep,e,this.options))?n:(n=v(this._remove,e,this.options))?n:this.defaultRule;var n},forEach:function(e){for(var i=0;i<this.array.length;i++)e(this.array[i],i)}};var N="undefined"!=typeof window?window:{};var C,x,S,R=function(){var e=N.DOMParser,n=!1;try{(new e).parseFromString("","text/html")&&(n=!0)}catch(e){}return n}()?N.DOMParser:(C=function(){},x=t(617).JSDOM,C.prototype.parseFromString=function(e){return new x(e).window.document},C);function A(input){var e;"string"==typeof input?e=(S=S||new R).parseFromString('<x-turndown id="turndown-root">'+input+"</x-turndown>","text/html").getElementById("turndown-root"):e=input.cloneNode(!0);return function(e){var element=e.element,n=e.isBlock,t=e.isVoid,r=e.isPre||function(e){return"PRE"===e.nodeName};if(element.firstChild&&!r(element)){for(var o=null,l=!1,c=null,f=w(c,element,r);f!==element;){if(3===f.nodeType||4===f.nodeType){var text=f.data.replace(/[ \r\n\t]+/g," ");if(o&&!/ $/.test(o.data)||l||" "!==text[0]||(text=text.substr(1)),!text){f=k(f);continue}f.data=text,o=f}else{if(1!==f.nodeType){f=k(f);continue}n(f)||"BR"===f.nodeName?(o&&(o.data=o.data.replace(/ $/,"")),o=null,l=!1):t(f)&&(o=null,l=!0)}var d=w(c,f,r);c=f,f=d}o&&(o.data=o.data.replace(/ $/,""),o.data||k(o))}}({element:e,isBlock:l,isVoid:f}),e}function T(e){return e.isBlock=l(e),e.isCode="code"===e.nodeName.toLowerCase()||e.parentNode.isCode,e.isBlank=function(e){return-1===["A","TH","TD","IFRAME","SCRIPT","AUDIO","VIDEO"].indexOf(e.nodeName)&&/^\s*$/i.test(e.textContent)&&!f(e)&&!function(e){return e.querySelector&&e.querySelector(d)}(e)}(e),e.flankingWhitespace=function(e){var n="",t="";if(!e.isBlock){var r=/^[ \r\n\t]/.test(e.textContent),o=/[ \r\n\t]$/.test(e.textContent);r&&!B("left",e)&&(n=" "),o&&!B("right",e)&&(t=" ")}return{leading:n,trailing:t}}(e),e}function B(e,n){var t,r,o;return"left"===e?(t=n.previousSibling,r=/ $/):(t=n.nextSibling,r=/^ /),t&&(3===t.nodeType?o=r.test(t.nodeValue):1!==t.nodeType||l(t)||(o=r.test(t.textContent))),o}var E=Array.prototype.reduce,O=/^\n*/,$=/\n*$/,D=[[/\\/g,"\\\\"],[/\*/g,"\\*"],[/^-/g,"\\-"],[/^\+ /g,"\\+ "],[/^(=+)/g,"\\$1"],[/^(#{1,6}) /g,"\\$1 "],[/`/g,"\\`"],[/^~~~/g,"\\~~~"],[/\[/g,"\\["],[/\]/g,"\\]"],[/^>/g,"\\>"],[/_/g,"\\_"],[/^(\d+)\. /g,"$1\\. "]];function L(e){if(!(this instanceof L))return new L(e);var n={rules:h,headingStyle:"setext",hr:"* * *",bulletListMarker:"*",codeBlockStyle:"indented",fence:"```",emDelimiter:"_",strongDelimiter:"**",linkStyle:"inlined",linkReferenceStyle:"full",br:"  ",blankReplacement:function(content,e){return e.isBlock?"\n\n":""},keepReplacement:function(content,e){return e.isBlock?"\n\n"+e.outerHTML+"\n\n":e.outerHTML},defaultReplacement:function(content,e){return e.isBlock?"\n\n"+content+"\n\n":content}};this.options=function(e){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var n in source)source.hasOwnProperty(n)&&(e[n]=source[n])}return e}({},n,e),this.rules=new m(this.options)}function _(e){var n=this;return E.call(e.childNodes,(function(output,e){var t="";return 3===(e=new T(e)).nodeType?t=e.isCode?e.nodeValue:n.escape(e.nodeValue):1===e.nodeType&&(t=M.call(n,e)),I(output,t)}),"")}function P(output){var e=this;return this.rules.forEach((function(n){"function"==typeof n.append&&(output=I(output,n.append(e.options)))})),output.replace(/^[\t\r\n]+/,"").replace(/[\t\r\n\s]+$/,"")}function M(e){var n=this.rules.forNode(e),content=_.call(this,e),t=e.flankingWhitespace;return(t.leading||t.trailing)&&(content=content.trim()),t.leading+n.replacement(content,e,this.options)+t.trailing}function I(e,n){var t,r,o,l=(t=n,r=[e.match($)[0],t.match(O)[0]].sort(),(o=r[r.length-1]).length<2?o:"\n\n");return(e=e.replace($,""))+l+(n=n.replace(O,""))}L.prototype={turndown:function(input){if(!function(input){return null!=input&&("string"==typeof input||input.nodeType&&(1===input.nodeType||9===input.nodeType||11===input.nodeType))}(input))throw new TypeError(input+" is not a string, or an element/document/fragment node.");if(""===input)return"";var output=_.call(this,new A(input));return P.call(this,output)},use:function(e){if(Array.isArray(e))for(var i=0;i<e.length;i++)this.use(e[i]);else{if("function"!=typeof e)throw new TypeError("plugin must be a Function or an Array of Functions");e(this)}return this},addRule:function(e,n){return this.rules.add(e,n),this},keep:function(filter){return this.rules.keep(filter),this},remove:function(filter){return this.rules.remove(filter),this},escape:function(e){return D.reduce((function(e,n){return e.replace(n[0],n[1])}),e)}};var F=new L({headingStyle:"atx"}),V={mounted:function(){var e=F.turndown("<div>vddav</div>");console.log(e)}},j=t(5),component=Object(j.a)(V,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,null,null);n.default=component.exports}}]);