import {createStore} from "vuex";

const store = createStore({
    state(){
        return{
            firstName: 'John',
            lastName: 'Smith',
            productList: [
                {name: 'Pencils', price: 5, desc: 'Get creative with a pencil!', imgLink: 'https://www.officewarehouse.com.ph/__resources/_web_data_/products/products/image_gallery/4013_212.jpg'},
                {name: 'Calculator', price: 200, desc: 'Tool to paint with', imgLink: 'https://www.thoughtco.com/thmb/cL3_Xp_lSA0xjcy7rOkQTU-Qnr8=/650x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/close-up-of-calculator-over-white-background-932504044-5b47a91246e0fb00549b09f7.jpg'},
                {name: 'Scissors', price: 15, desc: 'Scissors to cut papers with ease', imgLink: 'https://m.media-amazon.com/images/I/61HYik3yUxS._AC_SX425_.jpg'},
                {name: 'Markers', price: 15, desc: 'Mark something!', imgLink: 'https://cdn.shopify.com/s/files/1/0035/9723/8387/files/le_plume_ii_picmonkeyed.JPG?v=1536939633'},
                {name: 'Pen', price: 10, desc: 'For something permanent!', imgLink: 'https://i.shgcdn.com/1bda1009-a432-41d5-ac17-27254c150484/-/format/auto/-/preview/3000x3000/-/quality/lighter/'},
                {name: 'Eraser', price: 10, desc: 'For some correction', imgLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Office-pink-erasers.jpg/1280px-Office-pink-erasers.jpg'},
                {name: 'Sharpener', price: 10, desc: 'Sharpen your pencils!', imgLink: 'https://m.media-amazon.com/images/I/81JZO1QJMJL._AC_SX425_.jpg'},
                {name: 'Tapes', price: 10, desc: 'Sticky tapes for your needs', imgLink: 'https://www.artnews.com/wp-content/uploads/2022/01/AdobeStock_59610992.jpeg'}            
                ],
            cartList: [],
            priceCart: [],
            total: 0
        }
    },
    getters: {
        sum(state){
            return state.total 
        }
    }
})

export default store