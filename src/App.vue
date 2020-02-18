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
                    <template v-if="!auth.isLoggedIn">
                        <router-link active-class="active" exact tag="li" to="/">
                            <a class="nav-link">Home</a>
                        </router-link>
                        <router-link active-class="active" exact tag="li" to="/profile">
                            <a class="nav-link">Profile</a>
                        </router-link>
                        <router-link active-class="active" exact tag="li" to="/products">
                            <a class="nav-link">Product Catalog</a>
                        </router-link>
                        <router-link :to="{name: 'viewProduct', params: {productId: 1}}" active-class="active" exact
                                     tag="li">
                            <a class="nav-link">Single Product</a>
                        </router-link>
                        <router-link active-class="active" exact tag="li" to="/redirect">
                            <a class="nav-link">Redirect to Home</a>
                        </router-link>
                        <router-link :to="{name: 'page'}" active-class="active" exact tag="li">
                            <a class="nav-link">Page 1</a>
                        </router-link>
                        <router-link :to="{name: 'page', params:{id: 123456}}" active-class="active" exact tag="li">
                            <a class="nav-link">Page 2</a>
                        </router-link>
                        <router-link :to="{name: 'page', query:{name: 'Jhon Doe'}}" active-class="active" exact
                                     tag="li">
                            <a class="nav-link">Page 3</a>
                        </router-link>
                        <router-link :to="{name: 'page', params:{id: 123456}, query:{age: 25, name: 'Jhon Doe'}}"
                                     active-class="active" exact
                                     tag="li">
                            <a class="nav-link">Page 4</a>
                        </router-link>

                        <li v-if="!auth.isLoggedIn">
                            <a @click="login" class="nav-link">Log In</a>
                        </li>
                    </template>
                    <template v-if="auth.isLoggedIn">
                        <router-link active-class="active" exact tag="li" to="/dashboard">
                            <a class="nav-link">Dashboard</a>
                        </router-link>
                        <li>
                            <a @click="logout" class="nav-link">Log Out</a>
                        </li>
                    </template>
                </ul>
            </div>
        </nav>

        <router-view></router-view>

    </div>
</template>

<script>
    import auth from "./auth";

    export default {
        data() {
            return {
                auth: auth
            }
        },
        methods: {
            login() {
                this.auth.isLoggedIn = true
                this.$router.push('/dashboard');
            },
            logout() {
                this.auth.isLoggedIn = false
                this.$router.push('/');
            }
        }
    }
</script>
