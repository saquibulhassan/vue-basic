<template>
    <div class="row">
        <div class="col-md">
            <h1>Single Product</h1>
        </div>
    </div>
</template>

<script>
    import products from '../data/products';

    export default {
        props: {
            productId: {
                required: true
            }
        },
        created() {
            this.getProduct(this.productId)
        },
        data(){
            return {
                product: null,
                products : products,
            }
        },
        watch: {
            productId: function (newValue, oldValue) {
                this.getProduct(newValue);
            }
        },
        methods:{
            getProduct(productId) {
                this.product = null
                this.products.forEach(function(product) {
                    if (product.id === productId) {
                        this.product = product
                    }
                });
            }
        }
    }
</script>
