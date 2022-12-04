interface fullscreenState {
    fullscreen: boolean;
    toggleFullscreen: () => void;
}
export declare const fullscreenState: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<fullscreenState>, "subscribe"> & {
    subscribe: {
        (listener: (selectedState: fullscreenState, previousSelectedState: fullscreenState) => void): () => void;
        <U>(selector: (state: fullscreenState) => U, listener: (selectedState: U, previousSelectedState: U) => void, options?: {
            equalityFn?: ((a: U, b: U) => boolean) | undefined;
            fireImmediately?: boolean | undefined;
        } | undefined): () => void;
    };
}>;
export {};
