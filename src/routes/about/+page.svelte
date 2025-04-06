<script>
  import Card from "../../components/card/card.svelte";
  import Navigation from "../../components/card/navigation.svelte";
  import { MetaTags } from "svelte-meta-tags";
</script>

<svelte:head>
  <title>About - Flunty's Website</title>
  <link rel="stylesheet" href="styles/about.css" />
</svelte:head>

<MetaTags
  title="About - Flunty's Website"
  description="About Flunty, a teenager from Indonesia who loves programming, developing, and gaming."
  openGraph={{
    title: "About - Flunty's Website",
    description: "About Flunty, a teenager from Indonesia who loves programming, developing, and gaming.",
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
    title: "About - Flunty's Website",
    description: "About Flunty, a teenager from Indonesia who loves programming, developing, and gaming.",
    image: 'https://flunty.xyz/logo.png',
  }}
/>

<Card width="56.25rem" height="33.75rem" style="">
  <Navigation>About</Navigation>
  <div class="about-container">
    <span
      class="montserrat-semibold"
      style="font-size: 1.5rem; text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);"
      >Hi, I'm <strong>Flunty</strong>! I'm a teenager from Indonesia who loves
      programming, developing, and gaming. I spend a lot of my time making
      websites, writing programs, and doing some random experiments.</span
    >
    <br /><br />
    <span
      class="montserrat-semibold"
      style="font-size: 1.5rem; text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);"
      >I have a big interest in old retro things, and they often inspire my
      projects and hobbies.</span
    >
    <br /><br />
    <span
      class="montserrat-semibold"
      style="font-size: 1.5rem; text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);"
      >My favorite games are <img
        src="icon/minecraft.svg"
        alt="Minecraft Logo"
        class="icons"
      />
      Minecraft,
      <img
        src="icon/genshin-impact.svg"
        alt="Genshin Impact Logo"
        class="icons"
      />
      Genshin Impact, and
      <img src="icon/portal.svg" alt="Portal Logo" class="icons" /> 
      Portal (1 & 2). I also enjoy games that challenge my creativity and problem-solving skills.</span
    >
  </div>
</Card>
