"use client";

import { useEffect, useRef, useCallback, useState } from "react";

interface UseInfiniteScrollOptions {
    hasNextPage: boolean;
    isFetching: boolean;
    fetchNextPage: () => void;
    threshold?: number;
}

export function useInfiniteScroll({
    hasNextPage,
    isFetching,
    fetchNextPage,
    threshold = 100,
}: UseInfiniteScrollOptions) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const observerRef = useRef<IntersectionObserver | null>(null);
    const elementRef = useRef<HTMLDivElement | null>(null);

    const lastElementRef = useCallback(
        (node: HTMLDivElement | null) => {
            if (isFetching) return;
            if (observerRef.current) observerRef.current.disconnect();

            observerRef.current = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting && hasNextPage && !isFetching) {
                        setIsIntersecting(true);
                        fetchNextPage();
                    } else {
                        setIsIntersecting(false);
                    }
                },
                {
                    threshold: 0.1,
                    rootMargin: `${threshold}px`,
                }
            );

            if (node) {
                observerRef.current.observe(node);
                elementRef.current = node;
            }
        },
        [isFetching, hasNextPage, fetchNextPage, threshold]
    );

    useEffect(() => {
        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    return {
        lastElementRef,
        isIntersecting,
    };
}
