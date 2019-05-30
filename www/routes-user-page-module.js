(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-user-page-module"],{

/***/ "./src/app/routes/user-page/module.ts":
/*!********************************************!*\
  !*** ./src/app/routes/user-page/module.ts ***!
  \********************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router */ "./src/app/routes/user-page/router.ts");
/* harmony import */ var _user_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-page.component */ "./src/app/routes/user-page/user-page.component.ts");

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
            declarations: [_user_page_component__WEBPACK_IMPORTED_MODULE_4__["UserPageComponent"]],
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

/***/ "./src/app/routes/user-page/router.ts":
/*!********************************************!*\
  !*** ./src/app/routes/user-page/router.ts ***!
  \********************************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-page.component */ "./src/app/routes/user-page/user-page.component.ts");


//
/*
Definition
*/
var route = [
    {
        path: '',
        component: _user_page_component__WEBPACK_IMPORTED_MODULE_1__["UserPageComponent"]
    }
];
//
/*
Export
*/
var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(route);
//


/***/ }),

/***/ "./src/app/routes/user-page/user-page.component.html":
/*!***********************************************************!*\
  !*** ./src/app/routes/user-page/user-page.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Hello {{gamerId}} !</h2>\n\n<p>Nombre de clics effectués en 10s : {{score}}</p>\n<p>Temps restant : {{time}}s</p>\n<div class=\"state state-{{ time }}\"></div>\n\n<div class=\"game\">\n    <img src=\"assets/images/tapOff.png\" alt=\"\" (click)=\"tap()\" *ngIf=\"isOdd\">\n    <img src=\"assets/images/tapOn.png\" alt=\"\" (click)=\"tap()\" *ngIf=\"!isOdd\">\n</div>\n"

/***/ }),

/***/ "./src/app/routes/user-page/user-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/routes/user-page/user-page.component.ts ***!
  \*********************************************************/
/*! exports provided: UserPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageComponent", function() { return UserPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth-service.service */ "./src/app/services/auth/auth-service.service.ts");
/* harmony import */ var _services_scores_score_score_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/scores/score/score-service.service */ "./src/app/services/scores/score/score-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

/*
Imports & definition
*/
// Imports




// Definition
var UserPageComponent = /** @class */ (function () {
    /*
    Config.
    */
    // Module injection
    function UserPageComponent(AuthService, scores, router) {
        var _this = this;
        this.AuthService = AuthService;
        this.scores = scores;
        this.router = router;
        this.add = {
            score: 0,
            date: new Date(),
            userId: '',
        };
        this.started = false;
        this.score = 0;
        this.time = 10;
        this.isOdd = true;
        this.interval = null;
        //
        /*
        Methods
        */
        //
        this.getIdUser = function () {
            _this.AuthService.getUserName().then(function (result) {
                return _this.gamerId = result.data._id;
            });
        };
        this.gamerId = null;
    }
    ;
    /*
    Hooks
    */
    UserPageComponent.prototype.ngOnInit = function () {
        this.getIdUser();
    };
    ;
    UserPageComponent.prototype.decrease = function () {
        this.time--;
        if (this.time === 0) {
            this.finish();
        }
    };
    UserPageComponent.prototype.tap = function () {
        // If start to play
        if (!this.started) {
            this.interval = setInterval(this.decrease.bind(this), 1000);
            this.started = true;
        }
        // If time is not finish
        if (this.time > 0) {
            this.score++;
            this.isOdd = !this.isOdd;
            this.countClick = this.score;
        }
    };
    UserPageComponent.prototype.finish = function () {
        var _this = this;
        clearInterval(this.interval);
        this.add.score = this.score;
        this.add.userId = this.gamerId;
        // Send score to database
        this.scores.addScore(this.add).subscribe(function () {
            _this.router.navigateByUrl('/tap');
        }, function (err) {
            console.log(err);
        });
    };
    UserPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-page',
            template: __webpack_require__(/*! ./user-page.component.html */ "./src/app/routes/user-page/user-page.component.html"),
            providers: [_services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]]
        })
        //
        /*
        Export
        */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_scores_score_score_service_service__WEBPACK_IMPORTED_MODULE_3__["ScoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserPageComponent);
    return UserPageComponent;
}());

//


/***/ })

}]);
//# sourceMappingURL=routes-user-page-module.js.map