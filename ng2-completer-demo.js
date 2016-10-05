webpackJsonp([0],{

/***/ 102:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var ng2_completer_module_1 = __webpack_require__(272);
exports.Ng2CompleterModule = ng2_completer_module_1.Ng2CompleterModule;
var completer_service_1 = __webpack_require__(131);
exports.CompleterService = completer_service_1.CompleterService;
var local_data_1 = __webpack_require__(87);
exports.LocalData = local_data_1.LocalData;
var remote_data_1 = __webpack_require__(88);
exports.RemoteData = remote_data_1.RemoteData;
var completer_base_data_1 = __webpack_require__(86);
exports.CompleterBaseData = completer_base_data_1.CompleterBaseData;
var ctr_completer_1 = __webpack_require__(40);
exports.CtrCompleter = ctr_completer_1.CtrCompleter;
var ctr_dropdown_1 = __webpack_require__(89);
exports.CtrDropdown = ctr_dropdown_1.CtrDropdown;
var ctr_input_1 = __webpack_require__(132);
exports.CtrInput = ctr_input_1.CtrInput;
var ctr_list_1 = __webpack_require__(133);
exports.CtrList = ctr_list_1.CtrList;
var ctr_row_1 = __webpack_require__(134);
exports.CtrRow = ctr_row_1.CtrRow;


/***/ },

/***/ 111:
/***/ function(module, exports) {

"use strict";
"use strict";
exports.MAX_CHARS = 524288; // the default max length per the html maxlength attribute
exports.MIN_SEARCH_LENGTH = 3;
exports.PAUSE = 250;
exports.TEXT_SEARCHING = "Searching...";
exports.TEXT_NORESULTS = "No results found";


/***/ },

/***/ 1132:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var platform_browser_dynamic_1 = __webpack_require__(204);
var app_module_1 = __webpack_require__(518);
if (true) {
    // Production
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ },

/***/ 131:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = __webpack_require__(0);
var local_data_1 = __webpack_require__(87);
var remote_data_1 = __webpack_require__(88);
var CompleterService = (function () {
    function CompleterService(localDataFactory, // Using any instead of () => LocalData because on AoT errors
        remoteDataFactory // Using any instead of () => LocalData because on AoT errors
        ) {
        this.localDataFactory = localDataFactory;
        this.remoteDataFactory = remoteDataFactory;
    }
    CompleterService.prototype.local = function (data, searchFields, titleField) {
        var localData = this.localDataFactory();
        return localData
            .data(data)
            .searchFieldss(searchFields)
            .titleField(titleField);
    };
    CompleterService.prototype.remote = function (url, searchFields, titleField) {
        var remoteData = this.remoteDataFactory();
        return remoteData
            .remoteUrl(url)
            .searchFieldss(searchFields)
            .titleField(titleField);
    };
    CompleterService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(local_data_1.LocalData)),
        // Using any instead of () => LocalData because on AoT errors
        __param(1, core_1.Inject(remote_data_1.RemoteData)), 
        __metadata('design:paramtypes', [Object, Object])
    ], CompleterService);
    return CompleterService;
}());
exports.CompleterService = CompleterService;


/***/ },

/***/ 132:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = __webpack_require__(0);
var ctr_completer_1 = __webpack_require__(40);
// keyboard events
var KEY_DW = 40;
var KEY_RT = 39;
var KEY_UP = 38;
var KEY_LF = 37;
var KEY_ES = 27;
var KEY_EN = 13;
var KEY_TAB = 9;
var CtrInput = (function () {
    function CtrInput(completer) {
        var _this = this;
        this.completer = completer;
        this.clearSelected = false;
        this.overrideSuggested = false;
        this.ngModelChange = new core_1.EventEmitter();
        this._searchStr = "";
        this._displayStr = "";
        this.completer.selected.subscribe(function (item) {
            if (_this.clearSelected) {
                _this.searchStr = "";
            }
            else {
                _this.searchStr = item.title;
            }
            _this.ngModelChange.emit(_this.searchStr);
        });
        this.completer.highlighted.subscribe(function (item) {
            _this._displayStr = item.title;
            _this.ngModelChange.emit(item.title);
        });
    }
    CtrInput.prototype.onInputChange = function (event) {
        this.searchStr = event.target.value;
    };
    CtrInput.prototype.keyupHandler = function (event) {
        if (event.keyCode === KEY_LF || event.keyCode === KEY_RT || event.keyCode === KEY_TAB) {
            // do nothing
            return;
        }
        if (event.keyCode === KEY_UP || event.keyCode === KEY_EN) {
            event.preventDefault();
        }
        else if (event.keyCode === KEY_DW) {
            event.preventDefault();
            this.completer.search(this.searchStr);
        }
        else if (event.keyCode === KEY_ES) {
            this._searchStr = this._displayStr;
            this.completer.clear();
        }
        else {
            if (!this.searchStr) {
                this.completer.clear();
                return;
            }
            this.completer.search(this.searchStr);
        }
    };
    CtrInput.prototype.keydownHandler = function (event) {
        if (event.keyCode === KEY_EN) {
            this.completer.selectCurrent();
        }
        else if (event.keyCode === KEY_DW) {
            event.preventDefault();
            this.completer.nextRow();
        }
        else if (event.keyCode === KEY_UP) {
            event.preventDefault();
            this.completer.prevRow();
        }
        else if (event.keyCode === KEY_TAB) {
            if (this.overrideSuggested) {
                this.completer.onSelected({ title: this.searchStr, originalObject: null });
            }
            else {
                this.completer.selectCurrent();
            }
        }
        else if (event.keyCode === KEY_ES) {
            // This is very specific to IE10/11 #272
            // without this, IE clears the input text
            event.preventDefault();
        }
    };
    CtrInput.prototype.onBlur = function (event) {
        var _this = this;
        if (this.overrideSuggested) {
            this.completer.onSelected({ title: this.searchStr, originalObject: null });
        }
        else {
            setTimeout(function () {
                _this.completer.clear();
            }, 200);
        }
    };
    Object.defineProperty(CtrInput.prototype, "searchStr", {
        get: function () {
            return this._searchStr;
        },
        set: function (term) {
            this._searchStr = term;
            this._displayStr = term;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input("clearSelected"), 
        __metadata('design:type', Object)
    ], CtrInput.prototype, "clearSelected", void 0);
    __decorate([
        core_1.Input("overrideSuggested"), 
        __metadata('design:type', Object)
    ], CtrInput.prototype, "overrideSuggested", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], CtrInput.prototype, "ngModelChange", void 0);
    __decorate([
        core_1.HostListener("input", ["$event"]), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], CtrInput.prototype, "onInputChange", null);
    __decorate([
        core_1.HostListener("keyup", ["$event"]), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], CtrInput.prototype, "keyupHandler", null);
    __decorate([
        core_1.HostListener("keydown", ["$event"]), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], CtrInput.prototype, "keydownHandler", null);
    __decorate([
        core_1.HostListener("blur", ["$event"]), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], CtrInput.prototype, "onBlur", null);
    CtrInput = __decorate([
        core_1.Directive({
            selector: "[ctrInput]",
        }),
        __param(0, core_1.Host()), 
        __metadata('design:paramtypes', [ctr_completer_1.CtrCompleter])
    ], CtrInput);
    return CtrInput;
}());
exports.CtrInput = CtrInput;


/***/ },

