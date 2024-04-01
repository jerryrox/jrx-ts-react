import { EventAction } from "jrx-ts";
import { useEffect } from "react";

export function useEventAction<T = void, T2 = void>(eventAction: EventAction<T, T2>, callback: (value: T, value2: T2) => any) {
    useEffect(() => {
        eventAction.add(callback);
        return () => {
            eventAction.remove(callback);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [eventAction]);
}