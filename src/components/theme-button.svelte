<script>
  import { onMount } from "svelte";
  import { afterUpdate } from "svelte";

  import faviconLight from "$lib/favicon.svg";
  import faviconDark from "$lib/favicon-dark.svg";

  let favicon = faviconLight;
  let theme = "light";
  let icon = "moon.svg";
  let themecolor = "#5e7c92";

  const toggleTheme = () => {
    theme = theme === "dark" ? "light" : "dark";
    document.documentElement.className = theme;
    saveTheme();
    changeIcon();
    changeFavicon();
    changeThemeColor();
  };

  const updateTheme = () => {
    const prefersMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const savedTheme = localStorage.getItem("theme");
    theme = savedTheme || (prefersMode ? "dark" : "light");
    document.documentElement.className = theme;
    changeIcon();
    changeFavicon();
    changeThemeColor();
  };

  const changeThemeColor = () => {
    themecolor = theme === "dark" ? "#1a2730" : "#5e7c92";
  };

  const changeIcon = () => {
    icon = theme === "dark" ? "sun.svg" : "moon.svg";
  };

  const changeFavicon = () => {
    favicon = theme === "dark" ? faviconDark : faviconLight;
  };

  const saveTheme = () => {
    localStorage.setItem("theme", theme);
  };

  onMount(updateTheme);
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <meta name="theme-color" content={themecolor}>
</svelte:head>

<button type="button" on:click={toggleTheme} class="theme-button" tabindex="0">
  <img src={icon} alt="Toggle Theme" class="theme-icon" draggable="false" />
</button>

<style>
  .theme-button {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    width: 3.5rem;
    height: 3.5rem;
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.25) 0%,
      rgba(0, 0, 0, 0.15) 100%
    );
    border: solid 4px transparent;
    border-radius: 1rem;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.25);
    -webkit-backdrop-filter: blur(24px);
    backdrop-filter: blur(24px);
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    animation: fade 2s;
    z-index: 2;
  }

  .theme-icon {
    pointer-events: none;
    width: 2rem;
    height: 2rem;
  }
</style>
