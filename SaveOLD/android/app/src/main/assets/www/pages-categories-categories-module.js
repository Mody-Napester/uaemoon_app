(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-categories-categories-module"],{

/***/ "/0+N":
/*!***************************************************************!*\
  !*** ./src/app/pages/categories/categories-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CategoriesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageRoutingModule", function() { return CategoriesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories.page */ "WyQH");




const routes = [
    {
        path: '',
        component: _categories_page__WEBPACK_IMPORTED_MODULE_3__["CategoriesPage"]
    }
];
let CategoriesPageRoutingModule = class CategoriesPageRoutingModule {
};
CategoriesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoriesPageRoutingModule);



/***/ }),

/***/ "PdZX":
/*!*******************************************************!*\
  !*** ./src/app/pages/categories/categories.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yaWVzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "U5Jw":
/*!*******************************************************!*\
  !*** ./src/app/pages/categories/categories.module.ts ***!
  \*******************************************************/
/*! exports provided: CategoriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageModule", function() { return CategoriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _categories_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categories-routing.module */ "/0+N");
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories.page */ "WyQH");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");








let CategoriesPageModule = class CategoriesPageModule {
};
CategoriesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
            _categories_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoriesPageRoutingModule"]
        ],
        declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_6__["CategoriesPage"]]
    })
], CategoriesPageModule);



/***/ }),

/***/ "WyQH":
/*!*****************************************************!*\
  !*** ./src/app/pages/categories/categories.page.ts ***!
  \*****************************************************/
/*! exports provided: CategoriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPage", function() { return CategoriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_categories_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./categories.page.html */ "yvyn");
/* harmony import */ var _categories_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories.page.scss */ "PdZX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_categories_categories_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/categories/categories.service */ "vgVZ");
/* harmony import */ var src_app_services_page_page_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/page/page.service */ "wR/G");
/* harmony import */ var _assets_translation_ar_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../assets/translation/ar.json */ "dWOM");
var _assets_translation_ar_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/translation/ar.json */ "dWOM", 1);
/* harmony import */ var _assets_translation_en_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../assets/translation/en.json */ "aX9w");
var _assets_translation_en_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/translation/en.json */ "aX9w", 1);










let CategoriesPage = class CategoriesPage {
    constructor(navControl, menu, categoryService, loadingCtrl, pageService) {
        this.navControl = navControl;
        this.menu = menu;
        this.categoryService = categoryService;
        this.loadingCtrl = loadingCtrl;
        this.pageService = pageService;
        if (localStorage.getItem('lang') == 'en') {
            this.trans = _assets_translation_en_json__WEBPACK_IMPORTED_MODULE_9__["trans"];
            this.lang = true;
        }
        else {
            this.trans = _assets_translation_ar_json__WEBPACK_IMPORTED_MODULE_8__["trans"];
            this.lang = false;
        }
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const laoding = yield this.loadingCtrl.create({
                message: this.trans.Loading,
            });
            laoding.present();
            this.categories$ = this.categoryService.getCategories().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((categories) => {
                laoding.dismiss();
                return categories;
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
    goToInserts(category_uuid, category_name) {
        localStorage.setItem('category_uuid', category_uuid);
        localStorage.setItem('category_name', category_name);
        this.navControl.navigateForward('/category-inserts');
    }
    openFirst() {
        this.menu.enable(true, 'categoryMenu');
        this.menu.open('categoryMenu');
    }
};
CategoriesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: src_app_services_categories_categories_service__WEBPACK_IMPORTED_MODULE_6__["CategoriesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: src_app_services_page_page_service__WEBPACK_IMPORTED_MODULE_7__["PageService"] }
];
CategoriesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-categories',
        template: _raw_loader_categories_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_categories_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CategoriesPage);



/***/ }),

/***/ "yvyn":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categories/categories.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-button slot=\"start\" fill=\"clear\" color=\"light\">\n      <ion-icon slot=\"icon-only\" name=\"apps\"></ion-icon>\n    </ion-button>\n\n    <ion-title>{{ trans.Categories }}</ion-title>\n\n    <ion-button slot=\"end\" fill=\"clear\" color=\"light\" (click)=\"openFirst()\">\n      <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-menu side=\"start\" menuId=\"categoryMenu\" contentId=\"categoryMain\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-title>{{ trans.Other_Pages }}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-item lines=\"full\">\n        <ion-label routerLink=\"/\">{{ trans.Welcome }}</ion-label>\n      </ion-item>\n      \n      <ion-item *ngFor=\"let page of pages$ | async\" lines=\"full\" details (click)=\"openPageModal(page)\">{{ page.name }}</ion-item>\n\n      <ion-item lines=\"full\">\n        <ion-label>{{ trans.Language }}</ion-label>\n          <span>عربى</span>\n          <ion-toggle checked=\"{{ lang }}\" (click)=\"changeLang()\"></ion-toggle>\n          <span>English</span>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-router-outlet id=\"categoryMain\"></ion-router-outlet>\n\n<ion-content color=\"primary\">\n\n  <img *ngIf=\"lang\" src=\"../../../assets/images/category.jpg\" alt=\"\">\n  <img *ngIf=\"!lang\" src=\"../../../assets/images/category_ar.jpg\" alt=\"\">\n\n  <ion-grid fixed>\n    <ion-row>\n\n      <ion-col size=\"6\" *ngFor=\"let category of categories$ | async\">\n        <ion-card (click)=\"goToInserts(category.uuid, category.name)\">\n          <img [src]=\"category.picture\" alt=\"\">\n          <!-- <div class=\"ion-text-center ion-padding\">\n            <fa-icon style=\"color: #233881;\" class=\"fa-5x fa-fw\" [icon]=\"[category.icon_fa, category.icon]\" ></fa-icon>\n          </div> -->\n          <ion-card-header style=\"height: 50px;padding: 0;\">\n            <ion-card-subtitle class=\"ion-text-center\">{{ category.name }}</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=pages-categories-categories-module.js.map