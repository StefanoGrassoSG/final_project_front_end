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
      <div class="my-col col-12 col-sm-3 mb-3 d-flex d-sm-block flex-column align-items-center text-center text-sm-start">
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
      <div class="my-col col-12 col-sm-3 mb-3 d-flex d-sm-block flex-column align-items-center text-center text-sm-start">
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
      <div class="my-col col-12 col-sm-3 mb-3 d-flex d-sm-block flex-column align-items-center text-center text-sm-start">
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
      <div class="my-col col-12 col-sm-3 mb-3  last-col">
        <a href="#">
          <div class="img-container">
            <img src="../assets/img/jump-icon.png" alt="">
          </div>
        </a>

      </div>
    </div>

    <div class="container footer-bottom ">
      <div class="col-12 col-md-6">
        <ul class="list-bottom list-bottom-sx">
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
      <div class="col-12 col-md-6">
        <ul class="list-bottom list-bottom-dx">
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
  border-top: 3px solid #ccdbf5;

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
      max-width: 100px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  // FOOTER BOTTOM

  @media screen and (min-width: 200px) and (max-width: 768px) {

    .footer-bottom {

      .list-bottom-dx {
        display: flex;
        justify-content: center;

        li {
          margin-left: 0px;
        }
      }

      .list-bottom-sx {
        display: flex;
        justify-content: center;

        li {
          margin-right: 0px;
        }
      }

      li {
        padding: 0px 10px;
      }

    }
  }

  @media screen and (min-width: 770px) {
    .footer-bottom {

      .list-bottom-dx {
        display: flex;
        justify-content: flex-end;

        li {
          margin-left: 50px;
        }
      }

      .list-bottom-sx {
        li {
          margin-right: 50px;
        }
      }

    }

  }

  .footer-bottom {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-top: 1px solid #00ABE8;
    padding-top: 20px;



    .list-bottom {
      display: flex;


      li {
        display: inline-block;
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
