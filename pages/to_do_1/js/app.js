!function(t){var e={};function n(o){if(e[o])return e[o].exports;var l=e[o]={i:o,l:!1,exports:{}};return t[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var l in t)n.d(o,l,function(e){return t[e]}.bind(null,l));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";n.r(e);const o={new_list_box:document.querySelector(".new-list-box"),new_list_box_text_input:document.querySelector(".new-list-box__primary--text"),btn_add:document.getElementById("btn-add"),new_list_box_options:document.getElementById("new-list-box__options"),todo_list_items:document.querySelectorAll(".todo-list__item"),to_do_list_box:document.querySelector(".todo-list__box"),to_do_option:document.getElementsByName("to-do-option")};const l={allItems:{urg:[],imp:[],to_do:[]}};class i{constructor(t,e,n){this.id=t,this.text=n,this.numID=e}}class s{constructor(t,e,n){this.id=t,this.text=n,this.numID=e}}class d{constructor(t,e,n){this.id=t,this.text=n,this.numID=e}}class a{constructor(t,e){this.opcjon=t,this.text=e}addItem(){let t,e,n,o;if("urgent"===this.opcjon?o="urg":"importand"===this.opcjon?o="imp":"to-do"===this.opcjon&&(o="to_do"),l.allItems[o].length>0){t=l.allItems[o][l.allItems[o].length-1].numID+1}else t=0;return"urgent"===this.opcjon?(e="urg-"+t,n=new i(e,t,this.text)):"importand"===this.opcjon?(e="imp-"+t,n=new s(e,t,this.text)):"to-do"===this.opcjon&&(e="to-do-"+t,n=new d(e,t,this.text)),l.allItems[o].push(n),n}}function r(){let t;if(""!==o.new_list_box_text_input.value){for(let e=0;e<o.to_do_option.length;e++)o.to_do_option[e].checked&&(t=o.to_do_option[e].value);((t,e)=>{let n='\n        <li class="todo-list__item todo-list__item--%option%" id="%id%"><span class="todo-list__item-text">%text%</span>\n        <span class="todo-list__edit">\n            <i class="icon-basic-trashcan-remove todo-list__edit-trash"></i>\n        </span>\n    '.replace("%option%",t);n=n.replace("%id%",e.id),n=n.replace("%text%",e.text);const i=document.getElementById(e.id);if(void 0!==i&&null!=i)console.log("Error");else{let e;"to-do"===t?l.allItems.imp.length>0?(e=l.allItems.imp[l.allItems.imp.length-1].id,document.getElementById(e).insertAdjacentHTML("afterend",n)):l.allItems.urg.length>0?(e=l.allItems.urg[0].id,document.getElementById(e).insertAdjacentHTML("afterend",n)):o.to_do_list_box.insertAdjacentHTML("afterbegin",n):"urgent"===t?o.to_do_list_box.insertAdjacentHTML("afterbegin",n):"importand"===t&&(l.allItems.to_do.length>0?(e=l.allItems.to_do[l.allItems.to_do.length-1].id,document.getElementById(e).insertAdjacentHTML("beforebegin",n)):l.allItems.urg.length>0?(e=l.allItems.urg[0].id,document.getElementById(e).insertAdjacentHTML("afterend",n)):o.to_do_list_box.insertAdjacentHTML("afterbegin",n))}})(t,new a(t,o.new_list_box_text_input.value).addItem()),o.new_list_box_text_input.value=""}}function _(){document.querySelectorAll(".todo-list__edit-trash").forEach(t=>{t.addEventListener("click",()=>{const e=t.parentElement.parentElement,n=e.id;let o,i,s=0;void 0!==e&&null!=e&&t.parentElement.parentElement.remove(),-1!==n.search("to-do")?o="to_do":-1!==n.search("urg")?o="urg":-1!==n.search("imp")&&(o="imp"),i=l.allItems[o],i.forEach(t=>{t.id===n?(l.allItems[o].splice(s,1),s=0):s++})})})}window.data=l,o.new_list_box_text_input.addEventListener("focus",()=>{const t=document.getElementById("new-list-box__options");void 0!==t&&null!=t||o.new_list_box.insertAdjacentHTML("beforeend",'\n        <div class="new-list-box__options" id="new-list-box__options">\n            <ul class="new-list-box__list">\n                <li class="new-list-box__option">\n                    <input type="radio" value="urgent" name="to-do-option" class="new-list-box__option-radio" id="urgent">\n                    <label class="new-list-box__label" for="urgent">\n                        <span class="new-list-box__label-radio-button new-list-box__label-radio-button--1"></span>\n                        Urgent\n                    </label>\n                </li>\n                <li class="new-list-box__option">\n                    <input type="radio" value="importand" name="to-do-option" class="new-list-box__option-radio" id="importand">\n                    <label class="new-list-box__label" for="importand">\n                        <span class="new-list-box__label-radio-button new-list-box__label-radio-button--2"></span>\n                        Importand\n                    </label>\n                </li>\n                <li class="new-list-box__option">\n                    <input type="radio" value="to-do" name="to-do-option" class="new-list-box__option-radio" checked id="to-do">\n                    <label class="new-list-box__label" for="to-do">\n                        <span class="new-list-box__label-radio-button new-list-box__label-radio-button--3"></span>\n                        To do\n                    </label>\n                </li>\n            </ul>\n        </div>\n    ')}),o.btn_add.addEventListener("click",()=>{let t=document.getElementById("new-list-box__options");void 0!==t&&null!=t&&(t.style.opacity="0",setTimeout(()=>{t.remove()},300))}),o.btn_add.addEventListener("click",()=>{r(),_()}),document.addEventListener("keypress",t=>{13!==t.keyCode&&13!==t.which||(r(),_())})}]);