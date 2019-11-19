<template>
  <p>Written by: {{ author.firstName }} {{ author.lastName }} </p>
</template>


<script>
    export default {
        props: {
            author: {
                type: Object,
                required: true,
            }
        }
    }
</script>

