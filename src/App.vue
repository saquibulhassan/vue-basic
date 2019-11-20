<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">

        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="activeView = 'app-home'">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="activeView = 'app-about'">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="activeView = 'app-contact'">Contact</a>
          </li>
        </ul>

        <keep-alive>
          <component :is="activeView"></component>
        </keep-alive>


      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                activeView: 'app-home'
            }
        }
    }
</script>
