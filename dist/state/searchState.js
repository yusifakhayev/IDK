"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchState = void 0;
const zustand_1 = __importDefault(require("zustand"));
const middleware_1 = require("zustand/middleware");
exports.searchState = (0, zustand_1.default)()((0, middleware_1.subscribeWithSelector)((set) => ({
    search: true,
    toggleSearch: () => set((state) => ({ search: !state.search }))
})));
