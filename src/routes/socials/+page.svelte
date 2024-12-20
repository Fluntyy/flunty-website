<script lang="ts">
  import { onMount } from "svelte";
  import Card from "../../components/card/card.svelte";
  import Navigation from "../../components/card/navigation.svelte";
  import SocialsButton from "../../components/socials_button.svelte";
  import { api } from "../../api";

  let isLoading = true;
  let socials = [];

  api.get("profiles")
  .then((res) => {
    console.log(res.data.data);
    socials = res.data.data;
    isLoading = false;
  })
  .catch((err) => {
    console.error(err);
  });
</script>

<svelte:head>
  <title>Socials - Flunty's Website</title>
  <link rel="preload" href="styles/socials.css" as="style" />
  <link rel="stylesheet" href="styles/socials.css" />
</svelte:head>

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
