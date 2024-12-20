<script lang="ts">
  import "@fortawesome/fontawesome-free/css/all.min.css";
  import Background from "../components/background.svelte";
  import ThemeButton from "../components/theme_button.svelte";
  import { fade, opacity, socials } from "$lib/stores.js";
  import { onMount } from "svelte";

  onMount(() => {
    fade.set(1);
    opacity.set(0);
    setTimeout(() => {
      fade.set(0);
    }, 3500);
  });
</script>

<svelte:head>
  <link rel="stylesheet" href="/styles/index.css" />
</svelte:head>

<Background></Background>
<ThemeButton></ThemeButton>

<slot />
