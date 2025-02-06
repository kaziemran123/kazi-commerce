<template>
  <div>
    <div class="bg-cyan q-pa-md">
      <div class="q-pa-md q-gutter-sm flex flex-center">
        <q-btn flat outline icon="location_on" label="All Bangladesh" @click="fixed = true" />
      </div>
      <div class="row flex-center">
        <div>
          <q-input v-model="search" outlined dense placeholder="Search" style="width: 400px">
            <template v-slot:append>
              <q-icon color="amber-13" name="search" />
            </template>
          </q-input>
        </div>
      </div>
    </div>
    <div>
      <div class="text-bold q-pa-md">
        <div class="q-py-md">Browse items by category</div>
      </div>
      <div>
        <div class="row">
          <div class="col">
            <div class="q-pa-md">
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-avatar>
                    <q-img sizes="50px" src="~assets/category_img/mobile.png" />
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <div>Mobiles</div>
                  <div>1234</div>
                </q-item-section>
              </q-item>
            </div>
            <div class="q-py-md">
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-avatar>
                    <q-img sizes="50px" src="~assets/category_img/home.png" />
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <div>Home and Living</div>
                  <div>1234</div>
                </q-item-section>
              </q-item>
            </div>
            <div>
              <div class="q-py-md">
                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-avatar>
                      <q-img sizes="50px" src="~assets/category_img/sport-ball-football-png.png" />
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <div>Hobbies and sports and kids</div>
                    <div>1234</div>
                  </q-item-section>
                </q-item>
              </div>
              <div>
                <div class="q-py-md">
                  <q-item clickable v-ripple>
                    <q-item-section avatar>
                      <q-avatar>
                        <q-img sizes="50px" src="~assets/category_img/office-bag.png" />
                      </q-avatar>
                    </q-item-section>
                    <q-item-section>
                      <div>Jobes</div>
                      <div>1234</div>
                    </q-item-section>
                  </q-item>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div>
              <div class="q-py-md">
                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-avatar>
                      <q-img sizes="50px" src="~assets/category_img/computer.png" />
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <div>Electronics</div>
                    <div>1234</div>
                  </q-item-section>
                </q-item>
              </div>
              <div>
                <div class="q-py-md">
                  <q-item clickable v-ripple>
                    <q-item-section avatar>
                      <q-avatar>
                        <q-img sizes="50px" src="~assets/category_img/lion-.png" />
                      </q-avatar>
                    </q-item-section>
                    <q-item-section>
                      <div>Pets & Animals</div>
                      <div>1234</div>
                    </q-item-section>
                  </q-item>
                </div>
                <div>
                  <div class="q-py-md">
                    <q-item clickable v-ripple>
                      <q-item-section avatar>
                        <q-avatar>
                          <q-img sizes="50px" src="~assets/category_img/house.png" />
                        </q-avatar>
                      </q-item-section>
                      <q-item-section>
                        <div>Business & Industry</div>
                        <div>1234</div>
                      </q-item-section>
                    </q-item>
                  </div>
                  <div>
                    <div class="q-py-md">
                      <q-item clickable v-ripple>
                        <q-item-section avatar>
                          <q-avatar>
                            <q-img sizes="50px" src="~assets/category_img/keys-tools-.png" />
                          </q-avatar>
                        </q-item-section>
                        <q-item-section>
                          <div>Service</div>
                          <div>1234</div>
                        </q-item-section>
                      </q-item>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div>
              <div class="q-py-md">
                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-avatar>
                      <q-img sizes="50px" src="~assets/category_img/vehicals.png" />
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <div>Vehicles</div>
                    <div>1234</div>
                  </q-item-section>
                </q-item>
              </div>
            </div>
            <div>
              <div class="q-py-md">
                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-avatar>
                      <q-img sizes="50px" src="~assets/category_img/t-shirt-.png" />
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <div>Mens Fashion & Grooming</div>
                    <div>1234</div>
                  </q-item-section>
                </q-item>
              </div>
            </div>
            <div>
              <div class="q-py-md">
                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-avatar>
                      <q-img sizes="50px" src="~assets/category_img/e alphabet.png" />
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <div>Essentials</div>
                    <div>1234</div>
                  </q-item-section>
                </q-item>
              </div>
            </div>
            <div>
              <div class="q-py-md">
                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-avatar>
                      <q-img sizes="50px" src="~assets/category_img/apple-tree.png" />
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <div>Agriculture</div>
                    <div>1234</div>
                  </q-item-section>
                </q-item>
              </div>
            </div>
          </div>
          <div class="col">
            <div>
              <div class="q-py-md">
                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-avatar>
                      <q-img sizes="50px" src="~assets/category_img/home.png" />
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <div>Property</div>
                    <div>1234</div>
                  </q-item-section>
                </q-item>
              </div>
            </div>
            <div>
              <div class="q-py-md">
                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-avatar>
                      <q-img sizes="50px" src="~assets/category_img/t-shirt-.png" />
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <div>womans Fashion & Beauty</div>
                    <div>1234</div>
                  </q-item-section>
                </q-item>
              </div>
            </div>
            <div>
              <div class="q-py-md">
                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-avatar>
                      <q-img
                        sizes="50px"
                        src="~assets/category_img/illustration-flat-cartoon-graduation.png"
                      />
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <div>Education</div>
                    <div>1234</div>
                  </q-item-section>
                </q-item>
              </div>
            </div>
            <div>
              <div class="q-py-md">
                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-avatar>
                      <q-img sizes="50px" src="~assets/category_img/office-bag.png" />
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <div>Overseas Jobes</div>
                    <div>1234</div>
                  </q-item-section>
                </q-item>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="row">
      <div class="col">
        <div class="q-pa-md">
          <q-card class="my-card">
            <div class="q-pa-md">
              <div class="row">
                <div class="col">
                  <div>
                    <q-img
                      src="~assets/category_img/large-money-bag.png"
                      style="width: 250px; height: 250px"
                    />
                  </div>
                </div>
                <div class="col">
                  <div class="text-bold text-h5 q-pa-md">Start making money!</div>
                  <div class="q-pa-md text-weight-thin">
                    Do you something to sell? <br />post your first ad and start making money
                  </div>
                  <div class="q-pa-md">
                    <q-btn
                      color="yellow-13"
                      icon="check"
                      label="post youir ad for free"
                      @click="onClick"
                    />
                  </div>
                </div>
              </div>
            </div>
          </q-card>
        </div>
      </div>
      <div class="col">
        <div class="q-pa-md">
          <q-card class="my-card">
            <div class="q-pa-lg">
              <q-img
                src="~src/assets/category_img/Bikroy.com_Logo.png"
                style="width: 150px; height:"
              />
            </div>
            <div class="text-weight-thin q-pa-md">
              Looking to hire or get hired in Bangladesh ? <br />Get access to 800k+ CV or broswer
              through 800+ jobs Vacancies?
            </div>
            <div class="q-py-lg">
              <div class="q-pa-lg">
                <q-btn
                  color="indigo-6"
                  icon-right="chevron_right"
                  label="Explore More"
                  @click="onClick"
                />
              </div>
            </div>
          </q-card>
        </div>
      </div>
    </div>
  </div>

  <div>
    <div class="q-pa-md">
      <q-list bordered class="rounded-borders">
        <q-expansion-item
          expand-separator
          icon="perm_identity"
          label="Account settings"
          caption="John Doe"
        >
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores culpa impedit ut,
            beatae, alias ducimus, officia sapiente necessitatibus vero optio cumque libero
            deserunt. Ipsum suscipit rem obcaecati voluptate voluptatem numquam. Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Sunt laborum inventore deleniti. Cum ab pariatur
            quo accusantium consequatur minus, placeat ratione suscipit vitae aperiam mollitia
            maiores reprehenderit fugiat. Ipsa, tempore. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Aspernatur odio corporis voluptas animi officiis, quis cupiditate
            ratione possimus molestias unde amet sit ipsum, dolorum provident quaerat temporibus ab.
            In, impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, explicabo!
            Rerum voluptatem repellendus debitis numquam ullam nulla? Eaque cupiditate, architecto
            quae illo voluptatibus animi a nemo laborum similique quo rem.
          </div>
        </q-expansion-item>
      </q-list>
    </div>
  </div>
  <q-dialog v-model="basic" transition-show="rotate" transition-hide="rotate"> </q-dialog>

  <q-dialog v-model="fixed">
    <q-card>
      <q-card-section>
        <div class="text-h6">Select City or Divition</div>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <a href="">Bangladesh</a>
      </q-card-section>
      <q-separator />
      <div class="q-pa-md">
        <div><a href="">Dhaka</a></div>
        <div><a href="">Barishal</a></div>
        <div><a href="">comilla</a></div>
        <div><a href="">Chattogram</a></div>
        <div><a href="">Rajshahi</a></div>
        <div><a href="">Rongpur</a></div>
        <div><a href="">Kulna</a></div>
        <div><a href="">Mymensing</a></div>
      </div>
      <q-card-actions align="right">
        <q-btn flat label="Decline" color="primary" v-close-popup />
        <q-btn flat label="Accept" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ForntPage',

  setup() {
    const leftDrawerOpen = ref(false)
    const inception = ref(false)
    const fixed = ref(false)
    const search = ref(null)

    return {
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      inception,
      fixed,
      search,
    }
  },
})
</script>
