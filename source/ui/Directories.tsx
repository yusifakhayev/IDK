import React from 'react'
import {Text} from 'ink'
import {readFile} from '../subprocesses/readFile'

export const Directories = (): JSX.Element => {
    readFile('/home/yusif/Code/CLI/ink/idk/package.json')
    return <>
        <Text>gay</Text>
    </>
}
