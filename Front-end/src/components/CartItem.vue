<template>
    <tr>
        <td><router-link :to="item.product.get_absolute_url">{{ item.product.name }}</router-link></td>
        <td>{{ item.product.price }}TND</td>
        <td>{{ item.quantity }}
           
            <a @click="decrementQuantitty(item)">➖ </a>
            <a @click="incrementQuantitty(item)">➕ </a>
        </td>

        <td>{{ getItemTotal(item).toFixed(2) }}TND</td>
        <td><button class="delete" @click="removeFromCart(item)"></button></td>



    </tr>
</template>

<script>
export default{
name:"CartItem",
props:{
  initialItem:Object
},
data(){
return{
    item:this.initialItem
}

},
methods: {
    getItemTotal(item){

            return item.quantity*item.product.price

    },
    decrementQuantitty(item){
      item.quantity--
      
      if(item.quantity===0){
        this.$emit('removeFromCart',item)
      }
        this.updateCart()
    },
    incrementQuantitty(item){
     item.quantity++
     this.updateCart()
    },
    updateCart(){
   localStorage.setItem("cart",JSON.stringify(this.$store.state.cart))
         
    },
    removeFromCart(item){
        this.$emit('removeFromCart',item)
        this.updateCart()


    }
},


}


</script>