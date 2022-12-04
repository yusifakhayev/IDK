import React, {FC, useEffect, useState} from 'react';
import {useInput, Box, useApp} from 'ink';
import {enterFullscreen, exitFullscreen} from './helpers/fullscreen'
import {fullscreenState} from './state/fullscreenState'
import {searchState} from './state/searchState'
import {clockState} from './state/clockState'
import {Search} from './ui/Search'
import {Clock} from './ui/Clock'
import {Directories} from './ui/Directories'

const App: FC = () => {
    const toggleFullscreen = fullscreenState((state) => state.toggleFullscreen)
    const toggleSearch = searchState((state) => state.toggleSearch)
    const toggleClock = clockState((state) => state.toggleClock)
    //@ts-ignore
    const [reload, setReload] = useState(0)
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
            {Directories()}
        </Box>
    </>
}

module.exports = App;
export default App;
