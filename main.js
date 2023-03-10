(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\George\Documents\Angular\george-website\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.skills = 'I am a software engineer, a robotics researcher and I work with different programming languages such as C/C++, Python, with ROS and JavaScript, TypeScript with Angular.\n'
            + 'SLAM, Computer Vision, Deep Learning and Mobile Robotics are my interests.';
        this.text = '';
        this.counter = 0;
    }
    ngOnInit() {
        this.typeWriter();
    }
    typeWriter() {
        if (this.counter < this.skills.length) {
            this.text += this.skills.charAt(this.counter);
            this.counter++;
            setTimeout(() => {
                this.typeWriter();
            }, 100);
        }
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 138, vars: 1, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], [1, "container"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#myNavbar", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "myNavbar", 1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav", "ml-auto"], ["href", "#whoami", 1, "nav-link"], ["href", "#whatido", 1, "nav-link"], ["href", "#myprojects", 1, "nav-link"], ["id", "whoami", 1, "container-fluid", "bg-1", "text-center"], [1, "margin"], ["aria-hidden", "true", 1, "fas", "fa-terminal", "fa-5x", "code"], ["id", "whatido", 1, "container-fluid", "bg-2", "text-center"], ["aria-hidden", "true", 1, "fas", "fa-code", "fa-5x", "code"], ["id", "myprojects", 1, "container-fluid", "bg-3", "text-center"], [1, "row"], [1, "col-sm-4", "margin-min"], ["href", "https://github.com/georgealexakis/multispectral_processing"], ["aria-hidden", "true", 1, "fas", "fa-camera", "fa-5x"], ["href", "https://github.com/georgealexakis/factory_robot"], ["aria-hidden", "true", 1, "fas", "fa-robot", "fa-5x"], ["href", "https://github.com/georgealexakis/leaf-disease-detector"], ["aria-hidden", "true", 1, "fab", "fa-pagelines", "fa-5x"], ["href", "https://github.com/georgealexakis/ros-joystick"], ["aria-hidden", "true", 1, "fas", "fa-gamepad", "fa-5x"], ["href", "https://github.com/georgealexakis/camera-calibrator"], ["aria-hidden", "true", 1, "fas", "fa-th", "fa-5x"], ["href", "https://drive.google.com/file/d/1_3USuat_cjtN3aaN32Ef4fTGq8czuWXb/"], ["aria-hidden", "true", 1, "fas", "fa-bus", "fa-5x"], ["href", "#"], ["aria-hidden", "true", 1, "fas", "fa-map-marker-alt", "fa-5x"], ["href", "https://geosalexs.000webhostapp.com/admin/"], ["aria-hidden", "true", 1, "fas", "fa-chart-pie", "fa-5x"], ["href", "https://georgealexakis.github.io/quiz-game/"], ["aria-hidden", "true", 1, "fas", "fa-puzzle-piece", "fa-5x"], ["href", "https://georgealexakis.github.io/production-management/"], ["aria-hidden", "true", 1, "fas", "fa-leaf", "fa-5x"], ["href", "https://georgealexakis.github.io/iot-agent/"], ["aria-hidden", "true", 1, "fas", "fa-brain", "fa-5x"], ["href", "https://github.com/georgealexakis"], ["aria-hidden", "true", 1, "fab", "fa-github", "fa-5x"], [1, "container-fluid", "bg-4", "text-center"], ["href", "https://angular.io/"], ["aria-hidden", "true", 1, "fab", "fa-angular", "fa-1x"], ["href", "https://www.linkedin.com/in/george-alexakis-72034610b/"], ["aria-hidden", "true", 1, "fab", "fa-linkedin", "fa-2x"], ["aria-hidden", "true", 1, "fab", "fa-github", "fa-2x"], ["href", "https://www.buymeacoffee.com/georgealexakis"], ["src", "https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=\u2615&slug=georgealexakis&button_colour=bfd641&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "george ALEXAKIS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "about me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "I am george ALEXAKIS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "my skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "robotics projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "multispectral_processing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Multispectral Processing is an implementation in ROS Melodic for Multi-modal Data Processing and Implementation for Vineyard Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "factory_robot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Factory Robot is an implementation of Autonomous Navigated Robot with QR Code Detection and Visual Servoing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "leaf-disease-detector");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Leaf Disease Detector classifies leaves in 2 classes (healthy and rotten)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "ros-joystick");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "ROS Joystick is a Hybrid Application, for remote controlling and monitoring of a robot that runs ROS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "camera-calibrator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](65, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Camera Calibrator is a tiny Python script that performs geometric camera calibration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "web projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "where is the bus? (driver)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](76, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "Where is the bus? (for driver) is an android application, that informs web server about bus GPS location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "where is the bus? (students)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](83, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "Where is the bus? is a hybrid application, that informs students about bus location and many more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "financial management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](90, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "Financial Management is a financial management mobile application, that provides multiple financial features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "quiz game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](97, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "Quiz Game is a mobile application developed with Angular, based on gamification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "production management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](104, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "Production Management is a web application that helps farmers to manage their farms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "IoT agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](111, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "IoT Agent is a web application that enables the monitoring and controling a smart home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "more...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](118, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "find more in my github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "footer", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "copyright \u00A9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "george ALEXAKIS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, " powered by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](128, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](131, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](133, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](136, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](137, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.text);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map