<script >
export default {
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<template>
    <header class="text-center mb-5">
        <h1>
            QUESTO è L'HEADER
        </h1>
    </header>
</template>

<style lang="scss" scoped>
@use "../assets/scss/main";
@import "../../node_modules/rfs/scss";
h1 {
  @include font-size(4rem);
}
</style>
