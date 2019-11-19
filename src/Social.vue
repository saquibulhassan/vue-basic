<template>
  <div>
    <p>Share {{ article.title }} with your friends</p>
    <button class="btn btn-primary" @click="share('facebook')">Share on Facebook</button>
    <button class="btn btn-primary" @click="share('twitter')">Share on Twitter</button>
  </div>
</template>

<script>
  import {eventBus} from './main'

  export default {
      props: {
          article: {
              type: Object,
              required: true,
          }
      },
      methods: {
          share(media){
              eventBus.$emit('articleHasShared', {
                  media: media,
                  article: this.article,
              })

              this.$emit('articleHasShared', {
                  media: media,
              })
          }
      }
  }
</script>
