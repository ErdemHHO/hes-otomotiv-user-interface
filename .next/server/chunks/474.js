exports.id = 474;
exports.ids = [474];
exports.modules = {

/***/ 6100:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7013))

/***/ }),

/***/ 598:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7649, 23))

/***/ }),

/***/ 8643:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7977, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5845));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2108))

/***/ }),

/***/ 3259:
/***/ (() => {



/***/ }),

/***/ 7013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8421);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function error() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "error",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "d-flex justify-content-center text-center m-3",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    src: "/images/logos/HES-OTOMOTIV-LOGO.png",
                    alt: "Logo",
                    width: 170,
                    height: 120
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "d-flex justify-content-center text-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: "fw-1",
                    children: "BİR HATA OLUŞTU"
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (error);


/***/ }),

/***/ 2108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9722);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const ScrollButton = ()=>{
    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const toggleVisibility = ()=>{
        if (window.pageYOffset > 100 && window.innerWidth > 576) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.addEventListener("scroll", toggleVisibility);
        return ()=>{
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `position-fixed ${isVisible ? "visible" : "invisible"}`,
        style: {
            right: "15px",
            bottom: "15px"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            onClick: scrollToTop,
            className: "btn btn-warning p-2 rounded-circle",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__/* .AiOutlineArrowUp */ .y1n, {
                size: 30
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollButton);


/***/ }),

/***/ 5845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ navbar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(8421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/navbar/styles.module.css
var styles_module = __webpack_require__(5416);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9483);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./components/navbarSearchInput/index.js
/* __next_internal_client_entry_do_not_use__ default auto */ 


function NavbarSearchInput() {
    const router = (0,navigation.useRouter)();
    const [query, setQuery] = (0,react_.useState)("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        router.push(`/arama?q=${query}`);
    };
    const handleChange = (e)=>{
        setQuery(e.target.value);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
            onSubmit: handleSubmit,
            className: "d-flex",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    className: "form-control me-2",
                    type: "search",
                    placeholder: "\xdcr\xfcn Arayın",
                    "aria-label": "Search",
                    value: query,
                    onChange: handleChange
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "btn btn-outline-primary",
                    children: "Ara"
                })
            ]
        })
    });
}
/* harmony default export */ const navbarSearchInput = (NavbarSearchInput);

;// CONCATENATED MODULE: ./components/navbar/index.js
/* __next_internal_client_entry_do_not_use__ default auto */ 




function HNavbar() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (styles_module_default()).navbar,
        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            className: "navbar navbar-expand-lg px-5",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container-fluid",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        className: "navbar-brand",
                        href: "/",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/images/logos/HES-OTOMOTIV-LOGO.png",
                                alt: "Logo",
                                className: (styles_module_default()).logo,
                                width: 90,
                                height: 60
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: (styles_module_default()).baslik1,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                        children: "HES OTOMOTİV"
                                    }),
                                    " "
                                ]
                            }),
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (styles_module_default()).baslik2,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                    children: "BMW MINI YEDEK PAR\xc7ALARI"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "navbar-toggler",
                        type: "button",
                        "data-bs-toggle": "collapse",
                        "data-bs-target": "#navbarSupportedContent",
                        "aria-controls": "navbarSupportedContent",
                        "aria-expanded": "false",
                        "aria-label": "Toggle navigation",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "navbar-toggler-icon"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "collapse navbar-collapse",
                        id: "navbarSupportedContent",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "navbar-nav me-auto mb-2 mb-lg-0",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "nav-item",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: `${(styles_module_default()).navLink} nav-link`,
                                                children: "Anasayfa"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "nav-item",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/hakkimizda",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: `${(styles_module_default()).navLink} nav-link`,
                                                children: "Hakkımızda"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "nav-item",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/iletisim",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: `${(styles_module_default()).navLink} nav-link`,
                                                children: "İletişim"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "nav-item",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/urunler",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: `${(styles_module_default()).navLink} nav-link`,
                                                children: "\xdcr\xfcnlerimiz"
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(navbarSearchInput, {})
                        ]
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const navbar = (HNavbar);


