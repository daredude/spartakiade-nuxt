<template>
  <div class="flex justify-center">
    <div class="w-48">
      <NuxtLink :to="artistLink">
        <img class="w-48 h-48" :src="artist.thumb" :alt="artist.name">
      </NuxtLink>
      <NuxtLink :to="artistLink" class="font-semibold block text-gray-800 hover:underline mt-2">
        {{ artist.title }}
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    artist: {
      type: Object,
      required: true
    }
  },
  computed: {
    artistLink () {
      return `/artists/${this.artist.id}`
    }
  }
}
</script>
