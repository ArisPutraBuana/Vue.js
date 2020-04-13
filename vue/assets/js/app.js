var app = new Vue({
  el: "#app",
  data: {
    vehicles: [{
        type: 'Car',
        brand: 'Toyota',
        color: 'Metallic Silver'
      },
      {
        type: 'Motocycle',
        brand: 'Honda',
        color: 'Red'
      },
      {
        type: 'Bike',
        brand: 'BMX',
        color: 'Black'
      }
    ],
    object: {
      firstName: 'Aris',
      lastName: 'Putra Buana',
      age: 23
    }
  }
});