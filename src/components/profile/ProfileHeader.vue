<template>
  <div class="profile-header">
    <h1 class="profile-header__title">Профиль</h1>
    <div class="profile-header__content">
      <div class="profile-header__avatar">
        <img
          :src="profileData.avatar"
          alt="avatar"
          v-if="!isLoading"
        >
      </div>
      <div class="profile-header__info">
        <app-skeleton-text :isLoading="isLoading">
          First name: {{profileData.first_name}}
        </app-skeleton-text>
        <app-skeleton-text :isLoading="isLoading">
          Last name: {{profileData.last_name}}
        </app-skeleton-text>
        <app-skeleton-text :isLoading="isLoading">
          Username: {{profileData.username}}
        </app-skeleton-text>
        <app-skeleton-text :isLoading="isLoading">
          Email: {{profileData.email}}
        </app-skeleton-text>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'profileData',
    'isLoading'
  ]
}
</script>
