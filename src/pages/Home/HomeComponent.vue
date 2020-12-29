<template>
  <div>
    <DashboardComponent>
      <div slot="slot-page" class="content-page">
        <header class="title-pages">
          <p>Inicio</p>
        </header>

        <div>
          <div class="row">
            <div class="col-12 col-md-3">
              <CardsComponents
                :type="'Clientes'"
                :percentage="'7'"
                :icon="'fa fa-users'"
                :qtd="'750'"
              />
            </div>

            <div class="col-12 col-md-3">
              <CardsComponents
                :type="'Produtos'"
                :percentage="'20'"
                :icon="'fa fa-box'"
                :qtd="'150'"
              />
            </div>

            <div class="col-12 col-md-3">
              <CardsComponents
                :type="'Serviços'"
                :percentage="'10'"
                :icon="'fa fa-store'"
                :qtd="'50'"
              />
            </div>

            <div class="col-12 col-md-3">
              <CardsComponents
                :type="'Relatórios'"
                :percentage="'90'"
                :icon="'fa fa-chart-bar'"
                :qtd="'150'"
              />
            </div>
          </div>
        </div>

        <div class="mt-5">
          <div class="row">
            <div class="col-12 col-md-6">
              <ListComponents />
            </div>
          </div>
        </div>
      </div>
    </DashboardComponent>
  </div>
</template>

<script>
import DashboardComponent from "../Dashboard/DashboardComponent";
import CardsComponents from "../../components/CardsComponents";
import ListComponents from "../../components/ListsComponent";

export default {
  name: "HomeComponent",

  components: {
    DashboardComponent,
    CardsComponents,
    ListComponents,
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />