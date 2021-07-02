(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inserts-inserts-module"],{

/***/ "FRPv":
/*!*************************************************!*\
  !*** ./src/app/pages/inserts/inserts.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnNlcnRzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "Wff/":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inserts/inserts.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-button slot=\"start\" fill=\"clear\" color=\"light\">\n      <ion-icon slot=\"icon-only\" name=\"aperture\"></ion-icon>\n    </ion-button>\n\n    <ion-title>{{ trans.Ads }}</ion-title>\n\n    <ion-button slot=\"end\" fill=\"clear\" color=\"light\" (click)=\"openFirst()\">\n      <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-menu side=\"start\" menuId=\"insertMenu\" contentId=\"insertMain\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-title>{{ trans.Other_Pages }}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-item lines=\"full\">\n        <ion-label routerLink=\"/\">{{ trans.Welcome }}</ion-label>\n      </ion-item>\n      \n      <ion-item *ngFor=\"let page of pages$ | async\" lines=\"full\" details (click)=\"openPageModal(page)\">{{ page.name }}</ion-item>\n\n      <ion-item lines=\"full\">\n        <ion-label>{{ trans.Language }}</ion-label>\n          <span>عربى</span>\n          <ion-toggle checked=\"{{ lang }}\" (click)=\"changeLang()\"></ion-toggle>\n          <span>English</span>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-router-outlet id=\"insertMain\"></ion-router-outlet>\n\n<ion-content color=\"primary\">\n\n  <ion-item *ngFor=\"let insert of inserts$ | async\" button lines=\"full\" (click)=\"openDetailsModal(insert)\">\n    <ion-thumbnail slot=\"start\">\n      <img [src]=\"insert.cover\" />\n    </ion-thumbnail>\n    <ion-label>{{ insert.title_en }}</ion-label>\n  </ion-item>\n\n</ion-content>");

/***/ }),

/***/ "Z448":
/*!*************************************************!*\
  !*** ./src/app/pages/inserts/inserts.module.ts ***!
  \*************************************************/
/*! exports provided: InsertsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertsPageModule", function() { return InsertsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _inserts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inserts-routing.module */ "aBIS");
/* harmony import */ var _inserts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inserts.page */ "tnDY");







let InsertsPageModule = class InsertsPageModule {
};
InsertsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _inserts_routing_module__WEBPACK_IMPORTED_MODULE_5__["InsertsPageRoutingModule"]
        ],
        declarations: [_inserts_page__WEBPACK_IMPORTED_MODULE_6__["InsertsPage"]]
    })
], InsertsPageModule);



/***/ }),

/***/ "aBIS":
/*!*********************************************************!*\
  !*** ./src/app/pages/inserts/inserts-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: InsertsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertsPageRoutingModule", function() { return InsertsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _inserts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inserts.page */ "tnDY");




const routes = [
    {
        path: '',
        component: _inserts_page__WEBPACK_IMPORTED_MODULE_3__["InsertsPage"]
    }
];
let InsertsPageRoutingModule = class InsertsPageRoutingModule {
};
InsertsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InsertsPageRoutingModule);



/***/ }),

/***/ "tnDY":
/*!***********************************************!*\
  !*** ./src/app/pages/inserts/inserts.page.ts ***!
  \***********************************************/
/*! exports provided: InsertsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertsPage", function() { return InsertsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_inserts_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./inserts.page.html */ "Wff/");
/* harmony import */ var _inserts_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inserts.page.scss */ "FRPv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_components_ad_ad_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/ad/ad.component */ "qi+E");
/* harmony import */ var src_app_services_ads_ads_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/ads/ads.service */ "I8hk");
/* harmony import */ var src_app_services_page_page_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/page/page.service */ "wR/G");
/* harmony import */ var _assets_translation_ar_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../assets/translation/ar.json */ "dWOM");
var _assets_translation_ar_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/translation/ar.json */ "dWOM", 1);
/* harmony import */ var _assets_translation_en_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../assets/translation/en.json */ "aX9w");
var _assets_translation_en_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/translation/en.json */ "aX9w", 1);











let InsertsPage = class InsertsPage {
    constructor(menu, navCtrl, insertService, loadingCtrl, pageService, modalCtrl) {
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.insertService = insertService;
        this.loadingCtrl = loadingCtrl;
        this.pageService = pageService;
        this.modalCtrl = modalCtrl;
        if (localStorage.getItem('lang') == 'en') {
            this.trans = _assets_translation_en_json__WEBPACK_IMPORTED_MODULE_10__["trans"];
            this.lang = true;
        }
        else {
            this.trans = _assets_translation_ar_json__WEBPACK_IMPORTED_MODULE_9__["trans"];
            this.lang = false;
        }
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const laoding = yield this.loadingCtrl.create({
                message: this.trans.Loading,
            });
            laoding.present();
            this.inserts$ = this.insertService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((inserts) => {
                laoding.dismiss();
                console.log(inserts);
                return inserts;
            }));
            this.pages$ = this.pageService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((pages) => {
                laoding.dismiss();
                console.log(pages);
                return pages;
            }));
        });
    }
    changeLang() {
        if (localStorage.getItem('lang') == 'ar') {
            localStorage.setItem('lang', 'en');
            window.location.reload();
            this.lang = true;
        }
        else {
            localStorage.setItem('lang', 'ar');
            window.location.reload();
            this.lang = false;
        }
    }
    openFirst() {
        this.menu.enable(true, 'insertMenu');
        this.menu.open('insertMenu');
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
InsertsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_services_ads_ads_service__WEBPACK_IMPORTED_MODULE_7__["AdsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: src_app_services_page_page_service__WEBPACK_IMPORTED_MODULE_8__["PageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
InsertsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inserts',
        template: _raw_loader_inserts_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inserts_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InsertsPage);



/***/ })

}]);
//# sourceMappingURL=pages-inserts-inserts-module.js.map