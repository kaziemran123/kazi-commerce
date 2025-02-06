<template>
  <div>
    <div>
      <q-card class="my-card">
        <div class="q-pa-md">
          <div class="row">
            <div class="col">
              <div>
                <q-btn
                  flat=""
                  color="primary"
                  icon="location_on"
                  label="Select Loction"
                  @click="onClick"
                  no-caps
                />
              </div>
            </div>
            <div class="col">
              <div>
                <q-btn
                  flat
                  color="primary"
                  icon="send_to_mobile"
                  label="Mobiles"
                  @click="onClick"
                  no-caps
                />
              </div>
            </div>
            <div class="col-4">
              <div>
                <div style="max-width: 350px">
                  <div>
                    <q-input
                      rounded
                      standout
                      bottom-slots
                      v-model="text"
                      placeholder="what are you looking for"
                      counter
                    >
                      <template v-slot:append>
                        <q-icon style="background-color: yellow" name="search" @click="text = ''" />
                      </template>
                    </q-input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <q-separator color="grey-2" />
        <div class="row">
          <div class="col">
            <div class="q-pa-md">
              <div class="text-weight-thin q-pa-md">Type of poster</div>
              <div style="width: 200px">
                <div>
                  <q-select
                    outlined
                    dense
                    v-model="category"
                    :options="categoryOptions"
                    label="All"
                  />
                </div>
              </div>
            </div>
            <div>
              <div class="q-pa-md">
                <div class="text-weight-thin q-pa-md">Filter ads by</div>
                <div>
                  <q-checkbox v-model="customModel" color="secondary" label="URGENT" />
                  <div>
                    <q-checkbox v-model="customModel" color="secondary" label="FEATURED" />
                  </div>
                </div>
              </div>
            </div>
            <div class="q-pa-md">
              <div class="text-weight-thin q-pa-md">Type of poster</div>
              <div style="width: 200px">
                <div>
                  <q-select
                    outlined
                    dense
                    v-model="category"
                    :options="categoryOptions"
                    label="All"
                  />
                </div>
              </div>
            </div>
            <div class="q-pa-md" style="width: 240px">
              <q-select
                v-model="category"
                :options="categoryOptions"
                label="category"
                filled
                outlined
              />
            </div>
            <div>
              <div class="q-pa-md">
                <q-btn-dropdown label="Loction" no-caps style="width: 200px" flat>
                  <q-list>
                    <q-item clickable v-close-popup @click="onItemClick">
                      <q-item-section>
                        <q-item-label><div class="text-bold">All Bangladesh</div></q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </div>
            </div>
          </div>
          <div></div>
          <div class="col-6">
            <div>
              <ProductCaroselAds />
            </div>
            <div>
              <div>
                <q-card
                  flat
                  class="my_product_card q-pa-sm"
                  v-for="disco in productArray"
                  :key="disco"
                >
                  <div class="row">
                    <div class="col-4">
                      <div>
                        <q-img :src="disco.image" style="width: 150px; height: 150px" />
                      </div>
                    </div>
                    <div class="col-8">
                      <div>{{ disco.name }}</div>
                      <div>{{ disco.location }}</div>
                      <div class="text-blue text-bold">{{ disco.price }}</div>
                    </div>
                  </div>
                </q-card>
              </div>
            </div>
          </div>
          <div class="col-2">kkkk</div>
        </div>
      </q-card>
    </div>
  </div>
</template>

<script>
import ProductCaroselAds from 'src/components/ProductCaroselAds.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: { ProductCaroselAds },
  name: 'MobilesPage',

  setup() {
    const search = ref(null)
    const customModel = ref('no')
    const categoryOptions = ref(['Member', 'Authorized dealers', 'no-members'])
    const category = ref('')
    const onItemClick = ref('')
    const productArray = ref([
      {
        id: 1,
        price: '$2000',
        name: 'All',
        location: 'Mr Bezi',
        image:
          'https://i.bikroy-st.com/apple-iphone-14-pro-max-256-gb-usa-used-for-sale-khulna-division/23f13443-8f83-4c57-9ab2-ce4becd2b84c/620/466/fitted.jpg',
      },
      {
        id: 2,
        price: '$2000',
        name: 'Kangal',
        location: 'Mr Kangal',
        image:
          'https://i.bikroy-st.com/apple-iphone-13-128-used-for-sale-rangpur-division-9/6dba28d3-5ad9-433e-86dc-ca7d0157ea02/620/466/fitted.jpg',
      },
      {
        id: 3,
        price: '$2000',
        name: 'Adhapatan',
        location: 'Mr Adhopaton',
        image:
          'https://i.bikroy-st.com/apple-iphone-16-pro-max-256gb-deal-new-for-sale-dhaka/c73e9b75-7b1a-4e17-a8b2-8d074582967f/780/585/fitted.jpg',
      },
      {
        id: 4,
        price: '$2000',
        name: 'Homeless',
        location: 'Mr Homeless',
        image:
          'https://i.bikroy-st.com/apple-iphone-14-pro-max-used-for-sale-dhaka-1706/0a0e0059-ec20-457e-8ef4-f3daa832973a/780/585/fitted.jpg',
      },
    ])

    return {
      toggleLeftDrawer() {},
      search,
      customModel,
      categoryOptions,
      category,
      onItemClick,
      productArray,
    }
  },
})
</script>
<style scoped lang="scss">
.my_product_card {
  border: 1px solid red;
  border-radius: 10px;
  margin-top: 10px;
}
</style>
