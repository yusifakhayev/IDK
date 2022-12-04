import create from 'zustand'
import {subscribeWithSelector} from 'zustand/middleware'

interface refreshState {
    refresh: number
    toggleRefresh: () => void
}

export const refreshState = create<refreshState>()(subscribeWithSelector((set) => ({
    refresh: 0,
    toggleRefresh: () => set((state) => ({refresh: state.refresh + 1}))
})))
