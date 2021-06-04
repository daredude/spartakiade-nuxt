<template>
  <div v-show="breadcrumbs.length > 1" class="mb-4">
    <nav class="sm:hidden">
      <NuxtLink
        :to="breadcrumbs.length ? breadcrumbs[0].to : '/'"
        class="flex items-center text-sm leading-5 font-medium text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out"
      >
        <svg class="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
        Back
      </NuxtLink>
    </nav>
    <nav class="hidden sm:flex items-center text-sm leading-5 font-medium">
      <template v-for="({to, name}, i) in breadcrumbs">
        <NuxtLink :key="to" :to="to" class="text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out">
          {{ name }}
        </NuxtLink>
        <svg
          v-if="i < (breadcrumbs.length - 1)"
          :key="`${to}svg`"
          class="flex-shrink-0 mx-2 h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </template>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    breadcrumbs () {
      return this.$store.state.breadcrumbLinks
    },
    hasBreadcrumbs () {
      return this.breadcrumbs.length
    }
  },
  head () {
    if (!this.hasBreadcrumbs) {
      return {}
    }
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: this.breadcrumbs.map(({ name, to }, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name,
        item: (i === this.breadcrumbs.length - 1) ? undefined : `http://localhost:3000${to}`
      }))
    }
    return {
      script: [
        {
          type: 'application/ld+json',
          json: breadcrumbSchema
        }
      ]
    }
  }
}
</script>
