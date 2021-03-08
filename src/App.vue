<template>
  <v-app>
    <v-app-bar app color="secundary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://laszapasdemaxi.files.wordpress.com/2019/01/marvel_fascimil_panini_comics_hulk.jpg"
          transition="scale-transition"
          width="40"
        />
      </div>
      <div id="nav">
        <router-link to="/tienda"> Tienda </router-link>|
        <router-link to="/usuarios"> Usuarios </router-link>
      </div>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: "App",
  components: {
  },

  data: () => ({
    //
  })
};
</script>
