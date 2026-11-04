
import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import type { Theme } from "../../hooks/useTheme";
import type { SectionName } from "../../hooks/useSectionNavigation";

type LayoutProps = {
  children: ReactNode;
  theme: Theme;
  onToggleTheme: () => void;
  activeSection: SectionName;
  onNavigate: (section: SectionName) => void;
};

export default function Layout({
  children,
  theme,
  onToggleTheme,
  activeSection,
  onNavigate,
}: LayoutProps) {
  return (
    <>
      <Header
        theme={theme}
        onToggleTheme={onToggleTheme}
        activeSection={activeSection}
        onNavigate={onNavigate}
      />

      <main id="main-content">{children}</main>

      <Footer onNavigate={onNavigate} />
    </>
  );
}
