import create from 'zustand'
import {subscribeWithSelector} from 'zustand/middleware'

interface clockState {
    clock: boolean
    toggleClock: () => void
}

export const clockState = create<clockState>()(subscribeWithSelector((set) => ({
    clock: false,
    toggleClock: () => set((state) => ({clock: !state.clock}))
})))
