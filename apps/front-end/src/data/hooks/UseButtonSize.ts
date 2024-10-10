import { useEffect, useState } from "react";

export function useButtonSize(ref: React.RefObject<HTMLButtonElement>) {
    const [size, setSize] = useState<number | null>(null);
  
    useEffect(() => {
      if (ref.current) {
        const observer = new ResizeObserver(([entry]) => {
          setSize(entry.contentRect.width);
        });
  
        observer.observe(ref.current);
  
        return () => observer.disconnect();
      }
    }, [ref]);
  
    return size;
  }