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
Object.defineProperty(exports, "__esModule", { value: true });
exports.readFile = void 0;
const react_1 = __importStar(require("react"));
const directoryState_1 = require("../state/directoryState");
const fileBufferState_1 = require("../state/fileBufferState");
const appendFileState_1 = require("../state/appendFileState");
const fs = __importStar(require("fs"));
const readFile = () => {
    const setFile = (0, fileBufferState_1.fileBufferState)((state) => state.setFile);
    const reading = ({ path }) => {
        fs.readFile(path, (error, data) => {
            if (error) {
                throw error;
            }
            setFile(data.toString());
        });
    };
    (0, react_1.useEffect)(() => {
        const unsubscribeAppendFile = appendFileState_1.appendFileState.subscribe((state) => state.appendFile, (value) => {
            reading({ path: `${value}` });
        });
        const unsubscribeDirectory = directoryState_1.directoryState.subscribe((state) => state.directory, () => {
        });
        return () => {
            unsubscribeAppendFile();
            unsubscribeDirectory();
        };
    }, []);
    return react_1.default.createElement(react_1.default.Fragment, null);
};
exports.readFile = readFile;
