<script>
  import { darkMode } from "$lib/stores.js";

  export let reversed = 0;
  export let title = "";
  export let description = "";
  export let link;
  export let image = "";
  export let imageAlt = "";

  let isDarkMode;

  darkMode.subscribe((value) => {
    isDarkMode = value;
  })
</script>

<style>
  #container{
    display: flex;
    margin: 20px;
    align-items: center;
  }

  #container.reversed{
    flex-direction: row-reverse;
  }

  #description{
    padding: 20px;
    width: 28vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #description p{
    max-height: 200px;
    overflow: auto;
  }

  #description.light-mode{
    color: #000000;
  }

  #description.dark-mode{
    color: #EAF1DB;
  }
  
  img{
    width: 30vw;
    height: 300px;
    object-fit: cover;
  }

	@media (max-width: 800px) {
    #container{
      flex-direction: column;
    }

    #container.reversed{
      flex-direction: column;
    }

    #description{
      padding: 10px;
      width: 70vw;
    }

    img{
      width: 70vw;
      height: auto;
    }
  }

  h1{
    margin: 0px;
  }

  a{
    width: calc(100% - 16px);
    display: inline-block;
    border-width: 0;
    padding: 8px;
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;
    text-align: center;
    margin-left: 0px;
    transition: margin-left 0.5s ease;
  }
  a:hover{
    margin-left: 10px;
    transition: margin-left 0.5s ease;
  }
  a.dark-mode{
    background-color: #C3D898;
    color: #1C3144;
  }
  a.light-mode{
    background-color: #1C3144;
    color: #EAF1DB;
  }
</style>

<div id="container" class={reversed == 0 ? "reversed" : ""}>
  <img src={image} alt={imageAlt}/>
  <div id="description" class={isDarkMode ? "dark-mode" : "light-mode"}>
      <h1>{title}</h1>
      <p>{description}</p>
    <a href={link} class={isDarkMode ? "dark-mode" : "light-mode"}>Lasīt vairāk!</a>
  </div>
</div>