/***/ 133:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = __webpack_require__(0);
var Observable_1 = __webpack_require__(1);
var ctr_completer_1 = __webpack_require__(40);
var globals_1 = __webpack_require__(111);
var CtrListContext = (function () {
    function CtrListContext(results, searching, searchInitialized) {
        this.results = results;
        this.searching = searching;
        this.searchInitialized = searchInitialized;
    }
    return CtrListContext;
}());
exports.CtrListContext = CtrListContext;
var CtrList = (function () {
    function CtrList(completer, templateRef, viewContainer) {
        this.completer = completer;
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.ctrListMinSearchLength = globals_1.MIN_SEARCH_LENGTH;
        this.ctrListPause = globals_1.PAUSE;
        this.ctrListAutoMatch = false;
        // private results: CompleterItem[] = [];
        this.term = null;
        // private searching = false;
        this.searchTimer = null;
        this.ctx = new CtrListContext([], false, false);
    }
    CtrList.prototype.ngOnInit = function () {
        this.completer.registerList(this);
        this.viewContainer.createEmbeddedView(this.templateRef, new CtrListContext([], false, false));
    };
    Object.defineProperty(CtrList.prototype, "dataService", {
        set: function (newService) {
            var _this = this;
            this._dataService = newService;
            if (this._dataService) {
                this._dataService
                    .catch(function (err) { return _this.handleError(err); })
                    .subscribe(function (results) {
                    _this.ctx.searchInitialized = true;
                    _this.ctx.searching = false;
                    _this.ctx.results = results;
                    if (_this.ctrListAutoMatch && results.length === 1 &&
                        results[0].title.toLocaleLowerCase() === _this.term.toLocaleLowerCase()) {
                        // Do automatch
                        _this.completer.onSelected(results[0]);
                    }
                    _this.refreshTemplate();
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    CtrList.prototype.search = function (term) {
        var _this = this;
        if (term && term.length >= this.ctrListMinSearchLength && this.term !== term) {
            if (this.searchTimer) {
                clearTimeout(this.searchTimer);
            }
            this.ctx.results = [];
            this.ctx.searching = true;
            this.searchTimer = setTimeout(function () {
                _this.searchTimerComplete(term);
            }, this.ctrListPause);
            this.refreshTemplate();
        }
    };
    CtrList.prototype.clear = function () {
        if (this.searchTimer) {
            clearTimeout(this.searchTimer);
        }
        if (this.dataService) {
            this.dataService.cancel();
        }
        this.ctx.results = [];
        this.ctx.searchInitialized = false;
        this.term = null;
        this.viewContainer.clear();
    };
    CtrList.prototype.searchTimerComplete = function (term) {
        // Begin the search
        if (!term || term.length < this.ctrListMinSearchLength) {
            this.ctx.searching = false;
            return;
        }
        this.term = term;
        this._dataService.search(term);
    };
    CtrList.prototype.handleError = function (error) {
        this.ctx.searching = false;
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : "Server error";
        if (console && console.error) {
            console.error(errMsg); // log to console 
        }
        this.refreshTemplate();
        return Observable_1.Observable.throw(errMsg);
    };
    CtrList.prototype.refreshTemplate = function () {
        // Recreate the template
        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.templateRef, this.ctx);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CtrList.prototype, "ctrListMinSearchLength", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CtrList.prototype, "ctrListPause", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CtrList.prototype, "ctrListAutoMatch", void 0);
    __decorate([
        core_1.Input("ctrList"), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], CtrList.prototype, "dataService", null);
    CtrList = __decorate([
        core_1.Directive({
            selector: "[ctrList]",
        }),
        __param(0, core_1.Host()), 
        __metadata('design:paramtypes', [ctr_completer_1.CtrCompleter, core_1.TemplateRef, core_1.ViewContainerRef])
    ], CtrList);
    return CtrList;
}());
exports.CtrList = CtrList;


/***/ },

/***/ 134:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = __webpack_require__(0);
var ctr_dropdown_1 = __webpack_require__(89);
var CtrRow = (function () {
    function CtrRow(el, renderer, dropdown) {
        this.el = el;
        this.renderer = renderer;
        this.dropdown = dropdown;
        this.selected = false;
    }
    CtrRow.prototype.ngOnInit = function () {
        this.dropdown.registerRow(new ctr_dropdown_1.CtrRowItem(this, this._rowIndex));
    };
    Object.defineProperty(CtrRow.prototype, "ctrRow", {
        set: function (index) {
            this._rowIndex = index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CtrRow.prototype, "dataItem", {
        set: function (item) {
            this._item = item;
        },
        enumerable: true,
        configurable: true
    });
    CtrRow.prototype.onClick = function (event) {
        this.dropdown.onSelected(this._item);
    };
    CtrRow.prototype.onMouseEnter = function (event) {
        this.dropdown.highlightRow(this._rowIndex);
    };
    CtrRow.prototype.setHighlited = function (selected) {
        this.selected = selected;
        this.renderer.setElementClass(this.el.nativeElement, "completer-selected-row", this.selected);
    };
    CtrRow.prototype.getNativeElement = function () {
        return this.el.nativeElement;
    };
    CtrRow.prototype.getDataItem = function () {
        return this._item;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], CtrRow.prototype, "ctrRow", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], CtrRow.prototype, "dataItem", null);
    __decorate([
        core_1.HostListener("click", ["$event"]), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], CtrRow.prototype, "onClick", null);
    __decorate([
        core_1.HostListener("mouseenter", ["$event"]), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], CtrRow.prototype, "onMouseEnter", null);
    CtrRow = __decorate([
        core_1.Directive({
            selector: "[ctrRow]",
        }),
        __param(2, core_1.Host()), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, ctr_dropdown_1.CtrDropdown])
    ], CtrRow);
    return CtrRow;
}());
exports.CtrRow = CtrRow;


/***/ },

/***/ 269:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(39);
var ctr_completer_1 = __webpack_require__(40);
var globals_1 = __webpack_require__(111);
__webpack_require__(100);
var noop = function () { };
var COMPLETER_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return CompleterCmp; }),
    multi: true
};
var CompleterCmp = (function () {
    function CompleterCmp() {
        this.inputName = "";
        this.pause = globals_1.PAUSE;
        this.minSearchLength = globals_1.MIN_SEARCH_LENGTH;
        this.maxChars = globals_1.MAX_CHARS;
        this.overrideSuggested = false;
        this.clearSelected = false;
        this.placeholder = "";
        this.textSearching = globals_1.TEXT_SEARCHING;
        this.textNoResults = globals_1.TEXT_NORESULTS;
        this.autoMatch = false;
        this.disableInput = false;
        this.selected = new core_1.EventEmitter();
        this.highlighted = new core_1.EventEmitter();
        this.displaySearching = true;
        this.searchStr = "";
        this._onTouchedCallback = noop;
        this._onChangeCallback = noop;
    }
    Object.defineProperty(CompleterCmp.prototype, "value", {
        get: function () { return this.searchStr; },
        set: function (v) {
            if (v !== this.searchStr) {
                this.searchStr = v;
                this._onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    CompleterCmp.prototype.onTouched = function () {
        this._onTouchedCallback();
    };
    CompleterCmp.prototype.writeValue = function (value) {
        this.searchStr = value;
    };
    CompleterCmp.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    CompleterCmp.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    CompleterCmp.prototype.ngOnInit = function () {
        var _this = this;
        this.completer.selected.subscribe(function (item) {
            _this.selected.emit(item);
            _this._onChangeCallback(item.title);
        });
        this.completer.highlighted.subscribe(function (item) {
            _this.highlighted.emit(item);
        });
        if (this.textSearching === "false") {
            this.displaySearching = false;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CompleterCmp.prototype, "dataService", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CompleterCmp.prototype, "inputName", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CompleterCmp.prototype, "pause", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CompleterCmp.prototype, "minSearchLength", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CompleterCmp.prototype, "maxChars", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CompleterCmp.prototype, "overrideSuggested", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CompleterCmp.prototype, "clearSelected", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CompleterCmp.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CompleterCmp.prototype, "matchClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CompleterCmp.prototype, "textSearching", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CompleterCmp.prototype, "textNoResults", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], CompleterCmp.prototype, "fieldTabindex", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CompleterCmp.prototype, "autoMatch", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CompleterCmp.prototype, "disableInput", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CompleterCmp.prototype, "selected", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CompleterCmp.prototype, "highlighted", void 0);
    __decorate([
        core_1.ViewChild(ctr_completer_1.CtrCompleter), 
        __metadata('design:type', ctr_completer_1.CtrCompleter)
    ], CompleterCmp.prototype, "completer", void 0);
    CompleterCmp = __decorate([
        core_1.Component({
            selector: "ng2-completer",
            template: __webpack_require__(303),
            styles: [__webpack_require__(302)],
            providers: [COMPLETER_CONTROL_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [])
    ], CompleterCmp);
    return CompleterCmp;
}());
exports.CompleterCmp = CompleterCmp;


/***/ },

/***/ 270:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var CompleterListItemCmp = (function () {
    function CompleterListItemCmp() {
        this.parts = [];
    }
    CompleterListItemCmp.prototype.ngOnInit = function () {
        var matchStr = this.text.toLowerCase();
        var matchPos = matchStr.indexOf(this.searchStr.toLowerCase());
        var startIndex = 0;
        while (matchPos >= 0) {
            var matchText = this.text.slice(matchPos, matchPos + this.searchStr.length);
            if (matchPos === 0) {
                this.parts.push({ isMatch: true, text: matchText });
                startIndex += this.searchStr.length;
            }
            else if (matchPos > 0) {
                var matchPart = this.text.slice(startIndex, matchPos);
                this.parts.push({ isMatch: false, text: matchPart });
                this.parts.push({ isMatch: true, text: matchText });
                startIndex += this.searchStr.length + matchPart.length;
            }
            matchPos = matchStr.indexOf(this.searchStr.toLowerCase(), startIndex);
        }
        if (startIndex < this.text.length) {
            this.parts.push({ isMatch: false, text: this.text.slice(startIndex, this.text.length) });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CompleterListItemCmp.prototype, "text", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CompleterListItemCmp.prototype, "searchStr", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CompleterListItemCmp.prototype, "matchClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CompleterListItemCmp.prototype, "type", void 0);
    CompleterListItemCmp = __decorate([
        core_1.Component({
            selector: "completer-list-item",
            template: __webpack_require__(304)
        }), 
        __metadata('design:paramtypes', [])
    ], CompleterListItemCmp);
    return CompleterListItemCmp;
}());
exports.CompleterListItemCmp = CompleterListItemCmp;


/***/ },

/***/ 271:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var http_1 = __webpack_require__(49);
var local_data_1 = __webpack_require__(87);
var remote_data_1 = __webpack_require__(88);
function localDataFactory() {
    return function () {
        return new local_data_1.LocalData();
    };
}
exports.localDataFactory = localDataFactory;
function remoteDataFactory(http) {
    return function () {
        return new remote_data_1.RemoteData(http);
    };
}
exports.remoteDataFactory = remoteDataFactory;
exports.LocalDataFactoryProvider = { provide: local_data_1.LocalData, useFactory: localDataFactory };
exports.RemoteDataFactoryProvider = { provide: remote_data_1.RemoteData, useFactory: remoteDataFactory, deps: [http_1.Http] };


/***/ },

/***/ 272:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(39);
var http_1 = __webpack_require__(49);
var completer_cmp_1 = __webpack_require__(269);
var completer_list_item_cmp_1 = __webpack_require__(270);
var completer_service_1 = __webpack_require__(131);
var completer_data_factory_1 = __webpack_require__(271);
var ctr_completer_1 = __webpack_require__(40);
var ctr_dropdown_1 = __webpack_require__(89);
var ctr_input_1 = __webpack_require__(132);
var ctr_list_1 = __webpack_require__(133);
var ctr_row_1 = __webpack_require__(134);
var common_1 = __webpack_require__(32);
var Ng2CompleterModule = (function () {
    function Ng2CompleterModule() {
    }
    Ng2CompleterModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                http_1.HttpModule
            ],
            declarations: [
                completer_list_item_cmp_1.CompleterListItemCmp,
                ctr_completer_1.CtrCompleter,
                ctr_dropdown_1.CtrDropdown,
                ctr_input_1.CtrInput,
                ctr_list_1.CtrList,
                ctr_row_1.CtrRow,
                completer_cmp_1.CompleterCmp,
            ],
            exports: [
                completer_cmp_1.CompleterCmp,
                completer_list_item_cmp_1.CompleterListItemCmp,
                ctr_completer_1.CtrCompleter,
                ctr_dropdown_1.CtrDropdown,
                ctr_input_1.CtrInput,
                ctr_list_1.CtrList,
                ctr_row_1.CtrRow
            ],
            providers: [
                completer_service_1.CompleterService,
                completer_data_factory_1.LocalDataFactoryProvider,
                completer_data_factory_1.RemoteDataFactoryProvider
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2CompleterModule);
    return Ng2CompleterModule;
}());
exports.Ng2CompleterModule = Ng2CompleterModule;


/***/ },

/***/ 302:
/***/ function(module, exports) {

module.exports = ".completer-dropdown {\n    border-color: #ececec;\n    border-width: 1px;\n    border-style: solid;\n    border-radius: 2px;\n    width: 250px;\n    padding: 6px;\n    cursor: pointer;\n    z-index: 9999;\n    position: absolute;\n    margin-top: -6px;\n    background-color: #ffffff;\n}\n\n.completer-row {\n    padding: 5px;\n    color: #000000;\n    margin-bottom: 4px;\n    clear: both;\n    display: inline-block;\n    width: 103%;\n}\n\n.completer-selected-row {\n    background-color: lightblue;\n    color: #ffffff;\n}\n\n.completer-description {\n    font-size: 14px;\n}\n\n.completer-image-default {\n    width: 16px; \n    height: 16px;\n    background-image: url(\"demo/res/img/default.png\");\n}\n\n.completer-image-holder {\n    float: left;\n    width: 10%;\n}\n.completer-item-text-image {\n    float: right;\n    width: 90%;\n}"

/***/ },

/***/ 303:
/***/ function(module, exports) {

module.exports = "<div class=\"completer-holder\" ctrCompleter>\n    <input class=\"completer-input\" ctrInput [(ngModel)]=\"searchStr\" [attr.name]=\"inputName\" [placeholder]=\"placeholder\" [attr.maxlength]=\"maxChars\"\n        [tabindex]=\"fieldTabindex\" [disabled]=\"disableInput\" [clearSelected]=\"clearSelected\" [overrideSuggested]=\"overrideSuggested\"\n        autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" />\n\n    <div class=\"completer-dropdown-holder\" *ctrList=\"dataService; minSearchLength: minSearchLength; pause: pause; autoMatch: autoMatch; let items = results; let searchActive = searching; let isInitialized = searchInitialized;\">\n        <div class=\"completer-dropdown\" ctrDropdown *ngIf=\"isInitialized\">\n            <div *ngIf=\"searchActive && displaySearching\" class=\"completer-searching\">{{textSearching}}</div>\n            <div *ngIf=\"!searchActive && (!items || items.length === 0)\" class=\"completer-no-results\">{{textNoResults}}</div>\n            <div class=\"completer-row-wrapper\" *ngFor=\"let item of items; let rowIndex=index\">\n                <div class=\"completer-row\" [ctrRow]=\"rowIndex\" [dataItem]=\"item\">\n                    <div *ngIf=\"item.image || item.image === ''\" class=\"completer-image-holder\">\n                        <img *ngIf=\"item.image != ''\" src=\"{{item.image}}\" class=\"completer-image\" />\n                        <div *ngIf=\"item.image === ''\" class=\"completer-image-default\"></div>\n                    </div>\n                    <div class=\"completer-item-text\" [ngClass]=\"{'completer-item-text-image': item.image || item.image === '' }\">\n                        <completer-list-item class=\"completer-title\" [text]=\"item.title\" [matchClass]=\"matchClass\" [searchStr]=\"searchStr\" [type]=\"'title'\"></completer-list-item>\n                        <completer-list-item *ngIf=\"item.description && item.description != ''\" class=\"completer-description\" [text]=\"item.description\"\n                            [matchClass]=\"matchClass\" [searchStr]=\"searchStr\" [type]=\"'description'\">\n                        </completer-list-item>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ },

/***/ 304:
/***/ function(module, exports) {

module.exports = "<span class=\"completer-list-item-holder\" [ngClass]=\"{'completer-title': type === 'title', 'completer-description': type === 'description'}\" >\n    <span class=\"completer-list-item\" *ngFor=\"let part of parts\" [ngClass]=\"part.isMatch ? matchClass : null\">{{part.text}}</span>\n</span>"

/***/ },

/***/ 40:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var CtrCompleter = (function () {
    function CtrCompleter() {
        this.selected = new core_1.EventEmitter();
        this.highlighted = new core_1.EventEmitter();
    }
    CtrCompleter.prototype.ngOnInit = function () {
        //
    };
    CtrCompleter.prototype.registerList = function (list) {
        this.list = list;
    };
    CtrCompleter.prototype.registerDropdown = function (dropdown) {
        this.dropdown = dropdown;
    };
    CtrCompleter.prototype.onHighlighted = function (item) {
        this.highlighted.emit(item);
    };
    CtrCompleter.prototype.onSelected = function (item) {
        this.selected.emit(item);
        this.clear();
    };
    CtrCompleter.prototype.search = function (term) {
        if (this.list) {
            this.list.search(term);
        }
    };
    CtrCompleter.prototype.clear = function () {
        if (this.dropdown) {
            this.dropdown.clear();
        }
        if (this.list) {
            this.list.clear();
        }
    };
    CtrCompleter.prototype.selectCurrent = function () {
        if (this.dropdown) {
            this.dropdown.selectCurrent();
        }
    };
    CtrCompleter.prototype.nextRow = function () {
        if (this.dropdown) {
            this.dropdown.nextRow();
        }
    };
    CtrCompleter.prototype.prevRow = function () {
        if (this.dropdown) {
            this.dropdown.prevRow();
        }
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CtrCompleter.prototype, "selected", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CtrCompleter.prototype, "highlighted", void 0);
    CtrCompleter = __decorate([
        core_1.Directive({
            selector: "[ctrCompleter]",
        }), 
        __metadata('design:paramtypes', [])
    ], CtrCompleter);
    return CtrCompleter;
}());
exports.CtrCompleter = CtrCompleter;


/***/ },

/***/ 448:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
__webpack_require__(145);
var src_1 = __webpack_require__(102);
var template = __webpack_require__(868);
// let style = require("./native-cmp.css");
var MaterialCmp = (function () {
    function MaterialCmp(completerService) {
        this.countries = __webpack_require__(480);
        this.dataService = completerService.local(this.countries, "name", "name").imageField("flag");
    }
    MaterialCmp = __decorate([
        core_1.Component({
            selector: "material-cmp",
            template: template,
        }), 
        __metadata('design:paramtypes', [src_1.CompleterService])
    ], MaterialCmp);
    return MaterialCmp;
}());
exports.MaterialCmp = MaterialCmp;


/***/ },

/***/ 449:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
__webpack_require__(145);
var src_1 = __webpack_require__(102);
var custom_data_1 = __webpack_require__(671);
var http_1 = __webpack_require__(49);
var template = __webpack_require__(870);
var style = __webpack_require__(869);
var NativeCmp = (function () {
    function NativeCmp(completerService, http) {
        this.countries = __webpack_require__(480);
        this.quotes = [
            {
                qt: "Always forgive your enemies; nothing annoys them so much.",
                nm: "Friedrich Nietzsche"
            },
            {
                qt: "Analyzing humor is like dissecting a frog. Few people are interested and the frog dies of it.",
                nm: "E.B. White"
            },
            {
                qt: "Humor is perhaps a sense of intellectual perspective: an awareness that some things are really important, others not; and that the two kinds are most oddly jumbled in everyday affairs.",
                nm: "Voltaire"
            },
            {
                qt: "I think the next best thing to solving a problem is finding some humor in it.",
                nm: "Frank Howard Clark"
            },
            {
                qt: "Life is tough, and if you have the ability to laugh at it you have the ability to enjoy it.",
                nm: "Salma Hayek"
            },
            {
                qt: "Never be afraid to laugh at yourself. After all, you could be missing out on the joke of the century.",
                nm: "Benjamin Franklin"
            },
            {
                qt: "That is the saving grace of humor. If you fail no one is laughing at you.",
                nm: "William Arthur Ward"
            },
            {
                qt: "The best jokes are dangerous, and dangerous because they are in some way truthful.",
                nm: "Kurt Vonnegut"
            },
            {
                qt: "There’s so much comedy on television. Does that cause comedy in the streets?",
                nm: "Henry Ford"
            },
            {
                qt: "You are not angry with people when you laugh at them. Humor teaches tolerance.",
                nm: "W. Somerset Maugham"
            }
        ];
        this.countryName2 = "";
        this.quote = "";
        this.dataService = completerService.local(this.countries, "name", "name").imageField("flag");
        this.dataService2 = completerService.local(this.quotes, "nm", "nm").descriptionField("qt");
        this.dataRemote = completerService.remote("https://raw.githubusercontent.com/oferh/ng2-completer/master/demo/res/data/countries.json?", "name", "name");
        this.dataRemote2 = completerService.remote(null, null, "formatted_address");
        this.dataRemote2.urlFormater(function (term) {
            return "https://maps.googleapis.com/maps/api/geocode/json?address=" + term;
        });
        this.dataRemote2.dataField("results");
        this.dataRemote2.headers(new http_1.Headers({ "My-Header": "Hello World!" }));
        this.dataService3 = completerService.local(this.countries, "name", "name");
        this.dataService4 = completerService.local(this.countries, "name", "name");
        this.customData = new custom_data_1.CustomData(http);
    }
    NativeCmp.prototype.onCountrySelected = function (selected) {
        this.countryName2 = selected.title;
    };
    NativeCmp.prototype.onQuoteSelected = function (selected) {
        this.quote = selected.description;
    };
    NativeCmp = __decorate([
        core_1.Component({
            selector: "native-cmp",
            template: template,
            styles: [style]
        }), 
        __metadata('design:paramtypes', [src_1.CompleterService, http_1.Http])
    ], NativeCmp);
    return NativeCmp;
}());
exports.NativeCmp = NativeCmp;


/***/ },

/***/ 480:
/***/ function(module, exports) {

module.exports = [
	{
		"name": "Afghanistan",
		"code": "AF",
		"flag": "demo/res/img/af.png"
	},
	{
		"name": "Aland Islands",
		"code": "AX",
		"flag": ""
	},
	{
		"name": "Albania",
		"code": "AL",
		"flag": "demo/res/img/al.png"
	},
	{
		"name": "Algeria",
		"code": "DZ",
		"flag": "demo/res/img/dz.png"
	},
	{
		"name": "American Samoa",
		"code": "AS",
		"flag": "demo/res/img/as.png"
	},
	{
		"name": "AndorrA",
		"code": "AD",
		"flag": ""
	},
	{
		"name": "Angola",
		"code": "AO",
		"flag": "demo/res/img/ao.png"
	},
	{
		"name": "Anguilla",
		"code": "AI",
		"flag": "demo/res/img/ai.png"
	},
	{
		"name": "Antarctica",
		"code": "AQ",
		"flag": "demo/res/img/aq.png"
	},
	{
		"name": "Antigua and Barbuda",
		"code": "AG",
		"flag": "demo/res/img/ag.png"
	},
	{
		"name": "Argentina",
		"code": "AR",
		"flag": "demo/res/img/ar.png"
	},
	{
		"name": "Armenia",
		"code": "AM",
		"flag": "demo/res/img/am.png"
	},
	{
		"name": "Aruba",
		"code": "AW",
		"flag": "demo/res/img/aw.png"
	},
	{
		"name": "Australia",
		"code": "AU",
		"flag": "demo/res/img/au.png"
	},
	{
		"name": "Austria",
		"code": "AT",
		"flag": "demo/res/img/at.png"
	},
	{
		"name": "Azerbaijan",
		"code": "AZ",
		"flag": "demo/res/img/az.png"
	},
	{
		"name": "Bahamas",
		"code": "BS",
		"flag": "demo/res/img/bs.png"
	},
	{
		"name": "Bahrain",
		"code": "BH",
		"flag": "demo/res/img/bh.png"
	},
	{
		"name": "Bangladesh",
		"code": "BD",
		"flag": "demo/res/img/bd.png"
	},
	{
		"name": "Barbados",
		"code": "BB",
		"flag": "demo/res/img/bb.png"
	},
	{
		"name": "Belarus",
		"code": "BY",
		"flag": "demo/res/img/by.png"
	},
	{
		"name": "Belgium",
		"code": "BE",
		"flag": "demo/res/img/be.png"
	},
	{
		"name": "Belize",
		"code": "BZ",
		"flag": "demo/res/img/bz.png"
	},
	{
		"name": "Benin",
		"code": "BJ",
		"flag": "demo/res/img/bj.png"
	},
	{
		"name": "Bermuda",
		"code": "BM",
		"flag": "demo/res/img/bm.png"
	},
	{
		"name": "Bhutan",
		"code": "BT",
		"flag": "demo/res/img/bt.png"
	},
	{
		"name": "Bolivia",
		"code": "BO",
		"flag": "demo/res/img/bo.png"
	},
	{
		"name": "Bosnia and Herzegovina",
		"code": "BA",
		"flag": "demo/res/img/ba.png"
	},
	{
		"name": "Botswana",
		"code": "BW",
		"flag": "demo/res/img/bw.png"
	},
	{
		"name": "Bouvet Island",
		"code": "BV",
		"flag": ""
	},
	{
		"name": "Brazil",
		"code": "BR",
		"flag": "demo/res/img/br.png"
	},
	{
		"name": "British Indian Ocean Territory",
		"code": "IO",
		"flag": ""
	},
	{
		"name": "Brunei Darussalam",
		"code": "BN",
		"flag": "demo/res/img/bn.png"
	},
	{
		"name": "Bulgaria",
		"code": "BG",
		"flag": "demo/res/img/bg.png"
	},
	{
		"name": "Burkina Faso",
		"code": "BF",
		"flag": "demo/res/img/bf.png"
	},
	{
		"name": "Burundi",
		"code": "BI",
		"flag": "demo/res/img/bi.png"
	},
	{
		"name": "Cambodia",
		"code": "KH",
		"flag": "demo/res/img/kh.png"
	},
	{
		"name": "Cameroon",
		"code": "CM",
		"flag": "demo/res/img/cm.png"
	},
	{
		"name": "Canada",
		"code": "CA",
		"flag": "demo/res/img/ca.png"
	},
	{
		"name": "Cape Verde",
		"code": "CV",
		"flag": "demo/res/img/cv.png"
	},
	{
		"name": "Cayman Islands",
		"code": "KY",
		"flag": "demo/res/img/ky.png"
	},
	{
		"name": "Central African Republic",
		"code": "CF",
		"flag": "demo/res/img/cf.png"
	},
	{
		"name": "Chad",
		"code": "TD",
		"flag": "demo/res/img/td.png"
	},
	{
		"name": "Chile",
		"code": "CL",
		"flag": "demo/res/img/cl.png"
	},
	{
		"name": "China",
		"code": "CN",
		"flag": "demo/res/img/cn.png"
	},
	{
		"name": "Christmas Island",
		"code": "CX",
		"flag": ""
	},
	{
		"name": "Cocos (Keeling) Islands",
		"code": "CC",
		"flag": ""
	},
	{
		"name": "Colombia",
		"code": "CO",
		"flag": "demo/res/img/co.png"
	},
	{
		"name": "Comoros",
		"code": "KM",
		"flag": "demo/res/img/km.png"
	},
	{
		"name": "Congo",
		"code": "CG",
		"flag": "demo/res/img/cg.png"
	},
	{
		"name": "Congo, The Democratic Republic of the",
		"code": "CD",
		"flag": "demo/res/img/cd.png"
	},
	{
		"name": "Cook Islands",
		"code": "CK",
		"flag": "demo/res/img/ck.png"
	},
	{
		"name": "Costa Rica",
		"code": "CR",
		"flag": "demo/res/img/cr.png"
	},
	{
		"name": "Cote D\"Ivoire",
		"code": "CI",
		"flag": "demo/res/img/ci.png"
	},
	{
		"name": "Croatia",
		"code": "HR",
		"flag": "demo/res/img/hr.png"
	},
	{
		"name": "Cuba",
		"code": "CU",
		"flag": "demo/res/img/cu.png"
	},
	{
		"name": "Cyprus",
		"code": "CY",
		"flag": "demo/res/img/cy.png"
	},
	{
		"name": "Czech Republic",
		"code": "CZ",
		"flag": "demo/res/img/cz.png"
	},
	{
		"name": "Denmark",
		"code": "DK",
		"flag": "demo/res/img/dk.png"
	},
	{
		"name": "Djibouti",
		"code": "DJ",
		"flag": "demo/res/img/dj.png"
	},
	{
		"name": "Dominica",
		"code": "DM",
		"flag": "demo/res/img/dm.png"
	},
	{
		"name": "Dominican Republic",
		"code": "DO",
		"flag": "demo/res/img/do.png"
	},
	{
		"name": "Ecuador",
		"code": "EC",
		"flag": "demo/res/img/ec.png"
	},
	{
		"name": "Egypt",
		"code": "EG",
		"flag": "demo/res/img/eg.png"
	},
	{
		"name": "El Salvador",
		"code": "SV",
		"flag": "demo/res/img/sv.png"
	},
	{
		"name": "Equatorial Guinea",
		"code": "GQ",
		"flag": "demo/res/img/gq.png"
	},
	{
		"name": "Eritrea",
		"code": "ER",
		"flag": "demo/res/img/er.png"
	},
	{
		"name": "Estonia",
		"code": "EE",
		"flag": "demo/res/img/ee.png"
	},
	{
		"name": "Ethiopia",
		"code": "ET",
		"flag": "demo/res/img/et.png"
	},
	{
		"name": "Falkland Islands (Malvinas)",
		"code": "FK",
		"flag": ""
	},
	{
		"name": "Faroe Islands",
		"code": "FO",
		"flag": "demo/res/img/fo.png"
	},
	{
		"name": "Fiji",
		"code": "FJ",
		"flag": "demo/res/img/fj.png"
	},
	{
		"name": "Finland",
		"code": "FI",
		"flag": "demo/res/img/fi.png"
	},
	{
		"name": "France",
		"code": "FR",
		"flag": "demo/res/img/fr.png"
	},
	{
		"name": "French Guiana",
		"code": "GF",
		"flag": ""
	},
	{
		"name": "French Polynesia",
		"code": "PF",
		"flag": "demo/res/img/pf.png"
	},
	{
		"name": "French Southern Territories",
		"code": "TF",
		"flag": ""
	},
	{
		"name": "Gabon",
		"code": "GA",
		"flag": "demo/res/img/ga.png"
	},
	{
		"name": "Gambia",
		"code": "GM",
		"flag": "demo/res/img/gm.png"
	},
	{
		"name": "Georgia",
		"code": "GE",
		"flag": "demo/res/img/ge.png"
	},
	{
		"name": "Germany",
		"code": "DE",
		"flag": "demo/res/img/de.png"
	},
	{
		"name": "Ghana",
		"code": "GH",
		"flag": "demo/res/img/gh.png"
	},
	{
		"name": "Gibraltar",
		"code": "GI",
		"flag": "demo/res/img/gi.png"
	},
	{
		"name": "Greece",
		"code": "GR",
		"flag": "demo/res/img/gr.png"
	},
	{
		"name": "Greenland",
		"code": "GL",
		"flag": "demo/res/img/gl.png"
	},
	{
		"name": "Grenada",
		"code": "GD",
		"flag": "demo/res/img/gd.png"
	},
	{
		"name": "Guadeloupe",
		"code": "GP",
		"flag": "demo/res/img/gp.png"
	},
	{
		"name": "Guam",
		"code": "GU",
		"flag": "demo/res/img/gu.png"
	},
	{
		"name": "Guatemala",
		"code": "GT",
		"flag": "demo/res/img/gt.png"
	},
	{
		"name": "Guernsey",
		"code": "GG",
		"flag": "demo/res/img/gg.png"
	},
	{
		"name": "Guinea",
		"code": "GN",
		"flag": "demo/res/img/gn.png"
	},
	{
		"name": "Guinea-Bissau",
		"code": "GW",
		"flag": "demo/res/img/gw.png"
	},
	{
		"name": "Guyana",
		"code": "GY",
		"flag": "demo/res/img/gy.png"
	},
	{
		"name": "Haiti",
		"code": "HT",
		"flag": "demo/res/img/ht.png"
	},
	{
		"name": "Heard Island and Mcdonald Islands",
		"code": "HM",
		"flag": ""
	},
	{
		"name": "Holy See (Vatican City State)",
		"code": "VA",
		"flag": "demo/res/img/va.png"
	},
	{
		"name": "Honduras",
		"code": "HN",
		"flag": "demo/res/img/hn.png"
	},
	{
		"name": "Hong Kong",
		"code": "HK",
		"flag": "demo/res/img/hk.png"
	},
	{
		"name": "Hungary",
		"code": "HU",
		"flag": "demo/res/img/hu.png"
	},
	{
		"name": "Iceland",
		"code": "IS",
		"flag": "demo/res/img/is.png"
	},
	{
		"name": "India",
		"code": "IN",
		"flag": "demo/res/img/in.png"
	},
	{
		"name": "Indonesia",
		"code": "ID",
		"flag": "demo/res/img/id.png"
	},
	{
		"name": "Iran, Islamic Republic Of",
		"code": "IR",
		"flag": "demo/res/img/ir.png"
	},
	{
		"name": "Iraq",
		"code": "IQ",
		"flag": "demo/res/img/iq.png"
	},
	{
		"name": "Ireland",
		"code": "IE",
		"flag": "demo/res/img/ie.png"
	},
	{
		"name": "Isle of Man",
		"code": "IM",
		"flag": "demo/res/img/im.png"
	},
	{
		"name": "Israel",
		"code": "IL",
		"flag": "demo/res/img/il.png"
	},
	{
		"name": "Italy",
		"code": "IT",
		"flag": "demo/res/img/it.png"
	},
	{
		"name": "Jamaica",
		"code": "JM",
		"flag": "demo/res/img/jm.png"
	},
	{
		"name": "Japan",
		"code": "JP",
		"flag": "demo/res/img/jp.png"
	},
	{
		"name": "Jersey",
		"code": "JE",
		"flag": "demo/res/img/je.png"
	},
	{
		"name": "Jordan",
		"code": "JO",
		"flag": "demo/res/img/jo.png"
	},
	{
		"name": "Kazakhstan",
		"code": "KZ",
		"flag": "demo/res/img/kz.png"
	},
	{
		"name": "Kenya",
		"code": "KE",
		"flag": "demo/res/img/ke.png"
	},
	{
		"name": "Kiribati",
		"code": "KI",
		"flag": "demo/res/img/ki.png"
	},
	{
		"name": "Korea, Democratic People\"S Republic of",
		"code": "KP",
		"flag": "demo/res/img/kp.png"
	},
	{
		"name": "Korea, Republic of",
		"code": "KR",
		"flag": "demo/res/img/kr.png"
	},
	{
		"name": "Kuwait",
		"code": "KW",
		"flag": "demo/res/img/kw.png"
	},
	{
		"name": "Kyrgyzstan",
		"code": "KG",
		"flag": "demo/res/img/kg.png"
	},
	{
		"name": "Lao People\"S Democratic Republic",
		"code": "LA",
		"flag": "demo/res/img/la.png"
	},
	{
		"name": "Latvia",
		"code": "LV",
		"flag": "demo/res/img/lv.png"
	},
	{
		"name": "Lebanon",
		"code": "LB",
		"flag": "demo/res/img/lb.png"
	},
	{
		"name": "Lesotho",
		"code": "LS",
		"flag": "demo/res/img/ls.png"
	},
	{
		"name": "Liberia",
		"code": "LR",
		"flag": "demo/res/img/lr.png"
	},
	{
		"name": "Libyan Arab Jamahiriya",
		"code": "LY",
		"flag": "demo/res/img/ly.png"
	},
	{
		"name": "Liechtenstein",
		"code": "LI",
		"flag": "demo/res/img/li.png"
	},
	{
		"name": "Lithuania",
		"code": "LT",
		"flag": "demo/res/img/lt.png"
	},
	{
		"name": "Luxembourg",
		"code": "LU",
		"flag": "demo/res/img/lu.png"
	},
	{
		"name": "Macao",
		"code": "MO",
		"flag": "demo/res/img/mo.png"
	},
	{
		"name": "Macedonia, The Former Yugoslav Republic of",
		"code": "MK",
		"flag": "demo/res/img/mk.png"
	},
	{
		"name": "Madagascar",
		"code": "MG",
		"flag": "demo/res/img/mg.png"
	},
	{
		"name": "Malawi",
		"code": "MW",
		"flag": "demo/res/img/mw.png"
	},
	{
		"name": "Malaysia",
		"code": "MY",
		"flag": "demo/res/img/my.png"
	},
	{
		"name": "Maldives",
		"code": "MV",
		"flag": "demo/res/img/mv.png"
	},
	{
		"name": "Mali",
		"code": "ML",
		"flag": "demo/res/img/ml.png"
	},
	{
		"name": "Malta",
		"code": "MT",
		"flag": "demo/res/img/mt.png"
	},
	{
		"name": "Marshall Islands",
		"code": "MH",
		"flag": "demo/res/img/mh.png"
	},
	{
		"name": "Martinique",
		"code": "MQ",
		"flag": "demo/res/img/mq.png"
	},
	{
		"name": "Mauritania",
		"code": "MR",
		"flag": "demo/res/img/mr.png"
	},
	{
		"name": "Mauritius",
		"code": "MU",
		"flag": "demo/res/img/mu.png"
	},
	{
		"name": "Mayotte",
		"code": "YT",
		"flag": ""
	},
	{
		"name": "Mexico",
		"code": "MX",
		"flag": "demo/res/img/mx.png"
	},
	{
		"name": "Micronesia, Federated States of",
		"code": "FM",
		"flag": "demo/res/img/fm.png"
	},
	{
		"name": "Moldova, Republic of",
		"code": "MD",
		"flag": "demo/res/img/md.png"
	},
	{
		"name": "Monaco",
		"code": "MC",
		"flag": "demo/res/img/mc.png"
	},
	{
		"name": "Mongolia",
		"code": "MN",
		"flag": "demo/res/img/mn.png"
	},
	{
		"name": "Montserrat",
		"code": "MS",
		"flag": "demo/res/img/ms.png"
	},
	{
		"name": "Morocco",
		"code": "MA",
		"flag": "demo/res/img/ma.png"
	},
	{
		"name": "Mozambique",
		"code": "MZ",
		"flag": "demo/res/img/mz.png"
	},
	{
		"name": "Myanmar",
		"code": "MM",
		"flag": "demo/res/img/mm.png"
	},
	{
		"name": "Namibia",
		"code": "NA",
		"flag": "demo/res/img/na.png"
	},
	{
		"name": "Nauru",
		"code": "NR",
		"flag": "demo/res/img/nr.png"
	},
	{
		"name": "Nepal",
		"code": "NP",
		"flag": "demo/res/img/np.png"
	},
	{
		"name": "Netherlands",
		"code": "NL",
		"flag": "demo/res/img/nl.png"
	},
	{
		"name": "Netherlands Antilles",
		"code": "AN",
		"flag": "demo/res/img/an.png"
	},
	{
		"name": "New Caledonia",
		"code": "NC",
		"flag": "demo/res/img/nc.png"
	},
	{
		"name": "New Zealand",
		"code": "NZ",
		"flag": "demo/res/img/nz.png"
	},
	{
		"name": "Nicaragua",
		"code": "NI",
		"flag": "demo/res/img/ni.png"
	},
	{
		"name": "Niger",
		"code": "NE",
		"flag": "demo/res/img/ne.png"
	},
	{
		"name": "Nigeria",
		"code": "NG",
		"flag": "demo/res/img/ng.png"
	},
	{
		"name": "Niue",
		"code": "NU",
		"flag": ""
	},
	{
		"name": "Norfolk Island",
		"code": "NF",
		"flag": ""
	},
	{
		"name": "Northern Mariana Islands",
		"code": "MP",
		"flag": ""
	},
	{
		"name": "Norway",
		"code": "NO",
		"flag": "demo/res/img/no.png"
	},
	{
		"name": "Oman",
		"code": "OM",
		"flag": "demo/res/img/om.png"
	},
	{
		"name": "Pakistan",
		"code": "PK",
		"flag": "demo/res/img/pk.png"
	},
	{
		"name": "Palau",
		"code": "PW",
		"flag": "demo/res/img/pw.png"
	},
	{
		"name": "Palestinian Territory, Occupied",
		"code": "PS",
		"flag": "demo/res/img/ps.png"
	},
	{
		"name": "Panama",
		"code": "PA",
		"flag": "demo/res/img/pa.png"
	},
	{
		"name": "Papua New Guinea",
		"code": "PG",
		"flag": "demo/res/img/pg.png"
	},
	{
		"name": "Paraguay",
		"code": "PY",
		"flag": "demo/res/img/py.png"
	},
	{
		"name": "Peru",
		"code": "PE",
		"flag": "demo/res/img/pe.png"
	},
	{
		"name": "Philippines",
		"code": "PH",
		"flag": "demo/res/img/ph.png"
	},
	{
		"name": "Pitcairn",
		"code": "PN",
		"flag": ""
	},
	{
		"name": "Poland",
		"code": "PL",
		"flag": "demo/res/img/pl.png"
	},
	{
		"name": "Portugal",
		"code": "PT",
		"flag": "demo/res/img/pt.png"
	},
	{
		"name": "Puerto Rico",
		"code": "PR",
		"flag": "demo/res/img/pr.png"
	},
	{
		"name": "Qatar",
		"code": "QA",
		"flag": "demo/res/img/qa.png"
	},
	{
		"name": "Reunion",
		"code": "RE",
		"flag": "demo/res/img/re.png"
	},
	{
		"name": "Romania",
		"code": "RO",
		"flag": "demo/res/img/ro.png"
	},
	{
		"name": "Russian Federation",
		"code": "RU",
		"flag": "demo/res/img/ru.png"
	},
	{
		"name": "RWANDA",
		"code": "RW",
		"flag": "demo/res/img/rw.png"
	},
	{
		"name": "Saint Helena",
		"code": "SH",
		"flag": ""
	},
	{
		"name": "Saint Kitts and Nevis",
		"code": "KN",
		"flag": "demo/res/img/kn.png"
	},
	{
		"name": "Saint Lucia",
		"code": "LC",
		"flag": "demo/res/img/lc.png"
	},
	{
		"name": "Saint Pierre and Miquelon",
		"code": "PM",
		"flag": ""
	},
	{
		"name": "Saint Vincent and the Grenadines",
		"code": "VC",
		"flag": "demo/res/img/vc.png"
	},
	{
		"name": "Samoa",
		"code": "WS",
		"flag": "demo/res/img/ws.png"
	},
	{
		"name": "San Marino",
		"code": "SM",
		"flag": "demo/res/img/sm.png"
	},
	{
		"name": "Sao Tome and Principe",
		"code": "ST",
		"flag": "demo/res/img/st.png"
	},
	{
		"name": "Saudi Arabia",
		"code": "SA",
		"flag": "demo/res/img/sa.png"
	},
	{
		"name": "Senegal",
		"code": "SN",
		"flag": "demo/res/img/sn.png"
	},
	{
		"name": "Serbia and Montenegro",
		"code": "CS",
		"flag": ""
	},
	{
		"name": "Seychelles",
		"code": "SC",
		"flag": "demo/res/img/sc.png"
	},
	{
		"name": "Sierra Leone",
		"code": "SL",
		"flag": "demo/res/img/sl.png"
	},
	{
		"name": "Singapore",
		"code": "SG",
		"flag": "demo/res/img/sg.png"
	},
	{
		"name": "Slovakia",
		"code": "SK",
		"flag": "demo/res/img/sk.png"
	},
	{
		"name": "Slovenia",
		"code": "SI",
		"flag": "demo/res/img/si.png"
	},
	{
		"name": "Solomon Islands",
		"code": "SB",
		"flag": "demo/res/img/sb.png"
	},
	{
		"name": "Somalia",
		"code": "SO",
		"flag": "demo/res/img/so.png"
	},
	{
		"name": "South Africa",
		"code": "ZA",
		"flag": "demo/res/img/za.png"
	},
	{
		"name": "South Georgia and the South Sandwich Islands",
		"code": "GS",
		"flag": ""
	},
	{
		"name": "Spain",
		"code": "ES",
		"flag": "demo/res/img/es.png"
	},
	{
		"name": "Sri Lanka",
		"code": "LK",
		"flag": "demo/res/img/lk.png"
	},
	{
		"name": "Sudan",
		"code": "SD",
		"flag": "demo/res/img/sd.png"
	},
	{
		"name": "Suriname",
		"code": "SR",
		"flag": "demo/res/img/sr.png"
	},
	{
		"name": "Svalbard and Jan Mayen",
		"code": "SJ",
		"flag": ""
	},
	{
		"name": "Swaziland",
		"code": "SZ",
		"flag": "demo/res/img/sz.png"
	},
	{
		"name": "Sweden",
		"code": "SE",
		"flag": "demo/res/img/se.png"
	},
	{
		"name": "Switzerland",
		"code": "CH",
		"flag": "demo/res/img/ch.png"
	},
	{
		"name": "Syrian Arab Republic",
		"code": "SY",
		"flag": "demo/res/img/sy.png"
	},
	{
		"name": "Taiwan, Province of China",
		"code": "TW",
		"flag": "demo/res/img/tw.png"
	},
	{
		"name": "Tajikistan",
		"code": "TJ",
		"flag": "demo/res/img/tj.png"
	},
	{
		"name": "Tanzania, United Republic of",
		"code": "TZ",
		"flag": "demo/res/img/tz.png"
	},
	{
		"name": "Thailand",
		"code": "TH",
		"flag": "demo/res/img/th.png"
	},
	{
		"name": "Timor-Leste",
		"code": "TL",
		"flag": "demo/res/img/tl.png"
	},
	{
		"name": "Togo",
		"code": "TG",
		"flag": "demo/res/img/tg.png"
	},
	{
		"name": "Tokelau",
		"code": "TK",
		"flag": ""
	},
	{
		"name": "Tonga",
		"code": "TO",
		"flag": "demo/res/img/to.png"
	},
	{
		"name": "Trinidad and Tobago",
		"code": "TT",
		"flag": "demo/res/img/tt.png"
	},
	{
		"name": "Tunisia",
		"code": "TN",
		"flag": "demo/res/img/tn.png"
	},
	{
		"name": "Turkey",
		"code": "TR",
		"flag": "demo/res/img/tr.png"
	},
	{
		"name": "Turkmenistan",
		"code": "TM",
		"flag": "demo/res/img/tm.png"
	},
	{
		"name": "Turks and Caicos Islands",
		"code": "TC",
		"flag": "demo/res/img/tc.png"
	},
	{
		"name": "Tuvalu",
		"code": "TV",
		"flag": "demo/res/img/tv.png"
	},
	{
		"name": "Uganda",
		"code": "UG",
		"flag": "demo/res/img/ug.png"
	},
	{
		"name": "Ukraine",
		"code": "UA",
		"flag": "demo/res/img/ua.png"
	},
	{
		"name": "United Arab Emirates",
		"code": "AE",
		"flag": "demo/res/img/ae.png"
	},
	{
		"name": "United Kingdom",
		"code": "GB",
		"flag": "demo/res/img/gb.png"
	},
	{
		"name": "United States",
		"code": "US",
		"flag": "demo/res/img/us.png"
	},
	{
		"name": "United States Minor Outlying Islands",
		"code": "UM",
		"flag": ""
	},
	{
		"name": "Uruguay",
		"code": "UY",
		"flag": "demo/res/img/uy.png"
	},
	{
		"name": "Uzbekistan",
		"code": "UZ",
		"flag": "demo/res/img/uz.png"
	},
	{
		"name": "Vanuatu",
		"code": "VU",
		"flag": "demo/res/img/vu.png"
	},
	{
		"name": "Venezuela",
		"code": "VE",
		"flag": "demo/res/img/ve.png"
	},
	{
		"name": "Vietnam",
		"code": "VN",
		"flag": "demo/res/img/vn.png"
	},
	{
		"name": "Virgin Islands, British",
		"code": "VG",
		"flag": "demo/res/img/vg.png"
	},
	{
		"name": "Virgin Islands, U.S.",
		"code": "VI",
		"flag": "demo/res/img/vi.png"
	},
	{
		"name": "Wallis and Futuna",
		"code": "WF",
		"flag": ""
	},
	{
		"name": "Western Sahara",
		"code": "EH",
		"flag": "demo/res/img/eh.png"
	},
	{
		"name": "Yemen",
		"code": "YE",
		"flag": "demo/res/img/ye.png"
	},
	{
		"name": "Zambia",
		"code": "ZM",
		"flag": "demo/res/img/zm.png"
	},
	{
		"name": "Zimbabwe",
		"code": "ZW",
		"flag": "demo/res/img/zw.png"
	}
];

/***/ },

/***/ 518:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(49);
var forms_1 = __webpack_require__(39);
var material_1 = __webpack_require__(317);
var platform_browser_1 = __webpack_require__(83);
var app_cmp_1 = __webpack_require__(668);
var material_cmp_1 = __webpack_require__(448);
var native_cmp_1 = __webpack_require__(449);
var app_routing_1 = __webpack_require__(669);
var src_1 = __webpack_require__(102);
var completer_cmp_md_1 = __webpack_require__(670);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                src_1.Ng2CompleterModule,
                material_1.MaterialModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing
            ],
            declarations: [app_cmp_1.AppComponent, completer_cmp_md_1.CompleterCmpMd, native_cmp_1.NativeCmp, material_cmp_1.MaterialCmp],
            bootstrap: [app_cmp_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ },

/***/ 668:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
__webpack_require__(145);
var template = __webpack_require__(865);
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "demo-app",
            template: template
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ },

/***/ 669:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var router_1 = __webpack_require__(318);
var material_cmp_1 = __webpack_require__(448);
var native_cmp_1 = __webpack_require__(449);
var appRoutes = [
    {
        path: "",
        redirectTo: "/native",
        pathMatch: "full"
    },
    {
        path: "native",
        component: native_cmp_1.NativeCmp
    },
    {
        path: "material",
        component: material_cmp_1.MaterialCmp
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });


/***/ },

