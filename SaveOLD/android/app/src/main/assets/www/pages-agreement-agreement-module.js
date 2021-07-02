(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-agreement-agreement-module"],{

/***/ "Ywdw":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agreement/agreement.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-back-button slot=\"start\" color=\"dark\"></ion-back-button>\n    <ion-title>Agreement</ion-title>\n  </ion-toolbar>\n\n  <div class=\"ion-text-center ion-padding\" style=\"background-color: #f1c40f;\">\n    <img style=\"width: 50%;\" src=\"../../assets/images/logo.png\" alt=\"\">\n  </div>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"ion-margin\">\n    <h2>Privacy Agreement</h2>\n\n    <p style=\"color:#999999;\">\n      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione eos temporibus dolor minima aliquam deserunt porro, reiciendis illo quidem beatae odit error dolores, voluptatibus vel in repellat itaque molestiae. Laboriosam!\n    </p>\n\n    <p style=\"color:#999999;\">\n      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione eos temporibus dolor minima aliquam deserunt porro, reiciendis illo quidem beatae odit error dolores, voluptatibus vel in repellat itaque molestiae. Laboriosam!\n    </p>\n\n    <p style=\"color:#999999;\">\n      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione eos temporibus dolor minima aliquam deserunt porro, reiciendis illo quidem beatae odit error dolores, voluptatibus vel in repellat itaque molestiae. Laboriosam!\n    </p>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "ZJmL":
/*!*************************************************************!*\
  !*** ./src/app/pages/agreement/agreement-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AgreementPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgreementPageRoutingModule", function() { return AgreementPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _agreement_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agreement.page */ "tpGH");




const routes = [
    {
        path: '',
        component: _agreement_page__WEBPACK_IMPORTED_MODULE_3__["AgreementPage"]
    }
];
let AgreementPageRoutingModule = class AgreementPageRoutingModule {
};
AgreementPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AgreementPageRoutingModule);



/***/ }),

/***/ "tpGH":
/*!***************************************************!*\
  !*** ./src/app/pages/agreement/agreement.page.ts ***!
  \***************************************************/
/*! exports provided: AgreementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgreementPage", function() { return AgreementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_agreement_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./agreement.page.html */ "Ywdw");
/* harmony import */ var _agreement_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agreement.page.scss */ "vFDi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _assets_translation_ar_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/translation/ar.json */ "dWOM");
var _assets_translation_ar_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/translation/ar.json */ "dWOM", 1);
/* harmony import */ var _assets_translation_en_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/translation/en.json */ "aX9w");
var _assets_translation_en_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/translation/en.json */ "aX9w", 1);






let AgreementPage = class AgreementPage {
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
AgreementPage.ctorParameters = () => [];
AgreementPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-agreement',
        template: _raw_loader_agreement_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_agreement_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AgreementPage);



/***/ }),

/***/ "vFDi":
/*!*****************************************************!*\
  !*** ./src/app/pages/agreement/agreement.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZ3JlZW1lbnQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "xh26":
/*!*****************************************************!*\
  !*** ./src/app/pages/agreement/agreement.module.ts ***!
  \*****************************************************/
/*! exports provided: AgreementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgreementPageModule", function() { return AgreementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _agreement_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./agreement-routing.module */ "ZJmL");
/* harmony import */ var _agreement_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./agreement.page */ "tpGH");







let AgreementPageModule = class AgreementPageModule {
};
AgreementPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _agreement_routing_module__WEBPACK_IMPORTED_MODULE_5__["AgreementPageRoutingModule"]
        ],
        declarations: [_agreement_page__WEBPACK_IMPORTED_MODULE_6__["AgreementPage"]]
    })
], AgreementPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-agreement-agreement-module.js.map