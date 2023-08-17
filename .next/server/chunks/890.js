"use strict";
exports.id = 890;
exports.ids = [890];
exports.modules = {

/***/ 8179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1313);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/erdemhho/Documents/omreon/hes-otomotiv-user-interface/components/productCard/index.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 9381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7887);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4834);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



function SideMenu({ data, seri, araba, kategori }) {
    const categories = data.categories;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mt-5 text-center sideMenu",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: "sideMenu1",
                children: categories.map((item)=>{
                    let url = `/urunler/${item.slug}`;
                    if (seri && !araba && !kategori) {
                        url = `/urunler/${seri}/${item.slug}`;
                    } else if (seri && araba && !kategori) {
                        url = `/urunler/${seri}/${araba}/${item.slug}`;
                    } else if (seri && araba && kategori) {
                        url = `/urunler/${seri}/${araba}/${item.slug}`;
                    } else {
                        url = `/urunler/${item.slug}`;
                    }
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: url,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "list-group-item menuButton",
                            children: item.name
                        })
                    }, item._id);
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "dropdown sideMenu2 d-lg-none ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        className: "btn btn-outline-dark",
                        href: "/urunler",
                        role: "button",
                        "data-bs-toggle": "dropdown",
                        "aria-expanded": "false",
                        children: "KATEGORİ SE\xc7İNİZ"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: "dropdown-menu",
                        children: categories.map((item)=>{
                            let url = `/urunler/${item.slug}`;
                            if (seri && !araba && !kategori) {
                                url = `/urunler/${seri}/${item.slug}`;
                            } else if (seri && araba && !kategori) {
                                url = `/urunler/${seri}/${araba}/${item.slug}`;
                            } else if (seri && araba && kategori) {
                                url = `/urunler/${seri}/${araba}/${item.slug}`;
                            } else {
                                url = `/urunler/${item.slug}`;
                            }
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: url,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "dropdown-item",
                                    children: item.name
                                })
                            }, item._id);
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideMenu);


/***/ })

};
;