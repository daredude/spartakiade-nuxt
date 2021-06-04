<template>
  <div>
    <div v-if="$fetchState.error">
      <p>Error</p>
    </div>
    <div v-else-if="$fetchState.pending">
      <p>Loading</p>
    </div>
    <div v-else class="prose">
      <h1>{{ artist.name }}</h1>
      <h2>{{ artist.realname }}</h2>
      <p class="whitespace-pre-wrap max-w-xl" v-text="transformedProfile" />
      <hr>
      <h2>Releases</h2>
      <ul>
        <li v-for="release in releases" :key="release.id">
          {{ release.title }} ({{ release.year }})
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  async fetch () {
    const { id } = this.$route.params
    const [artist, { releases }] = await Promise.all([
      this.$http.$get(`/artists/${id}`),
      this.$http.$get(`/artists/${id}/releases`)
    ])
    this.artist = artist
    this.releases = releases
    this.setBreadcrumbs([
      {
        to: '/artists',
        name: 'Artists'
      },
      {
        to: `/artists/${this.artist.id}`,
        name: this.artist.name
      }
    ])
  },
  data () {
    return {
      artist: {},
      releases: []
    }
  },
  computed: {
    transformedProfile () {
      return this.artist.profile
        ?.replace(/\[b](.*)\[\/b]/g, '$1') // "Bold" marked items
        .replace(/\[a=(.*?)]/g, '$1') // Links to other artists
    }
  },
  methods: {
    setBreadcrumbs (crumbs) {
      this.$store.commit('SET_BREADCRUMB_LINKS', crumbs)
    }
  }
}
</script>
