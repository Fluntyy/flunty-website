<script>
  function back() {
    window.history.back();
  }
</script>

<div class="nav">
  <button class="back" on:click={back}>
    <i class="fa-solid fa-arrow-left"></i>
  </button>
  <span class="montserrat-bold navtitle" style="font-size: 2.25rem; text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);"><slot></slot></span>
</div>

<style>
  .nav {
    display: flex;
    align-items: center;
    padding: 3rem 3rem 1rem;
    align-self: flex-start;
    gap: 1rem;
  }

  .back {
    width: 3.5rem;
    height: 3.5rem;
    background-color: var(--button-color);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.25);
    text-decoration: none;
    transition: all 0.25s;
    cursor: pointer;
    border: none;
    outline: none;
  }

  .back:hover {
    background-color: var(--button-color-hover);
  }

  .back > i {
    font-size: 2.25rem;
    color: white;
  }

  @media (max-width: 57.75rem) {
    .navtitle {
      font-size: 1.75rem !important;
    }
    .back {
      width: 3.25rem;
      height: 3.25rem;
    }
    .back > i {
      font-size: 2rem;
    }
  }
</style>
