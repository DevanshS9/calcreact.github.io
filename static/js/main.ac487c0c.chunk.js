(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{14:function(_,e,t){},16:function(_,e,t){"use strict";t.r(e);var a=t(3),c=t.n(a),r=(t(14),t(4)),s=t(0);var l=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(r.a,{})})};c.a.createRoot(document.getElementById("root")).render(Object(s.jsx)(l,{}))},4:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Calculator}));var F_reactcourseCodingBlocks_Calculator091022_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);function Calculator(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(F_reactcourseCodingBlocks_Calculator091022_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),val=_useState2[0],setVal=_useState2[1],handleValue=function(_){setVal(val+_.target.value)},clearValues=function(){try{setVal("")}catch(_){setVal("")}},handleCalculation=function handleCalculation(){try{setVal(eval(val))}catch(_unused2){setVal("Error")}},backSpace=function(){try{setVal(val.slice(0,-1))}catch(_){setVal("Error")}};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"container text-center",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"row my-5",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"col-md-5 offset-md-4",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"card border-primary",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{type:"text",className:"form-control",value:val}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"row my-1",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"col-3",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"btn btn-primary",value:"1",onClick:handleValue,children:"1"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"col-3",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"btn btn-primary",value:"2",onClick:handleValue,children:"2"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"col-3",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"btn btn-primary",value:"3",onClick:handleValue,children:"3"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"col-3",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"btn btn-primary",value:"AC",onClick:clearValues,children:"Ac"})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"row my-1",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"col-3",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"btn btn-primary",value:"4",onClick:handleValue,children:"4"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"col-3",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"btn btn-primary",value:"5",onClick:handleValue,children:"5"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"col-3",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"btn btn-primary",value:"6",onClick:handleValue,children:"6"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"col-3",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"btn btn-primary",value:"+",onClick:handleValue,children:"+"})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"row my-1",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"col-3",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"btn btn-primary",value:"7",onClick:handleValue,children:"7"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"col-3",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"btn btn-primary",value:"8",onClick:handleValue,children:"8"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"col-3",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"btn btn-primary",value:"9",onClick:handleValue,children:"9"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"col-3",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"btn btn-primary",value:"*",onClick:handleValue,children:"X"})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"row my-1",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"col-3",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"btn btn-primary",value:".",onClick:handleValue,children:"."})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"col-3",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"btn btn-primary",value:"0",onClick:handleValue,children:"0"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"col-3",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"btn btn-primary",value:"/",onClick:handleValue,children:"/"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"col-3",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"btn btn-primary",value:"=",onClick:handleCalculation,children:"="})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"col-3",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"btn btn-primary",value:"backspace",onClick:backSpace,children:"Del"})})]})})})})}}},[[16,1,2]]]);
//# sourceMappingURL=main.ac487c0c.chunk.js.map