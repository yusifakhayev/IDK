interface testState {
    test: string;
    setTest: (by: string) => void;
}
export declare const testState: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<testState>, "subscribe"> & {
    subscribe: {
        (listener: (selectedState: testState, previousSelectedState: testState) => void): () => void;
        <U>(selector: (state: testState) => U, listener: (selectedState: U, previousSelectedState: U) => void, options?: {
            equalityFn?: ((a: U, b: U) => boolean) | undefined;
            fireImmediately?: boolean | undefined;
        } | undefined): () => void;
    };
}>;
export {};
