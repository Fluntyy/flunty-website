<script>
  import { page } from "$app/stores";
  import Card from "../components/card/card.svelte";
</script>

<svelte:head>
  <title>{$page.status} - Flunty's Website</title>
</svelte:head>

<Card width="37.5rem" height="22.5rem" style="justify-content: center;">
  <div class="header-container">
    <span
      class="montserrat-bold"
      style="font-size: 3rem; text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); text-align: center;"
      >{$page.status} - {$page.error?.message}</span
    >
  </div>
  {#if $page.status === 404}
    <span
      class="montserrat-semibold"
      style="font-size: 1.5rem; text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); padding: 0 3rem 0 3rem; text-align: center;"
      >The page you're looking for doesn't exist.</span
    >
  {:else}
    <span
      class="montserrat-semibold"
      style="font-size: 1.5rem; text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); padding: 0 3rem 0 3rem; text-align: center;"
      >An error has encountered when loading this page.</span
    >
  {/if}
  <a href="/" class="button montserrat-bold">Back to Home</a>
</Card>

<style>
  .button {
    background-color: var(--button-color);
    padding: 0.75rem 2rem;
    border-radius: 18px;
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 1rem !important;
    text-align: center;
    text-shadow: none;
    text-decoration: none;
    transition: all 0.25s;
    margin-top: 2rem;
  }

  @media (max-width: 39rem) {
    :global(.card) {
      width: 100% !important;
      max-width: 100%;
      margin: 1.5rem;
    }

    :global(.header-container) > .montserrat-bold {
      font-size: min(7vw, 2.5rem) !important;
    }

    :global(.card) > .montserrat-semibold {
      font-size: min(3.5vw, 1.25rem) !important;
    }
  }
</style>
