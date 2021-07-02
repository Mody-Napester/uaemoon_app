(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "/rnz":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".swiper-slide-active {\n  transform: scale(1.05, 1.05);\n}\n\n.swiper-slide-active .cm-card-slider img {\n  transform: scale(1, 1) rotate(1deg);\n  transition: all 600ms ease-in-out;\n}\n\n.swiper-slide {\n  transition: 400ms all ease-in-out;\n}\n\n.cm-card-slider {\n  width: 100%;\n  height: 170px;\n  box-shadow: none;\n  border-radius: 10px;\n  background-color: #ffffff;\n  padding: 10px;\n}\n\n.cm-card-slider img {\n  object-fit: cover;\n  width: 100%;\n  height: 70%;\n  transform: scale(1.1, 1.1) rotate(1deg);\n  transition: all 600ms ease-in-out;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQTRCO0FBQ2hDOztBQUZBO0VBSVksbUNBQW1DO0VBQ25DLGlDQUFpQztBQUU3Qzs7QUFFQTtFQUNJLGlDQUFpQztBQUNyQzs7QUFDQTtFQUNJLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsYUFBYTtBQUVqQjs7QUFSQTtFQVNRLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsV0FBVztFQUNYLHVDQUF1QztFQUN2QyxpQ0FBaUM7QUFHekMiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3dpcGVyLXNsaWRlLWFjdGl2ZXtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUsIDEuMDUpO1xuICAgIC5jbS1jYXJkLXNsaWRlcntcbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSByb3RhdGUoMWRlZyk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgNjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4uc3dpcGVyLXNsaWRle1xuICAgIHRyYW5zaXRpb246IDQwMG1zIGFsbCBlYXNlLWluLW91dDtcbn1cbi5jbS1jYXJkLXNsaWRlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE3MHB4O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICBpbWd7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xLCAxLjEpIHJvdGF0ZSgxZGVnKTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDYwMG1zIGVhc2UtaW4tb3V0O1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "99Un":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "9oos");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "hsj+");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");








let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "9oos":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "hsj+");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "eUf4":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-button slot=\"start\" fill=\"clear\" color=\"light\">\n      <ion-icon slot=\"icon-only\" name=\"home\"></ion-icon>\n    </ion-button>\n\n    <ion-title>{{ trans.Home }}</ion-title>\n\n    <ion-button slot=\"end\" fill=\"clear\" color=\"light\" (click)=\"openMenu()\">\n      <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-menu side=\"start\" menuId=\"homeMenu\" contentId=\"homeMain\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-title>{{ trans.Other_Pages }}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-item lines=\"full\">\n        <ion-label routerLink=\"/\">{{ trans.Welcome }}</ion-label>\n      </ion-item>\n\n      <ion-item *ngFor=\"let page of pages$ | async\" lines=\"full\" details (click)=\"openPageModal(page)\">{{ page.name }}</ion-item>\n\n      <ion-item lines=\"full\">\n        <ion-label>{{ trans.Language }}</ion-label>\n          <span>عربى</span>\n          <ion-toggle checked=\"{{ lang }}\" (click)=\"changeLang()\"></ion-toggle>\n          <span>English</span>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-router-outlet id=\"homeMain\"></ion-router-outlet>\n\n<ion-content color=\"primary\">\n\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide *ngFor=\"let slider of sliders$ | async\">\n      <img [src]=\"slider.image\" alt=\"\">\n    </ion-slide>\n  </ion-slides>\n\n  <img *ngIf=\"lang\" src=\"../../../assets/images/category.jpg\" alt=\"\">\n  <img *ngIf=\"!lang\" src=\"../../../assets/images/category_ar.jpg\" alt=\"\">\n\n  <!-- <ion-slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide *ngFor=\"let category of categories$ | async\" (click)=\"goToInserts()\">\n      <div style=\"height: 100px !important;width: 100px !important;\">\n        <img [src]=\"category.picture\" alt=\"\">\n      </div>\n      <h1>{{ category.name }}</h1>\n    </ion-slide>\n  </ion-slides> -->\n\n  <ion-slides [options]=\"option\" class=\"ion-margin\">\n    <ion-slide *ngFor=\"let category of categories$ | async\" (click)=\"goToInserts(category.uuid, category.name)\">\n      <ion-card class=\"cm-card-slider\">\n        <img [src]=\"category.picture\" alt=\"\">\n        <ion-label>{{ category.name }}</ion-label>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n  \n\n  <!-- <ion-grid fixed>\n    <ion-row>\n\n      <ion-col size=\"6\" *ngFor=\"let category of categories$ | async\">\n        <ion-card (click)=\"goToInserts(category.uuid, category.name)\">\n          <img [src]=\"category.picture\" alt=\"\">\n          <div class=\"ion-text-center ion-padding\">\n            <fa-icon style=\"color: #233881;\" class=\"fa-5x fa-fw\" [icon]=\"[category.icon_fa, category.icon]\" ></fa-icon>\n          </div>\n          <ion-card-header style=\"height: 50px;padding: 0;\">\n            <ion-card-subtitle class=\"ion-text-center\">{{ category.name }}</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid> -->\n\n  <img *ngIf=\"lang\" src=\"../../../assets/images/vip.jpg\" alt=\"\">\n  <img *ngIf=\"!lang\" src=\"../../../assets/images/vip_ar.jpg\" alt=\"\">\n\n  <ion-slides [options]=\"option\" class=\"ion-margin\">\n    <ion-slide *ngFor=\"let insert of inserts$ | async\">\n      <ion-card *ngIf=\"insert.adv_type == 3\" class=\"cm-card-slider\" (click)=\"openDetailsModal(insert)\">\n        <img [src]=\"insert.cover\" alt=\"\">\n        <ion-label>{{ insert.title_en }}</ion-label>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n\n  <img *ngIf=\"lang\" src=\"../../../assets/images/featured.jpg\" alt=\"\">\n  <img *ngIf=\"!lang\" src=\"../../../assets/images/featured_ar.jpg\" alt=\"\">\n\n  <ion-slides [options]=\"option\" class=\"ion-margin\">\n    <ion-slide *ngFor=\"let insert of inserts$ | async\">\n      <ion-card *ngIf=\"insert.adv_type == 2\" class=\"cm-card-slider\" (click)=\"openDetailsModal(insert)\">\n        <img [src]=\"insert.cover\" alt=\"\">\n        <ion-label>{{ insert.title_en }}</ion-label>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n  \n  <!-- <div *ngFor=\"let insert of inserts$ | async\">\n    <ion-item *ngIf=\"insert.adv_type == 3\" button lines=\"full\" (click)=\"openDetailsModal(insert)\">\n      <ion-thumbnail slot=\"start\">\n        <img [src]=\"insert.cover\" />\n      </ion-thumbnail>\n      <ion-label>{{ insert.title_en }}</ion-label>\n    </ion-item>\n  </div> -->\n  \n\n</ion-content>");

