import { useState, useEffect } from "react";
import { Bindable } from "jrx-ts";

/**
 * A custom React hook which allows a functional component to refresh when the value of the bindable has changed.
 */
export function useBindable<T>(bindable: Bindable<T>) {
    const [value, setValue] = useState(bindable.getValue());

    useEffect(() => {
        const id = bindable.subscribe((newVal: T) => {
            setValue(newVal);
        });
        // Set value once again in case the bindable itself has changed.
        setValue(bindable.value);
        return () => {
            bindable.unsubscribe(id);
        };
    }, [bindable]);
    return value;
}

/**
 * Variation of useBindable which allows for a null or undefined Bindable instance as input.
 * If the bindable is null or undefined, the value will be undefined.
 */
export function useBindableUnsafe<T>(bindable: Bindable<T> | null | undefined) {
    const [value, setValue] = useState<T | undefined>(bindable?.getValue());

    useEffect(() => {
        if (bindable === null || bindable === undefined) {
            setValue(undefined);
            return () => { };
        }

        const id = bindable.subscribe((newVal: T) => {
            setValue(newVal);
        });
        setValue(bindable.value);
        return () => {
            bindable.unsubscribe(id);
        };
    }, [bindable]);
    return value;
}