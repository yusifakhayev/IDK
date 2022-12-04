"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enterFullscreen = exports.exitFullscreen = void 0;
const enterFull = '\x1b[?1049h';
const exitFull = '\x1b[?1049l';
const exitFullscreen = () => {
    process.stdout.write(exitFull);
};
exports.exitFullscreen = exitFullscreen;
//@ts-ignore
const enterFullscreen = () => {
    process.stdout.write(enterFull);
    return exitFullscreen;
};
exports.enterFullscreen = enterFullscreen;
