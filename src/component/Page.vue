<template>
    <div class="row">
        <div class="col-md-6">
            <h4>Page with other features</h4>
            <table class="table">
                <tr>
                    <td>Optional Param</td>
                    <td>:</td>
                    <td>{{ id }}</td>
                </tr>
                <tr>
                    <td colspan="3">Query String</td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>:</td>
                    <td>{{ name }}</td>
                </tr>
                <tr>
                    <td>Age</td>
                    <td>:</td>
                    <td>{{ age }}</td>
                </tr>
            </table>
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
