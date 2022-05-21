<template>
  <div>
    <div class="card">
      <h1>{{item.name}}</h1>
        <div style="width: 200px; height: 100px; padding-top: 10px; display: block; margin-left: auto; margin-right: auto;">
        <img :src="item.imgLink" alt="Denim Jeans" style="max-width: 200px; max-height: 100px; border: 3px solid grey; border-radius: 10px; display: block; margin-left: auto; margin-right: auto; "></div>
      <p class="price">${{item.price}}</p>
      <p>{{item.desc}}</p>
      <p><button @click="addToCart">{{btnText}}</button></p>
      <p><button>Buy Now</button></p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ProductView',
    props: {
        item: {
            type: Object,
            default() {return {}},
            required: true
        }
    },
    data(){
        return{
            btnText: 'Add To Cart'
        }
    },
    methods: {
        addToCart(){
            this.$emit('addToCart', this.item.name, this.item.price)
        }
    },
}

</script>

<style scope>
    .card {
  box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.2);
  width: 275px;
  height: 400px;
  background-image: linear-gradient(to bottom right, #e9e9e9, rgb(206, 206, 206));
  margin-top: 20px;
  /* margin: auto; */
  margin-left: 50px;
  margin-right: auto;
  margin-bottom: auto;
  text-align: center;
  font-family: arial;
  border-radius: 10px;
}

.price {
  color: grey;
  font-size: 22px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-image: linear-gradient(to bottom right, rgb(228, 205, 76), #ecf754);
  text-align: center;
  cursor: pointer;
  width: 75%;
  font-size: 18px;
  border-radius: 10px;
}

.card button:hover {
  opacity: 0.7;
}

</style>