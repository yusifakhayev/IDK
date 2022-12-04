import create from 'zustand'
import {subscribeWithSelector} from 'zustand/middleware'

interface directoryState {
    directory: string
    setDirectory: (path: string) => void
}

export const directoryState = create<directoryState>()(subscribeWithSelector((set) => ({
    directory: '',
    setDirectory: (path: string) => set(() => ({directory: path }))
})))
