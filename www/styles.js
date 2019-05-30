(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* \nReset\n*/\n    :root{\n        --max-width: 90rem;\n        --max-marge: 6rem;\n        --med-marge: 3rem;\n        --min-marge: 1.5rem;\n        --dark-color: black;\n        --med-color: grey;\n        --light-color: white;\n        --error-color: red;\n        --success-color: green;\n    }\n    *{\n        margin: 0;\n        padding: 0;\n        -ms-box-sizing: border-box;\n        -o-box-sizing: border-box;\n        box-sizing: border-box;\n    }\n    app-home-page, app-form-response{\n        display: block;\n    }\n    html{\n        font-size: 62.5%;\n        font-family: sans-serif;\n        font-weight: 100;\n        line-height: 1.5;\n    }\n    body{\n        font-size: 1.6rem;\n    }\n    a{\n        text-decoration: none;\n        color: inherit;\n    }\n    form{\n        margin-bottom: var(--med-marge);\n    }\n    input:not([type=\"checkbox\"]), input:not([type=\"radio\"]), label, [type=\"submit\"]{\n        display: block;\n        width: 100%;\n        background: transparent;\n    }\n    label{\n        font-size: 1.1rem;\n        font-weight: 900;\n        text-transform: uppercase;\n    }\n    input{\n        font-size: 2rem;\n        padding: var(--min-marge);\n        border: none;\n        border-bottom: .1rem solid var(--med-color);\n        margin-bottom: var(--med-marge);\n    }\n    button{\n        border: none;\n        background: transparent;\n    }\n    [type=\"submit\"]{\n        text-transform: uppercase;\n        font-weight: 900;\n        padding: var(--min-marge);\n        border: .1rem solid var(--med-color);\n        \n        transition: all .3s;\n        -webkit-transition: all .3s;\n        -moz-transition: all .3s;\n        -ms-transition: all .3s;\n        -o-transition: all .3s;\n    }\n    [type=\"submit\"][disabled]{\n        opacity: .5;\n    }\n    [type=\"submit\"]:not([disabled]):hover{\n        color: var(--light-color);\n        background-color: var(--dark-color);\n    }\n    /**/\n    /* \nCommon\n*/\n    .maxWidth{\n        max-width: var(--max-width);\n        margin-left: auto;\n        margin-right: auto;\n        padding-left: var(--med-marge);\n        padding-right: var(--med-marge);\n    }\n    .flexBox{\n        display: -moz-flex;\n        display: -ms-flex;\n        display: -o-flex;\n        display: flex;\n    }\n    .spaceBetween{\n        -moz-justify-content: space-between;\n        -ms-justify-content: space-between;\n        -o-justify-content: space-between;\n        justify-content: space-between;\n    }\n    /**/\n    /* \nHeader\n*/\n    header{\n        padding: var(--med-marge) 0;\n    }\n    nav{\n        margin: var(--min-marge) 0;\n        padding-bottom: var(--min-marge);\n        border-bottom: .1rem dotted var(--med-color)\n    }\n    nav li{\n        color: var(--light-color);\n        display: inline-block;\n        background-color: var(--med-color);\n        line-height: 1.7;\n        \n        transition: all .3s;\n        -webkit-transition: all .3s;\n        -moz-transition: all .3s;\n        -ms-transition: all .3s;\n        -o-transition: all .3s;\n    }\n    nav li:not(:last-child){\n        margin-right: var(--min-marge);\n    }\n    nav li:hover{\n        background-color: var(--dark-color);\n    }\n    nav a{\n        font-size: 1rem;\n        font-weight: 900;\n        text-transform: uppercase;\n        padding: 0 var(--min-marge);\n    }\n    /**/\n    /* \nComponents\n*/\n    /* app-home-page */\n    app-home-page article{\n        width: calc(50% - var(--med-marge));\n    }\n    /* app-form-response */\n    app-form-response{\n        border: .1rem solid var(--med-color);\n        padding: var(--min-marge);\n        position: relative;\n    }\n    app-form-response.error{\n        border-color: var(--error-color);\n    }\n    app-form-response.success{\n        border-color: var(--success-color);\n    }\n    app-form-response button{\n        font-size: 2rem;\n        padding: .5rem;\n        position: absolute;\n        top: 0;\n        right: 0;\n    }\n    /**/\n    .state{\n    margin-top: 15px;\n    background: yellow;\n    height: 40px;\n    width: 100%;\n    position: relative;\n}\n    .state:before{\n    background: grey;\n    content: '';\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n}\n    .state-0:before{\n    width: 0;\n}\n    .state-1:before{\n    width: 10%;\n}\n    .state-2:before{\n    width: 20%;\n}\n    .state-3:before{\n    width: 30%;\n}\n    .state-4:before{\n    width: 40%;\n}\n    .state-5:before{\n    width: 50%;\n}\n    .state-6:before{\n    width: 60%;\n}\n    .state-7:before{\n    width: 70%;\n}\n    .state-8:before{\n    width: 80%;\n}\n    .state-9:before{\n    width: 90%;\n}\n    .state-10:before{\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,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QUFXO0NBQ2Q7SUFDRDtJQUNJLFdBQVc7Q0FDZDtJQUNEO0lBQ0ksV0FBVztDQUNkO0lBQ0Q7SUFDSSxXQUFXO0NBQ2Q7SUFDRDtJQUNJLFdBQVc7Q0FDZDtJQUNEO0lBQ0ksV0FBVztDQUNkO0lBQ0Q7SUFDSSxXQUFXO0NBQ2Q7SUFDRDtJQUNJLFdBQVc7Q0FDZDtJQUNEO0lBQ0ksWUFBWTtDQUNmIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogXG5SZXNldFxuKi9cbiAgICA6cm9vdHtcbiAgICAgICAgLS1tYXgtd2lkdGg6IDkwcmVtO1xuICAgICAgICAtLW1heC1tYXJnZTogNnJlbTtcbiAgICAgICAgLS1tZWQtbWFyZ2U6IDNyZW07XG4gICAgICAgIC0tbWluLW1hcmdlOiAxLjVyZW07XG4gICAgICAgIC0tZGFyay1jb2xvcjogYmxhY2s7XG4gICAgICAgIC0tbWVkLWNvbG9yOiBncmV5O1xuICAgICAgICAtLWxpZ2h0LWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgLS1lcnJvci1jb2xvcjogcmVkO1xuICAgICAgICAtLXN1Y2Nlc3MtY29sb3I6IGdyZWVuO1xuICAgIH1cblxuICAgICp7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIC1vLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuXG4gICAgYXBwLWhvbWUtcGFnZSwgYXBwLWZvcm0tcmVzcG9uc2V7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIGh0bWx7XG4gICAgICAgIGZvbnQtc2l6ZTogNjIuNSU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIH1cblxuICAgIGJvZHl7XG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIH1cblxuICAgIGF7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgfVxuXG4gICAgZm9ybXtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbWVkLW1hcmdlKTtcbiAgICB9XG5cbiAgICBpbnB1dDpub3QoW3R5cGU9XCJjaGVja2JveFwiXSksIGlucHV0Om5vdChbdHlwZT1cInJhZGlvXCJdKSwgbGFiZWwsIFt0eXBlPVwic3VibWl0XCJde1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgIGxhYmVse1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG5cbiAgICBpbnB1dHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBwYWRkaW5nOiB2YXIoLS1taW4tbWFyZ2UpO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1ib3R0b206IC4xcmVtIHNvbGlkIHZhcigtLW1lZC1jb2xvcik7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLW1lZC1tYXJnZSk7XG4gICAgfVxuXG4gICAgYnV0dG9ue1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgIFt0eXBlPVwic3VibWl0XCJde1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICBwYWRkaW5nOiB2YXIoLS1taW4tbWFyZ2UpO1xuICAgICAgICBib3JkZXI6IC4xcmVtIHNvbGlkIHZhcigtLW1lZC1jb2xvcik7XG4gICAgICAgIFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3M7XG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAuM3M7XG4gICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAuM3M7XG4gICAgfVxuXG4gICAgW3R5cGU9XCJzdWJtaXRcIl1bZGlzYWJsZWRde1xuICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICB9XG5cbiAgICBbdHlwZT1cInN1Ym1pdFwiXTpub3QoW2Rpc2FibGVkXSk6aG92ZXJ7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY29sb3IpO1xuICAgIH1cbi8qKi9cblxuLyogXG5Db21tb25cbiovXG4gICAgLm1heFdpZHRoe1xuICAgICAgICBtYXgtd2lkdGg6IHZhcigtLW1heC13aWR0aCk7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tbWVkLW1hcmdlKTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogdmFyKC0tbWVkLW1hcmdlKTtcbiAgICB9XG5cbiAgICAuZmxleEJveHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiAtbW96LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4O1xuICAgICAgICBkaXNwbGF5OiAtby1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgIC5zcGFjZUJldHdlZW57XG4gICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAtbW96LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgLW1zLWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgLW8tanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuLyoqL1xuXG4vKiBcbkhlYWRlclxuKi9cbiAgICBoZWFkZXJ7XG4gICAgICAgIHBhZGRpbmc6IHZhcigtLW1lZC1tYXJnZSkgMDtcbiAgICB9XG5cbiAgICBuYXZ7XG4gICAgICAgIG1hcmdpbjogdmFyKC0tbWluLW1hcmdlKSAwO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tbWluLW1hcmdlKTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogLjFyZW0gZG90dGVkIHZhcigtLW1lZC1jb2xvcilcbiAgICB9XG5cbiAgICBuYXYgbGl7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkLWNvbG9yKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNztcbiAgICAgICAgXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjNzO1xuICAgICAgICAtbXMtdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgICB9XG5cbiAgICBuYXYgbGk6bm90KDpsYXN0LWNoaWxkKXtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1taW4tbWFyZ2UpO1xuICAgIH1cblxuICAgIG5hdiBsaTpob3ZlcntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jb2xvcik7XG4gICAgfVxuXG4gICAgbmF2IGF7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgcGFkZGluZzogMCB2YXIoLS1taW4tbWFyZ2UpO1xuICAgIH1cbi8qKi9cblxuXG4vKiBcbkNvbXBvbmVudHNcbiovXG4gICAgLyogYXBwLWhvbWUtcGFnZSAqL1xuICAgIGFwcC1ob21lLXBhZ2UgYXJ0aWNsZXtcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gdmFyKC0tbWVkLW1hcmdlKSk7XG4gICAgfVxuXG4gICAgLyogYXBwLWZvcm0tcmVzcG9uc2UgKi9cbiAgICBhcHAtZm9ybS1yZXNwb25zZXtcbiAgICAgICAgYm9yZGVyOiAuMXJlbSBzb2xpZCB2YXIoLS1tZWQtY29sb3IpO1xuICAgICAgICBwYWRkaW5nOiB2YXIoLS1taW4tbWFyZ2UpO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgYXBwLWZvcm0tcmVzcG9uc2UuZXJyb3J7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZXJyb3ItY29sb3IpO1xuICAgIH1cblxuICAgIGFwcC1mb3JtLXJlc3BvbnNlLnN1Y2Nlc3N7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tc3VjY2Vzcy1jb2xvcik7XG4gICAgfVxuXG4gICAgYXBwLWZvcm0tcmVzcG9uc2UgYnV0dG9ue1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuLyoqL1xuXG4uc3RhdGV7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnN0YXRlOmJlZm9yZXtcbiAgICBiYWNrZ3JvdW5kOiBncmV5O1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG59XG5cbi5zdGF0ZS0wOmJlZm9yZXtcbiAgICB3aWR0aDogMDtcbn1cbi5zdGF0ZS0xOmJlZm9yZXtcbiAgICB3aWR0aDogMTAlO1xufVxuLnN0YXRlLTI6YmVmb3Jle1xuICAgIHdpZHRoOiAyMCU7XG59XG4uc3RhdGUtMzpiZWZvcmV7XG4gICAgd2lkdGg6IDMwJTtcbn1cbi5zdGF0ZS00OmJlZm9yZXtcbiAgICB3aWR0aDogNDAlO1xufVxuLnN0YXRlLTU6YmVmb3Jle1xuICAgIHdpZHRoOiA1MCU7XG59XG4uc3RhdGUtNjpiZWZvcmV7XG4gICAgd2lkdGg6IDYwJTtcbn1cbi5zdGF0ZS03OmJlZm9yZXtcbiAgICB3aWR0aDogNzAlO1xufVxuLnN0YXRlLTg6YmVmb3Jle1xuICAgIHdpZHRoOiA4MCU7XG59XG4uc3RhdGUtOTpiZWZvcmV7XG4gICAgd2lkdGg6IDkwJTtcbn1cbi5zdGF0ZS0xMDpiZWZvcmV7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/Master/TapBoardGame/ANGclient/src/styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map