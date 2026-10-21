import { useEffect } from "react";
import { applyTheme } from "#/content/theme";

function toggleTheme(button: HTMLButtonElement) {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(next, true);
  const bulb = button.querySelector(".theme-bulb");
  if (!bulb || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  bulb.classList.remove("is-lit", "is-out");
  void bulb.getBoundingClientRect();
  bulb.classList.add(next === "light" ? "is-lit" : "is-out");
}

export function ThemeToggle() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      let stored: string | null = null;
      try {
        stored = localStorage.getItem("theme");
      } catch {
        return;
      }
      if (stored === "light" || stored === "dark") return;
      applyTheme(media.matches ? "dark" : "light", false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <button
      type="button"
      aria-label="Switch color theme"
      className="theme-toggle text-muted hover:text-ink"
      onClick={(event) => toggleTheme(event.currentTarget)}
    >
      <svg viewBox="0 0 24 24" className="theme-bulb" aria-hidden="true">
        <defs>
          <radialGradient id="theme-bulb-glow-fill" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#fff6d2" />
            <stop offset="42%" stopColor="#f6c14a" stopOpacity="0.72" />
            <stop offset="100%" stopColor="#f6c14a" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle
          className="theme-bulb-glow"
          cx="12"
          cy="9.2"
          r="9"
          fill="url(#theme-bulb-glow-fill)"
        />
        <g className="theme-bulb-rays">
          <path d="M12 1v1.7M4.9 3.2l1.2 1.2M19.1 3.2l-1.2 1.2M2.2 9.6h1.7M20.1 9.6H21.8" />
        </g>
        <path
          className="theme-bulb-glass"
          d="M12 2.6a5.7 5.7 0 0 0-3.4 10.2c.4.4.7.9.7 1.4V16h5.4v-1.8c0-.5.3-1 .7-1.4A5.7 5.7 0 0 0 12 2.6Z"
        />
        <path
          className="theme-bulb-filament"
          d="M10.1 9.5c.55-1.5 3.25-1.5 3.8 0-.55 1.4-3.25 1.4-3.8 0Z"
        />
        <path className="theme-bulb-base" d="M9.3 17.1h5.4M9.8 18.6h4.4M10.4 20.1h3.2" />
      </svg>
    </button>
  );
}