/***/ }),

/***/ "hsj+":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "eUf4");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "/rnz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_components_ad_ad_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/ad/ad.component */ "qi+E");
/* harmony import */ var src_app_components_page_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/page/page.component */ "ycSy");
/* harmony import */ var src_app_services_ads_ads_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/ads/ads.service */ "I8hk");
/* harmony import */ var src_app_services_categories_categories_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/categories/categories.service */ "vgVZ");
/* harmony import */ var src_app_services_page_page_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/page/page.service */ "wR/G");
/* harmony import */ var src_app_services_slider_slider_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/slider/slider.service */ "pytD");
/* harmony import */ var _assets_translation_ar_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../assets/translation/ar.json */ "dWOM");
var _assets_translation_ar_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/translation/ar.json */ "dWOM", 1);
/* harmony import */ var _assets_translation_en_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../assets/translation/en.json */ "aX9w");
var _assets_translation_en_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/translation/en.json */ "aX9w", 1);














let HomePage = class HomePage {
    constructor(navControl, menu, categoryService, sliderService, pageService, loadingCtrl, navCtrl, insertService, modalCtrl) {
        this.navControl = navControl;
        this.menu = menu;
        this.categoryService = categoryService;
        this.sliderService = sliderService;
        this.pageService = pageService;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.insertService = insertService;
        this.modalCtrl = modalCtrl;
        this.slideOpts = {
            initialSlide: 1,
            speed: 400
        };
        this.option = {
            slidesPerView: 2,
            centeredSlides: true,
            loop: true,
            spaceBetween: 10,
            autoplay: true,
            speed: 400
        };
        if (localStorage.getItem('lang') == 'en') {
            this.trans = _assets_translation_en_json__WEBPACK_IMPORTED_MODULE_13__["trans"];
            this.lang = true;
        }
        else {
            this.trans = _assets_translation_ar_json__WEBPACK_IMPORTED_MODULE_12__["trans"];
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
                console.log(categories);
                return categories;
            }));
            this.sliders$ = this.sliderService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((sliders) => {
                laoding.dismiss();
                console.log(sliders);
                return sliders;
            }));
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
    openMenu() {
        this.menu.enable(true, 'homeMenu');
        this.menu.open('homeMenu');
    }
    openFirst() {
        this.menu.enable(true, 'insertMenu');
        this.menu.open('insertMenu');
    }
    goToInserts(category_uuid, category_name) {
        localStorage.setItem('category_uuid', category_uuid);
        localStorage.setItem('category_name', category_name);
        this.navControl.navigateForward('/category-inserts');
    }
    openPageModal(page) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_components_page_page_component__WEBPACK_IMPORTED_MODULE_7__["PageComponent"],
                componentProps: { page }
            });
            modal.present();
        });
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
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: src_app_services_categories_categories_service__WEBPACK_IMPORTED_MODULE_9__["CategoriesService"] },
    { type: src_app_services_slider_slider_service__WEBPACK_IMPORTED_MODULE_11__["SliderService"] },
    { type: src_app_services_page_page_service__WEBPACK_IMPORTED_MODULE_10__["PageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_services_ads_ads_service__WEBPACK_IMPORTED_MODULE_8__["AdsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ }),

/***/ "pytD":
/*!***************************************************!*\
  !*** ./src/app/services/slider/slider.service.ts ***!
  \***************************************************/
/*! exports provided: SliderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderService", function() { return SliderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let SliderService = class SliderService {
    constructor(httClient) {
        this.httClient = httClient;
        this.current_lang = localStorage.getItem('lang');
    }
    // Get Slider
    getAll() {
        return this.httClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].appURL + this.current_lang + '/' + 'sliders');
    }
};
SliderService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
SliderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], SliderService);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map