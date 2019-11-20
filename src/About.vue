<template>
  <div class="container">
    <div class="jumbotron">
      <h1>About us</h1>
    </div>
  </div>
</template>

<script>
    export default {
        destroyed() {
            console.log('About : Component destroyed')
        },
        activated() {
            console.log('About : component activated')
        },
        deactivated() {
            console.log('About : component deactivated')
        }
    }
</script>
