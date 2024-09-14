<script lang="ts">
  function handleClick(): void {
    window.location.href = '/tarot'
  }
</script>
<section class='h-screen bg-neutral-grey-900 back-img'>
  <div class='overlay flex flex-col items-center justify-center'>
    <h1 class='font-whisper text-[52px] text-white text-center mt-[-100px]'>
      Mystic Realms
    </h1>
    <p class="text-primary-blue-300 text-center text-lg cursor-pointer">For all your spiritual and occult needs.</p>
    <div class='wrapper mt-10'>
      <button on:click={handleClick} class="text-xl bg-gray-400 px-4 py-2 border rounded button hover:bg-primary-green-500">Tarot</button>
      <button on:click={handleClick} class="text-xl bg-gray-400 px-4 py-2 border rounded button hover:bg-primary-green-500" disabled>Astrology</button>
    </div>
  </div>  
</section>

<style lang='postcss'>
  .back-img {
    background: url('/images/background_1.webp');
    background-size: cover;
    background-position: center;
    z-index: 0;
  }
  .overlay {
    background: rgba(0, 0, 0, 0.6);
    border-radius: 6px;
    height: 100%;
    width: 100%;
  }
  
  .button:active {
    transform: translate(2px, 3px)
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

</style>