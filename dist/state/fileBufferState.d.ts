interface fileBufferState {
    file: string;
    setFile: (daFile: string) => void;
}
export declare const fileBufferState: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<fileBufferState>, "subscribe"> & {
    subscribe: {
        (listener: (selectedState: fileBufferState, previousSelectedState: fileBufferState) => void): () => void;
        <U>(selector: (state: fileBufferState) => U, listener: (selectedState: U, previousSelectedState: U) => void, options?: {
            equalityFn?: ((a: U, b: U) => boolean) | undefined;
            fireImmediately?: boolean | undefined;
        } | undefined): () => void;
    };
}>;
export {};
