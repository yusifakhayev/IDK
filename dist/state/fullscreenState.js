"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fullscreenState = void 0;
const zustand_1 = __importDefault(require("zustand"));
const middleware_1 = require("zustand/middleware");
exports.fullscreenState = (0, zustand_1.default)()((0, middleware_1.subscribeWithSelector)((set) => ({
    fullscreen: false,
    toggleFullscreen: () => set((state) => ({ fullscreen: !state.fullscreen }))
})));