/***/ }),

/***/ 2867:
/***/ ((module) => {

// Exports
module.exports = {
	"footerContainer": "styles_footerContainer___t_eM",
	"logoFooter": "styles_logoFooter__91mKg",
	"textPrimary": "styles_textPrimary__oiRIg",
	"whatsapp": "styles_whatsapp__PTcUv",
	"instagram": "styles_instagram__Hmppq",
	"sahibinden": "styles_sahibinden__uQS4b",
	"facebook": "styles_facebook__7RHwC",
	"icon": "styles_icon__D_BVz",
	"designedBy": "styles_designedBy__CAe_2"
};


/***/ }),

/***/ 6660:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "styles_header__5in9c",
	"icon": "styles_icon__MPrXD",
	"icon2": "styles_icon2__PGDRW",
	"logo2": "styles_logo2__z_FBh",
	"stideOn": "styles_stideOn__xqsDy"
};


/***/ }),

/***/ 5416:
/***/ ((module) => {

// Exports
module.exports = {
	"baslik2": "styles_baslik2__xFCb9",
	"baslik1": "styles_baslik1__qJ5KJ",
	"navbar": "styles_navbar__AbjxM",
	"icon": "styles_icon__45j4P",
	"navLink": "styles_navLink__k2UpL",
	"whatsapp": "styles_whatsapp__959TJ",
	"logo": "styles_logo__MTTra",
	"slideIn": "styles_slideIn__Tfj0S"
};


/***/ }),

/***/ 8036:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1313);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/erdemhho/Documents/omreon/hes-otomotiv-user-interface/app/error.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 8489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./styles/reset.css
var styles_reset = __webpack_require__(5280);
// EXTERNAL MODULE: ./styles/variables.css
var variables = __webpack_require__(3023);
// EXTERNAL MODULE: ./styles/global.css
var global = __webpack_require__(8640);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var index_esm = __webpack_require__(7606);
// EXTERNAL MODULE: ./components/header/styles.module.css
var styles_module = __webpack_require__(6660);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(4834);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/header/index.js




