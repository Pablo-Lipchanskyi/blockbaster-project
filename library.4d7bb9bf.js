!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o),o("lb3to");var a=o("2T02J"),i=o("6B1UN");(0,a.hidePreloder)();var n=document.querySelector(".js-filters");function l(e){var t=localStorage.getItem(e);return t?JSON.parse(t):[]}(0,i.createMarkup)(l("watched")),n.addEventListener("click",(function(e){var t=e.target.closest("button");if(!t)return!1;var r=t.dataset.type;t.closest("ul").querySelector(".is-active").classList.remove("is-active"),t.classList.add("is-active"),(0,i.createMarkup)(l(r))}))}();
//# sourceMappingURL=library.4d7bb9bf.js.map
