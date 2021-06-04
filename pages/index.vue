<template>
  <div>
    <h1>
      Hello World
    </h1>
  </div>
</template>

<script>
export default {
  fetch () {
    this.setBreadcrumbs([])
  },
  head () {
    return {
      title: 'Artists'
    }
  }
}
</script>
