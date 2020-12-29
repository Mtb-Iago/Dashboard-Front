<template>
  <div>
      <DashboardComponent>
        <div slot="slot-page" class="content-page">
          <p>Products</p>
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

