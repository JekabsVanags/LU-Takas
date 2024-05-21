<script>
  import { darkMode } from "$lib/stores";

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
  }

  #container.reversed{
    flex-direction: row-reverse;
  }

  #description{
    padding: 20px;
    width: 28vw;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
  }

	@media (max-width: 800px) {
    #container{
      flex-direction: column;
    }

    #description{
      padding: 0;
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
  }
  a.dark-mode{
    background-color: #C3D898;
    color: #1C3144;
  }
  a:hover.dark-mode{
    background-color: rgb(224, 235, 202);
  }
  a.light-mode{
    background-color: #1C3144;
    color: #EAF1DB;
  }
  a:hover.light-mode{
    background-color: #24394b;
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
