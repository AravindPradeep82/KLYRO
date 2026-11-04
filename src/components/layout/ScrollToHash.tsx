
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const location = useLocation();

  useLayoutEffect(() => {
    if (!location.hash) {
      return;
    }

    const targetId = decodeURIComponent(location.hash.slice(1));
    const element = document.getElementById(targetId);

    if (!element) {
      return;
    }

    requestAnimationFrame(() => {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [location.pathname, location.hash]);

  return null;
}
