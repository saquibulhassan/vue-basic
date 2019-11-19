<template>
  <div>
    <div class="alert alert-info">
      <strong>Notice!</strong> Site will be down on {{date}} for {{duration}} due to maintenance purpose.
    </div>

    <div class="alert alert-info">
      {{ articleTitle }}
    </div>
  </div>
</template>

<script>
    import {eventBus} from './main'

    export default {
        data() {
            return {
                date: '2019-11-15',
                duration: '2 Hours',
                articleTitle: '',
            }
        },
        created() {
            eventBus.$on('articleHasShared', (data) => {
                this.articleTitle = data.article.title
            });
        }
    }
</script>

