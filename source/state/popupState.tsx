import create from 'zustand'
import {subscribeWithSelector} from 'zustand/middleware'

interface popupState {
    popup: boolean
    toggleFullscreen: () => void
}

export const popupState = create<popupState>()(subscribeWithSelector((set) => ({
    popup: false,
    toggleFullscreen: () => set((state) => ({popup: !state.popup}))
})))
