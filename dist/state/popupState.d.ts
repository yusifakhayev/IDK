interface popupState {
    popup: boolean;
    toggleFullscreen: () => void;
}
export declare const popupState: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<popupState>, "subscribe"> & {
    subscribe: {
        (listener: (selectedState: popupState, previousSelectedState: popupState) => void): () => void;
        <U>(selector: (state: popupState) => U, listener: (selectedState: U, previousSelectedState: U) => void, options?: {
            equalityFn?: ((a: U, b: U) => boolean) | undefined;
            fireImmediately?: boolean | undefined;
        } | undefined): () => void;
    };
}>;
export {};
