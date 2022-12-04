import create from 'zustand'
import {subscribeWithSelector} from 'zustand/middleware'

interface fileBufferState {
    file: string
    setFile: (daFile: string) => void
}

export const fileBufferState = create<fileBufferState>()(subscribeWithSelector((set) => ({
    file: '',
    setFile: (daFile: string) => set(() => ({file: daFile}))
})))
