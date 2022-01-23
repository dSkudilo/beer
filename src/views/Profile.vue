<template>
  <div class="profile card">
    <profile-header
      :profileData="profileData"
      :isLoading="isLoadingProfileData"
    ></profile-header>
    <profile-about
      :profileData="profileData"
      :isLoading="isLoadingProfileData"
    ></profile-about>
    <profile-beer
      :isLoading="isLoadingProfileBeer"
      :beerData="beerData"
      @newBeerHandler="newBeerHandler"
    ></profile-beer>
  </div>
</template>

<script>
import { computed, onMounted, ref } from '@vue/runtime-core'
import { useStore } from 'vuex'

import ProfileHeader from '@/components/profile/ProfileHeader.vue'
import ProfileAbout from '@/components/profile/ProfileAbout.vue'
import ProfileBeer from '@/components/profile/ProfileBeer.vue'
export default {
  setup () {
    const store = useStore()
    const isLoadingProfileData = ref(true)
    const isLoadingProfileBeer = ref(true)

    const newBeerHandler = async () => {
      isLoadingProfileBeer.value = true
      await store.dispatch('beer/getBeerData')
      isLoadingProfileBeer.value = false
    }

    onMounted(async () => {
      await store.dispatch('profile/getProfileData')
      isLoadingProfileData.value = false
      await store.dispatch('beer/getBeerData')
      isLoadingProfileBeer.value = false
    })

    return {
      isLoadingProfileData,
      isLoadingProfileBeer,
      newBeerHandler,
      profileData: computed(() => store.getters['profile/profileData']),
      beerData: computed(() => store.getters['beer/beerData'])
    }
  },
  components: {
    ProfileHeader,
    ProfileAbout,
    ProfileBeer
  }
}
</script>
