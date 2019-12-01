<template>
  <div>
    <a class="btn btn-compose" href="#" @click.prevent="showComposeForm()">Compose</a>

    <div aria-hidden="true" class="modal fade" id="composeModal" role="dialog" style="display: none;" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">New Message</h4>
            <button aria-hidden="true" class="close" data-dismiss="modal" type="button">&times;</button>
          </div>

          <div class="modal-body">
            <form @submit.prevent="sendMessage" class="form-horizontal" role="form">
              <div class="form-group">
                <label class="col-lg-2 control-label" for="subject">Subject</label>
                <div class="col-lg-10">
                  <input class="form-control" id="subject" type="text" v-model="message.subject">
                </div>
              </div>

              <div class="form-group">
                <label class="col-lg-2 control-label" for="message">Message</label>
                <div class="col-lg-10">
                  <textarea class="form-control" cols="30" id="message" rows="10" v-model="message.content"></textarea>
                </div>
              </div>

              <div class="form-group">
                <div class="col-lg-offset-2 col-lg-10">
                  <button class="btn btn-send" type="submit">Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment';
  import {eventBus} from './main';

  export default {
    data() {
      return {
        message: {
          subject: '',
          content: ''
        }
      };
    },
    methods: {
      sendMessage() {
        eventBus.$emit('sentMessage', {
          message: {
            subject: this.message.subject,
            content: this.message.content,
            isDeleted: false,
            type: 'outgoing',
            date: moment(),
            from: {
              name: 'Jhon Doe',
              email: 'jhon@example.com'
            },
            attachments: []
          }
        });

        $("#composeModal").modal('hide');
      },
      showComposeForm() {
        this.message = {
            subject: '',
            content: ''
        }

        $("#composeModal").modal('show');
      }
    }
  }
</script>
