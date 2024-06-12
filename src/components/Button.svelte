<script lang="ts">
  export let type = "button";
  export let text = "text";
  // export let size: ButtonSize = "medium"
  export let classes = "";

  // TODO: create helper
  const padding = "py-0.5 px-2";
  // TODO: create helper
  const border = "border";
  // TODO: create helper
  const borderRadius = "rounded";
  // const widthAndHeight = convertToClass(size);

  classes = `${padding} ${border} ${borderRadius}`;
</script>

<button {type} class={classes}>
  {text}
</button>
