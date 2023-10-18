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
  <footer class="text-center mt-5">
    <div class="container footer-top">
      <div class="my-col col-12 col-md-3">
        <h4 class="list-title-footer">
          Assistenza
        </h4>
        <ul>
          <li>
            Centro Assistenza
          </li>
          <li>
            Segnala un problema
          </li>
          <li>
            Supporto alla disabilità
          </li>
        </ul>
      </div>

      <!-- COL-2 -->
      <div class="my-col col-12 col-md-3">
        <h4 class="list-title-footer">
          Informazioni
        </h4>
        <ul>
          <li>
            Chi siamo
          </li>
          <li>
            I nostri appartamenti
          </li>
          <li>
            Contatti
          </li>
        </ul>
      </div>

      <!-- COL-3 -->
      <div class="my-col col-12 col-md-3">
        <h4 class="list-title-footer">
          Le città più amate
        </h4>
        <ul>
          <li>
            Roma
          </li>
          <li>
            Milano
          </li>
          <li>
            Torino
          </li>
          <li>
            Venezia
          </li>
        </ul>
      </div>

      <!-- COL-4 -->
      <div class="my-col col-12 col-md-3 last-col">
        <div class="img-container">
          <img src="../assets/vue.svg" alt="">
        </div>

      </div>
    </div>

    <div class="container footer-bottom ">
      <div class="col-5">
        <ul class="list-bottom">
          <li>Privacy</li>
          <li>
            <span class="boolbnb-li">
              &copy;2023 boolbnb
            </span>
          </li>
          <li>
            Dettagli dell'azienda
          </li>
        </ul>
      </div>
      <div class="col-5">
        <ul class="list-bottom">
          <li>Italiano (IT)</li>
          <li>EUR &euro;</li>
          <li>Social</li>
        </ul>
      </div>

    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "../assets/scss/main";

footer {
  border-top: 1px solid #3461AB;

  .footer-top {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 50px;

    .my-col {
      font-size: 17px;
      text-align: start;
    }

    .last-col {
      display: flex;
      justify-content: center;
      align-self: center;
    }

    .list-title-footer {
      color: #3461AB;
      font-weight: bold;
    }

    .img-container {
      min-width: 100px;

      img {
        width: 100%;
        height: 100%;
      }
    }


  }



  // FOOTER BOTTOM
  .footer-bottom {
    display: flex;
    justify-content: space-between;

    .list-bottom {
      display: flex;
      justify-content: space-between;

      li {
        display: inline-block;
        margin-right: 20px;
        font-weight: bold;
        color: #888A8C;
      }

      .boolbnb-li {
        color: #00ABE8;
      }

    }

  }

}

ul {
  list-style: none !important;
  padding: 0;
}
</style>