/***/ 670:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(39);
var src_1 = __webpack_require__(102);
var globals_1 = __webpack_require__(111);
__webpack_require__(100);
var noop = function () { };
var COMPLETER_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return CompleterCmpMd; }),
    multi: true
};
var CompleterCmpMd = (function () {
    function CompleterCmpMd() {
        this.inputName = "";
        this.pause = globals_1.PAUSE;
        this.minSearchLength = globals_1.MIN_SEARCH_LENGTH;
        this.maxChars = globals_1.MAX_CHARS;
        this.overrideSuggested = false;
        this.clearSelected = false;
        this.placeholder = "";
        this.textSearching = globals_1.TEXT_SEARCHING;
        this.textNoResults = globals_1.TEXT_NORESULTS;
        this.autoMatch = false;
        this.disableInput = false;
        this.selected = new core_1.EventEmitter();
        this.highlighted = new core_1.EventEmitter();
        this.displaySearching = true;
        this.searchStr = "";
        this._onTouchedCallback = noop;
        this._onChangeCallback = noop;
    }
    Object.defineProperty(CompleterCmpMd.prototype, "value", {
        get: function () { return this.searchStr; },
        set: function (v) {
            if (v !== this.searchStr) {
                this.searchStr = v;
                this._onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    CompleterCmpMd.prototype.onTouched = function () {
        this._onTouchedCallback();
    };
    CompleterCmpMd.prototype.writeValue = function (value) {
        this.searchStr = value;
    };
    CompleterCmpMd.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    CompleterCmpMd.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    CompleterCmpMd.prototype.ngOnInit = function () {
        var _this = this;
        this.completer.selected.subscribe(function (item) {
            _this.selected.emit(item);
            _this._onChangeCallback(item.title);
        });
        this.completer.highlighted.subscribe(function (item) {
            _this.highlighted.emit(item);
        });
        if (this.textSearching === "false") {
            this.displaySearching = false;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CompleterCmpMd.prototype, "dataService", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CompleterCmpMd.prototype, "inputName", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CompleterCmpMd.prototype, "pause", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CompleterCmpMd.prototype, "minSearchLength", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CompleterCmpMd.prototype, "maxChars", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CompleterCmpMd.prototype, "overrideSuggested", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CompleterCmpMd.prototype, "clearSelected", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CompleterCmpMd.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CompleterCmpMd.prototype, "matchClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CompleterCmpMd.prototype, "textSearching", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CompleterCmpMd.prototype, "textNoResults", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], CompleterCmpMd.prototype, "fieldTabindex", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CompleterCmpMd.prototype, "autoMatch", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CompleterCmpMd.prototype, "disableInput", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CompleterCmpMd.prototype, "selected", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CompleterCmpMd.prototype, "highlighted", void 0);
    __decorate([
        core_1.ViewChild(src_1.CtrCompleter), 
        __metadata('design:type', src_1.CtrCompleter)
    ], CompleterCmpMd.prototype, "completer", void 0);
    CompleterCmpMd = __decorate([
        core_1.Component({
            selector: "ng2-completer-md",
            template: __webpack_require__(867),
            styles: [__webpack_require__(866)],
            providers: [COMPLETER_CONTROL_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [])
    ], CompleterCmpMd);
    return CompleterCmpMd;
}());
exports.CompleterCmpMd = CompleterCmpMd;


/***/ },

/***/ 671:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__(13);
var CustomData = (function (_super) {
    __extends(CustomData, _super);
    function CustomData(http) {
        _super.call(this);
        this.http = http;
    }
    CustomData.prototype.search = function (term) {
        var _this = this;
        this.http.get("http://mysafeinfo.com/api/data?list=seinfeldepisodes&format=json&nm=" + term + ",contains")
            .map(function (res) {
            // Convert the result to CompleterItem[]
            var data = res.json();
            var matches = data.map(function (episode) {
                return {
                    title: episode.nm
                };
            });
            _this.next(matches);
        })
            .subscribe();
    };
    CustomData.prototype.cancel = function () {
        // Handle cancel
    };
    return CustomData;
}(Subject_1.Subject));
exports.CustomData = CustomData;


/***/ },

/***/ 86:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__(13);
var CompleterBaseData = (function (_super) {
    __extends(CompleterBaseData, _super);
    function CompleterBaseData() {
        _super.call(this);
    }
    CompleterBaseData.prototype.cancel = function () { };
    CompleterBaseData.prototype.searchFieldss = function (searchFields) {
        this._searchFields = searchFields;
        return this;
    };
    CompleterBaseData.prototype.titleField = function (titleField) {
        this._titleField = titleField;
        return this;
    };
    CompleterBaseData.prototype.descriptionField = function (descriptionField) {
        this._descriptionField = descriptionField;
        return this;
    };
    CompleterBaseData.prototype.imageField = function (imageField) {
        this._imageField = imageField;
        return this;
    };
    CompleterBaseData.prototype.extractMatches = function (data, term) {
        var matches = [];
        if (this._searchFields && this._searchFields != "") {
            var searchFields = this._searchFields.split(",");
            for (var i = 0; i < data.length; i++) {
                var match = false;
                for (var s = 0; s < searchFields.length; s++) {
                    var value = this.extractValue(data[i], searchFields[s]) || "";
                    match = match || (value.toString().toLowerCase().indexOf(term.toString().toLowerCase()) >= 0);
                }
                if (match) {
                    matches[matches.length] = data[i];
                }
            }
        }
        else {
            matches = data;
        }
        return matches;
    };
    CompleterBaseData.prototype.extractTitle = function (item) {
        var _this = this;
        // split title fields and run extractValue for each and join with ' '
        return this._titleField.split(",")
            .map(function (field) {
            return _this.extractValue(item, field);
        })
            .join(" ");
    };
    CompleterBaseData.prototype.extractValue = function (obj, key) {
        var keys;
        var result;
        if (key) {
            keys = key.split(".");
            result = obj;
            for (var i = 0; i < keys.length; i++) {
                if (result) {
                    result = result[keys[i]];
                }
            }
        }
        else {
            result = obj;
        }
        return result;
    };
    CompleterBaseData.prototype.processResults = function (matches, term) {
        var i;
        var description;
        var image;
        var text;
        var formattedText;
        var formattedDesc;
        var results = [];
        if (matches && matches.length > 0) {
            for (i = 0; i < matches.length; i++) {
                if (this.titleField && this._titleField !== "") {
                    text = formattedText = this.extractTitle(matches[i]);
                }
                description = "";
                if (this._descriptionField) {
                    description = formattedDesc = this.extractValue(matches[i], this._descriptionField);
                }
                image = null;
                if (this._imageField) {
                    image = this.extractValue(matches[i], this._imageField);
                }
                results.push({
                    title: formattedText,
                    description: formattedDesc,
                    image: image,
                    originalObject: matches[i]
                });
            }
        }
        return results;
    };
    return CompleterBaseData;
}(Subject_1.Subject));
exports.CompleterBaseData = CompleterBaseData;


/***/ },

/***/ 865:
/***/ function(module, exports) {

module.exports = "        <nav class=\"navbar navbar-dark navbar-static-top bg-inverse\">\n            <a class=\"navbar-brand\" href=\"#\">ng2-completer demo</a>\n            <ul class=\"nav navbar-nav\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"/native\">JS Native</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"/material\">Material Design</a>\n                </li>\n            </ul>\n        </nav>\n<div class=\"container main\">\n    <router-outlet></router-outlet>\n</div>"

/***/ },

/***/ 866:
/***/ function(module, exports) {

module.exports = ".completer-row {\n    display: inherit;\n}\n\n.completer-selected-row {\n    background-color: lightblue;\n    color: #ffffff;\n}\n\n.completer-row p {\n    position: relative;\n    top: 50%;\n    transform: translateY(50%);\n}"

/***/ },

/***/ 867:
/***/ function(module, exports) {

module.exports = "<div class=\"completer-holder\" ctrCompleter>\n    <md-input class=\"completer-input\" ctrInput=\"clearSelected=clearSelected; overrideSuggested=overrideSuggested\" [(ngModel)]=\"searchStr\" [attr.name]=\"inputName\" [placeholder]=\"placeholder\" [attr.maxlength]=\"maxChars\"\n        [tabindex]=\"fieldTabindex\" [disabled]=\"disableInput\"\n        autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\">\n    </md-input>\n\n    <div class=\"completer-dropdown-holder\" *ctrList=\"dataService; minSearchLength: minSearchLength; pause: pause; autoMatch: autoMatch; let items = results; let searchActive = searching; let isInitialized = searchInitialized;\">\n        <md-list class=\"completer-dropdown\" ctrDropdown *ngIf=\"isInitialized\">\n            <md-list-item *ngIf=\"searchActive && displaySearching\" class=\"completer-searching\">{{textSearching}}</md-list-item>\n            <md-list-item *ngIf=\"!searchActive && (!items || items.length === 0)\" class=\"completer-no-results\">{{textNoResults}}</md-list-item>\n            <md-list-item class=\"completer-row-wrapper\" *ngFor=\"let item of items; let rowIndex=index\">\n                <div class=\"completer-row\" [ctrRow]=\"rowIndex\" [dataItem]=\"item\">\n                    <span *ngIf=\"item.image || item.image === ''\" class=\"completer-image-holder\">\n                        <img md-list-avatar *ngIf=\"item.image != ''\" src=\"{{item.image}}\" class=\"completer-image\" />\n                        <span md-list-avatar *ngIf=\"item.image === ''\" class=\"completer-image-default\"></span>\n                    </span>\n                    <p md-line>\n                        <completer-list-item class=\"completer-title\" [text]=\"item.title\" [matchClass]=\"matchClass\" [searchStr]=\"searchStr\" [type]=\"'title'\"></completer-list-item>\n                        <completer-list-item *ngIf=\"item.description && item.description != ''\" class=\"completer-description\" [text]=\"item.description\"\n                            [matchClass]=\"matchClass\" [searchStr]=\"searchStr\" [type]=\"'description'\">\n                        </completer-list-item>\n                    </p>\n                </div>\n            </md-list-item>\n        </md-list>\n    </div>\n</div>"

/***/ },

/***/ 868:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n    <h1>Completer Material</h1>\n    <p>This is a demo of a custom component that uses Ng2-Completer directives to create a material2 autocomplete component.</p>\n    <p>To use this compnent copy all completer-cmp-md files from the demo code</p>\n</div>\n<h2>Local data with image</h2>\n<div class=\"row completer-wrapper m-a-1\">\n    <div class=\"col-md-offset-1\">\n        <div class=\"row\">\n            <p>Local data of countries - using image, matchClass and maxLength</p>\n        </div>\n        <div class=\"row\">\n            <ng2-completer-md [(ngModel)]=\"countryName\" [dataService]=\"dataService\" [minSearchLength]=\"0\" [maxChars]=\"4\" [placeholder]=\"'search country'\"\n                [matchClass]=\"'match'\">\n            </ng2-completer-md>\n        </div>\n        <div class=\"row\">\n            <p>Selected country: {{countryName}}</p>\n        </div>\n    </div>\n</div>\n"

/***/ },

/***/ 869:
/***/ function(module, exports) {

module.exports = "/*\n * Top navigation\n * Hide default border to remove 1px line.\n */\n.navbar-fixed-top {\n  border: 0;\n}\n\n/*\n * Main content\n */\n\n.main {\n  padding: 5rem;\n}\n\n.completer-wrapper {\n    border-radius: 25px;\n    background: lightgray;\n}\n\n:host >>> .match {\n  color: orangered;\n}"

/***/ },

/***/ 87:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var completer_base_data_1 = __webpack_require__(86);
var LocalData = (function (_super) {
    __extends(LocalData, _super);
    function LocalData() {
        _super.call(this);
    }
    LocalData.prototype.data = function (data) {
        this._data = data;
        return this;
    };
    LocalData.prototype.search = function (term) {
        var matches = this.extractMatches(this._data, term);
        this.next(this.processResults(matches, term));
    };
    LocalData = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], LocalData);
    return LocalData;
}(completer_base_data_1.CompleterBaseData));
exports.LocalData = LocalData;


/***/ },

/***/ 870:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n    <h1>Completer Native</h1>\n</div>\n<h2>Local data with image</h2>\n<div class=\"row completer-wrapper m-a-1\">\n    <div class=\"col-md-offset-1\">\n        <div class=\"row\">\n            <p>Local data of countries - using image, matchClass and maxLength</p>\n        </div>\n        <div class=\"row\">\n            <ng2-completer [(ngModel)]=\"countryName\" [dataService]=\"dataService\" [minSearchLength]=\"0\" [maxChars]=\"4\" [placeholder]=\"'search country'\"\n                [matchClass]=\"'match'\">\n            </ng2-completer>\n        </div>\n        <div class=\"row\">\n            <p>Selected country: {{countryName}}</p>\n        </div>\n    </div>\n</div>\n<h2>Local data with description</h2>\n<div class=\"row completer-wrapper m-a-1\">\n    <div class=\"col-md-offset-1\">\n        <div class=\"row\">\n            <p>Local data of quotes - using desription, textNoResults, matchClass and selected event</p>\n        </div>\n        <div class=\"row\">\n            <ng2-completer [dataService]=\"dataService2\" (selected)=\"onQuoteSelected($event)\" [minSearchLength]=\"0\" [placeholder]=\"'search quote by author name'\"\n                [textNoResults]=\"'No quotes found'\" [matchClass]=\"'match'\">\n            </ng2-completer>\n        </div>\n        <div class=\"row\">\n            <p>Quote: {{quote}}</p>\n        </div>\n    </div>\n</div>\n\n<h2>Remote data</h2>\n<div class=\"row completer-wrapper m-a-1\">\n    <div class=\"col-md-offset-1\">\n        <div class=\"row\">\n            <p>Remote data of countries with minSearchLength, textSearching and clearSelected</p>\n        </div>\n        <div class=\"row\">\n            <ng2-completer [dataService]=\"dataRemote\" [minSearchLength]=\"3\" [placeholder]=\"'search country'\" [clearSelected]=\"true\" (selected)=\"onCountrySelected($event)\"\n                [textSearching]=\"'Please wait...'\">\n            </ng2-completer>\n        </div>\n        <div class=\"row\">\n            <p>Selected country: {{countryName2}}</p>\n        </div>\n    </div>\n</div>\n\n<h2>Input disabled</h2>\n<div class=\"row completer-wrapper m-a-1\">\n    <div class=\"col-md-offset-1\">\n        <div class=\"row\">\n            <p>Local data of countries - overrideSuggested, inputDisabled and fieldTabindex</p>\n        </div>\n        <div class=\"row\">\n            <ng2-completer [(ngModel)]=\"countryName3\" [dataService]=\"dataService3\" [minSearchLength]=\"0\" [placeholder]=\"'search country'\"\n                [overrideSuggested]=\"true\" [disableInput]=\"searchcb\" [fieldTabindex]=\"-1\">\n            </ng2-completer>\n        </div>\n        <div class=\"row\">\n            <p>Selected: {{countryName3}}</p>\n        </div>\n        <div class=\"row\">\n            <label>Disable search</label>\n            <input type=\"checkbox\" [(ngModel)]=\"searchcb\" />\n        </div>\n    </div>\n</div>\n\n<h2>Automatch</h2>\n<div class=\"row completer-wrapper m-a-1\">\n    <div class=\"col-md-offset-1\">\n        <form>\n            <div class=\"row\">\n                <p>Local data of countries - autoMatch and required</p>\n            </div>\n            <div class=\"row\">\n                <ng2-completer name=\"countryRequired\" [dataService]=\"dataService4\" [(ngModel)]=\"countryName4\" [minSearchLength]=\"0\" [placeholder]=\"'search country'\"\n                    #countryRequired=\"ngModel\" [autoMatch]=\"true\" required>\n                </ng2-completer>\n                <div [hidden]=\"countryRequired.valid\" class=\"col-md-6 alert alert-danger\">\n                    Country is required\n                </div>\n            </div>\n            <div class=\"row\">\n                <p>Selected: {{countryName4}}</p>\n            </div>\n        </form>\n    </div>\n</div>\n\n<h2>Remote data with URL Formater and Headers</h2>\n<div class=\"row completer-wrapper m-a-1\">\n    <div class=\"col-md-offset-1\">\n        <div class=\"row\">\n            <p>Remote data from <a href=\"https://developers.google.com/maps/documentation/geocoding/start\">Google Maps API</a>                - urlFormater, dataField, and headers</p>\n        </div>\n        <div class=\"row\">\n            <ng2-completer [(ngModel)]=\"countryName5\" [dataService]=\"dataRemote2\" [minSearchLength]=\"3\" [placeholder]=\"'search country'\"\n                [textSearching]=\"'Please wait...'\">\n            </ng2-completer>\n        </div>\n        <div class=\"row\">\n            <p>Selected country: {{countryName5}}</p>\n        </div>\n    </div>\n</div>\n\n<h2>Custom data provider</h2>\n<div class=\"row completer-wrapper m-a-1\">\n    <div class=\"col-md-offset-1\">\n        <div class=\"row\">\n            <p>Custom data provider. Seinfeld episodes data from <a href=\"https://mysafeinfo.com/\">mysafeinfo.com</a></p>\n        </div>\n        <div class=\"row\">\n            <ng2-completer [(ngModel)]=\"seinfeldEpisode\" [dataService]=\"customData\" [minSearchLength]=\"3\" [placeholder]=\"'search Seinfeld episode'\"\n                [textSearching]=\"'Please wait...'\">\n            </ng2-completer>\n        </div>\n        <div class=\"row\">\n            <p>Selected episode: {{seinfeldEpisode}}</p>\n        </div>\n    </div>\n</div>"

/***/ },

