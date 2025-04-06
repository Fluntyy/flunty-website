<script>
  import Card from "../components/card/card.svelte";
  import { MetaTags } from "svelte-meta-tags";
</script>

<svelte:head>
  <title>Flunty's Website</title>
  <link rel="stylesheet" href="styles/home.css" />
</svelte:head>

<MetaTags
  title="Flunty's Website"
  description="Flunty's personal website, a teenager from Indonesia who loves programming, developing, and gaming."
  openGraph={{
    title: "Flunty's Website",
    description: "Flunty's personal website, a teenager from Indonesia who loves programming, developing, and gaming.",
    images: [
      {
        url: 'https://flunty.xyz/logo.png',
        alt: "Flunty's Logo",
        width: 512,
        height: 512,
        secureUrl: 'https://flunty.xyz/logo.png',
        type: 'image/png'
      },
    ],
  }}
  twitter={{
    title: "Flunty's Website",
    description: "Flunty's personal website, a teenager from Indonesia who loves programming, developing, and gaming.",
    image: 'https://flunty.xyz/logo.png',
  }}
/>

<Card width="37.5rem" height="22.5rem" style="justify-content: center;">
  <span class="montserrat-bold" style="font-size: 3rem; text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);">Hey, I'm Flunty.</span>
  <span class="montserrat-semibold" style="font-size: 1.5rem; text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);">Developer | Designer</span>
  <div class="button-container">
    <a href="projects" class="button montserrat-bold">Projects</a>
    <a href="socials" class="button montserrat-bold">Socials</a>
    <a href="about" class="button montserrat-bold">About</a>
  </div>
</Card>