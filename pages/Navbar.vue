<template>
  <nav class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex px-2 lg:px-0">
          <NuxtLink to="/" class="flex-shrink-0 flex items-center">
            <img class="h-8 w-auto" src="@/assets/logo.png" alt="Workshop App logo">
          </NuxtLink>
          <div class="flex space-x-8 ml-2 lg:ml-6">
            <NuxtLink
              v-for="{to, name} in links"
              :key="to"
              v-slot="{ href, navigate, isActive }"
              :to="to"
              :exact="to === '/'"
            >
              <a
                class="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out"
                :class="isActive ? 'border-indigo-500 text-gray-900 focus:border-indigo-700' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300'"
                :href="href"
                @click="navigate"
              >{{ name }}</a>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data () {
    return {
      links: [
        { name: 'Home', to: '/' },
        { name: 'Artists', to: '/artists/' }
      ]
    }
  }
}
</script>
