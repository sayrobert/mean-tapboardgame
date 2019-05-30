(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/services/scores/score/score-service.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/services/scores/score/score-service.service.ts ***!
  \****************************************************************/
/*! exports provided: ScoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreService", function() { return ScoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth/auth-service.service */ "./src/app/services/auth/auth-service.service.ts");






var ScoreService = /** @class */ (function () {
    function ScoreService(http, router, auth) {
        this.http = http;
        this.router = router;
        this.auth = auth;
    }
    ScoreService.prototype.request = function (method, type, score) {
        var base;
        if (method === 'post') {
            base = this.http.post("/game/" + type, score);
        }
        else {
            base = this.http.get("/game/" + type);
        }
        var request = base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
        }));
        return request;
    };
    ScoreService.prototype.addScore = function (score) {
        return this.request('post', 'add', score);
    };
    ScoreService.prototype.getScores = function () {
        console.log('get score service ok');
        return this.request('get', 'all');
    };
    ScoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_auth_auth_service_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], ScoreService);
    return ScoreService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map