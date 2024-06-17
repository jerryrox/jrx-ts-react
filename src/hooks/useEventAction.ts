import { EventAction } from "jrx-ts";
import { useEffect } from "react";

export function useEventAction<T = void>(eventAction: EventAction<T>, callback: (value: T) => any) {
    useEffect(() => {
        eventAction.add(callback);
        return () => {
            eventAction.remove(callback);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [eventAction]);
}