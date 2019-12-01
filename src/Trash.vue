<template>
  <app-messages :messages="trashedMessages"></app-messages>
</template>

<script>
import Messages from "./Messages";

export default {
    props:{
        data: {
            type: Object,
            required: true
        }
    },
    computed: {
        trashedMessages(){
            return this.data.messages.filter((message) => {
                return message.isDeleted
            })
        }
    },
    components: {
        appMessages: Messages
    }
}
</script>
