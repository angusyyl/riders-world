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



var routes = [];
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

module.exports = "/* Always set the map height explicitly to define the size of the div\r\n * element that contains the map. */\r\n.google-map {\r\n  height: 400px;\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7bUNBQ21DO0FBQ25DO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQWx3YXlzIHNldCB0aGUgbWFwIGhlaWdodCBleHBsaWNpdGx5IHRvIGRlZmluZSB0aGUgc2l6ZSBvZiB0aGUgZGl2XHJcbiAqIGVsZW1lbnQgdGhhdCBjb250YWlucyB0aGUgbWFwLiAqL1xyXG4uZ29vZ2xlLW1hcCB7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #map class=\"google-map\"></div>\r\n<!-- <div><button mat-raised-button color=\"warn\">Details</button></div> -->\r\n<!-- <app-chk-pt-info-window #chkPtInfoWindow></app-chk-pt-info-window> -->\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _chk_pt_info_window_chk_pt_info_window_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chk-pt-info-window/chk-pt-info-window.component */ "./src/app/chk-pt-info-window/chk-pt-info-window.component.ts");



var AppComponent = /** @class */ (function () {
    // ngOnChanges()	{
    //   console.log('parent ngOnChanges()');
    // }
    function AppComponent(injector, resolver, appRef, zone) {
        this.injector = injector;
        this.resolver = resolver;
        this.appRef = appRef;
        this.zone = zone;
        // load check points
        this.checkPoints = [
            { id: 1, lat: 23.292724, lng: 113.837872, name: '增城二汽客運站', arrivalTimestamp: '2019-06-29 13:20', leaveTimestamp: '2019-06-29 13:20', locale: 'zh_cn', routeType: 'bike', arrivalTransport: "By bike" /* Bike */, leaveTransport: "By bike" /* Bike */ },
            { id: 2, lat: 23.301143, lng: 113.841652, name: '西堤驛站', arrivalTimestamp: '2019-06-29 14:00', leaveTimestamp: '2019-06-29 14:15', locale: 'zh_cn', routeType: 'bike', arrivalTransport: "By bike" /* Bike */, leaveTransport: "By bike" /* Bike */ },
            // {lat: 23.272830, lng: 113.823985, name: '增江畫廊', arrivalTimestamp: '2019-06-29 14:40', leaveTimestamp: '2019-06-29 15:00', locale: 'zh_cn', routeType: 'bike', arrivalTransport: TransportEnum.Bike, leaveTransport: TransportEnum.Bike},
            { id: 3, lat: 23.580521, lng: 113.763743, name: '白水寨風景區', arrivalTimestamp: '2019-06-29 19:00', leaveTimestamp: '2019-06-29 15:00', locale: 'zh_cn', routeType: 'bike', arrivalTransport: "By bike" /* Bike */, leaveTransport: "By bike" /* Bike */ }
        ];
        this.chkPtImage = {
            url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            // url: 'assets/images/bicycle-rider.svg',
            // This marker is 20 pixels wide by 32 pixels high.
            size: new google.maps.Size(20, 32)
        };
        // hold check point markers
        this.checkPointMarkers = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var mapProperties = {
            center: new google.maps.LatLng(this.checkPoints[0].lat, this.checkPoints[0].lng),
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
        this.chkPtInfoWindow = new google.maps.InfoWindow();
        this.addCheckPointMarkesWithTimeout(800);
    };
    // ngDoCheck() {
    //   console.log('parent ngDoCheck()');
    // }
    // ngAfterContentInit() {
    //   console.log('parent ngAfterContentInit()');
    // }
    // ngAfterContentChecked() {
    //   console.log('parent ngAfterContentChecked()');
    // }
    // ngAfterViewInit() {
    //   console.log('parent ngAfterViewInit()');
    // }
    // ngAfterViewChecked(){
    //   console.log('parent ngAfterViewChecked()');
    // }
    AppComponent.prototype.markerBounceStart = function (marker) {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    };
    AppComponent.prototype.markerBounceStop = function (marker) {
        marker.setAnimation(null);
    };
    /**
     * create check point markers and display them consecutively
     * @param timeout time in milliseconds between each marker displays
     */
    AppComponent.prototype.addCheckPointMarkesWithTimeout = function (timeout) {
        var _this = this;
        var _loop_1 = function (i) {
            var chkPt = this_1.checkPoints[i];
            window.setTimeout(function () {
                // create new marker for each check point
                var marker = new google.maps.Marker({
                    position: { lat: chkPt.lat, lng: chkPt.lng },
                    map: _this.map,
                    title: chkPt.name,
                    animation: google.maps.Animation.DROP,
                    draggable: true,
                    icon: _this.chkPtImage
                });
                // add click event listener to marker
                marker.addListener('click', function () {
                    _this.zone.run(function () { return _this.onCheckPointMarkerClick(marker, chkPt); });
                    _this.markerBounceStart(marker);
                });
                // add position changed event listener to marker
                marker.addListener('position_changed', function () {
                    _this.zone.run(function () { return _this.onCheckPointMarkerDragend(marker, chkPt); });
                });
                // add close click event listener to info window
                _this.chkPtInfoWindow.addListener('closeclick', function (_) {
                    _this.markerBounceStop(marker);
                    _this.chkPtInfoWinCompRef.destroy();
                });
                _this.checkPointMarkers.push(marker);
            }, i * timeout);
        };
        var this_1 = this;
        for (var i = 0; i < this.checkPoints.length; i++) {
            _loop_1(i);
        }
    };
    /**
     * event listener for click event
     * @param marker an anchor of Marker class where the info window positions at
     * @param chkPt a check point to be passed in to display its information on info window
     */
    AppComponent.prototype.onCheckPointMarkerClick = function (marker, chkPt) {
        var _this = this;
        if (this.chkPtInfoWinCompRef) {
            this.chkPtInfoWinCompRef.destroy();
        }
        // dynamic creation of info window component, ChkPtInfoWindowComponent should be declared in entryComponents
        var compFactory = this.resolver.resolveComponentFactory(_chk_pt_info_window_chk_pt_info_window_component__WEBPACK_IMPORTED_MODULE_2__["ChkPtInfoWindowComponent"]);
        this.chkPtInfoWinCompRef = compFactory.create(this.injector);
        this.chkPtInfoWinCompRef.instance.id = chkPt.id;
        this.chkPtInfoWinCompRef.instance.name = chkPt.name;
        this.chkPtInfoWinCompRef.instance.arrivalTimestamp = chkPt.arrivalTimestamp;
        this.chkPtInfoWinCompRef.instance.leaveTimestamp = chkPt.leaveTimestamp;
        // parent-child communication
        var subscription = this.chkPtInfoWinCompRef.instance.onValueChanged.subscribe(function (uChkPt) {
            _this.checkPoints.filter(function (currChkPt) { return currChkPt.id === uChkPt.id; }).map(function (filteredChkPt) {
                filteredChkPt.name = uChkPt.name;
                filteredChkPt.arrivalTimestamp = uChkPt.arrivalTimestamp;
                filteredChkPt.leaveTimestamp = uChkPt.leaveTimestamp;
            });
        });
        // set info window content to the dynamically created component
        var div = document.createElement('div');
        div.appendChild(this.chkPtInfoWinCompRef.location.nativeElement);
        this.chkPtInfoWindow.setContent(div);
        this.chkPtInfoWindow.open(this.map, marker);
        this.appRef.attachView(this.chkPtInfoWinCompRef.hostView);
        this.chkPtInfoWinCompRef.onDestroy(function () {
            _this.appRef.detachView(_this.chkPtInfoWinCompRef.hostView);
            subscription.unsubscribe();
        });
    };
    /**
     * event listener for marker's dragend event
     * @param marker an anchor of Marker class where the info window positions at
     * @param chkPt a check point to be passed in to display its information on info window
     */
    AppComponent.prototype.onCheckPointMarkerDragend = function (marker, chkPt) {
        chkPt.lat = marker.getPosition().lat();
        chkPt.lng = marker.getPosition().lng();
        // console.log(chkPt);
    };
    AppComponent.prototype.showCheckPointDetail = function () {
        alert('click');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppComponent.prototype, "mapElement", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _chk_pt_info_window_chk_pt_info_window_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chk-pt-info-window/chk-pt-info-window.component */ "./src/app/chk-pt-info-window/chk-pt-info-window.component.ts");
/* harmony import */ var _material_module_material_module_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material-module/material-module.module */ "./src/app/material-module/material-module.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_module_ant_design_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material-module/ant-design.module */ "./src/app/material-module/ant-design.module.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _chk_pt_info_window_chk_pt_info_window_component__WEBPACK_IMPORTED_MODULE_5__["ChkPtInfoWindowComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _material_module_material_module_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _material_module_ant_design_module__WEBPACK_IMPORTED_MODULE_9__["AntDesignModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]
            ],
            entryComponents: [_chk_pt_info_window_chk_pt_info_window_component__WEBPACK_IMPORTED_MODULE_5__["ChkPtInfoWindowComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chk-pt-info-window/chk-pt-info-window.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/chk-pt-info-window/chk-pt-info-window.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chk-pt-info-win-header {\r\n  width: 120px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hrLXB0LWluZm8td2luZG93L2Noay1wdC1pbmZvLXdpbmRvdy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY2hrLXB0LWluZm8td2luZG93L2Noay1wdC1pbmZvLXdpbmRvdy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoay1wdC1pbmZvLXdpbi1oZWFkZXIge1xyXG4gIHdpZHRoOiAxMjBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/chk-pt-info-window/chk-pt-info-window.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/chk-pt-info-window/chk-pt-info-window.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-input-group [nzSuffix]=\"suffixTemplate\">\r\n  <input matInput type=\"text\" [value]=\"name\" (keyup)=\"updateName($event)\"/>\r\n</nz-input-group>\r\n<ng-template #suffixTemplate\r\n  ><i\r\n    nz-icon\r\n    nz-tooltip\r\n    class=\"ant-input-clear-icon\"\r\n    nzTheme=\"fill\"\r\n    nzType=\"close-circle\"\r\n    *ngIf=\"name\"\r\n    (click)=\"name = null\"\r\n  ></i\r\n></ng-template>\r\n<div>Arrival Time:\r\n    <mat-form-field class=\"chk-pt-info-win-header\">\r\n        <input matInput type=\"text\" [value]=\"arrivalTimestamp\" (keyup)=\"updateArrivalTimestamp($event)\" />\r\n        <button mat-button *ngIf=\"arrivalTimestamp\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"arrivalTimestamp=''\">\r\n          <mat-icon>close</mat-icon>\r\n        </button>\r\n    </mat-form-field>\r\n</div>\r\n<div>Leave Time:\r\n    <mat-form-field class=\"chk-pt-info-win-header\">\r\n        <input matInput type=\"text\" [value]=\"leaveTimestamp\" (keyup)=\"updateLeaveTimestamp($event)\" />\r\n        <button mat-button *ngIf=\"leaveTimestamp\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"leaveTimestamp=''\">\r\n          <mat-icon>close</mat-icon>\r\n        </button>\r\n    </mat-form-field>\r\n</div>\r\n<div><button class=\"mat-raised-button mat-warn\" color=\"warn\" (click)=\"showCheckPointDetail()\">Details</button></div>\r\n<!-- <div><button (click)=\"showCheckPointDetail()\">Details</button></div> -->\r\n"

/***/ }),

/***/ "./src/app/chk-pt-info-window/chk-pt-info-window.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/chk-pt-info-window/chk-pt-info-window.component.ts ***!
  \********************************************************************/
/*! exports provided: ChkPtInfoWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChkPtInfoWindowComponent", function() { return ChkPtInfoWindowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChkPtInfoWindowComponent = /** @class */ (function () {
    function ChkPtInfoWindowComponent() {
        this.onValueChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(ChkPtInfoWindowComponent.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChkPtInfoWindowComponent.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChkPtInfoWindowComponent.prototype, "arrivalTimestamp", {
        get: function () {
            return this._arrivalTimestamp;
        },
        set: function (arrivalTimestamp) {
            this._arrivalTimestamp = arrivalTimestamp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChkPtInfoWindowComponent.prototype, "leaveTimestamp", {
        get: function () {
            return this._leaveTimestamp;
        },
        set: function (leaveTimestamp) {
            this._leaveTimestamp = leaveTimestamp;
        },
        enumerable: true,
        configurable: true
    });
    ChkPtInfoWindowComponent.prototype.updateName = function (e) {
        this._name = e.target.value;
        this.updateChkPtInfo();
    };
    ChkPtInfoWindowComponent.prototype.updateArrivalTimestamp = function (e) {
        this._arrivalTimestamp = e.target.value;
        this.updateChkPtInfo();
    };
    ChkPtInfoWindowComponent.prototype.updateLeaveTimestamp = function (e) {
        this._leaveTimestamp = e.target.value;
        this.updateChkPtInfo();
    };
    // ngOnChanges()	{
    //   console.log('child ngOnChanges()');
    // }
    // ngOnInit(): void {
    //   console.log('child ngOnInit()');
    // }
    // ngDoCheck() {
    //   console.log('child ngDoCheck()');
    // }
    // ngAfterContentInit() {
    //   console.log('child ngAfterContentInit()');
    // }
    // ngAfterContentChecked() {
    //   console.log('child ngAfterContentChecked()');
    // }
    // ngAfterViewInit() {
    //   console.log('child ngAfterViewInit()');
    // }
    // ngAfterViewChecked(){
    //   console.log('child ngAfterViewChecked()');
    // }
    ChkPtInfoWindowComponent.prototype.showCheckPointDetail = function () {
        console.log('showCheckPointDetail being clicked');
    };
    ChkPtInfoWindowComponent.prototype.updateChkPtInfo = function () {
        this.onValueChanged.emit({ 'id': this._id, 'name': this._name, 'arrivalTimestamp': this._arrivalTimestamp, 'leaveTimestamp': this._leaveTimestamp });
    };
    ChkPtInfoWindowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chk-pt-info-window',
            template: __webpack_require__(/*! ./chk-pt-info-window.component.html */ "./src/app/chk-pt-info-window/chk-pt-info-window.component.html"),
            styles: [__webpack_require__(/*! ./chk-pt-info-window.component.css */ "./src/app/chk-pt-info-window/chk-pt-info-window.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChkPtInfoWindowComponent);
    return ChkPtInfoWindowComponent;
}());



/***/ }),

/***/ "./src/app/material-module/ant-design.module.ts":
/*!******************************************************!*\
  !*** ./src/app/material-module/ant-design.module.ts ***!
  \******************************************************/
/*! exports provided: AntDesignModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntDesignModule", function() { return AntDesignModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/input */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd-input.js");




var AntDesignModule = /** @class */ (function () {
    function AntDesignModule() {
    }
    AntDesignModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_3__["NzInputModule"]
            ],
            exports: [
                ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_3__["NzInputModule"]
            ]
        })
    ], AntDesignModule);
    return AntDesignModule;
}());



/***/ }),

/***/ "./src/app/material-module/material-module.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/material-module/material-module.module.ts ***!
  \***********************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");







var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]
            ],
            exports: [
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
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

module.exports = __webpack_require__(/*! D:\Angus\AngularWorkplace\riders-world\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map