import React, {useState, useEffect} from 'react'
import {clockState} from '../state/clockState'
import {Box} from 'ink'
import BigText from 'ink-big-text'
import Gradient from 'ink-gradient'
import moment from 'moment'

export const Clock = (): JSX.Element => {
    const clock = clockState((state) => state.clock)
    const [time, setTime] = useState(moment().format('hh:mm:ss a '))
    //@ts-ignore
    const [reload, setReload] = useState(0)

    const updateClock = () => {
        setReload(reload => reload + 1)
        setInterval(() => {
            setTime(moment().format('hh:mm:ss a '))
        }, 1000)
    }
    useEffect(() => {
        const unsubscribeClock = clockState.subscribe(
            (state) => state.clock,
            (value) => {
                value ? updateClock() : null
            }
        )
        return () => {
            unsubscribeClock()
            updateClock()
        }
    },[])

    return <>
        {
            clock
                ?
                    <Box
                        width="50%"
                        height="50%"
                        justifyContent="center"
                    >
                        <Gradient name='retro'>
                            <BigText
                                key={time}
                                text={time}
                                font='tiny'
                            />
                        </Gradient>
                    </Box>
                : null
        }
    </>
}
