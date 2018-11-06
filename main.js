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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{max-width:1170px; margin:auto;}\r\nimg{ max-width:100%;}\r\n.inbox_people {\r\n  background: #f8f8f8 none repeat scroll 0 0;\r\n  float: left;\r\n  overflow: hidden;\r\n  width: 40%; border-right:1px solid #c4c4c4;\r\n}\r\n.inbox_msg {\r\n  border: 1px solid #c4c4c4;\r\n  clear: both;\r\n  overflow: hidden;\r\n}\r\n.top_spac{ margin: 20px 0 0;}\r\nheadind_srch{ padding:10px 29px 10px 20px; overflow:hidden; border-bottom:1px solid #c4c4c4;}\r\n.recent_heading h4 {\r\n  color: #05728f;\r\n  font-size: 21px;\r\n  margin: auto;\r\n}\r\n.srch_bar input{ border:1px solid #cdcdcd; border-width:0 0 1px 0; width:80%; padding:2px 0 4px 6px; background:none;}\r\n.srch_bar .input-group-addon button {\r\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\n  border: medium none;\r\n  padding: 0;\r\n  color: #707070;\r\n  font-size: 18px;\r\n}\r\n.srch_bar .input-group-addon { margin: 0 0 0 -27px;}\r\n.chat_ib h5{ font-size:15px; color:#464646; margin:0 0 8px 0;}\r\n.chat_ib h5 span{ font-size:13px; float:right;}\r\n.chat_ib p{ font-size:14px; color:#989898; margin:auto}\r\n.chat_img {\r\n  float: left;\r\n  width: 11%;\r\n}\r\n.chat_ib {\r\n  float: left;\r\n  padding: 0 0 0 15px;\r\n  width: 88%;\r\n}\r\n.chat_people{ overflow:hidden; clear:both;}\r\n.chat_list {\r\n  border-bottom: 1px solid #c4c4c4;\r\n  margin: 0;\r\n  padding: 18px 16px 10px;\r\n}\r\n.inbox_chat { height: 550px; overflow-y: scroll;}\r\n.active_chat{ background:#ebebeb;}\r\n.incoming_msg_img {\r\n  display: inline-block;\r\n  width: 6%;\r\n}\r\n.received_msg {\r\n  display: inline-block;\r\n  padding: 0 0 0 10px;\r\n  vertical-align: top;\r\n  width: 92%;\r\n }\r\n.received_withd_msg p {\r\n  background: #ebebeb none repeat scroll 0 0;\r\n  border-radius: 3px;\r\n  color: #646464;\r\n  font-size: 14px;\r\n  margin: 0;\r\n  padding: 5px 10px 5px 12px;\r\n  width: 100%;\r\n}\r\n.time_date {\r\n  color: #747474;\r\n  display: block;\r\n  font-size: 12px;\r\n  margin: 8px 0 0;\r\n}\r\n.received_withd_msg { width: 57%;}\r\n.mesgs {\r\n  float: left;\r\n  padding: 30px 15px 0 25px;\r\n  width: 60%;\r\n}\r\n.sent_msg p {\r\n  background: #05728f none repeat scroll 0 0;\r\n  border-radius: 3px;\r\n  font-size: 14px;\r\n  margin: 0; color:#fff;\r\n  padding: 5px 10px 5px 12px;\r\n  width:100%;\r\n}\r\n.outgoing_msg{ overflow:hidden; margin:26px 0 26px;}\r\n.sent_msg {\r\n  float: right;\r\n  width: 46%;\r\n}\r\n.input_msg_write input {\r\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\n  border: medium none;\r\n  color: #4c4c4c;\r\n  font-size: 15px;\r\n  min-height: 48px;\r\n  width: 100%;\r\n}\r\n.type_msg {border-top: 1px solid #c4c4c4;position: relative;}\r\n.msg_send_btn {\r\n  background: #05728f none repeat scroll 0 0;\r\n  border: medium none;\r\n  border-radius: 50%;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  font-size: 17px;\r\n  height: 33px;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 11px;\r\n  width: 33px;\r\n}\r\n.messaging { padding: 0 0 50px 0;}\r\n.msg_history {\r\n  height: 516px;\r\n  overflow-y: auto;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <h2>Realtime Chat Application</h2>\n        <hr>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-5\">\n            <div class=\"form-group\">\n                <label for=\"username\">Username</label>\n                <input type=\"text\" [(ngModel)]=\"user\" class=\"form-control\" id=\"username\" placeholder=\"Enter username\">\n                <!-- <small id=\"userHelp\" class=\"form-text text-muted\">Type your username.</small> -->\n            </div>\n        </div>\n        <div class=\"col-sm-5\">\n            <label for=\"roomInput\">Choose room</label>\n            <select name=\"roomInput\" id=\"roomInput\" class=\"form-control\" [(ngModel)]=\"room\">\n                <option value=\"Lobby\">Lobby</option>\n                <option value=\"Hall\">Hall</option>\n                <option value=\"Deluxe\">Deluxe</option>\n            </select>\n        </div>\n        <div class=\"col sm-2\">\n            <div style=\"margin-top:19px;\" class=\"pull-right\"> \n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"join()\">Join</button>\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"leave()\">Leave</button>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"well\" style=\"height:200px; padding:15px;\">\n            <div *ngFor=\"let item of messageArray\">\n            <span><strong>{{item.user}} : </strong> {{item.message}}</span>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"messageText\">            \n        </div>\n        <div class=\"col-sm-2\">\n                <button type=\"button\" class=\"btn btn-success pull-right\" (click)=\"sendMessage()\">Send</button>\n        </div>\n    </div>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chat_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-service.service */ "./src/app/chat-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_chatService) {
        var _this = this;
        this._chatService = _chatService;
        this.messageArray = [];
        this._chatService.newUserJoined()
            .subscribe(function (data) { return _this.messageArray.push(data); });
        this._chatService.userLeftRoom()
            .subscribe(function (data) { return _this.messageArray.push(data); });
        this._chatService.newMessageReceived()
            .subscribe(function (data) { return _this.messageArray.push(data); });
    }
    AppComponent.prototype.join = function () {
        this._chatService.joinRoom({ user: this.user, room: this.room });
    };
    AppComponent.prototype.leave = function () {
        this._chatService.leaveRoom({ user: this.user, room: this.room });
    };
    AppComponent.prototype.sendMessage = function () {
        this._chatService.sendMessage({ user: this.user, room: this.room, message: this.messageText });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_chat_service_service__WEBPACK_IMPORTED_MODULE_1__["ChatServiceService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_chat_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/chat-service.service */ "./src/app/chat-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"]
            ],
            providers: [_app_chat_service_service__WEBPACK_IMPORTED_MODULE_3__["ChatServiceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/chat-service.service.ts ***!
  \*****************************************/
/*! exports provided: ChatServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatServiceService", function() { return ChatServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatServiceService = /** @class */ (function () {
    function ChatServiceService() {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__('https://harishasp.github.io/SocketIoChat/');
    }
    ChatServiceService.prototype.ngOnInit = function () {
    };
    ChatServiceService.prototype.joinRoom = function (data) {
        this.socket.emit('join', data);
    };
    ChatServiceService.prototype.newUserJoined = function () {
        var _this = this;
        var observable = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.socket.on('new user joined', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    ChatServiceService.prototype.leaveRoom = function (data) {
        this.socket.emit('leave', data);
    };
    ChatServiceService.prototype.userLeftRoom = function () {
        var _this = this;
        var observable = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.socket.on('left room', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    ChatServiceService.prototype.sendMessage = function (data) {
        this.socket.emit('message', data);
    };
    ChatServiceService.prototype.newMessageReceived = function () {
        var _this = this;
        var observable = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.socket.on('new message', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    ChatServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], ChatServiceService);
    return ChatServiceService;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/*!*****************************************!*\
  !*** ./src/app/chat/chat.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let message of messages\">\n  {{message}}\n</div>\n<input [(ngModel)]=\"message\" (keyup)=\"$event.keyCode == 13 && sendMessage()\" />\n<button (click)=\"sendMessage()\">Send</button>\n<!-- <div class=\"container\">\n  <h3 class=\" text-center\">Messaging</h3>\n  <div class=\"messaging\">\n        <div class=\"inbox_msg\">\n         \n          <div class=\"mesgs\">\n            <div class=\"msg_history\">\n              <div class=\"incoming_msg\">\n                <div class=\"incoming_msg_img\"> <img src=\"https://ptetutorials.com/images/user-profile.png\" alt=\"sunil\"> </div>\n                <div class=\"received_msg\">\n                  <div class=\"received_withd_msg\">\n                    <p>Test which is a new approach to have all\n                      solutions</p>\n                    <span class=\"time_date\"> 11:01 AM    |    June 9</span></div>\n                </div>\n              </div>\n              <div class=\"outgoing_msg\">\n                <div class=\"sent_msg\">\n                  <p>Test which is a new approach to have all\n                    solutions</p>\n                  <span class=\"time_date\"> 11:01 AM    |    June 9</span> </div>\n              </div>\n              <div class=\"incoming_msg\">\n                <div class=\"incoming_msg_img\"> <img src=\"https://ptetutorials.com/images/user-profile.png\" alt=\"sunil\"> </div>\n                <div class=\"received_msg\">\n                  <div class=\"received_withd_msg\">\n                    <p>Test, which is a new approach to have</p>\n                    <span class=\"time_date\"> 11:01 AM    |    Yesterday</span></div>\n                </div>\n              </div>\n              <div class=\"outgoing_msg\">\n                <div class=\"sent_msg\">\n                  <p>Apollo University, Delhi, India Test</p>\n                  <span class=\"time_date\"> 11:01 AM    |    Today</span> </div>\n              </div>\n              <div class=\"incoming_msg\">\n                <div class=\"incoming_msg_img\"> <img src=\"https://ptetutorials.com/images/user-profile.png\" alt=\"sunil\"> </div>\n                <div class=\"received_msg\">\n                  <div class=\"received_withd_msg\">\n                    <p>We work directly with our designers and suppliers,\n                      and sell direct to you, which means quality, exclusive\n                      products, at a price anyone can afford.</p>\n                    <span class=\"time_date\"> 11:01 AM    |    Today</span></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"type_msg\">\n              <div class=\"input_msg_write\">\n                <input type=\"text\" class=\"write_msg\" placeholder=\"Type a message\" />\n                <button class=\"msg_send_btn\" type=\"button\"><i class=\"fa fa-paper-plane-o\" aria-hidden=\"true\"></i></button>\n              </div>\n            </div>\n          </div>\n        </div>\n        \n        \n        <p class=\"text-center top_spac\"> Design by <a target=\"_blank\" href=\"#\">Sunil Rajput</a></p>\n        \n      </div></div> -->"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
        this.messages = [];
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__();
    }
    ChatComponent.prototype.sendMessage = function () {
        this.socket.emit('new-message', this.message);
        this.message = '';
    };
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket.on('new-message', function (message) {
            _this.messages.push(message);
            console.log(message);
        });
    };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular6Proj\socketioChat\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map