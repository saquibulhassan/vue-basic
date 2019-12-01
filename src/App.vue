<template>
  <div class="container">
    <div class="mail-box">
      <app-sidebar :messages="messages"></app-sidebar>
      <app-content :messages="messages"></app-content>
    </div>
  </div>
</template>

<script>
    import Sidebar from "./Sidebar";
    import Content from "./Content";
    import messages from "../data/messages";
    import randomMessages from "../data/random-messages";
    import {eventBus} from "./main";

    export default {
        created() {
            eventBus.$on('refreshMessages', () => {
              let randomIndex = Math.floor(Math.random() * randomMessages.length);
              let temp = [randomMessages[randomIndex]];
              this.messages = temp.concat(this.messages.slice(0));
            });

            eventBus.$on('sentMessage', (data) => {
              let temp = [data.message];
              this.messages = temp.concat(this.messages.slice(0));
            });
        },
        data(){
            return {
                messages: messages,
            }
        },
        components: {
            appSidebar: Sidebar,
            appContent: Content,
        }
    }
</script>
