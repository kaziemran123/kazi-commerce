<template>
  <div>
    <div class="q-pa-md text-h6">
      Registration
      <q-separator style="width: 40px; height: 5px" color="red" />
    </div>
    <div>
      <div class="row">
        <div class="col">
          <div class="q-pa-md">
            <div>
              Full Name<q-input
                v-model="text"
                type="text"
                placeholder="Enter your name"
                outlined
                dense
              />
            </div>
            <div>
              Email<q-input
                v-model="text"
                type="text"
                placeholder="Enter your email"
                outlined
                dense
              />
            </div>
            <div>
              Password<q-input
                v-model="text"
                type="text"
                placeholder="Enter your password"
                outlined
                dense
              />
            </div>
          </div>
        </div>
        <div class="col">
          <div class="q-pa-md">
            <div>
              UserName<q-input
                v-model="text"
                type="text"
                placeholder="Enter your username"
                outlined
                dense
              />
            </div>
            <div>
              Phone Number<q-input
                v-model="text"
                type="text"
                placeholder="Enter your number"
                outlined
                dense
              />
            </div>
            <div>
              Confrim Password<q-input
                v-model="text"
                type="text"
                placeholder="Confrim your password"
                outlined
                dense
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="q-pa-md">
      <div class="text-h6 q-px-md">Gender</div>
      <div class="q--xl">
        <q-checkbox v-model="Male" label="Male" />
        <q-checkbox v-model="Femal" label="Female" class="q-px-md" />
        <q-checkbox v-model="Other" label="Other" class="q-px-md" />
      </div>
    </div>
    <div class="q-pa-md">
      <div>
        <q-btn class="full-width" color="primary" label="Registre" @click="register = true" />
      </div>
    </div>
  </div>

  <q-dialog v-model="register" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <q-avatar icon="signal_wifi_off" color="primary" text-color="white" />
        <span class="q-ml-sm">You are currently not connected to any network.</span>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="primary" v-close-popup />
        <q-btn flat label="Turn on Wifi" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'LoginHelli',

  setup() {
    const Male = ref(false)
    const Femal = ref(false)
    const Other = ref(false)
    const register = ref(false)

    return {
      toggleLeftDrawer() {},
      Male,
      Femal,
      Other,
      register,
    }
  },
})
</script>
