<template>
    <div id="products" class="row">
        <div v-for="product in products" class="item col-md-4">
            <div class="thumbnail">
                <img @click="productImageClicked(product)" class="img-fluid" src="http://placehold.it/400x250/000/fff">
                <div class="caption">
                    <router-link
                        :to="{ name: 'viewProduct', params: { productId: product.id } }"
                        tag="h4"
                        class="group inner list-group-item-heading">
                        <a>{{ product.name }}</a>
                    </router-link>

                    <p class="group inner list-group-item-text">{{ product.description }}</p>

                    <div class="row">
                        <div class="col-md-6">
                            <p class="lead">Price : {{ product.price }}</p>
                        </div>
                        <div class="col-md-6 text-right">
                            <div class="number-in-stock" :class="{ few: product.inStock < 10 && product.inStock > 0, none: product.inStock == 0 }">
                                {{ product.inStock }} in stock
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import products from "../data/products";
    export default {
        data(){
            return {
                products: products
            }
        },
        methods: {
            productImageClicked: function (product) {
                this.$router.push({
                    name: 'viewProduct',
                    params: {productId: product.id}
                })
            }
        }
    }
</script>

<style>
    #products .item { margin-bottom: 15px; }
    #products .item img { background-color: #000; }
    #products .item p.lead { margin-bottom: 0; }
    #products .item .number-in-stock { margin-right: 10px; }
    #products .item .number-in-stock.few { color: #E0A14F; }
    #products .item .number-in-stock.none { color: #C45E5E; }
</style>
