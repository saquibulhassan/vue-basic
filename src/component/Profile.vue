<template>
    <div class="row">
        <div class="col-md-6">
            <h4>Profile</h4>

            <ul class="nav nav-pills">
                <li class="nav-item">
                    <router-link :to="{name: 'profileBasic'}" class="nav-link" active-class="active">Basic</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'profileEducation'}" class="nav-link" active-class="active">Education</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'profileWork'}" class="nav-link" active-class="active">Work</router-link>
                </li>
            </ul>


            <router-view></router-view>

        </div>
    </div>
</template>

<script>
    import products from '../data/products';

    export default {
        props: ['id'],
        data(){
            return {
                age : this.$route.query.age,
                name : this.$route.query.name,
            }
        },
        watch: {
            "$route.query.age": function (newValue, oldValue) {
                this.age = this.$route.query.age
            },
            "$route.query.name": function (newValue, oldValue) {
                this.name = this.$route.query.name
            }
        }
    }
</script>
