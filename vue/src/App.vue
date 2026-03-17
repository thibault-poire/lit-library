<script setup lang="ts">
  import { ref } from "vue";

  import "../../library/dist/button.js";
  import "../../library/dist/modal.js";

  import "../../library/dist/main.css";
  import "../../library/dist/button.css";
  import "../../library/dist/modal.css";
   
  const is_open = ref(false)

  const handle_close = () => {
    is_open.value = false;
  }
</script>

<template>
  <lib-button label="Button" @click="is_open = true"></lib-button>
  
  <lib-modal :is_open="is_open" title="Modal title" @close="handle_close()">
    <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod orci a sodales tincidunt. Etiam mattis, lacus et lacinia mollis, ipsum mauris tristique justo, a pretium diam felis eget sapien.</p>
    <lib-button slot="footer" label="Close" @click="handle_close()"></lib-button>
  </lib-modal>
</template>
