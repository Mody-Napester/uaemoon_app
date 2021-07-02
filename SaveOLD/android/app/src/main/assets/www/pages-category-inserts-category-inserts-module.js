(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-category-inserts-category-inserts-module"],{

/***/ "7qcs":
/*!*******************************************************************!*\
  !*** ./src/app/pages/category-inserts/category-inserts.module.ts ***!
  \*******************************************************************/
/*! exports provided: CategoryInsertsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryInsertsPageModule", function() { return CategoryInsertsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _category_inserts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category-inserts-routing.module */ "CqBO");
/* harmony import */ var _category_inserts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category-inserts.page */ "7zim");







let CategoryInsertsPageModule = class CategoryInsertsPageModule {
};
CategoryInsertsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _category_inserts_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoryInsertsPageRoutingModule"]
        ],
        declarations: [_category_inserts_page__WEBPACK_IMPORTED_MODULE_6__["CategoryInsertsPage"]]
    })
], CategoryInsertsPageModule);



/***/ }),

/***/ "7zim":
/*!*****************************************************************!*\
  !*** ./src/app/pages/category-inserts/category-inserts.page.ts ***!
  \*****************************************************************/
/*! exports provided: CategoryInsertsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryInsertsPage", function() { return CategoryInsertsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_category_inserts_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./category-inserts.page.html */ "gdIm");
/* harmony import */ var _category_inserts_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category-inserts.page.scss */ "WAMb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_components_ad_ad_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/ad/ad.component */ "qi+E");
/* harmony import */ var src_app_services_ads_ads_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/ads/ads.service */ "I8hk");
/* harmony import */ var _assets_translation_ar_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../assets/translation/ar.json */ "dWOM");
var _assets_translation_ar_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/translation/ar.json */ "dWOM", 1);
/* harmony import */ var _assets_translation_en_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../assets/translation/en.json */ "aX9w");
var _assets_translation_en_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/translation/en.json */ "aX9w", 1);










let CategoryInsertsPage = class CategoryInsertsPage {
    constructor(menu, navCtrl, insertService, loadingCtrl, modalCtrl) {
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.insertService = insertService;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        if (localStorage.getItem('lang') == 'en') {
            this.trans = _assets_translation_en_json__WEBPACK_IMPORTED_MODULE_9__["trans"];
        }
        else {
            this.trans = _assets_translation_ar_json__WEBPACK_IMPORTED_MODULE_8__["trans"];
        }
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const laoding = yield this.loadingCtrl.create({
                message: this.trans.Loading,
            });
            laoding.present();
            let category_uuid = localStorage.getItem('category_uuid');
            this.category_name = localStorage.getItem('category_name');
            console.log(category_uuid);
            this.inserts$ = this.insertService.getGetegoryAds(category_uuid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((inserts) => {
                laoding.dismiss();
                console.log(inserts);
                return inserts;
            }));
        });
    }
    goToDetails(insert_uuid) {
        console.log(insert_uuid);
        this.navCtrl.navigateForward('/inserts-details/' + insert_uuid);
    }
    openDetailsModal(insert) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_components_ad_ad_component__WEBPACK_IMPORTED_MODULE_6__["AdComponent"],
                componentProps: { insert }
            });
            modal.present();
        });
    }
};
CategoryInsertsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_services_ads_ads_service__WEBPACK_IMPORTED_MODULE_7__["AdsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
CategoryInsertsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-category-inserts',
        template: _raw_loader_category_inserts_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_category_inserts_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CategoryInsertsPage);



/***/ }),

/***/ "CqBO":
/*!***************************************************************************!*\
  !*** ./src/app/pages/category-inserts/category-inserts-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: CategoryInsertsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryInsertsPageRoutingModule", function() { return CategoryInsertsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _category_inserts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category-inserts.page */ "7zim");




const routes = [
    {
        path: '',
        component: _category_inserts_page__WEBPACK_IMPORTED_MODULE_3__["CategoryInsertsPage"]
    }
];
let CategoryInsertsPageRoutingModule = class CategoryInsertsPageRoutingModule {
};
CategoryInsertsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoryInsertsPageRoutingModule);



/***/ }),

/***/ "WAMb":
/*!*******************************************************************!*\
  !*** ./src/app/pages/category-inserts/category-inserts.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yeS1pbnNlcnRzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "gdIm":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category-inserts/category-inserts.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-back-button slot=\"start\" color=\"dark\"></ion-back-button>\n    <ion-title>{{ category_name }} Ads</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-menu side=\"start\" menuId=\"insertMenu\" contentId=\"insertMain\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-item lines=\"full\" routerLink=\"/agreement\" details>\n        Agreemnt\n      </ion-item>\n      \n      <ion-item lines=\"full\" routerLink=\"/agreement\" details>\n        Add Your Insert\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-router-outlet id=\"insertMain\"></ion-router-outlet>\n\n<ion-content color=\"primary\">\n\n  <ion-item *ngFor=\"let insert of inserts$ | async\" button lines=\"full\" (click)=\"openDetailsModal(insert)\">\n    <ion-thumbnail slot=\"start\">\n      <img [src]=\"insert.cover\" />\n    </ion-thumbnail>\n    <ion-label>{{ insert.title_en }}</ion-label>\n  </ion-item>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=pages-category-inserts-category-inserts-module.js.map