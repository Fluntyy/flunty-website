<script>
  import { onMount } from "svelte";
  import Card from "../../components/card/card.svelte";
  import Navigation from "../../components/card/navigation.svelte";
  import SocialsButton from "../../components/socials_button.svelte";
  import { api } from "../../api";
  import { projectsStore } from "$lib/stores.js";
  import { MetaTags } from "svelte-meta-tags";

  let isLoading = $state();
  let projects = $state();
  let currentIndex = $state(0);

  projectsStore.subscribe(value => {
    isLoading = value.isLoading;
    projects = value.projects;
  });

  onMount(async () => {
    // Fetch projects data if not already loaded
    let projects = [];
    projectsStore.subscribe(value => {
      projects = value.projects;
    });

    if (projects.length === 0) {
      try {
        const res = await api.get("projects");
        const fetchedProjects = res.data.data.map(project => ({
          ...project,
          date: new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
        }));
        projectsStore.set({ isLoading: false, projects: fetchedProjects });
        preloadImages(fetchedProjects);
      } catch (err) {
        console.error(err);
      }
    } else {
      preloadImages(projects);
    }
  });

  function preloadImages(projects) {
    projects.forEach(project => {
      if (project.backgroundImage) {
        const img = new Image();
        img.src = project.backgroundImage;
      }
    });
  }

  function prev() {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
  }

  function next() {
    currentIndex = (currentIndex + 1) % projects.length;
  }
</script>

<svelte:head>
  <title>Projects - Flunty's Website</title>
  <link rel="stylesheet" href="styles/projects.css" />
</svelte:head>

<MetaTags
  title="Projects - Flunty's Website"
  description="Explore Flunty's projects — a teenager from Indonesia who loves programming, developing, and gaming."
  openGraph={{
    title: "Projects - Flunty's Website",
    description: "Explore Flunty's projects — a teenager from Indonesia who loves programming, developing, and gaming.",
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
    title: "Projects - Flunty's Website",
    description: "Explore Flunty's projects — a teenager from Indonesia who loves programming, developing, and gaming.",
    image: 'https://flunty.xyz/logo.png',
  }}
/>

<Card width="56.25rem" height="33.75rem" style="">
  <div class="nav-wrapper">
    <Navigation>Projects</Navigation>
    <div class="projects-nav-wrapper">
      <button class="projects-nav" onclick={prev} aria-label="Go to previous project">
        <i class="fa-solid fa-angle-left" style="font-size: 2rem;"></i>
      </button>
      <span class="projects-counter montserrat-semibold" style="font-size: 1.25rem; text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); width: 2rem; text-align: center;">{currentIndex + 1}/{projects.length}</span>
      <button class="projects-nav" onclick={next} aria-label="Go to next project">
        <i class="fa-solid fa-angle-right" style="font-size: 2rem;"></i>
      </button>
    </div>
  </div>
  {#if isLoading}
    <div class="loading-container">
      <span class="montserrat-semibold">Loading...</span>
    </div>
  {:else}
    <div class="projects-container">
      <div class="projects-card" style="background-image: linear-gradient(0deg,rgba(0, 0, 0, 0.70) 0%,rgba(0, 0, 0, 0) 70%,rgba(0, 0, 0, 0) 100%),url({projects[currentIndex].backgroundImage});">
        <div class="project-details">
          <span class="title montserrat-bold" style="font-size: 2rem; text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);">{projects[currentIndex].title}</span>
          <span class="description montserrat-semibold" style="font-size: 1rem; text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);">{projects[currentIndex].description} • {projects[currentIndex].date}</span>
        </div>
        <div class="links">
          <a href={projects[currentIndex].githubLink} target="_blank" alt="GitHub Repository" aria-label="GitHub Repository"><i class="fa-brands fa-github" style="font-size: 1.5rem;"></i></a>
          {#if projects[currentIndex].projectLink}
            <a href={projects[currentIndex].projectLink} target="_blank" alt="Open Project" aria-label="Open Project"><i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 1.5rem;"></i></a>
          {/if}
        </div>
      </div>
    </div>
  {/if}
  <div class="projects-nav-wrapper-mobile">
    <button class="projects-nav" onclick={prev} aria-label="Go to previous project">
      <i class="fa-solid fa-angle-left" style="font-size: 2rem;"></i>
    </button>
    <span class="projects-counter montserrat-semibold" style="font-size: 1.25rem; text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); width: 2rem; text-align: center;">{currentIndex + 1}/{projects.length}</span>
    <button class="projects-nav" onclick={next} aria-label="Go to next project">
      <i class="fa-solid fa-angle-right" style="font-size: 2rem;"></i>
    </button>
  </div>
</Card>
