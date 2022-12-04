import childProcess from 'child_process'
import React, {useEffect, } from 'react'
import {directoryState} from '../state/directoryState'

export const getDirectory = () => {
    const setDirectory = directoryState((state) => state.setDirectory)
    useEffect(() => {
        childProcess.exec('pwd', (error, stdout, stderr) => {
            if (error) {console.log(error)}
            if (stderr) {console.log(stderr)}
            setDirectory(stdout)
        })
    },[])

    return <>
    </>
}
