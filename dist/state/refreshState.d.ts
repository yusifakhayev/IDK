interface refreshState {
    refresh: number;
    toggleRefresh: () => void;
}
export declare const refreshState: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<refreshState>, "subscribe"> & {
    subscribe: {
        (listener: (selectedState: refreshState, previousSelectedState: refreshState) => void): () => void;
        <U>(selector: (state: refreshState) => U, listener: (selectedState: U, previousSelectedState: U) => void, options?: {
            equalityFn?: ((a: U, b: U) => boolean) | undefined;
            fireImmediately?: boolean | undefined;
        } | undefined): () => void;
    };
}>;
export {};
