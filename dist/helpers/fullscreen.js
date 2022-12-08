"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearScreen = exports.enterFullscreen = exports.exitFullscreen = void 0;
const enterFull = '\x1b[?1049h';
const exitFull = '\x1b[?1049l';
const clear = '\x1b[31m';
const exitFullscreen = () => {
    process.stdout.write(exitFull);
};
exports.exitFullscreen = exitFullscreen;
//@ts-ignore
const enterFullscreen = () => {
    process.stdout.write(enterFull);
};
exports.enterFullscreen = enterFullscreen;
const clearScreen = () => {
    process.stdout.write(clear);
};
exports.clearScreen = clearScreen;
