"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Directories = void 0;
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const ink_syntax_highlight_1 = __importDefault(require("ink-syntax-highlight"));
const Directories = ({ file }) => {
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ink_1.Box, { justifyContent: 'flex-end', alignItems: 'center', width: '40%', height: '60%' },
            react_1.default.createElement(ink_1.Text, { wrap: 'truncate', italic: true },
                react_1.default.createElement(ink_syntax_highlight_1.default, { code: file, theme: 'dracula' }))));
};
exports.Directories = Directories;
