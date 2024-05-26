<script>
  import Popup from "./Popup.svelte";

  export let image;
  export let altText;
  export let title;
  export let teaser;
  export let content;
  export let stopScrolling;

  let popupOpen = false;

  function setPopupOpen(){
    popupOpen = true;
  }

  function setPopupClose(){
    popupOpen = false;
  }

</script>

<style>
  div{
    position: relative;
  }
  img{
    height: 250px;
    width: 450px;
  }
  h1, p{
    padding: 10px;
  }
  .obscure{
    position: absolute;
    background-color: rgba(0, 0, 0, 0);
    bottom: 0;
    left: 0;
    height: 280px;
    width: 450px;
    z-index: 5;
    color: transparent;
    transition: color 0.5s ease, background-color 0.5s ease;
    border: none;
  }
  .obscure:hover{
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
  }
</style>

<div>
  <img src={image} alt={altText}/>
  <button on:click={() => {setPopupOpen(); stopScrolling();}} class="obscure">
    <h1>{title}</h1>
    <p>{teaser}</p>
  </button>

  {#if popupOpen == true}
    <Popup close={setPopupClose} title={title} content={content} img={image} imgAlt={altText}></Popup>
  {/if}

</div>