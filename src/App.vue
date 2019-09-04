<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {

  data () {
    return {
      inputValue: '',
      list: []
    }
  },
  methods: {

  }
}
</script>

<style>

</style>
