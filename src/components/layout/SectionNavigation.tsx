
import type { SectionName } from "../../hooks/useSectionNavigation";

type SectionNavigationProps = {
  activeSection: SectionName;
  onNavigate: (section: SectionName) => void;
};

export default function SectionNavigation({
  activeSection,
  onNavigate,
}: SectionNavigationProps) {
  const links: { label: string; section: SectionName }[] = [
    { label: "Home", section: "home" },
    { label: "Work", section: "work" },
    { label: "Services", section: "services" },
    { label: "Process", section: "process" },
    { label: "About", section: "about" },
  ];

  return (
    <nav className="main-nav" aria-label="Main navigation">
      {links.map((link) => (
        <button
          key={link.section}
          type="button"
          className={activeSection === link.section ? "active" : ""}
          onClick={() => onNavigate(link.section)}
        >
          {link.label}
        </button>
      ))}
    </nav>
  );
}
