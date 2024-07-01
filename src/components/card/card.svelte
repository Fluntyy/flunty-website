<script>
  export let width;
  export let height;
  export let style;
  import { scale } from "svelte/transition";
</script>

<div class="card-container">
  <div class="card" style="width: {width}; height: {height}; {style}" transition:scale>
    <slot></slot>
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
    flex-direction: column;
    -webkit-user-select: none;
    -moz-user-select: none;
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
    -webkit-backdrop-filter: blur(24px);
    backdrop-filter: blur(24px);
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    transition: all 0.4s ease;
  }
</style>
