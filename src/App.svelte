<script lang="ts">
  import Tailwindcss from "./Tailwindcss.svelte";
  import Button from "./components/Button.svelte";
</script>

<Tailwindcss />

<main class="mx-auto my-0 p-8 text-center">
  <h1 class="mb-4 text-xl font-bold">Svelte Material Components</h1>
  <div class="mt-8 text-center">
    <h2 class="font-semibold">examples</h2>
    <div class="text-left w-28 mx-auto my-0">
      <Button text="example button" />
    </div>
  </div>
</main>
