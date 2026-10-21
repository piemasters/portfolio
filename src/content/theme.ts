export const themeColors = {
  light: "#f4f0e6",
  dark: "#161311",
} as const;

export type ThemeName = keyof typeof themeColors;

const storageKey = "theme";

function setThemeColor(color: string) {
  const metas = document.querySelectorAll('meta[name="theme-color"]');
  const meta = metas[0] ?? document.head.appendChild(document.createElement("meta"));
  meta.setAttribute("name", "theme-color");
  meta.setAttribute("content", color);
  for (const extra of Array.from(metas).slice(1)) extra.remove();
}

export function applyTheme(theme: ThemeName, persist: boolean) {
  const root = document.documentElement;
  root.classList.add("theme-switching");
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
  setThemeColor(themeColors[theme]);
  if (persist) {
    try {
      localStorage.setItem(storageKey, theme);
    } catch {
      // Storage can be blocked; the choice still applies for this view.
    }
  }
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      root.classList.remove("theme-switching");
    });
  });
}

export const themeBootScript = `(function(){try{var stored=localStorage.getItem(${JSON.stringify(storageKey)});var theme=stored==="light"||stored==="dark"?stored:(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");var root=document.documentElement;root.dataset.theme=theme;root.style.colorScheme=theme;var color=theme==="dark"?"${themeColors.dark}":"${themeColors.light}";var meta=document.querySelector('meta[name="theme-color"]');if(!meta){meta=document.createElement("meta");meta.setAttribute("name","theme-color");document.head.appendChild(meta);}meta.setAttribute("content",color);}catch(e){}})();`;
