import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;

/**
 * @param breakpoint - The breakpoint to check against.
 * @returns `true` when window witdh less than breakpoint
 * @description This hook is used to check if the current window width is less than the breakpoint.
 * @default 768 - for mobile Breakpoint
 */
export function useIsBreakpoint(breakpoint = MOBILE_BREAKPOINT) {
  const [isBreakpoint, setIsBreakpoint] = useState<boolean | undefined>(
    undefined,
  );

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const onChange = () => {
      setIsBreakpoint(window.innerWidth < breakpoint);
    };
    mql.addEventListener("change", onChange);
    setIsBreakpoint(window.innerWidth < breakpoint);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isBreakpoint;
}
