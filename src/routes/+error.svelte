<script lang="ts">
  import { page } from '$app/stores';
  const errMsg = $page.error === null ? 'unknown error occurred' : $page.error?.message;
  const errCode = $page.status 
</script>

<div class="h-screen w-screen flex flex-col items-center justify-center">
  <h1 class='text-white text-[22px]'>
    Oops! Something went wrong!
  </h1>
  <h2 class="font-whisper text-[48px] my-4 text-white">
    {errMsg}
  </h2>
  <h2 class='text-3xl text-support-red-600'>
    {errCode}
  </h2>
  <a href="/" class="text-xl bg-gray-400 px-4 py-2 border rounded button hover:bg-primary-green-500 mt-12">Go back</a>
</div>