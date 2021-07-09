(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");



class AppComponent {
    constructor() {
        this.title = 'chunnt-flo-id-aare';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "home");
    } }, directives: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_aare_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/aare-service.service */ "./src/app/home/aare-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _home_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/loading/loading.component */ "./src/app/home/loading/loading.component.ts");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_home_aare_service_service__WEBPACK_IMPORTED_MODULE_4__["AareService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        _home_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                    _home_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
                ],
                providers: [_home_aare_service_service__WEBPACK_IMPORTED_MODULE_4__["AareService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/home/aare-service.service.ts":
/*!**********************************************!*\
  !*** ./src/app/home/aare-service.service.ts ***!
  \**********************************************/
/*! exports provided: AareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AareService", function() { return AareService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



class AareService {
    constructor(http) {
        this.http = http;
    }
    getCurrentAareData() {
        return this.http.get('https://aareguru.existenz.ch/v2018/current?city=bern&app=my.app.ch&version=1.0.42');
    }
}
AareService.ɵfac = function AareService_Factory(t) { return new (t || AareService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AareService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AareService, factory: AareService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AareService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _aare_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aare-service.service */ "./src/app/home/aare-service.service.ts");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading/loading.component */ "./src/app/home/loading/loading.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





const _c0 = ["answerDiv"];
const _c1 = ["loadingDiv"];
class HomeComponent {
    constructor(aareService) {
        this.aareService = aareService;
        this.currentTime = Date.now();
    }
    ngOnInit() {
        this.aareService.getCurrentAareData().subscribe(data => {
            this.aareData = data;
            this.aareData.aare.temperature = 18.9;
            this.aareData.aare.flow = 200;
            console.log(this.aareData);
            this.writeAnswer();
            setTimeout(() => {
                this.loadingElement.nativeElement.style.display = "block";
            }, 2000);
            setTimeout(() => {
                this.loadingElement.nativeElement.style.display = "none";
                this.answerElement.nativeElement.style.display = "block";
            }, 4000);
        });
    }
    writeAnswer() {
        if (this.aareData.aare.flow < 350) {
            if (this.aareData.aare.temperature >= 20) {
                this.answer = `fiiix! wenn d aare ${this.aareData.aare.temperature}° C isch de läbi dert inne`;
            }
            else if (this.aareData.aare.temperature < 20 && this.aareData.aare.temperature >= 19) {
                this.answer = `Bi ${this.aareData.aare.temperature}° C bruchsch gueti argument für mi z überzüge. Aber d hoffnig stirbt z letscht. Unger vorbehalt bini derbi`;
            }
            else {
                this.answer = `Spinnsch? Bi ${this.aareData.aare.temperature}° C, da gfriertmer ja mi arsch ab!`;
            }
        }
        else {
            this.answer = `Nei Sorry. Es ziehtmer z fescht. Bi ${this.aareData.aare.flow} m³/s chasch 1x Blinzle und scho bisch ir Schwelle`;
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_aare_service_service__WEBPACK_IMPORTED_MODULE_1__["AareService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.answerElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loadingElement = _t.first);
    } }, decls: 31, vars: 9, consts: [[1, "content"], [1, "header", "container"], [1, "material-icons", 2, "margin-left", "0.55em"], ["src", "../../assets/pofilbild.jpg", 1, "pic"], [1, "text"], [1, "icons"], [1, "material-icons", "my-icon"], [1, "messager"], [1, "message"], [1, "typing-demo"], [1, "time"], [1, "message", "message-r"], ["loadingDiv", ""], ["answerDiv", ""], [1, "answer"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " arrow_back_ios ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Florian");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " videocam ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " phone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " more_vert ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Chunsch id Aare? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 3, ctx.currentTime, "HH:mm"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.answer, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](30, 6, ctx.currentTime, "HH:mm"), " ");
    } }, directives: [_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__["LoadingComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".typing-demo[_ngcontent-%COMP%] {\n  width: 14ch;\n  animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;\n  white-space: nowrap;\n  overflow: hidden;\n  border-right: 3px solid;\n  font-size: 1.5em;\n}\n\n.messager[_ngcontent-%COMP%] {\n  margin: 1em;\n}\n\n.messager[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  width: 220px;\n  padding: 0.5em;\n  border-radius: 0.5em;\n  background-color: rgba(43, 66, 88, 0.6);\n  margin-bottom: 0.5em;\n}\n\n.messager[_ngcontent-%COMP%]   .message-r[_ngcontent-%COMP%] {\n  background-color: rgba(77, 43, 59, 0.6);\n  margin-left: auto;\n  width: 300px;\n  display: none;\n}\n\n.messager[_ngcontent-%COMP%]   .answer[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n\n.header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 70px;\n  background-color: #333333;\n}\n\n.header[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  margin-right: 1em;\n  margin-left: auto;\n}\n\n.header[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .my-icon[_ngcontent-%COMP%] {\n  margin: 0 0.3em;\n}\n\n.header[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  margin: 0;\n}\n\n.header[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%] {\n  margin: 10px;\n  width: 50px;\n  height: 50px;\n  border-radius: 100px;\n}\n\n@keyframes typing {\n  from {\n    width: 0;\n  }\n}\n\n@keyframes blink {\n  50% {\n    border-color: transparent;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0Esc0VBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFFQSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtBQUFKOztBQUNJO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLHVDQUFBO0VBQ0Esb0JBQUE7QUFDUjs7QUFDSTtFQUNJLHVDQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUNSOztBQUNJO0VBQ0ksZ0JBQUE7QUFDUjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFDSTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUFDUjs7QUFBUTtFQUNJLGVBQUE7QUFFWjs7QUFDSTtFQUNJLGdCQUFBO0VBQ0EsU0FBQTtBQUNSOztBQUNJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFDUjs7QUFHQTtFQUNJO0lBQ0ksUUFBQTtFQUFOO0FBQ0Y7O0FBR0E7RUFDSTtJQUNJLHlCQUFBO0VBRE47QUFDRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnR5cGluZy1kZW1vIHtcclxuICAgIHdpZHRoOiAxNGNoO1xyXG4gICAgYW5pbWF0aW9uOiB0eXBpbmcgMnMgc3RlcHMoMjIpLCBibGluayAwLjVzIHN0ZXAtZW5kIGluZmluaXRlIGFsdGVybmF0ZTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQ7XHJcbiAgICAvLyBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxufVxyXG5cclxuLm1lc3NhZ2VyIHtcclxuICAgIG1hcmdpbjogMWVtO1xyXG4gICAgLm1lc3NhZ2Uge1xyXG4gICAgICAgIHdpZHRoOiAyMjBweDtcclxuICAgICAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQzLCA2NiwgODgsIDAuNik7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICB9XHJcbiAgICAubWVzc2FnZS1ye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzcsIDQzLCA1OSwgMC42KTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5hbnN3ZXJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIH1cclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgICAuaWNvbnMge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIC5teS1pY29uIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAuM2VtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIC5waWMge1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgdHlwaW5nIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIHdpZHRoOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcclxuICAgIDUwJSB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _aare_service_service__WEBPACK_IMPORTED_MODULE_1__["AareService"] }]; }, { answerElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['answerDiv']
        }], loadingElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['loadingDiv']
        }] }); })();


