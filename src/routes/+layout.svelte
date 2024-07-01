<script lang="ts">
  import "../styles/index.css";
  import Background from "../components/background.svelte";
  import ThemeButton from "../components/theme-button.svelte";
  import { onMount } from "svelte";
  import { page } from "$app/stores";

  // let current_path = $page.url.pathname;

  // function removeFade() {
  //   if ($page.url.pathname !== current_path) {
  //     console.log(current_path);
  //     document.getElementsByClassName("card")[0].classList.remove("fade");
  //   }
  // }

  onMount(() => {
    document.getElementsByClassName("card")[0].classList.add("fade");
    setTimeout(() => {
     document.getElementsByClassName("card")[0].classList.remove("fade");
    }, 2000); 
  });
</script>

<Background></Background>
<ThemeButton></ThemeButton>

<slot />