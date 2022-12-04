interface searchState {
    search: boolean;
    toggleSearch: () => void;
}
export declare const searchState: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<searchState>, "subscribe"> & {
    subscribe: {
        (listener: (selectedState: searchState, previousSelectedState: searchState) => void): () => void;
        <U>(selector: (state: searchState) => U, listener: (selectedState: U, previousSelectedState: U) => void, options?: {
            equalityFn?: ((a: U, b: U) => boolean) | undefined;
            fireImmediately?: boolean | undefined;
        } | undefined): () => void;
    };
}>;
export {};
