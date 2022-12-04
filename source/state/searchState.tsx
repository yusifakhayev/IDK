import create from 'zustand'
import {subscribeWithSelector} from 'zustand/middleware'

interface searchState {
    search: boolean
    toggleSearch: () => void
}

export const searchState = create<searchState>()(subscribeWithSelector((set) => ({
    search: true,
    toggleSearch: () => set((state) => ({search: !state.search}))
})))
