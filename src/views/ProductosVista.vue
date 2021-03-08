<template>
  <div class="home">
    <Productos />
  </div>
</template>

<script>
// @ is an alias to /src
import Productos from "@/components/productos/Productos.vue";

export default {
  name: "ProductosVista",
  components: {
    Productos

  }
};
</script>
