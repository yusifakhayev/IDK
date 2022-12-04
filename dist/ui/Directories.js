"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Directories = void 0;
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const ink_gradient_1 = __importDefault(require("ink-gradient"));
const Directories = ({ file }) => {
    // import {fileBufferState} from '../state/fileBufferState'
    // import {directoryDisplayState} from '../state/directoryDisplayState'
    // const [fileOut, setFileOut] = useState('')
    // const [reload, setReload] = useState(0)
    //
    // useEffect(() => {
    //     const unsubscribeDirectoryDisplayState = directoryDisplayState.subscribe(
    //         (state) => state.display,
    //         () => {
    //             setReload(reload => reload + 1)
    //         }
    //     )
    //     const unsubscribeFileBuffer = fileBufferState.subscribe(
    //         (state) => state.file,
    //         (value) => {
    //             setFileOut(value)
    //             setReload(reload => reload + 1)
    //         }
    //     )
    //
    //     return () => {
    //         unsubscribeDirectoryDisplayState()
    //         unsubscribeFileBuffer()
    //     }
    //
    // },[])
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ink_1.Box, { justifyContent: 'center', alignItems: 'center' },
            react_1.default.createElement(ink_gradient_1.default, { name: 'retro' },
                react_1.default.createElement(ink_1.Text, null,
                    " ",
                    file,
                    " "))));
};
exports.Directories = Directories;
