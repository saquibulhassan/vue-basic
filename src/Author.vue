<template>
  <p>Written by: {{ author.firstName }} {{ author.lastName }} </p>
</template>


<script>
    import {eventBus} from './main'

    export default {
        props: {
            author: {
                type: Object,
                required: true,
            }
        },
        created() {
            eventBus.$on('articleHasShared', function (data) {
                console.log('Dear ' + author.firstName + ' ' + author.lastName + ' ')
            })
        }
    }
</script>

