<template>
  <aside class="sm-side">
    <div class="user-head">
      <img src="src/assets/logo.png" width="50">

      <div class="user-name">
        <h5>Jhon Doe</h5>
        <span class="email-address">jhon@example.com</span>
      </div>
    </div>

    <div class="compose-wrapper">
      <app-compose></app-compose>
    </div>

    <ul class="inbox-nav">
      <li :class="{active: activeView == 'app-inbox'}">
        <a href="#" @click.prevent="changeView('app-inbox', 'Inbox')">
          <i class="fa fa-inbox"></i>Inbox <span class="label label-danger pull-right">{{ unreadMessages.length }}</span>
        </a>
      </li>

      <li :class="{active: activeView == 'app-sent'}">
        <a href="#" @click.prevent="changeView('app-sent', 'Sent')">
          <i class="fa fa-envelope-o"></i>Sent <span class="label label-default pull-right">{{ sentMessages.length }}</span>
        </a>
      </li>

      <li :class="{active: activeView == 'app-important'}">
        <a href="#" @click.prevent="changeView('app-important', 'Important')">
          <i class="fa fa-bookmark-o"></i>Important <span class="label label-warning pull-right">{{ importantMessages.length }}</span>
        </a>
      </li>

      <li :class="{active: activeView == 'app-trash'}">
        <a href="#" @click.prevent="changeView('app-trash', 'Trash')">
          <i class=" fa fa-trash-o"></i>Trash <span class="label label-default pull-right">{{ trashedMessages.length }}</span>
        </a>
      </li>
    </ul>
  </aside>
</template>

<script>
    import { eventBus } from "./main";
    import Compose from "./Compose";

    export default {
        created(){
            /**
             * Set active class
             * Event emitted from Sidebar.vue component
             *
             * @property {object} data Component tag & title
             */
            eventBus.$on('changeView', (data) => {
                this.activeView = data.tag;
            })
        },
        props: {
          messages: {
              type: Array,
              required: true
          }
        },
        data(){
            return {
                activeView: 'app-inbox'
            }
        },
        methods: {
            changeView(viewName, title){
                /**
                 * Switching between component (Inbox, Important, Sent, Trash, ViewMessage)
                 * Event listened on Content.vue & Sidebar.vue component
                 *
                 * @property {object} data Component tag & title
                 */
                eventBus.$emit('changeView', {
                    tag: viewName,
                    title: title
                })
            }
        },
        computed: {
            unreadMessages(){
                return this.messages.filter((message) => {
                    return message.type === 'incoming' && !message.isRead && !message.isDeleted
                })
            },
            importantMessages() {
                return this.messages.filter((message) => {
                    return message.type === 'incoming' && message.isImportant && !message.isDeleted
                })
            },
            sentMessages() {
                return this.messages.filter((message) => {
                    return message.type === 'outgoing' && !message.isDeleted
                })
            },
            trashedMessages() {
                return this.messages.filter((message) => {
                    return message.isDeleted
                })
            },
        },
        components: {
          appCompose: Compose
        }
    }
</script>
