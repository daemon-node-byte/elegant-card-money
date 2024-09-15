<script lang="ts">
  import { TarotDataAPI } from '$lib/utils/TarotDataAPI';
  import type { TarotCardT } from '$lib/types/tarot'
 export let data;
 const cards = data.cards.map((card: TarotCardT) => ({...card, imagePath: new TarotDataAPI().getCardImagePath(card)}))
</script>

<div class='text-center bg-neutral-grey-950 flex flex-wrap justify-center align-center'>
  {#each cards as card}
    <div class='inline-block w-1/3 my-2 px-1'>
      <img src={card.imagePath} alt={card.name} />
    </div>
  {/each}
</div>