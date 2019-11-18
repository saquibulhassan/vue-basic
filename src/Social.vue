<template>
    <button class="btn btn-primary" @click="share">Share on Facebook</button>
</template>


<script>
  export default {
      methods: {
          share(){
              this.$emit('articleHasShared', {
                  media: 'Facebook'
              })
          }
      }
  }
</script>

