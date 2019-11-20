<template>
  <div class="article">
    <h1>{{title}}</h1>
    <p>Published on : {{ published | moment }}</p>

    <p>Total Shares : {{ totalShares }}</p>
    <p class="lead"> {{content}} </p>

    <app-author :author="author"></app-author>

    <app-social :article="$data" @articleHasShared="shared($event)"></app-social>

    <slot>
      <p>This is default slot</p>
    </slot>

    <slot name="top"></slot>
    <slot name="bottom"></slot>
  </div>
</template>



<script>
  import moment from 'moment';
  import Author from "./Author.vue";
  import Social from "./Social";

  export default {
      data() {
          return {
              title: 'Lorem ipsum dolor sit amet',
              published: new Date(),
              content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque blanditiis consequatur, consequuntur, culpa cum cupiditate dicta ea error eum excepturi fuga illo impedit in laborum magnam minima nostrum perspiciatis placeat possimus provident quia quo quod, ratione sapiente sint suscipit tempora tenetur veniam voluptatibus? Atque corporis illum porro? Cumque, soluta.',
              author: {
                  firstName: 'Jhon',
                  lastName: 'Doe',
              },
              totalShares: 0,
          }
      },
      methods: {
          shared(event){
              this.totalShares++
              console.log('Article shared on ' + event.media)
          }
      },
      filters : {
          moment(value) {
              return moment(value).format('MMMM Do')
          }
      },
      components : {
          appAuthor: Author,
          appSocial: Social
      }
  }
</script>

<style>
  *{
    font-style: italic;
  }
</style>

<style scoped>
  * {
    color : red;
  }
  .article {
    text-align: justify;
  }
</style>

