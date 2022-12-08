const enterFull = '\x1b[?1049h'
const exitFull = '\x1b[?1049l'
const clear = '\x1b[31m'

const exitFullscreen = () => {
    process.stdout.write(exitFull)
}

//@ts-ignore
const enterFullscreen = () => {
    process.stdout.write(enterFull)
}

const clearScreen = () => {
    process.stdout.write(clear)
}

export {exitFullscreen, enterFullscreen, clearScreen}
