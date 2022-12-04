import create from 'zustand'
import {subscribeWithSelector} from 'zustand/middleware'

interface fullscreenState {
    fullscreen: boolean
    toggleFullscreen: () => void
}

export const fullscreenState = create<fullscreenState>()(subscribeWithSelector((set) => ({
    fullscreen: false,
    toggleFullscreen: () => set((state) => ({fullscreen: !state.fullscreen}))
})))
