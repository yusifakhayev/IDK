import React from 'react'
import {Box, Text} from 'ink'
import Gradient from 'ink-gradient'

export const Directories = ({file}: {file: string}): JSX.Element => {
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


    return <>
         <Box
             justifyContent='center'
             alignItems='center'
         >
             <Gradient name='retro'>
                 <Text> {file} </Text>
             </Gradient>
         </Box>
    </>
}

