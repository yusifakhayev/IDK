import React, {useState, useEffect} from 'react'
import {Box} from 'ink'
import Gradient from 'ink-gradient'
import TextInput from 'ink-text-input'
import SelectInput from 'ink-select-input'
import {searchState} from '../state/searchState'
import {refreshState} from '../state/refreshState'
import fuzzaldrin from 'fuzzaldrin'
import fg from 'fast-glob'
import childProcess from 'child_process'
import {handleSelection} from '../subprocesses/childProcessHandler'

export const Search = () => {
    const search = searchState((state) => state.search)
    const [query, setQuery] = useState('')
    const [files, setFiles] = useState([])
    const [directory, setDirectory] = useState('')
    //@ts-ignore
    const [reload, setReload] = useState(0)

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

    useEffect(() => {
        search ? fuzzyFind() : null
        search ? getDirectory() : null

        const unsubscribeRefresh = refreshState.subscribe(
            (state) => state.refresh,
            (value) => {
                console.log(value)
            }
        )

        return () => {
            unsubscribeRefresh()
            fuzzyFind()
            getDirectory()
        }
    }, [])

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
                            />
                        </Box>
                    </Box>

                :
                    null
        }
    </>
}
