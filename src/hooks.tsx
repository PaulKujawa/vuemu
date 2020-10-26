import React from "react";

interface Props extends IntersectionObserverInit {
  target: React.MutableRefObject<Element | null>;
  enabled: boolean;
  onIntersect: () => void;
}

export const useIntersectionObserver = ({
  target,
  enabled,
  onIntersect,
  root,
  rootMargin,
  threshold
}: Props) => {
  React.useEffect(() => {
    if (!target.current || !enabled) return;

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && onIntersect(),
      { root, rootMargin, threshold }
    );

    const elem = target.current;
    intersectionObserver.observe(elem);

    return () => {
      intersectionObserver.unobserve(elem);
    };
  }, [target, enabled, onIntersect, root, rootMargin, threshold]);
};