/***/ }),

/***/ "./src/app/home/loading/loading.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/loading/loading.component.ts ***!
  \***************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class LoadingComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["loading"]], decls: 4, vars: 0, consts: [[1, "spinner"], [1, "bounce1"], [1, "bounce2"], [1, "bounce3"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".spinner[_ngcontent-%COMP%] {\n  margin: 0.25em 0 0 0;\n  width: 70px;\n  text-align: center;\n}\n\n.spinner[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  background-color: whitesmoke;\n  border-radius: 100%;\n  display: inline-block;\n  animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n}\n\n.spinner[_ngcontent-%COMP%]   .bounce1[_ngcontent-%COMP%] {\n  animation-delay: -0.32s;\n}\n\n.spinner[_ngcontent-%COMP%]   .bounce2[_ngcontent-%COMP%] {\n  animation-delay: -0.16s;\n}\n\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBRUEsbUJBQUE7RUFDQSxxQkFBQTtFQUVBLHdEQUFBO0FBQUo7O0FBR0U7RUFFRSx1QkFBQTtBQUFKOztBQUdFO0VBRUUsdUJBQUE7QUFBSjs7QUFRRTtFQUNFO0lBRUUsbUJBQUE7RUFHSjtFQUZJO0lBRUEsbUJBQUE7RUFJSjtBQUNGIiwiZmlsZSI6ImxvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGlubmVyIHtcclxuICAgIG1hcmdpbjogMC4yNWVtIDAgMCAwO1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5zcGlubmVyID4gZGl2IHtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stYm91bmNlZGVsYXkgMS40cyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xyXG4gICAgYW5pbWF0aW9uOiBzay1ib3VuY2VkZWxheSAxLjRzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zcGlubmVyIC5ib3VuY2UxIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjMycztcclxuICB9XHJcbiAgXHJcbiAgLnNwaW5uZXIgLmJvdW5jZTIge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjE2cztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xyXG4gIH1cclxuICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgc2stYm91bmNlZGVsYXkge1xyXG4gICAgMCUsIDgwJSwgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKSB9XHJcbiAgICA0MCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKSB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgc2stYm91bmNlZGVsYXkge1xyXG4gICAgMCUsIDgwJSwgMTAwJSB7IFxyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICB9IDQwJSB7IFxyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xyXG4gICAgfVxyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'loading',
                templateUrl: './loading.component.html',
                styleUrls: ['./loading.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Florian\IdeaProjects\chunnt-flo-id-aare\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map