<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

const route = useRoute()
const routeName = computed(() => route.name)

const store = useStore()
const userName = computed(() => store.state.user.name)
</script>
<template>{{ routeName }}, {{ userName }}</template>
