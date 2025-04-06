<script lang="ts">
  import { onMount } from "svelte";

  interface Props {
    backgroundColor: any;
    hoverBackgroundColor: any;
    iconPath: any;
    platformName: any;
    profileName: any;
    link: any;
  }

  let {
    backgroundColor,
    hoverBackgroundColor,
    iconPath,
    platformName,
    profileName,
    link
  }: Props = $props();

  let isShiftHeld = $state(false);

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Shift") {
      isShiftHeld = true;
    }
  }

  function handleKeyup(event: KeyboardEvent) {
    if (event.key === "Shift") {
      isShiftHeld = false;
    }
  }

  onMount(() => {
    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("keyup", handleKeyup);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("keyup", handleKeyup);
    };
  });

  let twitterBackgroundColor = $derived("#1D9BF0");
  let twitterHoverBackgroundColor = $derived("#1A8BD8");
  let twitterIconPath = $derived("icon/twitter.svg");
  let twitterPlatformName = $derived("Twitter");
</script>

<a
  class="socials-button"
  style="background-color: {isShiftHeld && platformName === 'X'
    ? twitterBackgroundColor
    : backgroundColor};
  --hover: {isShiftHeld && platformName === 'X'
    ? twitterHoverBackgroundColor
    : hoverBackgroundColor}"
  href={link}
  target="_blank"
>
  <img
    class="icon"
    src={isShiftHeld && platformName === "X" ? twitterIconPath : iconPath}
    alt={isShiftHeld && platformName === "X"
      ? twitterPlatformName
      : platformName}
  />
  <span class="montserrat-bold" style="margin-right: 1rem;"
    >{isShiftHeld && platformName === "X"
      ? twitterPlatformName
      : platformName}</span
  >
  <span
    class="montserrat-regular"
    style="margin-left: auto;"
    >{profileName}</span
  >
</a>

<style>
  .socials-button {
    display: flex;
    align-items: center;
    padding: 1rem;
    width: 100%;
    border-radius: 1rem;
    color: white;
    text-decoration: none;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: all 0.25s;
  }

  .socials-button:hover {
    background-color: var(--hover) !important;
  }

  .icon {
    width: 32px;
    height: 32px;
    margin-right: 12px;
    pointer-events: none;
  }
</style>
