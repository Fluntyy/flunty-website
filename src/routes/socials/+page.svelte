<script lang="ts">
  import { onMount } from "svelte";
  import Card from "../../components/card/card.svelte";
  import Navigation from "../../components/card/navigation.svelte";
  import SocialsButton from "../../components/socials_button.svelte";
  import { api } from "../../api";
  import { socialsStore } from "$lib/stores.js";
  import { MetaTags } from "svelte-meta-tags";

  let isLoading = $state();
  let socials = $state();

  socialsStore.subscribe(value => {
    isLoading = value.isLoading;
    socials = value.socials;
  });

  onMount(() => {
    if (socials.length === 0) {
      api.get("profiles")
        .then((res) => {
          socialsStore.set({ isLoading: false, socials: res.data.data });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  });
</script>

<svelte:head>
  <title>Socials - Flunty's Website</title>
  <link rel="stylesheet" href="styles/socials.css" />
</svelte:head>

<MetaTags
  title="Socials - Flunty's Website"
  description="Explore Flunty's socials — a teenager from Indonesia who loves programming, developing, and gaming."
  openGraph={{
    title: "Socials - Flunty's Website",
    description: "Explore Flunty's socials — a teenager from Indonesia who loves programming, developing, and gaming.",
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
    title: "Socials - Flunty's Website",
    description: "Explore Flunty's socials — a teenager from Indonesia who loves programming, developing, and gaming.",
    image: 'https://flunty.xyz/logo.png',
  }}
/>

<Card width="56.25rem" height="33.75rem" style="">
  <Navigation>Socials</Navigation>
  <div class="buttons-container">
    {#if isLoading}
    <span class="montserrat-semibold">Loading...</span>
    {:else if socials}
      {#each socials as social}
        <div class="button-wrapper">
          <SocialsButton
            backgroundColor={social.backgroundColor}
            hoverBackgroundColor={social.hoverBackgroundColor}
            iconPath={`https://api.flunty.xyz${social.iconPath}`}
            platformName={social.platformName}
            profileName={social.profileName}
            link={`/${social.platformName.toLowerCase()}`}
          />
        </div>
      {/each}
    {/if}
  </div>
</Card>
