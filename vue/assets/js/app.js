var app = new Vue({

  el: "#app",
  data: {
    int1: 5,
    int2: 3
  },
  computed: {
    tambah: function () {
      return this.int1 + this.int2;
    },
    kali: function () {
      return this.int1 * this.int2;
    },
    kurang: function () {
      return this.int1 - this.int2;
    },
    bagi: function () {
      return this.int1 / this.int2;
    }
  }
});