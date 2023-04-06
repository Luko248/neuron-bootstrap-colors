/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./Resources/scripts/init.ts ***!
  \***********************************/
addEventListener("DOMContentLoaded", () => {
    console.log("Neuron Bootstrap colors");
    let blueColors = document.querySelectorAll('.bg-primary');
    for (let i = 1; i < 10; i++) {
        let shade = 100 * i;
        blueColors[i].classList.add('blue-' + shade);
    }
});

/******/ })()
;
//# sourceMappingURL=init.js.map