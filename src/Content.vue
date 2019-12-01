<template>
  <aside class="lg-side">
    <div class="inbox-head">
        <h3>{{currentView.title}}</h3>
    </div>

    <keep-alive>
      <component :is="currentView.tag" :data="currentView.data"></component>
    </keep-alive>

  </aside>
</template>

<script>
    import Inbox from "./Inbox";
    import Important from "./Important";
    import Sent from "./Sent";
    import Trash from "./Trash";
    import ViewMessage from "./ViewMessage";
    import {eventBus} from "./main";

    export default {
        created(){
            /**
             * Switching between component (Inbox, Important, Sent, Trash, ViewMessage)
             * Event emitted from Sidebar.vue component
             *
             * @property {object} data Component tag & title
             */
            eventBus.$on('changeView', (data) => {
                let temp = [{
                    tag: data.tag,
                    title: data.title,
                    data: data.data || {},
                }]

                this.history = temp.concat(this.history.splice(0))
            })
        },
        props: {
          messages: {
              type: Array,
              required: true,
          }
        },
        data() {
            return {
                history: [
                    {
                        title: 'Inbox',
                        tag: 'app-inbox',
                        data: {
                            messages: null
                        }
                    }
                ]
            }
        },
        computed: {
            currentView(){
                let temp = this.history[0]
                temp.data.messages = this.messages
                return temp
            },
            previousView() {
              return typeof this.history[1] !== 'undefined' ? this.history[1] : null;
            }
        },
        components: {
            appInbox: Inbox,
            appSent: Sent,
            appImportant: Important,
            appTrash: Trash,
            appViewMessage: ViewMessage,
        }
    }
</script>
