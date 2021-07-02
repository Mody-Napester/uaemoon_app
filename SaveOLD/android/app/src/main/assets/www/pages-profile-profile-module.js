(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "723k":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "x0XS");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "uxLX");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "EGjV":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-image-container {\n  height: 100px;\n  width: 100px;\n  border-radius: 50%;\n  border: 5px solid #cccccc;\n  margin: auto;\n  background-color: #ffffff;\n  margin-top: 25px;\n  margin-bottom: -130px;\n  overflow: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXdCO0VBQ3hCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1pbWFnZS1jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOjVweCBzb2xpZCAjY2NjY2NjO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMTMwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59Il19 */");

/***/ }),

/***/ "VVTS":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-button slot=\"start\" fill=\"clear\" color=\"light\">\n      <ion-icon slot=\"icon-only\" name=\"person\"></ion-icon>\n    </ion-button>\n\n    <ion-title>{{ trans.My_Profile }}</ion-title>\n\n    <ion-button slot=\"end\" fill=\"clear\" color=\"light\" (click)=\"openMenu()\">\n      <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n\n  <ion-toolbar>\n    <ion-segment [(ngModel)]=\"selectedSegment\" (ionChange)=\"segmentChange($event)\">\n\n      <ion-segment-button value=\"profile\">\n        <ion-label>{{ trans.Profile }}</ion-label>\n      </ion-segment-button>\n\n      <ion-segment-button value=\"add-insert\">\n        <ion-label>{{ trans.Add_Inserts }}</ion-label>\n      </ion-segment-button>\n\n      <ion-segment-button value=\"my-insert\">\n        <ion-label>{{ trans.My_Inserts }}</ion-label>\n      </ion-segment-button>\n\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-menu side=\"start\" menuId=\"profileMenu\" contentId=\"profileMain\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-title>{{ trans.Other_Pages }}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-item lines=\"full\">\n        <ion-label routerLink=\"/\">{{ trans.Welcome }}</ion-label>\n      </ion-item>\n      \n      <ion-item *ngFor=\"let page of pages$ | async\" lines=\"full\" details (click)=\"openPageModal(page)\">{{ page.name }}</ion-item>\n\n      <ion-item lines=\"full\">\n        <ion-label>{{ trans.Language }}</ion-label>\n          <span>عربى</span>\n          <ion-toggle checked=\"{{ lang }}\" (click)=\"changeLang()\"></ion-toggle>\n          <span>English</span>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-router-outlet id=\"profileMain\"></ion-router-outlet>\n\n<ion-content color=\"primary\">\n\n  <div *ngIf=\"selectedSegment == 'profile'\">\n    <div class=\"ion-text-center ion-padding\" style=\"background-color: #273c75;height: 100px;\">\n\n      <div class=\"profile-image-container\">\n        <img src=\"../../assets/images/profile.jpg\" />\n      </div>\n\n      <div style=\"margin-top:150px;\">\n\n        <form [formGroup]=\"form\">\n        <ion-item class=\"ion-margin-bottom\">\n          <ion-icon slot=\"start\" name=\"pulse\"></ion-icon>\n          <ion-input formControlName=\"name\" placeholder=\"{{ trans.Your_Name }}\" value=\"{{ thename }}\" clearInput type=\"text\"></ion-input>\n        </ion-item>\n    \n        <ion-item class=\"ion-margin-bottom\">\n          <ion-icon slot=\"start\" name=\"mail\"></ion-icon>\n          <ion-input formControlName=\"email\" placeholder=\"{{ trans.Your_Email_Address }}\" value=\"{{ theemail }}\" clearInput type=\"email\"></ion-input>\n        </ion-item>\n\n        <ion-item class=\"ion-margin-bottom\">\n          <ion-icon slot=\"start\" name=\"phone-portrait\"></ion-icon>\n          <ion-input formControlName=\"phone\" placeholder=\"{{ trans.Your_Phone }}\" value=\"{{ thephone }}\"  clearInput type=\"text\"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-icon slot=\"start\" name=\"finger-print\"></ion-icon>\n          <ion-input formControlName=\"password\" placeholder=\"{{ trans.Your_Password }}\" clearInput type=\"password\"></ion-input>\n        </ion-item>\n      \n        <div class=\"ion-padding-top\"> \n          <ion-button (click)=\"submitForm()\" [disabled]=\"form.invalid\" expand=\"block\" size=\"default\" color=\"secondary\">{{ trans.Update_My_Account }}</ion-button>\n        </div>\n\n      </form>\n\n      <div class=\"ion-padding-top\"> \n        <ion-button (click)=\"logout()\" expand=\"block\" fill=\"outline\" size=\"default\" color=\"danger\">{{ trans.Logout }}</ion-button>\n      </div>\n    \n      </div>\n    </div>\n\n  </div>\n\n  <div *ngIf=\"selectedSegment == 'add-insert'\">\n    <div class=\"ion-text-center ion-padding\" style=\"background-color: #233881;\">\n      <img style=\"width: 70%;\" src=\"../../assets/images/logo.png\" alt=\"\">\n    </div>\n\n    <!-- <ion-item>\n      <ion-icon slot=\"start\" name=\"image\"></ion-icon>\n      <input type=\"file\" name=\"imagefile\" (change)=\"changeFileInput($event)\">\n      <ion-button (click)=\"onUpload()\" slot=\"end\">\n        Upload\n      </ion-button>\n    </ion-item> -->\n\n    <form [formGroup]='formInsert' enctype=\"multipart/form-data\" class=\"ion-padding\">\n\n      <ion-item>\n        <ion-label>{{ trans.Category }}</ion-label>\n      </ion-item>\n\n      <ion-item class=\"ion-margin-bottom\">\n        <ion-select formControlName=\"category\" value=\"Choose\" okText=\"Okay\" cancelText=\"Dismiss\">\n          <ion-select-option *ngFor=\"let category of categories$ | async\" value=\"{{ category.uuid }}\">{{ category.name }}</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>{{ trans.adv_type }}</ion-label>\n      </ion-item>\n\n      <ion-item class=\"ion-margin-bottom\">\n        <ion-select formControlName=\"adv_type\" value=\"{{ trans.normal_advertise }}\" okText=\"Okay\" cancelText=\"Dismiss\">\n          <ion-select-option value=\"1\">{{ trans.normal_advertise }}</ion-select-option>\n          <ion-select-option value=\"2\">{{ trans.featured_advertise }}</ion-select-option>\n          <ion-select-option value=\"3\">{{ trans.vip_advertise }}</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item class=\"ion-margin-bottom\">\n        <ion-icon slot=\"start\" name=\"pulse\"></ion-icon>\n        <ion-input formControlName=\"title\" placeholder=\"{{ trans.Title }}\" clearInput type=\"text\"></ion-input>\n      </ion-item>\n\n      <ion-item class=\"ion-margin-bottom\">\n        <ion-icon slot=\"start\" name=\"play\"></ion-icon>\n        <ion-input formControlName=\"youtube_url\" placeholder=\"{{ trans.youtube_url }}\" clearInput type=\"text\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>{{ trans.Cover }}</ion-label>\n      </ion-item>\n\n      <ion-item class=\"ion-margin-bottom\">\n        <ion-icon slot=\"start\" name=\"image\"></ion-icon>\n        <input formControlName=\"cover\" id=\"cover\" type=\"file\" (change)=\"changeCoverInput($event)\">\n      </ion-item>\n\n      <ion-item>\n        <ion-label>{{ trans.Images }}</ion-label>\n      </ion-item>\n\n      <ion-item class=\"ion-margin-bottom\">\n        <ion-icon slot=\"start\" name=\"image\"></ion-icon>\n        <input formControlName=\"picture\" id=\"picture\" type=\"file\" multiple (change)=\"changePictureInput($event)\">\n      </ion-item>\n\n      <ion-item class=\"ion-margin-bottom\">\n        <ion-icon slot=\"start\" name=\"pulse\"></ion-icon>\n        <ion-textarea formControlName=\"details\" placeholder=\"{{ trans.Details }}\" clearInput type=\"text\" rows=\"15\"></ion-textarea>\n      </ion-item>\n\n      <!-- <div class=\"ion-padding-top\"> \n        <ion-button (click)=\"onUpload()\" expand=\"block\" size=\"default\" color=\"warning\">Upload Cover And Images</ion-button>\n      </div> -->\n\n      <div class=\"ion-padding-top\"> \n        <ion-button (click)=\"submitFormInsert()\" [disabled]=\"formInsert.invalid\" expand=\"block\" size=\"default\" color=\"secondary\">{{ trans.Save }}</ion-button>\n      </div>\n\n      <!-- <ion-item>\n        <ion-button (click)=\"openCam()\" >Take Photo</ion-button>\n      </ion-item>\n\n      <ion-item>\n        <ion-button (click)=\"upload()\" >Upload</ion-button>\n      </ion-item>\n\n      <ion-item>\n        <img src=\"{{image}}\">\n      </ion-item> -->\n    \n    </form>\n  </div>\n\n  <div *ngIf=\"selectedSegment == 'my-insert'\">\n    \n  <ion-item *ngFor=\"let insert of inserts$ | async\" button lines=\"full\" (click)=\"openDetailsModal(insert)\">\n    <ion-thumbnail slot=\"start\">\n      <img [src]=\"insert.cover\" />\n    </ion-thumbnail>\n    <ion-label>{{ insert.title_en }}</ion-label>\n\n    <ion-badge color=\"{{ insert.bg }}\" slot=\"end\">{{ insert.status_text }}</ion-badge>\n  </ion-item>\n  \n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "uxLX":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.page.html */ "VVTS");
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.page.scss */ "EGjV");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_components_ad_ad_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/ad/ad.component */ "qi+E");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var src_app_services_categories_categories_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/categories/categories.service */ "vgVZ");
/* harmony import */ var src_app_services_page_page_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/page/page.service */ "wR/G");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _assets_translation_ar_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../assets/translation/ar.json */ "dWOM");
var _assets_translation_ar_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/translation/ar.json */ "dWOM", 1);
/* harmony import */ var _assets_translation_en_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../assets/translation/en.json */ "aX9w");
var _assets_translation_en_json__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/translation/en.json */ "aX9w", 1);















