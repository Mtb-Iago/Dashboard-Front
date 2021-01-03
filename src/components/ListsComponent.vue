<template>
  <div class="lists">
    <div class="top">
      <p><strong>{{ description }}  </strong><span class="badge badge-info">{{ data.length }}</span></p>
      
    </div>
    <div class="content">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">{{ columns[0] }}</th>
            <th scope="col">{{ columns[1] }}</th>
            <th scope="col">Contato</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.id">
            <th scope="row">{{item.id}}</th>
            <td>{{item.name}}</td>
            <td>{{ (description == "Clientes") ? item.email : item.value}}</td>
            <td>{{item.phone}}</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListComponents",

  props: {
    data: Array,
    description: String,
    columns: {},
  }
};
</script>

<style lang="scss" scoped>
.lists {
    width: 100%;
    padding: 28px;
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #fff;
}
</style>