import React, {FC, useEffect, useState} from 'react';
import {useInput, Box, useApp} from 'ink';
import {enterFullscreen, exitFullscreen} from './helpers/fullscreen'
import {fullscreenState} from './state/fullscreenState'
import {searchState} from './state/searchState'
import {clockState} from './state/clockState'
import {directoryDisplayState} from './state/directoryDisplayState'
import {Search} from './ui/Search'
import {Clock} from './ui/Clock'
import {Directories} from './ui/Directories'
import {DirectoriesNULL} from './ui/DirectoriesNULL'
import {getDirectory} from './subprocesses/getDirectory'
import {readFile} from './subprocesses/readFile'

const App: FC = () => {
    readFile()
    getDirectory()
    const toggleFullscreen = fullscreenState((state) => state.toggleFullscreen)
    const toggleSearch = searchState((state) => state.toggleSearch)
    const toggleClock = clockState((state) => state.toggleClock)
    const toggleDirectoryDisplay = directoryDisplayState((state) => state.toggleDisplay)
    // const directoryDisplay = directoryDisplayState((state) => state.display)

    //@ts-ignore
    const [reload, setReload] = useState(0)
    const [displayBool, setDisplaybool] = useState(true)
    const {exit} = useApp()

    useInput((input) => {
        switch (input) {
            case "S":
                toggleSearch()
                break
            case "F":
                toggleFullscreen()
                break
            case "T":
                toggleClock()
                break
            case "P":
                toggleDirectoryDisplay()
                break
            case "q":
                exit()
                break
        }
    })

    useEffect(() => {
        const unsubscribeFullscreen = fullscreenState.subscribe(
            (state) => state.fullscreen,
            (value) => {
                setReload(reload => reload + 1)
                value ? enterFullscreen() : exitFullscreen()
            }
        )

        const unsubscribeSearch = searchState.subscribe(
            (state) => state.search,
            () => {
                setReload(reload => reload + 1)
            }
        )
        const unsubscribeClock = clockState.subscribe(
            (state) => state.clock,
            () => {
                setReload(reload => reload + 1)
            }
        )

        return () => {
            unsubscribeFullscreen()
            unsubscribeSearch()
            unsubscribeClock()
        }

    }, [])
    useEffect(() => {
        const unsubscribeDirectoryDisplay = directoryDisplayState.subscribe(
            (state) => state.display,
            () => {
                setDisplaybool(displayBool => !displayBool)
            }
        )
        return () => {
            unsubscribeDirectoryDisplay()
        }
    },[displayBool])

    return <>
        <Box
            justifyContent="center"
            alignItems="stretch"
            width="100%"
            height="100%"
            flexDirection="column"
        >
            {Search()}
            {Clock()}
            { displayBool ? <Directories file="gay"/> : <DirectoriesNULL/>}

        </Box>
    </>
}

module.exports = App;
export default App;
