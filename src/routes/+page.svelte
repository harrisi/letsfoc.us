<script>
  import { blur } from 'svelte/transition'
  // load from somewhere else
  let thing_list = [
    'writing',
    'programming',
    'coding',
    'breathing',
    'relaxing',
    'drawing',
    'painting',
    'grieving',
    'thinking',
    'problem solving',
    'practicing',
    'speaking',
    'reading',
    'exercising',
    'something',
  ]

  /** @type string */
  let on_something
  let getThing = (arr = thing_list, def = 'anything') =>
    arr.filter(el => el != on_something).at(Math.floor(Math.random() * arr.length)) ?? def
  on_something = getThing()
  let paused = false

  setInterval(() => {
    if (!paused) {
      on_something = getThing()
    }
  }, 2500)
</script>

<div id="container">
  <div id="get_started">
    let's focus on
    {#key on_something}
      <div on:pointerover={() => paused = true} on:pointerout={() => paused = false} id="on" transition:blur>
        <a href="on?t={on_something}">{on_something}</a>
      </div>
    {/key}
  </div>
</div>

<style>
  div#container {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div#on {
    position: absolute;
  }

  a:hover {
    text-shadow:
      0 0 7px #ccc,
      0 0 10px #ccc,
      0 0 21px #ccc,
      0 0 42px #0fa,
      0 0 82px #0fa,
      0 0 92px #0fa,
      0 0 102px #0fa,
      0 0 151px #0fa;
  }
</style>
