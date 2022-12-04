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
exports.Clock = void 0;
const react_1 = __importStar(require("react"));
const clockState_1 = require("../state/clockState");
const ink_1 = require("ink");
const ink_big_text_1 = __importDefault(require("ink-big-text"));
const ink_gradient_1 = __importDefault(require("ink-gradient"));
const moment_1 = __importDefault(require("moment"));
const Clock = () => {
    const clock = (0, clockState_1.clockState)((state) => state.clock);
    const [time, setTime] = (0, react_1.useState)((0, moment_1.default)().format('hh:mm:ss a '));
    //@ts-ignore
    const [reload, setReload] = (0, react_1.useState)(0);
    const updateClock = () => {
        setReload(reload => reload + 1);
        setInterval(() => {
            setTime((0, moment_1.default)().format('hh:mm:ss a '));
        }, 1000);
    };
    (0, react_1.useEffect)(() => {
        const unsubscribeClock = clockState_1.clockState.subscribe((state) => state.clock, (value) => {
            value ? updateClock() : null;
        });
        return () => {
            unsubscribeClock();
            updateClock();
        };
    }, []);
    return react_1.default.createElement(react_1.default.Fragment, null, clock
        ?
            react_1.default.createElement(ink_1.Box, { width: "50%", height: "50%", justifyContent: "center" },
                react_1.default.createElement(ink_gradient_1.default, { name: 'retro' },
                    react_1.default.createElement(ink_big_text_1.default, { key: time, text: time, font: 'tiny' })))
        : null);
};
exports.Clock = Clock;
