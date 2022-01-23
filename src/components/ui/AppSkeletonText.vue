<template>
  <app-skeleton-box v-if="isLoading"></app-skeleton-box>
  <p v-else>
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: 'app-skeleton-text',
  props: ['isLoading']
}
</script>
