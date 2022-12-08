import create from 'zustand'
import {subscribeWithSelector} from 'zustand/middleware'

interface appendFileState {
    appendFile: string
    setAppendFile: (toAppend: string) => void
}

export const appendFileState = create<appendFileState>()(subscribeWithSelector((set) => ({
    appendFile: '',
    setAppendFile: (toAppend: string) => set(() => ({appendFile: toAppend}))
})))
