import { RefObject, useEffect } from "react";

type Opts = IntersectionObserverInit & { selector?: string };

export default function useFadeOnView(
  containerRef: RefObject<HTMLElement | null>,
  opts: Opts = { selector: "h1, h2, p, img", threshold: 0.35, rootMargin: "0px 0px -20% 0px" }
) {
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const { selector = "h1, h2, p, img", threshold, rootMargin } = opts;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-6");
            entry.target.classList.add("opacity-100", "translate-y-0");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    const targets = el.querySelectorAll(selector);
    targets.forEach((t) => {
      t.classList.add("opacity-0", "translate-y-6", "transition-all", "duration-700", "ease-out");
      observer.observe(t);
    });

    return () => observer.disconnect();
  }, [containerRef, opts]);
}
