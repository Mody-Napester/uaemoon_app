(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forget-password-forget-password-module"],{

/***/ "4VsH":
/*!***************************************************************!*\
  !*** ./src/app/pages/forget-password/forget-password.page.ts ***!
  \***************************************************************/
/*! exports provided: ForgetPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordPage", function() { return ForgetPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_forget_password_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./forget-password.page.html */ "Mn5x");
/* harmony import */ var _forget_password_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forget-password.page.scss */ "4cMY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _assets_translation_ar_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/translation/ar.json */ "dWOM");
var _assets_translation_ar_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/translation/ar.json */ "dWOM", 1);
/* harmony import */ var _assets_translation_en_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/translation/en.json */ "aX9w");
var _assets_translation_en_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/translation/en.json */ "aX9w", 1);






let ForgetPasswordPage = class ForgetPasswordPage {
    constructor() {
        if (localStorage.getItem('lang') == 'en') {
            this.trans = _assets_translation_en_json__WEBPACK_IMPORTED_MODULE_5__["trans"];
        }
        else {
            this.trans = _assets_translation_ar_json__WEBPACK_IMPORTED_MODULE_4__["trans"];
        }
    }
    ngOnInit() {
    }
};
ForgetPasswordPage.ctorParameters = () => [];
ForgetPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forget-password',
        template: _raw_loader_forget_password_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forget_password_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ForgetPasswordPage);



/***/ }),

/***/ "4cMY":
/*!*****************************************************************!*\
  !*** ./src/app/pages/forget-password/forget-password.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JnZXQtcGFzc3dvcmQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "Mn5x":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forget-password/forget-password.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-back-button slot=\"start\" color=\"dark\"></ion-back-button>\n    <ion-title>Forget Password</ion-title>\n  </ion-toolbar>\n\n  <div class=\"ion-text-center ion-padding\" style=\"background-color: #233881;\">\n    <img style=\"width: 70%;\" src=\"../../assets/images/logo.png\" alt=\"\">\n  </div>\n</ion-header>\n\n<ion-content color=\"primary\">\n\n  <h2 class=\"ion-text-center ion-padding\">Recover Your Password</h2>\n\n  <div class=\"ion-margin\">\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"mail\"></ion-icon>\n      <ion-input placeholder=\"Your Email Address\" clearInput type=\"email\"></ion-input>\n    </ion-item>\n  \n    <div class=\"ion-padding-top\"> \n      <ion-button expand=\"block\" size=\"default\" color=\"primary\">Send Recovery Email</ion-button>\n    </div>\n\n  </div>\n  \n</ion-content>\n\n\n<ion-footer>\n  <ion-button routerLink=\"/\" expand=\"block\" size=\"small\" fill=\"clear\" color=\"dark\" shape=\"round\">\n    <ion-icon slot=\"start\" name=\"refresh\"></ion-icon>\n    Go Home\n  </ion-button>\n</ion-footer>\n");

/***/ }),

/***/ "m6ud":
/*!*****************************************************************!*\
  !*** ./src/app/pages/forget-password/forget-password.module.ts ***!
  \*****************************************************************/
/*! exports provided: ForgetPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordPageModule", function() { return ForgetPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _forget_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forget-password-routing.module */ "o1cY");
/* harmony import */ var _forget_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forget-password.page */ "4VsH");







let ForgetPasswordPageModule = class ForgetPasswordPageModule {
};
ForgetPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _forget_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgetPasswordPageRoutingModule"]
        ],
        declarations: [_forget_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgetPasswordPage"]]
    })
], ForgetPasswordPageModule);



/***/ }),

/***/ "o1cY":
/*!*************************************************************************!*\
  !*** ./src/app/pages/forget-password/forget-password-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ForgetPasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordPageRoutingModule", function() { return ForgetPasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _forget_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forget-password.page */ "4VsH");




const routes = [
    {
        path: '',
        component: _forget_password_page__WEBPACK_IMPORTED_MODULE_3__["ForgetPasswordPage"]
    }
];
let ForgetPasswordPageRoutingModule = class ForgetPasswordPageRoutingModule {
};
ForgetPasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgetPasswordPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-forget-password-forget-password-module.js.map