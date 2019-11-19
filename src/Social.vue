<template>
    <button class="btn btn-primary" @click="share">Share on Facebook</button>
</template>


<script>
  import {eventBus} from './main'

  export default {
      methods: {
          share(){
              var data = {
                  media: 'Facebook'
              };

              eventBus.$emit('articleHasShared', data)
              this.$emit('articleHasShared', data)
          }
      }
  }
</script>

