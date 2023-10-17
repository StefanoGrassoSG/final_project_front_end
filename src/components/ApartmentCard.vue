<script>
    import axios from "axios";

  export default {
  data() {
    return {
        apartments : null
    }
  },
  methods: {

  },
  created(){

  },
  props:{
    name: String,
    address: String,
    path: String
  }
}
</script>

<template>
    <div class="card">
        <h3>
            {{ name }}
        </h3>
        <h4>
            address: {{ address }}
        </h4>
        <div class="img">
            <img :src="path" alt="" class="img-fluid">
        </div>
    </div>
</template>

<style lang="scss" scoped>;

</style>