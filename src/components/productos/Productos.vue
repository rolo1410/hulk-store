<template>
  <v-container fluid class="grey lighten-5">
    <v-row dense>
      <v-col v-for="card in cards" :key="card.title" sm="4" md="3">
        <Producto v-bind:item="card"></Producto>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Producto from '@/components/productos/Producto.vue';


export default {
  name: "Productos",
  components: {
    Producto

  },
  created() {
    this.$store.dispatch('obtenerProductosDisponibles')
  },

  data: () => ({

  }),

  computed: {
    cards() {
      return this.$store.state.productos
    }
  }
};
</script>
