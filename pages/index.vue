<template>
  <div>
    <h1>
      Hello World
    </h1>
  </div>
</template>

<script>
export default {
  head () {
    const title = 'Home'
    const desc = 'Discographie Homepage'
    return {
      title,
      meta: {
        hid: 'description',
        name: 'description',
        content: desc
      }
    }
  }
}
</script>
