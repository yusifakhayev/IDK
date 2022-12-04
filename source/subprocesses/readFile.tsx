import React, {useEffect} from 'react'
import {directoryState} from '../state/directoryState'
import {fileBufferState} from '../state/fileBufferState'
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
        const unsubscribeDirectory = directoryState.subscribe(
            (state) => state.directory,
            (value) => {
                reading({path: `${value.trim()}/package.json`})
            }
        )
        return () => {
            unsubscribeDirectory()
        }

    },[])

    return <>
    </>
}
