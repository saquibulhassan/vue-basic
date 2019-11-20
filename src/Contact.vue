<template>
  <div class="container">
    <div class="jumbotron">
      <h1>Contact us</h1>
    </div>
  </div>
</template>

<script>
    export default {
        destroyed() {
            console.log('Contact : Component destroyed')
        },
        activated() {
            console.log('Contact : component activated')
        },
        deactivated() {
            console.log('Contact : component deactivated')
        }
    }
</script>
