<template>
  <div>
      <DashboardComponent>
        <div slot="slot-page" class="content-page">
          <header class="title-pages">
            <p>Products</p>
          </header>
          
        </div>
      </DashboardComponent>
  </div>
</template>

<script>
import DashboardComponent from "../Dashboard/DashboardComponent";

export default {
   name: 'ProductsComponent',
    
   components: {
      DashboardComponent
  },

};
</script>

<style lang="scss" src="./style.scss" scoped />