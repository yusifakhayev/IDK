"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fuzzy = void 0;
const fast_glob_1 = __importDefault(require("fast-glob"));
const fuzzaldrin_1 = __importDefault(require("fuzzaldrin"));
const Fuzzy = () => {
    const query = 'read';
    const files = fast_glob_1.default.sync('**/*', { ignore: ['**/node_modules/**/*'] });
    const searchResults = fuzzaldrin_1.default.filter(files, query).map(files => ({
        label: files,
        value: files
    }));
    return searchResults;
};
exports.Fuzzy = Fuzzy;
