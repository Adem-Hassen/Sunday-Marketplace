import { createStore } from 'vuex'

export default createStore({
  state: {
    cart:{
      items:[],
    },
    isAuthenticated:false,
    token:'',
    isLoading:false  },
  getters: {
    getToken:(state)=>{state.token},
  },
  mutations: {
    initiallizeStore(state){
      if(localStorage.getItem('cart')){
         state.cart=JSON.parse(localStorage.getItem('cart'))
      }else{
        localStorage.setItem('cart',JSON.stringify(state.cart))
      }
      if(localStorage.getItem('token')){
        state.token=localStorage.getItem("token")
        state.isAuthenticated=true
      }
      else{
        state.token=''
        state.isAuthenticated=false
      }
    },
    addToCart(state,item){
      const exist=state.cart.items.filter(i=>i.product.id===item.product.id)
      if(exist.length){
        exist[0].quantity=parseInt(exist[0].quantity +parseInt(item.quantity))
      }else{
        state.cart.items.push(item)

      }
      localStorage.setItem('cart',JSON.stringify(state.cart))
    },
    setIsLoading(state,status){
      state.isLoading=status
    },
    setToken(state,token){
      state.token=token
      state.isAuthenticated=true
    },
    removeToken(state){
      state.token=''
      state.isAuthenticated=false
    },
    clearCart(state){
      state.cart={items:[]}
      localStorage.setItem("cart",JSON.stringify(state.cart))
    },

 
  },
  actions: {
  },
  modules: {
  }
})
