"use client";

import { createElement, useEffect, useRef, useState } from "react";

export default function Reveal({
  as = "div",
  children,
  className = "",
  delay = 0,
  threshold = 0.18,
  style,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold]);

  return createElement(
    as,
    {
      ...rest,
      ref,
      className: `${className} reveal${visible ? " reveal--visible" : ""}`.trim(),
      style: {
        ...style,
        "--reveal-delay": `${delay}ms`
      }
    },
    children
  );
}