// import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
let ProfilePage = class ProfilePage {
    constructor(
    // private camera: Camera,
    // private transfer: FileTransfer,
    loadingController, menu, authService, categoryService, loadingCtrl, navCtrl, toastCtrl, modalCtrl, pageService, loadinCtrl, http) {
        this.loadingController = loadingController;
        this.menu = menu;
        this.authService = authService;
        this.categoryService = categoryService;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.pageService = pageService;
        this.loadinCtrl = loadinCtrl;
        this.http = http;
        this.selectedSegment = "profile";
        this.imagefile = null;
        this.theuuid = localStorage.getItem('uuid');
        this.thename = localStorage.getItem('name');
        this.theemail = localStorage.getItem('email');
        this.thephone = localStorage.getItem('phone');
        if (localStorage.getItem('lang') == 'en') {
            this.trans = _assets_translation_en_json__WEBPACK_IMPORTED_MODULE_14__["trans"];
            this.lang = true;
        }
        else {
            this.trans = _assets_translation_ar_json__WEBPACK_IMPORTED_MODULE_13__["trans"];
            this.lang = false;
        }
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let email = localStorage.getItem('email');
            if (!email) {
                this.navCtrl.navigateRoot('/login');
            }
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.thename, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.theemail, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
                phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.thephone, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            });
            this.formInsert = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
                category: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
                title: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
                youtube_url: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
                adv_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
                details: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
                cover: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
                picture: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
                coverSource: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', []),
                pictureSource: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', []),
            });
            console.log(this.theuuid);
            this.inserts$ = this.authService.userAds(this.theuuid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])((inserts) => {
                console.log(inserts);
                return inserts;
            }));
            this.categories$ = this.categoryService.getCategories().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])((categories) => {
                console.log(categories);
                return categories;
            }));
            this.pages$ = this.pageService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])((pages) => {
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
    segmentChange(event) {
        this.selectedSegment = event.target.value;
    }
    openMenu() {
        this.menu.enable(true, 'profileMenu');
        this.menu.open('profileMenu');
    }
    changeCoverInput(event) {
        this.coverFileVar = event.target.files[0];
        const coverFile = event.target.files[0];
        this.formInsert.patchValue({
            coverSource: coverFile
        });
    }
    changePictureInput(event) {
        this.pictureFileVar = event.target.files;
        const pictureFile = event.target.files;
        this.formInsert.patchValue({
            pictureSource: pictureFile
        });
    }
    onUpload() {
        const formData = new FormData();
        formData.append('cover', this.formInsert.get('coverSource').value);
        formData.append('pictures_count', this.pictureFileVar.length);
        for (let i = 0; i < this.pictureFileVar.length; i++) {
            formData.append('picture_' + i, this.pictureFileVar[i]);
        }
        // formData.append('picture', this.formInsert.get('pictureSource').value);
        // console.log(formData.get('cover'));
        // console.log(formData.get('picture'));
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].appURL + 'upload/image', formData)
            .subscribe(res => {
            console.log(res);
            alert('Uploaded Successfully.');
        });
    }
    submitFormInsert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: this.trans.Loading,
            });
            const toastError = yield this.toastCtrl.create({
                header: this.trans.Insert_Faild,
                message: this.trans.Try_again_later,
                position: 'top',
                duration: 5000,
                color: 'danger',
                buttons: [
                    {
                        icon: 'close',
                        role: 'cancel'
                    }
                ]
            });
            const toastCoverSizeError = yield this.toastCtrl.create({
                header: this.trans.Insert_Faild,
                message: this.trans.One_Of_The_Cover,
                position: 'top',
                duration: 5000,
                color: 'danger',
                buttons: [
                    {
                        icon: 'close',
                        role: 'cancel'
                    }
                ]
            });
            const toastImageSizeError = yield this.toastCtrl.create({
                header: this.trans.Insert_Faild,
                message: this.trans.One_Of_The_image,
                position: 'top',
                duration: 5000,
                color: 'danger',
                buttons: [
                    {
                        icon: 'close',
                        role: 'cancel'
                    }
                ]
            });
            const toastSuccess = yield this.toastCtrl.create({
                header: this.trans.Insert_Success,
                message: this.trans.Your_ad_created_susccfully_wait_for_approval,
                position: 'top',
                duration: 5000,
                color: 'success',
                buttons: [
                    {
                        icon: 'close',
                        role: 'cancel'
                    }
                ]
            });
            loading.present();
            const formData = new FormData();
            formData.append('category', this.formInsert.get('category').value);
            formData.append('title', this.formInsert.get('title').value);
            formData.append('youtube_url', this.formInsert.get('youtube_url').value);
            formData.append('adv_type', this.formInsert.get('adv_type').value);
            formData.append('details', this.formInsert.get('details').value);
            formData.append('cover', this.formInsert.get('coverSource').value);
            var totalCoverSizeMB = this.coverFileVar.size / Math.pow(1024, 2);
            if (totalCoverSizeMB > 2) {
                loading.dismiss();
                toastCoverSizeError.present();
                return;
            }
            formData.append('pictures_count', this.pictureFileVar.length);
            for (let i = 0; i < this.pictureFileVar.length; i++) {
                var totalImageSizeMB = this.pictureFileVar[i].size / Math.pow(1024, 2);
                if (totalImageSizeMB > 2) {
                    loading.dismiss();
                    toastImageSizeError.present();
                    return;
                }
                formData.append('picture_' + i, this.pictureFileVar[i]);
            }
            this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].appURL + 'user/' + this.theuuid + '/add-new-ads', formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe((insert) => {
                console.log(insert);
                if (insert == 1) {
                    loading.dismiss();
                    toastSuccess.present();
                    this.formInsert.patchValue({ category: '' });
                    this.formInsert.patchValue({ title: '' });
                    this.formInsert.patchValue({ youtube_url: '' });
                    this.formInsert.patchValue({ adv_type: '' });
                    this.formInsert.patchValue({ details: '' });
                    this.formInsert.patchValue({ cover: '' });
                    this.formInsert.patchValue({ picture: '' });
                    this.formInsert.patchValue({ coverSource: '' });
                    this.formInsert.patchValue({ pictureSource: '' });
                    this.selectedSegment = 'my-insert';
                }
                else {
                    loading.dismiss();
                    toastError.present();
                }
            });
            // this.authService.insertAd(this.formInsert.value, this.theuuid).pipe(
            //   take(1)
            // ).subscribe((insert) => {
            //   console.log(insert);
            //   if(insert.status == 1){
            //     loading.dismiss();
            //     toastSuccess.present();
            //     this.selectedSegment = 'my-insert';
            //   }else{
            //     loading.dismiss();
            //     toastError.present();
            //   }
            // });
        });
    }
    submitForm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: this.trans.Loading,
            });
            const toastError = yield this.toastCtrl.create({
                header: this.trans.Update_Faild,
                message: this.trans.Your_profile_can_t_be_updated,
                position: 'top',
                duration: 5000,
                color: 'danger',
                buttons: [
                    {
                        icon: 'close',
                        role: 'cancel'
                    }
                ]
            });
            const toastSuccess = yield this.toastCtrl.create({
                header: this.trans.Update_Success,
                message: this.trans.Your_Profile_has_been_updated_successfully,
                position: 'top',
                duration: 5000,
                color: 'success',
                buttons: [
                    {
                        icon: 'close',
                        role: 'cancel'
                    }
                ]
            });
            loading.present();
            this.authService.updateUser(this.form.value, this.theuuid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe((user) => {
                console.log(user);
                if (user.status == 1) {
                    console.log(user);
                    localStorage.setItem('uuid', user.uuid);
                    localStorage.setItem('name', user.name);
                    localStorage.setItem('email', user.email);
                    localStorage.setItem('phone', user.phone);
                    loading.dismiss();
                    toastSuccess.present();
                    this.navCtrl.navigateRoot('/tabs/pages/profile');
                }
                else {
                    loading.dismiss();
                    toastError.present();
                }
            });
        });
    }
    logout() {
        localStorage.clear();
        this.navCtrl.navigateRoot('/welcome');
    }
    openDetailsModal(insert) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_components_ad_ad_component__WEBPACK_IMPORTED_MODULE_8__["AdComponent"],
                componentProps: { insert }
            });
            modal.present();
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"] },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: src_app_services_categories_categories_service__WEBPACK_IMPORTED_MODULE_10__["CategoriesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: src_app_services_page_page_service__WEBPACK_IMPORTED_MODULE_11__["PageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfilePage);



/***/ }),

/***/ "x0XS":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "uxLX");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module.js.map