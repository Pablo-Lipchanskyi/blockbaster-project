var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var a=n("2shzp"),d=n("OemQu"),i=n("7NN9c");const l={openModalMovieCard:document.querySelector("[modal-movie-open]"),closeModalMovieBtn:document.querySelector("[modal-movie-close]"),backdrop:document.querySelector(".js-modalMovie__backdrop"),targetMovie:document.querySelector(".movie__gallery"),modalCard:document.querySelector(".modalMovie__container")};function r(){document.body.classList.remove("show-modal"),window.removeEventListener("keydown",s)}function s(e){"Escape"===e.code&&r()}l.openModalMovieCard.addEventListener("click",(function(){document.body.classList.add("show-modal"),window.addEventListener("keydown",s)})),l.closeModalMovieBtn.addEventListener("click",r),l.backdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&r()})),l.targetMovie.addEventListener("click",(function(e){!async function(e){try{(0,i.showPreloder)();!function(e){const{poster_path:t,title:o,vote_average:n,vote_count:a,popularity:d,original_title:i,genres:r,genre_ids:s,overview:c}=e.data,u=`\n        <div class="movie__poster">\n                <picture class="movie__poster--img">\n                    <img src="https://image.tmdb.org/t/p/w500/${t}" alt=${o} class="movie-poster__img" />\n                </picture>\n            </div>\n            <div class="movie__about">\n                <h2 class="movie__about--title">${o}</h2>\n                <table>\n                    <tr>\n                        <td class="movie__table-menu">Vote / Votes</td>\n                        <td class="movie__table-number"><span class="average">${n.toFixed(1)}</span> / <span class="count">${Math.round(a)}</span></td>\n                    </tr>\n                    <tr>\n                        <td class="movie__table-menu">Popularity</td> \n                        <td class="movie__table-number">${d.toFixed(1)}</td>\n                    </tr>\n                    <tr>\n                        <td class="movie__table-menu">Original Title</td>\n                        <td class="movie__table-data">${i}</td>\n                    </tr>\n                    <tr>\n                        <td class="movie__table-menu">Genre</td>\n                        <td class="movie__table-genres">${r[0].name}</td>\n                    </tr>\n                </table>\n                <div>\n                    <h3 class="movie__about--subtitle">About</h3>\n                    <p class="modal__about--discription">${c}</p>\n                </div>\n                <div class="modal__buttons">\n                    <button class="modal__button button-watched" type="button">add to Watched</button>\n                    <button class="modal__button button-queue" type="button">add to queue</button>\n                </div>\n            </div>\n        `;l.modalCard.innerHTML=u}(await a.default.get(`https://api.themoviedb.org/3/movie/${e}?api_key=${d.API_KEY_TMDb}&language=en-US`)),(0,i.hidePreloder)()}catch(e){console.log(e),(0,i.hidePreloder)()}}(e.target.closest("li").id)}));
//# sourceMappingURL=library.865b3edb.js.map
