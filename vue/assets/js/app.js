var app = new Vue({
  el: "#app",
  data: {
    int1: 5,
    int2: 3,
    result: null,
  },
  methods: {
    // sumProcess: function () {
    // return (this.result = this.int2 + this.int1);

    sumProcess: function (int3) {
      return (this.result = this.int2 + this.int1 + int3);
    },
  },
});
