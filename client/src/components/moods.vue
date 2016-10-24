<template lang="html">
  <div class="moods-layout" transition="fade-contact">
    <modal :show.sync='showModal' :body="modalBody" @on-confirm="onConfirm"></modal>
</template>

<script>
import Modal from './../directive/modal'
export default {
  data () {
    return {
      showModal: false,
      modalBody: 'hello?'
    }
  },
  computed: {},
  ready () {
    this.showModal = true
  },
  attached () {},
  methods: {
    onConfirm () {
      console.log('this is ok')
    }
  },
  components: {
    Modal
  }
}
</script>

<style lang="css">
</style>
