<script>
  import Card from "../../components/card/card.svelte";
  import Navigation from "../../components/card/navigation.svelte";
  import SocialsButton from "../../components/socials_button.svelte";
  import socials from "$lib/socials.json";
</script>

<svelte:head>
  <link rel="stylesheet" href="src/styles/socials.css" />
</svelte:head>

<Card width="56.25rem" height="33.75rem" style="">
  <Navigation>Socials</Navigation>
  <div class="buttons-container">
    {#each socials as social}
      <div class="button-wrapper">
        <SocialsButton
          backgroundColor={social.backgroundColor}
          hoverBackgroundColor={social.hoverBackgroundColor}
          iconPath={social.iconPath}
          platformName={social.platformName}
          profileName={social.profileName}
          link={social.link}
        />
      </div>
    {/each}
  </div>
</Card>