/***/ 88:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var http_1 = __webpack_require__(49);
__webpack_require__(139);
__webpack_require__(100);
var completer_base_data_1 = __webpack_require__(86);
var RemoteData = (function (_super) {
    __extends(RemoteData, _super);
    function RemoteData(http) {
        _super.call(this);
        this.http = http;
        this._urlFormater = null;
        this._dataField = null;
    }
    RemoteData.prototype.remoteUrl = function (remoteUrl) {
        this._remoteUrl = remoteUrl;
        return this;
    };
    RemoteData.prototype.urlFormater = function (urlFormater) {
        this._urlFormater = urlFormater;
    };
    RemoteData.prototype.dataField = function (dataField) {
        this._dataField = dataField;
    };
    RemoteData.prototype.headers = function (headers) {
        this._headers = headers;
    };
    RemoteData.prototype.search = function (term) {
        var _this = this;
        this.cancel();
        // let params = {};
        var url = "";
        if (this._urlFormater) {
            url = this._urlFormater(term);
        }
        else {
            url = this._remoteUrl + encodeURIComponent(term);
        }
        this.remoteSearch = this.http.get(url, { headers: this._headers || new http_1.Headers() })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var matchaes = _this.extractValue(data, _this._dataField);
            return _this.extractMatches(matchaes, term);
        })
            .map(function (matches) {
            var results = _this.processResults(matches, term);
            _this.next(results);
            return results;
        })
            .catch(function (err) {
            _this.error(err);
            return null;
        })
            .subscribe();
    };
    RemoteData.prototype.cancel = function () {
        if (this.remoteSearch) {
            this.remoteSearch.unsubscribe();
        }
    };
    return RemoteData;
}(completer_base_data_1.CompleterBaseData));
exports.RemoteData = RemoteData;


