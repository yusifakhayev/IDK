interface appendFileState {
    appendFile: string;
    setAppendFile: (toAppend: string) => void;
}
export declare const appendFileState: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<appendFileState>, "subscribe"> & {
    subscribe: {
        (listener: (selectedState: appendFileState, previousSelectedState: appendFileState) => void): () => void;
        <U>(selector: (state: appendFileState) => U, listener: (selectedState: U, previousSelectedState: U) => void, options?: {
            equalityFn?: ((a: U, b: U) => boolean) | undefined;
            fireImmediately?: boolean | undefined;
        } | undefined): () => void;
    };
}>;
export {};
