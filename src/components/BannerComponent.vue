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
    <section class="mb-5 text-center jumbo-section align-items-baseline">
        <div class="container">
          <div class="row">
            <div class="col-4 mountain-img">
              <img src="../assets/img/b-mountain.png" alt="">
            </div>
            <div class="col-4 see-img">
              <img src="../assets/img/b-see.png" alt="">
            </div>
            <div class="col-4 city-img">
              <img src="../assets/img/b-city.png" alt="">
            </div>
          </div>
        </div>
        <h1 class="my-5 title-jumbo">
          <span>b</span>-everywhere with <span>boolbnb</span>
        </h1>
    </section>
</template>

<style lang="scss" scoped>
@use "../assets/scss/main";
.jumbo-section {
  .mountain-img {
    img{
      width: 320px;
    }
    
  }
  .see-img {
    img{
      width: 200px;
    }
    
  }
  .city-img {
    img{
      width: 180px;
    }
    
  }

  .title-jumbo {
      font-size: 3rem;
      font-weight: bolder;
      color: #787878;
      span {
        display: inline-block;
        font-size: 3rem;
        color: #01B2F1;
        &:last-child{
          color: #3965AE;
        }
      }
  }
}
</style>