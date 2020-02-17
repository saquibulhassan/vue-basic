<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">E-Commerce Inc</a>
            <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                    class="navbar-toggler"
                    data-target="#navbarSupportedContent" data-toggle="collapse" type="button">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <router-link tag="li" to="/" exact active-class="active">
                        <a class="nav-link">Home</a>
                    </router-link>
                    <router-link tag="li" to="/products" exact active-class="active">
                        <a class="nav-link">Product Catalog</a>
                    </router-link>
                    <router-link tag="li" :to="{name: 'viewProduct', params: {productId: 123}}" exact active-class="active">
                        <a class="nav-link">Single Product</a>
                    </router-link>
                </ul>
            </div>
        </nav>

        <router-view></router-view>
    </div>
</template>

<script>
    export default {}
</script>
