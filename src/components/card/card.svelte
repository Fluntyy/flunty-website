<script>
  import { fade, opacity } from '$lib/stores.js';
  import { scale } from "svelte/transition";
  export let width;
  export let height;
  export let style;
</script>

<div class="card-container">
  <div class="card" style="width: {width}; height: {height}; {style};" class:fade={$fade == 1} class:opacity={$opacity == 1} transition:scale>
    <slot />
  </div>
</div>

<style>
  .card-container {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
  }

  .card {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.25) 0%,
      rgba(0, 0, 0, 0.15) 100%
    );
    border: solid 4px transparent;
    border-radius: 4rem;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(24px);
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    transition: all 0.4s ease;
  }
</style>
