(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _explore_explore_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./explore/explore.component */ "./src/app/explore/explore.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _game_saved_game_saved_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game-saved/game-saved.component */ "./src/app/game-saved/game-saved.component.ts");







var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'explore', component: _explore_explore_component__WEBPACK_IMPORTED_MODULE_3__["ExploreComponent"] },
    { path: 'game', component: _game_game_component__WEBPACK_IMPORTED_MODULE_5__["GameComponent"] },
    { path: 'game/:id', component: _game_saved_game_saved_component__WEBPACK_IMPORTED_MODULE_6__["GameSavedComponent"] },
    { path: '**', redirectTo: '' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  display: flex;\n  flex-direction: row;\n  background-color: #6c9393;\n  line-height: 50px;\n  flex-wrap: nowrap;\n  height: 50px;\n}\n\n.logo {\n  width: 50px;\n  height: 50px;\n  box-sizing: border-box;\n}\n\n.title {\n  font-size: 24px;\n  margin: 0 10px;\n  color:  #f2f2f2;\n  overflow: hidden;\n}\n\n@media screen and (max-width: 450px) {\n  .title {\n    display: none;\n  }\n}\n\n.content {\n  margin: 0 150px;\n}\n\n@media screen and (max-width: 960px) {\n  .content {\n    margin: 0 100px;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .content {\n    margin: 0 20px;\n  }\n}\n\n.space {\n  flex-grow: 1;\n}\n\n.nav-item {\n  margin: 0 5px;\n  overflow: hidden;\n}\n\n.selected {\n  color: #5353c6;\n}\n\n.last {\n  min-width: 8px;\n}\n\na {\n  text-decoration: none;\n}\n\n.footer {\n  margin-top: 20px;\n  background-color: rgb(176, 207, 207);\n  text-align: center;\n  height: 50px;\n  line-height: 50px;\n}\n\n.wrapper {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n/* \n@my-background: #E0FFFF;\n@my-fontcolor: #5353c6;\n@my-headercolor: #6c9393;\n@my-navbartextcolor: #f2f2f2; \n\nmaterial-ui break points\nxs: 0\nsm: 600\nmd: 960\nlg: 1280\nxl: 1920\n\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtBQUNGOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBOzs7Ozs7Ozs7Ozs7O0NBYUMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2YzkzOTM7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4ubG9nbyB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGNvbG9yOiAgI2YyZjJmMjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLnRpdGxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5jb250ZW50IHtcbiAgbWFyZ2luOiAwIDE1MHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgLmNvbnRlbnQge1xuICAgIG1hcmdpbjogMCAxMDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRlbnQge1xuICAgIG1hcmdpbjogMCAyMHB4O1xuICB9XG59XG5cbi5zcGFjZSB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLm5hdi1pdGVtIHtcbiAgbWFyZ2luOiAwIDVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNlbGVjdGVkIHtcbiAgY29sb3I6ICM1MzUzYzY7XG59XG4ubGFzdCB7XG4gIG1pbi13aWR0aDogOHB4O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NiwgMjA3LCAyMDcpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG59XG5cbi53cmFwcGVyIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi8qIFxuQG15LWJhY2tncm91bmQ6ICNFMEZGRkY7XG5AbXktZm9udGNvbG9yOiAjNTM1M2M2O1xuQG15LWhlYWRlcmNvbG9yOiAjNmM5MzkzO1xuQG15LW5hdmJhcnRleHRjb2xvcjogI2YyZjJmMjsgXG5cbm1hdGVyaWFsLXVpIGJyZWFrIHBvaW50c1xueHM6IDBcbnNtOiA2MDBcbm1kOiA5NjBcbmxnOiAxMjgwXG54bDogMTkyMFxuXG4qLyJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <nav>\n    <div class=\"logo\">\n      <a routerLink=\"/\" >\n        <img class=\"logo\" src=\"/assets/conway.ico\">\n      </a>\n    </div>\n    <div class=\"title\"> Conway Game </div>\n    <div class=\"space\"></div>\n    <div *ngIf=\"router.url !== '/'\" class=\"nav-item\"> <a routerLink=\"/\"> Summary </a> </div>\n    <div *ngIf=\"router.url !== '/explore'\" class=\"nav-item\"> <a routerLink=\"/explore\"> Explore </a> </div>\n    <div *ngIf=\"router.url !== '/game'\" class=\"nav-item\"> <a routerLink=\"/game\"> Play </a> </div>\n    <div class=\"last\"></div>\n  </nav>\n  <div class=\"content\">\n    <router-outlet></router-outlet>\n  </div>\n  <div class=\"space\"></div>\n  <div class=\"footer\">\n    <a href=\"https://hiteshlala.com\" > &copy; 2016 - {{year}} Hitesh Lala</a>\n  </div>\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.year = new Date().getFullYear();
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./board/board.component */ "./src/app/board/board.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _explore_explore_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./explore/explore.component */ "./src/app/explore/explore.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _game_saved_game_saved_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./game-saved/game-saved.component */ "./src/app/game-saved/game-saved.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _board_board_component__WEBPACK_IMPORTED_MODULE_8__["BoardComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _explore_explore_component__WEBPACK_IMPORTED_MODULE_10__["ExploreComponent"],
                _game_game_component__WEBPACK_IMPORTED_MODULE_11__["GameComponent"],
                _game_saved_game_saved_component__WEBPACK_IMPORTED_MODULE_12__["GameSavedComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/board/board.component.css":
/*!*******************************************!*\
  !*** ./src/app/board/board.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rowbox {\n  display: flex;\n  flex-direction: row;\n  /* background-color: yellow; */\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.cell {\n  width: 15px;\n  height: 15px;\n  border-radius: 3px;\n  border: 1px solid gray;\n  transition: background-color 0.3s ease;\n}\n\n.hoverable:hover {\n  opacity: 0.5;\n}\n\n.alive {\n  background-color: #5353c6;\n}\n\n.dead {\n  background-color: #fff7e0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9hcmQvYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93Ym94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogeWVsbG93OyAqL1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbi5jZWxsIHtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbn1cblxuLmhvdmVyYWJsZTpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmFsaXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUzNTNjNjtcbn1cbi5kZWFkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjdlMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/board/board.component.html":
/*!********************************************!*\
  !*** ./src/app/board/board.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div *ngFor=\"let row of currentState; index as r\" class=\"rowbox\">\n    <div *ngFor=\"let cell of row; index as c\" >\n       <div \n        class=\"cell\" \n        (click)=\"toggleState( r, c )\" \n        [ngClass]=\"{ \n          'alive': ( cell === 1 ),\n          'dead': ( cell === 0 ), \n          'hoverable': canedit \n        }\"\n\n      ></div>\n    </div>\n  </div>\n</div>\n\n<!-- [ngClass]=\" ( cell === 1 ) ? 'alive' : '' \" -->"

/***/ }),

/***/ "./src/app/board/board.component.ts":
/*!******************************************!*\
  !*** ./src/app/board/board.component.ts ***!
  \******************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BoardComponent = /** @class */ (function () {
    function BoardComponent() {
        var _this = this;
        this.canedit = true;
        this.intervalInternal = 300;
        this.startInternal = false;
        this.resetInternal = false;
        this.blankInternal = false;
        this.editable = true;
        this.counter = 0;
        this.generation = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.world = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.redraw = function () {
            _this.stateInitial = [];
            _this.currentState = [];
            _this.counter = 0;
            for (var i = 0; i < _this.rowsInternal; i++) {
                var row = [];
                for (var j = 0; j < _this.columnsInternal; j++) {
                    var value = _this.blankInternal ? 0 : ((Math.random() >= 0.5) ? 1 : 0);
                    row.push(value);
                }
                _this.stateInitial.push(row);
                _this.currentState.push(row.slice());
            }
            _this.editable = _this.canedit ? true : false;
            _this.world.emit(_this.stateInitial);
        };
        this.toggleState = function (row, col) {
            if (_this.canedit && _this.editable) {
                _this.currentState[row][col] = _this.currentState[row][col] === 1 ? 0 : 1;
                _this.stateInitial[row][col] = _this.stateInitial[row][col] === 1 ? 0 : 1;
            }
        };
        this.genEmptyCells = function (m, n) {
            var empty = [];
            for (var i = 0; i < m; i++) {
                empty.push(new Array(n));
            }
            return empty;
        };
        this.evolve = function () {
            var m = _this.rowsInternal;
            var n = _this.columnsInternal;
            var cells = _this.currentState;
            _this.counter++;
            var next = _this.genEmptyCells(m, n);
            var getValue = function (matrix, i, j) {
                return matrix[i] && matrix[i][j] || 0;
            };
            for (var i = 0; i < m; i++) {
                for (var j = 0; j < n; j++) {
                    // check eight neighbors
                    var count = getValue(cells, i - 1, j - 1) +
                        getValue(cells, i - 1, j) +
                        getValue(cells, i - 1, j + 1) +
                        getValue(cells, i, j - 1) +
                        getValue(cells, i, j + 1) +
                        getValue(cells, i + 1, j - 1) +
                        getValue(cells, i + 1, j) +
                        getValue(cells, i + 1, j + 1);
                    if (count === 3) {
                        next[i][j] = 1;
                    }
                    else if (count === 2 && cells[i][j] === 1) {
                        next[i][j] = 1;
                    }
                    else {
                        next[i][j] = 0;
                    }
                } // for(j)
            } // for(i)
            _this.currentState = next;
            _this.generation.emit(_this.counter);
        };
    }
    Object.defineProperty(BoardComponent.prototype, "rows", {
        set: function (r) {
            this.rowsInternal = r;
            this.redraw();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoardComponent.prototype, "columns", {
        set: function (c) {
            this.columnsInternal = c;
            this.redraw();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoardComponent.prototype, "state", {
        set: function (a) {
            if (Array.isArray(a)) {
                this.stateInitial = a;
                this.currentState = a.map(function (outer) { return outer.map(function (inner) { return inner; }); });
                this.rowsInternal = this.stateInitial.length;
                this.columnsInternal = this.stateInitial[0].length;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoardComponent.prototype, "edit", {
        set: function (flag) {
            this.canedit = flag;
            this.editable = flag;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoardComponent.prototype, "interval", {
        set: function (ms) {
            this.intervalInternal = ms;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoardComponent.prototype, "blank", {
        set: function (flag) {
            this.blankInternal = flag;
            this.redraw();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoardComponent.prototype, "start", {
        set: function (flag) {
            if (this.startInternal && !flag) {
                this.startInternal = false;
                clearInterval(this.timer);
            }
            else if (!this.startInternal && flag) {
                this.editable = false;
                this.startInternal = true;
                this.timer = setInterval(this.evolve, this.intervalInternal);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoardComponent.prototype, "reset", {
        set: function (flag) {
            if (flag && !this.resetInternal) {
                this.counter = 0;
                this.startInternal = false;
                clearInterval(this.timer);
                this.currentState = this.stateInitial.map(function (outer) { return outer.map(function (inner) { return inner; }); });
                this.resetInternal = false;
                this.editable = this.canedit ? true : false;
                this.generation.emit(this.counter);
            }
        },
        enumerable: true,
        configurable: true
    });
    BoardComponent.prototype.ngOnInit = function () {
        if (this.stateInitial) {
            this.rowsInternal = this.stateInitial.length;
            this.columnsInternal = this.stateInitial[0].length;
            this.currentState = this.stateInitial.map(function (outer) { return outer.map(function (inner) { return inner; }); });
        }
        else {
            if (!this.rowsInternal) {
                this.rowsInternal = 10;
            }
            if (!this.columnsInternal) {
                this.columnsInternal = 10;
            }
            this.stateInitial = [];
            this.currentState = [];
            for (var i = 0; i < this.rowsInternal; i++) {
                var row = [];
                for (var j = 0; j < this.columnsInternal; j++) {
                    var value = this.blankInternal ? 0 : ((Math.random() >= 0.5) ? 1 : 0);
                    row.push(value);
                }
                this.stateInitial.push(row);
                this.currentState.push(row.slice());
            }
        }
        this.generation.emit(this.counter);
        this.world.emit(this.stateInitial);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoardComponent.prototype, "generation", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BoardComponent.prototype, "world", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], BoardComponent.prototype, "rows", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], BoardComponent.prototype, "columns", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
    ], BoardComponent.prototype, "state", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], BoardComponent.prototype, "edit", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], BoardComponent.prototype, "interval", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], BoardComponent.prototype, "blank", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], BoardComponent.prototype, "start", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], BoardComponent.prototype, "reset", null);
    BoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-board',
            template: __webpack_require__(/*! ./board.component.html */ "./src/app/board/board.component.html"),
            styles: [__webpack_require__(/*! ./board.component.css */ "./src/app/board/board.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "./src/app/explore/explore.component.css":
/*!***********************************************!*\
  !*** ./src/app/explore/explore.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".column {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n}\n\n.group {\n  margin: 15px 0;\n  padding: 5px;\n  border: 1px solid #5353c6;\n  border-radius: 2%;\n  background-color: rgb(238, 234, 195);\n}\n\n.buttons {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  margin: 5px 0;\n}\n\n.buttons button {\n  color: #5353c6;\n  border-radius: 5px;\n  background-color: rgb(176, 207, 207);\n  border: 1px solid gray;\n  margin: 1px;\n}\n\n.buttons button:hover {\n  background-color: #a2adad;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwbG9yZS9leHBsb3JlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2V4cGxvcmUvZXhwbG9yZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbHVtbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4uZ3JvdXAge1xuICBtYXJnaW46IDE1cHggMDtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTM1M2M2O1xuICBib3JkZXItcmFkaXVzOiAyJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjM0LCAxOTUpO1xufVxuXG4uYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBtYXJnaW46IDVweCAwO1xufVxuXG4uYnV0dG9ucyBidXR0b24ge1xuICBjb2xvcjogIzUzNTNjNjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc2LCAyMDcsIDIwNyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gIG1hcmdpbjogMXB4O1xufVxuXG4uYnV0dG9ucyBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTJhZGFkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/explore/explore.component.html":
/*!************************************************!*\
  !*** ./src/app/explore/explore.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <p> These starting conditions eventually evolve into a cyclical state.</p>\n  \n  <div class=\"row\">\n    <div class=\"group\">\n      <app-board [state]=\"demo1\" [edit]=\"false\" [start]=\"demo1Run\" [reset]=\"demo1Reset\"> </app-board>\n      <div class=\"buttons\">\n        <button (click)=\"startStop( 1 )\"> Start/Stop </button>\n        <button (click)=\"reset( 1 )\"> Reset </button>\n      </div>\n    </div>\n\n    <div class=\"group\">\n      <app-board [state]=\"demo5\" [edit]=\"false\" [start]=\"demo5Run\" [reset]=\"demo5Reset\"> </app-board>\n      <div class=\"buttons\">\n        <button (click)=\"startStop( 5 )\"> Start/Stop </button>\n        <button (click)=\"reset( 5 )\"> Reset </button>\n      </div>\n    </div>\n\n    <div class=\"group\">\n      <app-board [state]=\"demo2\" [edit]=\"false\" [start]=\"demo2Run\" [reset]=\"demo2Reset\"> </app-board>\n      <div class=\"buttons\">\n        <button (click)=\"startStop( 2 )\"> Start/Stop </button>\n        <button (click)=\"reset( 2 )\"> Reset </button>\n      </div>\n    </div>\n\n    <div class=\"group\">\n      <app-board [state]=\"demo3\" [edit]=\"false\" [start]=\"demo3Run\" [reset]=\"demo3Reset\"> </app-board>\n      <div class=\"buttons\">\n        <button (click)=\"startStop( 3 )\"> Start/Stop </button>\n        <button (click)=\"reset( 3 )\"> Reset </button>\n      </div>\n    </div>\n\n    <div class=\"group\">\n      <app-board [state]=\"demo4\" [edit]=\"false\" [start]=\"demo4Run\" [reset]=\"demo4Reset\"> </app-board>\n      <div class=\"buttons\">\n        <button (click)=\"startStop( 4 )\"> Start/Stop </button>\n        <button (click)=\"reset( 4 )\"> Reset </button>\n      </div>\n    </div>\n\n    <div class=\"group\">\n      <app-board [state]=\"demo6\" [edit]=\"false\" [start]=\"demo6Run\" [reset]=\"demo6Reset\"> </app-board>\n      <div class=\"buttons\">\n        <button (click)=\"startStop( 6 )\"> Start/Stop </button>\n        <button (click)=\"reset( 6 )\"> Reset </button>\n      </div>\n    </div>\n  </div>\n\n  <p> These starting conditions perpetually spawn new elements.</p>\n  <div class=\"column\">\n    <div class=\"group\">\n      <app-board [state]=\"demo7\" [edit]=\"false\" [start]=\"demo7Run\" [reset]=\"demo7Reset\"> </app-board>\n      <div class=\"buttons\">\n        <button (click)=\"startStop( 7 )\"> Start/Stop </button>\n        <button (click)=\"reset( 7 )\"> Reset </button>\n      </div>\n    </div>\n\n    <div class=\"group\">\n      <app-board [state]=\"demo8\" [edit]=\"false\" [start]=\"demo8Run\" [reset]=\"demo8Reset\" [interval]=\"0\"> </app-board>\n      <div class=\"buttons\">\n        <button (click)=\"startStop( 8 )\"> Start/Stop </button>\n        <button (click)=\"reset( 8 )\"> Reset </button>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/explore/explore.component.ts":
/*!**********************************************!*\
  !*** ./src/app/explore/explore.component.ts ***!
  \**********************************************/
/*! exports provided: ExploreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreComponent", function() { return ExploreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExploreComponent = /** @class */ (function () {
    /* tslint:enable */
    function ExploreComponent() {
        var _this = this;
        /* tslint:disable */
        this.demo1 = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
        this.demo1Run = false;
        this.demo1Reset = false;
        this.demo2 = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0],
            [0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0],
            [0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
        this.demo2Run = false;
        this.demo2Reset = false;
        this.demo3 = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
        this.demo3Run = false;
        this.demo3Reset = false;
        this.demo4 = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0],
            [0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
            [0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
        this.demo4Run = false;
        this.demo4Reset = false;
        this.demo5 = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0],
            [0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
        this.demo5Run = false;
        this.demo5Reset = false;
        this.demo6 = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
        this.demo6Run = false;
        this.demo6Reset = false;
        this.demo7 = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
        this.demo7Run = false;
        this.demo7Reset = false;
        this.demo8 = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
        this.demo8Run = false;
        this.demo8Reset = false;
        this.demo9Run = false;
        this.demo9Reset = false;
        this.startStop = function (demo) {
            _this["demo" + demo + "Run"] = !_this["demo" + demo + "Run"];
        };
        this.reset = function (demo) {
            _this["demo" + demo + "Reset"] = true;
            _this["demo" + demo + "Run"] = false;
            setTimeout(function () { return _this["demo" + demo + "Reset"] = false; }, 50);
        };
    }
    ExploreComponent.prototype.ngOnInit = function () {
    };
    ExploreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-explore',
            template: __webpack_require__(/*! ./explore.component.html */ "./src/app/explore/explore.component.html"),
            styles: [__webpack_require__(/*! ./explore.component.css */ "./src/app/explore/explore.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExploreComponent);
    return ExploreComponent;
}());



/***/ }),

/***/ "./src/app/game-saved/game-saved.component.css":
/*!*****************************************************!*\
  !*** ./src/app/game-saved/game-saved.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.group {\n  margin: 15px auto;\n  padding: 5px;\n  border: 1px solid #5353c6;\n  border-radius: 2%;\n  background-color: rgb(238, 234, 195);\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.controls {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  margin: 5px 0;\n}\n\n.inputs {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  margin: 3px;\n}\n\n.inputs input {\n  width: 100px;\n}\n\np {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.button {\n  color: #5353c6;\n  border-radius: 5px;\n  background-color: rgb(176, 207, 207);\n  border: 1px solid gray;\n  margin: 1px;\n}\n\n.button:hover {\n  background-color: #a2adad;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1zYXZlZC9nYW1lLXNhdmVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQywwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS1zYXZlZC9nYW1lLXNhdmVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5ncm91cCB7XG4gIG1hcmdpbjogMTVweCBhdXRvO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1MzUzYzY7XG4gIGJvcmRlci1yYWRpdXM6IDIlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAyMzQsIDE5NSk7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLmNvbnRyb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIG1hcmdpbjogNXB4IDA7XG59XG5cbi5pbnB1dHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgbWFyZ2luOiAzcHg7XG59XG4uaW5wdXRzIGlucHV0IHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG5wIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uYnV0dG9uIHtcbiAgY29sb3I6ICM1MzUzYzY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NiwgMjA3LCAyMDcpO1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBtYXJnaW46IDFweDtcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhMmFkYWQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/game-saved/game-saved.component.html":
/*!******************************************************!*\
  !*** ./src/app/game-saved/game-saved.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"controls\">\n  <p><input class=\"button\" type=\"button\" (click)=\"resume()\" value=\"Start\" /></p>\n  <p> <input class=\"button\" type=\"button\" (click)=\"pause()\" value=\"Stop\"/> </p>\n  <p><input class=\"button\" type=\"button\" (click)=\"reset()\" value=\"Reset\" /></p>\n  <p> Evolutions: {{ iterations }}</p>\n</div>\n\n<div class=\"group\">\n  <app-board \n    [state]=\"world\"\n    [edit]=\"false\"\n    [start]=\"start\" \n    [reset]=\"resetworld\" \n    [interval]=\"timeInterval\"\n    (generation)=\"currentIteration($event)\"\n  > </app-board>\n</div>\n\n<div class=\"center\">\n  <p *ngIf=\"!!error\" (click)=\"clearError()\">{{ error }}</p>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/game-saved/game-saved.component.ts":
/*!****************************************************!*\
  !*** ./src/app/game-saved/game-saved.component.ts ***!
  \****************************************************/
/*! exports provided: GameSavedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameSavedComponent", function() { return GameSavedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var GameSavedComponent = /** @class */ (function () {
    function GameSavedComponent(route, http, router) {
        var _this = this;
        this.route = route;
        this.http = http;
        this.router = router;
        this.timeInterval = 300;
        this.start = false;
        this.resetworld = false;
        this.iterations = 0;
        this.error = '';
        this.pause = function () {
            _this.start = false;
        };
        this.resume = function () {
            _this.start = true;
        };
        this.reset = function () {
            _this.resetworld = true;
            _this.start = false;
            setTimeout(function () { return _this.resetworld = false; }, 50);
        };
        this.currentIteration = function (e) {
            _this.iterations = e;
        };
        this.clearError = function () {
            _this.error = '';
        };
    }
    GameSavedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.paramMap.get('id');
        this.http.get("/api/game/" + this.id)
            .toPromise()
            .then(function (r) {
            if (r.error) {
                console.log('Error:', r.error);
                _this.error = r.error + " - Navigating to new game";
                setTimeout(function () { return _this.router.navigate(['/game']); }, 4000);
            }
            else {
                var world = JSON.parse(r.world);
                _this.world = world;
            }
        })
            .catch(function (error) {
            console.log('Error:', error);
            _this.error = error + " - Navigating to new game";
            setTimeout(function () { return _this.router.navigate(['/game']); }, 4000);
        });
    };
    GameSavedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-game-saved',
            template: __webpack_require__(/*! ./game-saved.component.html */ "./src/app/game-saved/game-saved.component.html"),
            styles: [__webpack_require__(/*! ./game-saved.component.css */ "./src/app/game-saved/game-saved.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], GameSavedComponent);
    return GameSavedComponent;
}());



/***/ }),

/***/ "./src/app/game/game.component.css":
/*!*****************************************!*\
  !*** ./src/app/game/game.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.group {\n  margin: 15px auto;\n  padding: 5px;\n  border: 1px solid #5353c6;\n  border-radius: 2%;\n  background-color: rgb(238, 234, 195);\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.controls {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  margin: 5px 0;\n}\n\n.inputs {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  margin: 3px;\n}\n\n.inputs input {\n  width: 100px;\n}\n\np {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.button {\n  color: #5353c6;\n  border-radius: 5px;\n  background-color: rgb(176, 207, 207);\n  border: 1px solid gray;\n  margin: 1px;\n}\n\n.button:hover {\n  background-color: #a2adad;\n}\n\n.center {\n  margin: 2px auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQywwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5ncm91cCB7XG4gIG1hcmdpbjogMTVweCBhdXRvO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1MzUzYzY7XG4gIGJvcmRlci1yYWRpdXM6IDIlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAyMzQsIDE5NSk7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLmNvbnRyb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIG1hcmdpbjogNXB4IDA7XG59XG5cbi5pbnB1dHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgbWFyZ2luOiAzcHg7XG59XG4uaW5wdXRzIGlucHV0IHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG5wIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uYnV0dG9uIHtcbiAgY29sb3I6ICM1MzUzYzY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NiwgMjA3LCAyMDcpO1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBtYXJnaW46IDFweDtcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhMmFkYWQ7XG59XG5cbi5jZW50ZXIge1xuICBtYXJnaW46IDJweCBhdXRvO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/game/game.component.html":
/*!******************************************!*\
  !*** ./src/app/game/game.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n  <p>Set the parameters of the universe: </p>\n  <div class='inputs'>\n    <p>Rows: <input type=\"number\" [(ngModel)]=\"rows\" /></p>\n    <p>Columns: <input type=\"number\" [(ngModel)]=\"columns\" /></p>\n  </div>\n  <div class='inputs'>\n    <p>Interval: <input type=\"number\" [(ngModel)]=\"timeInterval\"/></p>\n    <p>Create a blank universe: <input type=\"checkbox\" [(ngModel)]=\"blank\"/></p>\n  </div>\n  <p>Click on cells to toggle their state. </p>\n</div>\n<div class=\"controls\">\n  <p><input class=\"button\" type=\"button\" (click)=\"resume()\" value=\"Start\" /></p>\n  <p> <input class=\"button\" type=\"button\" (click)=\"pause()\" value=\"Stop\"/> </p>\n  <p><input class=\"button\" type=\"button\" (click)=\"reset()\" value=\"Reset\" /></p>\n  <p> Evolutions: {{ iterations }}</p>\n</div>\n\n<div class=\"group\">\n  <app-board \n    [blank]=\"blank\" \n    [start]=\"start\" \n    [reset]=\"resetworld\" \n    [rows]=\"rows\" \n    [columns]=\"columns\" \n    [interval]=\"timeInterval\"\n    (generation)=\"currentIteration( $event )\"\n    (world)=\"startingWorld( $event )\"\n  > </app-board>\n</div>\n\n<div class=\"center\">\n  <p *ngIf=\"!saved\"><input class=\"button\" type=\"button\" (click)=\"save()\" value=\"Save\" /></p>\n  <p *ngIf=\"saved\">{{ url }}</p>\n  <p *ngIf=\"!!error\" (click)=\"clearError()\">{{ error }}</p>\n</div>\n"

/***/ }),

/***/ "./src/app/game/game.component.ts":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var GameComponent = /** @class */ (function () {
    function GameComponent(route, http) {
        var _this = this;
        this.route = route;
        this.http = http;
        this.rows = 20;
        this.columns = 20;
        this.timeInterval = 300;
        this.blank = false;
        this.start = false;
        this.resetworld = false;
        this.iterations = 0;
        this.saved = false;
        this.url = '';
        this.error = '';
        this.pause = function () {
            _this.start = false;
        };
        this.resume = function () {
            _this.start = true;
        };
        this.reset = function () {
            _this.resetworld = true;
            _this.start = false;
            setTimeout(function () { return _this.resetworld = false; }, 50);
        };
        this.currentIteration = function (e) {
            _this.iterations = e;
        };
        this.startingWorld = function (e) {
            _this.world = e;
        };
        this.save = function () {
            var data = { world: JSON.stringify(_this.world) };
            _this.http.post('/api/game', data)
                .toPromise()
                .then(function (r) {
                if (r.error) {
                    console.log('Error:', r.error);
                    _this.error = r.error;
                }
                else {
                    _this.saved = true;
                    _this.url = "Game Saved To: " + window.location.href + "/" + r.gameId;
                }
            })
                .catch(function (error) {
                console.log('Error:', error);
                _this.error = error;
            });
        };
        this.getGame = function (id) {
            console.log('getGame');
            _this.http.get("/api/game/" + id)
                .toPromise()
                .then(function (r) {
                if (r.error) {
                    console.log('Error:', r.error);
                }
                else {
                }
            })
                .catch(console.log);
        };
        this.clearError = function () {
            _this.error = '';
        };
    }
    GameComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('id');
    };
    GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! ./game.component.html */ "./src/app/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.css */ "./src/app/game/game.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <p>\n    \"The Game of Life ... is a cellular automaton devised by the British mathematician John Horton Conway in 1970.\nThe 'game' is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves, or, for advanced 'players', by creating patterns with particular properties.\" -- Excerpt from <a href='https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life' target=\"_blank\">Wikipedia</a>\n  </p>\n\n  <p>\n    The Conway Universe is composed of a two-dimensional grid of square cells each of which is either alive or dead. During each cylce cells interact with its eight neighbours determining its state in the next step of its evolution.  The rules governing its outcome are:\n  </p>\n\n  <li>Any live cell with fewer than two live neighbours dies.</li>\n  <li>Any live cell with two or three live neighbours lives.</li>\n  <li>Any live cell with more than three live neighbours dies.</li>\n  <li>Any dead cell with exactly three live neighbours becomes a live cell.</li>\n\n  <p>\n    The rules continue to be applied repeatedly to create further generations.  \n  </p>\n\n  <p>\n    This application is a platform for creating your own initial condition in the Conway Universe and observing its evolution.\n  </p>\n\n  <p> <a routerLink=\"/game\" > Create a universe and play.</a></p>\n\n  <p> <a routerLink=\"/explore\" >Explore some preset universes here.</a></p>\n  \n\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.queryParamMap.get('game');
        console.log('this.id', this.id, this.route.snapshot.url);
        if (this.id) {
            console.log('shoul redirect');
            this.router.navigateByUrl("/game/" + this.id);
        }
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hiteshlala/Programming/conway-game/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map