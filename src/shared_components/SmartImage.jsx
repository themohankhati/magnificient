import React, { useEffect, useRef, useState } from "react";

// Generic, lightweight image component for performance
// - Lazy loads by default via IntersectionObserver
// - Uses decoding="async"
// - Supports priority images for LCP (eager + fetchpriority="high")
// - Adds width/height if provided to reduce layout shift
export default function SmartImage({
  src,
  alt = "",
  className = "",
  width,
  height,
  priority = false,
  onLoad,
  ...rest
}) {
  const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(priority);

  useEffect(() => {
    if (priority || !imgRef.current) return;

    let observer;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.disconnect();
            }
          });
        },
        { rootMargin: "200px 0px" }
      );
      observer.observe(imgRef.current);
    } else {
      // Fallback: no IO, load immediately
      setIsVisible(true);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [priority]);

  const imgProps = {
    ref: imgRef,
    alt,
    className,
    width,
    height,
    decoding: "async",
    loading: priority ? "eager" : "lazy",
    fetchpriority: priority ? "high" : "auto",
    onLoad,
    ...rest,
  };

  return <img {...imgProps} src={isVisible ? src : undefined} />;
}
