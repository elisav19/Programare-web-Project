var store = new Vue({
  el: '#store',
  data: {
    seen: false,
    orderSum: 0,
    products: [
      {
        id: 1,
        name: 'Diagnostica complexa a automobilului',
        price: 200,
        quantity: 0
      },
      {
        id: 2,
        name: 'Montarea anvelopelor si echilibrarea rotilor',
        price: 55,
        quantity: 0
      },
      {
        id: 3,
        name: 'Verificarea si reglarea farurilor',
        price: 30,
        quantity: 0
      },
      {
        id: 4,
        name: 'Diagnosticarea si repararea motoarelor',
        price: 550,
        quantity: 0
      },{
        id: 5,
        name: 'Schimbarea uleiului si a filtrelor',
        price: 270,
        quantity: 0
      }
    ],
    cart: [

    ]
  },  computed: {
    btnText: function() {
      if(this.seen) {
        return 'Ascunde cosul'
      }

      return 'Afiseaza cosul'
    }
  },
  methods: {
    addToCart(product){
      this.orderSum = parseFloat(this.orderSum + product.price)
      for(let i = 0; i < this.cart.length; i++){
        if (this.cart[i].product.id === product.id){
          this.cart[i].quantity++;
          return;
        }

      }
      this.cart.push({
          product : product,
          quantity: 1
      });
    },
    removeFromcart(product){
      var sumToRemove = this.products[product.id - 1].quantity * this.products[product.id - 1].price;
      this.orderSum -= sumToRemove;
      this.products[product.id - 1].quantity = 0;
    }
  }
});
