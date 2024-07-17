<script lang="ts">
  import "../styles/index.css";
  import Background from "../components/background.svelte";
  import ThemeButton from "../components/theme_button.svelte";
  import { fade, opacity } from "$lib/stores.js";
  import { onMount } from "svelte";

  onMount(() => {
    console.log(opacity);
    fade.set(1);
    opacity.set(0);
    setTimeout(() => {
      fade.set(0);
    }, 2000); 
  });
</script>

<Background></Background>
<ThemeButton></ThemeButton>

<slot />