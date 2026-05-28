import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";

const VIRTUAL_WIDTH = 1280;

/**
 * Renders its children inside a fixed-width (1280px) virtual viewport and
 * scales the whole thing with CSS transform to fit the actual container.
 * Combined with `cqw` units inside slides, this keeps the layout perfectly
 * proportional from mobile (~360px) to desktop (>1280px).
 */
export function ScaledSlide({ children }: { children: ReactNode }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState<number>(0);

  const useIso = typeof window === "undefined" ? useEffect : useLayoutEffect;

  useIso(() => {
    if (!wrapRef.current || !innerRef.current) return;
    const update = () => {
      const w = wrapRef.current!.clientWidth;
      const s = w / VIRTUAL_WIDTH;
      setScale(s);
      setHeight(innerRef.current!.offsetHeight * s);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(wrapRef.current);
    ro.observe(innerRef.current);
    return () => ro.disconnect();
  }, [children]);

  return (
    <div ref={wrapRef} style={{ width: "100%", height: height || undefined }}>
      <div
        ref={innerRef}
        style={{
          width: VIRTUAL_WIDTH,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </div>
  );
}
