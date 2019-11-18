<template>
  <div class="article">
    <h1>{{title}}</h1>
    <p>Published on : {{ published | moment }}</p>
    <p class="lead"> {{content}} </p>

    <app-author :author="author"></app-author>
  </div>
</template>



<script>
  import moment from 'moment';
  import Author from "./Author.vue";

  export default {
      data() {
          return {
              title: 'Lorem ipsum dolor sit amet',
              published: new Date(),
              content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque blanditiis consequatur, consequuntur, culpa cum cupiditate dicta ea error eum excepturi fuga illo impedit in laborum magnam minima nostrum perspiciatis placeat possimus provident quia quo quod, ratione sapiente sint suscipit tempora tenetur veniam voluptatibus? Atque corporis illum porro? Cumque, soluta.',
              author: {
                  firstName: 'Jhon',
                  lastName: 'Doe',
              }
          }
      },
      filters : {
          moment(value) {
              return moment(value).format('MMMM Do')
          }
      },
      components : {
          appAuthor: Author
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

