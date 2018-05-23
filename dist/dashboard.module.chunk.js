webpackJsonp(["dashboard.module"],{

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12 col-xl-4\">\r\n    <!-- table card start -->\r\n    <div class=\"card table-card\">\r\n      <div class=\"\">\r\n        <div class=\"row-table\">\r\n          <div class=\"col-sm-6 card-block-big br\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-4\">\r\n                <i class=\"icofont icofont-eye-alt text-success\"></i>\r\n              </div>\r\n              <div class=\"col-sm-8 text-center\">\r\n                <h5>10k</h5>\r\n                <span>Visitors</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-6 card-block-big\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-4\">\r\n                <i class=\"icofont icofont-ui-music text-danger\"></i>\r\n              </div>\r\n              <div class=\"col-sm-8 text-center\">\r\n                <h5>100%</h5>\r\n                <span>Volume</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"\">\r\n        <div class=\"row-table\">\r\n          <div class=\"col-sm-6 card-block-big br\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-4\">\r\n                <i class=\"icofont icofont-files text-info\"></i>\r\n              </div>\r\n              <div class=\"col-sm-8 text-center\">\r\n                <h5>2000 +</h5>\r\n                <span>Files</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-6 card-block-big\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-4\">\r\n                <i class=\"icofont icofont-envelope-open text-warning\"></i>\r\n              </div>\r\n              <div class=\"col-sm-8 text-center\">\r\n                <h5>120</h5>\r\n                <span>Mails</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- table card end -->\r\n  </div>\r\n  <div class=\"col-md-12 col-xl-4\">\r\n    <div class=\"card table-card\">\r\n      <div class=\"row-table\">\r\n        <div class=\"col-sm-6 card-block-big br\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n              <div style=\"height:40px;width:40px;\">\r\n                <span class=\"resource-barchart1\"></span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-8 text-center\">\r\n              <h5>1000</h5>\r\n              <span>Shares</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-6 card-block-big\">\r\n          <div class=\"row \">\r\n            <div class=\"col-sm-4\">\r\n              <i class=\"icofont icofont-network text-primary\"></i>\r\n            </div>\r\n            <div class=\"col-sm-8 text-center\">\r\n              <h5>600</h5>\r\n              <span>Network</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row-table\">\r\n        <div class=\"col-sm-6 card-block-big br\">\r\n          <div class=\"row \">\r\n            <div class=\"col-sm-4\">\r\n              <div style=\"height:40px;width:40px;\">\r\n                <span class=\"resource-barchart2\"></span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-8 text-center\">\r\n              <h5>350</h5>\r\n              <span>Returns</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-6 card-block-big\">\r\n          <div class=\"row \">\r\n            <div class=\"col-sm-4\">\r\n              <i class=\"icofont icofont-network-tower text-primary\"></i>\r\n            </div>\r\n            <div class=\"col-sm-8 text-center\">\r\n              <h5>100%</h5>\r\n              <span>Connections</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-12 col-xl-4\">\r\n    <!-- widget primary card start -->\r\n    <div class=\"card table-card widget-primary-card\">\r\n      <div class=\"\">\r\n        <div class=\"row-table\">\r\n          <div class=\"col-sm-3 card-block-big\">\r\n            <i class=\"icofont icofont-star\"></i>\r\n          </div>\r\n          <div class=\"col-sm-9\">\r\n            <h4>4000 +</h4>\r\n            <h6>Ratings Received</h6>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- widget primary card end -->\r\n    <!-- widget-success-card start -->\r\n    <div class=\"card table-card widget-success-card\">\r\n      <div class=\"\">\r\n        <div class=\"row-table\">\r\n          <div class=\"col-sm-3 card-block-big\">\r\n            <i class=\"icofont icofont-trophy-alt\"></i>\r\n          </div>\r\n          <div class=\"col-sm-9\">\r\n            <h4>17</h4>\r\n            <h6>Achievements</h6>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- widget-success-card end -->\r\n  </div>\r\n\r\n  <div class=\"col-lg-4\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"card card-border-primary\">\r\n          <div class=\"card-header\">\r\n            <h5>John Doe </h5>\r\n            <!-- <span class=\"label label-default f-right\"> 28 January, 2015 </span> -->\r\n            <div ngbDropdown class=\"dropdown-secondary dropdown f-right\">\r\n              <button ngbDropdownToggle class=\"btn btn-primary btn-mini dropdown-toggle waves-effect waves-light\" type=\"button\" id=\"dropdown6\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Overdue</button>\r\n              <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown6\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"><span class=\"point-marker bg-danger\"></span>Pending</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"><span class=\"point-marker bg-warning\"></span>Paid</a>\r\n                <div class=\"dropdown-divider\"></div>\r\n                <a class=\"dropdown-item waves-light waves-effect active\" href=\"javascript:\"><span class=\"point-marker bg-success\"></span>On Hold</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"><span class=\"point-marker bg-info\"></span>Canceled</a>\r\n              </div>\r\n              <!-- end of dropdown menu -->\r\n              <span class=\"f-left m-r-5 text-inverse\">Status : </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-block\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <ul class=\"list list-unstyled\">\r\n                  <li>Invoice #: &nbsp;0028</li>\r\n                  <li>Issued on: <span class=\"text-semibold\">2015/01/25</span></li>\r\n                </ul>\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <ul class=\"list list-unstyled text-right\">\r\n                  <li>$8,750</li>\r\n                  <li>Method: <span class=\"text-semibold\">Paypal</span></li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <div class=\"task-list-table\">\r\n              <p class=\"task-due\"><strong> Due : </strong><strong class=\"label label-success\">23 hours</strong></p>\r\n            </div>\r\n            <div class=\"task-board m-0\">\r\n              <a href=\"javascript:\" class=\"btn btn-info btn-mini b-none\"><i class=\"icofont icofont-eye-alt m-0\"></i></a>\r\n              <!-- end of dropdown-secondary -->\r\n              <div ngbDropdown class=\"dropdown-secondary dropdown\">\r\n                <button ngbDropdownToggle class=\"btn btn-info btn-mini dropdown-toggle waves-light b-none txt-muted\" type=\"button\" id=\"dropdown3\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"icofont icofont-navigation-menu\"></i></button>\r\n                <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown3\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"><i class=\"icofont icofont-ui-alarm\"></i> Print Invoice</a>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"><i class=\"icofont icofont-attachment\"></i> Download invoice</a>\r\n                  <div class=\"dropdown-divider\"></div>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"><i class=\"icofont icofont-spinner-alt-5\"></i> Edit Invoice</a>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"><i class=\"icofont icofont-ui-edit\"></i> Remove Invoice</a>\r\n                </div>\r\n                <!-- end of dropdown menu -->\r\n              </div>\r\n              <!-- end of seconadary -->\r\n            </div>\r\n            <!-- end of pull-right class -->\r\n          </div>\r\n          <!-- end of card-footer -->\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"card card-border-primary\">\r\n          <div class=\"card-header\">\r\n            <h5>John Doe </h5>\r\n            <!-- <span class=\"label label-default f-right\"> 28 January, 2015 </span> -->\r\n            <div ngbDropdown class=\"dropdown-secondary dropdown f-right\">\r\n              <button ngbDropdownToggle class=\"btn btn-primary btn-mini dropdown-toggle waves-effect waves-light\" type=\"button\" id=\"dropdown7\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Overdue</button>\r\n              <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown6\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"><span class=\"point-marker bg-danger\"></span>Pending</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"><span class=\"point-marker bg-warning\"></span>Paid</a>\r\n                <div class=\"dropdown-divider\"></div>\r\n                <a class=\"dropdown-item waves-light waves-effect active\" href=\"javascript:\"><span class=\"point-marker bg-success\"></span>On Hold</a>\r\n                <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"><span class=\"point-marker bg-info\"></span>Canceled</a>\r\n              </div>\r\n              <!-- end of dropdown menu -->\r\n              <span class=\"f-left m-r-5 text-inverse\">Status : </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-block\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <ul class=\"list list-unstyled\">\r\n                  <li>Invoice #: &nbsp;0028</li>\r\n                  <li>Issued on: <span class=\"text-semibold\">2015/01/25</span></li>\r\n                </ul>\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <ul class=\"list list-unstyled text-right\">\r\n                  <li>$8,750</li>\r\n                  <li>Method: <span class=\"text-semibold\">Paypal</span></li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <div class=\"task-list-table\">\r\n              <p class=\"task-due\"><strong> Due : </strong><strong class=\"label label-warning\">23 hours</strong></p>\r\n            </div>\r\n            <div class=\"task-board m-0\">\r\n              <a href=\"javascript:\" class=\"btn btn-info btn-mini b-none\"><i class=\"icofont icofont-eye-alt m-0\"></i></a>\r\n              <!-- end of dropdown-secondary -->\r\n              <div ngbDropdown class=\"dropdown-secondary dropdown\">\r\n                <button ngbDropdownToggle class=\"btn btn-info btn-mini dropdown-toggle waves-light b-none txt-muted\" type=\"button\" id=\"dropdown8\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"icofont icofont-navigation-menu\"></i></button>\r\n                <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown3\" data-dropdown-in=\"fadeIn\" data-dropdown-out=\"fadeOut\">\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"><i class=\"icofont icofont-ui-alarm\"></i> Print Invoice</a>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"><i class=\"icofont icofont-attachment\"></i> Download invoice</a>\r\n                  <div class=\"dropdown-divider\"></div>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"><i class=\"icofont icofont-spinner-alt-5\"></i> Edit Invoice</a>\r\n                  <a class=\"dropdown-item waves-light waves-effect\" href=\"javascript:\"><i class=\"icofont icofont-ui-edit\"></i> Remove Invoice</a>\r\n                </div>\r\n                <!-- end of dropdown menu -->\r\n              </div>\r\n              <!-- end of seconadary -->\r\n            </div>\r\n            <!-- end of pull-right class -->\r\n          </div>\r\n          <!-- end of card-footer -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-8\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <button class=\"btn btn-primary btn-sm\">Week</button>\r\n        <button class=\"btn btn-primary btn-sm\">Month</button>\r\n        <button class=\"btn btn-primary btn-sm\">Year</button>\r\n      </div>\r\n      <div class=\"card-block\">\r\n        <div id=\"morris-extra-area\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <div class=\"card social-widget-card\">\r\n      <div class=\"card-block-big bg-facebook\">\r\n        <h3>1165 +</h3>\r\n        <span class=\"m-t-10\">Facebook Users</span>\r\n        <i class=\"icofont icofont-social-facebook\"></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <div class=\"card social-widget-card\">\r\n      <div class=\"card-block-big bg-twitter\">\r\n        <h3>780 +</h3>\r\n        <span class=\"m-t-10\">Twitter Users</span>\r\n        <i class=\"icofont icofont-social-twitter\"></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <div class=\"card social-widget-card\">\r\n      <div class=\"card-block-big bg-linkein\">\r\n        <h3>998 +</h3>\r\n        <span class=\"m-t-10\">Linked In Users</span>\r\n        <i class=\"icofont icofont-brand-linkedin\"></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6 col-xl-3\">\r\n    <div class=\"card social-widget-card\">\r\n      <div class=\"card-block-big bg-google-plus\">\r\n        <h3>650 +</h3>\r\n        <span class=\"m-t-10\">Google Plus Users</span>\r\n        <i class=\"icofont icofont-social-google-plus\"></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            $('.resource-barchart1').sparkline([5, 6, 9, 7, 8, 4, 6], {
                type: 'bar',
                barWidth: '6px',
                height: '32px',
                barColor: '#1abc9c',
                tooltipClassname: 'abc'
            });
            $('.resource-barchart2').sparkline([6, 4, 8, 7, 9, 6, 5], {
                type: 'bar',
                barWidth: '6px',
                height: '32px',
                barColor: '#1abc9c',
                tooltipClassname: 'abc'
            });
            Morris.Area({
                element: 'morris-extra-area',
                data: [{
                        period: '2010',
                        iphone: 0,
                        ipad: 0,
                        itouch: 0
                    }, {
                        period: '2011',
                        iphone: 50,
                        ipad: 15,
                        itouch: 5
                    }, {
                        period: '2012',
                        iphone: 20,
                        ipad: 50,
                        itouch: 65
                    }, {
                        period: '2013',
                        iphone: 60,
                        ipad: 12,
                        itouch: 7
                    }, {
                        period: '2014',
                        iphone: 30,
                        ipad: 20,
                        itouch: 120
                    }, {
                        period: '2015',
                        iphone: 25,
                        ipad: 80,
                        itouch: 40
                    }, {
                        period: '2016',
                        iphone: 10,
                        ipad: 10,
                        itouch: 10
                    }
                ],
                lineColors: ['#fb9678', '#7E81CB', '#01C0C8'],
                xkey: 'period',
                ykeys: ['iphone', 'ipad', 'itouch'],
                labels: ['Site A', 'Site B', 'Site C'],
                pointSize: 0,
                lineWidth: 0,
                resize: true,
                fillOpacity: 0.8,
                behaveLikeLine: true,
                gridLineColor: '#5FBEAA',
                hideHover: 'auto'
            });
        }, 1);
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_routing__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__dashboard_routing__["a" /* DashboardRoutes */]),
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__dashboard_component__["a" /* DashboardComponent */]]
        })
    ], DashboardModule);
    return DashboardModule;
}());

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");

var DashboardRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__dashboard_component__["a" /* DashboardComponent */],
        data: {
            breadcrumb: 'Dashboard',
            icon: 'icofont-home bg-c-blue',
            status: false
        }
    }];
//# sourceMappingURL=dashboard.routing.js.map

/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map