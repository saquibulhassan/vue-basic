<template>
  <div>
    <announcement></announcement>

    <app-article>
      <p>This is default slot</p>
      <p slot="top">This is top slot</p>
      <p slot="bottom">This is bottom slot</p>
    </app-article>
  </div>
</template>

<script>
    import Announcement from "./Announcement";
    import Article from "./Article";

    export default {
        components: {
            announcement: Announcement,
            appArticle: Article
        }
    }
</script>
