<script>
  import Card from "../../components/card/card.svelte";
  import Navigation from "../../components/card/navigation.svelte";
  import SocialsButton from "../../components/socials_button.svelte";
  import socials from "$lib/socials.json";

  alert("this is unfinished");

  function prev() {
    alert("you click prev");
  }

  function next() {
    alert("you click next");
  }
</script>

<svelte:head>
  <title>Projects - Flunty's Website</title>
  <link rel="preload" href="styles/projects.css" as="style" />
  <link rel="stylesheet" href="styles/projects.css" />
</svelte:head>

<Card width="56.25rem" height="33.75rem" style="">
  <div class="nav-wrapper">
    <Navigation>Projects</Navigation>
    <div class="projects-nav-wrapper">
      <button class="projects-nav" on:click={prev}>
        <i class="fa-solid fa-angle-left"></i>
      </button>
      <button class="projects-nav" on:click={next}>
        <i class="fa-solid fa-angle-right"></i>
      </button>
    </div>
  </div>
  <div class="projects-container">
    <div class="projects-card">
      <div class="project-details">
        <h3>Flunty's Website 1.0</h3>
        <p>My old website • June 13, 2024</p>
        <div class="links">
          <a href="/github" class="icon">GitHub</a>
          <a href="https://google.com/" class="icon">Visit Site</a>
        </div>
      </div>
    </div>
  </div>
</Card>
