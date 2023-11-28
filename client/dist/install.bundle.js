/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/install.js":
/*!***************************!*\
  !*** ./src/js/install.js ***!
  \***************************/
/***/ (() => {

eval("var deferredPrompt;\nvar installButton = document.getElementById('install-button');\nwindow.addEventListener('beforeinstallprompt', function (e) {\n  // Prevent the mini-infobar from appearing on mobile\n  e.preventDefault();\n  deferredPrompt = e;\n  // Show the install button\n  installButton.style.display = 'block';\n});\ninstallButton.addEventListener('click', function (e) {\n  // Show the install prompt\n  deferredPrompt.prompt();\n  // Wait for the user to respond to the prompt\n  deferredPrompt.userChoice.then(function (choiceResult) {\n    if (choiceResult.outcome === 'accepted') {\n      console.log('User accepted the install prompt');\n    } else {\n      console.log('User dismissed the install prompt');\n    }\n  });\n});\n\n//# sourceURL=webpack://JATE/./src/js/install.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/install.js"]();
/******/ 	
/******/ })()
;