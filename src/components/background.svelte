<div class="wrapper">
  <div class="background">
    <img src="mountain/4.svg" alt="" class="mountain" />
    <img src="mountain/3.svg" alt="" class="mountain" />
    <img src="mountain/2.svg" alt="" class="mountain" />
    <img src="mountain/1.svg" alt="" class="mountain" />
  </div>
</div>

<style>
  .wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
  }

  .background {
    position: absolute;
    top: 0;
    left: 50%;
    width: max(1400px, 100%);
    transform: translateX(-50%);
    height: 100%;
    background-image: var(--background-gradient);
    pointer-events: none;
    user-select: none;
  }

  @keyframes m1 {
    from {
      bottom: -100%;
      visibility: visible;
    }

    to {
      bottom: 0;
      visibility: visible;
    }
  }

  @keyframes m2 {
    from {
      bottom: -110%;
      visibility: visible;
    }

    to {
      bottom: 0;
      visibility: visible;
    }
  }

  @keyframes m3 {
    from {
      bottom: -120%;
      visibility: visible;
    }

    to {
      bottom: 0;
      visibility: visible;
    }
  }

  @keyframes m4 {
    from {
      bottom: -130%;
      visibility: visible;
    }

    to {
      bottom: 0;
      visibility: visible;
    }
  }

  .mountain {
    animation-delay: .5s !important;
    position: absolute;
    visibility: hidden;
    bottom: 0;
    width: 100%;
    transition:
      top 0.25s,
      bottom 0.25s;
    vertical-align: middle;
  }

  .mountain:nth-of-type(1) {
    animation: m1 1.25s forwards cubic-bezier(0.27, 0.1, 0.19, 0.99);
    content: var(--m1);
  }
  .mountain:nth-of-type(2) {
    animation: m2 1.25s forwards cubic-bezier(0.27, 0.1, 0.19, 0.99);
    content: var(--m2);
  }
  .mountain:nth-of-type(3) {
    animation: m3 1.25s forwards cubic-bezier(0.27, 0.1, 0.19, 0.99);
    content: var(--m3);
  }
  .mountain:nth-of-type(4) {
    animation: m4 1.25s forwards cubic-bezier(0.27, 0.1, 0.19, 0.99);
    content: var(--m4);
  }
</style>
