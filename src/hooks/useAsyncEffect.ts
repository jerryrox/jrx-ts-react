/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

type IsAliveFunc = () => boolean;

export function useAsyncEffect(
    task: (isAlive: IsAliveFunc) => Promise<void>,
    dispose?: () => void,
    deps?: React.DependencyList,
) {
    useEffect(() => {
        let isAlive = true;
        task(() => isAlive);

        return () => {
            isAlive = false;
            dispose?.();
        };
    }, deps);
}