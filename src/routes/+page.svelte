<script>
  import Card from "../components/card/card.svelte";
</script>

<svelte:head>
  <title>Flunty's Website</title>
  <link rel="preload" href="styles/home.css" as="style" />
  <link rel="stylesheet" href="styles/home.css" />
</svelte:head>

<Card width="37.5rem" height="22.5rem" style="justify-content: center;">
  <span class="montserrat-bold" style="font-size: 3rem; text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);">Hey, I'm Flunty.</span>
  <span class="montserrat-semibold" style="font-size: 1.5rem; text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);">Developer | Designer</span>
  <div class="button-container">
    <a href="github" class="button montserrat-bold">Projects</a>
    <a href="socials" class="button montserrat-bold">Socials</a>
    <a href="about" class="button montserrat-bold">About</a>
  </div>
</Card>