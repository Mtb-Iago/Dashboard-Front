<template>
  <div>
      <DashboardComponent>
        <div slot="slot-page" class="content-page">
          <header class="title-pages">
            <p>Clientes</p>
          </header>
          
        </div>
      </DashboardComponent>
  </div>
</template>

<script>
import DashboardComponent from "../Dashboard/DashboardComponent";

export default {
   name: 'ClientsComponent',
    
   components: {
      DashboardComponent
  },

};
</script>

<style lang="scss" src="./style.scss" scoped />