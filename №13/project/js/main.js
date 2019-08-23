const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

let app = new Vue ({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        imgCatalog: 'https://placehold.it/200x150',
        cartInvis: false,
        searched: [],
        userSearch: ''
    },
    methods: {
        getJson(url){
        return fetch(url)
            .then(result => result.json())
            .catch(error => {
                console.log(error)
            })
        },
        addProduct (product) {
            console.log (product.id_product)
        },
        search () {
            let regExp = new RegExp (this.userSearch, 'i');
            this.searched = this.products.search (el => regExp.test (el.product_name))
        }
    },
    mounted () {
        this.getJson (`${API + this.catalogUrl}`)
            .then (data => {
                for (let el of data) {
                    this.products.push (el)
                }
                console.log (this.products)
            });
        this.getJson (`getProducts.json`)
            .then (data => {
                for (let el of data) {
                    this.products.push (el);
                    this.search.push (el)
                }
                console.log (this.products)
            })
    }
})
