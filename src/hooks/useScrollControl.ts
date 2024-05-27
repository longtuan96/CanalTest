import { useCallback, useEffect, useRef, useState } from "react";

export default function useScrollControl() {
  const scrollDivRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const scroll = useCallback((left = false) => {
    const distance = (window.innerWidth * 9) / 10;
    if (scrollDivRef.current) {
      scrollDivRef.current.scrollBy({
        left: left ? -distance : distance,
        behavior: "smooth",
      });
    }
  }, []);

  const checkScroll = useCallback(() => {
    if (scrollDivRef.current) {
      const div = scrollDivRef.current;
      setIsAtStart(div.scrollLeft === 0);
      setIsAtEnd(div.scrollLeft + div.offsetWidth >= div.scrollWidth - 3);
    }
  }, []);

  useEffect(() => {
    const div = scrollDivRef.current;
    div?.addEventListener("scroll", checkScroll);

    checkScroll();

    return () => {
      div?.removeEventListener("scroll", checkScroll);
    };
  }, [checkScroll]);

  return {
    ref: scrollDivRef,
    isAtStart,
    isAtEnd,
    scroll,
    checkScroll,
  };
}
