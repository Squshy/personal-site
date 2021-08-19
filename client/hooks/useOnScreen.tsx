import {useEffect, useState, MutableRefObject } from "react";
// https://usehooks.com/useOnScreen/

export default function useOnScreen<T extends Element>(ref: MutableRefObject<T>, rootMargin: string = "-200px"): boolean {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState<boolean>(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    const current = ref.current;
    if (current) {
      observer.observe(current);
    }
    return () => {
      observer.unobserve(current);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return isIntersecting;
}