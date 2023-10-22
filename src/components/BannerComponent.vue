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
      <div class="row align-items-baseline">
        <div class="col-4 text-center mountain-img">
          <div class="div-img">
            <img src="../assets/img/montain.png" alt="">
          </div>
          <h2>
            <span>b</span>-mountain
          </h2>
        </div>
        <div class="col-4 text-center see-img">
          <div class="div-img">
            <img src="../assets/img/see.png" alt="">
          </div>
          <h2>
            <span>b</span>-sea
          </h2>
        </div>
        <div class="col-4 text-center city-img">
          <div class="div-img">
            <img src="../assets/img/city.png" alt="">
          </div>
          <h2>
            <span>b</span>-city
          </h2>
        </div>
      </div>
    </div>
    <h1 class="my-5 title-jumbo">
      <span>b</span>-everywhere with <span>boolbnb</span>
    </h1>
    <div class="logo-back d-none d-lg-block">
      <img src="../assets/img/logo_huge.png" alt="" class="logo-abs-1">
      <img src="../assets/img/logo_huge.png" alt="" class="logo-abs-2">
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/scss/main";

.jumbo-section {
  position: relative;

  .mountain-img {
    .div-img {
      max-width: 320px;

      img {
        width: 100%;
        height: 100%;
      }
    }


    h2 {
      font-weight: bold;
      color: #787878;
    }

    span {
      font-weight: bold;
      color: #01B2F1;
    }

  }

  .see-img {
    .div-img {
      max-width: 230px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    h2 {
      font-weight: bold;
      color: #787878;
      margin-top: 9px;
    }

    span {
      font-weight: bold;
      color: #01B2F1;
    }

  }

  .city-img {
    .div-img {
      max-width: 220px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    h2 {
      font-weight: bold;
      color: #787878;
      margin-top: 21px;
    }

    span {
      font-weight: bold;
      color: #01B2F1;
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

      &:last-child {
        color: #3965AE;
      }
    }
  }

  .logo-abs-1 {
    position: absolute;
    top: 283px;
    left: -42px;
    max-width: 207px;
    opacity: 0.3;
  }

  .logo-abs-2 {
    position: absolute;
    top: 70px;
    right: -84px;
    max-width: 266px;
    opacity: 0.3;
  }
}
</style>