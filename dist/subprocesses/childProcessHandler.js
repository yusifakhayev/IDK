"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSelection = void 0;
const child_process_1 = __importDefault(require("child_process"));
const path_1 = __importDefault(require("path"));
//@ts-ignore
const handleSelection = (searchResult, directory) => {
    switch (true) {
        case /^.*\.(jpg|JPG|gif|GIF|png|PNG)$/.test(searchResult.value):
            const subIMG = child_process_1.default.spawn('feh', [searchResult.value]);
            subIMG.stdout.on('data', () => {
            });
            subIMG.stderr.on('data', (data) => {
                console.log(data);
            });
            subIMG.on('close', () => {
            });
            break;
        case /^.*\.(mkv|mp4|OGG|MOV|MP4|mov|ogg)$/.test(searchResult.value):
            const subVLC = child_process_1.default.spawn('vlc', [searchResult.value]);
            subVLC.stdout.on('data', () => {
            });
            subVLC.stderr.on('data', (data) => {
                console.log(data);
            });
            subVLC.on('close', () => {
            });
            break;
        case /^.*\.(torrent)$/.test(searchResult.value):
            const subTorrent = child_process_1.default.spawn('qbittorrent', [searchResult.value]);
            subTorrent.stdout.on('data', () => {
            });
            subTorrent.stderr.on('data', (data) => {
                console.log(data);
            });
            subTorrent.on('close', () => {
            });
            break;
        case /^.*\.(pdf|PDF|epub|EPUB|mobi|MOBI)$/.test(searchResult.value):
            const subPDF = child_process_1.default.spawn('zathura', [searchResult.value]);
            subPDF.stdout.on('data', () => {
            });
            subPDF.stderr.on('data', (data) => {
                console.log(data);
            });
            subPDF.on('close', () => {
            });
            break;
        case /^.*\.(mp3|FLAC|flac|MP3|wav|WAV")$/.test(searchResult.value):
            const subAudio = child_process_1.default.spawn('audacious', [searchResult.value]);
            subAudio.stdout.on('data', () => {
            });
            subAudio.stderr.on('data', (data) => {
                console.log(data);
            });
            subAudio.on('close', () => {
            });
            break;
        case /^.*\.(zip)$/.test(searchResult.value):
            const dirN = path_1.default.parse(searchResult.value).name;
            const subZip = child_process_1.default.spawn('unzipper.sh', [
                '-d', dirN, '-p', directory,
                '-t', searchResult.value, '-i', dirN
            ]);
            subZip.stdout.on('data', () => {
            });
            subZip.stderr.on('data', (data) => {
                console.log(data);
            });
            subZip.on('close', () => {
            });
            break;
        case /^.*\.(ttf|otf)$/.test(searchResult.value):
            const subFont = child_process_1.default.spawn('gnome-font-viewer', [searchResult.value]);
            subFont.stdout.on('data', () => {
            });
            subFont.stderr.on('data', (data) => {
                console.log(data);
            });
            subFont.on('close', () => {
            });
            break;
        default:
            const subNvim = child_process_1.default.spawn('alacritty', [
                '-o', 'font.size=8', '-o',
                'font.normal.family=Iosevka',
                '-o', 'window.dimensions.columns=80',
                '-o', 'window.dimensions.lines=30',
                '-e', 'nvim', searchResult.value
            ]);
            subNvim.stdout.on('data', () => {
            });
            subNvim.stderr.on('data', (data) => {
                console.log(data);
            });
            subNvim.on('close', () => {
            });
            break;
    }
};
exports.handleSelection = handleSelection;