/***/ },

/***/ 89:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = __webpack_require__(0);
var ctr_completer_1 = __webpack_require__(40);
var CtrRowItem = (function () {
    function CtrRowItem(row, index) {
        this.row = row;
        this.index = index;
    }
    return CtrRowItem;
}());
exports.CtrRowItem = CtrRowItem;
var CtrDropdown = (function () {
    function CtrDropdown(completer, el) {
        this.completer = completer;
        this.el = el;
        this.rows = [];
        this.completer.registerDropdown(this);
    }
    CtrDropdown.prototype.ngOnInit = function () {
        var css = getComputedStyle(this.el.nativeElement);
        this.isScrollOn = css.maxHeight && css.overflowY === "auto";
    };
    CtrDropdown.prototype.ngOnDestroy = function () {
        this.completer.registerDropdown(null);
    };
    CtrDropdown.prototype.registerRow = function (row) {
        this.rows.push(row);
    };
    CtrDropdown.prototype.highlightRow = function (index) {
        var highlited = this.rows.find(function (row) { return row.index === index; });
        if (index < 0) {
            if (this.currHighlited) {
                this.currHighlited.row.setHighlited(false);
            }
            this.currHighlited = undefined;
            return;
        }
        if (!highlited) {
            return;
        }
        if (this.currHighlited) {
            this.currHighlited.row.setHighlited(false);
        }
        this.currHighlited = highlited;
        this.currHighlited.row.setHighlited(true);
        this.completer.onHighlighted(this.currHighlited.row.getDataItem());
    };
    CtrDropdown.prototype.clear = function () {
        this.rows = [];
    };
    CtrDropdown.prototype.onSelected = function (item) {
        this.completer.onSelected(item);
    };
    CtrDropdown.prototype.selectCurrent = function () {
        if (this.currHighlited) {
            this.onSelected(this.currHighlited.row.getDataItem());
        }
        else if (this.rows.length > 0) {
            this.onSelected(this.rows[0].row.getDataItem());
        }
    };
    CtrDropdown.prototype.nextRow = function () {
        var nextRowIndex = 0;
        if (this.currHighlited) {
            nextRowIndex = this.currHighlited.index + 1;
        }
        this.highlightRow(nextRowIndex);
        if (this.isScrollOn && this.currHighlited) {
            var row = this.currHighlited.row.getNativeElement();
            if (this.dropdownHeight() < row.getBoundingClientRect().bottom) {
                this.dropdownScrollTopTo(this.dropdownRowOffsetHeight(row));
            }
        }
    };
    CtrDropdown.prototype.prevRow = function () {
        var nextRowIndex = -1;
        if (this.currHighlited) {
            nextRowIndex = this.currHighlited.index - 1;
        }
        this.highlightRow(nextRowIndex);
        if (this.isScrollOn && this.currHighlited) {
            var rowTop = this.dropdownRowTop();
            if (rowTop < 0) {
                this.dropdownScrollTopTo(rowTop - 1);
            }
        }
    };
    CtrDropdown.prototype.dropdownScrollTopTo = function (offset) {
        this.el.nativeElement.scrollTop = this.el.nativeElement.scrollTop + offset;
    };
    CtrDropdown.prototype.dropdownRowTop = function () {
        return this.currHighlited.row.getNativeElement().getBoundingClientRect().top -
            (this.el.nativeElement.getBoundingClientRect().top +
                parseInt(getComputedStyle(this.el.nativeElement).paddingTop, 10));
    };
    CtrDropdown.prototype.dropdownHeight = function () {
        return this.el.nativeElement.getBoundingClientRect().top +
            parseInt(getComputedStyle(this.el.nativeElement).maxHeight, 10);
    };
    CtrDropdown.prototype.dropdownRowOffsetHeight = function (row) {
        var css = getComputedStyle(row);
        return row.offsetHeight +
            parseInt(css.marginTop, 10) + parseInt(css.marginBottom, 10);
    };
    CtrDropdown = __decorate([
        core_1.Directive({
            selector: "[ctrDropdown]",
        }),
        __param(0, core_1.Host()), 
        __metadata('design:paramtypes', [ctr_completer_1.CtrCompleter, core_1.ElementRef])
    ], CtrDropdown);
    return CtrDropdown;
}());
exports.CtrDropdown = CtrDropdown;


/***/ }

},[1132]);