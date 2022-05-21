<template>
  <div class="topnav">
  <router-link :to="{name: 'home'}">My Cart</router-link>
  <div class="search-container">
    <form action="/action_page.php">
      <input type="text" autocomplete="off" v-model="search" placeholder="Search.." name="search">
    </form>
  </div>
</div>
  <h1>Recommended for you</h1>
  <div class="row">
      <div class="column" v-for="product in filteredProducts" :key="product.name">
        <product-view :item="product" @add-to-cart="addToCart"/>
      </div>
    </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
import ProductView from '../components/ProductView.vue'
//import CartList from '../components/CartList.vue'

export default {
  name: 'App',
  components:{
    ProductView,
  },
  data(){
    return{
      search: "",
      // productList: [
      //   {name: 'Paper', price: 100, desc: 'Plain white sheet of paper', imgLink: 'https://www.collinsdictionary.com/images/full/paper_111691001.jpg'},
      //   {name: 'Brush', price: 20, desc: 'Tool to paint with', imgLink: 'https://mymodernmet.com/wp/wp-content/uploads/2020/09/paint-brush-shapes.jpg'},
      //   {name: 'Scissors', price: 15, desc: 'Scissors to cut papers with ease', imgLink: 'https://m.media-amazon.com/images/I/61HYik3yUxS._AC_SX425_.jpg'},
      //   {name: 'Markers', price: 15, desc: 'Mark something!', imgLink: 'https://cdn.shopify.com/s/files/1/0035/9723/8387/files/le_plume_ii_picmonkeyed.JPG?v=1536939633'}      
      //   ],
      counter: 0
      //cartList: []
    }
  }, 
  computed: {
    ...mapState(['productList','cartList','priceCart']),
    ...mapGetters(['sum']),
    filteredProducts() {
      return this.productList.filter(p => {
        return p.name.toLowerCase().indexOf(this.search.toLowerCase()) != -1;
      });
    }
  },
  methods: {
    addToCart(name, price){
      this.priceCart.push(price)
      if(this.cartList.includes(name)){
        console.log(null)
      }
      else{
        this.cartList.push(name)
      }
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.column{
  float: left;
  width: 23%;
  padding: 0 10px;
}

.row{margin: 0 -5px;}

.row:after {
  content: "";
  display: table;
  clear: both;
}

@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px; 
  }
}
.topnav {
  overflow: hidden;
  background-color: #e9e9e9;
  border-radius: 15px;
}

.topnav a {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #2196F3;
  color: white;
}

.topnav input[type=text] {
  float: right;
  padding: 6px;
  margin-top: 8px;
  margin-right: 16px;
  border: none;
  font-size: 17px;
}

@media screen and (max-width: 600px) {
  .topnav a, .topnav input[type=text] {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
  
  .topnav input[type=text] {
    border: 1px solid #ccc;  
  }
}
</style>