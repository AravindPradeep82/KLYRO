type ThemeToggleProps = {
  theme: "light" | "dark";
  onToggle: () => void;
};

export default function ThemeToggle({
  theme,
  onToggle,
}: ThemeToggleProps) {
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      {theme === "light" ? "Dark mode" : "Light mode"}
    </button>
  );
}