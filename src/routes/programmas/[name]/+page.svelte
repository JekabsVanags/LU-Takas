<script>
  import { base } from "$app/paths";
  import YearSelect from "./YearSelect.svelte";

  export let data;
</script>

<style>
  #container{
    height: 60vh;
  }
  @media(max-width: 800px){
    #container{
      height: fit-content;
    }
  }

  #image-div{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    background-position: center; 
    background-size: cover;
  }

  #text-div {
    display: flex;
    flex: 1 1;
    height: 100%;
    padding-left: 35vw;
    padding-right: 35vw;
    justify-content: center;
    flex-direction: column;
    color: #EAF1DB;
    background: rgba(0, 0, 0, 0.5);
  }

  @media(max-width: 800px){
    #text-div{
      padding-left: 10vw;
      padding-right: 10vw;
    }
  }

  #year-list{
    display: flex;
    flex: 1;
    justify-content: space-evenly;
    align-items:end;
    position: absolute;
    bottom:100px;
    width: 100vw;
  }

  @media(max-width: 800px){
    #year-list{
      position: sticky;
      flex-direction: column;
      align-items: start;
      bottom: -120px;
    }
  }

  h1 {
    margin: 0px;
    text-align: center;
  }

  p{
    margin: 20px 0px 20px 0px;
    text-shadow: black;
    font-size: 18px;
  }

</style>

<div id="container">
  <div id="image-div" style="background-image: url(..{base + data.img})">
    <div id="text-div">
      <h1>{data.name}</h1>
      <p>{data.description}</p>
    </div>
  </div>
  <div id="year-list">
    {#each Array(data.years) as _, index}
		  <YearSelect year={index+1} link="{base}/programmas/{data.slug}/{index+1}" />
	  {/each}
  </div>
</div>
