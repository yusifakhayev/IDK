"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const ink_1 = require("ink");
const ink_spinner_1 = __importDefault(require("ink-spinner"));
const Testing = () => {
    const [value, setValue] = (0, react_1.useState)('');
    const sleep = (ms) => {
        return new Promise(r => setTimeout(r, ms));
    };
    const beckon = async () => {
        await sleep(2000);
        setValue('loaded');
    };
    const Fallback = () => react_1.default.createElement(ink_1.Text, null,
        " ",
        react_1.default.createElement(ink_1.Text, { color: 'green' },
            " ",
            react_1.default.createElement(ink_spinner_1.default, { type: 'dots' }),
            " "),
        " ",
        'loading');
    (0, react_1.useEffect)(() => {
        beckon();
    }, []);
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ink_1.Box, null,
            react_1.default.createElement(ink_1.Text, null, value ? value : react_1.default.createElement(Fallback, null))));
};
module.exports = Testing;
exports.default = Testing;
