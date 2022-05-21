<template>
  <div>
    <cart-list :cart-list="cartList"/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import CartList from '../components/CartList.vue'
export default {
  name: 'HomeView',
  components: {
    CartList
  },
  data(){
    return{
    }
  },
  computed: {
    ...mapState(['cartList'])
  }
}
</script>

<style>

</style>