import React, {useState, useEffect} from 'react'
import {Box, Text} from 'ink'
import Gradient from 'ink-gradient'
import TextInput from 'ink-text-input'
import SelectInput from 'ink-select-input'
import {searchState} from '../state/searchState'
import {refreshState} from '../state/refreshState'
import {appendFileState} from '../state/appendFileState'
import {readFile} from '../subprocesses/readFile'
import fuzzaldrin from 'fuzzaldrin'
import fg from 'fast-glob'
import childProcess from 'child_process'
import {handleSelection} from '../subprocesses/childProcessHandler'
import useStdoutDimensions from 'ink-use-stdout-dimensions'

export const Search = () => {
    const search = searchState((state) => state.search)
    const setAppendFile = appendFileState((state) => state.setAppendFile)
    const [query, setQuery] = useState('')
    const [files, setFiles] = useState([])
    const [directory, setDirectory] = useState('')
    //@ts-ignore
    const [reload, setReload] = useState(0)
    const [columns, rows] = useStdoutDimensions()
    //@ts-ignore

    readFile()
    const fuzzyFind = async () => {
        const files = fg.sync('**/*', {ignore: ['**/node_modules/**/*','**/package-lock.json/**']})
        //@ts-ignore
        setFiles(files)
    }

    const searchResults = fuzzaldrin.filter(files, query).map(file => ({
        label: file,
        value: file
    }))

    //@ts-ignore
    const callHandleSelection = (searchResult) => {
        handleSelection(searchResult, directory)
    }

    const getDirectory = () => {
        childProcess.exec('pwd', (error, stdout, stderr) => {
            if (error) {console.log(error)}
            if (stderr) {console.log(stderr)}
            setDirectory(stdout)
        })
    }

    //@ts-ignore
    const handleHighlight = searchResult => {
        if (searchResult) setAppendFile(searchResult.value)
    }

    useEffect(() => {
        search ? fuzzyFind() : null
        search ? getDirectory() : null

        const unsubscribeRefresh = refreshState.subscribe(
            (state) => state.refresh,
            () => {
                setReload(reload => reload + 1)
            }
        )

        return () => {
            unsubscribeRefresh()
            fuzzyFind()
            getDirectory()
        }
    }, [])

    useEffect(() => {
        const unsubscribeAppendFile = appendFileState.subscribe(
            (state) => state.appendFile,
            () => {
            }
        )
        return () => {
            unsubscribeAppendFile()
        }
    },[reload])

    return <>
        {
            search
                ?
                    <Box>
                        <Box
                            borderStyle='single'
                            borderColor='#5f8787'
                            width="100%"
                            height="30%"
                        >
                             <Gradient name='retro'>
                                 <TextInput
                                    placeholder='search for file: '
                                    value={query}
                                    onChange={setQuery}
                                 />
                             </Gradient>
                        </Box >
                        <Box
                            width="100%"
                            height="70%"
                            marginLeft={2}
                            borderColor='#a06666'
                        >
                            <SelectInput
                                limit={5}
                                items={searchResults}
                                onSelect={callHandleSelection}
                                onHighlight={handleHighlight}
                            />
                        </Box>
                        <Text> {columns}x{rows} </Text>
                    </Box>

                :
                    null
        }
    </>
}
