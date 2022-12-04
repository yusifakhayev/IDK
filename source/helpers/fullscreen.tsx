const enterFull = '\x1b[?1049h'
const exitFull = '\x1b[?1049l'

const exitFullscreen = () => {
    process.stdout.write(exitFull)
}

//@ts-ignore
const enterFullscreen = () => {
    process.stdout.write(enterFull)
    return exitFullscreen
}

export {exitFullscreen, enterFullscreen}