function Header() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: `${(styles_module_default()).header} header p-1 text-white `,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container d-none d-xl-flex justify-content-between ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "d-flex",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/images/brands/bmw.png",
                                    alt: "HES-OTOMOTIV",
                                    className: (styles_module_default()).logo2,
                                    height: 60,
                                    width: 65
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/images/brands/mini.png",
                                    alt: "HES-OTOMOTIV",
                                    className: (styles_module_default()).logo2,
                                    height: 60,
                                    width: 154
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "d-flex justify-content-between",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "d-flex justify-content-between mx-3",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaPhoneAlt */.DNl, {
                                            className: (styles_module_default()).icon
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "m-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: (styles_module_default()).text,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "tel:+905322409058",
                                                        className: "link",
                                                        target: "_blank",
                                                        children: "+ 90 532 240 90 58"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: `${(styles_module_default()).text} ${(styles_module_default()).textTel}`,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "tel:+902166301616",
                                                        className: "link",
                                                        target: "_blank",
                                                        children: "0 (216) 630 16 16"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "d-flex justify-content-between mx-3",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "https://goo.gl/maps/7noGMW1iSryeCF9u6",
                                    className: "link",
                                    target: "_blank",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "d-flex",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaMapMarkedAlt */.rB_, {
                                                    className: (styles_module_default()).icon
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "m-2",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: (styles_module_default()).text,
                                                    children: [
                                                        " G\xfcmr\xfck\xe7\xfcler Sanayi Sitesi ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        " A Blok No:26 \xdcmraniye / İstanbul"
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "d-flex justify-content-between mx-3",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "mailto:hesotomotiv34@gmail.com?subject=%C3%9Cr%C3%BCnleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.",
                                    className: "link",
                                    target: "_blank",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "d-flex",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaMailBulk */.KKr, {
                                                    className: (styles_module_default()).icon
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "m-2",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: (styles_module_default()).text,
                                                    children: "hesotomotiv34@gmail.com"
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container d-flex d-xl-none justify-content-between ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mt-2",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "d-flex",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/images/brands/bmw.png",
                                    alt: "HES-OTOMOTIV",
                                    className: (styles_module_default()).logo2,
                                    height: 40,
                                    width: 40
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/images/brands/mini.png",
                                    alt: "HES-OTOMOTIV",
                                    className: (styles_module_default()).logo2,
                                    height: 40,
                                    width: 75
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "d-flex mt-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "https://api.whatsapp.com/send/?phone=%2B905322409058&text=Merhaba%21++%C3%9Cr%C3%BCnleriniz+hakk%C4%B1nda+bilgi+almak+istiyorum.&type=phone_number&app_absent=0",
                                target: "_blank",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaWhatsapp */.xpo, {
                                        className: (styles_module_default()).icon2
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "https://www.facebook.com/hesotomotiv34/",
                                target: "_blank",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaFacebook */.Am9, {
                                        className: (styles_module_default()).icon2
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "https://www.instagram.com/hesotomotiv34/",
                                target: "_blank",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaInstagram */.Zf_, {
                                        className: (styles_module_default()).icon2
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const header = (Header);

// EXTERNAL MODULE: ./node_modules/react-icons/si/index.esm.js
var si_index_esm = __webpack_require__(6944);
// EXTERNAL MODULE: ./components/footer/styles.module.css
var footer_styles_module = __webpack_require__(2867);
var footer_styles_module_default = /*#__PURE__*/__webpack_require__.n(footer_styles_module);
;// CONCATENATED MODULE: ./components/footer/index.js





function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (footer_styles_module_default()).footerContainer,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `${(footer_styles_module_default()).bgFooter}  ${(footer_styles_module_default()).bgFooter} text-center p-5 text-white footer mt-5`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-md-4",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/images/logos/HES-OTOMOTIV-LOGO1-1.svg",
                                                alt: "HES-OTOMOTIV-LOGO",
                                                className: (footer_styles_module_default()).logoFooter,
                                                width: 150,
                                                height: 150
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "col-md-8",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    className: (footer_styles_module_default()).baslik1,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                        children: "HES OTOMOTİV"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                    className: (footer_styles_module_default()).baslik2,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                            children: "BMW MINI COOPER YEDEK PAR\xc7ALARI"
                                                        }),
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: (footer_styles_module_default()).textPrimary,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                            href: "https://api.whatsapp.com/send/?phone=%2B905322409058&text=Merhaba%21++%C3%9Cr%C3%BCnleriniz+hakk%C4%B1nda+bilgi+almak+istiyorum.&type=phone_number&app_absent=0",
                                                            target: "_blank",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaWhatsapp */.xpo, {
                                                                    size: 32,
                                                                    className: `${(footer_styles_module_default()).icon} ${(footer_styles_module_default()).whatsapp}`
                                                                }),
                                                                " ",
                                                                "   "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                            href: "https://www.facebook.com/hesotomotiv34/",
                                                            target: "_blank",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaFacebookF */.tBk, {
                                                                    size: 32,
                                                                    className: `${(footer_styles_module_default()).icon} ${(footer_styles_module_default()).facebook}`
                                                                }),
                                                                " ",
                                                                "   "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                            href: "https://www.instagram.com/hesotomotiv34/",
                                                            target: "_blank",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaInstagram */.Zf_, {
                                                                    size: 32,
                                                                    className: `${(footer_styles_module_default()).icon} ${(footer_styles_module_default()).instagram}`
                                                                }),
                                                                " ",
                                                                "   "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "https://api.whatsapp.com/send/?phone=%2B905322409058&text=Merhaba%21++%C3%9Cr%C3%BCnleriniz+hakk%C4%B1nda+bilgi+almak+istiyorum.&type=phone_number&app_absent=0",
                                                            target: "_blank",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(si_index_esm/* SiSahibinden */.jwi, {
                                                                size: 32,
                                                                className: `${(footer_styles_module_default()).icon} ${(footer_styles_module_default()).sahibinden}`
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-md-3",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: "border-bottom border-white",
                                        children: "Kurumsal"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/hakkimizda",
                                                    className: "link",
                                                    children: "Hakkımızda"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/iletisim",
                                                    className: "link",
                                                    children: "İletişim"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/hakkimizda",
                                                    className: "link",
                                                    children: "Vizyon"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-md-3",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: "border-bottom border-white",
                                        children: "TESLİMAT & İADE"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/teslimat",
                                                    className: "link",
                                                    children: "Teslimat Bilgileri"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/teslimat",
                                                    className: "link",
                                                    children: "İade & Değişim"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                "Designed By |",
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: `https://github.com/ErdemHHO`,
                        className: `${(footer_styles_module_default()).designedBy} m-1`,
                        target: "_blank",
                        children: "Erdem Hacıhasanoğlu"
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const footer = (Footer);

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1313);
;// CONCATENATED MODULE: ./components/navbar/index.js

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/erdemhho/Documents/omreon/hes-otomotiv-user-interface/components/navbar/index.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const navbar = (__default__);
;// CONCATENATED MODULE: ./components/ScrollButton/index.js

const ScrollButton_proxy = (0,module_proxy.createProxy)(String.raw`/Users/erdemhho/Documents/omreon/hes-otomotiv-user-interface/components/ScrollButton/index.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: ScrollButton_esModule, $$typeof: ScrollButton_$$typeof } = ScrollButton_proxy;
const ScrollButton_default_ = ScrollButton_proxy.default;


/* harmony default export */ const ScrollButton = (ScrollButton_default_);
;// CONCATENATED MODULE: ./app/layout.js








function RootLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        lang: "tr",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("head", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "UTF-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "HES OTOMOTİV | BMW ve MINI Otomotiv Yedek Par\xe7aları"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: "width=device-width, initial-scale=1",
                        name: "viewport"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "keywords",
                        content: "BMW, MINI, Mini Cooper, BMW F10, BMW F20 , BMW F30, otomotiv yedek par\xe7a, orijinal par\xe7alar, yedek par\xe7a mağazası, otomobil aksesuarları"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "BMW ve MINI otomobilleriniz i\xe7in orijinal ve y\xfcksek kaliteli yedek par\xe7alar ve aksesuarlar. Geniş \xfcr\xfcn yelpazemizle sizlere hizmet veriyoruz"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "robots",
                        content: "index, follow"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "language",
                        content: "Turkish"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "author",
                        content: "HES OTOMOTİV"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "revisit-after",
                        content: "7 days"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: "HES OTOMOTİV | BMW ve MINI Otomotiv Yedek Par\xe7aları"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: "BMW ve MINI otomobilleriniz i\xe7in orijinal ve y\xfcksek kaliteli yedek par\xe7alar ve aksesuarlar. Geniş \xfcr\xfcn yelpazemizle sizlere hizmet veriyoruz."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: "https://hes-otomotiv.com/images/logos/HES-OTOMOTIV-LOGO.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:url",
                        content: "https://www.hes-otomotiv.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        httpEquiv: "Content-Security-Policy",
                        content: "upgrade-insecure-requests"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/images/logos/hes-otomotiv-logo-1-2.png"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(header, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(navbar, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(ScrollButton, {}),
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(footer, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",
                        integrity: "sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz",
                        crossOrigin: "anonymous"
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 3765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7887);


function Loading() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "loadingCom",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            src: "/gif/loadingGif.gif",
            alt: "loading",
            className: "loading"
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);


/***/ }),

/***/ 6233:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7887);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(993);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);



function NotFound() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "error",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "d-flex justify-content-center text-center m-3",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    src: "/images/logos/HES-OTOMOTIV-LOGO.png",
                    alt: "Logo",
                    width: 170,
                    height: 120
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "d-flex justify-content-center text-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: "fw-1",
                    children: "SAYFA BULUNAMADI"
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);


/***/ }),

/***/ 3174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3180);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 8640:
/***/ (() => {



/***/ }),

/***/ 5280:
/***/ (() => {



/***/ }),

/***/ 3023:
/***/ (() => {



/***/ })

};
;