<template>
  <div id="app">
<!--    <input v-model="inputValue">-->
<!--    <button @click="handleSubmit">提交</button>-->
<!--    <ul>-->
<!--&lt;!&ndash;      <li v-for="(item, index) of list" :key="index">{{item}}</li>&ndash;&gt;-->
<!--      <todo-list v-for="(item, index) of list"-->
<!--                 :key="index"-->
<!--                 :item="item"-->
<!--                 :index="index"-->
<!--                 @delete="Delete"></todo-list>-->
<!--    </ul>-->
    <router-view></router-view>
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
