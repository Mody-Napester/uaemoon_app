(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inserts-details-inserts-details-module"],{

/***/ "Ix3J":
/*!*****************************************************************!*\
  !*** ./src/app/pages/inserts-details/inserts-details.module.ts ***!
  \*****************************************************************/
/*! exports provided: InsertsDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertsDetailsPageModule", function() { return InsertsDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _inserts_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inserts-details-routing.module */ "wFn9");
/* harmony import */ var _inserts_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inserts-details.page */ "rith");







let InsertsDetailsPageModule = class InsertsDetailsPageModule {
};
InsertsDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _inserts_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["InsertsDetailsPageRoutingModule"]
        ],
        declarations: [_inserts_details_page__WEBPACK_IMPORTED_MODULE_6__["InsertsDetailsPage"]]
    })
], InsertsDetailsPageModule);



/***/ }),

/***/ "Ongp":
/*!*****************************************************************!*\
  !*** ./src/app/pages/inserts-details/inserts-details.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnNlcnRzLWRldGFpbHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "rith":
/*!***************************************************************!*\
  !*** ./src/app/pages/inserts-details/inserts-details.page.ts ***!
  \***************************************************************/
/*! exports provided: InsertsDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertsDetailsPage", function() { return InsertsDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_inserts_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./inserts-details.page.html */ "t8qg");
/* harmony import */ var _inserts_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inserts-details.page.scss */ "Ongp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _assets_translation_ar_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/translation/ar.json */ "dWOM");
var _assets_translation_ar_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/translation/ar.json */ "dWOM", 1);
/* harmony import */ var _assets_translation_en_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/translation/en.json */ "aX9w");
var _assets_translation_en_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/translation/en.json */ "aX9w", 1);







let InsertsDetailsPage = class InsertsDetailsPage {
    constructor(navParams) {
        this.navParams = navParams;
        this.id = this.navParams;
        if (localStorage.getItem('lang') == 'en') {
            this.trans = _assets_translation_en_json__WEBPACK_IMPORTED_MODULE_6__["trans"];
        }
        else {
            this.trans = _assets_translation_ar_json__WEBPACK_IMPORTED_MODULE_5__["trans"];
        }
    }
    ngOnInit() {
        console.log(this.id);
    }
};
InsertsDetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] }
];
InsertsDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inserts-details',
        template: _raw_loader_inserts_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inserts_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InsertsDetailsPage);



/***/ }),

/***/ "t8qg":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inserts-details/inserts-details.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-back-button slot=\"start\" color=\"dark\"></ion-back-button>\n    <ion-title>{{ trans.Details }}</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content color=\"primary\">\n  <div style=\"height: 200px;overflow: hidden;\">\n    <img src=\"../../assets/images/pl.png\" alt=\"\">\n  </div>\n\n  <div class=\"ion-padding ion-text-center\">\n    <h3>Main Content</h3>\n\n    <ion-list>\n      <ion-item lines=\"full\">\n        <ion-label><b>Name : </b> Ahmed Aamy</ion-label>\n      </ion-item>\n\n      <ion-item lines=\"full\">\n        <ion-label><b>Name : </b> Ahmed Aamy</ion-label>\n      </ion-item>\n\n      <ion-item lines=\"full\">\n        <ion-label><b>Name : </b> Ahmed Aamy</ion-label>\n      </ion-item>\n\n      <ion-item lines=\"full\">\n        <ion-label><b>Name : </b> Ahmed Aamy</ion-label>\n      </ion-item>\n    </ion-list>\n\n  </div>\n  \n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color=\"tertiary ion-text-center\">\n      <ion-icon name=\"phone-portrait\"></ion-icon> 0123456789\n      <ion-icon name=\"mail\"></ion-icon> ahmsam39@gmail.com\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "wFn9":
/*!*************************************************************************!*\
  !*** ./src/app/pages/inserts-details/inserts-details-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: InsertsDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertsDetailsPageRoutingModule", function() { return InsertsDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _inserts_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inserts-details.page */ "rith");




const routes = [
    {
        path: '',
        component: _inserts_details_page__WEBPACK_IMPORTED_MODULE_3__["InsertsDetailsPage"]
    }
];
let InsertsDetailsPageRoutingModule = class InsertsDetailsPageRoutingModule {
};
InsertsDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InsertsDetailsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-inserts-details-inserts-details-module.js.map