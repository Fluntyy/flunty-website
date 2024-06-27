<div class="nav">
  <a class="back" href="../">
    <i class="fa-solid fa-arrow-left"></i>
  </a>
  <span class="montserrat-bold" style="font-size: 2.25rem"><slot></slot></span>
</div>

<style>
  .nav {
    display: flex;
    /* justify-content: space-between; */
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
  }

  .back:hover {
    background-color: var(--button-color-hover);
  }

  .back > i {
    font-size: 2.25rem;
    color: white;
  }
</style>
