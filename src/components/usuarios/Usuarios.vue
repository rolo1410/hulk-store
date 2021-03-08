<template>
  <v-contanier>
    <v-data-table
      :headers="cabeceraTabla"
      :items="lstUsuarios"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Usuarios</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer></v-toolbar
      ></template>

      <template v-slot:item.actionsRegistro="{ item }">
        <v-icon small class="mr-2" @click="editUsuario(item)">
          mdi-pencil
        </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>

      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Cargar </v-btn>
      </template>
    </v-data-table>

    <v-dialog v-model="dialog" max-width="500px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
          Nuevo
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Gestión de Usuario</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="editedItem.nombres"
                  label="Nombres"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="editedItem.tipoIdentificacion"
                  label="Tipo Identificación"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="editedItem.identificacion"
                  label="Identificación"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="editedItem.usuario"
                  label="Usuario"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close"> Cancelar </v-btn>
          <v-btn color="blue darken-1" text @click="save"> Guardar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="headline"
          >¿Está seguro de eliminar el registro?</v-card-title
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDelete"
            >Cancelar</v-btn
          >
          <v-btn color="blue darken-1" text @click="deleteItemConfirm"
            >OK</v-btn
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-contanier>
</template>

<script>
import axios from "axios";

const URL = "http://localhost:8080/tienda/api/v1/";
export default {
  name: "Usuarios",
  components: {

  },
  data: () => ({

    dialog: false,
    dialogDelete: false,
    editedItem: Object,
    editedDefault: Object,
    cabeceraTabla: [{ text: 'Nombres', value: 'nombres' },
    { text: 'Identificación', value: 'identificacion' },
    { text: 'Tipo Identificación', value: 'tipoIdentificacion' },
    { text: 'Usuario', value: 'usuario' },
    { text: 'Acciónes', value: 'actionsRegistro' }]
  }),

  created() {
    this.$store.dispatch("obtenerUsuariosActiovs")
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },

  methods: {
    editUsuario(item) {
      this.editedIndex = this.$store.state.productos.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    }, deleteItem(item) {
      this.editedIndex = this.$store.state.productos.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    }, close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    }, closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save() {
      axios.post(URL + "usuario/", { data: this.editedItem }).then((response) => {
        console.log(response);
      }).catch(e => {
        alert(e);
      })
    }
  },
  computed: {
    lstUsuarios() {
      return this.$store.state.lstUsuarios;
    }
  }

};
</script>
