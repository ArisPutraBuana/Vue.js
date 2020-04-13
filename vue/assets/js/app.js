var app = new Vue({
  el: "#app",
  data: {
    content: '',
    vehicles: ['Motor', 'Mobil', 'Kareta Api']
  },
  methods: {
    addVehicle: function () {
      // push = digunakan untuk TAMBAH
      this.vehicles.push(this.content);
      this.content = '';
    },
    removeVehicle: function (index) {
      // splice = digunakan untuk HAPUS
      this.vehicles.splice(index, 1);
    }
  }
});