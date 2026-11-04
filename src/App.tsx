
import { BrowserRouter } from "react-router-dom";
import useTheme from "./hooks/useTheme";
import useSectionNavigation from "./hooks/useSectionNavigation";

import Layout from "./components/layout/Layout";
import PortfolioShowcase from "./components/sections/PortfolioShowcase";
import Services from "./components/sections/Services";
import Process from "./components/sections/Process";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";

import "./styles/transitions.css";

function Home() {
  return (
    <section className="home-hero" id="home">
      <p className="eyebrow">INDEPENDENT CREATIVE STUDIO</p>
      <h1>Clarity, designed.</h1>
      <p>Thoughtful design for brands with something to say.</p>
    </section>
  );
}

function AppContent() {
  const { theme, toggleTheme } = useTheme();

  const {
    activeSection,
    isVisible,
    navigateTo,
  } = useSectionNavigation();

  function renderSection() {
    switch (activeSection) {
      case "home":
        return <Home />;
      case "work":
        return <PortfolioShowcase />;
      case "services":
        return <Services />;
      case "process":
        return <Process />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  }

  return (
    <Layout
      theme={theme}
      onToggleTheme={toggleTheme}
      activeSection={activeSection}
      onNavigate={navigateTo}
    >
      <div
        className={`section-transition ${
          isVisible ? "" : "is-hidden"
        }`}
        key={activeSection}
      >
        {renderSection()}
      </div>
    </Layout>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
