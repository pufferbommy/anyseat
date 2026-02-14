<script>
  import { Button } from "$lib/components/ui/button";

  let count = $state(1)
</script>

<h1 class="text-6xl font-bold underline">
  Hello world!
</h1>
<Button onclick={() => count++}>{count}</Button>