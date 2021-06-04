<template>
  <div>
    <Navbar/>
    {{ $route.params.id }}
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>