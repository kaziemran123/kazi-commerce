<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated :class="$q.dark.isActive ? 'bg-secondary' : 'bg-black'">
      <q-toolbar>
        <q-btn flat @click="drawerLeft = !drawerLeft" round dense icon="menu" class="q-px-sm" />
        <q-icon name="shopping_cart_checkout" />Bikroy
        <q-btn flat no-caps label="All adds" @click="alladds" />
        <q-btn flat no-caps label="English" @click="onClick" />
        <q-toolbar-title></q-toolbar-title>
        <q-icon name="forum" />
        <q-btn flat no-caps label="chat" @click="inception = true" />
        <q-icon name="person" />
        <q-btn flat no-caps label="Login" @click="inception = true" />
        <q-btn label="POST FREE ADD" @click="inception = true" />
      </q-toolbar>
      <div class="flex flex-center q-py-md">
        <q-btn
          flat
          outline
          no-caps
          color="primary"
          icon="location_on"
          label="All of Bangladesh"
          @click="basic = true"
        />
      </div>

      <div>
        <div class="flex flex-center">
          <div>
            <q-input
              outlined
              rounded
              bg-color="red"
              v-model="search"
              placeholder=" what are you looking for?"
              hint="Debouncing 500ms"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
        </div>
      </div>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> kazi emran </q-item-label>

        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>
    <q-dialog v-model="inception">
      <q-card>
        <q-card-section class="q-pt-none">
          <div>
            <div class="row q-py-md">
              <div class="col q-py-md">
                <div class="text-bold">Post and Ad</div>
                <div>Login to post your ad and keep track off it in your account</div>
                <div class="q-py-md">
                  <q-icon name="sell" />
                  start posting your own ads.
                </div>
                <div class="q-py-md">
                  <q-icon name="vrpano" /> Marks ads facorite and view them later.
                </div>
                <div class="q-py-md">
                  <q-icon name="visibility" />view and manage your ads at your convenience.
                </div>
              </div>
              <div class="col q-py-md">
                <div>
                  <div>
                    Continue whit mobil number and OTP
                    <q-input
                      v-model="text"
                      type="text"
                      outlined
                      placeholder="Enter your mobil number"
                    />
                  </div>
                  <div class="q-py-md">
                    <q-btn
                      color="indigo-9"
                      label="Continue"
                      @click="onClick"
                      style="width: 260px"
                      class="q-py xm"
                    />
                  </div>
                  <div class="flex flex-center">OR</div>
                  <div class="q-py-md">
                    <q-input v-model="text" type="text" label="Continue whith Googl" outlined />
                  </div>
                  <div>
                    <q-input
                      bg-color="red"
                      v-model="text"
                      type="text"
                      label="Continue whith Facebook"
                      outlined
                    />
                  </div>
                  <div class="q-py-md">
                    By signing up for an account you agre to our tems an conditions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Open another dialog" @click="secondDialog = true" />
          <q-btn flat label="Close" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <div>
      <div class="q-pa-md q-gutter-sm">
        <q-btn label="Basic scroll" color="primary" @click="basic = true" />
        <q-btn label="Fixed size" color="primary" @click="fixed = true" />

        <q-dialog v-model="basic" transition-show="rotate" transition-hide="rotate">
          <q-card>
            <q-card-section>
              <div class="text-h6">Select City or Division</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div><a href="All Bangladesh"> All Bangladesh</a></div>
              <div>Clties</div>
              <div><a href="Dhaka">Dhaka</a></div>
              <div><a href="Chattogram">Chattogram</a></div>
              <div><a href="Sylhet"></a>Sylhet</div>
              <div><a href="Kulna"></a>Kulna</div>
              <div><a href="Barishal"></a>Barishal</div>
              <div><a href="Commila"></a> Commila</div>
              <div><a href="Rongpur"></a>Rongpur</div>
              <div><a href="Rajshahi"></a>Rajshahi</div>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="Decline" color="primary" v-close-popup />
              <q-btn flat label="Accept" color="primary" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev',
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework',
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev',
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev',
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev',
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev',
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev',
  },
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false)
    const inception = ref(false)
    const basic = ref(false)

    return {
      linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      inception,
      basic,
    }
  },
})
</script>
