"use client";

import React, { useEffect, useRef, useState } from "react";

export interface ScrollVelocityContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function ScrollVelocityContainer({
  children,
  className = "",
  style,
  ...props
}: ScrollVelocityContainerProps) {
  return (
    <div
      className={`logo-strip-velocity ${className}`}
      style={{
        width: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        whiteSpace: "nowrap",
        position: "relative",
        userSelect: "none",
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

export interface ScrollVelocityRowProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  baseVelocity?: number;
  direction?: 1 | -1;
  className?: string;
  numCopies?: number;
  pauseOnHover?: boolean;
}

export function ScrollVelocityRow({
  children,
  baseVelocity = 2.5,
  direction = 1,
  className = "",
  numCopies = 2,
  pauseOnHover = true,
  style,
  ...props
}: ScrollVelocityRowProps) {
  const baseX = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const singleCopyRef = useRef<HTMLSpanElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const lastScrollY = useRef(0);
  const scrollVelocity = useRef(0);
  const lastTime = useRef<number | null>(null);
  const isHovered = useRef(false);

  useEffect(() => {
    const measure = () => {
      if (singleCopyRef.current) {
        setContentWidth(singleCopyRef.current.offsetWidth);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [children]);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - lastScrollY.current;
      lastScrollY.current = currentScrollY;
      scrollVelocity.current = Math.min(Math.max(deltaY * 0.15, -12), 12);

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        scrollVelocity.current = 0;
      }, 120);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  useEffect(() => {
    let animId: number;

    const animate = (time: number) => {
      if (lastTime.current !== null) {
        const delta = Math.min((time - lastTime.current) / 1000, 0.1);
        const hoverMultiplier = isHovered.current ? 0.2 : 1;
        const currentSpeed =
          (baseVelocity + Math.abs(scrollVelocity.current) * 4) *
          direction *
          hoverMultiplier;

        baseX.current += currentSpeed * delta * 20;

        if (contentWidth > 0) {
          if (baseX.current >= contentWidth) {
            baseX.current = baseX.current % contentWidth;
          } else if (baseX.current <= -contentWidth) {
            baseX.current = baseX.current % contentWidth;
          }
        }

        if (containerRef.current) {
          const moveX = -baseX.current;
          containerRef.current.style.transform = `translate3d(${moveX}px, 0, 0)`;
        }
      }

      lastTime.current = time;
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [baseVelocity, direction, contentWidth]);

  const copiesCount = Math.max(numCopies, 2);

  return (
    <div
      className={`logo-strip-velocity-row ${className}`}
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        width: "100%",
        ...style,
      }}
      onMouseEnter={() => {
        if (pauseOnHover) isHovered.current = true;
      }}
      onMouseLeave={() => {
        if (pauseOnHover) isHovered.current = false;
      }}
      {...props}
    >
      <div
        ref={containerRef}
        className="logo-strip-velocity-track"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          alignItems: "center",
          whiteSpace: "nowrap",
          willChange: "transform",
          transform: "translate3d(0, 0, 0)",
        }}
      >
        <span
          ref={singleCopyRef}
          className="logo-strip-velocity-group"
          style={{
            display: "inline-flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            alignItems: "center",
            whiteSpace: "nowrap",
            flexShrink: 0,
            padding: "0 12px",
          }}
        >
          {children}
        </span>
        {Array.from({ length: copiesCount - 1 }).map((_, i) => (
          <span
            key={i}
            className="logo-strip-velocity-group"
            style={{
              display: "inline-flex",
              flexDirection: "row",
              flexWrap: "nowrap",
              alignItems: "center",
              whiteSpace: "nowrap",
              flexShrink: 0,
              padding: "0 12px",
            }}
            aria-hidden="true"
          >
            {children}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ScrollVelocityContainer;
