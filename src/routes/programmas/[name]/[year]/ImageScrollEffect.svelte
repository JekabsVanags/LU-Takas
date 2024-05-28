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
    height: 320px;
    width: 500px;
    object-fit: cover;
    transition: height 0.3s ease-in-out, width 0.3s ease-in-out;
  }
  div:hover img{
    height: 340px;
    width: 520px;
    transition: height 0.3s ease-in-out, width 0.3s ease-in-out;
  }
  h1, p{
    padding: 10px;
  }
  .obscure{
    position: absolute;
    background-color: rgba(0, 0, 0, 0);
    left: 0;
    height: 320px;
    width: 500px;
    z-index: 5;
    color: transparent;
    transition: color 0.5s ease, background-color 0.5s ease, height 0.3s ease-in-out, width 0.3s ease-in-out;
    border: none;
  }
  div:hover .obscure{
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    height: 340px;
    width: 520px;
    transition: height 0.3s ease-in-out, width 0.3s ease-in-out;
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