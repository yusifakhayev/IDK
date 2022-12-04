"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const ink_gradient_1 = __importDefault(require("ink-gradient"));
const search = () => {
    return (react_1.default.createElement(ink_1.Box, { flexDirection: "column", justifyContent: "center", alignItems: "center", width: '100%', height: '100%' },
        react_1.default.createElement(ink_1.Box, null,
            react_1.default.createElement(ink_gradient_1.default, { name: 'retro' },
                react_1.default.createElement(ink_1.Text, { bold: true }, "Search"))),
        react_1.default.createElement(ink_1.Box, null)));
};
exports.search = search;
