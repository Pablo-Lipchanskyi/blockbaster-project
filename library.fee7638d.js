!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){o[e]=t},t.parcelRequired7c6=a);var c=a("bpxeT"),i=a("2TvXO"),d=a("dIxxU"),r=a("2JYat");a("fxMCL");var l="https://api.themoviedb.org/3",s="/movie/",u={openModalMovieCard:document.querySelector("[modal-movie-open]"),closeModalMovieBtn:document.querySelector("[modal-movie-close]"),backdrop:document.querySelector(".js-modalMovie__backdrop"),targetMovie:document.querySelector(".movie__gallery"),modalCard:document.querySelector(".modalMovie__container")};function v(){document.body.classList.remove("show-modal"),window.removeEventListener("keydown",_)}function _(e){"Escape"===e.code&&v()}function m(){return(m=e(c)(e(i).mark((function t(n){return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.default.get("".concat(l).concat(s).concat(n,"?api_key=").concat(r.API_KEY_TMDb,"&language=en-US"));case 3:p(e.sent),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function p(e){var t=e.data,n=t.poster_path,o=t.title,a=t.vote_average,c=t.vote_count,i=t.popularity,d=t.original_title,r=(t.genres,t.genre_ids),l=t.overview,s='\n\n        <div class="movie__poster">\n                <picture class="movie__poster--img">\n                    <img src="https://image.tmdb.org/t/p/w500/'.concat(n,'" alt=').concat(o,' class="movie-poster__img" />\n                </picture>\n            </div>\n            <div class="movie__about">\n                <h2 class="movie__about--title">').concat(o,'</h2>\n                <table>\n                    <tr>\n                        <td class="movie__table-menu">Vote / Votes</td>\n                        <td class="movie__table-number"><span class="average">').concat(a.toFixed(1),'</span> / <span class="count">').concat(Math.round(c),'</span></td>\n                    </tr>\n                    <tr>\n                        <td class="movie__table-menu">Popularity</td> \n                        <td class="movie__table-number">').concat(i.toFixed(1),'</td>\n                    </tr>\n                    <tr>\n                        <td class="movie__table-menu">Original Title</td>\n                        <td class="movie__table-data">').concat(d,'</td>\n                    </tr>\n                    <tr>\n                        <td class="movie__table-menu">Genre</td>\n                        <td class="movie__table-data">').concat(r,' исправить</td>\n                    </tr>\n                </table>\n                <div>\n                    <h3 class="movie__about--subtitle">About</h3>\n                    <p class="modal__about--discription">').concat(l,'</p>\n                </div>\n                <div class="modal__buttons">\n                    <button class="modal__button button-watched" type="button">add to Watched</button>\n                    <button class="modal__button button-queue" type="button">add to queue</button>\n                </div>\n            </div>\n        ');u.modalCard.innerHTML=s}u.openModalMovieCard.addEventListener("click",(function(){document.body.classList.add("show-modal"),window.addEventListener("keydown",_)})),u.closeModalMovieBtn.addEventListener("click",v),u.backdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&v()})),u.targetMovie.addEventListener("click",(function(e){!function(e){m.apply(this,arguments)}(e.target.closest("li").id)}))}();
//# sourceMappingURL=library.fee7638d.js.map
