import create from 'zustand'
import {subscribeWithSelector} from 'zustand/middleware'

interface directoryDisplayState {
    display: boolean
    toggleDisplay: () => void
}
export const directoryDisplayState = create<directoryDisplayState>()(subscribeWithSelector((set) => ({
    display: false,
    toggleDisplay: () => set((state) => ({display: !state.display}))
})))

