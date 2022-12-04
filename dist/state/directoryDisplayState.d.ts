interface directoryDisplayState {
    display: boolean;
    toggleDisplay: () => void;
}
export declare const directoryDisplayState: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<directoryDisplayState>, "subscribe"> & {
    subscribe: {
        (listener: (selectedState: directoryDisplayState, previousSelectedState: directoryDisplayState) => void): () => void;
        <U>(selector: (state: directoryDisplayState) => U, listener: (selectedState: U, previousSelectedState: U) => void, options?: {
            equalityFn?: ((a: U, b: U) => boolean) | undefined;
            fireImmediately?: boolean | undefined;
        } | undefined): () => void;
    };
}>;
export {};
