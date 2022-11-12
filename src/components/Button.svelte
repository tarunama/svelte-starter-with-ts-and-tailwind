<script lang="ts">
  export let type = "button";
  export let text = "";
  export let classes = "";

  const padding = "px-1 py-2"

  classes = `${padding}`
</script>

<button {type} class={classes}>
  {text}
</button>
