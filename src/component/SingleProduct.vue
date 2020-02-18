<template>
    <div class="row">
        <div class="col-md">
            <router-link to="/products" class="btn btn-primary btn-sm">Back</router-link>

            <h1>{{ product.name }}</h1>
            <div>
                <p><strong>ID:</strong> {{ product.id }}</p>
                <p><strong>Price:</strong> {{ (product.price) }}</p>
                <p><strong>In stock:</strong> {{ product.inStock }}</p>
                <p>{{ product.description }}</p>
            </div>

            <h5>Related Product</h5>
            <ul>
                <router-link
                    v-for="product in products"
                    :key="product.id"
                    :to="{ name: 'viewProduct', params: { productId: product.id } }"
                    tag="li"
                    class="group inner list-group-item-heading">
                    <a>{{ product.name }}</a>
                </router-link>
            </ul>
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
                product: {},
                products : products,
            }
        },
        watch: {
            productId: function (newValue, oldValue) {
                this.getProduct(newValue);
            }
        },
        methods:{
            getProduct: function(productId) {
                let _this = this;
                this.product = {}

                this.products.forEach(function(product) {
                    if (product.id == productId) {
                        _this.product = product
                    }
                });
            }
        }
    }
</script>
