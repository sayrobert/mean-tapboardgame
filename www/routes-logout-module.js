(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-logout-module"],{

/***/ "./src/app/routes/logout/logout-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/routes/logout/logout-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Vous avez bien été déconnecté du TapBoardGame, veuillez vous reconnecter.</h2>\n"

/***/ }),

/***/ "./src/app/routes/logout/logout-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/routes/logout/logout-page.component.ts ***!
  \********************************************************/
/*! exports provided: LogoutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutPageComponent", function() { return LogoutPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth-service.service */ "./src/app/services/auth/auth-service.service.ts");

/*
Imports & definition
*/
// Imports


// Definition
var LogoutPageComponent = /** @class */ (function () {
    /*
    Config.
    */
    // Module injection
    function LogoutPageComponent(AuthService) {
        var _this = this;
        this.AuthService = AuthService;
        //
        /*
        Methods
        */
        //
        this.logout = function () {
            return _this.AuthService.logout();
        };
    }
    ;
    /*
    Hooks
    */
    LogoutPageComponent.prototype.ngOnInit = function () {
        this.logout();
    };
    ;
    LogoutPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-page',
            template: __webpack_require__(/*! ./logout-page.component.html */ "./src/app/routes/logout/logout-page.component.html"),
            providers: [_services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]]
        })
        //
        /*
        Export
        */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LogoutPageComponent);
    return LogoutPageComponent;
}());

//


/***/ }),

/***/ "./src/app/routes/logout/module.ts":
/*!*****************************************!*\
  !*** ./src/app/routes/logout/module.ts ***!
  \*****************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router */ "./src/app/routes/logout/router.ts");
/* harmony import */ var _logout_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logout-page.component */ "./src/app/routes/logout/logout-page.component.ts");

/*
Imports
*/
// Angular


// Inner


//
/*
Definition
*/
var Module = /** @class */ (function () {
    //
    /*
    Export
    */
    function Module() {
    }
    Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_logout_page_component__WEBPACK_IMPORTED_MODULE_4__["LogoutPageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _router__WEBPACK_IMPORTED_MODULE_3__["Routing"]
            ]
        })
        //
        /*
        Export
        */
    ], Module);
    return Module;
}());

;
//


/***/ }),

/***/ "./src/app/routes/logout/router.ts":
/*!*****************************************!*\
  !*** ./src/app/routes/logout/router.ts ***!
  \*****************************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _logout_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logout-page.component */ "./src/app/routes/logout/logout-page.component.ts");


//
/*
Definition
*/
var route = [
    {
        path: '',
        component: _logout_page_component__WEBPACK_IMPORTED_MODULE_1__["LogoutPageComponent"]
    }
];
//
/*
Export
*/
var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(route);
//


/***/ })

}]);
//# sourceMappingURL=routes-logout-module.js.map