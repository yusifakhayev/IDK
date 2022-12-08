import React, {useEffect} from 'react'
import {directoryState} from '../state/directoryState'
import {fileBufferState} from '../state/fileBufferState'
import {appendFileState} from '../state/appendFileState'
import * as fs from 'fs'

export const readFile = () =>  {

    const setFile = fileBufferState((state) => state.setFile)
    const reading = ({path}: {path: string}) => {
        fs.readFile(path, (error, data) => {
            if (error) {
                throw error
            }
            setFile(data.toString())
        })
    }

    useEffect(() => {
        const unsubscribeAppendFile = appendFileState.subscribe(
            (state) => state.appendFile,
            (value) => {
                reading({path: `${value}`})
            }
        )

        const unsubscribeDirectory = directoryState.subscribe(
            (state) => state.directory,
            () => {
            }
        )
        return () => {
            unsubscribeAppendFile()
            unsubscribeDirectory()
        }

    },[])

    return <>
    </>
}
