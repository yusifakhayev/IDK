import React, {useState, useEffect}  from 'react'
import {Text, Box } from 'ink'
import Spinner  from 'ink-spinner'

const Testing = () => {
    const [value, setValue] = useState('')
    const sleep = (ms: number) => {
        return new Promise(r => setTimeout(r, ms))
    }

    const beckon = async () => {
        await sleep(2000)
        setValue('loaded')
    }

    const Fallback = () => <Text> <Text color='green'> <Spinner type='dots'/> </Text> {'loading'}</Text>

    useEffect(() => {
        beckon()
    }, [])

    return <>
        <Box>
            <Text>
                {value ? value : <Fallback />}
            </Text>
        </Box>
    </>
}
module.exports = Testing
export default Testing
