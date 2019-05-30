(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-scores-module"],{

/***/ "./src/app/routes/scores/module.ts":
/*!*****************************************!*\
  !*** ./src/app/routes/scores/module.ts ***!
  \*****************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router */ "./src/app/routes/scores/router.ts");
/* harmony import */ var _scores_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scores-page.component */ "./src/app/routes/scores/scores-page.component.ts");

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
            declarations: [_scores_page_component__WEBPACK_IMPORTED_MODULE_4__["ScoresPageComponent"]],
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

/***/ "./src/app/routes/scores/router.ts":
/*!*****************************************!*\
  !*** ./src/app/routes/scores/router.ts ***!
  \*****************************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _scores_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scores-page.component */ "./src/app/routes/scores/scores-page.component.ts");


//
/*
Definition
*/
var route = [
    {
        path: '',
        component: _scores_page_component__WEBPACK_IMPORTED_MODULE_1__["ScoresPageComponent"]
    }
];
//
/*
Export
*/
var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(route);
//


/***/ }),

/***/ "./src/app/routes/scores/scores-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/routes/scores/scores-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Score table</h2>\n\n<ul class=\"scores\">\n    <li class=\"scores-item\" *ngFor=\"let score of scores\">\n        <div class=\"score\">{{score.score}} points</div>\n        <div class=\"details\">{{score.userId}} / {{ score.date | date :'dd/MM/yyyy hh:mm:ss' }}</div>\n    </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/routes/scores/scores-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/routes/scores/scores-page.component.ts ***!
  \********************************************************/
/*! exports provided: ScoresPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoresPageComponent", function() { return ScoresPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth-service.service */ "./src/app/services/auth/auth-service.service.ts");
/* harmony import */ var _services_scores_score_score_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/scores/score/score-service.service */ "./src/app/services/scores/score/score-service.service.ts");

/*
Imports & definition
*/
// Imports



// Definition
var ScoresPageComponent = /** @class */ (function () {
    /*
    Config.
    */
    // Module injection
    function ScoresPageComponent(score) {
        this.score = score;
        this.scores = null;
    }
    ;
    //
    /*
    Methods
    */
    //
    /*
    Hooks
    */
    // Get scores
    ScoresPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.score.getScores().subscribe(function (scores) {
            _this.scores = scores.data;
            console.log(_this.scores);
        }, function (err) {
            console.error(err);
        });
    };
    ;
    ScoresPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-page',
            template: __webpack_require__(/*! ./scores-page.component.html */ "./src/app/routes/scores/scores-page.component.html"),
            providers: [_services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]]
        })
        //
        /*
        Export
        */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_scores_score_score_service_service__WEBPACK_IMPORTED_MODULE_3__["ScoreService"]])
    ], ScoresPageComponent);
    return ScoresPageComponent;
}());

//


/***/ })

}]);
//# sourceMappingURL=routes-scores-module.js.map