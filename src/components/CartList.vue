<template>
    <div class="list">
      <div class="header">
          <h2>
              My cart
          </h2>
          
      </div>
      <div class="list2">
            <ul id="myUL">
            <li v-for="item in cartList" :key="item"><b>{{item}}</b> <p style="text-align:right; margin-right: 30px;">Quantity:</p> </li>
      </ul>
      </div>
  </div>
  <p style="margin-top: 50px"><b>Total: ${{sum}}</b> </p>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{
            sum: 0
        }
    },
    name: 'CartList',
    props: ['cartList'],
    computed: {
    ...mapState(['total','priceCart'])
    },
    methods:{
        sumP(itemPrice){
              let total = 0
              console.log(itemPrice)
              for(let x = 0; x < itemPrice.length; x++){
                  total = total + itemPrice[x]
              }
              return total
        }
    },
    created(){
        this.sum = this.sumP(this.priceCart)
    }
}
</script>

<style scope>
    *{
        box-sizing: border-box;
    }
    p {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .list{
        background-color: #e9e9e9;
        width: 50%;
        height: 400px;
        border-radius: 10px;
        margin:auto;
    }
    .list2{
        background-color: #e9e9e9;
        border-radius: 10px;
        height: 300px;
        margin:auto;
        overflow: auto;
    }    
    ul{
        margin:auto;
        padding:0;
        width: 100%;
        list-style: none;
    }
    ul li{
        cursor: pointer;
        text-align: left;
        padding-top: 10px;
        /* border-radius: 10px; */
        padding-left: 10px;
        background: #e9e9e9;
        font-size: 18px;
        transition: 0.2s;

        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
    }
    ul li:nth-child(odd) {
        background: #f9f9f9;
    }
    ul li:hover{
        background: #ddd;
    }
    ul li:checked{
        background: #888;
        color: #fff;
        text-decoration: line-through;
    }
    ul li.checked::before{
        content: '';
        position: absolute;
        border-color: #fff;
        border-style: solid;
        border-width: 0 2px 2px 0;
        top: 10px;
        left: 16px;
        transform: rotate(45deg);
        height: 15px;
        width: 7px;
    }
    .close{
        position: absolute;
        right: 0;
        top: 0;
        padding: 12px 16px 12px 16px
    }
    .close:hover{
        background-color: #f44336;
        color: white;
    }
    .header{
        background-image: linear-gradient(to bottom right, rgb(161, 158, 136), rgb(97, 97, 94));
        padding: 30px 40px;
        border-radius: 10px;
        color: white;
        text-align: center;
        width: 100%;
        margin: auto;
    }
    .header:after{
        content: "";
        display: table;
        clear: both;
    }
    input{
        margin: 0;
        border: none;
        border-radius: 0;
        width: 75%;
        padding: 10px;
        float: left;
        font-size: 16px;
    }
    .addBtn{
        padding: 10px;
        width: 25%;
        background: #d9d9d9;
        color: #555;
        float:left;
        text-align: center;
        font-size: 16px;
        cursor: pointer;
        transition: 0.3s;
        border-radius: 0;
    }
    .addBtn:hover{
        background-color: #bbb;
    }
</style>