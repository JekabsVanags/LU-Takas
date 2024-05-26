<script>
  import { darkMode } from "$lib/stores";

  export let year;
  export let link;

  let isDarkMode;
  
  darkMode.subscribe((value) => {
    isDarkMode = value;
  });
</script>

<style>
  .card{
    height: 300px;
    width: 20vw;
    max-width: 150px;
    padding-left: 20px;
    position: relative;
    padding-bottom: 0px;
    transition: padding-bottom 0.5s ease;
    text-decoration: none;
  }
  .card:hover{
    position: relative;
    padding-bottom: 30px;
    transition: padding-bottom 0.5s ease;
  }

  @media(max-width: 800px){
    .card{
      height: 120px;
      max-width: none;
      width: 80vw;
      margin-bottom: 20px;
      padding-left: 20px;
      padding-bottom: 0px;
      transition: padding-left 0.5s ease;
    }
    .card:hover{
      height: 120px;
      bottom: 0;
      padding-left: 50px;
      padding-bottom: 0px;
      transition: padding-left 0.5s ease;
    }
    h1{
      margin: 0px;
    }
  }

  .card.light-mode{
    background-color: #1C3144;
    color: #EAF1DB;
  }
  .card.dark-mode{
    background-color: #C3D898;
    color: #164270;
  }
  h1{
    font-size: 100px;
    font-style: italic;
  }
  .text{
    display: flex;
    align-items: baseline;
  }
  .text p{
    margin-left: -8px;
  }
</style>

<a href={link} class="card {isDarkMode ? "dark-mode" : "light-mode"}">
  <div class="text">
    <h1>
      {year}
    </h1>
    <p>
      .gads
    </p>
  </div>
</a>