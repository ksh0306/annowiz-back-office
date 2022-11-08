<template>
  <footer>
    <div class="innerSection">
      <p>{{ copyRight }}</p>
      <p>{{ officer }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      copyRight: "© 2022 ANNOTATION AI. All RIGHTS RESERVED.",
      officer: "DPO(Data Protection Officer) : DongKuk Yoon",
    };
  },
};
</script>
