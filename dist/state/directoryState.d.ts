interface directoryState {
    directory: string;
    setDirectory: (path: string) => void;
}
export declare const directoryState: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<directoryState>, "subscribe"> & {
    subscribe: {
        (listener: (selectedState: directoryState, previousSelectedState: directoryState) => void): () => void;
        <U>(selector: (state: directoryState) => U, listener: (selectedState: U, previousSelectedState: U) => void, options?: {
            equalityFn?: ((a: U, b: U) => boolean) | undefined;
            fireImmediately?: boolean | undefined;
        } | undefined): () => void;
    };
}>;
export {};
