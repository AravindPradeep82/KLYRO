
import { useCallback, useState } from "react";

export type SectionName =
  | "home"
  | "work"
  | "services"
  | "process"
  | "about"
  | "contact";

export default function useSectionNavigation() {
  const [activeSection, setActiveSection] =
    useState<SectionName>("home");

  const [isVisible, setIsVisible] = useState(true);

  const navigateTo = useCallback((section: SectionName) => {
    if (section === activeSection) return;

    setIsVisible(false);

    window.setTimeout(() => {
      setActiveSection(section);
      window.scrollTo({ top: 0, behavior: "instant" });
      setIsVisible(true);
    }, 250);
  }, [activeSection]);

  return {
    activeSection,
    isVisible,
    navigateTo,
  };
}
