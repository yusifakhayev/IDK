"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Directories = void 0;
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const readFile_1 = require("../subprocesses/readFile");
const Directories = () => {
    (0, readFile_1.readFile)('/home/yusif/Code/CLI/ink/idk/package.json');
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ink_1.Text, null, "gay"));
};
exports.Directories = Directories;
