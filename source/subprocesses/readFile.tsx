import React from 'react'
import * as fs from 'fs'

export const readFile = () =>  {
    const file = fs.readFile('/home/yusif/Code/CLI/ink/idk/package.json', (error, data) => {
        if (error) throw error
        return data
    })

    return <>
        {file}
    </>
}
