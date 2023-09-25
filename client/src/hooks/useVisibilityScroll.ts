import { useState, useEffect, useRef } from 'react';
import { throttle } from '../helpers/throttle';

interface WorkerMessage {
    heightTrigger: number;
    windowScrollHeight: number;
    windowInnerHeight: number;
}

export const useVisibilityOnScroll = (heightTrigger: number): boolean => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const worker = useRef<Worker | null>(null);

    // Create worker when component mounts and terminate when it unmounts
    useEffect(() => {
        worker.current = new Worker(new URL('../workers/scrollWorker.js', import.meta.url));

        worker.current.onmessage = (e: MessageEvent) => {
            setIsVisible(e.data as boolean);
        };

        worker.current.onerror = (error: ErrorEvent) => {
            console.error('Worker error: ', error);
        };

        return () => {
            if (worker.current) worker.current.terminate();
        };
    }, []);

    // Separate effect for handling the scroll listener and post messages to the worker
    useEffect(() => {
        let rafId: number | null = null;

        const handleScroll = throttle(() => {
            const windowScrollHeight = document.body.scrollTop || document.documentElement.scrollTop;
            const windowInnerHeight = window.innerHeight;

            // Request an animation frame to sync with browser refresh rate
            rafId = requestAnimationFrame(() => {
                // Send data to worker
                const message: WorkerMessage = { heightTrigger, windowScrollHeight, windowInnerHeight };
                if (worker.current) worker.current.postMessage(JSON.stringify(message));
            });
        }, 100);

        window.addEventListener('scroll', handleScroll);

        // Clean up on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafId) {
                cancelAnimationFrame(rafId);
            }
        };
    }, [heightTrigger]); // This effect only reruns when heightTrigger changes

    return isVisible;
};
