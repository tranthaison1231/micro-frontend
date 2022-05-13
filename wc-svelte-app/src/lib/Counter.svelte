<svelte:options tag="my-counter" />

<script lang="ts">
  export let color;
  let count: number = 0;
  const increment = () => {
    count += 1;
  };
</script>

<button on:click={increment} style:color={color ?? 'red'}>
  Clicks: {count}
</button>

<style>
  button {
    font-family: inherit;
    font-size: inherit;
    padding: 1em 2em;
    background-color: rgba(255, 62, 0, 0.1);
    border-radius: 2em;
    border: 2px solid rgba(255, 62, 0, 0);
    outline: none;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
  }
</style>
