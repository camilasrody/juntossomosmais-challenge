<template>

</template>

<script>
export default {
  data () {
    return {
      isOpen: false,
      searchQuery: ''
    }
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
