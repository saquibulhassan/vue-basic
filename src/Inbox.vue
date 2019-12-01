<template>
  <div class="inbox-body">
    <div class="mail-option">
      <div class="btn-group">
        <a href="#" class="btn" @click="refresh">
          <i class="fa fa-refresh"></i>&nbsp; Refresh
        </a>
      </div>
    </div>

    <app-messages :messages="inboxMessages"></app-messages>
  </div>
</template>

<script>
  import Messages from "./Messages";
  import {eventBus} from "./main";

  export default {
    props: {
      data: {
        type: Object,
        required: true
      }
    },
    methods: {
      refresh() {
        eventBus.$emit('refreshMessages');
      }
    },
    computed: {
      inboxMessages() {
        return this.data.messages.filter((message) => {
          return message.type === 'incoming' && !message.isDeleted
        })
      }
    },
    components: {
      appMessages: Messages
    },
  }
</script>
