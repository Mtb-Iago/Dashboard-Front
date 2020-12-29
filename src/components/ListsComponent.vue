<template>
  <div class="lists">
    <div class="top">
      <p><strong>Clientes</strong></p>
      
    </div>
    <div class="content">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">E-mail</th>
            <th scope="col">Contato</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListComponents",
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