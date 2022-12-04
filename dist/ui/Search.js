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
exports.Search = void 0;
const react_1 = __importStar(require("react"));
const ink_1 = require("ink");
const ink_gradient_1 = __importDefault(require("ink-gradient"));
const ink_text_input_1 = __importDefault(require("ink-text-input"));
const ink_select_input_1 = __importDefault(require("ink-select-input"));
const searchState_1 = require("../state/searchState");
const refreshState_1 = require("../state/refreshState");
const fuzzaldrin_1 = __importDefault(require("fuzzaldrin"));
const fast_glob_1 = __importDefault(require("fast-glob"));
const child_process_1 = __importDefault(require("child_process"));
const childProcessHandler_1 = require("../subprocesses/childProcessHandler");
const Search = () => {
    const search = (0, searchState_1.searchState)((state) => state.search);
    const [query, setQuery] = (0, react_1.useState)('');
    const [files, setFiles] = (0, react_1.useState)([]);
    const [directory, setDirectory] = (0, react_1.useState)('');
    //@ts-ignore
    const [reload, setReload] = (0, react_1.useState)(0);
    const fuzzyFind = async () => {
        const files = fast_glob_1.default.sync('**/*', { ignore: ['**/node_modules/**/*', '**/package-lock.json/**'] });
        //@ts-ignore
        setFiles(files);
    };
    const searchResults = fuzzaldrin_1.default.filter(files, query).map(file => ({
        label: file,
        value: file
    }));
    //@ts-ignore
    const callHandleSelection = (searchResult) => {
        (0, childProcessHandler_1.handleSelection)(searchResult, directory);
    };
    const getDirectory = () => {
        child_process_1.default.exec('pwd', (error, stdout, stderr) => {
            if (error) {
                console.log(error);
            }
            if (stderr) {
                console.log(stderr);
            }
            setDirectory(stdout);
        });
    };
    (0, react_1.useEffect)(() => {
        search ? fuzzyFind() : null;
        search ? getDirectory() : null;
        const unsubscribeRefresh = refreshState_1.refreshState.subscribe((state) => state.refresh, (value) => {
            console.log(value);
        });
        return () => {
            unsubscribeRefresh();
            fuzzyFind();
            getDirectory();
        };
    }, []);
    return react_1.default.createElement(react_1.default.Fragment, null, search
        ?
            react_1.default.createElement(ink_1.Box, null,
                react_1.default.createElement(ink_1.Box, { borderStyle: 'single', borderColor: '#5f8787', width: "100%", height: "30%" },
                    react_1.default.createElement(ink_gradient_1.default, { name: 'retro' },
                        react_1.default.createElement(ink_text_input_1.default, { placeholder: 'search for file: ', value: query, onChange: setQuery }))),
                react_1.default.createElement(ink_1.Box, { width: "100%", height: "70%", marginLeft: 2, borderColor: '#a06666' },
                    react_1.default.createElement(ink_select_input_1.default, { limit: 5, items: searchResults, onSelect: callHandleSelection })))
        :
            null);
};
exports.Search = Search;
