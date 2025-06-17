import { useEffect } from 'react';

/**
 * A hook that applies a CSS class to the `.custom-cursor` element when hovering over 
 * elements with a specified class.
 */
const useHoverBodyEffect = (): void => {
  useEffect(() => {
    const customCursor = document.getElementById('customCursor') as HTMLElement;

    const handleHover = (e: MouseEvent) => {
        const cursorLargeClass = 'cursor-large';
        const target = e.target as HTMLElement;
        const isHoveringTrigger = target.closest('.bc-hover-cursor-styles') !== null;

        if (isHoveringTrigger) {
            customCursor.classList.add(cursorLargeClass);
        } else {
            customCursor.classList.remove(cursorLargeClass);
        }
    };

    document.addEventListener('mouseover', handleHover);

    return () => {
        document.removeEventListener('mouseover', handleHover);
        customCursor.classList.remove('hover-active'); // Cleanup on unmount
    };
  }, []);
};

export default useHoverBodyEffect;