<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">

        <announcement></announcement>

        <app-article>
          <p>This is default slot</p>
          <p slot="top">This is top slot</p>
          <p slot="bottom">This is bottom slot</p>
        </app-article>

      </div>
    </div>
  </div>
</template>

<script>
    export default {}
</script>
