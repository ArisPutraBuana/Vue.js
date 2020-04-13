Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button @click="count++">Click Me!  {{ count }}  times</button>'
});

var app = new Vue({
  el: "#app",

});