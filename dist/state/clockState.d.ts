interface clockState {
    clock: boolean;
    toggleClock: () => void;
}
export declare const clockState: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<clockState>, "subscribe"> & {
    subscribe: {
        (listener: (selectedState: clockState, previousSelectedState: clockState) => void): () => void;
        <U>(selector: (state: clockState) => U, listener: (selectedState: U, previousSelectedState: U) => void, options?: {
            equalityFn?: ((a: U, b: U) => boolean) | undefined;
            fireImmediately?: boolean | undefined;
        } | undefined): () => void;
    };
}>;
export {};
