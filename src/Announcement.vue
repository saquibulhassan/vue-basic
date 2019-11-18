<template>
  <div class="alert alert-info">
    <strong>Notice!</strong> Site will be down on {{date}} for {{duration}} due to maintenance purpose.
  </div>
</template>

<script>
export default {
    data(){
        return {
            date: '2019-11-15',
            duration: '2 Hours'
        }
    }
}
</script>

